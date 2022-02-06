const axios = require('axios').default;

const options = {
  method: 'GET',
  url: 'https://getrit-furniture-store.p.rapidapi.comhttps//getrit.com/API/Token',
  params: { Token: 'FurnitureShop' },
  headers: {
    'x-rapidapi-host': 'getrit-furniture-store.p.rapidapi.com',
    'x-rapidapi-key': 'fd7b8f2585mshf6898278b87b8b0p149370jsn056bfa746a8c',
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
