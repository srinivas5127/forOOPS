var overLoading = /** @class */ (function () {
    function overLoading() {
        this.x = 33;
    }
    overLoading.prototype.foo = function (x, y, z) {
        if (typeof x === "number") {
            console.log("X : " + this.x + " is number");
        }
    };
    return overLoading;
}());
var o = new overLoading;
o.foo(3, 9, "sd");
