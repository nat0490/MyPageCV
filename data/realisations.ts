type Item = {
    id: number,
    name: string,
    description: string,
    image: string[],
    tech: string[],
    video: string[],
    link: string[],
    linkGitHub: string[],
};



const myRealisations: Item[] = [

    {
        id: 1,
        name: "Flowst",
        description: "Réseau permettant la publication de posts avec photos. Possibilité de changer de theme, faire des recherchers pas # et liker les posts/commentaires. Notifications également présentes.",
        image: [
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720795827/Mes%20r%C3%A9alisations/CapturePC1_dvoeav.png",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720795828/Mes%20r%C3%A9alisations/CapturePC2_gnjdvx.png",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720795828/Mes%20r%C3%A9alisations/CapturePC3_pztu8s.png",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720795831/Mes%20r%C3%A9alisations/CapturePC4_kejkzp.png",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720795832/Mes%20r%C3%A9alisations/CapturePC5_dr83d8.png",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720795835/Mes%20r%C3%A9alisations/CapturePC6_ma6wp6.png",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720795836/Mes%20r%C3%A9alisations/CapturePC7_ngythv.png",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720795839/Mes%20r%C3%A9alisations/CapturePC8_eead2l.png",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720795839/Mes%20r%C3%A9alisations/CapturePC9_xgse2a.png",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720795842/Mes%20r%C3%A9alisations/CapturePC10_zdnnvr.png",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720795875/Mes%20r%C3%A9alisations/CapturePC11_djy8ao.png",            
        ],
        tech: ["NodeJS", "ExpressJS", "MongoDB", "Cloudinary", "React", "Vercel", "Redux", "Bcrypt", "Dotenv", "Uid2"],
        video: [
            "https://res.cloudinary.com/dawkemcl5/video/upload/v1720793332/Mes%20r%C3%A9alisations/DemoPC_uwis6y.mp4",
            "https://res.cloudinary.com/dawkemcl5/video/upload/v1720794865/Mes%20r%C3%A9alisations/DemoMobile_urnahj.mp4",
        ],
        link:["https://natflowst.vercel.app/"],
        linkGitHub: [
            "https://github.com/nat0490/hackatweet-frontend", 
            "https://github.com/nat0490/hackatweet-backend"
        ]
    },
    {
        id: 2,
        name: "Chef's Liberation",
        description: "App Mobile permettant de voir les chef à proximitré de chez soi ou de les choisirs via leur plat. Une fois un plat choisis, on viens choisir la date de la prestation (quand le chef viendra cuisiner chez soi). On peux venir modifier ces information utilisateur via son profil. Egalement la possibilité de passer chef et de pouvoir proposer ces plats",
        image: [
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797186/Mes%20r%C3%A9alisations/Acceuil_pour_connexion_nstmqm.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797187/Mes%20r%C3%A9alisations/page_SignIn_pp3lip.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797193/Mes%20r%C3%A9alisations/SignUp_coordonnees_l8xaq9.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797212/Mes%20r%C3%A9alisations/Commande_adresseSelect_cmriko.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797213/Mes%20r%C3%A9alisations/Commande_agenda_Dateselect_y7aiwo.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797217/Mes%20r%C3%A9alisations/Commande_fin_btcm2u.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797220/Mes%20r%C3%A9alisations/Commande_paiementSelect_roxhwe.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797225/Mes%20r%C3%A9alisations/Page_Main_apres_connexion_bynbao.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797232/Mes%20r%C3%A9alisations/Page_plat_details_mlhmp8.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797237/Mes%20r%C3%A9alisations/Profil_chef_sa62cf.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797247/Mes%20r%C3%A9alisations/ajouter_recette_dgyjd6.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797294/Mes%20r%C3%A9alisations/Historique_commandes_iklyjc.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797294/Mes%20r%C3%A9alisations/Profil_du_chef_plat_wdfj2s.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797303/Mes%20r%C3%A9alisations/Profil_du_chef_dfnwv9.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797304/Mes%20r%C3%A9alisations/Setting_sansChef_on6coa.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797320/Mes%20r%C3%A9alisations/userProfil_ko1wio.jpg",
            
        ],
        tech: ["NodeJS", "ExpressJS", "MongoDB", "Cloudinary", "ReactNative", "Vercel", "Redux", "Bcrypt", "Dotenv", "Uid2", "Expo"],
        video: ["https://res.cloudinary.com/dawkemcl5/video/upload/v1720798232/Mes%20r%C3%A9alisations/Video_App_q8jgfh.mp4"],
        link: [""],
        linkGitHub: [
            "https://github.com/nat0490/Chefs-Frontend", 
            "https://github.com/nat0490/Chefs-Backend"
        ]
    },
    // {
    //     id: 3,
    //     name: "Chef's Liberation",
    //     description: "App Mobile permettant de voir les chef à proximitré de chez soi ou de les choisirs via leur plat. Une fois un plat choisis, on viens choisir la date de la prestation (quand le chef viendra cuisiner chez soi). On peux venir modifier ces information utilisateur via son profil. Egalement la possibilité de passer chef et de pouvoir proposer ces plats",
    //     image: [
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797186/Mes%20r%C3%A9alisations/Acceuil_pour_connexion_nstmqm.jpg",
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797187/Mes%20r%C3%A9alisations/page_SignIn_pp3lip.jpg",
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797193/Mes%20r%C3%A9alisations/SignUp_coordonnees_l8xaq9.jpg",
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797212/Mes%20r%C3%A9alisations/Commande_adresseSelect_cmriko.jpg",
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797213/Mes%20r%C3%A9alisations/Commande_agenda_Dateselect_y7aiwo.jpg",
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797217/Mes%20r%C3%A9alisations/Commande_fin_btcm2u.jpg",
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797220/Mes%20r%C3%A9alisations/Commande_paiementSelect_roxhwe.jpg",
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797225/Mes%20r%C3%A9alisations/Page_Main_apres_connexion_bynbao.jpg",
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797232/Mes%20r%C3%A9alisations/Page_plat_details_mlhmp8.jpg",
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797237/Mes%20r%C3%A9alisations/Profil_chef_sa62cf.jpg",
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797247/Mes%20r%C3%A9alisations/ajouter_recette_dgyjd6.jpg",
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797294/Mes%20r%C3%A9alisations/Historique_commandes_iklyjc.jpg",
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797294/Mes%20r%C3%A9alisations/Profil_du_chef_plat_wdfj2s.jpg",
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797303/Mes%20r%C3%A9alisations/Profil_du_chef_dfnwv9.jpg",
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797304/Mes%20r%C3%A9alisations/Setting_sansChef_on6coa.jpg",
    //         "https://res.cloudinary.com/dawkemcl5/image/upload/v1720797320/Mes%20r%C3%A9alisations/userProfil_ko1wio.jpg",
            
    //     ],
    //     tech: ["NodeJS", "ExpressJS", "MongoDB", "Cloudinary", "ReactNative", "Vercel", "Redux", "Bcrypt", "Dotenv", "Uid2", "Expo"],
    //     video: ["https://res.cloudinary.com/dawkemcl5/video/upload/v1720798232/Mes%20r%C3%A9alisations/Video_App_q8jgfh.mp4"],
    //     link: [""],
    //     linkGitHub: [
    //         "https://github.com/nat0490/Chefs-Frontend", 
    //         "https://github.com/nat0490/Chefs-Backend"
    //     ]
    // },



];

export default myRealisations;
