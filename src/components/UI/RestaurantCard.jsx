import { Link } from 'react-router-dom';

import '../../styles/RestaurantCard.css';

export default function RestaurantCard({ title, address, id }) {
  return (
    <Link className="card" to={`/restaurant/${id}`}>
      <div className="image"></div>
      <h3>{title}</h3>
      <p>{address}</p>
    </Link>
  );
}
