import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Login from './routes/Login';
import Home from './routes/Home';
import Movie from './routes/Movie';
import Pesquisa from './routes/Pesquisa';
function App() {
    return (
        <>
      <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Movie/:id" element={<Movie />} />
            <Route path="/search/:name" element={<Pesquisa />} />

            {/* Mais rotas conforme necessário */}
          </Routes>
      </Router>
        </>
    )
}

export default App
