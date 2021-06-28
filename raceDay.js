//Race Day
//Register runners and provide instructions on race day.

// Runners are assigned a race number and start time based on their age and registration.

// Race number:-
// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.

// Start time:-
// 9:30 am : Adult and registered early
// 11:00 am : Adult and registered late
// 12:30 pm : All Youth

// Heading
console.log('RACE DAY!');

// Assign random race numbers (whole) between 0 and 1000
let raceNumber = Math.floor(Math.random() * 1000);

// Indicate whether a runner has registered
let unregistered = true;

// Indicate whether a runner registered early
let registeredEarly = false;

// State runner's age
let age = 19;

// check runner is an adult and has registered early
// An adult who has registered early should receive a race number at or above 1000
if (age >=18 && registeredEarly){
  raceNumber +=1000;
}

// Message for any unregistered runner
if (unregistered){
console.log(`Not registered!\n Please approach registration desk for race number and start time!`);
}
// Output
// RACE DAY!
// Not registered!
//  Please approach registration desk for race number and start time!


// check age and registration time to determine race time
// Display generated race number
// Display age

// Run time start for early registered adult
else if (age >18 && registeredEarly){
  console.log(`Early adult registrants run at 9:30 am\n Age:${age}\n Race no: ${raceNumber}\n Start time: 9:30`);
}
// Output
// RACE DAY!
// Early adult registrants run at 9:30 am
//  Age:19
//  Race no: 1597
//  Start time: 9:30


// Run time start for late registered adult
else if (age>18 && !registeredEarly){
  console.log(`Late adult registrants run at 11:00 am\n Age:${age}\n Race no: ${raceNumber}\n Start time: 11:00`);
}
// Output
// RACE DAY!
// Late adult registrants run at 11:00 am
//  Age:19
//  Race no: 866
//  Start time: 11:00


// Run time start for all children (regardless of registration time)
else if (age<18){
console.log(`Youth registrants run at 12:30 pm regardless of registration\n Age:${age}\n Race no: ${raceNumber}\n Start time: 12:30`);
}
// RACE DAY!
// Youth registrants run at 12:30 pm regardless of registration
//  Age:17
//  Race no: 915
//  Start time: 12:30


// Run time start message for runners aged exactly 18 years old!
else if(age=18){
console.log(`Runner is exactly 18 years old!\n Age:${age}\n Race no: ${raceNumber}\n Start time: Please approach registration desk!`);
}
// RACE DAY!
// Runner is exactly 18 years old!
//  Age:18
//  Race no: 1864
//  Start time: Please approach registration desk!

