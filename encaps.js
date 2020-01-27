"use strict";
exports.__esModule = true;
var animal = /** @class */ (function () {
    function animal(
    //    public eyes:number=2,
    //    public legs:number=4,
    dotsOnBody, typeOfAnimal) {
        this.dotsOnBody = dotsOnBody;
        this.typeOfAnimal = typeOfAnimal;
        this.eyes = 2;
        this.legs = 4;
    }
    animal.prototype.animalInfo = function () { console.log(this.typeOfAnimal + " has " + this.eyes + " eyes and " + this.legs + " legs" + " and dots on it's body is " + this.dotsOnBody + "and it's" + this.behaviour + "."); };
    return animal;
}());
exports.animal = animal;
var how = new animal(323, "Rabbit");
// how.dotsOnBody=44;
// how.typeOfAnimal="Dog";
how.behaviour = "Jumping";
how.animalInfo();
