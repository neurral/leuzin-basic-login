
/*
	This file is used to set Leuzin-specific values such as constants and defaults. 
	To set environment-specific values such as DB credentials, add them to the files in the env folder instead.
*/

module.exports.application = {

/*

	The values are accessed by using:
		1. Views, Controller, and Policies:
			
			sails.config.application.[property here]

		2. Service, Model (use within FUNCTION scope, where 'sails' is available):
 			
 			someModelMethod: function (options, cb) {
   			 // `sails` object is available here:
    		var conf = sails.config;
    		cb(null, conf.whatever);

	*/

	//Defaults for Leuzin
	title : 'Leuzin',
	company : 'Neurral',
	description : 'An MIS app'

	//add other properties here. don't forget to add comma to separate!

}