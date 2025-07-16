// import React from 'react'
import SlideBannerSection from '../homePageSection/slideBannerSection/SlideBannerSection'
import CarosuelCard from '../homePageSection/homePageCard/CarosuelCard'
import { mens_kurta } from '../homePageSectionData/CardData/mens_kurta'
import Footer from '../homePageSection/FooterSection/Footer'


const HomePage = () => {
  return (
    <div>
        <SlideBannerSection/>
        <div className='m-[1rem]'>
          <CarosuelCard data={mens_kurta} sectionName={"men's kurta"}/>
          <CarosuelCard data={mens_kurta} sectionName={"men's shose"}/>
          <CarosuelCard data={mens_kurta} sectionName={"men's shirt"}/>
          <CarosuelCard data={mens_kurta} sectionName={"women's saree"}/>
          <CarosuelCard data={mens_kurta} sectionName={"women's shirt"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default HomePage