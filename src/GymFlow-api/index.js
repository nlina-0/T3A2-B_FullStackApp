import app from "./app"

const PORT = 5000; // added a port variable feel free to set it up to match what you may already have. - Mik

// Start server
app.listen(process.env.PORT || 4001, err => {
    if (err) {
        console.error(err)
    } else {
        console.log(`Server running on ${PORT}`)
    }
})