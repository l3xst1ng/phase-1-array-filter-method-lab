// Code your solution here
// Function to find matching drivers by name
function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

// Function to find drivers whose names begin with provided letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

// Function to match driver objects by name
function matchName(drivers, name) {
  return drivers.filter(
    (driver) => driver.name.toLowerCase() === name.toLowerCase()
  );
}
