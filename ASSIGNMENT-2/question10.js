
function checkBusRoute(busNumber) {
  if (typeof busNumber !== "number" || !Number.isInteger(busNumber)) {
    console.log("Please provide an integer bus number.");
    return;
  }
  if (busNumber % 2 === 0) {
    console.log(`Bus ${busNumber} goes to Route A .`);
  } else {
    console.log(`Bus ${busNumber} goes to Route B.`);
  }
}


checkBusRoute(42); 
checkBusRoute(33);