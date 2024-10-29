// Creating a Shopping Cart

const cartItems = [
  { name: "Shoes", quality: 2, price: 75 },
  { name: "Hat", price: 20 },
  { name: "Socks", quality: 3 },
];

const calcAll = () => {
  return cartItems.reduce((total, { price = 0, discount = 0 }) => {
    const finalPrice = price - (discount ?? 0);
    return total + finalPrice;
  }, 0);
};

const totalPrice = calcAll(cartItems);
console.log(`Total Price: $${totalPrice}`);
