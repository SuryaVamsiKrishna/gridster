var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const gridsModel = require('../models/grids.model');

/* GET grids listing. */
router.get('/list', function(req, res, next) {
  console.log('HI0');
  gridsModel.find(function(err, gridsListResponse){
    if(err){
        res.send({status: 500, message: 'Unable to find grids'});
    }
    else{
        const totcount = gridsListResponse.length;
        res.send(gridsListResponse); 
    }
  })
});

/* GET specific grid */
router.get('/view', function(req, res, next) {
    const gridId = req.query.gridId;
    gridsModel.findById(gridId, function(err, gridsResponse){
      if(err){
          res.send({status: 500, message: 'Unable to find grids'});
      }
      else{
          res.send({status: 200, results: gridsResponse}); 
      }
    })
  });
/* CREATE NEW grids listing. */
router.post('/post', function(req, res, next) {

    console.log('Hi');

    let heading = req.body.heading;
    let subheading = req.body.subheading;
    let type = req.body.type;
    let x = req.body.x;
    let y = req.body.y;
    let rows = req.body.rows;
    let cols = req.body.cols;

    let gridsObj = new gridsModel({
        heading:heading, 
        subheading:subheading,
        type: type,
        x: x,
        y: y,
        rows: rows, 
        cols: cols    
    });

  gridsObj.save(function(err, gridsObj){
      if(err){
        res.send({status: 500, message: 'Unable to add new grid'});
      }
      else{
        res.send({status: 200, message: 'New Grid added', gridDetails: gridsObj}); 
      }
  });
  
});

/*UPDATE grids listing. */
router.put('/update', function(req, res, next) {
    const gridId = req.body.gridId;

    let heading = req.body.heading;
    let subheading = req.body.subheading;
    let type = req.body.type;
    let x = req.body.x;
    let y = req.body.y;
    let rows = req.body.rows;
    let cols = req.body.cols;

    let gridsObj = {
        heading:heading, 
        subheading:subheading,
        type: type,
        x: x,
        y: y,
        rows: rows, 
        cols: cols    
    };
    gridsModel.findByIdAndUpdate(gridId, gridsObj, function(err, gridsResponse){
      if(err){
          res.send({status: 500, message: 'Unable to update grid'});
      }
      else{
          res.send({status: 200, message: 'updated grid', results: gridsResponse}); 
      }
    })
});

/* DELETE grids listing. */
router.delete('/delete', function(req, res, next) {
    const gridId = req.query.gridId;
    gridsModel.findByIdAndDelete(gridId, function(err, gridsResponse){
      if(err){
          res.send({status: 500, message: 'Unable to delete grid'});
      }
      else{
          res.send({status: 200,  message: 'grid deleted', results: gridsResponse}); 
      }
    })
});

module.exports = router;
