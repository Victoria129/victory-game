const Storage = require('./storage');
const Item = require('./item');

const storage = new Storage();

test('get the items', () => {

  //Assign


  //Act
  let actual = storage.getAllItems();


  //Assert
  expect(actual.length).toBe(0);
});

test('add item', () => {
  //Assign
  const expected = new Item('name', 'description', 'category');

  //Act
  storage.addItem(expected);
  let actual = storage.getAllItems();


  //Assert
  expect(actual.length).toBe(1);
  expect(actual[0]).toBe(expected);
});

test('delete item', () => {

  //Assign
  const expected = new Item('name', 'description', 'category');

  //Act
  storage.removeItem(expected);
  let actual = storage.getAllItems();

  //Assert
  expect(actual.length).toBe(0);
});

test('count number of items', () => {

  // Assign
  storage.addItem(new Item('', '', ''));
  storage.addItem(new Item('', '', ''));

  //Act
  let actual = storage.countNumberofItems();

  // Assert
  expect(actual).toBe(2);
});
