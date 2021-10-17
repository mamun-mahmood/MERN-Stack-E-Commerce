import React from 'react'
import CarouselContailer from './Carousel/CarouselContailer'
import RightSideSection from './RightSideSection/RightSideSection'
import SideCategory from './SideCategory/SideCategory'

export default function SecondSection() {
    return (
        <div className="side_category  d-flex mt-1 pb-4 bg-white">
            <SideCategory/>
            <CarouselContailer/>
            <RightSideSection/>
        </div>
    )
}
