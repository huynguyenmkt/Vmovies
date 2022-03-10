
import {
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";

import HomePage from './pages/homePage/HomePage';
import MoviePage from "./pages/moviePage/MoviePage";
import TVSeriesPage from "./pages/tvSeries/TVSeriesPage";
import MovieDescription from "./pages/movieDesciption/MovieDescription";
import TVSeriesDescription from "./pages/tvSeriesDescriptionPage/TVSeriesDescription";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/movie" element={<MoviePage />}>
        </Route>
        <Route path="/tvseries" element={<TVSeriesPage />}>
        </Route>
        <Route path="/" element={<HomePage/>}>
        </Route>
        <Route  path="/movie/:idMovie" element={<MovieDescription/>}></Route>
        <Route  path="/tv/:idTV" element={<TVSeriesDescription/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
