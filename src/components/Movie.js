import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

// Movie 컴포넌트
function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: "/movie-detail",
          state: { year, title, summary, poster, genres },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <p className="movie__summary">{summary}</p>
          <ul className="movie__genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="movie__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          {/* 시놉시스 180자 제한 */}
          <p className="movie__sumary">{summary.slice(0, 180)}...</p>{" "}
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired, // poster props : 이미지 주소(문자열)가 저장
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // 장르
};

export default Movie;
