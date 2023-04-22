// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name) {
    return  drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver[0] === name[0])
}

function matchName(drivers, name) { 
    return drivers.filter(driver => driver.name === name)
}