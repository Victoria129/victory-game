class Storage {
  constructor(){
    this._items = [];
  }

  getAllItems(){
    return this._items;
  }

  addItem(item){
    this._items.push(item);

  }

  removeItem(item){
    this._items.pop(item);
  }

  getItemByIndex(item){

  }

  updateItem(item){

  }

  countNumberofItems(){

  }


}

module.exports = Storage;
