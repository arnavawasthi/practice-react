import React, { Component } from "react";

class Genres extends Component {
  getCssClass = genre => {
    let cssClass = "list-group-item ";
    return genre == this.props.selectedGenre ? cssClass + "active" : cssClass;
  };
  render() {
    console.log(this.props);
    return (
      <ul className="list-group">
        <li
          key="all"
          className={this.getCssClass("")}
          onClick={() => this.props.onChangeGenre("")}
        >
          All Genres
        </li>
        {this.props.genres.map(genre => (
          <li
            key={genre}
            className={this.getCssClass(genre)}
            onClick={() => this.props.onChangeGenre(genre)}
          >
            {genre}
          </li>
        ))}
      </ul>
    );
  }
}

export default Genres;
