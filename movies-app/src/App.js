import React, { Component } from "react";
import "./App.css";
import Genres from "./components/genres";
import Movies from "./components/movies";

class App extends Component {
  state = {
    allMovies: [
      {
        id: 1,
        title: "Terminator",
        genre: "Action",
        stock: 6,
        rate: 2.5,
        fav: true
      },
      {
        id: 2,
        title: "Kahani",
        genre: "Thriller",
        stock: 6,
        rate: 2.5,
        fav: true
      },
      {
        id: 13,
        title: "Hungama",
        genre: "Comedy",
        stock: 6,
        rate: 2.5,
        fav: true
      },
      { id: 3, title: "KHNH", genre: "Drama", stock: 6, rate: 2.5, fav: true },
      { id: 4, title: "K3G", genre: "Drama", stock: 6, rate: 2.5, fav: true },
      {
        id: 5,
        title: "Badla",
        genre: "Thriller",
        stock: 6,
        rate: 2.5,
        fav: true
      },
      { id: 6, title: "Baby", genre: "Action", stock: 6, rate: 2.5, fav: true },
      {
        id: 7,
        title: "Rambo",
        genre: "Action",
        stock: 6,
        rate: 2.5,
        fav: true
      },
      {
        id: 8,
        title: "Rambo I",
        genre: "Action",
        stock: 6,
        rate: 2.5,
        fav: true
      },
      {
        id: 9,
        title: "Rambo II",
        genre: "Action",
        stock: 6,
        rate: 2.5,
        fav: true
      },
      {
        id: 10,
        title: "Rambo III",
        genre: "Action",
        stock: 6,
        rate: 2.5,
        fav: true
      },
      {
        id: 11,
        title: "Rambo IV",
        genre: "Action",
        stock: 6,
        rate: 2.5,
        fav: true
      },
      {
        id: 12,
        title: "Khaladi No. 1",
        genre: "Action",
        stock: 6,
        rate: 2.5,
        fav: true
      }
    ],
    genres: ["Action", "Thriller", "Comedy", "Drama"],
    selectedGenre: "",
    pageSize: 4,
    page: 1
  };

  filterMovies = () => {
    let movies = [];
    let moviesCount = 0;
    let page = this.state.page;
    let genre = this.state.selectedGenre;

    if (genre != "") {
      movies = this.state.allMovies.filter(movie => movie.genre == genre);
    } else {
      movies = this.state.allMovies;
    }
    moviesCount = movies.length;
    return {
      moviesCount: moviesCount,
      movies: movies.slice(
        (page - 1) * this.state.pageSize,
        page * this.state.pageSize
      )
    };
  };

  changeGenre = genre => {
    let localState = { ...this.state };
    localState.selectedGenre = genre;
    localState.page = 1;
    this.setState(localState);
  };

  changePage = page => {
    let localState = { ...this.state };
    localState.page = page;

    this.setState(localState);
  };

  deleteMovie = id => {
    const localState = { ...this.state };
    const newMovies = this.state.allMovies.filter(movie => movie.id != id);
    localState.allMovies = newMovies;

    this.setState(localState);
  };

  render() {
    return (
      <main className="container">
        <div className="row mt-5">
          <div className="col">
            <Genres
              key="genres"
              genres={this.state.genres}
              selectedGenre={this.state.selectedGenre}
              onChangeGenre={this.changeGenre}
            />
          </div>
          <div className="col-9">
            <Movies
              key="movies"
              movies={this.filterMovies()}
              page={this.state.page}
              pageSize={this.state.pageSize}
              onChangePage={this.changePage}
              onDeleteMovie={this.deleteMovie}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
