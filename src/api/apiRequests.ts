import axios from 'axios';
import qs from 'qs';

// Function to get the Bearer token from Spotify API
async function getSpotifyBearerToken(clientId: string, clientSecret: string): Promise<string | null> {
    const tokenUrl = 'https://accounts.spotify.com/api/token';

    // Prepare the data for the POST request
    const data = qs.stringify({
        grant_type: 'client_credentials',
    });

    // Prepare the headers
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    };

    try {
        // Send POST request to get the token
        const response = await axios.post(tokenUrl, data, { headers });

        // Extract the access token from the response
        const accessToken = response.data.access_token;

        return accessToken;
    } catch (error) {
        console.error('Error getting Spotify bearer token:', error);
        return null;
    }
}

// Function to get Spotify recommendations
async function getRecommendations(
    accessToken: string,
    targetValence: number,
    targetEnergy: number,
    seedGenres: string[]
): Promise<any> {
    const recommendationsUrl = 'https://api.spotify.com/v1/recommendations';

    // Construct the seed genres query parameter (comma-separated string)
    const seedGenresQuery = seedGenres.join(',');

    try {
        // Make the GET request to Spotify API to get recommendations
        const response = await axios.get(recommendationsUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                target_valence: targetValence,
                target_energy: targetEnergy,
                seed_genres: seedGenresQuery,
                limit: 10, // Maximum number of recommendations to return
                market: 'US', //  (United States)
            },
        });

        // Return the recommendations data
        return response.data;
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        return null;
    }
}

// Example usage
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID || "";
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET || "";

// Ensure that you await the token before passing it to getRecommendations
async function fetchRecommendations() {
    try {
        const accessToken = await getSpotifyBearerToken(clientId, clientSecret); // Await token here
        if (!accessToken) {
            console.log('Failed to get access token');
            return;
        }

        const targetValence = 0.8; // Example target valence (positive mood)
        const targetEnergy = 0.7; // Example target energy (moderate energy)
        const seedGenres = ['pop', 'dance', 'edm']; // Example seed genres

        const recommendations = await getRecommendations(accessToken, targetValence, targetEnergy, seedGenres);
        console.log('Recommendations:', recommendations);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchRecommendations();
