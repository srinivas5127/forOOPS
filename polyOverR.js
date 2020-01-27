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
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.features = function () {
        return "1.All cars have 4 wheels";
    };
    return car;
}());
var Mercedez = /** @class */ (function (_super) {
    __extends(Mercedez, _super);
    function Mercedez() {
        return _super.call(this) || this;
    }
    Mercedez.prototype.features = function () {
        return _super.prototype.features + " 2.Benz is a spl car";
    };
    return Mercedez;
}(car));
var Luxery = /** @class */ (function (_super) {
    __extends(Luxery, _super);
    function Luxery() {
        return _super.call(this) || this;
    }
    Luxery.prototype.features = function () {
        return _super.prototype.features + "and 3.Luxury has A.I";
    };
    return Luxery;
}(Mercedez));
var obj = new Luxery();
console.log(obj.features());
