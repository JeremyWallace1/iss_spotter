const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    callback(null, JSON.parse(body).ip);
  });
};
  
const fetchCoordsByIP = function(ip, callback) {
  // use request to fetch coords from JSON API
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    const parsedBody = JSON.parse(body);
    const longitude = parsedBody.longitude;
    const latitude = parsedBody.latitude;
    if (error) {
      callback(error, null);
      return;
    }
    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message), null);
      return;
    }
    callback(null, {longitude, latitude});
    return;
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };