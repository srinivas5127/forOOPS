class Box {
        
     static   open(){
            console.log("Box contains lot of items")
        }
}
class Pen extends Box {
     static   open(){
            console.log("Pen is Smooth")
            super.open();
        }
   
}

Pen.open();