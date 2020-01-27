var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(modalName, color, price, seats) {
        this.No_Of_Tyres = 4;
        this.No_Of_Steerings = 1;
        this.Car_Model_Name = modalName;
        this.Color = color;
        this.Price = price;
        this.No_Of_Seats = seats;
    }
    Car.prototype.CarDiscription = function () {
        console.log("Car Descriction is as follows--" + "Car_Model:" + this.Car_Model_Name + ", Color:" + this.Color + ", Price:" + this.Price +
            ", No. Of Seats:" + this.No_Of_Seats + ", No. Of tyres:" + this.No_Of_Tyres + ", No. Of Steerings: " + this.No_Of_Steerings);
    };
    return Car;
}());
var Audi_R8 = /** @class */ (function (_super) {
    __extends(Audi_R8, _super);
    function Audi_R8(modalName, color, price, seats, moonRoof) {
        var _this = _super.call(this, modalName, color, price, seats) || this;
        _this.MoonRoof = moonRoof;
        return _this;
    }
    Audi_R8.prototype.specialCase = function () {
        if (this.MoonRoof = true) {
            console.log(this.Car_Model_Name + "_has Moon Roof");
        }
    };
    return Audi_R8;
}(Car));
var Maruti_800 = /** @class */ (function (_super) {
    __extends(Maruti_800, _super);
    function Maruti_800(modalName, color, price, seats, size) {
        var _this = _super.call(this, modalName, color, price, seats) || this;
        _this.smallInSize = size;
        return _this;
    }
    Maruti_800.prototype.specialCase = function () {
        if (this.smallInSize = true) {
            console.log(this.Car_Model_Name + "_is small in size when compared to Audi_R8");
        }
    };
    return Maruti_800;
}(Car));
//OBJ for AUDI_R8
var audi = new Audi_R8("Audi R8", "Matte-Black", 27200000, 2, true);
audi.CarDiscription();
audi.specialCase();
//OBJ for MARUTHI_800
var maruthi = new Maruti_800("Maruthi_800", "White", 800000, 4, true);
maruthi.CarDiscription();
maruthi.specialCase();
