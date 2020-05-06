import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './components/layout/NavBar';
import Homepage from './components/homepage/HomePage';
import CropsPage from './components/crops/CropsPage';
import { Route, Switch, HashRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          < Route exact path = "/crops" component = {CropsPage}/>
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
