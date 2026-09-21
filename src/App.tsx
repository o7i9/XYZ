import type {ReactElement} from "react"; 
import "./App.css"; 
import {initialTweets} from "./components/TweetsList"; 
import {TweetsList} from "./components/TweetsList"; 


export function App(): ReactElement {
  return (
    <main>
      <h1> Fil de tweets </h1>
      <TweetsList tweets={initialTweets} />
    </main>
  ); 
}