import React from 'react'

const variant = {
    lighter: "bg-[#F3ECDE] text-black",
    darker: "bg-black text-white",
    outline: "bg-transparent border border-black text-black"
}

const sizeMap = {
    normal: "px-[1.25rem] py-[0.75rem] text-xs hover:bg-black hover:text-white transition duration-150",
    main: "px-[2rem] py-[1rem] md:px-[1.5rem] md:py-[1rem]",
    navbar: "sm:px-[2rem] sm:py-[0.5rem] hover:bg-black hover:text-white transition duration-150"
}

const Button = ({text, type = "darker", onClick, use}) => {

  let buttonName = `${variant[type]} ${sizeMap[use]} rounded-full font-light text-sm`;

  return (
    <>
        <button onClick={onClick} className={buttonName}>
            {text}
        </button>
    </>
  )
}

export default Button