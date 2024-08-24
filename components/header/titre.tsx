import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BeatLoader } from "react-spinners";

const Titre: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false); 

//MONTAGE COMPOSANT
    useEffect(() => {
        setMounted(true);
    }, []);

if (!mounted) return <BeatLoader color="#db2777"/>;

    return (
        <section className="w-full text-right ">
            {/* lg:-mt-24 md:mt-0 -mt-8 mb-4 2xl:pr-48 xl:pr-14 md:pr-8 pr-4 */}        
                <p className="text-small-caps text-3xl sm:text-4xl md:text-5xl xl:text-6xl animate-growToNormal">Développeuse Web & Mobile</p>
       </section>
    );
};

export default Titre;





