import React from "react";
import Card from "./Card.js";
import Info from "./Info.js";

console.log(Info);



function App() {
 return <div>
      <h1>EmojiPedia</h1>
      {Info.map(props => ( <Card title={props.title} emoji={props.emoji} describe={props.describe} />)
)}
   </div>
}

export default App;
