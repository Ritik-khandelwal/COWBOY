import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Button from './Button'
import thirdImage from "../assets/images/thirdImage.png"

const Third = () => {
  return (
    <>
        <div className='w-full h-auto flex justify-center items-center'>
            <div className='w-auto h-auto px-4 pt-4 sm:px-8 sm:pt-8 md:px-[20rem] md:pt-[8rem]'>
                <div className='flex flex-col items-center gap-5 md:gap-8'>
                    <div>
                        <Heading text="Your Ride, Your Way—Powered by the Cowboy App" size='medium' align='center' />
                        <Paragraph text="Unlock the full potential of your Cruiser & Classic bike with seamless app integration." size="medium" align='center'/>
                    </div>
                    <Button text="Download App" type='darker' use="normal" />
                </div>
                <div className='w-full h-[25rem] sm:h-[40rem] md:h-[50rem] bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${thirdImage})`}}>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Third