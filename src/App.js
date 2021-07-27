import './App.css';
import React from 'react'
import Modals from './Components/Modals';
import ContactForm from './Components/ContactForm';
import NestedSelects from './Components/NestedSelects';
import SongBrowser from './Components/SongBrowser';
import Crud from './Components/Crud'; // Offline
import CrudApi from './Components/CrudApi'; // With API
import Clock from './Components/Clock';
import NavBar from './elements/NavBar';
import { Route, Switch } from 'react-router';
import Greetings from './Components/Greetings';
import Error from './Components/Error';

function App() {

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">

        <Switch>
          <Route path="/crud" >
            <Crud />

          </Route>
          <Route path="/crudapi" >
            <CrudApi />

          </Route>
          <Route path="/modals" >
            <Modals />

          </Route>
          <Route path="/contactform" >
            <ContactForm />

          </Route>
          <Route path="/nestedselects" >
            <NestedSelects />

          </Route>
          <Route path="/songbrowser" >
            <SongBrowser />

          </Route>
          <Route path="/clock" >
            <Clock />

          </Route>
          <Route exact path="/" >
            <Greetings />

          </Route>
          <Route path="*" component={Error} />
            
        </Switch>
      </header>
    </div>
  );
}

export default App;
