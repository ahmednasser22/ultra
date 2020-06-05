import React , {Component} from 'react';
import {HashRouter , Route} from 'react-router-dom';
import './App.css';

import Index from './Components/index';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';

class App extends Component {
  render(){
  return (
    <HashRouter> {/* BrowserRouter  => in local &&  HashRouter => on github pages  */}
     <Navbar/>
      <Route exact path = '/' component = {Index} />
      <Route path = '/contact' component = {Contact} />
    </HashRouter>
  );
}
}

export default App;