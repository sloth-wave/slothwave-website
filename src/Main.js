import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 *  Import Page Components Here
 */
// import Home     from './Home';
import GamePage from './GamePage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
const Main = () => (
  <main>
    <Switch>
      <Route path="/" exact component={GamePage} />
    </Switch>
  </main>
);

  // Old routes
  // <Route path="/" exact component={Home} />
  // <Route path="/transmitter-quitter" component={GamePage} />

export default Main;
