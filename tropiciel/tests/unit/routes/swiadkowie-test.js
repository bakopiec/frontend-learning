import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | swiadkowie', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:swiadkowie');
    assert.ok(route);
  });
});
