const searchParams = {
  // topics: ['def456'],
  query: 'candid',
  orientation: 'landscape',
  count: 10,
}
const AUTH_HEADER = {
  client_id: process.env.UNSPLASH_API_KEY,
}

const REQUEST_ENDPOINT = 'https://api.unsplash.com/photos/random?' + new URLSearchParams({...AUTH_HEADER,...searchParams});
async function fetchImageUrls() {
  try {
    const response = await fetch(REQUEST_ENDPOINT);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    const imageUrls = data.map((item) => item.urls.small);
    return imageUrls;
  } catch (error) {
    console.error('Failed to fetch image URLs:', error);
    return [];
  }
}

async function getImageUrls() {
  const imageUrls = await fetchImageUrls();
  console.log('Fetched image URLs:', imageUrls);
  return imageUrls;
}

export { getImageUrls };