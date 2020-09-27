const { webhook_url } = process.env;
const axios = require("axios");

exports.handler = async (event) => {
    const { message } = event;
    
    var config = {
      method: 'post',
      url: webhook_url,
      headers: { 
        'Content-Type': 'application/json', 
      },
      data : JSON.stringify({content: message}), 
    };
    
    console.log(await axios(config));
    
    const response = {
        statusCode: 200,
        body: "done",
    };
    return response;
};
