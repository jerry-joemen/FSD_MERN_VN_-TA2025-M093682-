
function placeOrder(callback) {
  setTimeout(() => {
    console.log("Order placed");
    if (typeof callback === "function") callback();
  }, 1000); 
}

function cookFood(callback) {
  setTimeout(() => {
    console.log("Food is on the way");
    if (typeof callback === "function") callback();
  }, 2000); 
}

function deliverFood() {
  setTimeout(() => {
    console.log("Food delivered");
  }, 3000); 
}
placeOrder(() => cookFood(() => deliverFood()));

