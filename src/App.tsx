import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SellerPage } from './pages/SellerPage';
import { PageNotFoundPage } from './pages/PageNotFoundPage';
import { Navbar } from './components/Navbar';
import { WelcomePage } from './pages/WelcomePage';
import { ProductPage } from './pages/ProductPage';


export const UserContext = createContext("none")
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path="welcome" element={<WelcomePage></WelcomePage>} />
      <Route path="sellerPage" element={<SellerPage></SellerPage>} />
      <Route path="productPage" element={<ProductPage></ProductPage>} />
      <Route path='*' element={<PageNotFoundPage></PageNotFoundPage>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
  }

  export default App;
