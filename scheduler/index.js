const { Assignment } = require("./assignment.js");
const parse = require('csv-parse/lib/sync');

const { webhook_url } = process.env;
const axios = require("axios");

const sendMessage = async (message) => {
    const config = {
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

const deleteRules = () => {
    sendMessage("$del");
}

const handleAssignment = (assignment) => {
    
}

const handleMessage = async (message) => {
    await deleteRules();
    parse(message, { columns: true, skip_empty_lines: true })
        .map(({course, assignment_name, date, reminder}) => new Assignment(course, assignment_name, date, reminder))
        .forEach(handleAssignment);
}

exports.handler = async (event) => {
    console.log(JSON.stringify(event));
    
    const { Records } = event;
    
    console.log(`Found ${Records.length} records, taking last one`);
    
    // take last record
    const record = Records[Records.length - 1];
    await handleMessage(record.Sns.Message);
    
    const response = {
        statusCode: 200,
        body: "done",
    };
    return response;
};
