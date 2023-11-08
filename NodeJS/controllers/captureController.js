const express = require('express');

var router = express.Router();

var { Capture } = require('../models/capture');

// => localhost:3000/captures/list
// router.get('/', (req, res) => {
//     Capture.find((err, docs) => {
//         if (!err) { res.send(docs); }
//         else { console.log('Error in Retriving Captures :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

router.get('/', async (req, res) => {
    try {
      const docs = await Capture.find().exec();
      res.send(docs);
    } catch (err) {
      console.log('Error in Retrieving Captures: ' + err);
      res.status(500).send('Error in Retrieving Captures');
    }
  });

//here we would have a post request to create data in the db
module.exports = router;
