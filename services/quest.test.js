const Quest = require('./quest');

const quest = new Quest();

test('Initial quest', () => {

//Assign

const expected = 'I need a hero';

//Act
const actual = quest.talk();

//Assert
expect(actual).toBe(expected);

});

test('Accept challenge', () => {

  //Assign
  const expected = "You're in!";

  //Act
  quest.accept();
  let actual = quest.talk();

  //Assert
  expect(actual).toBe(expected);
});

test('Complete', () => {

  //Assign
  const expected = 'Congrats, you win!';

  //Act
  quest.complete();
  let actual = quest.talk();


  //Assert
  expect(actual).toBe(expected);

});


