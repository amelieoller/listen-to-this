import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class BandsBandRoute extends Route {
  async model({ bandId }) {
    const resp = await fetch(`http://localhost:3000/api/v1/bands/${bandId}`);
    return resp.json();
  }
}
