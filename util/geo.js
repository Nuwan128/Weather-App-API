const axios = require("axios");

const getGeo = (location) => {

    return new Promise((resolve,reject) => {

        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=API ID`;
    
        axios.get(url)
            .then((response) => {
                // const lat = response.data[0].lat;
                // const lon = response.data[0].lon;
                resolve({
                    name:response.data[0].name,
                    lat:response.data[0].lat,
                    lot:response.data[0].lon
                })
                
            })
            .catch((error) => {
                reject({error:`Unable to find the location , Please try again`});
            });
    });

  
}

module.exports = getGeo;
