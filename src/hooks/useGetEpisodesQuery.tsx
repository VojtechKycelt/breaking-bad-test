import { useQuery } from "react-query";
import { fetchEpisodes } from "../service/episodes";

export const useGetEpisodesQuery = () => {
  const { data, status } = useQuery("episodes", fetchEpisodes, {
    staleTime: Infinity,
  });

  return { data, status };
};
