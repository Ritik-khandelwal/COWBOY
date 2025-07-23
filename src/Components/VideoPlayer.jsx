import React from 'react'
import image from "../assets/images/videoPlayerImage.png"
import PlayButton from "./PlayButton"

const VideoPlayer = () => {

  let normalName = "w-full h-auto relative flex justify-center items-center";
  let responsiveName = "";

  let videoPlayerName = `${normalName} ${responsiveName}`

  return (
    <>
        <div className={videoPlayerName}>
            <img src={image} alt="Preview" className='w-full h-full object-cover object-center' />
            
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <PlayButton />
            </div>
        </div>
    </>
  )
}

export default VideoPlayer