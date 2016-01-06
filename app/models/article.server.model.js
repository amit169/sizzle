// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Define a new 'ArticleSchema'
var ArticleSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	firstName: {
       type: String,
       default: '',
       trim: true,
       required: 'firstName cannot be blank'
  },
   lastName: {
    type: String,
    default: '',
    trim: true,
    required: 'lastName cannot be blank'

   },

   contactNumber: {
    type: String,
    default: '',
    trim: true,
    required: 'contact number cannot be blank'

   },

   email: {
 		type: String,
		default:'',
    trim: true,
 		// Validate the email format
 		match: [/.+\@.+\..+/, "Please fill a valid email address"]
 	},

   product: {
     type: String,
     default: '',
     trim: true,
     required: 'Number cannot be blank'
   },

 additionalNotes: {
    type: String,
       default: 'prefred contact method/time',
       trim: true
},
  contactNotes: { type: String, default: '', trim: true},
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

// Create the 'Article' model out of the 'ArticleSchema'
mongoose.model('Article', ArticleSchema);
