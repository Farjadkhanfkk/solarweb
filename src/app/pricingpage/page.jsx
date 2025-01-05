import React from 'react'
import Pricing from '../components/pricing/page'
import Navbar from '../components/mynavbar/page'
import Footer from '../components/Footer/page'

function page() {
  return (
    <div>
      <Navbar />
        <Pricing/>
        <Footer />
    </div>
  )
}

export default page