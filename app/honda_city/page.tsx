import Link from "next/link"
import "../styles/car.css"
import Image from "next/image";


export default function HondaCity() {
  return (
    <div className="container">
      {/* Title */}
      <h1 className="title">
        Honda City 2024 Price in Pakistan, Images, Reviews & Specs
      </h1>

      {/* Image Section */}
      <div className="image-container">
        <Image
          src="/Honda_City.jpg"
          className="image"
          alt="Honda City 2024"
          width={240}
          height={160}
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

      {/* Price Section */}
      <h3 className="price">
        PKR 56,00,000
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

