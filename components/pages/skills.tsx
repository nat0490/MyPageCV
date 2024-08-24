import React, {useRef, useEffect, useState, useCallback} from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { BeatLoader} from 'react-spinners';

const Skills: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const allSkills = [
        {src: require("@/assets/skills/iconExpo.png"), name: "Expo"},
        {src: require("@/assets/skills/iconExpress.png"), name: "Express JS"},
        {src: theme === "light" ? require("@/assets/skills/iconGit1.png") : require("@/assets/skills/iconGit2.png"), name: "Git"},
        {src: require("@/assets/skills/iconJS.png"), name: "JavaScript"},
        {src: require("@/assets/skills/iconMongoDB.png"), name: "MongoDB"},
        {src: require("@/assets/skills/iconNode.png"), name: "Node JS"},
        {src: require("@/assets/skills/iconNext.png"), name: "Next JS"},
        {src: require("@/assets/skills/iconReact.png"), name: "React & React Native"},
        {src: require("@/assets/skills/iconRedux.png"), name: "Redux"},
        {src: require("@/assets/skills/iconTailwind.png"), name: "Tailwind CSS"},
        {src: theme === "light" ? require("@/assets/skills/iconTS1.png") : require("@/assets/skills/iconTS2.png"), name: "TypeScript"},
        {src: require("@/assets/skills/iconVercel.png"), name: "Vercel"}
    ];     
        

    const [scrollPosition, setScrollPosition] = useState<'start' | 'middle' | 'end'>('start');
    const scrollContainerRef = useRef<HTMLDivElement>(null);

//DETECTION DE LA POSITION DANS LA SCROLL VIEW POUR AGIR SUR COULEUR ROND DE NAVIGATION
    useEffect(() => {
        if(mounted) {
            
            const handleScroll = () => {
                const scrollElement = scrollContainerRef.current;
                if (scrollElement) {
                    const scrollLeft = scrollElement.scrollLeft;
                    const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth;
                    const third = scrollWidth / 3;
                    if (scrollLeft <= third) {
                        setScrollPosition('start');
                    } else if (scrollLeft >= third*2) {
                        setScrollPosition('end');
                    } else {
                        setScrollPosition('middle');
                    }
                }
            };
            const scrollElement = scrollContainerRef.current;
            if (scrollElement) {
                scrollElement.addEventListener('scroll', handleScroll);
                return () => {           
                    scrollElement.removeEventListener('scroll', handleScroll);            
                };
            }      
        }       
    },[mounted]);



//FONCTION D'ANIMATION DU DEFILEMENT
const smoothScroll = useCallback((element: HTMLDivElement, target:number, duration:number) => {
    const start = element.scrollLeft;
    const distance = target - start;
    let startTime: number | null = null;

    const animateScroll = (currentTime:number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Calculate the progress of the animation
        element.scrollLeft = start + distance * easeInOutQuad(progress);
        if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
    };

    requestAnimationFrame(animateScroll);
}, []);

