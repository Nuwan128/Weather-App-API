const getWeather = require('./util/weather');
const getGeo = require('./util/geo');


getGeo("gurudeniya")
    .then((data) => {
        
        return getWeather(data.lat,data.lot);
    }).then((data) => {
        console.log(data.weather);
    })
    .catch((error) => {
        console.log(error);
    });
 
// getWeather(35,139)
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) =>{
//         console.log(error);
//     });
