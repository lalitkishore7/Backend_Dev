class category{
    constructor(c) {
        this.categoryName = c;
    }

    getCategoryName() {
        console.log("category is",this.categoryName);
    }
}

class Product extends category{
    constructor(n, p, c) {
        super(c);
        this.name = n;
        this.price = p;
    }

    display() {
        console.log("Details of the product");
        console.log("Name", this.name);
        console.log("price", this.price);
        this.getCategoryName();
    }
}

let p = new Product("Iphone", 100000, "Electronics");

p.display();