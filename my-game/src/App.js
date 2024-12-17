import React from 'react';
//import './a.css';
import './b.css';
import HomePage from './HomePage'; 
import ContactForm from './ContactForm'; 
import About from "./AboutPage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <About/>
      <ContactForm />
    </div>
  );
}
export default App;