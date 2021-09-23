import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router';
import { reducer } from '../utility/reducer'
import { UserContext } from '../utility/UserContext';
import { HomePage } from '../pages/HomePage'
import { PageHeader } from '../pages/PageHeader';

const initialState = {
  news: [],
  loaded: false
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <PageHeader />
      <main>
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
      </main>
    </UserContext.Provider>
  );
}

