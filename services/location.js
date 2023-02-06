class Location {
  constructor(){
    this._location = 1;
    this._places = {
      20: 'bottle',
      10: 'gym',
    };
  }

  getCurrentLocation(){
    return this._location;
  }

  changeLocation(newLocationId){
    this._location = newLocationId;
  }

  getItemsAtCurrentLocation(){
    let currentPlace = this._places[this._location];
    if(currentPlace === undefined){
      return "";
    }
    return this._places[this._location];
  }

  placeItem(itemLocation, item){
    this._places[itemLocation] = item;
  }

}

module.exports = Location;
