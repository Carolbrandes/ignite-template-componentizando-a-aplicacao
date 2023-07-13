import { MovieCard } from "./MovieCard";
import { GenreResponseProps, MovieProps } from "../@types";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Header } from "./Header";

interface IProps {
  selectedGenre: GenreResponseProps;
}

export function Content({ selectedGenre }: IProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenre.id}`)
      .then((response) => {
        setMovies(response.data);
      });
  }, [selectedGenre]);

  return (
    <div className="container">
      <Header title={selectedGenre?.title} />

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
