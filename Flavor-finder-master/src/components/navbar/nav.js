import React, { useState } from 'react'
import {BsBookmarkHeart} from "react-icons/bs";

import { useGlobalContext } from '../../context';

const Nav = () => {

  const NavSm = () => {
    const {favorites, fetchRandomMeal, setSearchTerm, toggleShowFavorite} = useGlobalContext();
    const [text,setText] = useState('');
    const handleChange = (e) => {
      setText(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(text) {
          setSearchTerm(text);
      }
    }

    const handleRandomMeal = () => {
      setSearchTerm('');
      setText('');
      fetchRandomMeal();
    }

    return(
        <div className='lg:hidden bg-[#fff] px-2 lg:px-0'>
            <div className='flex justify-between items-center'>
                <h3 className="text-[#0F172A] text-2xl lg:text-xl font-bold px-4 py-6 lg:py-2 ">FlavorFinder</h3>
                <button className='' onClick={toggleShowFavorite}>
                  <BsBookmarkHeart className='text-3xl' />
                    <div>
                      <p className='absolute text-center text-xs lg:text-sm top-[16px] right-[5px] lg:top-[-16px] lg:right-[-8px] h-4 w-4 bg-[#b4d3fe] rounded-full'>{favorites.length}</p>
                    </div>
                </button>
            </div>
            <div className='px-4 lg:px-0'>
              <form onSubmit={handleSubmit}>
                <input type='text' value={text} onChange={handleChange} className='px-2 py-1 border-2 bg-[#f1f5f9] border-[#f1f5f9]' />
                <button type='submit' className='mx-3 rounded-md bg-[#03449d] hover:bg-[#034caf]   px-4 py-1 text-white'>Search</button>
              </form>
              <button className='my-2 lg:my-0 lg:mt-1 rounded-md bg-[#b4d3fe] hover:bg-[#842029] px-3 py-1 text-[#03449d] hover:text-white' onClick={handleRandomMeal}>Surprise me!</button>
            </div>
        </div>
    )
  }

  const NavLg = () => {
    const [text,setText] = useState('');
    const handleChange = (e) => {
      setText(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(text) {
          setSearchTerm(text);
      }
    }

    const handleRandomMeal = () => {
      setSearchTerm('');
      setText('');
      fetchRandomMeal();
    }


    const {favorites, fetchRandomMeal, setSearchTerm, toggleShowFavorite} = useGlobalContext();
    return(
        <div className='hidden lg:block bg-[#fff] drop-shadow'>
          <div className='py-3 flex items-center justify-between mx-6 text-3xl'>
            <h3 className="text-[#0F172A] px-4 py-2">FlavorFinder</h3>
            <button className='relative transition ease-in-out duration-900' onClick={toggleShowFavorite}>
            <BsBookmarkHeart />
              <div>
                <p className='absolute text-sm text-center top-[-16px] right-[-8px] h-5 w-5 bg-[#b4d3fe] rounded-full'>{favorites.length}</p>
              </div>
            </button>
          </div>
          <div className='py-4 mx-24 flex items-center'>
            <form onSubmit={handleSubmit}>
              <input type='text' value={text} onChange={handleChange} className='px-2 py-1 bg-[#f1f5f9]' placeholder='search a meal'/>
              <button type='submit' className='mx-3 rounded-md bg-[#03449d] hover:bg-[#034caf] px-3 py-1 text-white'>Search</button>
            </form>
            <button className='mt-1 rounded-md bg-[#b4d3fe] hover:bg-[#842029] px-3 py-1 text-[#03449d] hover:text-white' onClick={handleRandomMeal}>Surprise me!</button>
          </div>
        </div>
    )
  }


  return (
    <div className=''>
        <NavSm />
        <NavLg />
    </div>
  )
}

export default Nav;