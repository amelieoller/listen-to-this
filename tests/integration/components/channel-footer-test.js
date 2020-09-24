import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | channel-footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the channel footer', async function (assert) {
    await render(hbs`<ChannelFooter />`);

    assert.dom('.footer-message-input').exists();
    assert.dom('.footer-message-submit').exists();

    assert.dom('.footer-message-input').hasAttribute('placeholder', 'New Message');
  });
});
