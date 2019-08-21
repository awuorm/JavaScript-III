/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.Global binding - " this" keyword is used to refer to a top level object/window.   
* 2.Implicit binding - "this" keyword is used to reference an object/function where it has been called.
* 3.New binding - "this" keyword refers to a specific instance of an object returned by a constructor function.
* 4.Explicit binding - used when calling apply/call methods, "this" keyword is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function globBind (){

    return this;
}   //returns window object

// Principle 2

// code example for Implicit Binding
const implBind = {
    greeting: "Goodbye",
    sayHello : function (name){
    return ` ${this.greeting} ${name}, from the other side!`
    }
}

console.log(implBind.sayHello('Alice')); //log "Goodbye Alice, from the other side"
// Principle 3

// code example for New Binding
function house (size, location, price, availability)    {
    this.size = size;
    this.location = location;
    this.price = price;
    this.availability = availability;

}

house.prototype.advertise = function () {
    return ` Hi!  the size of the house is ${this.size}, its located in ${this.location}, its price is ${this.price}. Availability:${this.availability}.`;
}

const myHouse = new house("3br", "Nairobi", "50,000 KES", "true");
 console.log(myHouse.advertise()); // logs Hi!  the size of the house is 3br, its located in Nairobi, its price is 50,000 KES. Availability:true.
// Principle 4

// code example for Explicit Binding

function operatingSystems (type, vendor, open)  {
    this.type = type;
    this.vendor = vendor;
    this.open = open;
    
}

operatingSystems.prototype.declare = function () {
    return ` This operating system is ${this.type}, it is made by ${this.vendor}. Open-source: ${this.open}`;
}
const windows = new operatingSystems ("Windows", "Microsoft", "false");
const linux = new operatingSystems ("Ubuntu", "Canonical", "true");

console.log (linux.declare.call(windows)); // logs This operating system is Windows, it is made by Microsoft. Open-source: false
console.log (windows.declare.apply(linux)); // logs This operating system is Ubuntu, it is made by Canonical. Open-source: true