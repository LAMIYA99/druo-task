import React from 'react'
import BannerSection from '../sections/Home/BannerSection'
import ProductSection from '../sections/Home/ProductSection'
import HeroSection from '../sections/Home/HeroSection'
import PopularSection from '../sections/Home/PopularSection'
import CustomerSection from '../sections/Home/CustomerSection'

const Homethemplate = () => {
  return (
    <div>
      <BannerSection />
      <ProductSection />
      <HeroSection />
      <PopularSection/>
      <CustomerSection/>
    </div>
  )
}

export default Homethemplate