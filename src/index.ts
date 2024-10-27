let employee = { id: 1 };
// employee name = 'Mosh' // we got a compilation error

// we can annotate objects:
let user: {
  id: number;
  name: string;
  fax?: string; // we can make a property optical
} = {
  // when we defining a object we have to define all properties unless it is optional
  id: 1,
  name: "zahra",
};

// to make a property readonly we can use a readonly modifier:
let person: {
  readonly id: number;
  name: string;
} = { id: 1, name: "Alex" };

// person.id = 12; // we got a compilation error because id is readonly

// how to define a method for object:
let customer: {
  id: number;
  name: string;
  retire: (date: Date) => void; // we need to specify and annotate the signature of method
} = {
  id: 1,
  name: "Marry",
  retire: (date: Date): void => {
    console.log(date);
  },
};
