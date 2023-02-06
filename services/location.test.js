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

  //Assert
  expect(actual).toBe(expected);
});

test('get item in location', () => {
  //Assign
  const expected = 'bottle';
  const newLocation = 20;

  //Act
  location.changeLocation(newLocation);
  const actual = location.getItemsAtCurrentLocation();

  //Assert
  expect(actual).toBe(expected);
});

test('find the gym', () => {
  //Assign
  const expected = 'gym';
  const itemLocation = 10;

  //Act
  location.changeLocation(itemLocation);
  const actual = location.getItemsAtCurrentLocation();

  //Assert
  expect(actual).toBe(expected);
});

test('find the quest', () => {
  //Assign
  const expected = 'quest';
  const itemLocation = 30;

  //Act
  location.placeItem(itemLocation, expected);
  location.changeLocation(itemLocation);
  const actual = location.getItemsAtCurrentLocation();

  //Assert
  expect(actual).toBe(expected);
})
