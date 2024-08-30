import app from "./app.js"

// Start server
app.listen(process.env.PORT || 3000, err => { // uses port number specified in .env, if not specified defaults to 3000
    if (err) {
        console.error(err)
    } else {
        process.env.PORT ? console.log(`Server running on ${process.env.PORT}`) : console.log("Server running on 3000")
    }
})