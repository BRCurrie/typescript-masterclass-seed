// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// Intersection Types
// Describes the fact that we can combine multiple types together.

interface Order {
  id: string;
  amount: number;
  currency: string;
}

// We do not want to extend the interfaces.
interface Stripe {
  card: string;
  cvc: string;
}

interface Paypal {
  email: string;
}

// Every Order will need to be paid either with a card or through Paypal.
// We will join those types using intersections.
type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & Paypal;
// You can create intersections inline as well.
type CheckoutABC = Order & { name: string };

const order: Order = {
  id: 'xj28s',
  amount: 100,
  currency: 'USD'
};

// We want to merge the order object with another one.
const orderCard: CheckoutCard = {
  // We spread the object from order into the const and add our card and cvc info.
  ...order,
  card: '1000 2000 3000 4000',
  cvc: '123'
};

const orderPayPal: CheckoutPayPal = {
  ...order,
  email: 'abc@def.com'
};

// An older method of doing this.
// This infers that assigned: CheckoutCard. It spreads order and orderCard into a new object.
const assigned = Object.assign({}, order, orderCard);
