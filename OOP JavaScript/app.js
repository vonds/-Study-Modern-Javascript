let Car = function (_color) {
    this.setColor = function (color) {
        _color = color;
    };
    this.getColor = function () {
        return _color;
    }
}

let blueCar = new Car('blue');

console.log(blueCar.getColor());
