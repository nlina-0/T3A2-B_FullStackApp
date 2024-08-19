import app from "./app"

// Start server
app.listen(process.env.PORT || 4001, err => {
    if (err) {
        console.error(err)
    } else {
        console.log('Server running')
    }
})