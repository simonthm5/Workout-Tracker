const router = require("express").Router();
const Work = require("../models/work")


// new workout
router.post("api/workouts", ({body}, get)=>{
    Work.create(body).then(newWork =>{
        get.json(newWork);
    })
    .catch(err => {
        get.status(400).json(err)
    })
});



// add exercise

router.put("api/workouts/:id", (req, get)=> {
    let id = req.params.id;
    Work.findByIdAndUpdate(
        {_id: id},
        {$push: {exercises: req.body},
    }, {new: false }).then(updated =>{
        get.json(updated);}).catch(err => {
            get.status(400).json(err);
        });
    });

//display
router.get("api/workouts", (req, get) =>{
    Work.aggregate([{
        $addFields: {
            totalTime : { $sum: "$exercises.duration"}
        }
    }]).then(newWork => {
        get.json(newWork);
    }).catch(err => {
        get.status(400).json(err);
    });
});

// stats

router.get("/api/workouts/range", (req, get)=> {
    Work.find({}).then(newWork => {
        get.json(newWork)
    }).catch(err => {
        get.status(400).json(err);
    })
})

module.exports = router;