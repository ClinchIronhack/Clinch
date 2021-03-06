const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: String,
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    plans: [{ type: Schema.Types.ObjectId, ref: 'Plan' }]
});

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;