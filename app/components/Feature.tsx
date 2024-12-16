import React from 'react'
import Link from 'next/link'
import"../styles/Feature.css"

const Feature = () => {
  return (
    <section className="section">
    <div className="flex-container">
      <h3 className="heading">Featured New Cars</h3>
      <h4 className="subheading">View All New Cars</h4>
    </div>
  
    <div className="category-buttons">
      <h2>Popular</h2>
      <h2>Upcoming</h2>
      <h2>Newly Launched</h2>
    </div>
  
    <div className="car-cards">
      <div className="car-card">
        <Link href="/toyota-corolla">
          <img
            src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674"
            alt="Toyota Corolla"
          />
          <h3>Toyota Corolla</h3>
          <p>PKR 59.7 - 75.5 lacs</p>
        </Link>
      </div>
  
      <div className="car-card">
        <Link href="/suzuki_alto">
          <img
            src="https://cache4.pakwheels.com/system/car_generation_pictures/6013/medium/Suzuki_Alto_-_PNG.png?1635945100"
            alt="Suzuki Alto"
          />
          <h3>Suzuki Alto</h3>
          <p>PKR 23.3 - 30.5 lacs</p>
        </Link>
      </div>
  
      <div className="car-card">
        <Link href="/honda_city">
          <img
            src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/medium/Honda_City_Front.jpg?1651424945"
            alt="Honda City"
          />
          <h3>Honda City</h3>
          <p>PKR 46.5 - 58.5 lacs</p>
        </Link>
      </div>
  
      <div className="car-card">
        <Link href="/honda_civic">
          <img
            src="https://cache4.pakwheels.com/system/car_generation_pictures/7370/medium/Cover.jpg?1677570254"
            alt="Honda Civic"
          />
          <h3>Honda Civic</h3>
          <p>PKR 86.6 - 99.0 lacs</p>
        </Link>
      </div>
    </div>
  </section>
  
  );
};

export default Feature;