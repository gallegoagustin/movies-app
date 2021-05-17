import React from 'react';
import { Route } from 'react-router-dom';
import Favorites from './components/Favorites';
import NavBar from './components/NavBar';
import Movie from './components/Movie';
import Search from './components/Search';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
      <>
        <div className="compContainer">
          <NavBar />
            <Route exact path="/" component={Search} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/about" component={About}/>
        </div>
          <Route path="/" component={Footer}/>
      </>
  );
}

export default App;