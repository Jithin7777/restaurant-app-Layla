import React from 'react'
import Navbar from './components/Navbar'
import Hero from './(section)/Hero'
import ExploreMenu from './(section)/ExploreMenu'

const page = () => {
  return (
    <main>
      <div>
        <Navbar/>
        <Hero/>
        <ExploreMenu/>
      </div>
    </main>
  )
}

export default page