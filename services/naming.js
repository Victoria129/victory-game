class Naming {

  //if relationship = 1, return familiar.
  //if relationship = 3, return buddy.
  //if relationship = -3, return enemy.

  getRelationshipName(relationship) {

    if(relationship > 0 && relationship < 3){
      return 'familiar';
    }
    if(relationship === 3){
      return 'buddy';
    }
    if(relationship < 0){
      return 'enemy';
    }
    return 'unknown';
  }
}

module.exports = Naming;
