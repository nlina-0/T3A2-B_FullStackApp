import bcrypt from 'bcrypt'
import { Customer } from '../models/customerModel.js'
import { Class, ClassType } from '../models/classModel.js'
import { Instructor } from '../models/instructorModel.js'
import { User } from '../models/userModel.js'
import { closeConnection, startConnection } from '../config/db.js'
import { Booking } from '../models/bookingModel.js'

// Connect to MongoDB
startConnection()

// USERS
// Define users
const hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const password1 = bcrypt.hashSync("masterpassword123", 10);
const password2 = bcrypt.hashSync("nonmasterpassword123", 10)

const users = [
    {
        email: "testmaster@gym.com",
        password: password1,
        master: true
    },
    {
        email: "testnonmaster@gym.com",
        password: password2,
        master: false
    }
]

// Clear existing users from db and seed with new data
await User.deleteMany()
console.log("Deleted users")
await User.insertMany(users)
console.log("Seeded users")

// Define customer data
const customers = [
    {
        firstName: "Dwight",
        lastName: "Schrute",
        age: 35,
        email: "dwight.schrute@email.com",
        phone: "0412123123"
    },
    {
        firstName: "Bob",
        lastName: "Jones",
        age: 54,
        email: "bob.jones@email.com",
        phone: "0412123124"
    }, 
    {
        firstName: "Samantha",
        lastName: "Brown",
        age: 23,
        email: "samantha.brown@email.com",
        phone: "0412123125"
    }
]

// Clear existing customers from db and seed with new data
await Customer.deleteMany()
console.log("Deleted customers")
await Customer.insertMany(customers)
console.log("Seeded customers")


// CLASS TYPES
// Define class types
const classTypes = [
    {
        name: "Yoga"
    },
    {
        name: "Cycling"
    },
    {
        name: "Zumba"
    },
    {
        name: "Kickboxing"
    },
    {
        name: "Body pump"
    },
    {
        name: "Pilates"
    }
]

// Clear existing class types from db and seed with new data
await ClassType.deleteMany()
console.log("Deleted class types")
await ClassType.insertMany(classTypes)
console.log("Seeded class types")

// INSTRUCTORS
// Define instructors
const instructors = [
    {
        firstName: "Janet",
        lastName: "Smith",
        age: 32,
        email: "janet@email.com",
        phone: "0412123163"
    },
    {
        firstName: "William",
        lastName: "Williamson",
        age: 39,
        email: "williamson@email.com",
        phone: "0477123124"
    }, 
    {
        firstName: "Carly",
        lastName: "Fisher",
        age: 23,
        email: "carlyf@email.com",
        phone: "0412129925"
    }
]

// Clear existing instructors from db and seed with new data
await Instructor.deleteMany()
console.log("Deleted instructors")
await Instructor.insertMany(instructors)
console.log("Seeded instructors")


// Clear eixsting classes and bookings from db
await Class.deleteMany()
console.log("Deleted classes")
await Booking.deleteMany()
console.log("Deleted bookings")

// Disconnect from MongoDB
closeConnection()