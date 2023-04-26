class Quest {
  constructor(name) {
    this._isAccepted = false;
    this.name = name;
  }

  talk() {
    if(this._isCompleted){
      return 'Congrats, you win!';
    }
    if(this._isAccepted){
      return 'You\'re in!';
    }
    return 'I need a hero';
  }

  accept() {
   this._isAccepted = true;
  }

  complete() {
    this._isCompleted = true;

  }
}

module.exports = Quest;
