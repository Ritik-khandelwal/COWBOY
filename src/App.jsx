import React from 'react'
import VideoPlayer from './Components/VideoPlayer'
import Third from './Components/Third'
import Second from './Components/Second'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Second />
      <Third />
      <VideoPlayer />
      <Footer />
    </>
  )
}

export default App