var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var alert = require("dialog");
const fileUpload = require('express-fileupload');
const PropertiesReader = require('properties-reader');
var properties = PropertiesReader('../properties.file');
var url = properties.get('dev.url.local.sample');



router.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    {id: 15, firstName: 'db', lastName: url},
  ];

  res.json(customers);
});


router.get('/joblist', function (req, res) {
  var MongoClient = mongodb.MongoClient;
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the Server', err);
    } else {
      console.log('Connection established to', url);
      var collection = db.collection('joblist');
      collection.find({}).toArray(function (err, result) {
        if (err) {
          res.send(err);
        } else if (result.length) {
          res.json(result);
        } else {
          res.send('No jobs to display');
        }
        db.close();
      });
    }
  });
});






// Route to the page we can add students from using newstudent.jade
router.get('/newjob', function (req, res) {
  res.render('newjob', { title: 'Publish Job' });
});

router.post('/newjob', function (req, res) {

  // Get a Mongo client to work with the Mongo server
  var MongoClient = mongodb.MongoClient;

  // Define where the MongoDB server is
  var url = 'mongodb://localhost:27017/samplesite';

  // Connect to the server
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the Server:', err);
    } else {
      console.log('Connected to Server');

      // Get the documents collection
      var collection = db.collection('joblist');

      // Get the student data passed from the form
      var imageurl = "";
      if (req.body.image == null) {
        imageurl = "/images/placeholder-logo.png"
      }
      var jobData = { title: req.body.job_title, company: req.body.company, joburl: req.body.joburl, image: imageurl };

      // Insert the student data into the database
      collection.insert([jobData], function (err, result) {
        if (err) {
          alert.err("Job cannot be published probably due to duplicate Entry");
          console.log(err);
          // res.redirect("joblist");
        } else {

          // Redirect to the updated student list
          res.redirect("joblist");
        }

        // Close the database
        db.close();
      });

    }
  });

});



router.post('/uploadLogo', function (req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('/images/filename.jpg', function (err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

module.exports = router;