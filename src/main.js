require('./main.css');
import { authenticate } from './unsplashAuth.js';
import { getImageUrls } from './fetchImages.js';

authenticate();
(async function () {
	window.imgURLs = await getImageUrls()
	const imgURLsReadyEvent = new Event('imgURLsReady');
	window.dispatchEvent(imgURLsReadyEvent);
})();