import React from "react"
import "./StarWars.css"

const Character = (props) => {
    return (
        <div className="character-card">
          <h2>Name: {props.name}</h2>
          <ul>
            <li>Birth-Year: {props.birthYear}</li>
            <li>Height: {props.height}cm</li>
            <li>Weight: {props.weight}kg</li>
            <li>Gender: {props.gender}</li>
            <li>Eye-Color: {props.eyeColor}</li>
          </ul>
        </div>
    )
}

export default Character;