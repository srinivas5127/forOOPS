abstract class animal {
    public  Cat:string;
    constructor( cat:string ){
        this.Cat=cat;
    }
    catInfo():void{
      console.log(this.Cat);
    }
    abstract findCat(string):animal;
}

class Mouse extends animal{
    mouse:string;
    constructor( cat:string,mouse:string){
            super(cat)
            this.mouse=mouse;
    }
    findCat(Cat:string):animal{
             return new Mouse(this.Cat,this.mouse);
    }
    animlInfo(){
        console.log(this.Cat+" and "+this.mouse)
    }
}    
let an = new Mouse("Tom","Jerry")
an.catInfo();
an.animlInfo();


// let a :animal=an.findCat("Tom")

