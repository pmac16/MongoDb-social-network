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
      ref: "User",
    },
  ],
},
{
    toJSON: {
        virtuals: true
    },
    id: false 
});

//get friend count
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
})


//create the user model using the UserSchema
const User = model('User', UserSchema);

//export the User model
module.exports = User;
