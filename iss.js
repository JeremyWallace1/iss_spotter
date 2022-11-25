const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
// const fetchMyIP = function(callback) {
//   // use request to fetch IP address from JSON API
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }

//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }

//     callback(null, JSON.parse(body).ip);
//   });
// };
  
// const fetchCoordsByIP = function(ip, callback) {
//   // use request to fetch coords from JSON API
//   request(`http://ipwho.is/${ip}`, (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }

//     const parsedBody = JSON.parse(body);

//     if (!parsedBody.success) {
//       const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
//       callback(Error(message), null);
//       return;
//     }

//     const { longitude, latitude } = parsedBody;

//     callback(null, {longitude, latitude});

//   });
// };

const fetchISSFlyOverTimes = function(coords, callback) {
  // use request to fetch coords from JSON API
  console.log(coords.latitude, coords.longitude);
  request(`https://iss-flyover.herokuapp.com/json/?lat=-80&lon=-23`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const parsedBody = JSON.parse(body);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response} when fetching responsse. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = parsedBody.response;

    callback(null, data);

  });
};

// module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
module.exports = { fetchISSFlyOverTimes };