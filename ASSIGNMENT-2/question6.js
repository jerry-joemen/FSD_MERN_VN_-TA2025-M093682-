
let Seats = 100;
let bookedSeats = 50;

let availableSeats = Seats - bookedSeats;
console.log("Available Seats:", availableSeats);

let status =
    availableSeats < 20
        ? "Almost Full"
        : availableSeats <= 60
            ? "Moderate Availability"
            : "Plenty of Seats Available";

console.log("Status:", status);