const mongoose = require('mongoose');
const Ride = mongoose.model('Ride');
const Passenger = mongoose.model('Passenger');


module.exports = {
  all: (req, res) => {
    Ride.find({}, (err, rides) =>{
        if(err){
            res.json(err);
        }else{
            res.json(rides);
        }
    })
    
  },
  single: (req, res) =>{
    Ride.findOne({_id: req.params.id}, (err,ride) =>{
        if(err){
            res.json(err);
        }else{
            res.json(ride);
        }

    })
  },
  create: (req, res) =>{
    Ride.create(req.body, (err, ride) =>{
        if(err){
          res.json(err);
        }else{
          res.json(ride);
        }

    });
  },
  
  edit: (req, res) =>{
    Ride.update({_id: req.params.id}, req.body, (err,data) =>{
        if(err){
          res.json(err);
        }else{
          res.json(data);
        }

    });
  },
  delete: (req, res) =>{
    Ride.remove({_id: req.params.id}, (err,data) =>{
        if(err){
          res.json(err);
        }else{
          res.json(data);
        }

    });
  },
  addPass: (req, res) =>{
      Passenger.create(req.body, (err,passenger) =>{
        if(err){
          console.log('rider validations were triggered!');
          res.json(err);
        }else{
            Ride.update({_id: req.params.id},{$push:{riders:passenger}}, (err,data)=>{
                if(err){
                  console.log('not updated!');
                  res.json(err);
                }else{
                  res.json(data);
                }
            });
        }
      });
  },
  
  deletePass: (req, res) =>{
      Ride.update({_id: req.params.r_id}, {$pull:{riders:{_id:req.params.p_id}}}, (err,data)=>{
        if(err){
          res.json(err);
        }else{
          res.json(data);
        }
      });
  }
};



