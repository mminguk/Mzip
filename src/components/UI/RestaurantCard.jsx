import { Link } from 'react-router-dom';

import '../../styles/RestaurantCard.css';

export default function RestaurantCard({ title, address, imagePath, id }) {
  return (
    <Link className="card" to={`/restaurant/${id}`}>
      <div className="image">
        <img src={imagePath} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{address}</p>
    </Link>
  );
}
