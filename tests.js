//When ran in browser should calls should be capitalized 'Should.equ....'

describe('Basic Math Functions', function() {
    var testNumber;
    before(function() {
        testNumber = 0;
    });

    after(function() {
        console.log("Total tests: " + testNumber);
    });

    beforeEach(function() {
        testNumber++;
        console.log("Testing test number: " + testNumber);
    });

    afterEach(function(){

    });

    describe('Add()', function() {
        it('should add to even numbers', function() {
            add(2,3).should.equal(5);
            add(10000, 500).should.equal(10500);
            add("5" , "7").should.equal(12);
            add("-4", "-5").should.equal(-9);
        });

        it('should throw an error for undefined inputs', function(){
            Should.throws(function(){
                add(undefined, undefined);
            }, Error);
        });
    });

    describe('Subtract()', function() {
        it('should subtract two numbers', function() {
            subtract(4,3).should.equal(1);
            subtract(-5, -23).should.equal(18);
            subtract("4", "-4").should.equal(8);
        });

        it('should throw an error for undefined inputs', function(){
            Should.throws(function(){
                subtract(undefined, undefined);
            }, Error);
        });
    });

    describe('Multiply()', function() {
        it('should multiple two numbers', function() {
            multiply(56,23).should.equal(56*23);
            multiply("-2", "-2").should.equal(4);
            multiply(null, 5).should.equal(5);
        });

        it('should throw an error for undefined inputs', function(){
            Should.throws(function(){
                multiply(undefined, undefined);
            },Error);
        });
    });

    describe('Divide()', function() {
        it('should divide numbers', function() {
            divide(12,4).should.equal(3);
            divide("5", "-1").should.equal(-5);
        });

        it('should throw an error for undefined inputs', function(){
            Should.throws(function(){
                divide(undefined, undefined);
            }, Error);
        });
    });

    describe('Modulus()', function() {
        it('should calculate the modulus', function() {
            modulus(100,10).should.equal(0);
            modulus(33,10).should.equal(3);
            modulus("34","5").should.equal(4);
        });

        it('should throw an error for undefined inputs', function(){
            Should.throws(function(){
                modulus(undefined, undefined)
            },Error);
        });
    });
});