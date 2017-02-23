var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	projects['min'] = false;
	console.log(projects['min']);
  	res.render('index', projects);
};
exports.viewMin = function(req, res){
	projects['min'] = true;
	console.log(projects['min']);
	res.render('index', projects);
};