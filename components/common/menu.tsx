// "use client";
import React from "react";
import { Github, Linkedin} from 'lucide-react';

const Menu: React.FC = () => {

    const menus : {name: string; url: string }[] = [
        {name: "About Me", url: "/"},
        {name: "Realisations", url: "/"},
        {name: "Skills", url: "/"},
        {name: "Loisirs", url: "/"},
        {name: "Contact", url: "/"},
    ];



    const menu = (): JSX.Element[] => {
        return menus.map((e) => (
          <div className="group m-2 rounded-full h-16 w-16 hover:h-24 hover:w-24 bg-pink-600 text-small-caps flex justify-center items-center cursor-pointer" key={e.name}>
            <span className="text-center group-hover:text-4xl">{e.name}</span>
          </div>
        ));
      };


    return (
        <section className="flex flex-wrap justify-center items-center p-12">
            
            {menu()}
            {/* <div className="bg-red-600">
              <Github />
              <Linkedin />
            </div> */}
           
        </section>
    );
};

export default Menu;