class HotelBooking {
  bookHotel(destination, checkInDate, checkOutDate) {
    console.log(
      `Hotel booked in ${destination} from ${checkInDate} to ${checkOutDate}`
    );
    return {
      hotelName: 'Hotel XYZ',
      destination: destination,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    };
  }
}

module.exports = HotelBooking;
