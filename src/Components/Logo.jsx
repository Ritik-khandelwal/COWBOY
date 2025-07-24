import React from 'react'
import logo from '../assets/images/logo.png'

const Logo = () => {
  return (
    <>
        <div className='w-[6rem] sm:w-[7rem] md:w-[8rem]'>
            <a href='/'><img src={logo} alt="Preview" /></a>
        </div>
    </>
  )
}

export default Logo