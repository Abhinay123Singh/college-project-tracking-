const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  supervisorId: mongoose.Schema.Types.ObjectId,
  studentIds: [mongoose.Schema.Types.ObjectId],
  status: {
    type: String,
    enum: ['Draft', 'In Progress', 'Completed', 'Failed'],
    default: 'Draft',
  },
  milestones: [
    {
      title: String,
      expectedStart: Date,
      expectedEnd: Date,
      studentRemarks: String,
      supervisorRemarks: String,
      status: {
        type: String,
        enum: ['Open', 'In Progress', 'Completed'],
        default: 'Open',
      },
      files: [String],
    }
  ]
});

module.exports = mongoose.model('Project', projectSchema);
