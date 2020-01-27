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
var MyDesk = /** @class */ (function () {
    function MyDesk(name) {
        this.EmloyeeName = name;
    }
    MyDesk.prototype.MyDeskPlace = function () {
        console.log("In MOTTO Systems Private Limited Compay's Office");
    };
    return MyDesk;
}());
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop(name, number, no, first, second) {
        var _this = _super.call(this, name) || this;
        _this.laptopNo = no;
        _this.EmployeeNumber = number;
        _this.FirstItem = first;
        _this.SecondItem = second;
        return _this;
    }
    Laptop.prototype.LaptopCompany = function () {
        console.log("LENOVO");
    };
    Laptop.prototype.ItContains = function () {
        console.log("It contains " + this.FirstItem + " and " + this.SecondItem);
    };
    Laptop.prototype.MyNameAndEmpNo = function () {
        console.log("My name is " + this.EmloyeeName + ", my employee number is " + this.EmployeeNumber + " and my Laptop No. is " + this.laptopNo);
    };
    return Laptop;
}(MyDesk));
var visit = new Laptop("Srinivas", 113, 26, "Book", "Mouse");
visit.MyDeskPlace();
// visit.FirstItem="Laptop";
// visit.SecondItem="Mouse";
visit.ItContains();
visit.LaptopCompany();
visit.MyNameAndEmpNo();
