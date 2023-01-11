const Location = require('./location');

const location = new Location();

test('current location', () => {
  //Assign
  const expected = 1;

  //Act
  const actual = location.getCurrentLocation();

  //Assert
  expect(actual).toBe(expected);
});

test('Changing location', () => {
  //Assign
  const newLocation = 10;
  const expected = 10;

  //Act
  location.changeLocation(newLocation);
  const actual = location.getCurrentLocation();

  //Asserting
  expect(actual).toBe(expected);
})