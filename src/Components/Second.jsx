import React from 'react'
import Card from "./Card"
import cardImage1 from "../assets/images/cardImage1.jpeg"
import cardImage2 from "../assets/images/cardImage2.jpeg"

const Second = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <Card url={cardImage1} heading="Classic" paragraph="Meet the Classic and you've found one agile ride with an incredibly swift side. Gain serious power on an electric bike that's built around you." buttonText="Start Your Ride"/>
        <Card url={cardImage2} heading="Cruiser" paragraph="Meet the Cruiser for an elevated take on the classic Cowboy. A higher vantage gives you a comfortable advantage with an electric bike that's built around you." buttonText="Start Your Ride"/>
    </div>
  )
}

export default Second