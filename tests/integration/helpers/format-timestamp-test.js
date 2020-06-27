import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-timestamp', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('dateString', '07-20-2020');

    await render(hbs`{{format-timestamp dateString}}`);

    assert.equal(this.element.textContent.trim(), 'Jul 20 @ 0:00 am');
  });
});
