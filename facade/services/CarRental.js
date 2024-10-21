class CarRental {
  rentCar(location, date) {
    console.log(`Car rented in ${location} on ${date}`);
    return {
      carModel: 'Toyota Corolla',
      location: location,
      rentalDate: date,
    };
  }
}

module.exports = CarRental;
