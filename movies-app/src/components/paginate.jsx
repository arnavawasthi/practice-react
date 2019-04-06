import React, { Component } from "react";
import { range } from "rxjs";

class Paginate extends Component {
  state = {
    movies: 10,
    currentPage: 1
  };
  render() {
    const { moviesCount, page, pageSize } = this.props;
    const pages = Math.ceil(moviesCount / pageSize);
    let arr = [];
    for (var i = 0; i < pages; i++) {
      arr[i] = {
        index: i + 1,
        active: page == i + 1 ? "page-item active" : "page-item"
      };
    }

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {arr.map(page => (
            <li
              key={page.index}
              className={page.active}
              onClick={() => this.props.onChangePage(page.index)}
            >
              <a className="page-link" href="#">
                {page.index}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Paginate;
