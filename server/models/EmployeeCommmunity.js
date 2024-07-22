const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
  },
  departmentName: {
    type: String,
    required: true,
  },
  clubName: {
    type: String,
    required: true,
  },
  numberOfMembers: {
    type: Number,
    required: true,
  },
});

const Community = mongoose.model('Community', communitySchema);
module.exports = Community;
