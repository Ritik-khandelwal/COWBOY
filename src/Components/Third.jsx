import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Button from './Button'
import thirdImage from "../assets/images/thirdImage.png"

const Third = () => {
  return (
    <>
        <div className='w-full h-auto flex justify-center items-center sm:flex px-[1rem] pt-[3rem] sm:px-[1.5rem] sm:pt-[1rem] md:px-[2.5rem] md:pt-[1rem]'>
            <div className='flex flex-col gap-[3rem] md:gap-[5rem] w-auto h-auto px-1 pt-3 sm:px-[5rem] sm:pt-[3rem] lg:px-[17rem] lg:pt-[5rem]'>
                <div className='flex flex-col items-center gap-5 md:gap-7'>
                    <div className='flex flex-col gap-4 items-center'>
                        <Heading text="Your Ride, Your Way—Powered by the Cowboy App" size='medium' align='center' />
                        <Paragraph text="Unlock the full potential of your Cruiser & Classic bike with seamless app integration." size="medium" align='center'/>
                    </div>
                    <Button text="Download App" type='darker' use="normal" />
                </div>
                <div className='w-full h-auto'>
                    <img src={thirdImage} alt="Preview" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Third