const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
// get API listing
router.get('/', (req, res) => {
  res.send('api works');
});

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
var db;
//mongodb+srv://<username>:<password>@watchyourproperty.zsd8a.mongodb.net/?retryWrites=true&w=majority
MongoClient.connect('mongodb+srv://HasegawaSnow:T0301463g@watchyourproperty.zsd8a.mongodb.net/WatchYourProperty?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, database) => {
  if (err) return console.log(err);
  db = database.db('WatchYourProperty');
});

router.route('/authuser').post(function (req, res2) {
  var username = req.body.username;
  var password = req.body.password;
  db.collection('users').findOne({ "name": username }, {
    password: 1, role: 1,
    _id: 0
  }, function (err, result) {
    if (result == null) res2.send([{ "auth": false }]);
    else {
      bcrypt.compare(password, result.password, function (err, res) {
        if (err || res == false) {
          res2.send([{ "auth": false }]);
        } else {
          res2.send([{ "auth": true, "role": result.role }]);
        }
      });
    }
  });
});

router.route('/reguser').post(function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var role = req.body.role;
  bcrypt.hash(password, BCRYPT_SALT_ROUNDS, function (err, hash) {
    db.collection('users').insertOne({
      "name": username, "password": hash,
      "role": role
    }, (err, result) => {
      if (err) return console.log(err)
      console.log('user registered')
      res.send(result);
    });
  });
})

// Retrieve 
router.route('/services').get(function (req, res) {
  db.collection('services').find().toArray((err, results) => { res.send(results) });
})

// Retrieve specific service
router.route('/services/:id').get(function (req, res) {
  db.collection('services').findOne({ "_id": ObjectId(req.params.id) }, (err, results) => {
    // console.log(results);
    res.send(results)
  });
})

// Delete 
router.route('/services/:_id').delete(function (req, res) {
  db.collection('services').deleteOne({ "_id": ObjectId(req.params._id) }, (err, results) => {
    res.send(results);
  });
});

// create new service
router.route('/services').post(function (req, res) {
  db.collection('services').insertOne(req.body, (err, results) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.send(results);
  });
});

// Update 
router.route('/services/:_id').put(function (req, res) {
  db.collection('services').updateOne(
    { "_id": ObjectId(req.params._id) }, { $set: req.body }, (err, results) => {
      res.send(results);
    });
})
module.exports = router;