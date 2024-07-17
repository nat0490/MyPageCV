// "use client";
import React, { useEffect, useRef, useState} from "react";
import myRealisations from "@/data/realisations";
import Image from "next/image";
import { BeatLoader} from 'react-spinners';
import { Link, MousePointerClick,Cog } from 'lucide-react';
import { useTheme } from "next-themes";

const Realisations: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number[]>([]); 
    const intervalIdRef = useRef<NodeJS.Timeout | null>(null); 


//MONTAGE COMPOSANT
    useEffect(() => {
        setMounted(true);
    }, []);

//INITALISATION INDEX POUR AFFICHAGE IMAGE + INTERVAL
    useEffect(() => {
        if (!mounted) return;
        setCurrentIndex(myRealisations.map(() => 0));
        intervalIdRef.current = setInterval(handleNextImage, 3000);
        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        };
    }, [mounted]);

//PREMIER ESSAI => DEFILEMENT D'IMAGES
    // const scrollRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     if (!mounted) return;
    //     const scrollContainer = scrollRef.current;
        
    //     if(!scrollContainer) return;

    //     console.log(scrollContainer);
    //     console.log(scrollRef);

    //     let scrollAmount = 0;
    //     const scrollStep = 100; // vitesse de défilement en pixels       


    //     const scrollInterval = setInterval(() => {
    //     if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
    //         scrollAmount = 0; // reset to the start
    //     } else {
    //         scrollAmount += scrollStep;
    //         scrollContainer.scrollLeft = scrollAmount;
    //     }
    //     }, 100); // roughly 60 frames per second

    //     return () => clearInterval(scrollInterval);
    // }, [mounted, scrollRef]);

  
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
        const initialTruncatedTexts = myRealisations.map(realisation => true);
        // console.log(initialTruncatedTexts);
        setTruncatedTexts(initialTruncatedTexts);
    }, []);
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
                <span key={`${i}`} className="flex flex-nowrap mr-1">{t} </span>
            )
        }
        return allTechs;
    }

//LIENS
    const links = (link: string[]) => {
        const allLinks = [];
        for (let i = 0; i < link.length; i++) {
            const l = link[i];
            allLinks.push(                  
                <a  key={`${i}`}
                    href={l}
                    className="text-small-caps font-bold text-center text-pink-400 hover:text-pink-600 hover:cursor-pointer text-sm"
                    target="_blank" 
                    rel="noopener noreferrer"
                > {l} </a>                    
            )
        }
        return allLinks;
    };

//IMAGES

const handleImage = (indexRealisation: number, indexImage: number) => {
    setCurrentIndex(prevIndex => {
        const nextIndex = [...prevIndex];
        nextIndex[indexRealisation] = indexImage;
        return nextIndex;
    });
};

    const allImages = (imgs: string[], indexRealisation: number) => {
        const allImgs = [];
        for (let i = 0; i < imgs.length; i++) {
            const img = imgs[i];
            allImgs.push(
                <div key={i} className="relative w-full" onClick={()=>handleImage(indexRealisation, i)}>
                    <Image                    
                        src={img}
                        alt={`Image ${i}`}
                        // layout="responsive"
                        // width={500} 
                        // height={500} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-150"
                        priority
                    />
                </div>
            )
        }
        return allImgs;
    };
 

//CHANGER LA GRANDE IMAGE AFFICHE
    const handleNextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex.map((index, i) => (index + 1) % myRealisations[i].image.length)
        );
    };

    const realisations = () => {
        const allRealisations = [];           
        for (let i = 0; i < myRealisations.length; i++) {
            const realisation = myRealisations[i];
            const mainImage = realisation.image[currentIndex[i]];
            const isTruncated = truncatedTexts[i];
            const fullText = realisation.description;
            const displayText = isTruncated ? fullText.substring(0, 150) : fullText; 

            allRealisations.push(
                <div key={`${realisation.id}`} className={` flex flex-col w-full md:shrink md:w-1/2 xl:w-1/3`}>
                    {/* ${allRealisations.length >= 3 && "xl:w-1/3"}  */}
                    <div className="rounded-xl h-full bg-pink-700/5 p-2">
                    <h2 className="text-small-caps text-center text-xl m-2 bg-pink-600/10 rounded-lg">
                        {realisation.name}
                    </h2>

                    <div className="flex flex-col  h-72  lg:h-80 xl:h-96 " >
                        {/* <div className="flex flex-col h-72 md:h-48 lg:h-64 xl:h-56 2xl:h-72"> */}
                            <div id="GrandeImage" className="relative h-full w-full">
                                <Image
                                    src={mainImage}
                                    alt={`Image principale ${i}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="absolute inset-0 object-contain w-full h-full "
                                    priority
                                />
                            </div>
                        {/* </div> */}
                        <div 
                            id="images" 
                            // ref={scrollRef} 
                            // className="flex flex-nowrap h-72 md:h-48 lg:h-64 xl:h-56 2xl:h-72 overflow-x-auto  "
                            className="flex flex-nowrap justify-center h-1/5 space-x-0.5 mt-0.5"                              
                            >
                            {allImages(realisation.image, i)}                            
                        </div>                         
                    </div> 

                    <div id="videos" className="flex justify-around my-2">
                        {videos(realisation.video)} 
                    </div> 

                    <div 
                        id="descriptionContainer"
                        onClick={() => toggleDescription(i)}
                        className={`group cursor-pointer text-center ${theme === 'dark' ? "hover:bg-white/5" : "hover:bg-black/5" } rounded-lg py-1.5 my-0.5`}
                    >
                        <p id="description" className="text-center ">
                            {displayText}{isTruncated && fullText.length > 150 && <span className="group-hover:font-bold group-hover:animate-ping ">... </span>   }
                            
                        </p>
                    </div>
                    <div id="tech" className={`flex flex-col items-center border p-0.5 rounded-lg ${theme === 'dark' ? " border-pink-100/10" : " border-pink-800/10" }`}>
                        <Cog className="m-1 flex"/>
                        <div className="flex flex-wrap text-small-caps justify-center">
                            {allTech(realisation.tech)}
                        </div>
                    </div>                    
                    <div id="links" className="flex flex-col items-center justify-around" >
                        <Link className="m-1"/>                         
                        <div className="flex flex-col items-center ">
                            { realisation.link[0] !== "" && 
                            <div className="flex flex-col items-center mb-1">
                                <p className="underline ">Lien de l&apos;app:</p>  
                                {links(realisation.link)}  
                            </div>                                           
                            }
                            <div className="flex flex-col items-center ">
                                <p className="underline">Liens GitHub:</p>  
                                {links(realisation.linkGitHub)}                               
                            </div>  
                        </div>
                    </div>
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
            <div className="mb-4 w-full">
                <div className="w-full flex flex-nowrap overflow-x-auto justify-center space-x-3">

                    {realisations()}
                    
                </div>            
            </div>
        </section>
    );
};

export default Realisations;