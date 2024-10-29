"use strict";
class Ride {
    start() {
        Ride._activeRiders++;
    }
    stop() {
        Ride._activeRiders--;
    }
    static get activeRides() {
        return Ride._activeRiders;
    }
}
Ride._activeRiders = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
//# sourceMappingURL=index.js.map