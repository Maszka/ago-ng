const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workshopSchema = new Schema({
    title: { type: String, required: true, max: [128, 'Too long, max is 128 characters']},
    city: { type: String, required: true, lowercase: true},
    street: { type: String, required: true, min: [4, 'Too short, min is 4 characters']},
    category: { type: String, required: true, lowercase: true},
    image: { type: String, required: true},
    maxNumberOfAtendees: Number,
    description: { type: String, required: true},
    price: Number,
    duration: { type: String, required: true},
    createdAt: { type: Date, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Workshop', workshopSchema);