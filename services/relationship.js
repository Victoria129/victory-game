class Relationship {
  constructor() {
    this._relationship = {};
  }
  friendship(id) {
    return 0;
  }

  improve(characterId) {

    // this._relationship[1] = this._relationship[1]+ 1;

    let currentRelationship = this._relationship[1];
    if(currentRelationship === undefined){
     this._relationship[this._relationship[1]]; // todo: fix this line
    }
    
    return this._relationship[1];
  }

  ruine(characterId) {
    return -777;  // todo: implement
  }

  assess(characterId, direction) {

  }
}

module.exports = Relationship;