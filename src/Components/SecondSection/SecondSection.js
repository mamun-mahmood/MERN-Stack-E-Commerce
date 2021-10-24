import React from 'react'
import CarouselContailer from './Carousel/CarouselContailer'
import RightSideSection from './RightSideSection/RightSideSection'
import SideCategory from './SideCategory/SideCategory'

export default function SecondSection() {
    return (
        <div className="side_category d-flex pb-4 bg-white">
            <CarouselContailer/>
            <SideCategory/>
            <RightSideSection/>
        </div>
    )
}
