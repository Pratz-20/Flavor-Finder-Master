import React from 'react'
import { useGlobalContext } from '../../context';

const Modal = () => {
    console.log("hi");
    const {selectedMeal, closeModal} = useGlobalContext();
    const { strMealThumb:image, strMeal:title, strInstructions:text, strSource:source} = selectedMeal;
    console.log(selectedMeal);
  return (
    <>
        <div className='fixed grid items-center justify-center z-100  top-0 left-0 bg-[#000000d9] w-screen h-screen'>
            <div className='w-[80vw] h-[80vh] lg:w-[60vw] lg:h-[80vh] overflow-scroll bg-white rounded-md'>
              <img src={image} alt={title} className='w-full h-64 object-cover rounded-t-md' />
              <div className='flex flex-col items-start px-6'>
                <h3 className='text-3xl my-4'>{title}</h3>
                <h4 className='text-xl my-2'>Cooking Instructions</h4>
                <p>{text}</p>
                <a href={source} className='text-xl underline my-4'>Original Source
                </a>
                <button className='bg-[#842029] hover:bg-[#000] text-lg text-white px-3 py-1 rounded my-3' onClick={ closeModal }>Close</button>
              </div>
            </div>
        </div>
    </>
  )
}

export default Modal;