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

    add(name, surname, age, id, avgMark) {
        const student = new Student(name, surname, age, id, avgMark)
        this.students.push(student)
    },

    remove(id) {
        const idx = this.students.findIndex(student => student.id === id)
        if (idx !== -1) {
            this.students.splice(idx, 1)
        }
    },

    printInfo() {
        this.students.forEach(student => console.log(student))
    },

    find(id) {
        return this.students.find(student => student.id === id)
    }
}

/////////////////////////////
studentController.add('John', 'Smith', 18,111, 85)
studentController.add('Bill', 'White', 20,222, 63)
studentController.add('Mary', 'Jones', 19,333, 93)
studentController.add('Sarah', 'Blake', 20,444, 76)
studentController.printInfo()

/////////////////////////////
studentController.remove(222)
studentController.printInfo()

/////////////////////////////
studentController.add('Gregory', 'Hill', 18,555, 59)
studentController.printInfo()
