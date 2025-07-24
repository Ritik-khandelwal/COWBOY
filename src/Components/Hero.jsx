import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Button from './Button'
import heroImage from '../assets/images/heroImage.png'

const Hero = () => {
  return (
    <>
        <div className='bg-blue-300 sm:flex px-[1rem] pt-[3rem] sm:px-[1.5rem] sm:pt-[1rem] md:px-[2.5rem] md:pt-[1rem]'>
            <div className='w-full h-auto flex items-end justify-left sm:py-[5rem]'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-2'>
                        <Heading text="The Future of Urban Mobility" size='large' />
                        <Paragraph text='Experience the ride of your life with Cowboy’s sleek, smart, and powerful electric bikes designed for urban adventurers.' size='large' />
                    </div>
                    <div className='flex flex-col gap-4 sm:flex-row'>
                        <Button text='Explore Models' use='main' />
                        <Button text='Start Your Ride' type='lighter' use='main' />
                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex justify-end items-end pt-[3rem] sm:pt-[10rem]'>
                <img className='md:w-[30rem] md:h-auto' src={heroImage} alt="Preview" />
            </div>
        </div>
    </>
  )
}

export default Hero