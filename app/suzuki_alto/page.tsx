import Link from "next/link"
import "../styles/car.css"
export default function Suzuki_Alto(){
    return (
      <div className="container">
        {/* Page Title */}
        <h1 className="title">
          Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs
        </h1>
  
        {/* Image Section */}
        <div className="image-container">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D12AQEr5JRcTtzWVg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1712558027267?e=2147483647&v=beta&t=HDQM6AqzsfAdGSCCOIQ3z0bgLn6voI2pdxGwvhpxbH4"
            className="image"
            alt="Suzuki Alto 2024"
          />
        </div>
  
        {/* Buttons Section */}
      <div className="buttons-container">
        <button className="button">
          Book a Test Drive
        </button>
        <button className="button-white">
          Request Bank Finance
        </button>
        <button className="button-white">
          Visit Place
        </button>
        <button className="button-white">
          Car Inspection
        </button>
      </div>

      {/* Vehicle Description */}
      <h2 className="description-title">
        Vehicle Description
      </h2>
      <p className="description">
        <b>Number of Doors:</b> 4 &nbsp; <b>Engine:</b> 1800 CC &nbsp;
        <b>Condition:</b> 8.5/10 &nbsp; <b>Driven:</b> 95,000 KM <br />
        <b>Suspension Type:</b> Soft Suspension &nbsp; <b>Avg:</b> 13 Km per
        liter &nbsp; <b>Transmission:</b> Automatic &nbsp; <b>Fuel Type:</b>{" "}
        High Octane
      </p>

        {/* Price */}
        <h3 className="price">
          PKR 30,00,000
        </h3>
  
        {/* Payment Button */}
        <div className="payment-button-container">
        <Link href="/form">
          <button className="payment-button">
            Make Payment
          </button>
        </Link>
      </div>
      </div>
    );
  }
  