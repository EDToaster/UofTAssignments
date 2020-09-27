const { Assignment } = require("./assignment.js");
const parse = require('csv-parse/lib/sync');

const translateCSV = (lines) => {
    return data.map(({course, assignment_name, date, reminder}) => new Assignment(course, assignment_name, date, reminder));
}

const clearReminders = () => {
    // clear all triggers from lambda UofTAssignmentRemind
}

const handleAssignment = (assignment) => {
    
}

const handleMessage = (message) => {
    clearReminders();
    translateCSV(parse(message), { columns: true, skip_empty_lines: true }).forEach(handleAssignment);
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
