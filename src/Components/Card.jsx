import React from 'react'
import Heading from './Heading';
import Paragraph from './Paragraph';
import Button from './Button';

const Card = ({url, heading, paragraph, buttonText}) => {

  let normalName = "w-full h-[35rem] flex p-5 items-end bg-cover bg-center bg-no-repeat ";
  let responsiveName = "sm:p-8 md:px-10 sm:h-[40rem] md:h-[45rem] md:p-10";

  let cardName = `${normalName} ${responsiveName}`

  return (
    <>
        <div className={cardName} style={{backgroundImage: `url(${url})`}}>
            <div className='flex flex-col gap-7 items-start'>
                <div className='flex flex-col gap-2 md:gap-3'>
                    <Heading text={heading} size='small' align='left' color="lighter" />
                    <Paragraph text={paragraph} size="small" align='left' color="lighter" />
                </div>
                <Button text={buttonText} type='lighter' use="normal" />
            </div>
        </div>
    </>
  )
}

export default Card