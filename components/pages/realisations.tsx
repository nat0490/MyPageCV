// "use client";
import React, { useCallback, useEffect, useMemo, useRef, useState} from "react";
import myRealisations from "@/data/realisations";
import Image from "next/image";
import { BeatLoader, MoonLoader} from 'react-spinners';
import { Link, MousePointerClick,Cog } from 'lucide-react';
import { useTheme } from "next-themes";
// import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const Realisations: React.FC<({ realisationsVisible: boolean })> = ({ realisationsVisible }) => {
    const { theme, setTheme } = useTheme();

    // const realisationsReverse = [...myRealisations].reverse();
    const realisationsReverse = useMemo(() => [...myRealisations].reverse(), []);
    // console.log(realisationsReverse);

    const [mounted, setMounted] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number[]>([]); 
    const intervalIdRef = useRef<NodeJS.Timeout | null>(null); 

//REALISATIONS VISIBLE A L'ECRAN
    const [visibleRealisations, setVisibleRealisations] = useState<number[]>([]); // Définir le type de l'état comme un tableau de nombres
    const refs = useRef<React.RefObject<HTMLDivElement>[]>(realisationsReverse.map(() => React.createRef<HTMLDivElement>()));

    useEffect(() => {
        if(realisationsVisible) {
            const currentRefs = refs.current;
            const observers = currentRefs.map((ref, index) => {
                const observer = new IntersectionObserver(([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleRealisations((prev) => [...prev, index]);
                    } else {
                        setVisibleRealisations((prev) => prev.filter((i) => i !== index));
                    }
                }, { threshold: 0.5 });
        
                if (ref.current) {
                    observer.observe(ref.current);
                }        
                return observer;
            });
            return () => {
                observers.forEach(observer => observer.disconnect());
            };
        }        
    }, [realisationsVisible]);   

//MONTAGE COMPOSANT
    useEffect(() => {
        setMounted(true);
    }, []);

    // const handleNextImage = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex.map((index, i) => (index + 1) % realisationsReverse[i].image.length)
    //     );
    // };

    const handleNextImage = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex.map((index, i) => (index + 1) % realisationsReverse[i].image.length)
        );
    }, [realisationsReverse]);
    
//INITALISATION INDEX POUR AFFICHAGE IMAGE + INTERVAL
    useEffect(() => {
        if (!mounted) return;
        setCurrentIndex(realisationsReverse.map(() => 0));
        intervalIdRef.current = setInterval(handleNextImage, 3000);
        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        };
    }, [mounted, realisationsReverse, handleNextImage]);
  
//LIENS VIDEOS
    const videos = (video: string[]) => {
        const allVideos = [];
        for (let i = 0; i < video.length; i++) {
            const v = video[i];
            allVideos.push(                  
                    <a  key={`${i}`}
                        href={v}
                        className="text-small-caps font-bold text-center text-pink-400 hover:text-pink-600 hover:cursor-pointer flex"
                        target="_blank" 
                        rel="noopener noreferrer"
                    > DEMO VIDEO {i +1}
                        <MousePointerClick color={`${theme === 'dark' ? "#fff" : "#000" }`} className="mt-1.5 ml-1"/> 
                    </a>                              
            )
        }
        return allVideos;
    };

//DESCRIPTION
    const [truncatedTexts, setTruncatedTexts] = useState<boolean[]>([]);
    useEffect(() => {
        const initialTruncatedTexts = realisationsReverse.map(realisation => true);
        // console.log(initialTruncatedTexts);
        setTruncatedTexts(initialTruncatedTexts);
    }, [realisationsReverse]);
     const toggleDescription = (index: number) => {
        setTruncatedTexts(prevTexts => {
            return prevTexts.map((isTruncated, i) => {
                if (i === index) {
                    return !isTruncated;
                }
                return isTruncated;
            });
        });
    };

//TECHNO
    const allTech = (tech: string[]) => {
        const allTechs = [];
        for (let i = 0; i < tech.length; i++) {
            const t = tech[i];
            allTechs.push(
                <span key={`${i}`} className="flex flex-nowrap mr-1 text-sm">{t} </span>
            )
        }
        return allTechs;
    }

//LIENS
    // const links = (link: string[]) => {
    //     const allLinks = [];
    //     for (let i = 0; i < link.length; i++) {
    //         const l = link[i];
    //         allLinks.push(                  
    //             <a  key={`${i}`}
    //                 href={l}
    //                 className="text-small-caps font-bold text-center text-pink-400 hover:text-pink-600 hover:cursor-pointer text-sm"
    //                 target="_blank" 
    //                 rel="noopener noreferrer"
    //             > {l} </a>                    
    //         )
    //     }
    //     return allLinks;
    // };

//IMAGES
const handleImage = (indexRealisation: number, indexImage: number) => {
    setCurrentIndex(prevIndex => {
        const nextIndex = [...prevIndex];
        nextIndex[indexRealisation] = indexImage;
        return nextIndex;
    });
};

    const allImages = (imgs: string[], indexRealisation: number) => {
        const mainImage = realisationsReverse[indexRealisation].image[currentIndex[indexRealisation]];
        const allImgs = [];
        for (let i = 0; i < imgs.length; i++) {
            const img = imgs[i];
            allImgs.push(
                <div key={i} className="relative w-full" onClick={()=>handleImage(indexRealisation, i)}>
                    <Image                    
                        src={img}
                        alt={`Image ${i}`}
                        fill
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        sizes="100px"
                        // width={100}
                        // height={100}
                        className={`object-cover cursor-pointer transition-transform duration-300 ease-in-out transform ${img === mainImage ? "scale-125" : "scale-100"}`}
                        priority
                    />
                </div>
            )
        }
        return allImgs;
    };
 

