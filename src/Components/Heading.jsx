import React from 'react'

const sizeMap = {
  large: "text-4xl sm:text-5xl md:text-6xl",
  medium: "text-3xl sm:text-4xl md:text-5xl",
  small: "text-2xl sm:text-3xl md:text-4xl"
}

const alignMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right"
}

const colorMap = {
  darker: "text-black",
  lighter: "text-white"
}

const Heading = ({ text, size = "large", align = "left", color = "darker" }) => {
  const headingName = `${sizeMap[size]} ${alignMap[align]} ${colorMap[color]} leading-normal font-semibold`

  return (
    <h1 className={headingName} style={{fontFamily: "inter"}}>
      {text}
    </h1>
  )
}

export default Heading
