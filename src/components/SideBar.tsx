import { useEffect, useState } from "react";
import { GenreResponseProps } from "../@types";
import { Button } from "./Button";
import { api } from "../services/api";

interface IProps {
  selectedGenre: GenreResponseProps;
  setSelectedGenre: (genre: GenreResponseProps) => void;
}

export function SideBar({ setSelectedGenre, selectedGenre }: IProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
      setSelectedGenre(response.data[0]);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => setSelectedGenre(genre)}
            selected={selectedGenre.id === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
