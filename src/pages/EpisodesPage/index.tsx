import React from "react";
import { useGetEpisodesQuery } from "../../hooks/useGetEpisodesQuery";
import "./Episodes.css";
import { EpisodeModel } from "../../models/episodes/EpisodeModel";

const EpisodesPage = () => {
  const episodes = useGetEpisodesQuery();

  return (
    <div className="main_grid">
      {episodes &&
        episodes.data?.map((episode: EpisodeModel) => (
          <div className="episode_container" key={episode.episode_id}>
            <p>Sezóna: {episode.season}</p>
            <p>Epizoda: {episode.episode_id}</p>{" "}
            {/* Zde mělo být asi {episode.episode} (číslo epizody v konkrétní sérii), ale takhle je to podle zadání. */}
            <p>Název epizody: {episode.title}</p>
          </div>
        ))}
    </div>
  );
};

export default EpisodesPage;
