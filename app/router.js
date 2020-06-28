import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('bands', function() {
    this.route('band', {
      path: ':bandId'
    }, function() {
      this.route('channel', {
        path: ':channelId'
      });
    });
  });
  this.route('login');
});
