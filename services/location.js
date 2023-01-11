class Location {
  constructor(){
    this._location = 1;
  }

  getCurrentLocation(){
    return this._location;
  }

  changeLocation(newLocationId){
    this._location = newLocationId;
  }
}

module.exports = Location;
