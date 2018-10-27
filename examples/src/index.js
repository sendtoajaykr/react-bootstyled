import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box } from '../../src';

const Home = () => <Box mx={5}>Testing</Box>;

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
