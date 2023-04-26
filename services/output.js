class Output {
  constructor(){

  }

  displayRoom(room){
    return `${room.name}\n north: ${room.north.name}`;
  }

  displayQuest(quest){
    return quest.name;
  }
}

module.exports = Output;
