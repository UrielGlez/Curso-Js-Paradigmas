import React from 'react';
import Catalog from './components/Catalog';
import ItemHero from './components/ItemHero';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark" style={{backgroundColor: '#000000'}}>
        <img src="/images/marvel-icon.png" className="rounded" width="100" alt=''/>
      </nav>
      <div className="p-3 text-center text-white" style={{height: '50px', backgroundColor: 'rgb(46, 46, 46)'}}>
        <h5>Selecciona un Heroe</h5>
      </div>
      <br />
      <div className="container">
      <Router>
        <Switch>
          <Route path='/' exact>
            <Catalog />
          </Route>
          <Route path='/post/:id/:count'>
            <ItemHero />
          </Route>
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;