//Block 21 Workshop: Car Factory

/*

    The automotive industry comprises a wide range of companies and organizations involved in the
    design, development, manufacturing, marketing, and selling of motor vehicles.

    There is a world of choice in today's car market, what with more than 400 different
    models available.

    In this workshop, you will be tasked with coding a virtual assembly line to create some
    different types of vehicles with as many as the same parts as you possibly can.


    //Project Requirements:

    1. Create file index.js to work in.

    2. Write code that defines a constructor function called Car that,
    creates a new object with the following properties: make, model,
    and year.

    3. Add a method called getDescription to the Car prototype, which
    returns a string containing information about the car.

    4. Define the ElectricCar function as a subclass of Car. Include
    an additional property called range that represents the range of
    the electric car in miles.

    5. Have the ElectricCar prototype override the getDescription
    method of the Car prototype with a new implementation that
    includes information about the range of the electric car.

    6. Create an instance of ElectricCar with the make "Tesla", 
    model "Model S", year 2019, and range 300, and the getDescription
    method is called on the instance. The output will be a string
    containing the make, model, year, and range of the electric car.

*/

function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
   }

    Car.prototype.getDescription = function() {
        return "This car is a " + this.make + " " + this.model + " " + this.year; 
    };

       
     function ElectricCar (make, model, year, range) {
        Car.call(this, make, model, year);
        this.range = range; 
     }

     ElectricCar.prototype = Object.create(Car.prototype);
     ElectricCar.prototype.constructor = ElectricCar;

     ElectricCar.prototype.getDescription = function() {
        return "We have an awesome car is that is a " + this.make + " " + this.model + " " + this.year + " " + "with a range of " + this.range + " " + "miles";
     }

     let elonMusk = new ElectricCar("Tesla", "Model X,", 2023, 150);
     console.log(elonMusk.getDescription());