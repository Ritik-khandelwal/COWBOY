import React from 'react'

const Footer = () => {

  let normalName = "py-3 w-full text-center text-black text-[1.25em] font-extralight leading-normal";
  let responsiveName = "md:text-[1.5rem]";

  let footerName = `${normalName} ${responsiveName}`

  return (
    <>
      <p className={footerName}>Developed with ❤️ by Ritik khandelwal</p>
    </>
  )
}

export default Footer