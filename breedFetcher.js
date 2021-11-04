const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body)=>{
    // Printing the error if occurred
    if (error || response.statusCode !== 200) {
      callback("error occured", null);
      //console.log(error);
      return;
    }
    // Printing status code
    console.log(response.statusCode);
    //console.log(body.length);
    //console.log(typeof body);
    const data = JSON.parse(body);
    //console.log(typeof data);
    if (data.length !== 0) {
      callback(null, data[0].description);
      //console.log(typeof data);
    } else {
      console.log(`cannot find breed of that name: ${breedName}`);
    }
  });
};

module.exports = { fetchBreedDescription };