import React, { createContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SellerPage } from './pages/SellerPage';
import { PageNotFoundPage } from './pages/PageNotFoundPage';
import { Navbar } from './components/Navbar';
import { WelcomePage } from './pages/WelcomePage';
import { ProductPage } from './pages/ProductPage';



function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
    <div className={`App ${theme}`}>

      <div className="bg"></div>
      <BrowserRouter>
        <Navbar></Navbar>
        
         <button  onClick={toggleTheme}>Toggle Theme</button>

        <Routes>
          <Route path="welcome" element={<WelcomePage></WelcomePage>} />
          <Route path="sellerPage" element={<SellerPage></SellerPage>} />
          <Route path="productPage" element={<ProductPage></ProductPage>} />
          <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>}
          ></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>

    
  );
}

export default App;
