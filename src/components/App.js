import React from 'react';
import { Route, Switch } from 'react-router';
import { HomePage } from '../pages/HomePage'

export const App = () => {
  return (
    <main>
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </main>
  );
}

