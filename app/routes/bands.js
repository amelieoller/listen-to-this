import Route from '@ember/routing/route';

export const ALL_BANDS = [
  {
    id: 'A',
    name: 'Garage Band',
    order: 2,
  },
  {
    id: 'B',
    name: 'Jazz it up',
    order: 3,
  },
];

export default class BandsRoute extends Route {
  async model() {
    return ALL_BANDS;
  }
}
