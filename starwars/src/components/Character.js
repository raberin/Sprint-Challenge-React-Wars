import React from "react"
import "./StarWars.css"

const Character = (props) => {
    return (
        <div className="character-card">
          <h2>{props.name}</h2>
          <ul>
            <li><strong>Birth-Year:</strong> {props.birthYear}</li>
            <li><strong>Height:</strong> {props.height}cm</li>
            <li><strong>Weight:</strong> {props.weight}kg</li>
            <li><strong>Gender:</strong> {props.gender}</li>
            <li><strong>Eye-Color:</strong> {props.eyeColor}</li>
          </ul>
        </div>
    )
}

export default Character;