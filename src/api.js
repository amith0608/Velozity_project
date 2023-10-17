const apiKey = '96f4d7a9';

const getMovieData = async (query) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
    );
    const data = await response.json();
    return data.Search;
  } catch (error) {
    console.error(error);
  }
};

export { getMovieData };
