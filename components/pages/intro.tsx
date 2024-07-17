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
        "Fasciné de pouvoir créer des choses différentes à partir de rien",
        "Stimulé par le côté technique et réfléchi poussant à la recherche permanente",
        "Galvanisé par la résolution des défis techniques et la satisfaction qui en découle"
    ];

if (!mounted) return <BeatLoader color="#db2777"/>;

    return (
        <section className="w-9/12 mb-20 flex justify-end ">
            <div className="text-end italic text-small-caps">
                <FadeInText 
                    text={text}
                />          
            </div> 
        </section>
    );
};

export default Intro;