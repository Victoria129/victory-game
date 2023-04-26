const Output = require('./output');
const Room = require('./room');
const Quest = require('./quest')

const output = new Output();

test('name of the room', () => {
  // Assign
  const expected = 'VictoriaRoom';
  const room = new Room(expected);

  // Act
  const actual = output.displayRoom(room);

  // Assert
  expect(actual).toBe(expected);
});

test('door to the north', () => {
  // Assign
  const expected = 'Name room\n north: North room';
  const room = new Room('Name room');
  room.north = new Room('North room');

  // Act
  const actual = output.displayRoom(room);

  // Assert
  expect(actual).toBe(expected);
})

test('display quest', () => {
  // Assign
  const expected = 'I am a quest';
  const quest = new Quest(expected);

  // Act
  const actual = output.displayQuest(quest);

  // Assert
  expect(actual).toBe(expected);
})
