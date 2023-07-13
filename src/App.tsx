import { useState } from "react";
import "./styles/global.scss";
import "./styles/sidebar.scss";
import "./styles/content.scss";
import { SideBar } from "./components/SideBar";
import { GenreResponseProps } from "./@types";
import { Content } from "./components/Content";

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      <Content selectedGenre={selectedGenre} />
    </div>
  );
}
