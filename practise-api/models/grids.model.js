const mongoose =  require('mongoose');

const gridsSchema = mongoose.Schema({
    itemId: String,
    heading: String,
    subheading: String,
    type: String,
    x: Number,
    y: Number,
    rows: Number,
    cols: Number
});

const gridsModel = mongoose.model('Grids', gridsSchema);

module.exports = gridsModel;
