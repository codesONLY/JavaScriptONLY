// 5,4,3,2,1, Bang!

function timeBomb(i) {
  return i === 0 ? "Bang" : i;
}
for (let i = 5; i >= 0; i--) {
  setTimeout(() => {
    console.log(timeBomb(i));
  }, [(5 - i) * 1000]);
}
