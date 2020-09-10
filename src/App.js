import React from 'react';
import GradientsHeader from './components/GradientsHeader';
import Footer from './components/Footer';
import GradientsList from './components/GradientsList';
import gradients from "./gradients"

function App() {
  return (
    <>
    <header>
      <GradientsHeader list={gradients} />
    </header>
    <main>
      <GradientsList list={gradients}/>
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App;
