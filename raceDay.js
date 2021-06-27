//Race Day
//Register runners and provide instructions on race day.

// Runners are assigned a race number and start time based on their age and registration.

// Race number:-
// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.

// Start time:-
// 9:30 am : Adult and registered early
// 11:00 am : Adult and registered late
// 12:30 pm : All youth

const registeredEarly = true;
const allYouth = true;

// Assign random race numbers (whole) between 0 and 1000
let raceNumber = Math.floor(Math.random() * 1000);

// Display random race number
console.log(`Random race number: ${raceNumber}`)
