const request = require('request');

var url = "https://api.thecatapi.com/v1/breeds/search";             


const fetchBreedDescription = function(breedName, callback) {
  url = url + '?q=' + breedName;
  request(url,(error,response,body) =>{
    if (error){
     callback(error,null);
    }else{
      const data = JSON.parse(body);
      if ( data.length == 0){
        var errorMessage ='the breed '+ breedName + ' is not found.';
        callback(errorMessage, null);
      }else {
        callback(null,data[0].description);
      }
    }
   
  })
};

module.exports = { fetchBreedDescription };