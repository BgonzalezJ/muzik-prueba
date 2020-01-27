import axios from 'axios';

const API_URL = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

export const getAlbums = (callback) => {
	axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
    .then(res => {
      callback(res);
    })
}