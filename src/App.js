import React from 'react';

import { About, Contact, Header, Projects, Skills } from './container';
import { Footer, Navbar } from './components';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <>
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />     
    <ToastContainer /> 
  </>
  
);

export default App;
