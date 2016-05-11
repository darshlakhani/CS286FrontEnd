var express = require('express');
var ejs = require('ejs');
//var router = express.Router();

/* GET home page. */
exports.index =  function(req, res, next) {
	console.log('check');
  ejs.renderFile('./views/index.ejs',function(err, result) {
		   // render on success
		   if (!err) {
		            res.end(result);
		   }
		   // render or error
		   else {
		            res.end('An error occurred');
		            console.log(err);
		   }
	   });
};


//module.exports = router;


exports.log = function (req, res){
	res.send({'result': 'ok'});
};



exports.reco =  function(req, res, next) {
	console.log('check');
  ejs.renderFile('./views/showreco.ejs',function(err, result) {
		   // render on success
		   if (!err) {
		            res.end(result);
		   }
		   // render or error
		   else {
		            res.end('An error occurred');
		            console.log(err);
		   }
	   });
};




exports.getreco = function(req, res, next) {

	console.log('get reco check');

	res.send('[{"id":1, "product": "Camera"},{"id":2, "product":"Books"},{"id":3, "product":"Umbrellas"},{"id":4, "product":"Clothes"}]');
}
//exports.log = log;