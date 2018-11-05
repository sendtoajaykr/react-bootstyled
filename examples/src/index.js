import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Box, Button, Alert, Container, Row, Col, Tooltip } from '../../src';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}img,embed,iframe,object,audio,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}
`;

const Home = () => (
  <Container>
    <GlobalStyle />
    <Row bg="red" c="#fff">
      <Col xs={6}>Testing</Col>
      <Col xs={6}>Testing</Col>
    </Row>
    <Tooltip placement="bottom">
      Text on Tooltip
      <Tooltip.Text bg="red" c="#fff">Sample text</Tooltip.Text>
    </Tooltip>
  </Container>
);

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
