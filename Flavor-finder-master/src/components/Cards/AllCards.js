import React from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";


import { useGlobalContext } from '../../context';
  
const AllCards = () => {

  const {meals, selectMeal, addToFavorites, favorites} = useGlobalContext();
    
    const renderCards = () => {

      if(meals.length < 1 ) {
        return <section className="pt-2 pb-5 text-2xl capitalize">
        <h4>No meals matched your search term. Please try again.</h4>
      </section>
      }

      return (
        <>
          {meals.map((m) => {
            return <div className="w-full md:w-1/2 lg:w-1/3 p-4 rounded-md">
              <img  onClick={() => { selectMeal(m.idMeal) }} src={m.strMealThumb} alt={m.strMeal} className='w-full hover:cursor-pointer object-cover rounded-t-md' />
              <div className='text-xl bg-white rounded-b-md px-5 py-3 shadow-lg flex justify-between items-center'>
                <h3 className=''>{m.strMeal}</h3> 
                <button onClick={() => addToFavorites(m.idMeal)}>{favorites.find(meal => meal.idMeal === m.idMeal) ? <FaHeart className='font-bold cursor-pointer hover:text-[#842029] hover:-translate-y-1 transition-all ease-in-out duration-300' />  : <FaRegHeart className='font-bold cursor-pointer hover:text-[#842029] hover:-translate-y-1 transition-all ease-in-out duration-300' /> }</button>
              </div>
            </div>
          }
          )}
        </>
        
        )
    }
  
    return (
      <>
        <ul className='py-4 lg:mt-20 lg:mx-24 flex flex-wrap'>{renderCards()}</ul>
      </>
    )
};

export default AllCards;