import React from 'react';
import styled from 'styled-components'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

const Container = styled.div`
  ${'' /* background: #262322; */}
  margin: 0 auto;
  width: 90rem;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Navbar/>
      <Home/>
    </Container>
  );
}

export default App;
