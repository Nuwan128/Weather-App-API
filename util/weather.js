const axios = require('axios');

const getWeather = (lat,lon) => {

    return new Promise((resolve,reject) => {
        
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=e3ac7d987600d394da0f93cd0f0deaa1`;
        
        axios.get(url)
            .then((response) => {
                
                // console.log(`${response.data[0].name} is in ${response.data[0].lat} ${response.data[0].lon}`);
                resolve({weather:`Curently ${response.data.weather[0].description} and Temprage is ${response.data.main.temp} C`});
                
            })
            .catch((error) => {
                reject({error:`Unable to find the location`});
            });
    });

    
}

module.exports = getWeather;