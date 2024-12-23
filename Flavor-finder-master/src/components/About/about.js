import React from 'react'

const About = () => {
  return (
    <div className='pt-48 lg:pt-52 px-12 flex flex-col md:flex-row items-center justify-center'>
        <img 
            src="https://6486c1fb8c6c5218f9e5bd52--venerable-malabi-8e2b41.netlify.app/static/media/undraw_cooking_p7m1.6e8012853dc914d221ae0f14b4599899.svg" 
            className='h-48' alt="flavor-finder"
         />
        <div className='mx-12 flex flex-col items-center justify-center'>
            <h2 className='my-3 lg:my-0 text-5xl mb-6'>FlavorFinder</h2>
            <p className='my-3 lg:my-2 lg:mb-6 text-center'>
            Welcome to FlavorFinder, your go-to destination for finding and saving incredible recipes.
            </p>
        </div>
    </div>
  )
}

export default About;