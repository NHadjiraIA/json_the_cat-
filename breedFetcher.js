const request = require('request');
var params = process.argv
            .slice(2);
var parameter =  params[0];
var url = "https://api.thecatapi.com/v1/breeds/search"+'?q=' + parameter;             
request(url,(error,response,body) =>{
  if (error){
   console.log(error);
  }else{
    const data = JSON.parse(body);
    if ( data.length == 0){
      console.log('the breed %s is not found.',parameter);
    }else {
      console.log(data[0].description);
    }
  }
 
})