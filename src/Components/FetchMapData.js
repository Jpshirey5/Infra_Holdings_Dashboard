import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Map from './Components/Map.js'

const FetchDataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data'); // Replace with your API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Display your data or pass it to a Map component */}
      <Map data={data} />
    </div>
  );
};

export default FetchDataComponent;
