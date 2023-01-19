const Naming = require('./naming');

const naming = new Naming;

test('is he a friend', () => {

  //Assign
  const thisRelationship = 3;
  const expected = 'buddy';

  //Act
  let actual = naming.getRelationshipName(thisRelationship);

  //Assert
  expect(actual).toBe(expected);
});

test('is he an enemy', () => {

  //Assign
  const thisRelationship = -3
  const expected = 'enemy';

  //Act
  let actual = naming.getRelationshipName(thisRelationship);

  //Assert
  expect(actual).toBe(expected);
});

test('is he familiar', () => {
  //Assign
  const thisRelationship = 1;
  const expected = 'familiar';

  //Act
  let actual = naming.getRelationshipName(thisRelationship);

  //Assert
  expect(actual).toBe(expected);
});

test('is it a valid value', () => {
  //Assign
  const thisRelationship = 4;
  const expected = 'unknown'

  //Act
  let actual = naming.getRelationshipName(thisRelationship);

  //Assert
  expect(actual).toBe(expected);
});
