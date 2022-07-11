import React, { useState } from "react";
import { useGetCharactersQuery } from "../../hooks/useGetCharactersQuery";
import { CharacterModel } from "../../models/characters/CharacterModel";
import "./Characters.css";

const CharactersPage = () => {
  const characters = useGetCharactersQuery();
  const [openImages, setOpenImages] = useState([] as string[]);
  return (
    <div className="main_grid">
      {characters &&
        characters.data?.map((character: CharacterModel) => (
          <div className="character_container" key={character.char_id}>
            <p>Id: {character.char_id}</p>
            <p>Jméno: {character.name}</p>{" "}
            {/* Zde mělo být asi {episode.episode} (číslo epizody v konkrétní sérii), ale takhle je to podle zadání. */}
            <p>
              Povolání:{" "}
              {character &&
                character.occupation.map((occ) => (
                  <span key={occ}>{occ}, </span>
                ))}
            </p>
            {openImages.includes(character.img) ? (
              <img src={character.img} alt={character.name} />
            ) : (
              <button
                onClick={() => {
                  setOpenImages((prev) => [...prev, ...[character.img]]);
                }}
              >
                Načíst foto
              </button>
            )}
          </div>
        ))}
    </div>
  );
};

export default CharactersPage;
