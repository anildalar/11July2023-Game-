class MyClass1{//PascalCase
    //1. Property:Value
    n1='';

    //2. Constructor
    constructor(name){
        // this is an internal class object
        this.n1 = name// Associativity of the opertor
    }

    //3. Method
    getMyFullName(){ //camleCase
        console.log("Hi");
    }
}
//Class Instantiation
//let classObject = new ClassName();

let co = new MyClass1("Anil");
let co2 = new MyClass1("Goutam");
// co is an external class object
//classObject.member
//classObject.method()
  co.getMyFullName() 