class Student {
    static name = "Playwright2X";
    static mentor_name = "Pramod Dutta";

    constructor(name_student, age, phoneNo) {
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = this.phoneNo;
    }

    static display() {
        console.log("Hi, I am common F(n)");
    }
}

const s1 = new Student("Ujjwal", 30, "9087654322");
const s2 = new Student("Sharad", 29, "1234567890");

console.log(s1.name_student);
console.log(s2.name_student);

console.log(Student.name);
console.log(Student.mentor_name);

console.log(Student.display());