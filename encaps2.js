"use strict";
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
exports.__esModule = true;
var User = /** @class */ (function () {
    function User() {
        this.id = 11;
        this.firstname = "Brad";
        this.lastname = "Pit";
    }
    User.prototype.idm = function () {
        return this.id;
    };
    User.prototype.idmc = function (n) {
        this.id = n;
    };
    return User;
}());
exports["default"] = User;
var check = /** @class */ (function (_super) {
    __extends(check, _super);
    function check() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return check;
}(User));
var obj = new User;
console.log(obj.idm());
obj.idmc(9999);
console.log(obj.idm());
