import axios from 'axios';

export default async function handler(req, res) {
  try {
    const username = process.env.TREEHOUSE_USERNAME;
    if (!username) {
      console.error('TREEHOUSE_USERNAME is not set in the environment variables.');
      return res.status(500).json({ error: 'Server configuration error. Please set TREEHOUSE_USERNAME.' });
    }

    console.log("Treehouse Username:", username);

    const response = await axios.get(`https://teamtreehouse.com/${username}.json`, {
      headers: {
        'User-Agent': 'Your-App-Name/1.0',
      },
    });

    console.log("API Response Status:", response.status);
    console.log("API Response Data:", response.data);

    if (response.status !== 200) {
      console.error('Treehouse API Error:', response.status, response.statusText);
      return res.status(response.status).json({ error: 'Treehouse API Error' });
    }

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching Treehouse data:', error.message);

    if (error.response) {
      // API Error Response
      console.error('API Error Details:', error.response.data);
      res.status(error.response.status).json({ error: error.response.data });
    } else if (error.request) {
      // No response from API
      console.error('No response received:', error.request);
      res.status(500).json({ error: 'No response from Treehouse API' });
    } else {
      // Other errors
      console.error('Unexpected Error:', error.message);
      res.status(500).json({ error: 'Failed to fetch data from Treehouse API' });
    }
  }
}
