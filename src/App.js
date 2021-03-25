import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import { 
  Homepage,
  Pop,
  Dashboard,
  Settings
 } from "./Pages";

import Sidebar from '../src/Containers/Sidebar/Sidebar';

import "./Assets/styles/App.scss";

function App() {
  return (

    <Router>
      <Sidebar />
      <div className="app-js">

      <Switch>

        <Route path="/pop" component={Dashboard} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
