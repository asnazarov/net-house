import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


const CharactersBlock = ({id, name, image, status, gender, location, onClickAddCard, addedCount}) => {

  const onCardSelection = () => {
    const obj = {
      id,
      name,
      image,
      status,
      gender,
      location: location.name
    }
    onClickAddCard(obj)
  }
  return (
    <Link to={`/net-house/card-${id}`} onClick={onCardSelection} className="card-block">
        <img className="card-block__image"
             src={image}
             alt="Рик и Морти"/>
        <h4 className="card-block__title">{name}</h4>
    </Link>

  )
}

CharactersBlock.propTypes = {
  name: PropTypes.string
}

export default CharactersBlock