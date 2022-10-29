const axios = require("axios");

exports.handler = async function (event) {
  const url = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: {
      locationExternalIDs: 5002, //'5002,6020',
      purpose: "for-rent",
      hitsPerPage: "25",
      page: "0",
      lang: "en",
      sort: "city-level-score",
      rentFrequency: "monthly",
      categoryExternalID: "4",
      priceMin: "10000",
      priceMax: "50000",
      roomsMin: "1",
      bathsMin: "1",
      ...event.queryStringParameters,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(url);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};
