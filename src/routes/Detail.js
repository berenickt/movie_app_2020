import React from "react";

class Detail extends React.Component {
  // Detail 컴포넌트가 마운트되면, (리다이렉트 기능)
  componentDidMount() {
    const { location, history } = this.props; // 구조 분해 할당으로 location, history를 얻고
    // location.state가 없는 경우
    if (location.state === undefined) {
      history.push("/"); // Home으로 이동
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
