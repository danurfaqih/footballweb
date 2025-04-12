import axios from "axios";

const API_URL = 'https://soccer.highlightly.net/'; // Replace with your actual API URL
const API_KEY = '9c64ac38-9fb4-43bf-8d48-6d45ba95d0c1'; // Replace with your actual API key

export const getStandings = async () => {
    try {
        const response = await axios.get(`${API_URL}/standings`, {
            params: {
                leagueId: 33973,
                season: 2024,
            },
            headers: {
                "x-rapidapi-key": API_KEY
            }
        });

        return response.data;

    }catch (error) {
        return null;
    }
}