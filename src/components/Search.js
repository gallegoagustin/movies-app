import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies, addMovieFavourites } from '../redux/actions';
import swal from 'sweetalert';
import Ads from './Ads';
import './Search.css';

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { title } = this.state;
    return (
      <div className="movieSectionContainer">
        <h2 className="sectionTitle">Movies & series finder</h2>
        <form className="movieSearchForm"
              onSubmit={(e) => {this.handleSubmit(e); 
                        this.state.title.length !== 0 ? this.props.getMovies(this.state.title) : swal("You must enter a valid title")
                        }}>
          <div className="movieSearchForm">
            <label id="movieLabel" htmlFor="title"><p>Title:</p></label>
            <input className="textBox"
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              placeholder="Example: 'Titanic'"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">FIND</button>
        </form>
        {this.props.movies.length == 0 ? <Ads /> :
          <ul className="moviesList">
            {this.props.movies.map(m => 
              <div>
                <li>
                  <div className="movieItem">
                    <img className="listPoster" src={m.Poster} alt="poster" />
                    <Link to={`/movie/${m.imdbID}`}><p>{m.Title} ({m.Year})</p></Link>
                    <button onClick={() => {this.props.addMovieFavourites({title: m.Title, id: m.imdbID})}}>Fav</button>
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
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavourites: movie => dispatch(addMovieFavourites(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);