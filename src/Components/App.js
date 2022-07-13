import React from "react";
import Card from "./Card.js";
import Info from "./Info.js";

console.log(Info);

function Entry(props){
   return <Card 
      title={props.title}
      emoji={props.emoji}
      describe={props.describe}
   />
}

function App() {
 return <div>
      <h1>EmojiPedia</h1>
      {Info.map(Entry)}
   </div>
}

export default App;
