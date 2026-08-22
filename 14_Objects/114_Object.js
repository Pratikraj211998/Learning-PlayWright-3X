const user = {
    name : "Pratik",
    printName(){
        return this.name;// this refers to the object that is calling the method, which is user in this case
    }
}

console.log(user.printName());
