class product {

    discount = 10; // data member
    
  constructor(n, p) {
    // constructor function
    // this function gets callled when we create an object of the class

    this.name = n; // data member
    this.price = p; // data member
  }

  // member function
  displayProduct() {
    console.log(this.name, this.price, this.discount);
  }

  buyProduct() {}
}

let ob1 = new product("macbook", 500000);
let ob2 = new product("lenovo", 1000000);

ob1.displayProduct();
ob2.displayProduct();




