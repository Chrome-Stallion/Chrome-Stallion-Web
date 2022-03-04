import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Product from './Products/Products';
import Home from './Home/Home';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }

  return (
    <Router>
        <div className="grid-container">
            <link rel="stylesheet" href="style.css" />
            <title>Chrome Stallion</title>

        <body>
            <div>
                <header className="header">
                    <div className="brand">
                        <a href="index.html">Chrome Stallion</a>
                    </div>
    
                    <div className="header-links">
                        <Link to="/">Home</Link>
                        <Link to="/catalog">Catalog</Link>
                    </div>
                    <header className = "header">
                        <div className = "brand">
                                <button onClick ={openMenu}>&#9776;</button>
                        </div>
                    </header>
                </header>

                <aside className ="sidebar">
                    <h3>Shopping Categories</h3>
                    <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                
                    <ul>
                        <li>
                            <a href="index.html">Pants</a>
                        </li>

                        <li>
                            <a href="index.html">Shirts</a>
                        </li>
                    </ul>
                </aside>
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Product />} />
                    </Routes>
                </main>
                <footer className="footer">&copy; 2022 Chrome Stallion</footer>
            </div>
        </body>
    </div>
    </Router>
  );
}

export default App;