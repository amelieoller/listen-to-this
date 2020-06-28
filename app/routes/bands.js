import Route from '@ember/routing/route';

export default class BandsRoute extends Route {
  async model() {
    const resp = await fetch(`http://localhost:3000/api/v1/bands`);
    return resp.json();
  }
}
