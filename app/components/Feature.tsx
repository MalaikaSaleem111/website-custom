import React from 'react'
import Link from 'next/link'
import"../styles/Feature.css"
import Image from 'next/image';

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
          <Image
            src="/Toyota-Corolla.jpg"
            alt="Toyota Corolla"
            width={200}
            height={192}
          />
          <h3>Toyota Corolla</h3>
          <p>PKR 59.7 - 75.5 lacs</p>
        </Link>
      </div>
  
      <div className="car-card">
        <Link href="/suzuki_alto">
          <Image
            src="/Suzuki_Alto.png"
            alt="Suzuki Alto"
            width={200}
            height={192}
          />
          <h3>Suzuki Alto</h3>
          <p>PKR 23.3 - 30.5 lacs</p>
        </Link>
      </div>
  
      <div className="car-card">
        <Link href="/honda_city">
          <img
            src="/Honda_City.jpg"
            alt="Honda City"
            width={200}
            height={192}
          />
          <h3>Honda City</h3>
          <p>PKR 46.5 - 58.5 lacs</p>
        </Link>
      </div>
  
      <div className="car-card">
        <Link href="/honda_civic">
          <img
            src="/Honda-Civic.jpg"
            alt="Honda Civic"
            width={200}
            height={192}
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