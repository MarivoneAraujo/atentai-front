import React from 'react';
import Router from './routes/router';
import styled from 'styled-components';

export const AppBackground = styled.div`
height: 63rem;
`;


function App() {

  return (

    <AppBackground >
      <Router />
    </AppBackground>

  );
}

export default App;
