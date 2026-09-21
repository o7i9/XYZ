/*
Un composant, c'est une fct Javascript qui retourne du HTML 
(plus précisément du JSX qui ressemble à du HTML)

exemple : 
function Bonjour() {
   return <h1> Salut ! </h1>; 
}
*/

import type {Tweet} from "../types/Tweet"; 
import type { ReactElement } from "react";

// on décrit la forme des props 
type TweetPreviewProps = {
    tweet: Tweet; 
}; 

//on déclare le composant 

// le type de retour pour un composant React qui retourne du JSX est React.ReactElement 


export function TweetPreview ({tweet}: TweetPreviewProps) : ReactElement {

    const dateLisible = new Date (tweet.createdAt).toLocaleDateString("fr-FR", {
    day: "numeric", // fct pour transformer la date en quelque chose de lisible
    month: "long", 
    year: "numeric",
    }); 

    return (
        <article>
            <h3> {tweet.authorName}</h3>
            <p>@{tweet.authorHandle}</p>
            <p> {dateLisible} </p>
            {tweet.image && (
                <img src={tweet.image.url} alt={tweet.image.alt className="tweet-preview-image"} />
            )}
            <p> {tweet.content} </p>

        </article>
    )
} //pas besoin de ; comme dans les fonctions fléchée


//{condition && <p>Ce texte apparaît seulement si condition est vrai</p>}
/*Si tweet.image existe on produit une <img> sinon rien du tout, pas de balise vide ou espace réservé
 */