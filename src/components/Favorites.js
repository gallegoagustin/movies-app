import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route } from 'react-router-dom';
import { removeMovieFavourites } from '../redux/actions';
import Ads from './Ads';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div className="favoritesSectionContainer">
        <h2 className="sectionTitle">Favorites</h2>
        {this.props.favs.length == 0 ? <div className="noFavsContainer"><p>You have no favorites yet</p> {/* <Ads /> */}</div> :
        <ul className="moviesList">
          {this.props.favs.map(m => 
              <div>
                <li>
                  <div className="movieItem">
                    <Link to={`/movie/${m.id}`}><p>{m.title}</p></Link>
                    <button onClick={() => {this.props.removeMovieFavourites(m.id)}}>Remove</button>
                  </div>
                  <hr className="listLine"/>
                </li>
              </div>
            )}       
        </ul>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favs: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavourites: movie => dispatch(removeMovieFavourites(movie))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);