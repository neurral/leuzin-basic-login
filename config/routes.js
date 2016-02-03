module.exports.routes = {

  // HTML Views
  // '/': { view: 'index' },
  '/': 'IndexController.index',
  'GET /login': { view: 'user/login' },
  'GET /signup': { view: 'user/signup' },
  '/welcome': { view: 'user/welcome' },

  // Endpoints
  'POST /login': 'UserController.login',
  'POST /signup': 'UserController.signup',
  '/logout': 'UserController.logout',
};
