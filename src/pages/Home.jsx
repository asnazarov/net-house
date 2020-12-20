import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CharactersBlock, LoadingBlock} from "../components";
import {fetchBurgers, setFetching} from "../redux/actions/characters";
import {addCharacterToCart} from "../redux/actions/card";


const Home = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()
  const {items, isLoaded, fetching} = useSelector(({characters}) => characters)

  useEffect(() => {
    if (fetching) {
      setCurrentPage(pageNum => currentPage < 34 && pageNum + 1)
      dispatch(fetchBurgers(currentPage))
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight === Math.ceil(e.target.documentElement.scrollTop + window.innerHeight)) {
      dispatch(setFetching(true))
    }
  }

  const handleAddCharacterToCard = obj => {
    dispatch(addCharacterToCart(obj))
  }

  const loading = Array(20).fill(<LoadingBlock/>)
  const characters = items?.map(obj => <CharactersBlock
    onClickAddCard={handleAddCharacterToCard}
    {...obj}
    key={obj.id}
  />)

  return (
    <div className="container">
      <div className="content__items">
        {
          isLoaded ? (characters) : (loading)
        }
        {
          fetching && characters && loading
        }
      </div>
    </div>
  )
}

export default Home