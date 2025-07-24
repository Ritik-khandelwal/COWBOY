import React from 'react'

const variant = {
    lighter: "bg-white text-black",
    darker: "bg-black text-white",
    outline: "bg-none border border-black text-black"
}

const sizeMap = {
    normal: "px-[2rem] py-[1rem]",
    main: "px-[2rem] py-[1rem] md:px-[2.5rem] md:py-[1.5rem]",
    navbar: "sm:px-[2rem] sm:py-[0.5rem] hover:bg-black hover:text-white transition duration-150"
}

const Button = ({text, type = "darker", onClick, use}) => {

  let buttonName = `${variant[type]} ${sizeMap[use]} rounded-full font-light`;

  return (
    <>
        <button onClick={onClick} className={buttonName}>
            {text}
        </button>
    </>
  )
}

export default Button