// `npm start` or `yarn start` to see in browser.
// `tsc` then `node dist/app.js` to see in terminal.

class Pizza {
  constructor(private name: string, private price: number) {}
}

// It is common to create a list and add or retrive items from it.

// We supply a type variable to List so we can pass in a type variable.
class List<T> {
  // private list: any[];
  // We can now pass in the variable array type without specifying any.
  private list: T[];

  // addItem to a list without returning anything.
  // This is a common pattern that we would use.
  addItem(item: T): void {
    this.list.push(item);
  }

  // We expect this to return an array.
  getList(): T[] {
    return this.list;
  }
}

// We can add the Pizza array typing to the list and the information will be passed down.
const list = new List<Pizza>();

list.addItem(new Pizza('Pepperoni', 15));
// We might accidentally add another class. We can automatically add to this list and it is
// quite error prone.
// list.addItem(new Coupon());

const pizzas = list.getList();

// Another example using our generic funtion.

class Coupon {
  constructor(private name: string) {}
}

// We can define the value at the point it is called and use it throughout the application.
const anotherList = new List<Coupon>();

anotherList.addItem(new Coupon('PIZZA25'));
