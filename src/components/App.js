import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router';
import { reducer } from '../utility/reducer'
import { UserContext } from '../utility/UserContext';
import { HomePage } from '../pages/HomePage'
import { PageHeader } from '../pages/PageHeader';
import { ArticlePage } from '../pages/ArticlePage';

const initialState = {
  news: [],
  article: {},
  section: 'home',
  loaded: false
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <PageHeader />
      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/article/:title' component={ArticlePage} />
        </Switch>
      </main>
    </UserContext.Provider>
  );
}