//CHANGER LA GRANDE IMAGE AFFICHE
    

    const realisations = () => {
        // const realisationsReverse = realisationsReverse.reverse();
        const allRealisations = [];           
        for (let i = 0; i < realisationsReverse.length; i++) {
            const realisation = realisationsReverse[i];
            const mainImage = realisation.image[currentIndex[i]];
            // console.log(mainImage);
            const isTruncated = truncatedTexts[i];
            const fullText = realisation.description;
            const displayText = isTruncated ? fullText.substring(0, 100) : fullText; 

            allRealisations.push(
                <div key={`${realisation.id}`} ref={refs.current[i]} className={`flex flex-col w-full shrink-0 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 px-1 `}>
                    {/* ${allRealisations.length >= 3 && "xl:w-1/3"}  */}
                    <div className="rounded-xl h-full bg-pink-700/5 p-2 mb-1  ">
                    <h2 className="text-small-caps text-center text-xl m-2 bg-pink-600/10 rounded-lg">
                        {realisation.name}
                    </h2>

                    <div className="flex flex-col  h-72  lg:h-80 xl:h-96 " >
                        {/* <div className="flex flex-col h-72 md:h-48 lg:h-64 xl:h-56 2xl:h-72"> */}
                            <div id="GrandeImage" className="relative h-full w-full">
                                {mainImage? <Image
                                    src={mainImage}
                                    alt={`Image principale ${i}`}
                                    fill
                                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    sizes="500px"
                                    className="absolute inset-0 object-contain w-full h-full "
                                    priority
                                /> :
                                <MoonLoader color="#db2777"/>}
                            </div>
                        {/* </div> */}
                        {realisation.image.length > 1 &&
                                        <div 
                                        id="images" 
                                        className="flex flex-nowrap justify-center h-1/5 space-x-0.5 mt-0.5" 
                                        title="Images"                             
                                        >
                                        {allImages(realisation.image, i)}                            
                                    </div>   
                                    }                 
                    </div> 
                                   
                    <div id="videos" className="flex justify-around mt-3 mb-1" title="Vidéos">
                        {videos(realisation.video)} 
                    </div> 

                    <div 
                        id="descriptionContainer"
                        title="Description"
                        onClick={() => toggleDescription(i)}
                        className={`group cursor-pointer text-center ${theme === 'dark' ? "hover:bg-white/5" : "hover:bg-black/5" } rounded-lg py-1.5 my-0.5`}
                    >
                        <p id="description" className="text-center ">
                            {displayText}{isTruncated && fullText.length > 100 && <span className="group-hover:font-bold group-hover:animate-ping ">... </span>   }
                            
                        </p>
                    </div>
                    <div id="tech" title="Technologies utilisées" className={`flex flex-col items-center border p-0.5 rounded-lg ${theme === 'dark' ? " border-pink-100/10" : " border-pink-800/10" }`}>
                        <Cog size={18} className="m-1 flex"/>
                        <div className="flex flex-wrap text-small-caps justify-center ">
                            {allTech(realisation.tech)}
                        </div>
                    </div>   
                    { (realisation.link[0] === "" && realisation.linkGitHub[0] === "") ? "":
                        <div id="links" className="flex flex-col items-center justify-around mt-1" >
                        <Link size={18} className="m-1"/>                         
                        <div className="flex flex-col items-center " title="lien de la page">
                            { realisation.link[0] !== "" && 
                            <div className="flex flex-col items-center mb-1">
                                <p><span className="underline mr-2 ">App:</span> 
                                    <a    
                                        href={realisation.link.toString()}
                                        className="text-small-caps font-bold text-center text-pink-400 hover:text-pink-600 hover:cursor-pointer text-sm"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    > {realisation.link} </a>      
                                </p>
                                {/* {links(realisation.link)}   */}
                            </div>                                           
                            }

                            { realisation.linkGitHub[0] !== "" && 
                            <div className="flex flex-col items-center">
                                <p><span className="underline mr-2 ">GitHub:</span> 
                                {realisation.linkGitHub.map((link, index) => (                               
                                        <a  key={`${index}`}
                                            href={link}
                                            className="text-small-caps font-bold text-center mr-2 text-pink-400 hover:text-pink-600 hover:cursor-pointer text-sm"
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        > Lien {index +1} </a>  
                                    
                                ))}</p>

                                {/* {links(realisation.linkGitHub)}   */}
                            </div>                                           
                            }


                        </div>
                    </div>
                    }                 
                    
                    </div>
                </div>
            );
        }
        return allRealisations;
    };

    if (!mounted) return <BeatLoader color="#db2777"/>;

    return (
        <section className="w-full">
            <h1 className="text-pink-600 text-small-caps text-center text-5xl mb-6 "> Réalisations </h1>
            <div className="w-full flex justify-center">
                {realisationsReverse.map((realisation, i) => (
                    <span
                        key={realisation.id}
                        className={`m-1 p-2 rounded-full transition duration-500 ease-in-out ${visibleRealisations.includes(i) ? 'bg-pink-600' : 'bg-pink-200'}`}
                    ></span>
                ))}
            </div>
            {/* <div className="mb-4 w-full"> */}
                <div className={`w-full flex flex-nowrap overflow-x-auto ${realisationsReverse.length < 3 ? 'md:justify-center' : ""}  scrollbar  scrollbar-thumb-pink-600/50 ${theme ==="light" ?  "scrollbar-track-pink-100/50  " : " scrollbar-track-pink-950/50"}`}>
                {/* scrollbar-thumb-rounded-full */}
                    {realisations()}
                </div>            
            {/* </div> */}
        </section>
    );
};

export default Realisations;