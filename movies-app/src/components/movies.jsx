import React, { Component } from "react";
import Paginate from "./paginate";

class Movies extends Component {
  state = {};
  render() {
    const { movies, moviesCount } = this.props.movies;

    return (
      <React.Fragment>
        <p>Showing {moviesCount} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie.title}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.stock}</td>
                <td>{movie.rate}</td>
                <td>{movie.fav}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => this.props.onDeleteMovie(movie.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Paginate
          moviesCount={moviesCount}
          page={this.props.page}
          pageSize={this.props.pageSize}
          onChangePage={this.props.onChangePage}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
