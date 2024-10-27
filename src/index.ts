// let employee: {
//   id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Marry",
//   retire: (date: Date): void => {
//     console.log(date);
//   },
// };

type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 1,
  name: "Alex",
  retire: (date: Date): void => {
    console.log(date);
  },
};

let employee2: Employee = {
  id: 2,
  name: "Marry",
  retire: (date: Date): void => {
    console.log(date);
  },
};
