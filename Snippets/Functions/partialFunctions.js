function mul(a, b) {
  return a * b;
}

const triple = mul.bind(null, 3); // alternative to this is to curry functions

console.log(triple(4));

const user = {
  firstName: "Samyak Shah",
};
function send(from, text, to) {
  return `
    By: ${from}
    To: ${to}
    Message:
    ${text}, ${this.firstName}`;
}

const sendTo = send.bind(user, "soham@invact.com");

console.log(sendTo("Hello World", "samyak@neog.com"));
