// Product.js
export default class Product {
    constructor(id, name, quantity, photo) {
      this._id = id;
      this._name = name;
      this._quantity = quantity;
    }
  
    get id() {
      return this._id;
    }
    get name() {
      return this._name;
    }
  
    get quantity() {
      return this._quantity;
    }

  }
  