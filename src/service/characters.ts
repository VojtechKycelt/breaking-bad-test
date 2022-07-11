export const fetchCharacters = async () => {
  const res = await fetch("https://breakingbadapi.com/api/characters");
  return res.json();
};
