
import {
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";

import HomePage from './pages/homePage/HomePage';
import MoviePage from "./pages/moviePage/MoviePage";
import TVSeriesPage from "./pages/TVSeriesPage";
import Heading from './component/Heading/Heading';
import MovieDescription from "./component/movieDesciption/MovieDescription";

function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <Routes>
        <Route path="/movie" element={<MoviePage />}>
        </Route>
        <Route path="/tvseries" element={<TVSeriesPage />}>
        </Route>
        <Route path="/" element={<HomePage/>}>
        </Route>
        <Route  path="/movie/:idMovie" element={<MovieDescription/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
