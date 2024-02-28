import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Home";
import AboutMe from "./AboutMe";
import "./App.css"; // CSS 애니메이션을 위한 스타일 시트

// 기타 필요한 컴포넌트 import

function App() {
  return (
    <Router>
      <RouteRender />
    </Router>
  );
}

function RouteRender() {
  let location = useLocation();

  return (
    <TransitionGroup className="route-wrapper">
      <CSSTransition key={location.key} timeout={2500} classNames="slide">
        <Routes location={location}>
          {" "}
          {/* className 제거 */}
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
