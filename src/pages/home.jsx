import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api"
import "../css/Home.css"


function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [listMovies, setMovies] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("failed to load")
            }
            finally { }
            setLoading(false)
        }
        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if(loading) return
        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch(err){
            console.log(err)
            setError("failed to search movie")
        }finally{
            setLoading(false)
        }


        setSearchQuery("")
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-movie">
                <input type="text" placeholder="Search..." className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type="submit" className="search-button">
                    search
                </button>
            </form>

            {error && <div className="error-message">{error}</div>}


            {loading ? <div className="loading">Loading</div> : <div className="movies-grid">
                {listMovies.map(((movie) =>
                    movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard info={movie} key={movie.id} />))}
            </div>}
        </div>
    )
}

export default Home;