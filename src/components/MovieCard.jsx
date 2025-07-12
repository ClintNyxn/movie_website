import "../css/MovieCard.css";

function MovieCard({ info }) {
    function onbkmrk() {
        alert("bookmarked");
    }

    return (
        <div className="movie-card">
            <div className="image-container">
                {info.poster_path ? (
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} 
                        alt={info.title} 
                    />
                ) : (
                    <div className="image-placeholder">
                        <span>🎬</span>
                    </div>
                )}
            </div>
            <div className="movie-content">
                <h3 className="movie-title">{info.title}</h3>
                <div className="movie-date">
                    {info.release_date ? new Date(info.release_date).getFullYear() : 'N/A'}
                </div>
                <button className="bookmark-button" onClick={onbkmrk}>
                    Bookmark
                </button>
            </div>
        </div>
    );
}

export default MovieCard;