import React from 'react'

const sizeMap = {
  large: "text-sm sm:text-base md:text-lg md:w-[35rem]",
  medium: "text-sm sm:text-sm md:text-sm md:w-[25rem]",
  small: "text-sm sm:text-sm md:text-sm"
}

const alignMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right"
}

const colorMap = {
  darker: 'text-black',
  lighter: 'text-white'
}

const Paragraph = ({ text, size = "large", align = "left", color="darker" }) => {

    const paragraphName = `${sizeMap[size]} ${alignMap[align]} ${colorMap[color]} leading-normal font-extralight`

  return (
    <>
        <p className={paragraphName}>
            {text}
        </p>
    </>
  )
}

export default Paragraph