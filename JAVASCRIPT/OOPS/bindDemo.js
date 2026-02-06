const module = {
  firstName: "Lallu",
  lastName: "kallu",

  display: function (){
    console.log(this.firstName ,this.lastName);
  },

};

// const getX = module.display;

const getX = function () {
  console.log(this.display());
}

let x = getX.bind(module);
console.log(x());







