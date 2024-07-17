import React, { useEffect, useRef, useState } from "react";
import monParcours from "@/data/monParcours";
import { useTheme } from "next-themes";
import { BeatLoader } from "react-spinners";
import { Baby, BriefcaseBusiness, GraduationCap, Library, Eye, SkipBack, SkipForward, MapPin } from "lucide-react";

const AboutMe: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false); 
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth); 

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const elementWidthRef = useRef<HTMLDivElement>(null);
      
//MONTAGE COMPOSANT
    useEffect(() => {
        setMounted(true);
    }, []);
  
//LARGUEUR ECRAN POUR STYLE
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

//SCROLL PARCOURS  
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
        }     
    },[]);

    const handleSkipForward = () => {
        // console.log("click");
        if (scrollContainerRef.current) {
            if(elementWidthRef.current) {
                // console.log(elementWidthRef.current?.getBoundingClientRect().width);
                const elementWidth = elementWidthRef.current?.getBoundingClientRect().width;
                scrollContainerRef.current.scrollLeft += elementWidth * 2 ;
            }  
        }
    };

    const handleSkipBack = () => {
        // console.log("click");
        if (scrollContainerRef.current) {
            if(elementWidthRef.current) {
                // console.log(elementWidthRef.current?.getBoundingClientRect().width);
                const elementWidth = elementWidthRef.current?.getBoundingClientRect().width;
                scrollContainerRef.current.scrollLeft -= elementWidth * 2 ;
            }  
        }
    };

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
        const parcoursInverse = [...monParcours].reverse();
        const allParcours = [];
        for (let i = 0; i < parcoursInverse.length; i++) {
            const p = parcoursInverse[i];
            const isTruncated = truncatedTexts[i];
            const fullText = p.description;
            const displayText = isTruncated ? fullText.substring(0, 100) : fullText; 

            allParcours.push(
                <div ref={elementWidthRef} key={p.id} className="mb-4 pt-2 w-1/2 sm:w-1/3 md:w-1/4 shrink-0 lg:shrink ">         
                    {p.id === 1 &&
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
                        </div> }
                    <div  className=" text-center h-full p-1 mx-2">
                        <div className="w-full whitespace-nowrap italic text-sm">
                            {p.date.debut === p.date.fin ? p.date.debut : `${p.date.debut} - ${p.date.fin}`}
                        </div>
                        <div id="type"className="flex justify-center m-1.5 shrink-0">
                            {p.type === "naissance" && <Baby />}
                            {p.type === "diplome" && <GraduationCap />}
                            {p.type === "etude" && <Library />}
                            {p.type === "travail" && <BriefcaseBusiness />}
                            {p.type === "look" && <Eye />}                        
                        </div>
                        <h2 className="">{p.nom}</h2>
                        <div id="postes" className="mb-2 flex flex-wrap items-center justify-center space-x-2">
                            {postes(p.postes)}
                        </div>                    
                        <div id="lieu"className="text-small-caps mb-2 flex justify-center">
                            <MapPin className="p-1 shrink-0"/>
                            {p.lieu}
                        </div>              
                        <div 
                            id="descriptionContainer"
                            onClick={() => toggleDescription(i)}
                            className={`group text-center ${fullText.length > 100 ? (theme === 'dark' ? "hover:bg-pink-100/5 cursor-pointer" : "hover:bg-pink-950/5 cursor-pointer" ) : ""} rounded-lg py-1.5 my-0.5 `}
                        >
                            <p id="description" className="text-center ">
                                {displayText}{isTruncated && fullText.length > 100 && < span className="group-hover:font-bold group-hover:animate-ping ">... </span>  }
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
                            <div className="flex flex-wrap justify-center space-x-2 ">
                            {softSkills(p.softSkills)}
                            </div>
                            <div className="border-t mx-14 border-pink-600/40 mt-1 mb-4"></div>
                        </div>}  
                    </div>
                </div>            
        )}
        return allParcours;
    };

    if (!mounted) return <BeatLoader color="#db2777"/>;

    return (
        <section className="w-full ">
            <h1 className="text-pink-600 text-small-caps text-right text-5xl mb-4 mr-32 "> Mon parcours </h1>        
            {windowWidth < 1024 &&
            <div className="flex justify-center space-x-4">
                <div className="hover:scale-150 cursor-pointer p-1 mx-1 " onClick={handleSkipBack}>
                    <SkipBack />
                </div> 
                <div className="hover:scale-150 cursor-pointer p-1 mx-1 " onClick={handleSkipForward}>
                    <SkipForward />
                </div>
            </div>}            
            <div ref={scrollContainerRef} className={`scroll-smooth  w-full flex flex-nowrap overflow-x-hidden `}>        
                {parcours()}
            </div>
        </section>
    );
};

export default AboutMe;