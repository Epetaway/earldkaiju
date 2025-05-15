import axios from 'axios';

export default async function handler(req, res) {
  try {
    const username = process.env.TREEHOUSE_USERNAME;
    console.log("Treehouse Username:", username);

    const response = await axios.get(`https://teamtreehouse.com/${username}.json`);
    console.log("API Response Status:", response.status);
    console.log("API Response Data:", response.data);

    if (response.status !== 200) {
      console.error('Treehouse API Error:', response.status, response.statusText);
      return res.status(response.status).json({ error: 'Treehouse API Error' });
    }

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching Treehouse data:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from Treehouse API' });
  }
}
