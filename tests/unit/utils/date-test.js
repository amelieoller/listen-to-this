import formatDateString from 'listen-to-this/utils/date';
import { module, test } from 'qunit';

module('Unit | Utility | date', function () {
  test('string inputs', function (assert) {
    assert.equal(formatDateString('04/05/1983'), 'Apr 5, 1983 @ 0:00 am', 'MM/DD/YYYY');
    assert.equal(formatDateString('4/5/1983'), 'Apr 5, 1983 @ 0:00 am', 'M/D/YYYY');
    assert.equal(
      formatDateString('26 June 2010 13:14'),
      'Jun 26, 2010 @ 1:14 pm',
      '26 June 2010 13:14'
    );
  });

  test('empty and invalid inputs', function (assert) {
    // @ts-ignore
    assert.equal(formatDateString(), null);
    // @ts-ignore
    assert.equal(formatDateString(null), null);
    // @ts-ignore
    assert.equal(formatDateString([]), null);
    // @ts-ignore
    assert.equal(formatDateString({}), null);
  });
});
