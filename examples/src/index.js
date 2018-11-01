import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box, Button } from '../../src';

const Home = () => <Button as='a' mx={5}>Testing</Button>;

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
