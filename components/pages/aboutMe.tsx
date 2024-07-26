import React, { useEffect, useMemo, useRef, useState } from "react";
import monParcours from "@/data/monParcours";
import { useTheme } from "next-themes";
import { BeatLoader } from "react-spinners";
import { Baby, BriefcaseBusiness, GraduationCap, Library, Eye, SkipBack, SkipForward, MapPin, ChevronsRight, ChevronsLeft } from "lucide-react";

const AboutMe: React.FC<({ aboutMeVisible: boolean})> = ({ aboutMeVisible }) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false); 
    // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth); 

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const parcourReverse = useMemo(() => [...monParcours].reverse(), []);
      
//MONTAGE COMPOSANT
    useEffect(() => {
        setMounted(true);
    }, []);
  
//LARGUEUR ECRAN POUR STYLE
    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowWidth(window.innerWidth);
    //     };
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

//SCROLL PARCOURS  
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
        }     
    },[]);


    //EXPERIENCE VISIBLE A L'ECRAN
    const [visibleExp, setVisibleExp] = useState<number[]>([]); // Définir le type de l'état comme un tableau de nombres
    const refs = useRef<React.RefObject<HTMLDivElement>[]>(parcourReverse.map(() => React.createRef<HTMLDivElement>()));

    // console.log(visibleExp);

    useEffect(() => {
        if(aboutMeVisible) {
            const currentRefs = refs.current;
            // console.log(currentRefs);
            const observers = currentRefs.map((ref, index) => {
                const observer = new IntersectionObserver(([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleExp((prev) => [...prev, index]);
                    } else {
                        setVisibleExp((prev) => prev.filter((i) => i !== index));
                    }
                }, { threshold: 0.5 });
        
                if (ref.current) {
                    observer.observe(ref.current);
                }  
                // console.log("observer",observer)      
                return observer;

            });
            return () => {
                observers.forEach(observer => observer.disconnect());
            };
        }        
    }, [aboutMeVisible]);   

//POSTES
    const postes = (postes:string[]) => {
        const allPostes=[];
        for (let i = 0; i < postes.length; i++) {
            const poste = postes[i];            
            allPostes.push(
                <p key={i} className={`text-center text-sm font-serif rounded-md px-2 ${theme === "light"? "bg-pink-950/5" : "bg-pink-50/5"}  `}>
                    {poste}
                    {/* {i < postes.length - 1 && ','} */}
                </p>
            );
        }
        return allPostes;
    };

