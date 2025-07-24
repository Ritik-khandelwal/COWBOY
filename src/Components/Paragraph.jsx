import React from 'react'

const sizeMap = {
  large: "text-sm sm:text-base md:text-lg md:w-[35rem]",
  medium: "text-lg sm:text-xl md:text-2xl",
  small: "text-base sm:text-lg md:text-xl"
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