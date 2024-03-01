import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
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
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  useEffect(() => {
    // location.pathname이 변경될 때 이전 경로를 업데이트
    if (location.pathname !== prevPath) {
      setPrevPath(location.pathname);
    }
  }, [location, prevPath]);

  // 애니메이션 방향을 결정하는 로직
  const transitionClassName =
    location.pathname === "/about-me" ? "slide-left" : "slide-right";

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 1000, exit: 1000 }}
        classNames={transitionClassName}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
