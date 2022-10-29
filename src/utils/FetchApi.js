import axios from 'axios';

const baseUrl = `https://bayut.p.rapidapi.com`;
 
const url = {
  method: 'GET',
  url: 'https://bayut.p.rapidapi.com/properties/list',
  params: {
    locationExternalIDs: 5002, //'5002,6020',
    purpose: 'for-rent',
    hitsPerPage: '25',
    page: '0',
    lang: 'en',
    sort: 'city-level-score',
    rentFrequency: 'monthly',
    categoryExternalID: '4',
    priceMin: '10000',
    priceMax: '50000',
    roomsMin: '2',
    bathsMin: '1'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_API_KEY,
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
};

// axios.request(baseUrl).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

const fetchApi = async (url,paramsObj) => {

  const baseUrl = url;
  baseUrl.params = {
    purpose: 'for-rent',
    hitsPerPage: '25',
    page: '0',
    lang: 'en',
    sort: 'city-level-score',
    rentFrequency: 'monthly',
    ...paramsObj
  }

  console.log(baseUrl.params);

  // const data = await axios.request(baseUrl)
  // .then(function (response) {
  //   return  response.data;
  // })
  // .catch(function (error) {
  //  return error;
  // }); 

  // console.log(data);
  return;
};

export { fetchApi, url, baseUrl };
