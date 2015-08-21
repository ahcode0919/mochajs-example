/**
 * Created by ah901654 on 8/20/2015.
 */
var test = require('../js/functions.js');

var should = require('Should');
//require('../js/functions.js')();
//module.exports.app = require('../js/functions.js');
//console.log(module.exports.app);

//console.log(add(1,1));
describe('Basic Math Functions', function() {
    before(function() {
    });

    after(function() {
    });

    beforeEach(function() {
    });

    afterEach(function(){
    });

    describe('Add()', function() {
        it('should add to even numbers', function() {
            test.add(2,3).should.equal(5);
            test.add(10000, 500).should.equal(10500);
            test.add("5" , "7").should.equal(12);
            test.add("-4", "-5").should.equal(-9);
        });

        it('should throw an error for undefined inputs', function(){
            should.throws(function(){
                test.add(undefined, undefined);
            }, Error);
        });
    });

    describe('Subtract()', function() {
        it('should subtract two numbers', function() {
            test.subtract(4,3).should.equal(1);
            test.subtract(-5, -23).should.equal(18);
            test.subtract("4", "-4").should.equal(8);
        });

        it('should throw an error for undefined inputs', function(){
            should.throws(function(){
                test.subtract(undefined, undefined);
            }, Error);
        });
    });

    describe('Multiply()', function() {
        it('should multiple two numbers', function() {
            test.multiply(56,23).should.equal(56*23);
            test.multiply("-2", "-2").should.equal(4);
            test.multiply(null, 5).should.equal(5);
        });

        it('should throw an error for undefined inputs', function(){
            should.throws(function(){
                test.multiply(undefined, undefined);
            },Error);
        });
    });

    describe('Divide()', function() {
        it('should divide numbers', function() {
            test.divide(12,4).should.equal(3);
            test.divide("5", "-1").should.equal(-5);
        });

        it('should throw an error for undefined inputs', function(){
            should.throws(function(){
                test.divide(undefined, undefined);
            }, Error);
        });
    });

    describe('Modulus()', function() {
        it('should calculate the modulus', function() {
            test.modulus(100,10).should.equal(0);
            test.modulus(33,10).should.equal(3);
            test.modulus("34","5").should.equal(4);
        });

        it('should throw an error for undefined inputs', function(){
            should.throws(function(){
                test.modulus(undefined, undefined)
            },Error);
        });
    });
});