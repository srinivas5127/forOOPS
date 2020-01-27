interface IAnimal{
    // eyes:number;
    // legs:number
    dotsOnBody:number;
    typeOfAnimal:string;
    animalInfo():any; 
    behaviuor?:string;
   }
export class animal implements IAnimal{
    constructor( 
    //    public eyes:number=2,
    //    public legs:number=4,
       public dotsOnBody:number,
       public typeOfAnimal:string ){}

       private eyes:number=2;
       private legs:number=4;
       public behaviour:string;
    animalInfo():any{console.log(this.typeOfAnimal+" has "+this.eyes+" eyes and "+this.legs+" legs"+" and dots on it's body is "+this.dotsOnBody+"and it's"+this.behaviour+".")}   
  
}


let how:animal=new animal(323,"Rabbit")
// how.dotsOnBody=44;
// how.typeOfAnimal="Dog";
how.behaviour="Jumping"
how.animalInfo()

