const assert = require('chai').assert;
const mongoApp = require('../app');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chai = require('chai');
const expect = chai.expect;

// Create a new schema that accepts a 'name' object.
// 'name' is a required field
const testSchema = new Schema({
    name: { type: String, required: true }
  });
  //Create a new collection called 'Name'
  const Name = mongoose.model('Name', testSchema);
  describe('Database Tests', function() {
    //Before starting the test, create a sandboxed database connection
    //Once a connection is established invoke done()
    before(function (done) {
      mongoose.connect('mongodb://localhost/testDatabase');
      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error'));
      db.once('open', function() {
        console.log('We are connected to test database!');
        done();
      });
    });
    //After all tests are finished drop database and close connection
    after(function(done){
      mongoose.connection.db.dropDatabase(function(){
        mongoose.connection.close(done);
      });
    });
  });