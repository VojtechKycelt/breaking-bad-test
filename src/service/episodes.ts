export const fetchEpisodes = async () => {
  const res = await fetch("https://breakingbadapi.com/api/episodes");
  return res.json();
};
