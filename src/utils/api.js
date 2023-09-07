import axios from "axios";



// const BASE_URL ='https://youtube138.p.rapidapi.com';
const BASE_URL ='https://youtube-data8.p.rapidapi.com';
const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY, 
      // 'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
      'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com',
    

    }
  };

  const fetchDataFromApi = async (url) =>{

    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }

  export default fetchDataFromApi;



// const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions';
// const options = {
//   method: 'GET',
//   params: {
//     part: 'snippet',
//     videoId: 'M7FIvfx5J10'
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
//     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//   }
// };

// const fetchDataFromApi = async (url) => {

//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// }
// export default fetchDataFromApi;