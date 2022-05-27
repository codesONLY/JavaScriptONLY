let obj = {
  name: "Soham",
  surname: "Shah",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set propName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

// hiding a variable

let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  },
};

user.name = "Pete";
alert(user.name); // Pete

user.name = "";
