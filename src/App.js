import React from 'react';
import Header from './components/Header/Header';
import Sections from './components/Sections/Sections';
import Footer from './components/Footer/Footer';
import 'tachyons';
import './App.css';

function App() {
  return (
    <div className="ma5">
      <Header></Header>
      <Sections></Sections>
      <Footer></Footer>
    </div>
  );
}

export default App;
