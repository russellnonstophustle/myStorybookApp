const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        })
        
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})

module.exports = connectDB