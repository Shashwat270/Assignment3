const axios = require('axios');

const getData = url => axios.get(url).then(result => result.data);
// getData('https://api.myjson.com/bins/hc5ye').then(console.log);
module.exports = getData;
