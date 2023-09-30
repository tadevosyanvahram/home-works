class University {
  constructor() {
    this.teachers = [];
    this.students = [];
  }

  addMember(member) {
    if (member instanceof Teacher) {
      this.teachers.push(member);
    } else if (member instanceof Student) {
      this.students.push(member);
    }
  }
  removeMember(member) {
    if (member instanceof Teacher) {
      const index = this.teachers.indexOf(member);
      if (index !== -1) {
        this.teachers.splice(index, 1);
      }
    } else if (member instanceof Student) {
      const index = this.students.indexOf(member);
      if (index !== -1) {
        this.students.splice(index, 1);
      }
    }
  }
  startLesson() {
    this.teachers.forEach((teacher) => {
      teacher.energy -= 5;
    });

    this.students.forEach((student) => {
      student.energy -= 2;
    });
  }
}

class UniversityMember {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.energy = 24;
  }

  info() {
    return `Name: ${this.name}, Age: ${this.age}, Role: ${this.role}, Energy: ${this.energy}`;
  }
}

class Teacher extends UniversityMember {
  constructor(name, age) {
    super(name, age);
  }
}

class Student extends UniversityMember {
  constructor(name, age) {
    super(name, age);
  }
}

const university = new University();
const teacher1 = new Teacher("Hayk", 25);
const teacher2 = new Teacher("David", 30);
const student1 = new Student("Ani", 18);
const student2 = new Student("Maria", 20);

university.addMember(teacher1);
university.addMember(teacher2);
university.addMember(student1);
university.addMember(student2);

console.log("Before lesson:");
console.log(teacher1.info());
console.log(student1.info());

university.startLesson();

console.log("After lesson:");
console.log(teacher1.info());
console.log(student1.info());
