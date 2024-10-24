const API_BASE_URL = 'http://localhost:4000/api'; // Adjust base URL if necessary

export const searchWords = async (query) => {
    const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
        throw new Error('Failed to fetch search words');
    }
    return await response.json();
};

export const fetchPopularWords = async () => {
    const response = await fetch(`${API_BASE_URL}/popular`);
    if (!response.ok) {
        throw new Error('Failed to fetch popular words');
    }
    return await response.json();
};
