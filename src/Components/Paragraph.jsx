import React from 'react'

const sizeMap = {
  large: "text-xl sm:text-2xl md:text-3xl",
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

    const paragraphName = `${sizeMap[size]} ${alignMap[align]} ${colorMap[color]} leading-normal font-normal`

  return (
    <>
        <p className={paragraphName} style={{fontFamily: "inter"}}>
            {text}
        </p>
    </>
  )
}

export default Paragraph