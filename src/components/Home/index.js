// Write your JS code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="home-bg-container">
    <Header />
    <div className="home-section">
      <div className="home-left-container">
        <h1 className="home-component-title">Clothes That Get You Noticed</h1>
        <p className="home-component-des">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marketer of the era
          and we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </div>
      <div className="home-right-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="main-pic"
        />
      </div>
    </div>
  </div>
)

export default Home
