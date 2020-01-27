class car {
  constructor(){}
     features(){
        return "1.All cars have 4 wheels";
     }
}

class Mercedez extends car {
    constructor(){
        super()
    }
   features(){
      return super.features + " 2.Benz is a spl car";
   }
}

class Luxery extends Mercedez {
    constructor() {
        super()
    }

    features(){
        
        return super.features + "and 3.Luxury has A.I";
    }
}

var obj:Luxery = new Luxery();
console.log(obj.features());


