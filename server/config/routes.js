const rideController = require('./../controllers/rides');
const path = require('path');
  
  module.exports = (app) => {
    app.get('/api/rides', rideController.all);
    app.get('/api/rides/:id', rideController.single);
    app.post('/api/rides', rideController.create);
    app.put('/api/rides/:id', rideController.edit);
    app.delete('/api/rides/:id', rideController.delete);
    app.post('/api/rides/:id/passenger', rideController.addPass);
    app.delete('/api/rides/:r_id/passenger/:p_id', rideController.deletePass);
    app.all('*',(req,res)=> res.sendFile(path.resolve('./public/dist/public/index.html')));
  };