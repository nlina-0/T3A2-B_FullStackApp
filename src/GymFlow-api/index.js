import app from "./app.js"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

// Connect to Mongoose
try {
    const m = await mongoose.connect(process.env.DB_URI)
    console.log(m.connection.readyState == 1 ? 'Mongoose connected' : 'Mongoose failed to connect')
}
catch (err) {
    console.error(err)
}


// Start server
app.listen(process.env.PORT || 4001, err => {
    if (err) {
        console.error(err)
    } else {
        console.log('Server running')
    }
})