import './css/App.css'
import MovieCard from './components/MovieCard.jsx'
import Home from './pages/home.jsx';
import Bookmarks from './pages/bookmarked.jsx';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;