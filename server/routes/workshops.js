const express = require('express');
const router = express.Router();
const Workshop = require('../models/workshop');

const UserCtrl = require('../controllers/user');

router.get('/secret', UserCtrl.authMiddleware, function(req, res){
    res.json({"secret": true});
});


router.get('', function(req, res){
   Workshop.find({}, function(err, foundWorkshops){
        res.json(foundWorkshops);
   });
});

router.get('/:id', function(req, res){
    const workshopId = req.params.id;

    Workshop.findById(workshopId, function(err, foundWorkshops){
        if(err){
            res.status(422).send({errors: [{title: 'Workshop Error', detail: 'Workshop not found'}]});
        }

        res.json(foundWorkshops);
    });
});

module.exports = router;