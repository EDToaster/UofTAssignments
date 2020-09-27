const { Assignment } = require("./assignment.js");
const parse = require('csv-parse/lib/sync');
const AWS = require("AWS");

const EVENT_TAGS = {
    Product: "UofTAssignments",
};

const eventbridge = new AWS.EventBridge();

const clearReminders = () => {
    // clear all triggers from lambda UofTAssignmentRemind
    const params = {
        Name: "arn:aws:events:us-west-2:292002577318:event-bus/UofTAssignmentNotificationBus",
    };

    eventbridge.describeEventBus(params, (err, data) => {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
}

const handleAssignment = (assignment) => {
    
}

const handleMessage = (message) => {
    clearReminders();
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
    handleMessage(record.Sns.Message);
    
    const response = {
        statusCode: 200,
        body: "done",
    };
    return response;
};
