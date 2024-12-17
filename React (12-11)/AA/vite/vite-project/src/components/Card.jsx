
import pic from "../images/image.png";
import "../components/Card.css";

const Card = () => {
  return (
    <div className="card">
      <h2>Radhika Goel</h2>
      <img src={pic} alt="altlogo" />
      <h2>Roll. Number: 50</h2>
    </div>
  )
}

export default Card