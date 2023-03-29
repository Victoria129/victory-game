const Output = require('./output');
const Room = require('./room');

test('name of the room', () => {
  // Assign
  const output = new Output();
  const expected = 'VictoriaRoom';
  const room = new Room(expected);

  // Act
  const actual = output.displayRoom(room);

  // Assert
  expect(actual).toBe(expected);
});
