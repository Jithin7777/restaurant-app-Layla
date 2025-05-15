import React from 'react'
import Navbar from './components/Navbar'
import Hero from './(section)/Hero'
import ExploreMenu from './(section)/ExploreMenu'
import AboutUs from './(section)/AboutUs'

const page = () => {
  return (
    <main>
      <div>
        <Navbar/>
        <Hero/>
        <ExploreMenu/>
        <AboutUs/>
      </div>
    </main>
  )
}

export default page