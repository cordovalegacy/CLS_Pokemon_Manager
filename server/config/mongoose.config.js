const Mongoose = require('mongoose')

const db = 'CLS_Pokemon_DB'

mongoose.connect(`mongodb://127.0.0.1:27017/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Connected to ${db}`))
    .catch((err) => console.log(`Could not establish connection to ${db}| This is the error: ${err}`))