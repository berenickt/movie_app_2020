import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // App 컴포넌트를 임포트해서 사용

// ReactDOM.rander(컴포넌트명, 컴포넌트가 그려질 위치)
ReactDOM.render(<App />, document.getElementById('root'));

// 인접한 JSX 요소는 반드시 하나의 태그로 감싸야 함