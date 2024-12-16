import "../styles/hero.css"

export default function Hero() {
  return (
    <div className="hero-div">
      <h1 className="hero-heading">
        Sell Your Car on PakWheels and Get the Best Price
      </h1>

      <div className="hero-content hero-content-lg">
        {/* First Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-blue font-semibold text-lg pb-6">
            Post your Ad on PakWheels
          </h2>
          <ul className="pb-4 list-disc text-justify">
            <li>Post your Ad for Free in 3 Easy Steps</li>
            <li>Get Genuine offers from Verified Buyers</li>
            <li>Sell your car Fast at the Best Price</li>
          </ul>
          <button className="bg-red button text-white mt-4 hover:bg-red-700">
            Post Your Ad
          </button>
        </div>

        <h3 className="text-center font-semibold text-gray text-xl lg:text-2xl mt-4 lg:mt-20">
          OR
        </h3>

        {/* Second Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-blue font-semibold text-lg pb-6">
            Try PakWheels Sell It For Me
          </h2>
          <ul className="pb-4 list-disc text-justify">
            <li>Dedicated Sales Expert to Sell your Car</li>
            <li>We Bargain for you and share the Best Offer</li>
            <li>We ensure Safe & Secure Transaction</li>
          </ul>
          <button className="bg-blue button-blue text-white mt-4 hover:bg-blue-700">
            Register Your Car
          </button>
        </div>
      </div>
    </div>
  );
}
