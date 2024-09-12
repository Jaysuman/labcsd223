import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Footer = () => (
  <footer className="bg-secondary text-light py-4 mt-auto">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light">Login</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Special Offers</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light">Business Banking</a></li>
            <li><a href="#" className="text-light">Commercial</a></li>
            <li><a href="#" className="text-light">About Us</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Mortgages and Other Rates</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light">TD Websites</a></li>
            <li><a href="#" className="text-light">Investor's Edge</a></li>
            <li><a href="#" className="text-light">New to Canada</a></li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 d-flex align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder="Enter address or postal code"
            style={{ width: '50%' }}
          />
          <button className="btn btn-danger ms-2">Find a branch or ATM</button>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <button className="btn btn-danger me-2">Meet with us</button>
          <button className="btn btn-outline-light">Manage your meeting</button>
        </div>
      </div>
    </div>
  </footer>
);

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here

    navigate('/Transaction');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-5">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