//DESCRIPTION
    const [truncatedTexts, setTruncatedTexts] = useState<boolean[]>([]);
    useEffect(() => {
        const parcoursInverse = [...monParcours].reverse();
        const initialTruncatedTexts = parcoursInverse.map(parcour => true);
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

//COMPETENCES
const competences = (competences: string[]) => {
    return competences.map((com, i) => (
        <p key={i} className="text-start text-sm italic">
            * {com}
        </p>
    ));
};

//SOFT SKILLS
    const softSkills = (skills:string[]) => {
        const allSoftSkills=[];
        for (let i = 0; i < skills.length; i++) {
            const skill = skills[i];            
            allSoftSkills.push(
                <p key={i} className={`text-center text-sm font-serif rounded-md `}>
                    {skill}
                </p>
            );
        }
        return allSoftSkills;
    };


    const parcours = () => {
        // const parcoursInverse = [...monParcours].reverse();
        const allParcours = [];
        for (let i = 0; i < parcourReverse.length; i++) {
            const p = parcourReverse[i];
            const isTruncated = truncatedTexts[i];
            const fullText = p.description;
            const displayText = isTruncated ? fullText.substring(0, 100) : fullText; 

            allParcours.push(
                <div ref={refs.current[i]} key={p.id} className={`pt-2 mb-3 ${p.description === "" ? "w-1/2":"w-full"} sm:w-1/2 md:w-1/3 shrink-0 lg:shrink`}>         
                    {/* {p.id === 1 &&
                        <div className={`h-0.5 mb-2 w-1/2 flex justify-end ${theme === 'light' ? 'bg-pink-300/70' : 'bg-pink-600/70'}`}> 
                            <div className={`size-3 rounded-full -mt-1 ${theme === 'light' ? 'bg-pink-300' : 'bg-pink-600'}`}></div> 
                        </div>}               
                    {p.id === monParcours.length  && 
                        <div className="flex">
                            <div className="w-1/2"> </div>
                            <div className={` h-0.5 mb-2 w-1/2 flex justify-start ${theme === 'light' ? 'bg-pink-300/70' : 'bg-pink-600/70'}`}> 
                                <div className={`size-3 rounded-full -mt-1 ${theme === 'light' ? 'bg-pink-300' : 'bg-pink-600'}`}></div>    
                            </div>
                        </div>}
                    {p.id !== 1 && p.id !== monParcours.length && 
                        <div className={`h-0.5 mb-2 flex justify-center ${theme === 'light' ? 'bg-pink-300/70' : 'bg-pink-600/70'}`}> 
                            <div className={`size-3 rounded-full -mt-1 ${theme === 'light' ? 'bg-pink-300' : 'bg-pink-600'}`}></div> 
                        </div> } */}
                    <div  className=" text-center h-full p-1 mx-2" title="Période">
                        <div className="w-full whitespace-nowrap italic text-sm">
                            {p.date.debut === p.date.fin ? p.date.debut : `${p.date.debut} - ${p.date.fin}`}
                        </div>
                        <div id="type"className="flex justify-center m-1.5 shrink-0">
                            {p.type === "diplome" && <div title="Diplôme"><GraduationCap /></div>}
                            {p.type === "etude" && <div title="Etude"><Library /></div>}
                            {p.type === "travail" && <div title="Travail"><BriefcaseBusiness  /></div>}
                            {p.type === "look" && <div title="Observation"><Eye /></div>}                        
                        </div>
                        <h2 >{p.nom}</h2>
                        <div id="postes" className="mb-2 flex flex-wrap items-center justify-center space-x-2" title="Postes occupé">
                            {postes(p.postes)}
                        </div>                    
                        <div id="lieu"className="text-small-caps mb-2 flex justify-center" title="Lieu">
                            <MapPin className="p-1 shrink-0"/>
                            {p.lieu}
                        </div>              
                        <div 
                            id="descriptionContainer"
                            title="Description"
                            onClick={() => toggleDescription(i)}
                            className={`group text-center cursor-pointer ${fullText.length > 100 ? (theme === 'dark' ? "hover:bg-pink-100/5 cursor-pointer" : "hover:bg-pink-950/5 cursor-pointer" ) : ""} rounded-lg py-1.5 my-0.5 `}
                        >
                            <p id="description" className="text-center ">
                                {displayText}
                                {/* {isTruncated && fullText.length > 100 && <> < span className="group-hover:font-bold group-hover:animate-ping "> ... </span> <span className="text-sm text-gray-500">(cliquer pour lire la suite)</span> </> } */}
                                {isTruncated && fullText.length > 100 && (
                                    <span className="">
                                        <span className="font-bold animate-ping">...</span>
                                        <span className="inline-block right-0 -bottom-1 text-sm text-gray-500 group-hover:text-pink-500">(cliquer pour lire la suite)</span>
                                    </span>
                                )}
                                {!isTruncated &&                            
                                    p.competences[0] !== "" && 
                                        <div className="my-2">
                                            {competences(p.competences)}
                                        </div>                           
                                } 
                            </p>
                        </div>
                        {p.softSkills[0] !== ""&& <div>
                            <div className="border-t mx-14 border-pink-600/40 mb-1">
                            </div>
                            <div className="flex flex-wrap justify-center space-x-2 " title="Soft Skills">
                            {softSkills(p.softSkills)}
                            </div>
                            <div className="border-t mx-14 border-pink-600/40 mt-1"></div>
                        </div>}

                        {/* <div className={`${(i!==0 || i !== monParcours.length) && "flex justify-between"} `}>
                           { i !== 0 && <span className="flex justify-start ml-2">
                                <ChevronsLeft />                 
                            </span>} 
                            <span className="w-full flex justify-end mr-2">
                                <ChevronsRight />                 
                            </span>   
                        </div> */}
                        
                    </div>
                </div>            
        )}
        return allParcours;
    };



    if (!mounted) return <BeatLoader color="#db2777"/>;

    return (
        <section className="w-full ">
            <h1 className="text-pink-600 text-small-caps text-right text-5xl mb-4 mr-4 sm:mr-32 "> Mon parcours </h1>  
             
            {/* {windowWidth < 1024 &&
            <div className="flex justify-center space-x-4">
                <div className="hover:scale-150 cursor-pointer p-1 mx-1 " onClick={handleSkipBack}>
                    <SkipBack />
                </div> 
                <div className="hover:scale-150 cursor-pointer p-1 mx-1 " onClick={handleSkipForward}>
                    <SkipForward />
                </div>
            </div>}             */}

{/* <div className={`h-0.5 mb-2 flex justify-center ${theme === 'light' ? 'bg-pink-300/70' : 'bg-pink-600/70'}`}> 
                            <div className={`size-3 rounded-full -mt-1 ${theme === 'light' ? 'bg-pink-300' : 'bg-pink-600'}`}></div> 
                        </div> } */}

            <div className={`w-full flex flex-col items-center`}> 
                <div className="w-full flex justify-center items-center mb-0.5 ">
                {/* h-0.5 bg-pink-300 */}
                    {parcourReverse.map((exp, i) => (
                        <span
                            key={exp.id}
                            className={` m-1 rounded-full transition duration-500 ease-in-out ${visibleExp.includes(i) ? 'bg-pink-600 p-2' : 'bg-pink-200 p-1.5 '} `}
                        ></span>
                    ))} 
                </div> 
                <div className="w-1/4 h-0.5 border-t border-pink-600/40"></div>  
                 <div className={`w-full flex flex-nowrap overflow-x-scroll no-scrollbar `}>   
                   
                {parcours()}
                </div>
            </div> 
            {/* <span className="w-full flex justify-end pr-6 -mt-2">
                <ChevronsRight />                 
            </span>    */}
        </section>
    );
};

export default AboutMe;