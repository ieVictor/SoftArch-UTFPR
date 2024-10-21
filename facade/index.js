const TravelFacade = require('./facade/TravelFacade');

const travelFacade = new TravelFacade();

const from = 'São Paulo';
const to = 'Rio de Janeiro';
const departureDate = '2024-11-15';
const returnDate = '2024-11-20';

const tripDetails = travelFacade.bookCompleteTrip(
  from,
  to,
  departureDate,
  returnDate
);

console.log('Trip booked successfully:', tripDetails);
