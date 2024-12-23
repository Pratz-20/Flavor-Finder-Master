import React from 'react'

import { useGlobalContext } from '../../context';

const Favorits = () => {
    const { selectMeal, favorites, removeFromFavorites } = useGlobalContext();
  return (
    <div className='bg-[#222222] text-[#fff]'>
      <div className='mx-6 lg:mx-24'> 
        <h3 className='py-2 text-xl font-medium'>Favorites</h3>
          <div className='flex flex-wrap items-center '>
            { favorites.map(m => {
              return <div className='flex flex-col items-center justify-center mx-2 my-1 lg:my-4 '>
                <div className='w-12 h-12 lg:w-16 lg:h-16'>
                  <img src={m.strMealThumb} alt={m.strTitle} className='w-full h-full rounded-full border-4 hover:cursor-pointer' onClick={()=>selectMeal(m.idMeal, true)} />
                </div>
                <button className="text-xs py-2 lg:py-4 hover:text-[#b4d3fe]" onClick={()=>removeFromFavorites (m.idMeal)}>
                remove
              </button>
              </div>
            })}
          </div>
      </div>
    </div>
  )
}

export default Favorits;