import { useQuery } from "react-query";
import { fetchCharacters } from "../service/characters";

export const useGetCharactersQuery = () => {
  const { data, status } = useQuery("characters", fetchCharacters, {
    staleTime: Infinity,
  });

  return { data, status };
};
