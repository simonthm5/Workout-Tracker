const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const workPlan = new Schema ({

    day: {
        type: Date,
        default: Date.now
    }, exercises: Array
});

const Work = mongoose.model("Work", workPlan);

module.exports = Work;