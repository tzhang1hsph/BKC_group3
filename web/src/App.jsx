import { useState, useEffect } from 'react'
import './App.css'
import '/public/Engage/Engage.css';

import '@mantine/core/styles.css';
import Intro from "./components/Intro"
import TitleCard from "./components/TitleCard"
import Spaces from "./components/Spaces"
import Tutorial from "./components/Tutorial"

import Poll from "./components/Poll"
import PollResults from "./components/PollResults"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




import { MantineProvider, DEFAULT_THEME, rem } from '@mantine/core';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
};


function App() {
  const [count, setCount] = useState(0)
  const { height, width } = useWindowDimensions();



  return <MantineProvider
    theme={{
      fontFamily: 'Inter, sans-serif',
      headings: {
        // Use default theme if you want to provide default Mantine fonts as a fallback
        fontFamily: 'Engage Regular, sans-serif',
      },
      fontSizes: {
        xs: rem(Math.min(10 / 1080 * height, 10 / 1920 * width)),
        sm: rem(Math.min(15 / 1080 * height, 15 / 1920 * width)),
        md: rem(Math.min(20 / 1080 * height, 20 / 1920 * width)),
        lg: rem(Math.min(24 / 1080 * height, 24 / 1920 * width)),
        xl: rem(Math.min(28 / 1080 * height, 28 / 1920 * width))
      },
    }}
  >{

      <div>
        <Router>
          <Routes>
            <Route path="/" element={<TitleCard height={height} width={width} />}>
            </Route>
            <Route path="/intro" element={<Intro height={height} width={width} />}>
            </Route>
            <Route path="/spaces" element={<Spaces height={height} width={width} />}>
            </Route>
            <Route path="/tutorial" element={<Tutorial height={height} width={width} />}>
            </Route>
            <Route path="/poll" element={<Poll height={height} width={width} />}>
            </Route>
            <Route path="/pollresults" element={<PollResults height={height} width={width} />}>
            </Route>
          </Routes>
        </Router>

      </div>

    }

  </MantineProvider>;
}



export default App
