class Family{
    surname?:string="Vadige";
    name: string;
    age: number;
    detailsInOneLine(){console.log("Name: Vadige."+this.name+ ", Age: " +this.age)}
    speak(){console.log("My native is Kakinada" );}
    bike(){
        console.log("Don't want in Hyd")
    }
}

class Dad extends Family{  
   
                        Highest_Power_In_Fam:boolean=true;
                        Bikes_He_Owns:number=2;
                        Cars_He_Owns:number=1;
                        Bussiness_Name:"SRI DEVI HANDLOOMS"
                       
              

}

class Mom extends Family{

//   static  bike(){
//         console.log("Gave me the Bike")
//     }

    job(){
        console.log(super.bike);
    }
  
}
class sis extends Family{}

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

let request:Mom= new Mom;
request.bike();
