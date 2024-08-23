import app from "./app.js"

// const PORT = 5000; // added a port variable feel free to set it up to match what you may already have. - Mik
// JZ - integrated this as part of below code, will pull port number from .env

// Start server
app.listen(process.env.PORT || 3000, err => { // uses port number specified in .env, if not specified defaults to 3000
    if (err) {
        console.error(err)
    } else {
        process.env.PORT ? console.log(`Server running on ${process.env.PORT}`) : console.log("Server running on 3000")
    }
})