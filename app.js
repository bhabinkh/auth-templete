require('dotenv').config()
const express = require('express')
const bcrypt = require('bcryptjs')

const connectDB = require('./db/db_connection')
const { NotFoundError } = require('./errors/error')
const app = express()
const port = 3000
const errorHandler = require('./middleware/error_handler')
const pageNotFound = require('./middleware/page_not_found')

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.use(pageNotFound)
app.use(errorHandler)

const start = async () => {
    const salt = await bcrypt.genSalt()
    const password = await bcrypt.hash('', salt)
    console.log(salt, password)

    // try {
    //     await connectDB(process.env.connectionURL)
    //     app.listen(port, () => {
    //         console.log(`Server is listening in port: ${port}.... `)
    //     })
    // } catch (err) {
    //     console.log(`Error in connecting mongodb....`)
    // }
}

start()