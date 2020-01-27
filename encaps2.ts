export interface IUser{
    id?:number;
    firstname?:string;
    lastname?:string;
}

export default class User {
   private id:number=11;
   private firstname:string="Brad";
   private lastname:string="Pit";
   
   public idm(){
       return this.id;
   }
   public idmc(n:number){
       this.id=n
   }

}

class check extends User{
    
}

let obj:User=new User;
console.log(obj.idm());
obj.idmc(9999);
console.log(obj.idm())