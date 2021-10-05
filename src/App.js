import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Error from './Pages/Error/Error'
import Footer from './Components/Footer/Footer'
import Courses from './Pages/Courses/Courses';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div>
      <Router>
         <Navigation></Navigation>
            <Switch>
                 <Route exact path="/">
                     <Home></Home>
                </Route>
                <Route exact path = "/home">
                      <Home></Home>
                </Route>
                <Route exact path = "/about">
                      <About></About>
                 </Route>
                 <Route exact path="/services">
                      <Services></Services>
                 </Route>
                 <Route exact path ="/courses">
                       <Courses></Courses>
                 </Route>
                 <Route exact path ="/contact">
                        <Contact></Contact>
                 </Route>
                 <Route  path="*">
                        <Error></Error>
                 </Route>
             </Switch>
        <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
