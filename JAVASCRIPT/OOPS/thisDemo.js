const obj = {
    name: "Radhe",
    display: function () {
        console.log(this.name, "is the calling site");
    }
}

const obj1 = {
    name: "Krishna",

    display: function () {
        fun = () => {
        console.log(this.name, "is the calling site");
        }
        fun();
    }
}

obj.display();
obj1.display();