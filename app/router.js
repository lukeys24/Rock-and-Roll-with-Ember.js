import EmberRouter from '@ember/routing/router';
import config from './config/environment'; // import configuration via relative import since begins with . or ..

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bands', function() {
    this.route('band', { path: ':id'}, function() {
      this.route('songs');
      this.route('details');
    });
  });
  this.route('sign-up');
  this.route('login');
  this.route('logout');
});

export default Router;
