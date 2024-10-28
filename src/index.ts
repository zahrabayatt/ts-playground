type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

if (customer !== null && customer !== undefined) {
  console.log(customer.birthday);
}

// There is a simpler way to writing this code in typescript:

// we can use Optional property access operator (?) instead of checking customer is null or undefined:
console.log(customer?.birthday);

// if the birthday is a optional property:
console.log(customer?.birthday?.getFullYear());

// we have Optional element access operator:
// customers?.[0]

// we have Optional call operator:
let log: any = (message: string) => console.log(message);
log = null;
// log could be null because the type of it is any:
log?.("a");
