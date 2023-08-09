console.log("person 1:shows ticket");
console.log("person 2:shows ticket");

function promiseWifeBringingTicket() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });
}

const getPopCorn = promiseWifeBringingTicket().then((t) => {
  console.log("wife: I have the tickets");
  console.log("Husband:we should get in");
  console.log("wife:no i m hungry");
  return new Promise((resolve, reject) => {
    resolve(`${t} popcorn`);
  });
});

const getButter = getPopCorn.then((t) => {
  console.log("Husband:I got the popcorn");
  console.log("Husband:we should get in");
  console.log("wife:no i need butter on my popcorn");
  return new Promise((resolve, reject) => {
    resolve(`${t} butter`);
  });
});

const getColdDrinks = getButter.then((t) => {
  console.log("Husband:I got the butter");
  console.log("Husband:we should get in");
  console.log("wife:no i want cold drink as well");
  return new Promise((resolve, reject) => {
    resolve(`${t} cold drink`);
  });
});

getColdDrinks.then((t) => console.log(t));

console.log("person 4:shows ticket");
console.log("person 5:shows ticket");
