import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>   
  )
}


export default App;

///////////////////This displays the text but not correctly renders it///////////////

/*function App() {
  return (
    <div className='App'>
      <>
        {"Header"}
        {"Nav"}
        {"About"}
        {"Experience"}
        {"Services"}
        {"Portfolio"}
        {"Testimonials"}
        {"Contact"}
        {"Footer"}

      </>
    </div>
  )
}

export default App;*/



/*import React from 'react-dom'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App*/

