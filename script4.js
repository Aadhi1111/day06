class UberPriceCalculator {
    constructor(Fare, costPerKm, costPerMin) {
        this.Fare = Fare;
        this.costPerKm = costPerKm;
        this.costPerMin = costPerMin;
    }

        calculatePrice(distance, duration) {
        var distanceCost = distance * this.costPerKm;
        var timeCost = duration * this.costPerMin;
        var totalPrice = this.Fare + distanceCost + timeCost;
        return totalPrice;
    }
}

var PriceCalculator = new UberPriceCalculator(200, 100, 150);



var totalPrice = PriceCalculator.calculatePrice(50, 60);
console.log("Total price:", totalPrice);
