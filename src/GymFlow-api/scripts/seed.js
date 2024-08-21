import { Customer } from '../models/customerModel.js'
import { ClassType } from '../models/classTypeModel.js'
import { User } from '../models/userModel.js'
import { closeConnection, startConnection } from '../config/db.js'

// Connect to MongoDB
startConnection()

// Define user data
const users = [
    {
        email: "testadmin@gym.com",
        password: "adminpassword123",
        isAdmin: true
    },
    {
        email: "testnonadmin@gym.com",
        password: "nonadminpassword123",
        isAdmin: false
    }
]

// Clear existing users from db and seed with new data
await User.deleteMany()
console.log("Deleted users")
const userRes = await User.insertMany(users)
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
const customerRes = await Customer.insertMany(customers)
console.log("Seeded customers")

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
const classTypeRes = await ClassType.insertMany(classTypes)
console.log("Seeded class types")

// Disconnect from MongoDB
closeConnection()