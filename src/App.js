import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';
import Home from './screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import FormParticipant from './screens/Form';
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/form' exact>
            <FormParticipant />
          </Route>
          <Route path='/dashboard' exact>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
