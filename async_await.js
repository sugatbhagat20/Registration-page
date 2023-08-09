console.log("person 1:shows ticket");
console.log("person 2:shows ticket");

const preMovie = async () => {
  const promiseWifeBringingTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("ticket");
    }, 3000);
  });
  const getPopCorn = new Promise((resolve, reject) => resolve(`popcorn`));
  const getButter = new Promise((resolve, reject) => resolve(`butter`));
  const getColdDrinks = new Promise((resolve, reject) =>
    resolve(`Cold Drinks`)
  );
  let ticket;
  try {
    ticket = await promiseWifeBringingTicket;
  } catch (err) {
    ticket = "cancelled";
  }
  // console.log(`wife: I have the ${ticket}`);
  // console.log("Husband:we should get in");
  // console.log("wife:no i m hungry");
  let [popcorn, butter, coke] = await Promise.all([
    getPopCorn,
    getButter,
    getColdDrinks,
  ]);
  // let popcorn = await getPopCorn;

  // console.log(`Husband:I got the ${popcorn}`);
  // console.log("Husband:we should get in");
  // console.log("wife:no i need butter on my popcorn");
  // let butter = await getButter;

  // console.log(`Husband:I got the ${butter}`);
  // console.log("Husband:we should get in");
  // console.log("wife:no i want cold drink as well");
  // let drink = await getColdDrinks;

  // console.log(`Husband:I got the ${drink}`);
  // console.log("Husband:anything else darlo");
  // console.log("wife:no baby lessgo now");
  // console.log(`${popcorn},${butter},${coke}`);
  return ticket;
};

preMovie().then((m) => console.log(`person 3:shows ${m}`));

console.log("person 4:shows ticket");
console.log("person 5:shows ticket");
