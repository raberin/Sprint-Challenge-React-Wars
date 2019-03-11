import React from "react"
import "./StarWars.css"

import Character from "./Character";

const CharacterList = (props) => {
    return (
     <div className="character-list">
       {props.character.map (char => {
           return (
               <Character
                key={char.created}
                name={char.name}
                birthYear={char.birth_Year}
                height={char.height}
                weight={char.mass}
                gender={char.gender}
                eyeColor={char.eye_color}
                />
           )
       })}
     </div>   
    )
}

export default CharacterList;