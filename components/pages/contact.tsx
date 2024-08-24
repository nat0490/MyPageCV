"use client";
import React, { useEffect, useRef, useState} from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import useForm  from "@/hooks/useForm";
import emailjs from '@emailjs/browser';
import { Laugh, Frown} from 'lucide-react';
import { BeatLoader } from "react-spinners";

const fields = [
    {
        name: "nom",
        placeholder: "Nom",
    },
    {
        name: "email",
        id: "email",
        type: "email",
        placeholder: "Email",
    },
    {
        name: "message",
        type: "message",
        placeholder: "Message",
    }
];

export function isValideEmail(str:string) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str);
};

const Contact: React.FC = () => {

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


const stylePlayer = windowWidth > 768
        ? { height: '150px', width: '150px' }
        : { height: '100px', width: '100px' };



    const textFields = fields.filter(field => field.name === "message");
    const otherFields = fields.filter(field => field.name !== "message");
    const form = useRef<HTMLFormElement>(null);
    // const email_pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ success, setSuccess ] = useState<string>("");
    const [ error, setError ] = useState<string>("");

    const onSubmit = async (e: React.FormEvent) => {
        const formData = new FormData(e.target as HTMLFormElement);
        const formObject :{[key: string ]: string | File} = {};
       
        for (const [key, value] of formData.entries()) {
            formObject[key] = value;
        }

        try {
            setIsLoading(true);
       
            const res = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "", 
                formObject, 
                {publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,}
            );
            if(res.status === 200){
                console.log('SUCCESS!', res);
                setSuccess("Votre message a été envoyé avec succès!");
                setIsLoading(false);
                    if (form.current) {
                    form.current.reset();
                };
            }; 
        } catch(error) {
            console.log('FAILED...', error);
            setError("Un probleme est survenu, veuillez envoyer directement un mail à l'adresse indiquée");
            setIsLoading(false);
        }
            // .then((res) => {
            //     console.log('SUCCESS!', res);
            //     setSuccess("Votre message a été envoyé avec succès!");
            //     setIsLoading(false);
            //      if (form.current) {
            //         form.current.reset();
            //     };
            // }, (error) => {
            //     console.log('FAILED...', error);
            //     setError("Un probleme est survenu, veuillez envoyer directement un mail à l'adresse indiquée");
            //     setIsLoading(false);
            // });
    };

    const { handleChange, handleSubmit } = useForm({ onSubmit });

    // const sendEmail = () =>{
    //     console.log("ouverture boite mail");
    //     window.open("mailto:nathalie_sa@live.fr");
    // }

    if (!mounted) return <BeatLoader color="#db2777"/>;

    return (
        <section className="w-full mb-28">
            <h1 className="text-pink-600 text-small-caps text-right text-4xl mb-6 mr-8 sm:mr-40">Contact</h1>
            <div className=" rounded-3xl contactBox mx-2 p-2">
                {/* <div className="">  */}
                    <form ref={form} onSubmit={handleSubmit} className="flex justify-center items-between w-full">
                        <div className="flex flex-col items-center justify-center w-2/5">
                            <Player
                                autoplay
                                loop
                                src={require("@/assets/AnimationChat2.json")}
                                // style={{ height: '7rem', width: '7rem', marginBottom: '1rem' }}
                                style={stylePlayer}
                                >
                            </Player>
                            <div className="flex flex-col items-center sm:mt-5">
                                <button 
                                    type="submit" 
                                    className="border-2 border-pink-600 hover:bg-pink-600/40 rounded-3xl p-2 sm:w-2/3"
                                    >
                                    Envoyer
                                </button>
                                <br></br>
                                <p className="text-center text-sm">
                                    Ou me contacter directement ici:
                                    <br></br>
                                    <a href="mailto:nathalie_sa@live.fr" className="font-semibold hover:text-pink-600 hover:cursor-pointer">
                                        nathalie_sa@live.fr
                                    </a>
                                    {/* <span 
                                        className="font-semibold hover:text-pink-600 hover:cursor-pointer"
                                        onClick={sendEmail}
                                        >nathalie_sa@live.fr</span> */}
                                </p>
                            </div>
                        </div>
                    
                        <div className="w-3/5 md:w-4/6 flex flex-col items-center justify-center">
                            <div className="flex flex-col lg:flex-row items-between  justify-center lg:justify-start w-full md:w-2/3 " >
                            {otherFields.map((field) => (
                                <input
                                    key={field.name}
                                    {...field}
                                    required
                                    // pattern={field.name === "email" ? email_pattern : undefined}
                                    onChange={handleChange}
                                    className="border-2 border-pink-600 rounded-3xl p-2 mx-2 mb-1 sm:m-2 "
                                    />
                            ))}
                            </div>
                            <div className="h-2/4 flex w-full justify-center "> 
                                {textFields.map((field) => (
                                    <textarea 
                                        key={field.name}
                                        {...field}
                                        required
                                        onChange={handleChange}
                                        className="border-2 border-pink-600 rounded-3xl p-2 mx-2 w-full "
                                        >
                                    </textarea>
                                ))}
                            </div>
                           
                            { success !== "" && 
                                <div className="w-4/5 md:w-2/3 text-center md:text-left text-sm italic mt-3 flex">
                                {success}  <Laugh className="text-pink-600 ml-3"/>
                                 {/* <FontAwesomeIcon icon={faFaceSmile} color="pink" size="xl"className="ml-2"/>  */}
                                
                                </div> }
                            { error !== "" && 
                                <div className="w-4/5 md:w-2/3 text-center md:text-left text-sm italic mt-3 font-bold flex">
                                {error}  <Frown className="text-pink-600 ml-3"/>
                                {/* <FontAwesomeIcon icon={faFaceSadTear} color="pink" size="xl" className="ml-2" /> */}
                                </div> }
                        </div>
                    </form>
                {/* </div> */}
            </div>
        </section>
    );
};

export default Contact;