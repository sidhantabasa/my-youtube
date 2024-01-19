const API_KEY= "AIzaSyB8IGW6Gja3WQ8hxxkcyDGQzxgVrXYW1oQ"
const VIDEO_API=
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;      

export const VIDEO_SUGGESTION_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export default VIDEO_API