class Student {
    constructor(name, surname, age, id, avgMark) {
        this.name = name
        this.surname = surname
        this.age = age
        this.id = id
        this.avgMark = avgMark
    }
}

const studentController = {
    students: [],

    addStudent: function(name, surname, age, id, avgMark) {
        const student = new Student(name, surname, age, id, avgMark)
        this.students.push(student)
    },

    removeStudent: function(id) {
        const student = this.findStudent(id)
        const idx = this.students.indexOf(student)
        if (idx !== -1) {
            this.students.splice(idx, 1)
        }
    },

    printInfo: function() {
        this.students.forEach(student => console.log(student))
    },

    findStudent: function(id) {
        return this.students.find(student => student.id === id)
    }
}

/////////////////////////////
studentController.addStudent('John', 'Smith', 18,111, 85)
studentController.addStudent('Bill', 'White', 20,222, 63)
studentController.addStudent('Mary', 'Jones', 19,333, 93)
studentController.addStudent('Sarah', 'Blake', 20,444, 76)
studentController.printInfo()

/////////////////////////////
studentController.removeStudent(222)
studentController.printInfo()

/////////////////////////////
studentController.addStudent('Gregory', 'Hill', 18,555, 59)
studentController.printInfo()
