const geocode = require('./utils/geocode');

const weather = require('./utils/weather');

const city = process.argv[2];

geocode.geocode(city,(error, {latitude, longitude, location} = {}) => {
    console.log('Inside geocode callback');
    if(error){
        return console.log(error);
    }
    weather.forecast(latitude, longitude, (error, forecastData) => {
        console.log('Inside forecast callback');
        if(error){
            return console.log(error);
        }
        console.log('The weather in '+location+': '+forecastData);
    });
})