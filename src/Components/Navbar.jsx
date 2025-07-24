import React from 'react'
import Logo from './Logo'
import Button from './Button'
import Hamburger from './Hamburger'
import TextLink from './TextLink'

const Navbar = () => {
  return (
    <>
        <div className='flex bg-[#E6DAC0] sticky top-0 items-center justify-between px-[1rem] py-[1rem] sm:px-[1.5rem] sm:py-[1rem] md:px-[2.5rem] md:py-[1rem]'>
            <div>
                <Logo />
            </div>
            <div className='max-sm:hidden flex gap-8'>
                <TextLink text='E-bike' />
                <TextLink text='Adaptive Power' />
                <TextLink text='Connect' />
                <TextLink text='Care' />
            </div>
            <div className='max-sm:hidden'>
                <Button text="Order Now" type='outline' use='navbar' />
            </div>
            <div className='sm:hidden'>
                <Hamburger />
            </div>
        </div>
    </>
  )
}

export default Navbar