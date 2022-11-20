class Relationship {
  constructor() {
    this._relationship = {};
  }
  friendship(id) {
    return 0;
  }

  improve(characterId) {

    // this._relationship[1] = this._relationship[1]+ 1;

    let result = this._relationship[1];
    if(result === undefined){
     this._relationship[this._relationship[1]];
    }
    
    return this._relationship[1];
  }

  ruine(characterId) {

  }

  assess(characterId, direction) {

  }
}

module.exports = Relationship;