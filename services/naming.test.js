const Naming = require('./naming');

const naming = new Naming;

test('is he a friend', () => {
  //Assign
  const thisRelationship = 3;
  const expected = 'buddy';

  //Act
  const actual = naming.getRelationshipName(thisRelationship);

  //Assert
  expect(actual).toBe(expected);
})