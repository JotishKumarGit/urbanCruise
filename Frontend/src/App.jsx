import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/HeaderFooter/Navbar';
import MainPage from './pages/MainPage';
import Footer from './components/HeaderFooter/Footer';
import FloatingContactButtons from './pages/FloatingContactButtons';
import SocialMediaBar from './pages/SocialMediaBar';

function App() {
  return (
    <>
      <Navbar />
      <FloatingContactButtons />
      <SocialMediaBar />
      <MainPage />
      <Footer />
    </>
  )
}

export default App;
