import Header from './Header.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import React from 'react';



// import "./assets/css/plugins/feature.css"
// import "./assets/css/plugins/jquery-ui.min.css"

// import "./assets/css/vendor/nice-select.css"
// import "./assets/css/vendor/odometer.css"
// import "./assets/css/vendor/slick-theme.css"
// import "./assets/css/vendor/slick.css"  
import './assets/css/style.css';
import "./assets/css/vendor/bootstrap.min.css";


const App=()=> {

    return (
      
      <>
        <Router>
          <Route component={Header}/>
        


        </Router>
      </>
    );
}

export default App;
