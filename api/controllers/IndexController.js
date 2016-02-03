/**
 * IndexController
 *
 * @description :: Server-side logic for managing first access
 */

 module.exports = {

  /**
   * `UIndexController.index()`
   */
   index: function (req, res) {
  			//Session check
  			if (req.session.me) { 
  				res.redirect('/welcome');
  			} 
  			else {
  				if (req.session.flash && req.session.flash.error){
  					req.flash('error', 'Invalid login.');
  				} 
	  			res.redirect('/login');
  			}
 		}
 }