const p = new Promise((resolve, reject) => {
  resolve("yeah");
  reject("nahh");
});

p.then(
  (result) => {
    console.log("fullfilled");
    console.log(result);
    return new Promise((resolve, reject) => {
      reject("second promise failed");
    });
  },
  (reason) => {
    console.log("rejected");
    console.log(reason);
  }
)
  .then((result) => {
    console.log(result);
  })
  .catch((reason) => {
    console.log("log from catch");
    console.log(reason);
  });

let cat = { type: "cat", sound: "meow" };

function say(
  this: { type: string; sound: string },
  message: string,
  message1: string
) {
  console.log(message + " - " + this.type);
  console.log("message1: ", message1);
}

say.apply(cat, ["cats sing", "111"]);
say.call(cat, "cats say meow", "1111");
