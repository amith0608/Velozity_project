import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define the URL of your Express.js API endpoint
    const apiUrl = ' http://localhost:3005'; // Replace with your actual API endpoint

    // Use Axios to make a GET request to the API
    axios.get(apiUrl)
      .then((response) => {
        setData(response.data); // Store the fetched data in the state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from Express.js Backend</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
