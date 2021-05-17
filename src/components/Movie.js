import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetails, addMovieFavourites } from '../redux/actions';
import { Link } from 'react-router-dom';
import './Movie.css';


class Movie extends React.Component {

    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetails(movieId);
    }
    
    render() {

        return (
            <div id="gContainer">
                <div className="detailsSectionContainer">
                    <div className="posterContainer">
                        <img className="moviePoster" src={this.props.movie.Poster} />
                    </div>
                    <div className="detailsContainer">
                        <h2 className="sectionTitle" id="detailMovieTitle">{this.props.movie.Title}</h2>
                        <p className="detailP">Year: {this.props.movie.Year}</p>
                        <p className="detailP">Length: {this.props.movie.Runtime}</p>
                        <p className="detailP">Genre: {this.props.movie.Genre}</p>
                        <p className="detailP">Language: {this.props.movie.Language}</p>
                        <p className="detailP">Director: {this.props.movie.Director}</p>
                        <p className="detailP">Writer: {this.props.movie.Writer}</p>
                        <p className="detailP">Actors: {this.props.movie.Actors}</p>
                        <p className="detailP">Rating (imdb): {this.props.movie.imdbRating}</p>
                        <p className="detailP">Plot: {this.props.movie.Plot}</p>
                        <div className="movieButtons">
                            <Link to="/"><button>Home</button></Link>
                            <button onClick={() => {this.props.addMovieFavourites({title: this.props.movie.Title, id: this.props.movie.imdbID})}}>Add to favorites</button>
                            <Link to="/favs"><button>My favorites</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      movie: state.movieDetail
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getMovieDetails: id => dispatch(getMovieDetails(id)),
        addMovieFavourites: movie => dispatch(addMovieFavourites(movie)),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Movie);