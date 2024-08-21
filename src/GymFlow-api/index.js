import app from "./app.js"
import { startConnection } from "./config/db.js";

const PORT = 5000; // added a port variable feel free to set it up to match what you may already have. - Mik

// Start server
app.listen(process.env.PORT || 4001, err => { // uses port number specified in env, if not specified defaults to 4001
    if (err) {
        console.error(err)
    } else {
        console.log(`Server running on ${PORT}`)
    }
})