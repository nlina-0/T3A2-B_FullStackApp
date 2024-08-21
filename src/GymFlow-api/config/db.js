import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

// Connect to MongoDB
const startConnection = async () => {
    try {
        const m = await mongoose.connect(process.env.DB_URI)
        console.log(m.connection.readyState == 1 ? 'Connected to MongoDB' : 'Failed to connect to MongoDB')
    }
    catch (err) {
        console.error(err)
    }
}

// Disconnect from MongoDB
const closeConnection = () => {
    mongoose.disconnect()
    console.log("Disconnected from MongoDB")
}

export { startConnection, closeConnection }