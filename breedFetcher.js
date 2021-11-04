const request = require('request');
const myArgs = process.argv.slice(2);
const searchName = myArgs[0];
//console.log(myArgs[0]);

let url = `https://api.thecatapi.com/v1/breeds/search?q=${searchName}`;
request(url, (error, response, body)=>{
  // Printing the error if occurred
  if (error || response.statusCode !== 200) {
    console.log("error occured");
    console.log(error);
    return;
  }
  // Printing status code
  console.log(response.statusCode);
  //console.log(body.length);
  //console.log(typeof body);
  const data = JSON.parse(body);
  //console.log(typeof data);
  if (data.length !== 0) {
    console.log(data[0].description);
    //console.log(typeof data);
  } else {
    console.log(`cannot find breed of that name: ${searchName}`);
  }
});