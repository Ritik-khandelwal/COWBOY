import React from 'react'
import Button from './Button';
import Heading from './Heading';
import Paragraph from './Paragraph';
import heroImage from '../assets/images/heroImage.png'


const Hero = () => {

  let normalName = "grid grid-cols-1 w-full gap-10 h-auto px-5 py-10 md:py-15 md:px-10 relative";
  let responsiveName = "sm:grid-cols-2";

  let heroName = `${normalName} ${responsiveName}`

  return (
    <>
        <div className={heroName}>
            <div className='flex flex-col gap-10 md:gap-12'>
                <div>
                    <Heading text="The Future of Urban Mobility" size='large' align='left' />
                    <Paragraph text="Experience the ride of your life with Cowboy’s sleek, smart, and powerful electric bikes designed for urban adventurers." size="large" align='left'/>
                </div>
                <div className='flex flex-col gap-5 w-full sm:flex-row'>
                    <Button text="Explore Models" type='darker' use="main" />
                    <Button text="Start Your Ride" type='lighter' use="main" />
                </div>
            </div>
            <div className='w-full h-[17rem] bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${heroImage})`}}>
            </div>
        </div>
    </>
  )
}

export default Hero