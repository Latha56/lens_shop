import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="homeproperty">
      <div className="pro">
      <h1>OPTICALS</h1>
      <p>Putting on a new pair of glasses or sunglasses is a
         simple way to completely transform your look - just like a new hairstyle</p>
      <Link to="/Menu">
      <button>Start shoping</button>
      </Link>
      </div>
    </div>
  )
};

export default Home;
