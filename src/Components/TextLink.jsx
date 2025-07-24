import React from 'react'

const TextLink = ({text}) => {
  return (
    <>
        <a className='text-black font-light text-sm hover:font-normal' href="#">{text}</a>
    </>
  )
}

export default TextLink