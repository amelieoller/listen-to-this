import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class BandsBandChannelRoute extends Route {
  async model({ channelId }) {
    const { bandId } = this.paramsFor('bands.band');
    const resp = await fetch(
      `http://localhost:3000/api/v1/bands/${bandId}/channels/${channelId}`
    );

    return resp.json();
  }
}
