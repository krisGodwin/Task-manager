 const mongooose = require('mongoose')


const connectDB = (url) => {
    return mongooose
            .connect(url,{
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            })
            .then(() => console.log('Connected To the DB...'))
            .catch((err) => console.log(err))
}

module.exports = connectDB