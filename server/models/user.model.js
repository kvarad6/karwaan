const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
},
    {
        collection: 'user-data'
    }
)

//Syntax: const MyModel = mongoose.model('ModelName', mySchema);

const model = mongoose.model('UserData', User)

module.exports = model