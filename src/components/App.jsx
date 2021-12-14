import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, NavLink, Link } from 'react-router-dom';

// Modules
import 'jquery';
import 'popper.js';

// Directories
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sass/styles.scss';

// Components
import Login from './Login';
import Signup from './Signup';
import HomeContainer from '../containers/HomeContainer';

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/signup" element={<Signup />}/>
        <Route path="/home" element={<HomeContainer />}/>
        <Route path="/" element={<Login />}/>
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

/*
<-------- Potential Child Components --------->

|— App
...|— Signup
...|— Login
.. |— HomeContainer
.....|— Dashboard
.......|— Buckit


Login.jsx
Signup.jsx

Dashboard.jsx

Home.jsx
Header.jsx --> navbar
SideCard.jsx

*/

/*
Added bootstrap CDN to index.html. 
Imported React-router and instead react router
Added Login component & signup component and have the APP component set up to route to either child components depending on the route path.

*/
