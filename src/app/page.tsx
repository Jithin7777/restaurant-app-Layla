import React from 'react'
import Navbar from './components/Navbar'
import Hero from './(section)/Hero'
import ExploreMenu from './(section)/ExploreMenu'
import AboutUs from './(section)/AboutUs'
import Specials from './(section)/Specials'
import SignatureSpecial from './(section)/(special)/SignatureSpecial'

const page = () => (
  <main>
    <div>
      <Navbar />
      <Hero />
      <ExploreMenu />
      <AboutUs />
      <Specials />
      <SignatureSpecial/>
    </div>
  </main>
)

export default page