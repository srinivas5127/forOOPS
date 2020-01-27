class Car{
    private No_Of_Tyres:number=4;
    No_Of_Steerings:number=1;
    Car_Model_Name:string;
    Color:string;
    Price:number;
    No_Of_Seats:number;
    constructor(modalName:string,color:string,price:number,seats:number){
          this.Car_Model_Name=modalName;
          this.Color=color;
          this.Price=price;
          this.No_Of_Seats=seats;
          
    }
    CarDiscription(){
        console.log("Car Descriction is as follows--"+"Car_Model:"+this.Car_Model_Name+", Color:"+this.Color+", Price:"+this.Price+
        ", No. Of Seats:"+this.No_Of_Seats+", No. Of tyres:"+this.No_Of_Tyres+", No. Of Steerings: "+this.No_Of_Steerings)
    }   
}

class Audi_R8 extends Car{
    MoonRoof:boolean;
    constructor(modalName:string,color:string,price:number,seats:number,moonRoof:boolean){
         super(modalName,color,price,seats);
         this.MoonRoof=moonRoof;
    }  
    specialCase() {   
        if (this.MoonRoof=true) {
            console.log(this.Car_Model_Name+"_has Moon Roof")
        }
    }
}

class Maruti_800 extends Car{
    smallInSize:boolean;
    constructor(modalName:string,color:string,price:number,seats:number,size:boolean){
    super(modalName,color,price,seats);
    this.smallInSize=size;
    }
    specialCase() {   
        if (this.smallInSize=true) {
            console.log(this.Car_Model_Name+"_is small in size when compared to Audi_R8")}
    }
    
}


//OBJ for AUDI_R8
let audi=new Audi_R8("Audi R8","Matte-Black",27200000,2,true)
audi.CarDiscription();
audi.specialCase();



//OBJ for MARUTHI_800
let maruthi=new Maruti_800("Maruthi_800","White",800000,4,true)

maruthi.CarDiscription();
maruthi.specialCase();

