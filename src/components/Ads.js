import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movies from '../assets/recommendations';
import './Ads.css';

var aux1 = Math.floor(Math.random()*movies.length);
var aux2 = (aux1 <= 7 ? aux1 + 1 : aux1 - 1);
var aux3 = (aux1 <= 7 ? aux1 + 2 : aux1 - 2);
var aux4 = (aux1 <= 7 ? aux1 + 3 : aux1 - 3);
var aux5 = (aux1 <= 7 ? aux1 + 4 : aux1 - 4);

class Ads extends Component {

    render() {
        return (
            <div className="recContainer">
                <div>
                    <p>You might be interested in...</p>
                </div>
                <div className="moviesRow">
                    <div className="moviesColumn">
                        <Link to={`/movie/${movies[aux1].imdbID}`}><img className="recPoster" src={movies[aux1].Poster}/></Link>
                        {/* <Link to={`/movie/${movies[aux1].imdbID}`}><p>{movies[aux1].Title}-({movies[aux1].Year})</p></Link>
                        <Link to={`/movie/${movies[aux1].imdbID}`}><p>({movies[aux1].Year})</p></Link> */}                        
                    </div>
                    <div className="moviesColumn">
                        <Link to={`/movie/${movies[aux2].imdbID}`}><img className="recPoster" src={movies[aux2].Poster}/></Link>
                        {/* <Link to={`/movie/${movies[aux2].imdbID}`}><p>{movies[aux2].Title}</p></Link>
                        <Link to={`/movie/${movies[aux2].imdbID}`}><p>({movies[aux2].Year})</p></Link>   */}                      
                    </div>
                    <div className="moviesColumn">
                        <Link to={`/movie/${movies[aux3].imdbID}`}><img className="recPoster" src={movies[aux3].Poster}/></Link>
                        {/* <Link to={`/movie/${movies[aux3].imdbID}`}><p>{movies[aux3].Title}</p></Link>
                        <Link to={`/movie/${movies[aux3].imdbID}`}><p>({movies[aux3].Year})</p></Link> */}                        
                    </div>
                    <div className="moviesColumn">
                        <Link to={`/movie/${movies[aux4].imdbID}`}><img className="recPoster" src={movies[aux4].Poster}/></Link>
                        {/* <Link to={`/movie/${movies[aux4].imdbID}`}><p>{movies[aux4].Title}</p></Link>
                        <Link to={`/movie/${movies[aux4].imdbID}`}><p>({movies[aux4].Year})</p></Link>  */}                       
                    </div>
                    <div className="moviesColumn">
                        <Link to={`/movie/${movies[aux5].imdbID}`}><img className="recPoster" src={movies[aux5].Poster}/></Link>
                        {/* <Link to={`/movie/${movies[aux5].imdbID}`}><p>{movies[aux5].Title}</p></Link>
                        <Link to={`/movie/${movies[aux5].imdbID}`}><p>({movies[aux5].Year})</p></Link> */}                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Ads;
