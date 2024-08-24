"use client";
import React, {useEffect} from "react";
import { useTheme } from "next-themes";
import { Sun, Moon} from 'lucide-react';

const ToggleTheme: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = React.useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
   

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    if (!mounted) return null;

    return (
        <div className="w-full flex  " title="Changer le thème">
            {/* pr-8 sm:pr-14 md:pr-12 mb-6  md:my-0  */}
            <button 
                onClick={handleTheme}
                className={`relative border flex items-center w-14 h-6 rounded-full transition-bg-border duration-1000 ease ${theme === "light" ? "bg-pink-700/5 border-pink-700" : "bg-pink-700/10 border-pink-700/30 "}`}
                >
                <div className={`absolute flex justify-center items-center bg-pink-700 rounded-full w-6 h-6 transition-left duration-1000 ease ${theme === "light" ? "left-0" : "right-0"} `}>
            { theme === "light" ?  <Moon color="white" size={20}/> : <Sun color="white" /> }
                </div>
            </button>
        </div>
    )
};

export default ToggleTheme;