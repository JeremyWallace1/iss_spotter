const request = require('request-promise-native');

const fetchMyIP = function() {
  // use request to fetch IP address from JSON API
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  // use request to fetch coords from JSON API
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
};

module.exports = { fetchMyIP, fetchCoordsByIP };