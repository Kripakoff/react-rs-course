const headers = {
  'Content-Type': 'application/json',
};

const baseUrl = 'https://rickandmortyapi.com/api/character';
export const fetchCharacters = async (search: string | null) => {
  const url = search ? baseUrl + '/' + '?name=' + search.trim() : baseUrl;
  try {
    const response = await fetch(url, {
      headers: headers,
      method: 'GET',
    });
    return await response.json();
  } catch (e: { error: string } | unknown) {
    console.log(e);
  }
};

export const fetchCharacter = async () => {
  try {
    const response = await fetch(baseUrl, {
      headers: headers,
      method: 'GET',
    });
    return await response.json();
  } catch (e: { error: string } | unknown) {
    console.log(e);
  }
};
