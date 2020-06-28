import Route from '@ember/routing/route';

export default class BandsBandIndexRoute extends Route {
  async beforeModel(transition) {
    await super.beforeModel(transition);
    const { channels, id } = this.modelFor('bands.band');

    if (channels.length > 0) {
      this.replaceWith('bands.band.channel', id, channels[0].id);
    }
  }
}
