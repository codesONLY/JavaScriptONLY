const user = {
  name: "Soham",
};

const admin = user;

console.log(admin);

admin.name = "Dhruvi";

console.log(admin);

user.name = "Samyak";

console.log(admin);

console.log(admin == { name: "Samyak" });
