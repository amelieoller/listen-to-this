import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('bands', function () {
    this.route(
      'band',
      {
        // eslint-disable-next-line ember/routes-segments-snake-case
        path: ':bandId',
      },
      function () {
        this.route('channel', {
          // eslint-disable-next-line ember/routes-segments-snake-case
          path: ':channelId',
        });
      }
    );
  });
  this.route('login');
});
