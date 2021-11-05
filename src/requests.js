const API_KEY = "6a1444f2f634e26a68b9a254db3ef257";

const requests = {
  NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  trending: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=2`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  drama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  tvcomedy: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  tvdrama: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  tvanimation: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  tvaction: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
};
export default requests;
