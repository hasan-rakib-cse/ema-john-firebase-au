import React, { useState } from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

import './App.css';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Manage from './components/Manage/ManageInventory';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import { UserContext } from './components/UserContext/UserContext';



function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className='overflow-hidden'>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <h3>email: {loggedInUser.email}</h3>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/product/:key' element={<ProductDetail />} />
            <Route path='/review' element={<Review />} />
            <Route path='/manageInventory' element={<Manage />} />
            <Route path='/shipment' element={<Shipment />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
