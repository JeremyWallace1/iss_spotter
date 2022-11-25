const { fetchMyIP, fetchCoordsByIP } = require('./iss');
const ip = '205.206.87.7';

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned IP:', ip);
});

fetchCoordsByIP(ip, (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned Coords:", coords);
});

const returnMessage = function(error, data) {
  return error, data;
};

fetchMyIP(returnMessage);
//fetchCoordsByIP(ip, returnMessage);