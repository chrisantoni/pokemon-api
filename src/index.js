import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Details from './components/Details'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

const FourOhFour = () => <h1>Page Not Found!</h1>

const ClientApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component = {App}></Route>
      <Route path="/details/:id" component = {Details}></Route>
      <Route component = {FourOhFour} />
    </Switch>
  </BrowserRouter>
)



render(<ClientApp />, document.getElementById('root'));
