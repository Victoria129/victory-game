class Relationship {
  constructor() {
    this._relationship = {};
  }
  friendship(id) {
    return 0;
  }

  improve(characterId) {
    return this.assess(characterId, 1);
  }

  ruine(characterId) {
    return this.assess(characterId, -1);
  }

  assess(characterId, direction) {
    let currentRelationship = this._relationship[characterId];
    if(currentRelationship === undefined){
      this._relationship[characterId] = 0;
    }

    this._relationship[characterId] = this._relationship[characterId] + direction;

    return this._relationship[characterId];

  
    // current relationship for id-1 = 0
    // direction = 1
    // new relationship = 1

    // current relationship for id-1 = 5
    // direction = -1
    // new relationship = 4

  }
}

module.exports = Relationship;