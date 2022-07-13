import React from "react";

function Card(props){
    return <div className="Card">
        <dl>
            <dt>{props.title}</dt>
            <h2>{props.emoji}</h2>
            <dd>
                {props.describe}
            </dd>
        </dl>
   </div>
}

export default Card;