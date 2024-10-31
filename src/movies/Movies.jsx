import { getAllMovies } from "../api/moviesApi"
import { useState, useEffect } from "react"
import { Await, useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom";
import Loader from "../component/loading"

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // null = all genres
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1;
    const handleSearch = () => {
        setSearchParams({ query: searchQuery })
    }
    const handlePreviousPage = () => {
        setSearchParams({ page: page - 1 });
    }
    useEffect(() => {
        setIsLoading(true);
        const fetchMovies = async () => {
            const data = await getAllMovies({
                with_genres: selectedGenre,
                query: searchParams.get("query"),
                page: page,
            });
            setMovies(data.results);
            setTotalPages(data.total_pages);
            setIsLoading(false);
            console.log(data);
        };


        fetchMovies();
    }, [selectedGenre, searchParams, page]);
    const handleNextPage = () => {
        setSearchParams({ page: page + 1 });
    }
    return (
        <div className="w-full bg-[#192026] text-white min-h-screen">
            <div className="container">
                <header className="py-5 flex justify-between items-center w-full">
                    <h1 className="font-poppins w-fit text-2xl">MovieDB</h1>
                    <div className="flex items-center w-[45%]">
                        <button onClick={handleSearch}>Search</button>
                        <input
                            type="text"
                            placeholder="Search for movies"
                            class="bg-[#30363d] text-white p-2 ml-2 rounded-lg w-[500px]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </header>
                <h1 className="font-poppins font-medium text-base">Filter by Genre:</h1>
                <select
                    value={selectedGenre} className=" p-2 bg-[#374151] mt-1"
                    onChange={(e) => setSelectedGenre(e.target.value)}
                >
                    <option value="" selected>All Genres</option>
                    <option value="28">Action</option>
                    <option value="12">Adventure</option>
                    <option value="16">Animation</option>
                    <option value="35">Comedy</option>
                    <option value="80">Crime</option>
                    <option value="99">Documentary</option>
                    <option value="18">Drama</option>
                    <option value="10751">Family</option>
                    <option value="14">Fantasy</option>
                    <option value="27">Horror</option>
                    <option value="10749">Romance</option>
                    <option value="878">Science Fiction</option>
                    <option value="53">Thriller</option>
                    <option value="10752">War</option>
                    <option value="37">Western</option>
                </select>

                {
                    movies.length > 0 && (
                        <div className="flex items-center justify-center gap-3 mt-5">
                            <button className="bg-[#30363d] text-white p-2 rounded-lg"
                                onClick={handlePreviousPage}
                                disabled={page === 1}
                            >
                                Previous</button>
                            <span className="text-center">
                                Page {page} of {totalPages}
                            </span>
                            <button className="bg-[#30363d] text-white p-2 rounded-lg"
                                onClick={handleNextPage}
                                disabled={page === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    )
                }
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-col-5 gap-5 mt-10">

                        {movies.map(movie => (
                            // Route to movie.jsx
                            <Link to={`/movie/${movie.id}`} key={movie.id} className="flex flex-col items-center">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="rounded-lg"/>
                                <h1 className="text-lg mt-2 text-center">{movie.title} <span>({movie.release_date.substring(0, 4)})</span>
                                </h1>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Movies