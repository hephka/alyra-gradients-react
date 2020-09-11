import React from 'react';
import GradientsHeader from './components/GradientsHeader';
import Footer from './components/Footer';
import Gradients from './components/Gradients';
import {gradients} from "./gradients"

function App() {
  return (
    <>
    <header>
      <GradientsHeader list={gradients} />
    </header>
    <main>
      <Gradients />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App;
