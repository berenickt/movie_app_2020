import React from "react"; // 이 코드를 입력해야 리액트가 JSX를 이해함
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

// 클래스형 컴포넌트가 되려면 리액트가 제공하는 Component 클래스를 반드시 상속받아야 함
class Home extends React.Component {
  // isLoading state는 컴포넌트가 마운트되면 true(처음에는 로딩 상태니까)
  state = {
    isLoading: true,
    movie: [],
  };

  // async : 자바스크립트에게 getMovies()는 시간이 필요
  // await : axios.get()의 실행을 기다려 달라고 말해줌
  getMovies = async () => {
    // 구조 분해 할당
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      // 영화 데이터를 가져올 때는 axios.get() 함수를 사용
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // 키와 대입할 변수의 이름이 같으면 { movies }로 축약 가능
    this.setState({ movies, isLoading: false }); // state: 구조 분해할당으로 얻은 영화 데이터가 있는 변수
  };

  componentDidMount() {
    // 영화 데이터 로딩!
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    // map() 함수의 첫 번째 인자로 컴포넌트를 반환하는 함수를 전달
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
