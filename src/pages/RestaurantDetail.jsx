import '../styles/RestaurantDetail.css';
import Header from '../components/UI/Header';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Map from '../components/UI/Map';
import Comments from '../components/UI/Comments';
import Description from '../components/UI/Description';

function RestaurantDetail() {
  const { id } = useParams();

  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/restaurant/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurantData(data));
  }, [id]);

  return (
    <div className="detail-page">
      <Header />

      <main className="detail-container">
          {restaurantData.map((item) => (
        <section className="restaurant-info">
          <div className="restaurant-image">
            <img src={item.imagePath} alt={item.title} />
          </div>
            <div className="restaurant-text" key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.address}</p>
              <p>Tel.{item.tel}</p>
              <p>{item.businessHour}</p>
            </div>
        </section>
          ))}

        {/* 메뉴 */}
        {restaurantData.map((v) => (
          <Description key={v.description} description={v.description} />
        ))}

        {/* 댓글 */}
        <Comments postid={id} />
        <Map />
      </main>
    </div>
  );
}

export default RestaurantDetail;
