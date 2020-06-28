import Route from '@ember/routing/route';

export default class BandsIndexRoute extends Route {
  async beforeModel(transition) {
    await super.beforeModel(transition);
    const bands = this.modelFor('bands');

    if (bands.length > 0) {
      this.replaceWith('bands.band', bands[0].id);
    }
  }
}
