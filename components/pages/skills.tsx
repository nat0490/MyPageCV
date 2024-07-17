import React, {useRef, useEffect, useState} from "react";
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
        {src : require("@/assets/skills/iconNext.png"), name : "Next JS"},
        {src : require("@/assets/skills/iconReact.png"), name : "React & React Native"},
        {src : require("@/assets/skills/iconTailwind.png"), name : "Tailwind CSS"},
        {src : theme === "light" ? require("@/assets/skills/iconGit1.png") : require("@/assets/skills/iconGit2.png"), name : "Git"},
        {src : theme === "light" ? require("@/assets/skills/iconGithub1.png") : require("@/assets/skills/iconGithub2.png"), name : "GitHub"},
        {src : require("@/assets/skills/iconNode.png"), name : "Node JS"},
        {src : require("@/assets/skills/iconExpo.png"), name : "Expo"},
        {src : require("@/assets/skills/iconExpress.png"), name : "Express JS"},
        {src : require("@/assets/skills/iconMongoDB.png"), name : "MongoDB"},        
        {src : require("@/assets/skills/iconJS.png"), name : "JavaScript"},
        {src : theme === "light" ? require("@/assets/skills/iconTS1.png") : require("@/assets/skills/iconTS2.png"), name : "TypeScript"},
        {src : require("@/assets/skills/iconRedux.png"), name : "Redux"},
        {src : require("@/assets/skills/iconVercel.png"), name : "Vercel"},
    ]

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

//DETECTION POSITION DE LA SOURIS POUR SCROLLER VERTICALEMENT
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
                        scrollElement.scrollTo({ left: 0, behavior: 'smooth' });
                    }
                };        
                const scrollToMiddle = () => {   
                    if (scrollElement) {
                        const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth;
                        scrollElement.scrollTo({ left: scrollWidth/2, behavior: 'smooth' });
                    }
                };        
                const scrollToRight = () => {   
                    if (scrollElement) {
                        const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth;
                        scrollElement.scrollTo({ left: scrollWidth, behavior: 'smooth' });
                    }
                };
                const containerRect = scrollElement.getBoundingClientRect();
                const mouseX = event.clientX - containerRect.left;
                if (mouseX >= (clientWidth*0.9)){
                    if (scrollPosition === 'start') {
                        scrollToMiddle();
                    } else if(scrollPosition === 'middle') {
                        scrollToRight();
                    } 
                } else if (mouseX <= (clientWidth*0.1)) {
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
      }, [scrollPosition, mounted]); 
 
//ACTION LORS DES CLICKS SUR ROND DE NAVIATION SUR LA SCROLL VIEW
    const scrollToLeft = () => {
        const scrollElement = scrollContainerRef.current;
        if (scrollElement) {
            scrollElement.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };
    const scrollToMiddle = () => {
        const scrollElement = scrollContainerRef.current;
        if (scrollElement) {
            const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth;
            scrollElement.scrollTo({ left: scrollWidth / 2, behavior: 'smooth' });
        }
    };
    const scrollToRight = () => {
        const scrollElement = scrollContainerRef.current;
        if (scrollElement) {
            const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth;
            scrollElement.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        }
    };  

    const skills = () => {
        const mySkills: JSX.Element[] = [];
        for(let i:number = 0; i<allSkills.length; i++) {
            const skill = allSkills[i];
            mySkills.push(
                <div key={`${i}`} className="flex-none flex flex-col items-center justify-center w-24 h-32 md:size-48">            
                    <Image 
                        src={skill.src}
                        alt={skill.name}
                        className={`size-14 md:size-28 hover:size-40 md:hover:size-18 mb-4 ${theme === 'dark' &&  (skill.name === 'Git' || skill.name === 'GitHub' || skill.name === 'Expo' || skill.name === 'TypeScript' || skill.name === 'Express JS')? 'invert' : ''}`}
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
            <h1 className="text-pink-600 text-small-caps text-5xl mb-6 ml-40"> Skills </h1>
            <div className=" h-98 mb-4 flex items-center overflow-hidden">
                <div className="flex flex-col w-full">
                    <div id="scrollSkills" ref={scrollContainerRef} className="flex items-center overflow-hidden">
                        {skills()}
                    </div>
                    <div className="flex justify-center w-full"> 
                        <div 
                            onClick={scrollToLeft} 
                            className={`m-1 p-2 hover:cursor-pointer ${scrollPosition === 'start' ? 'bg-pink-600' : 'bg-pink-200'} rounded-full`}>
                        </div>
                        <div 
                            onClick={scrollToMiddle}
                            className={`m-1 p-2 hover:cursor-pointer ${scrollPosition === 'middle' ? 'bg-pink-600' : 'bg-pink-200'} rounded-full`}>
                        </div>
                        <div 
                            onClick={scrollToRight}
                            className={`m-1 p-2 hover:cursor-pointer ${scrollPosition === 'end' ? 'bg-pink-600' : 'bg-pink-200'} rounded-full`}>
                        </div>
                    </div>                      
                </div>                  
            </div>
        </section>
    );
};

export default Skills;