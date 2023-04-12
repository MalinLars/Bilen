class Car{
    constructor(brand, model, year, colour, maxSpeed = 0) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.colour = colour;
        this.maxSpeed = maxSpeed;
    }

    driving() {
        console.log(`${this.brand} ${this.model} ${this.year} ${this.colour} is driving`);
    } 

    speed(mxs) {
        this.maxSpeed = mxs;
        console.log(`${this.brand} ${this.model} has maximum speed ${this.maxSpeed}`);
    }

    changeCar(brn, mdml, yer, clr) {
        this.brand = brn;
        this.model = mdml;
        this.year = yer;
        this.colour = clr;
      
    }
}

const carClass = new Car ('Volvo', 'V70', 1997, 'gold');
    carClass.driving();
    carClass.speed(120);
    carClass.changeCar('Saab', '900', 1978, 'red');
    carClass.driving();
    carClass.speed(150);