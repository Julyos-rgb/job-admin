var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/job-admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

var usersSchema = mongoose.Schema({
    username: String,
    password: String,
});
var Users = mongoose.model('users', usersSchema)

exports.Users = Users