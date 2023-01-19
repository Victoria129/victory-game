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

  getItemsAtCurrentLocation(){
    if(this._location === 20){
      return 'bottle';
    }
    if(this._location === 10){
      return 'gym';
    }
    return '';
  }
}

module.exports = Location;
