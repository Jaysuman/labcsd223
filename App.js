import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Personal from './Personal';
import Wealth from './Wealth';
import About from './About';
import Websites from './Websites';
import Login from './Login';
import Transaction from './Transaction';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '', minHeight: '100vh' }}>
      <Navbar />
      <div className="container-fluid mt-4 px-0">
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/wealth" element={<Wealth />} />
          <Route path="/about" element={<About />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
