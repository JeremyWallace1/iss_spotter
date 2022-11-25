// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
//const ip = '205.206.87.7';
const coords = { longitude: -23, latitude: -80 };
console.log(coords.longitude, coords.latitude);

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP(ip, (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned Coords:", coords);
// });

fetchISSFlyOverTimes(coords, (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned response:", data);

});

const returnMessage = function(error, data) {
  return error, data;
};

// fetchMyIP(returnMessage);
// fetchCoordsByIP(ip, returnMessage);
fetchISSFlyOverTimes(coords, returnMessage);