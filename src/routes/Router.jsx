import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import RestaurantDetail from '../pages/RestaurantDetail';
import NewRestaurant from '../pages/NewRestaurant';
import Login from '../components/Auths/Login';
import Signup from '../components/Auths/Signup';

export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/new-restaurant" element={<NewRestaurant />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}
