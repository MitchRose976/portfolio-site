import React from 'react';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Container from './components/Container';

function App() {
  return (
    <Container>
      <Navbar/>
      <Home/>
    </Container>
  );
}

export default App;
