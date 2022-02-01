const axios = require('axios').default;

const options = {
  method: 'GET',
  url: 'https://getrit-furniture-store.p.rapidapi.comhttps//getrit.com/API/Token',
  params: { Token: 'Demo' },
  headers: {
    'x-rapidapi-host': 'getrit-furniture-store.p.rapidapi.com',
    'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
