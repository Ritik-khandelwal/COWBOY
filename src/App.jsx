import React from 'react'
import VideoPlayer from './Components/VideoPlayer'
import Third from './Components/Third'
import Second from './Components/Second'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Second />
      <Third />
      <VideoPlayer />
    </>
  )
}

export default App