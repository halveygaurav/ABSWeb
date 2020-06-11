import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Navigation from './components/navigation';
import Departments from './components/departments';
import Employees from './components/employees';
import Footer from './components/footer';
import {store} from './redux/store';
import {Provider} from 'react-redux'
import Home from './components/home'

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="container">
      <Navigation/>

      {/* <Button variant="primary">Hello Bootstrap</Button> */}
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/Departments" component={Departments} exact/>
        <Route path="/Employees" component={Employees} exact/>
       
      </Switch>
      {/* <Footer/> */}
    </div>
    </Router>
    </Provider>
  );
}

export default App;
