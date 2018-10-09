import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | obserwacje/nowa', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:obserwacje/nowa');
    assert.ok(route);
  });
});
