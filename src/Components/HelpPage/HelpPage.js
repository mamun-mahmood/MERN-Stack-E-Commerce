import React from 'react'
import BannerImg from '../../Resources/background-blue-banner-3.jpg'
export default function HelpPage() {
    return (
        <div className="container" style={{textAlign: 'center'}}>
            <div>
                <p>Help Page</p>
            </div>
            <div className="round p-4" style={{backgroundColor: '#1d5dc7'}}>
                <p className="text-white">Hi, how can we help you?</p>
                <form action="">
                    <input type="text" placeholder="Search a question e.g. How to buy?" />
                </form>
            </div>
            <div>
                <p>Where is My order</p>
                <div>
                    <p>Icon</p>
                    <p>My Oder <br /><small>Track Your order.</small></p>
                </div>
            </div>
        </div>
    )
}
