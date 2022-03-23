class Mall{
    setDiscount(discount){
        this.discount = discount;
    }
    getDiscount(){
        return this.discount;
    }
}
const product = new Mall();
product.discount = 20;
console.log(product.discount)
// class person{
//     constructor(name,id){
//         this.name = name;
//         this.id = id;
//     }
//     add_Address(add){
//         this.add = add;
//     }
//     getDetails(){
//         console.log(`Name is ${this.name},Address is: ${this.add}`);
//     }
// }
 
// let person1 = new person('Mukul',21);
// person1.add_Address('Delhi');
// person1.getDetails();