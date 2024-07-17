"use client";
import Image from "next/image";
import  Baniere  from "@/components/layout/baniere";
import { AboutMe, Realisations, Skills, Loisirs, Contact, Intro } from "@/components/pages";
import { Player } from '@lottiefiles/react-lottie-player';
import { useTheme } from "next-themes";
import {Menu} from "@/components/common";
import { useEffect, useState } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { PacmanLoader } from "react-spinners";



const  Home: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false); 

//GESTION DE L'EFFET D'APPARITION DES ELEMENTS
  const [baniereRef, baniereVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [aboutMeRef, aboutMeVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [realisationsRef, realisationsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [skillsRef, skillsVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [contactRef, contactVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [player1, player1Visible] = useIntersectionObserver({ threshold: 0.1 });
  const [player2, player2Visible] = useIntersectionObserver({ threshold: 0.1 });
  const [player3, player3Visible] = useIntersectionObserver({ threshold: 0.1 });
  const [player4, player4Visible] = useIntersectionObserver({ threshold: 0.1 });

//MONTAGE COMPOSANT
  useEffect(() => {
    setMounted(true);
  }, []);
  
//LARGUEUR ECRAN POUR STYLE
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth); 
  useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);


const stylePlayer = windowWidth > 768
        ? { height: '250px', width: '250px' }
        : { height: '150px', width: '150px' };

if (!mounted) return (<div className="w-screen h-screen flex justify-center items-center"><PacmanLoader color="#db2777"/></div>);        

  return (  
    <main className={`flex w-full h-screen flex-col items-center justify-between `}>  
    {/* overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-h-2 scrollbar-w-1/3 scrollbar  ${theme ==="light" ? "scrollbar-thumb-pink-200  scrollbar-track-pink-100/50  " : "scrollbar-thumb-pink-600/50  scrollbar-track-pink-950/50"}  */}
      
      <div ref={baniereRef} className={`w-full transition-opacity duration-1000 ${baniereVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Baniere />
      </div>

      <Intro/>
  
      <div ref={aboutMeRef} className={`w-full transition-opacity duration-2000 ${aboutMeVisible ? 'opacity-100' : 'opacity-0'}`}>
        <AboutMe />
      </div>

        <div ref={player1 }className={`w-full flex justify-start pl-24 lg:pl-48 -mt-10 transition-opacity duration-2000 ${player1Visible ? 'opacity-100' : 'opacity-0'}`}>
          <Player
              autoplay
              loop
              src={require("@/assets/AnimationBubbleMvm.json")}
              
              style={stylePlayer}           
            ></Player>
        </div>

      <div ref={realisationsRef}  className={`w-full transition-opacity duration-2000 ${realisationsVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Realisations />
      </div>

      <div ref={player2} className={`w-full flex justify-end pr-24 lg:pr-48 -mb-10 transition-opacity duration-2000 ${player2Visible ? 'opacity-100' : 'opacity-0'}`}>
        <Player
            autoplay
            loop
            src={require("@/assets/AnimationBubbleMvm.json")}
            style={stylePlayer}                  
          ></Player>
      </div>
      
      <div ref={skillsRef} className={`w-full transition-opacity duration-2000 ${skillsVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Skills />
      </div>

      <div ref={player3} className={`w-full flex justify-center -mb-8 pr-48 lg:pr-96 transition-opacity duration-2000 ${player3Visible ? 'opacity-100' : 'opacity-0'}`}>
          <Player
              autoplay
              loop
              src={require("@/assets/AnimationBubbleMvm.json")}
              style={stylePlayer}                  
            ></Player>
      </div>

      {/* <Loisirs /> */}
      <div ref={contactRef} className={`w-full flex justify-center transition-opacity duration-2000 ${contactVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Contact />
      </div>
    </main>
  );
}

export default Home;
