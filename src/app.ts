// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

// Discriminated (Tagged) Union Types

interface Order {
  id: string;
  amount: number;
  currency: string;
}

interface Stripe {
  // We add a string literal type to discriminate between the two types below.
  type: 'stripe';
  card: string;
  cvc: string;
}

interface Paypal {
  // string literal added for discrimination.
  type: 'paypal';
  email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & Paypal;

const order: Order = {
  id: 'xj28s',
  amount: 100,
  currency: 'USD'
};

const orderCard: CheckoutCard = {
  ...order,
  // We need the string literal type added here too.
  type: 'stripe',
  card: '1000 2000 3000 4000',
  cvc: '123'
};

const orderPayPal: CheckoutPayPal = {
  ...order,
  // Again.
  type: 'paypal',
  email: 'abc@def.com'
};

// We need to discriminate. So we create a union type where we can check the difference
// between the two types.
type Payload = CheckoutCard | CheckoutPayPal;

// We want to detect what the customer is using, and apply that appropriately.
function checkout(payload: Payload) {
  // Now we can discriminate based on type information added to the above interfaces.
  if (payload.type === 'stripe') {
    // TS will now infer type and can be used in the function below with payload properties
    console.log(payload.card, payload.cvc);
  }
  if (payload.type === 'paypal') {
    console.log(payload.email);
  }
}
