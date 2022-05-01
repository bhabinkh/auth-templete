const mongoose = require('mongoose')

const connectDB = (connectionURL)=>{
    return mongoose.connect(connectionURL, {useNewUrlParser:true, useCreateIndex:true, useFindAndModify:false, useUnifiedTopology:true})
}
module.exports = connectDB