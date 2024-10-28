// Intersection Types

let weight: number & string; // this is impossible because we don't have a object with both number and string at the same time

// Good Example:

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
