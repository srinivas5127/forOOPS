class overLoading{

    x:any=33;

    foo(x: number, y:number|boolean, z:boolean|string ){
        if (typeof x === "number") {
            
            console.log("X : "+this.x+" is number")
        }
    }


}

let o= new overLoading;
o.foo(3,9,"sd");


