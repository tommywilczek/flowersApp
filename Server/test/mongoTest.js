const assert = require('chai').assert;
const mongoApp = require('../app');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chai = require('chai');
const expect = chai.expect;

const flowersModel = require('../models/flowers');

//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/flowersMongoTest'); 
mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ',error);
    });
//Called hooks which runs before something.
// beforeEach((done) => {
//     mongoose.connection.collections.mongoTestSuite.drop(() => {
//          //this function runs after the drop is completed
//         done(); //go ahead everything is done now.
//     }); 
// });

afterEach(() => {
  // mongoose.connection.collections['flowers'].drop()
  mongoose.connection.db.dropDatabase();
});

describe('Create', () => {
  it('creates a flower', (done) => {
    const newFlower = new flowersModel({ name: 'Bluebonnet'});
    newFlower.save()
              .then(() => {
                assert(!newFlower.isNew);
                done();
              });
  });
});

describe('Read', () => {
  it('finds a flower with the name `testFlower`', (done) => {
    const newFlower = new flowersModel({ name: 'testFlower'});
    newFlower.save()
    flowersModel.findOne( {name: 'testFlower'} )
      .then(() => {
        assert(newFlower.name === 'testFlower');
        done();
      });
  });
});
