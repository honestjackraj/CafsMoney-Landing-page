import React from 'react';
import "../src/App.css";
import Navbar from './components/Navbar';
import BoxCan from './components/BoxCan';
import Learn from './components/learn';
import Mutualfund from './components/mutualfund';
import Fundjourney from './components/fundjourney';
import Animation from './components/animation';
import Footer from './components/footer';


function App() {

   

  return (
    <>
      <Navbar/>
      <BoxCan/>
     <Learn/>
     <Mutualfund/>
     <Fundjourney/>
     <Animation/>
     <Footer/>
    </>
  );
}

export default App;