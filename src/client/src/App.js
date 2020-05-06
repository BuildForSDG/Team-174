import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Homepage from './components/homepage/HomePage';
import { Route, Switch, HashRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
