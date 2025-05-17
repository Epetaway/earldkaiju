import axios from 'axios';

export default async function handler(req, res) {
  try {
    const username = "ehicksonjr";
    const response = await axios.get(`https://teamtreehouse.com/profiles/${username}.json`);

    if (response.status !== 200) {
      throw new Error('Failed to load skills from Treehouse.');
    }

    const data = response.data;
    if (!data.badges || !Array.isArray(data.badges)) {
      throw new Error('Badges data is not in the expected format.');
    }

    res.status(200).json({ badges: data.badges });
  } catch (error) {
    console.error("API Error:", error.message);
    res.status(500).json({ error: "Failed to load skills. Please try again later." });
  }
}
