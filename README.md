# UofT Assignments
![Publish Assignments to SNS](https://github.com/EDToaster/UofTAssignments/workflows/Publish%20Assignments%20to%20SNS/badge.svg)

![Deploy Reminder](https://github.com/EDToaster/UofTAssignments/workflows/Deploy%20Reminder/badge.svg)

![Deploy Scheduler](https://github.com/EDToaster/UofTAssignments/workflows/Deploy%20Scheduler/badge.svg)

Personal repo to keep track of my assignments and when they are due.

## Format

Format for `assignemnts.csv` is 

| Field Name        | Type      | Description                                           |
| :---------        | :-----    | :----------                                           | 
| course            | String    | course name, like `csc410`                            | 
| assignment_name   | String    | assignment name                                       | 
| date              | ISO8601   | date string, like `2020-09-25T12:59:59-0400`              |
| reminder          | Integer   | bit-field like `6 == 0b111`. Refer to section below   | 

## `reminder` bitfield

| Bit       | Description       |
| :-------- | :-----            |
| 1 << 0    | On time           |
| 1 << 1    | 10 Minutes Before |
| 1 << 2    | 30 Minutes Before |
| 1 << 3    | 1 Hour Before     |
| 1 << 4    | 2 Hours Before    |
| 1 << 5    | 6 Hours Before    |
| 1 << 6    | 12 Hours Before   |
| 1 << 7    | 1 Day Before      |
| 1 << 8    | 2 Days Before     |
| 1 << 9    | 1 Week Before     |