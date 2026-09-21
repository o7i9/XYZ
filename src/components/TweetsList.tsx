import type {Tweet} from "../types/Tweet"; 
import type {ReactElement} from "react"; 
import {TweetPreview} from "./TweetPreview"; 

//entrée : Array<Tweet>
//sortie : Array<ReactElement> donc les TweetPreview 
type TweetsListProps = {
    tweets: Array<Tweet>; 
}; 

export function TweetsList ({tweets} : TweetsListProps) : ReactElement {
    return (
        <section>
            {tweets.map((tweet) =>{
                return <TweetPreview key={tweet.id} tweet={tweet}/>;
            })}
        </section>
    ); 
}