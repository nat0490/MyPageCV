"use client";
import React, { useEffect, useState }  from "react";
// import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Github, Linkedin } from 'lucide-react';
import { useTheme } from "next-themes";
import {ToggleTheme} from "@/components/common";
import { BeatLoader } from "react-spinners";


const Baniere: React.FC = () => {

  const { theme, setTheme } = useTheme();

  const [ activeAnimationLine, setActiveAnimationLine ] = useState<Number | null>(null);
  const [ activeAnimationPlace, setActiveAnimationPlace ] = useState<Number | null>(null);

  const [mounted, setMounted] = useState<boolean>(false); 
//MONTAGE COMPOSANT
  useEffect(() => {
      setMounted(true);
  }, []);

  //LARGUEUR ECRAN POUR STYLE
const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
// const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth); 
useEffect(() => {
  const handleResize = () => {
      setWindowWidth(window.innerWidth);
  };
  window.addEventListener('resize', handleResize);
  return () => {
      window.removeEventListener('resize', handleResize);
  };
}, []);

// ANIMATION ALEATOIRE DES CARRES
  useEffect(()=> {
    const applyRandomAnimation = () => {
      // const elements = document.querySelectorAll('.random-animation-element');
      const randomNumber1 = Math.floor(Math.random() * 3 ) +1;
      const randomNumber2 = Math.floor(Math.random() * 2 );
      setActiveAnimationLine(randomNumber1);
      setActiveAnimationPlace(randomNumber2);
      // console.log(randomNumber1,randomNumber2);
    };
    const interval = setInterval(applyRandomAnimation, 4000); 
    return () => clearInterval(interval); 
  },[]);

// DELAIS POUR EVITER LE RETOUR DES CARRES INTERIEUR UNE FOIS DISPARUS
  useEffect(() => {
    const resetActiveAnimations = () => {
      setActiveAnimationLine(null);
      setActiveAnimationPlace(null);
    };
    const timeout = setTimeout(resetActiveAnimations, 2300);
    return () => clearTimeout(timeout);
  }, [activeAnimationLine, activeAnimationPlace]);

// CARRE  
    const grosCarre = (nbr: number, line: number) => {
        const carres: JSX.Element[] = [];
        for (let i:number = 0; i < nbr ; i++) {
          carres.push(
            <div key={`${line}-${i}`} id={`${line}-carre-${i}`} className="size-16 md:size-24 lg:size-28 xl:size-32 random-animation-element group border-2 hover:border-4 border-pink-600 rotate-45  flex justify-center items-center animate-slideInFromLeft animate-trail">
              <div className={`border md:border-2 border-pink-600  size-14 md:size-24 lg:size-28 relative flex justify-center items-center ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear01' : 'opacity-0'}`}>
                <div className={`border md:border-2 border-pink-500 size-12 md:size-20 lg:size-24 relative flex justify-center items-center ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear02' : 'opacity-0'}`}>
                  <div className={`border md:border-2 border-pink-500 size-10 md:size-20 relative flex justify-center items-center ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear03' : 'opacity-0'}`}>
                    <div className={`border md:border-2 border-pink-400 size-8 md:size-16 relative flex justify-center items-center ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear04' : 'opacity-0'}`}>
                      <div className={`border md:border-2 border-pink-300 size-6 md:size-12 relative flex justify-center items-center ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear05' : 'opacity-0'}`}>
                        <div className={`border md:border-2 border-pink-200 size-4 md:size-8 relative flex justify-center items-center ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear06' : 'opacity-0'}`}>
                          <div className={`border md:border-2 border-pink-100 size-2.5 md:size-4 relative flex justify-center items-center ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear07' : 'opacity-0'}`}>
                            <div className={`border md:border-2 border-pink-50 size-1 md:size-2 relative animate-appear08::after ${line === activeAnimationLine && i === activeAnimationPlace ? 'opacity-100 animate-appear08' : 'opacity-0'}`}>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return carres;
      };

//PLAYER SMILE
    const stylePlayer = windowWidth > 780
      ? { height: '200px', width: '200px' }
      : { height: '150px', width: '150px' };

// NOM PRENOM
    const animationName = (name: String, type: String, startDelay: number) => {
      const nom: JSX.Element[] = [];
      const nameToArray = name.split("");
      // console.log(nameToArray);
      let delay = startDelay;
      for (let i:number = 0; i<name.length; i++) {
        nom.push(
          <span key={`${type}-${i}`} className="inline-block group-hover:animate-bounce" style={{ animationDelay: `${delay}s` }}> {nameToArray[i]} </span>
        );
        delay += 0.05;
      };
      return nom;
    };

    if (!mounted) return <BeatLoader color="#db2777"/>;

    return (
      <div className="w-full"> 
        <section className="flex flex-row justify-between items-start w-full pt-8 ">
        {/* xl:px-32 lg:px-24 md:px-12 px-4   */}
          <div className="flex xl:pl-28 lg:pl-10 pl-8  ">
            <div className="flex flex-col ">
              <div className="flex justify-center ">
                  {grosCarre(2, 1)}
              </div>
              <div className="flex justify-center "> 
                  {grosCarre(3, 2)}
              </div>
              <div className="flex justify-center ">
                  {grosCarre(2, 3)}
              </div>
            </div>
          </div>

        
          

          <div className="flex flex-col items-end "> 
          {/* className="-mt-48 md:-mt-6 lg:-mt-14 "  */}

            <div className="mr-4 mb-6">
            {/* mr-0 md:pr-10 lg:-mr-14  xl:-mr-24 */}
              <ToggleTheme /> 
            </div>

            <div className=" flex  flex-col justify-center mr-6 md:mr-20 mt-6 lg:mt-0">
            {/* pt-20 */}
              <div className="flex flex-col-reverse md:flex-col">
              
                <div id="name"className="group sm:mr-6 sm:px-2 lg:mt-14 mb-2">
                  <p className=" text-small-caps text-right  text-pink-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest cursor-default ">
                    {animationName("Nathalie", "prenom", 0)}
                  </p>
                  <p className="text-small-caps text-right  text-pink-600/50 text-1xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest cursor-default group-hover:text-pink-600/75 ">
                    {animationName("Sartor", "nom", 0.15)}
                  </p>
                </div> 

                <div id="contact" className="flex justify-end px-2 py-1 mr-2 md:mr-10 ">
                  <a  
                    href="https://github.com/nat0490"
                    className="hover:cursor-pointer hover:bg-pink-600/40 animate-bounce bg-pink-600/5 rounded-full p-2 mr-1"
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="lien Github"
                  > { theme === "light" ?  <Github color="black" className="mt-1.5 ml-1"/> : <Github color="white" className="mt-1.5 ml-1"/> }
                  </a>   

                  <a  
                      href="https://www.linkedin.com/in/nathalie-sartor-5aa677189/ "
                      className="hover:cursor-pointer hover:bg-pink-600/40 animate-bounce bg-pink-600/5 rounded-full p-2 mr-1"
                      style={{ animationDelay: "0.5s" }}
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="lien Linkedin"
                  > { theme === "light" ?  <Linkedin color="black" className="mt-1.5 ml-1"/> : <Linkedin color="white" className="mt-1.5 ml-1"/> }
                            
                  </a>         
                </div>

              </div>

            {/* <div >
            <ToggleTheme /> 
            </div> */}
            

            {/* <div className="mr-10 sm:mr-24 md:mr-44 xl:mr-52 -mt-20 md:-mt-28 xl:-mt-20 p-0 flex justify-end md:justify-start " title="A little Smile :)">
              <Player
                autoplay
                loop       
                src={require("@/assets/AnimationSmile.json")}
                style={stylePlayer}
              ></Player>                     
            </div>  */}

            </div>


          </div> 

        </section>
      </div>
    );
};

export default Baniere;