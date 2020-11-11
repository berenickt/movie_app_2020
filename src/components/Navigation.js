import React from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트를 추가
import "./Navigation.css";

// Navigation 컴포넌트
function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
