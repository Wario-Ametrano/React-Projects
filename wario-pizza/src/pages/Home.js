import '../styles/Home.css';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';

export default function Home() {
  return (
    <div className='home'style={{backgroundImage:`url(${BannerImage})`}}>
      <div className='headerContainer' >
        <h1>Wario Pizza</h1>
        <p>Pizza to fit any taste</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}
