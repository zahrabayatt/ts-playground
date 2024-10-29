// Static members belong to class not object and we have one instance of that in memory
class Ride {
  private static _activeRiders: number = 0;

  start() {
    Ride._activeRiders++;
  }

  stop() {
    Ride._activeRiders--;
  }

  // we make this method static to only exist in class
  static get activeRides() {
    return Ride._activeRiders;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);
// Ride.activeRides = 1 // error it is readonly
