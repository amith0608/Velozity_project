const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Define a route to fetch movie data from the OMDB API
app.get('/api/movies/:query', async (req, res) => {
  try {
    const { query } = req.params;
    const response = await axios.get(`http://www.omdbapi.com/?apikey=96f4d7a9&s=${query}`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
