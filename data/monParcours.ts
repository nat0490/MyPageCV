type Item = {
    id: number,
    nom: string,
    postes:string[],
    date: 
        {debut: string,
        fin: string,}
    ,    
    type: string,
//etude / diplome / travail / naissance / look
    description: string,
    softSkills: string[],
    competences:string[],
    lieu: string,
    image: string,
}


const monParcours: Item[] = [
    {
        id: 1,
        nom: "Lycée",
        postes:["Bac S"],
        date: 
            {debut: "2004",
            fin: "2007",}
        ,    
        type:"diplome",
        // description: "Passionné par les Math, la physique et les sciences de l'ingénieur. Je n'ai pas pris cette option car un prof nous avait dit \"Attention, c'est 8h par semaines cette matière\". J'obtient mon Bac S grace à mes matières de prédilection.",
        // description: "Appétence pour les Maths et la Physique.",
        description:"",
        softSkills:[""],
        competences:[""],
        lieu:"Decines, 69150",
        image: "string",
    },

    {
        id: 2,
        nom: "Universitée",
        postes:["Economie gestion"],
        date: 
            {debut: "2007",
            fin: "2009",}
        ,    
        type:"etude",
        // description: "La découverte de la vie en université. Partie en économie gestion, je n'ai validé que la majeure du premier semestre. J'ai voulu me réorienter par la suite sur une Licence Maths Info à l'Universitée Lyon 1.",
        description: "",
        softSkills:[""],
        competences:[""],
        lieu:"Universitée Jean Moulin Lyon 3",
        image: "string",
    },
    {
        id: 3,
        nom: "Mc Donald's",
        postes:["Equipière polyvalente","Manageure","Directrice adjointe"],
        date: 
            {debut: "Octobre 2009",
            fin: "Septembre 2019",}
        ,    
        type:"travail",
        description: "Management des équipes, gestion plannings/commandes, respect des normes et procédures, gestion des priorités, satisfaction clients.",
        softSkills:[
            "Adaptabilité",
            "Autonomie", 
            "Communication", 
            "Curiosité", 
            "Flexibilité",
            "Gestion du temps",
            "Leadership", 
            "Organisation", 
            "Persévérance",
            "Travail en équipe",
           ],
        competences:[""],
        lieu:"Lyon Est",
        image: "string",
    },
    {
        id: 4,
        nom: "Geodis",
        postes:["Cheffe d'équipe","Responsable d'activité"],
        date: 
            {debut: "Octobre 2019",
            fin: "Août 2023",}
        ,    
        type:"travail",
        description: "Sur la partie Préparation & Expedition de commandes: Gestion de l'activité & Analyse des perfomances, management des équipes (CE, Manutentionnaires, Préparateurs de commande), gestion plannings/recrutements, respect des normes et procédures, gestion des priorités et atteindre les objectifs.",
        softSkills:[
            "Adaptabilité",
            "Autonomie", 
            "Communication", 
            "Curiosité", 
            "Flexibilité",
            "Gestion du temps",
            "Leadership", 
            "Organisation", 
            "Persévérance",
            "Travail en équipe",
           ],
        competences:[""],
        lieu:"Satolas et bonce, 39290",
        image: "string",
    },
    {
        id: 5,
        nom: "Everial, R&D",
        postes:["Immersion Professionnelle"],
        date: 
            {debut: "Avril 2023",
            fin: "Avril 2023",}
        ,    
        type:"look",
        description: "Découverte du métier de Développeur en entreprise pour confirmer mon choix de reconversion.",
        softSkills:["Curiosité"],
        competences:[""],
        lieu:"Technolac, 73770",
        image: "string",
    },
    {
        id: 6,
        nom: "Titre RNCP6",
        postes:["Concepteur-développeur d'applications Web & Mobile"],
        date: 
            {debut: "Octobre 2023",
            fin: "Juin 2024",}
        ,    
        type:"diplome",
    //etude / diplome / autre
        description: "Bootcamp de 10 semaines focus Javascript (React & React native) mettant en avant la pratique avec la réalisation de 10 projets.",
        softSkills:[
            "Adaptabilité",
            "Autonomie", 
            "Curiosité", 
            "Persévérance",
           ],
        competences:[
            "Conception et maquettage d’une application web & mobile",
            "Pilotage d’un projet d’application web & mobile",
            "Concevoir, manipuler, administrer et sécuriser une base de données en lien avec une application web & mobile",
            "Développement d’une application web & mobile",
            "Mise en production d’une application web & mobile",
            ],
        lieu:"La Capsule, Remote",
        image: "string",
    },
]


export default monParcours;