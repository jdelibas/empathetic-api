'use strict';

var should = require('should'),
	rewire = require("rewire"),
	testing = rewire('./index.controller');

describe('index', function () {

	it('should return status 200', function (done) {
		var resMock = {
			'end': function(a,b,c){
				b.should.equal(200);
				done();
			}
		};
		testing.__set__('response', resMock);
		testing.index({},{});
	});
	
	it('should return name "empathetic-api"', function (done) {
		var resMock = {
			'end': function(a,b,c){
				c.name.should.equal('empathetic-api');
				done();
			}
		};
		testing.__set__('response', resMock);
		testing.index({},{});
	});

});