import React from 'react'

const CardItem = (props)=>{
    console.log(props)
  return  (
      props.starwarsChars.map(character =>
        <div className="character-card" key={character.name}>
          <li className="character-name">{character.name.toUpperCase()}</li>
          <h3>birth year: {character.birth_year}</h3>
          <h3>height: {character.height}cm</h3>
          <h3>mass: {character.height}kg</h3>
          <h3>hair color: {character.hair_color}</h3>
          <h3>skin color: {character.skin_color}</h3>
        </div>
      )
      )
}
export default CardItem