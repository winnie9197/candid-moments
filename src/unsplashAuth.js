require("dotenv").config()

const AUTH_HEADER = {
	client_id: process.env.UNSPLASH_API_KEY,
}

const AUTH_ENDPOINT = 'https://api.unsplash.com/photos/?' + new URLSearchParams(AUTH_HEADER)

async function unsplashAuth() {
  let response;
  try {
    response = await fetch(AUTH_ENDPOINT);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

  } catch (error) {
    console.error('Failed to authenticate:', error);
  }
  return response.status;
}

async function authenticate() {
  const status = await unsplashAuth();
  console.log('Authentication success');
  return status
}

export { authenticate };