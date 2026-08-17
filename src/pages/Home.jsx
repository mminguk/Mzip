import { useEffect, useState } from 'react';

import '../styles/Home.css';

import Modal from '../components/Modal';
import Login from '../components/Auths/Login';
import Header from '../components/UI/Header';
import RestaurantCard from '../components/UI/RestaurantCard';

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(bool) {
    setIsOpen(bool);
  }

  useEffect(() => {
    async function fetchRestaurant() {
      const response = await fetch('http://localhost:3000/');
      const resData = await response.json();
      setRestaurants(resData);
    }
    fetchRestaurant();
  }, []);
  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen}>
          <Login onClose={closeModal} />
        </Modal>
      )}
      <Header openModal={openModal} />

      <main className="container">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            title={restaurant.title}
            address={restaurant.address}
            imagePath={restaurant.imagePath}
            id={restaurant.id}
          />
        ))}
      </main>
    </>
  );
}

export default Home;
