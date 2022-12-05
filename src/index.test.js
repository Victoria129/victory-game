const Relationship = require('../services/relationship')


const relationship = new Relationship();

test('Are they friends', () => {
  //Assign
  const expected = 0;

  //Act
  const actual = relationship.friendship(2);

  //Assert
  expect(actual).toBe(expected);
});

test('Is our relashionship improved?', () => {
  //Assign
  const expected = 2;

  //Act
  relationship.improve(1);
  const actual = relationship.improve(1);

  //Assert
  expect(actual).toBe(expected);
});

test('Is our relationshsip ruined', () => {
  // Assign
  const expected = -1;

  // Act
  const actual = relationship.ruine(2);

  // Assert
  expect(actual).toBe(expected);
});

