import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";
import CardCustom from "./components/card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const APIKEY = "4175977b";
const APIURL = "http://www.omdbapi.com";

function fetchMovies(search) {
  return fetch(APIURL + "?apikey=" + APIKEY + "&t=" + search).then((res) =>
    res.json()
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default_title: [
        "titanic",
        "Superman III",
        "Iron Man",
        "Spider-Man",
        "Avengers",
        "The hunt",
        "Batman Begins",
        "Pulp Fiction",
        "Inception",
      ],
      movies: [],
      totalCount: 0,
    };
  }

  componentDidMount() {
    this.getCasualFilm();
  }

  getCasualFilm() {
    this.movie = [];
    for (let i = 0; i < this.state.default_title.length; i++) {
      fetchMovies(this.state.default_title[i]).then((res) => {
        this.movie.push(res);
        this.setState({
          movies: this.movie,
        });
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <header className="App-header">
          <br></br>
          <Container>
            <Row>
              {this.state.movies.map((movie) => (
                <Col>
                  <CardCustom
                    img={movie.Poster}
                    title={movie.Title}
                    anno={movie.Released}
                    attori={movie.Actors}
                    awards={movie.Awards}
                    genere={movie.Genre}
                    trama={movie.Plot}
                  />
                  <br></br>
                </Col>
              ))}
            </Row>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

export default App;

/* {
     this.state.movies.map((movie) => (
       <li key={movie.imdbID}>
         <img src={movie.Poster} class="img-thumbnail" alt="..." />
       </li>
     ))
   }*/
