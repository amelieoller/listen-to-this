import Route from '@ember/routing/route';
import { ALL_BANDS } from '../bands';

export default class BandsBandRoute extends Route {
  model({ bandId }) {
    return ALL_BANDS.find((band) => band.id === bandId);
  }
}
