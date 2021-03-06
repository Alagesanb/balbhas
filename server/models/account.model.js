const mongoose = require('mongoose');
var Schema = mongoose.Schema;  
var AccountSchema = new Schema({ 
  account_holder: {
    type: String,
    required: true
  },
  accounttype: {
    type: String,
    required: true
  },
  fathers_name: {
    type: String,
    required: true
  },
age: {
  type: Number,
  required: true
},
dob: {
  type: Date,
  required: true
},
address: {
  type: String,
  required: true
}});
module.exports = mongoose.model('accounts', AccountSchema);


 