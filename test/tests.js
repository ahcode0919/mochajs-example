/**
 * Created by ah901654 on 8/20/2015.
 */
requires(mocha);

describe('App', function() {

    var testNum;

    before(function() {
        testNum = 0;
    });

    after(function() {
        // runs after all tests in this block
    });

    beforeEach(function() {
        console.log("Starting test: " + testNum);
    });

    afterEach(function(){
        testNum++;
    });

    describe('Add()', function() {
        it('should add to even numbers', function() {
            add.(2,3).should.equal(5);
            add.(10000, 500).should.equal(10500);
        });
    });

    describe('Subtract()', function() {
        it('should subtract two numbers', function() {
        });
    });

    describe('Multiply()', function() {
        it('', function() {
        });
    });

    describe('Divide()', function() {
        it('', function() {
        });
    });

    describe('Modulus()', function() {
        it('', function() {
        });
    });

    describe('', function() {
        it('', function() {
        });
    });
});