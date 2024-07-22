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
        name: "My moviz",
        description: "Site permettant de d'afficher les derniers films sortis. Possibilité de liker (en gardant l'historique) et noter les films.",
        image: [
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721397358/Mes%20r%C3%A9alisations/Capture_1_tulrnr.png",       
        ],
        tech: ["API", "Dotenv", "ExpressJS", "Next", "NodeJS", "React", "Redux",],
        video: ["https://res.cloudinary.com/dawkemcl5/video/upload/v1721397359/Mes%20r%C3%A9alisations/Enregistrement_2024-07-19_155534_dtjk43.mp4"],
        link: [""],
        linkGitHub: [
            "https://github.com/nat0490/mymoviz-front", 
            "https://github.com/nat0490/mymoviz-backend"
        ]
    },
    {
        id: 2,
        name: "Memory Game",
        description: "Jeu de mémoire.",
        image: [
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721395011/Mes%20r%C3%A9alisations/Capture2_kus4q7.png",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721395011/Mes%20r%C3%A9alisations/Capture1_a7sovq.png",          
        ],
        tech: ["Next", "React"],
        video: ["https://res.cloudinary.com/dawkemcl5/video/upload/v1721395012/Mes%20r%C3%A9alisations/Enregistrement_2024-07-19_151428_nglpwv.mp4"],
        link: [""],
        linkGitHub: [
            "", 
        ]
    },
    {
        id: 3,
        name: "Morning New's",
        description: "Application Web affichant les news récentes du journal Tech Crunch via NewsAPI (webservice spécialisé dans la diffusion de news classées par source). Possibilité de sauvegarder ses articles favoris dans l’onglet “Bookmarks” ",
        image: [
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721390401/Mes%20r%C3%A9alisations/Capture1_w0ldit.png",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721390402/Mes%20r%C3%A9alisations/Capture2_enwffq.png",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721390401/Mes%20r%C3%A9alisations/Capture1_w0ldit.png",            
        ],
        tech: ["API", "Bcrypt", "Dotenv", "ExpressJS", "MongoDB", "NodeJS", "React", "Redux", "Uid2"],
        video: ["https://res.cloudinary.com/dawkemcl5/video/upload/v1721390284/Mes%20r%C3%A9alisations/Enregistrement_2024-07-19_135723_yb6i0y.mp4"],
        link: [""],
        linkGitHub: [
            "", 
        ]
    },
    {
        id: 4,
        name: "Food App",
        description: "Application Mobile affichant des recettes de cuisine. Possibilité de modifier le nombre de personnes pour avoir la bonne quantité d'ingrédients. Possibilité également d'ajouter des recettes en favorites.",
        image: [
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721661649/Mes%20r%C3%A9alisations/Screenshot_20240722_171211_Expo_Go_k73hp7.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721661648/Mes%20r%C3%A9alisations/Screenshot_20240722_171333_Expo_Go_nrh0v5.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721661648/Mes%20r%C3%A9alisations/Screenshot_20240722_171337_Expo_Go_fembv1.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721661648/Mes%20r%C3%A9alisations/Screenshot_20240722_171304_Expo_Go_qqlsr1.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721661648/Mes%20r%C3%A9alisations/Screenshot_20240722_171312_Expo_Go_ahz0nb.jpg"
        ],
        tech: ["Expo", "ReactNative", "Redux"],
        video: ["https://res.cloudinary.com/dawkemcl5/video/upload/v1721661649/Mes%20r%C3%A9alisations/Screen_Recording_20240722_171257_Expo_Go_w3ctjo.mp4"],
        link: [""],
        linkGitHub: [
            "https://github.com/nat0490/foodapp", 
        ]
    },
    {
        id: 5,
        name: "Mappulator",
        description: "Description : Application mobile de localisation. Notre position s'affiche sur une carte lors de notre connexion (après autorisation), ainsi que différents sites touristiques. On peut voir la distance nous séparant de chaque point.",
        image: [
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721664367/Mes%20r%C3%A9alisations/Screenshot_20240722_180321_Expo_Go_h1jpli.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721664367/Mes%20r%C3%A9alisations/Screenshot_20240722_175240_Expo_Go_bokccg.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721664368/Mes%20r%C3%A9alisations/Screenshot_20240722_180329_Expo_Go_lcrx3a.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721664368/Mes%20r%C3%A9alisations/Screenshot_20240722_180340_Expo_Go_r9sd5g.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721664368/Mes%20r%C3%A9alisations/Screenshot_20240722_180335_Expo_Go_tuhand.jpg",         
        ],
        tech: ["Dotenv", "Expo", "Expo-location", "ExpressJS","Node", "ReactNative", "Redux"],
        video: ["https://res.cloudinary.com/dawkemcl5/video/upload/v1721664378/Mes%20r%C3%A9alisations/Screen_Recording_20240722_180438_Expo_Go_xjrv7v.mp4"],
        link: [""],
        linkGitHub: [
            "https://github.com/nat0490/Mappulator", 
        ]
    },
    {
        id: 6,
        name: "Locapic",
        description: "Application mobile de localisation. Notre position s'affiche sur une carte lors de notre connexion (après autorisation). On peut ensuite ajouter des marqueurs sur la carte en utilisant deux options : en restant appuyé sur la carte ou via l'onglet “Places”, où l'on saisit le nom de la ville.",
        image: [
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721661928/Mes%20r%C3%A9alisations/Screenshot_20240722_162128_Expo_Go_pec9rr.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721661965/Mes%20r%C3%A9alisations/Screenshot_20240722_162234_Expo_Go_davbkb.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721661951/Mes%20r%C3%A9alisations/Screenshot_20240722_162217_Expo_Go_urumop.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721661951/Mes%20r%C3%A9alisations/Screenshot_20240722_162145_Expo_Go_qw0gal.jpg",
            "https://res.cloudinary.com/dawkemcl5/image/upload/v1721661951/Mes%20r%C3%A9alisations/Screenshot_20240722_162137_Expo_Go_mhaop2.jpg",               
        ],
        tech: ["Dotenv", "Expo", "Expo-location", "ExpressJS","Node", "MongoDB", "ReactNative", "Redux"],
        video: ["https://res.cloudinary.com/dawkemcl5/video/upload/v1721661931/Mes%20r%C3%A9alisations/Screen_Recording_20240722_162526_Expo_Go_m1ppou.mp4"],
        link: [""],
        linkGitHub: [
            "https://github.com/nat0490/locapic-frontend", 
            "https://github.com/nat0490/locapic-backend"
        ]
    },
    // {
    //     id: 7,
    //     name: "FaceUp",
    //     description: "Application mobile ",
    //     image: [
                           
    //     ],
    //     tech: ["Dotenv", "Expo", "Expo-location", "ExpressJS","Node", "MongoDB", "ReactNative", "Redux"],
    //     video: [""],
    //     link: [""],
    //     linkGitHub: [
    //         ""
    //     ]
    // },
    {
        id: 8,
        name: "Chef's Liberation",
        description: "Application Mobile permettant de voir les chefs à proximité de chez soi ou de les choisir via leur plat. Une fois un plat choisi, on vient choisir la date de la prestation (quand le chef viendra cuisiner chez soi). On peut venir modifier ses informations utilisateur via son profil. Egalement la possibilité de passer chef et de pouvoir proposer ses plats",
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
        tech: ["Bcrypt", "Cloudinary", "Dotenv", "Expo", "ExpressJS", "MongoDB", "NodeJS", "ReactNative", "Redux", "Uid2", "Vercel"],
        video: ["https://res.cloudinary.com/dawkemcl5/video/upload/v1720798232/Mes%20r%C3%A9alisations/Video_App_q8jgfh.mp4"],
        link: [""],
        linkGitHub: [
            "https://github.com/nat0490/Chefs-Frontend", 
            "https://github.com/nat0490/Chefs-Backend"
        ]
    },
    {
        id: 9,
        name: "Flowst",
        description: "Application Web permettant la publication de posts avec photos et #. Possibilité de changer de thème, faire des recherches par # et liker les posts/commentaires. Notifications également présentes.",
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
        tech: ["Bcrypt", "Cloudinary", "Dotenv", "ExpressJS", "MongoDB", "NodeJS", "React", "Redux", "Uid2", "Vercel"],
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


];

export default myRealisations;
