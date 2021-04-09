const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: "A username is required.",
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email address."],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "Friend",
    },
  ],
},
{
    toJSON: {
        virtuals: true
    },
    id: false 
});

//get total count of thoughts
UserSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.length;
})

//create the user model using the UserSchema
const User = model('User', UserSchema);

//export the User model
module.exports = User;
