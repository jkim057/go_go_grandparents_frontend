/**
 * Main react component
 * @version 2021.11.15
 * @since 2021.11.15
 */
/*----- Imports --------------------------------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProvideAuth, GuestRoute, PrivateRoute } from './utils/auth';
import './index.css';

/*----- Render App -----------------------------------------------------------*/
ReactDOM.render(
  <ProvideAuth>
    <Router>

      // Navigation elements / headers go here.

      <section>
        <Switch>

          /*
           * Guest routes are for any page in the router that should only be
           * accessed by users who ARE NOT authenticated.
           */
          <GuestRoute exact path="/login">
            // Login page goes here
          </GuestRoute>
          <GuestRoute exact path="/signup">
            // Signup page goes here
          </GuestRoute>
          
          /*
           * Private routes are for any page in the router that should only be
           * accessed by users who ARE authenticated.
           */
          <PrivateRoute exact path="/">
            // Some sort of landing page for users goes here.
          </PrivateRoute>

          /*
           * Generic routes are routes that can be accessed by any user,
           * regardless of their authentication status.
           */
          <Route path="/event/:id">
            // Event 'show' page goes here.
          </Route>
        </Switch>
      </section>

      // Footers go here.

    </Router>
  </ProvideAuth>,
  document.querySelector('#root')
);
