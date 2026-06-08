// Objects -- JS{}
// Class ans Object

const user = {
    firstName: "Girish",
    lastName: "Nandanwar",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

// this. it means current value in the Object.

console.log(user.fullName);
user.fullName = "Amit Sharma";
console.log(user.fullName);

// class User{
//     firstName,
//     lastName,
//     fullName() {

//     }
// }