import React from 'react';
import styled from 'styled-components'
import Navbar from './components/navbar/Navbar';

const Container = styled.div`
  background: #FAF5F0;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Navbar/>
    </Container>
  );
}

export default App;
