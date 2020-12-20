import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Card = () => {

  const {items} = useSelector(({card}) => card)

  return (
    <div className="container container--card">
      <Link to="/net-house" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
      <div>
        <img className="card-block__image" src={items.image} alt={items.name}/>
        <h2 className="card-block__title">Имя - {items.name}</h2>
        <p className="card-block__text">Статус - {items.status}</p>
        <p className="card-block__text">Пол - {items.gender}</p>
        <p className="card-block__text">Локация - {items.location}</p>
      </div>
    </div>
  )
}

export default Card