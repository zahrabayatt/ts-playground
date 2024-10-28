let speed: number | null = null;

let ride = {
  // Falsy values are undefined, null , '', false, 0, so the 0 value for speed is going to ignored
  // speed: speed || 30,
  // to fix that we can only check for nullability:
  // speed: speed !== null ? speed : 30,
  // in ts we have better way to checking null or undefined using nullish coaelscing operator (??):
  speed: speed ?? 30, // if speed is not null or undefined use the speed's value otherwise use 30
};
