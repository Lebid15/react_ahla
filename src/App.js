import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Mobile from './pages/Mobile';
import Game from './pages/Game';
import Bill from './pages/Bill';
import MobileOrders from './pages/MobileOrders';
import GameOrders from './pages/GameOrders';
import BillOrders from './pages/BillOrders';

import RootLayout from './layouts/RootLayout';

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/game" element={<Game />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/mobile-orders" element={<MobileOrders />} />
          <Route path="/game-orders" element={<GameOrders />} />
          <Route path="/bill-orders" element={<BillOrders />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
