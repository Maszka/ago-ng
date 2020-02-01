const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');
const User = require('../models/user');
const { normalizeErrors} = require('../helpers/mongoose');

const UserCtrl = require('../controllers/user');

router.get('/secret', UserCtrl.authMiddleware, function(req, res){
    res.json({"secret": true});
});


router.get('', function(req, res){
   Rental.find({}, function(err, foundRentals){
        res.json(foundRentals);
   });
});

router.post('', UserCtrl.authMiddleware, function(req, res){
    const {title, city, street, category, image, description, price} = req.body;
    const user = res.locals.user;

    const rental = new Rental({title, city, street, category, image, description, price});

    Rental.create(rental, function(err, newRental) {
        if(err){
            return res.status(422).send({errors: normalizeErrors(err.errors)});
        }
    User.update({_id: user.id}, { $push: {rentals: newRental}}, function(){});
    return res.json(newRental);
    })
    
    
})

router.get('/:id', function(req, res){
    const rentalId = req.params.id;

    Rental.findById(rentalId, function(err, foundRentals){
        if(err){
            res.status(422).send({errors: [{title: 'Rental Error', detail: 'Rental not found'}]});
        }

        res.json(foundRentals);
    });
});

module.exports = router;