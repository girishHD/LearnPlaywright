class Student {

    static batch_name = "Playwright";

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static display() {
        console.log("Hello Everyone");
    }

    display_details() {
        console.log(this.name + " -> " + this.age);
    }
}

const s1 = new Student("Rekha", 24);
const s2 = new Student("Pulkit", 25);
const s3 = new Student("Girish", 27);
const s4 = new Student("Kartik", 30);
const s5 = new Student("Pooja", 23);
const s6 = new Student("Lucky", 28);
const s7 = new Student("Prakash", 32);
const s8 = new Student("Paras", 33);
const s9 = new Student("Kusum", 24);
const s10 = new Student("Laila", 29);

Student.display();
console.log(Student.batch_name, "Batch");

s1.display_details();
s2.display_details();
s3.display_details();
s4.display_details();
s5.display_details();
s6.display_details();
s7.display_details();
s8.display_details();
s9.display_details();
s10.display_details();

console.log(s1.age);
console.log(s8.name);