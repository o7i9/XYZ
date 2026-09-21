import type {Tweet} from "../types/Tweet"; 

export const collectionsTweets : Array<Tweet> = [
    // j'ai utilisé un générateur UUID en ligne pour les id
    {
        id : "b9422fee-3ad2-4343-91e7-df611c53ca88", 
        authorName: "Lina Moreau", 
        authorHandle: "lina_reads", 
        createdAt: "2026-02-10T08:15:00Z",
        content:"Je viens de finir une biographie d'Ada Lovelace et je suis encore bouleversée. Première programmeuse de l'histoire, poétesse des mathématiques, visionnaire à une époque qui ne savait pas quoi faire d'elle. Ce genre de lecture te rappelle pourquoi les biographies sont essentielles. 🕯️"
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/500px-Ada_Lovelace_portrait.jpg",
            alt: "Portrait d'Ada Lovelace, pionnière de l'informatique",
        }, 

    }, 
    {
        id : "72fb25b5-22b1-4571-b7de-1bacd3905ffc",
        authorName: "Adam Bensalem",
        authorHandle: "adamfantasy",
        createdAt: "2026-02-11T12:30:00Z",
        content: "Petit rappel BookTok : un bon worldbuilding, ce n'est pas une carte de 40 pages. C'est trois détails bien placés qui donnent l'impression que le monde existait avant le premier chapitre.",
    }, 
    {
        id: "2ba1b40a-e8aa-401f-aaa4-9f3225304459",
        authorName: "Clara Nguyen",
        authorHandle: "clara_romance",
        createdAt: "2026-02-12T09:05:00Z",
        content: "Le trope « enemies to lovers » mais elle lui prête son stylo pendant l'examen. Je ne m'en remets pas. 😭❤️", 
    }, 
    {
        id:"1ddb29dc-04d5-4165-b64c-00c24301d6ef",
        authorName: "Sami Belkacem",
        authorHandle: "sami_thriller",
        createdAt: "2026-02-12T18:45:00Z",
        content: "Livre en cours : la biographie de Grace Hopper. Elle a inventé le premier compilateur, popularisé le terme « bug » après avoir trouvé un papillon de nuit dans un relais, et passé sa vie à expliquer à des militaires pourquoi l'informatique allait tout changer. Lire sa vie, c'est lire un thriller où l'héroïne gagne à la fin. Je recommande à quiconque aime les récits de femmes qui refusent qu'on leur dise non.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg",
            alt: "Portrait de Grace Hopper, informaticienne et contre-amirale",
        }, 
    }, 
    {
        id:"f0d0faca-a010-43c7-b2a3-f298b8fed701",
        authorName: "Inès Rahmani",
        authorHandle: "ines_books",
        createdAt: "2026-02-13T07:20:00Z",
        content: "TBR pile : 47 livres. Livres lus ce mois-ci : 1. Et pourtant je viens d'en acheter trois. Le problème, c'est que je ne vois pas le problème. 📚",
   
    }, 
    {
        id:"7439f160-2c45-49d3-abfd-5285fa5dc6a2",
        authorName: "Théo Lambert",
        authorHandle: "theo_sff",
        createdAt: "2026-02-13T14:00:00Z",
        content: "Astuce pour choisir sa prochaine fantasy : ouvrez à la page 50. Si le personnage principal a déjà un objectif clair et au moins un allié ambigu, c'est bon signe. Si à la page 50 il pleut encore sur un village sans nom, refermez doucement et prenez autre chose.", 
    }, 
    {
        id:"15d6d838-424b-43bf-abfc-743fa97a67fe", 
        authorName: "Chloé Bertrand",
        authorHandle: "chloe_romance",
        createdAt: "2026-02-14T10:10:00Z",
        content: "Saint-Valentin oblige : je relis mon roman préféré pour la énième fois, celui où ils tombent amoureux sous la pluie à la page 212. Je connais la scène par cœur et pourtant je pleure à chaque fois. ☕💌",
    }, 
    {
        id:"bce3fe66-2be5-4a52-8cab-a3c091c5715e",
        authorName: "Youssef Karim",
        authorHandle: "youssef_reads",
        createdAt: "2026-02-14T16:55:00Z",
        content: "J'ai prêté un thriller à ma sœur. Elle m'a envoyé « je te déteste » à 1 h du matin avec un screenshot du chapitre 17. C'est la plus belle déclaration d'amour entre lecteurs. Mission accomplie.", 
    }, 
    {
        id:"b6c6de4a-57a6-46a1-aafd-702f3fbae70d", 
        authorName: "Manon Delacroix",
        authorHandle: "manon_fantasy",
        createdAt: "2026-02-15T09:42:00Z",
        content: "Le moment où tu réalises que le tome 2 d'une trilogie sort dans six mois. Six. Mois. Je vais devoir relire le tome 1 pour me souvenir qui est qui, et honnêtement, c'est presque une bénédiction.",
        image: {
            url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
            alt: "Bibliothèque remplie de romans fantasy et de livres reliés",
        },
    }, 
    {
        id:"a4e5daf2-7a9d-457a-aef3-fa1335aa1ba8", 
        authorName: "Gabriel Nkosi",
        authorHandle: "gabriel_booktok",
        createdAt: "2026-02-16T08:00:00Z",
        content: "Rappel amical pour tous ceux qui débutent sur BookTok : un contenu de tweet peut être long, très long, et c'est exactement pour ça qu'on ajoute un bouton « Voir plus » dans le prochain exercice. En attendant, ce tweet-ci fait exprès de dépasser allègrement la limite des cent quatre-vingts caractères pour qu'on puisse tester le repli et le dépliage du texte dans le composant TweetPreview. Prenez un roman, installez-vous confortablement, et amusez-vous bien avec React !",
    }, 
]; 
