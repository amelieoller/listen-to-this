import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logout', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /bands and clicking "Logout"', async function (assert) {
    await visit('/bands/test-band/test-channel');
    assert.ok(currentURL().startsWith('/bands'));
    // await this.pauseTest();
    await click('.bands-page__logout-button');
    assert.equal(currentURL(), '/login');
  });
});
