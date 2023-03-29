class Room {
  constructor(name){
    this.name = name;
    this.north = null;
    this.south = null;
    this.west = null;
    this.east = null;
  }

  display(){
    console.log(this.name + '\n north:' + this.north + '\n south:' + this.south + '\n east:' + this.east + '\n west:' + this.west);
  }
}

module.exports = Room;
