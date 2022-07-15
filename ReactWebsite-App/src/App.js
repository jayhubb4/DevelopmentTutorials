import React from 'react';
import './style.css';

import { Header, Nav, About, Experience, Services, Portfolio, Testimonials, Contact, Footer } from './components';
const App = () => {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}


export default App

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

