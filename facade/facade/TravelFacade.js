const FlightBooking = require('../services/FlightBooking');
const HotelBooking = require('../services/HotelBooking');
const CarRental = require('../services/CarRental');

class TravelFacade {
  constructor() {
    this.flightBooking = new FlightBooking();
    this.hotelBooking = new HotelBooking();
    this.carRental = new CarRental();
  }

  bookCompleteTrip(from, to, departureDate, returnDate) {
    const flightDetails = this.flightBooking.bookFlight(
      from,
      to,
      departureDate
    );
    const hotelDetails = this.hotelBooking.bookHotel(
      to,
      departureDate,
      returnDate
    );
    const carDetails = this.carRental.rentCar(to, returnDate);

    return {
      flight: flightDetails,
      hotel: hotelDetails,
      car: carDetails,
    };
  }
}

module.exports = TravelFacade;
