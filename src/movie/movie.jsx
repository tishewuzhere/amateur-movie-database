import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getMovies } from "../api/moviesApi";
import { useState } from "react";
const Movie = () => {
    const { movieid } = useParams();
    const [movie, setMovie] = useState({});
    useEffect (() => {
        const fetchMovieDetails = async () => {
            const response = await getMovies(movieid);
            console.log(response)
            setMovie(response)
        }
        fetchMovieDetails()
    },[])
    return (
        <div className="w-full bg-[#192026] text-white min-h-screen">
            <div className="container">
                <div className="movie-container">
                    <header className="py-5 flex justify-between items-center w-full">
                        <h1 className="font-poppins w-fit text-2xl">MovieDB</h1>
                       <div className="flex items-center w-[45%]">
                            {/* <button onClick={handleSearch}>Search</button> */}
                            <input
                                type="text"
                                placeholder="Search for movies"
                                class="bg-[#30363d] text-white p-2 ml-2 rounded-lg w-[500px]"
                                // value={searchQuery}
                                // onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </header>
                    <div className="w-full flex flex-row align-middle gap-[100px]">
                        <div className="relative sm:w[50%]">
                            <h1 className="w-fit font-bold mb-3 mt-2 text-lg">{movie?.original_title}</h1>
                            <img className="rounded-lg" loading="lazy" width={375} height={562.5} src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="" />
                        </div>
                        <div className="flex-col sm:w-[50%] m-8 justify-between p-3">
                            <div className="pb-3">
                                <h1 className="font-bold w-fit mt-2 text-2xl">Genre</h1>
                                <p className="sm:w-[80%] text-[#868686] text-lg">My genres here</p>
                            </div>
                            <div className="pb-3">
                                <h1 className="font-bold w-fit mt-2 text-2xl">Release Date</h1>
                                <p className="sm:w-[80%] text-[#868686] text-lg">{movie?.release_date}</p>
                            </div>
                            <div className="pb-3">
                                <h1 className="font-bold w-fit mt-2 text-2xl">Average Rating</h1>
                                <p className="sm:w-[80%] text-[#868686] text-lg">{movie?.vote_average}</p>
                            </div>
                            <div className="pb-3">
                                <h1 className="font-bold w-fit mt-2 text-2xl">Runtime</h1>
                                <p className="sm:w-[80%] text-[#868686] text-lg">{movie?.runtime} mins</p>
                            </div>
                            <div className="pb-3">
                                <h1 className="font-bold w-fit mt-2 text-2xl">Status</h1>
                                <p className="sm:w-[80%] text-[#868686] text-lg">{movie?.status}</p>
                            </div>
                            <div className="w-[150%]">
                                <h1 className="font-bold w-fit mt-2 text-2xl">Overview</h1>
                                <p className="sm:w-[80%] text-[#868686]">{movie?.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie