import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9777;</button>
            <Link to="/">Amazona</Link>
          </div>

          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Catagories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            X
          </button>
          <ul>
            <li>
              <a href="index.html">Jerseys</a>
            </li>
            <li>
              <a href="index.html">Bibs</a>
            </li>
          </ul>
        </aside>

        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All Rights Reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
