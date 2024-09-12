import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Transaction = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [balances, setBalances] = useState({});
  const [histories, setHistories] = useState({});
  const [currentBalance, setCurrentBalance] = useState(0);
  const [currentHistory, setCurrentHistory] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAccountChange = (e) => {
    const newAccountNumber = e.target.value;
    setAccountNumber(newAccountNumber);

    if (balances[newAccountNumber] !== undefined) {
      setCurrentBalance(balances[newAccountNumber]);
      setCurrentHistory(histories[newAccountNumber] || []);
    } else {
      setCurrentBalance(0);
      setCurrentHistory([]);
    }
  };

  const handleDeposit = () => {
    if (amount > 0) {
      const newBalance = currentBalance + parseFloat(amount);
      setBalances(prevBalances => ({
        ...prevBalances,
        [accountNumber]: newBalance
      }));
      setHistories(prevHistories => ({
        ...prevHistories,
        [accountNumber]: [...(prevHistories[accountNumber] || []), `Deposited $${amount} to account ${accountNumber}`]
      }));
      setCurrentBalance(newBalance);
      setCurrentHistory(prevHistory => [...prevHistory, `Deposited $${amount} to account ${accountNumber}`]);
    }
  };

  const handleWithdraw = () => {
    if (amount > 0 && amount <= currentBalance) {
      const newBalance = currentBalance - parseFloat(amount);
      setBalances(prevBalances => ({
        ...prevBalances,
        [accountNumber]: newBalance
      }));
      setHistories(prevHistories => ({
        ...prevHistories,
        [accountNumber]: [...(prevHistories[accountNumber] || []), `Withdrew $${amount} from account ${accountNumber}`]
      }));
      setCurrentBalance(newBalance);
      setCurrentHistory(prevHistory => [...prevHistory, `Withdrew $${amount} from account ${accountNumber}`]);
    }
  };

  const handleCancel = () => {
    setAccountNumber('');
    setAmount('');
    setCurrentBalance(0);
    setCurrentHistory([]);
  };

  const handleLogout = () => {
    navigate('/'); // Redirect to the Personal component (landing page)
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-5">
        <h2>Transaction</h2>
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number:</label>
          <input
            type="text"
            className="form-control"
            id="accountNumber"
            value={accountNumber}
            onChange={handleAccountChange}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <button className="btn btn-primary me-2" onClick={handleDeposit}>Deposit</button>
          <button className="btn btn-danger me-2" onClick={handleWithdraw}>Withdraw</button>
          <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>
        <div className="mt-4">
          <h5>Current Balance for Account {accountNumber}: ${currentBalance.toFixed(2)}</h5>
          <h6>Transaction History:</h6>
          <div className="dropdown">
            <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {currentHistory.length > 0 ? (
                currentHistory.map((transaction, index) => (
                  <li key={index} className="dropdown-item">{transaction}</li>
                ))
              ) : (
                <li className="dropdown-item">No transactions</li>
              )}
            </ul>
          </div>
        </div>
        {/* Log Out Button */}
        <div className="mt-4">
          <button className="btn btn-danger" onClick={handleLogout}>Log Out</button>
        </div>
      </div>

      {/* Footer Section */}
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
    </div>
  );
};

export default Transaction;
