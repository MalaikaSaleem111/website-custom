import Link from 'next/link';
import "../styles/form.css"

export default function Forms() {
  return (
    <div className="form-container">
      <h1 className="form-title">Enter Your Details</h1>
      <div>
        <form className="form">
          <input 
            type="text" 
            className="input-field" 
            placeholder="Enter Your Name"
          />
          <input 
            type="email" 
            required 
            className="input-field" 
            placeholder="Enter Your Email"
          />
          <input 
            type="password" 
            required 
            className="input-field" 
            placeholder="Enter Your Password"
          />
          <Link href="/thankyou">
            <button className="submit-button">Place Your Order</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