// Fonction d'accélération/décélération pour l'animation
const easeInOutQuad = (t:number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

//DETECTION POSITION DE LA SOURIS POUR SCROLLER HORIZONTALEMENT
    useEffect(() => {
        if (mounted) {            
            const handleMouseMove = (event: any) => {
                // console.log("in the hook");         
                const scrollElement = scrollContainerRef.current;
                if (!scrollElement) return;
                const clientWidth = scrollElement.clientWidth;     
                // console.log(clientWidth);         
                const scrollToLeft = () => {    
                    if (scrollElement) {
                        // scrollElement.scrollTo({ left: 0, behavior: 'smooth' });
                        smoothScroll(scrollElement, 0, 500);
                    }
                };        
                const scrollToMiddle = () => {   
                    if (scrollElement) {
                        const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth;
                        smoothScroll(scrollElement, scrollWidth / 2, 500);
                        // scrollElement.scrollTo({ left: scrollWidth/2, behavior: 'smooth' });
                    }
                };        
                const scrollToRight = () => {   
                    if (scrollElement) {
                        const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth;
                        smoothScroll(scrollElement, scrollWidth, 500);
                        // scrollElement.scrollTo({ left: scrollWidth, behavior: 'smooth' });
                    }
                };
                const containerRect = scrollElement.getBoundingClientRect();
                const mouseX = event.clientX - containerRect.left;
                if (mouseX >= (clientWidth*0.7)){
                    if (scrollPosition === 'start') {
                        scrollToMiddle();
                    } else if(scrollPosition === 'middle') {
                        scrollToRight();
                    } 
                } else if (mouseX <= (clientWidth*0.2)) {
                    if (scrollPosition === 'end') {
                        scrollToMiddle();
                    } else if(scrollPosition === 'middle') {
                        scrollToLeft();
                    }
                }
            };    
            const container = scrollContainerRef.current;
            if (container) {
              container.addEventListener('mousemove', handleMouseMove);    
              return () => {
                container.removeEventListener('mousemove', handleMouseMove);
              };
            }

        }        
      }, [scrollPosition, mounted,smoothScroll]); 
 
//ACTION LORS DES CLICKS SUR ROND DE NAVIATION SUR LA SCROLL VIEW
    const scrollToLeft = () => {
        const scrollElement = scrollContainerRef.current;
        if (scrollElement) {
            // scrollElement.scrollTo({ left: 0, behavior: 'smooth' });
            smoothScroll(scrollElement, 0, 1000);
        }
    };
    const scrollToMiddle = () => {
        const scrollElement = scrollContainerRef.current;
        if (scrollElement) {
            const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth;
            smoothScroll(scrollElement, scrollWidth / 2, 1000);
            // scrollElement.scrollTo({ left: scrollWidth / 2, behavior: 'smooth' });
        }
    };
    const scrollToRight = () => {
        const scrollElement = scrollContainerRef.current;
        if (scrollElement) {
            const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth;
            smoothScroll(scrollElement, scrollWidth, 1000);
            // scrollElement.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        }
    };  


    const skills = () => {
        const mySkills: JSX.Element[] = [];
        for(let i:number = 0; i<allSkills.length; i++) {
            const skill = allSkills[i];
            mySkills.push(
                <div key={`${i}`} className="flex-none flex flex-col items-center justify-center w-24 h-32 md:size-48 cursor-default">            
                    <Image 
                        src={skill.src}
                        alt={skill.name}
                        className={`hover:cursor-default size-14 md:size-28 hover:size-32 md:hover:size-18 mb-4 ${theme === 'dark' &&  (skill.name === 'Git' || skill.name === 'Expo' || skill.name === 'TypeScript' || skill.name === 'Express JS')? 'invert' : ''}`}
                        // (skill.name === 'Git' || skill.name === 'GitHub' || skill.name === 'Expo' || skill.name === 'TypeScript' || skill.name === 'Express JS')
                    />
                    <p className="text-small-caps text-center">{skill.name}</p>                   
                </div>
            )
        }
        return mySkills;
    };  
    
    if (!mounted) return <BeatLoader color="#db2777"/>;

    return (
        <section className="w-full">
            <h1 className="text-pink-600 text-small-caps text-4xl mb-6 ml-10 sm:ml-40"> Skills </h1>
            <div className=" h-98 mb-4 flex items-center ">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col w-full items-center">
                    <div className="flex justify-center items-center w-full h-5"> 
                        <div 
                            onClick={scrollToLeft} 
                            className={`m-0.5 hover:cursor-pointer transition duration-1000 ease-in-out  ${scrollPosition === 'start' ? 'bg-pink-600 p-1.5' : 'bg-pink-200 p-1'} rounded-full`}>
                        </div>
                        <div 
                            onClick={scrollToMiddle}
                            className={`m-0.5 hover:cursor-pointer transition duration-1000 ease-in-out  ${scrollPosition === 'middle' ? 'bg-pink-600 p-1.5' : 'bg-pink-200 p-1'} rounded-full`}>
                        </div>
                        <div 
                            onClick={scrollToRight}
                            className={`m-0.5 hover:cursor-pointer transition duration-1000 ease-in-out  ${scrollPosition === 'end' ? 'bg-pink-600 p-1.5' : 'bg-pink-200 p-1'} rounded-full`}>
                        </div>
                    </div>  

                    <div className="w-1/12 h-0.5 border-t border-pink-600/30"></div>   

                    </div>   

                    
                    <div id="scrollSkills" ref={scrollContainerRef} className="flex items-center overflow-x-scroll no-scrollbar">
                        {skills()}
                    </div>
                                   
                </div>                  
            </div>
        </section>
    );
};

export default Skills;