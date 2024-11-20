const axios = require("axios");
const Axios = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather"
})
module.exports = Axios