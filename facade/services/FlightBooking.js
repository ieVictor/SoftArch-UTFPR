class FlightBooking {
  bookFlight(from, to, date) {
    console.log(`Flight booked from ${from} to ${to} on ${date}`);
    return {
      flightNumber: 'AB1234',
      from: from,
      to: to,
      date: date,
    };
  }
}

module.exports = FlightBooking;