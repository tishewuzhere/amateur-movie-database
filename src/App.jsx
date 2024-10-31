import { Route, Routes } from 'react-router'
import Movies from './movies/Movies'
import Movie from './movie/movie'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movie/:movieid" element={<Movie />} />
    </Routes>
  )
}

export default App
