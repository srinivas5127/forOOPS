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
var Box = /** @class */ (function () {
    function Box() {
    }
    Box.open = function () {
        console.log("Box contains lot of items");
    };
    return Box;
}());
var Pen = /** @class */ (function (_super) {
    __extends(Pen, _super);
    function Pen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pen.open = function () {
        console.log("Pen is Smooth");
        _super.open.call(this);
    };
    return Pen;
}(Box));
Pen.open();
