import "../styles/navbar.css"
import Image from "next/image";
export default function Navbar() {
    return (
      <nav className="navbar">
  {/* Top Section */}
  <div className="navbar-top">
    <div className="navbar-top-left">
      <p>Download App via SMS</p>
    </div>
    <div className="navbar-top-right">
      <div className="navbar-link">URDU</div>
      <div className="navbar-link">SignUP</div>
      <div className="navbar-link">SignIn</div>
    </div>
  </div>

  <hr className="navbar-divider" />

  {/* Bottom Section */}
  <div className="navbar-bottom">
    {/* Logo */}
    <div className="navbar-logo">
      <Image
        src="/pw-logo.png"
        alt="pakwheels logo"
        width={144}
        height={64}
      />
    </div>

    {/* Navigation Links */}
    <div className="navbar-links">
      <div className="navbar-link">Used Cars</div>
      <div className="navbar-link">New Cars</div>
      <div className="navbar-link">Bikes</div>
      <div className="navbar-link">Auto Store</div>
      <div className="navbar-link">Videos</div>
      <div className="navbar-link">Forums</div>
      <div className="navbar-link">Blog</div>
      <div className="navbar-link">More</div>
    </div>

    {/* CTA Button */}
    <div className="navbar-cta">
      <button className="navbar-button">
        Post an AD
      </button>
    </div>
  </div>
</nav>

    );
  }
  