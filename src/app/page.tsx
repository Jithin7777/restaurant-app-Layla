import React from 'react'
import Navbar from './components/Navbar'
import Hero from './(section)/Hero'
import ExploreMenu from './(section)/ExploreMenu'
import AboutUs from './(section)/AboutUs'
import Specials from './(section)/Specials'

const page = () => (
  <main>
    <div>
      <Navbar />
      <Hero />
      <ExploreMenu />
      <AboutUs />
      <Specials />
    </div>
  </main>
)

export default page