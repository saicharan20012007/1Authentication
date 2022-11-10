// Write your JS code here
import './index.css'

const Header = () => (
  <div className="header-bg-container">
    <div className="header-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="home-logo"
      />
    </div>
    <div className="header-nav-container">
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <li>
          <button type="button" className="logout-btn">
            Logout
          </button>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
