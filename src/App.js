
import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Home from './scenes/Home';
import Pagina2 from './scenes/Pagina2';
import Pagina3 from './scenes/Pagina3';

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} hideNavBar />
      <Scene key="pagina2" component={Pagina2} hideNavBar />
      <Scene key="pagina3" component={Pagina3} hideNavBar />
    </Stack>
  </Router>
);

export default App;
