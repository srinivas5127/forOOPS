abstract class MyDesk {
    EmloyeeName:string ; 
    abstract EmployeeNumber:number;
    constructor(name) {
        this.EmloyeeName=name;
    
    }

    MyDeskPlace():void{
        console.log("In MOTTO Systems Private Limited Compay's Office")
    }

    abstract ItContains():any;
}

class Laptop extends MyDesk{
     laptopNo:number;
     FirstItem:string;
     SecondItem:string;
     EmployeeNumber:number;
    constructor(name,number,no,first,second) {
        super(name);
        
        this.laptopNo=no;
        this.EmployeeNumber=number;
        this.FirstItem=first;
        this.SecondItem=second;
       
    }
    LaptopCompany(){
            console.log("LENOVO")
    }

    ItContains(){
        console.log("It contains "+this.FirstItem+" and " +this.SecondItem)
    }
    
    MyNameAndEmpNo(){
        console.log("My name is "+this.EmloyeeName+", my employee number is "+this.EmployeeNumber + " and my Laptop No. is "+this.laptopNo)
    }
    
}

let visit:Laptop=new Laptop("Srinivas",113,26,"Book","Mouse");
visit.MyDeskPlace();
// visit.FirstItem="Laptop";
// visit.SecondItem="Mouse";
visit.ItContains();
visit.LaptopCompany();
visit.MyNameAndEmpNo();
