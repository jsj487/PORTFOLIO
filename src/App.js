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

// 페이지 순서를 나타내는 객체
const pageOrder = {
  "/": 0,
  "/about-me": 1,
  "/skills": 2,
  "/projects": 3,
};

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

  // 현재 경로의 순서를 가져옵니다.
  const currentPageOrder = pageOrder[location.pathname];
  // 이전 경로의 순서를 가져옵니다.
  const prevPageOrder = pageOrder[prevPath];

  let transitionClassName = "";
  if (location.pathname === "/") {
    // Home으로 돌아가는 경우 애니메이션 없음
    transitionClassName = "no-animation";
  } else {
    transitionClassName =
      currentPageOrder > prevPageOrder ? "slide-right" : "slide-left";
  }

  useEffect(() => {
    // location.pathname이 변경될 때 이전 경로를 업데이트
    if (location.pathname !== prevPath) {
      setPrevPath(location.pathname);
    }
  }, [location, prevPath]);

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
