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
var Family = /** @class */ (function () {
    function Family() {
        this.surname = "Vadige";
    }
    Family.prototype.detailsInOneLine = function () { console.log("Name: Vadige." + this.name + ", Age: " + this.age); };
    Family.prototype.speak = function () { console.log("My native is Kakinada"); };
    Family.prototype.bike = function () {
        console.log("Don't want in Hyd");
    };
    return Family;
}());
var Dad = /** @class */ (function (_super) {
    __extends(Dad, _super);
    function Dad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Highest_Power_In_Fam = true;
        _this.Bikes_He_Owns = 2;
        _this.Cars_He_Owns = 1;
        return _this;
    }
    return Dad;
}(Family));
var Mom = /** @class */ (function (_super) {
    __extends(Mom, _super);
    function Mom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //   static  bike(){
    //         console.log("Gave me the Bike")
    //     }
    Mom.prototype.job = function () {
        console.log(_super.prototype.bike);
    };
    return Mom;
}(Family));
var sis = /** @class */ (function (_super) {
    __extends(sis, _super);
    function sis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sis;
}(Family));
//DAD OBJECT
// let dadDetails = new Dad
// dadDetails.name="Gangadhara Rao"
// dadDetails.age=50
// console.log("Details in Object format")
// console.log(dadDetails)
// console.log("******Details in-Line format*****")
// dadDetails.detailsInOneLine()
// dadDetails.speak()
// console.log("-------Sub_Calss-----------------------------------")
// console.log(dadDetails.Cars_He_Owns + dadDetails.surname)
// console.log("--------DAD OBJ ENDS HERE-----------------------------------")
//MOM OBJECT
// let momDetails = new Mom;
// momDetails.name="Kanaka Ratnam"
// momDetails.age = 43
// console.log("Details in Object format")
// console.log(momDetails)
// console.log("******Details in-Line format*****")
// momDetails.detailsInOneLine()
// momDetails.speak()
// console.log("--------MOM OBJ ENDS HERE-----------------------------------")
//SIS OBJECT
// var sisDetails = new sis
// sisDetails.name="Navya"
// sisDetails.age=25;
// console.log("******Details in-Line format*****")
// sisDetails.detailsInOneLine();
// sisDetails.speak()
// console.log("Details in Object format")
// console.log(sisDetails)
// console.log("--------SIS OBJ ENDS HERE-----------------------------------")
// Mom.bike();
var request = new Mom;
request.bike();
