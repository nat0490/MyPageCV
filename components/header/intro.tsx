import React, { useEffect, useState } from "react";
import FadeInText from "../common/FadeInText";
import { useTheme } from "next-themes";
import { BeatLoader } from "react-spinners";

const Intro: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false); 

//MONTAGE COMPOSANT
    useEffect(() => {
        setMounted(true);
    }, []);

    const text = [
        "Fascinée de pouvoir créer des choses différentes à partir de rien,",
        "Stimulée par le côté technique et réfléchi poussant à la recherche permanente,",
        "Galvanisée par la résolution des défis techniques et la satisfaction qui en découle."
    ];

if (!mounted) return <BeatLoader color="#db2777"/>;

    return (
        <section className="w-full md:w-9/12 px-2 mb-12 sm:mb-20 lg:mr-20 xl:mr-40 2xl:mr-60">
            <div className="text-end italic text-small-caps">
                <FadeInText 
                    text={text}
                />          
            </div> 
        </section>
    );
};

export default Intro;