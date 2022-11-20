const Relationship = require('../services/relationship')


const relashionship = new Relationship();

test('Are they friends', () => {
  //Assign
  const expected = 0;

  //Act
  const actual = relashionship.friendship(2);


  //Assert
  expect(actual).toBe(expected);
})

