import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/HeaderFooter/Navbar';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
    </>
  )
}

export default App;
