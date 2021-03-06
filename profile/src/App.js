import './css/App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header';
import Home from './components/home'
import Widgets from './components/widgets'
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='margined'>
          <Header/>
          <div className='content'>
            <Switch>
                <Route path='/Widgets' component={Widgets} />
                <Route path='/About' component={About} />
                <Route path='/Contact' component={Contact} />
                <Route path='/' component={Home} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
