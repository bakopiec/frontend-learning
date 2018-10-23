import { helper } from '@ember/component/helper';

export function dataOd(params) {
  let czas = window.moment(...params);
  let czasSformatowany = czas.fromNow();
  return new Ember.String.htmlSafe(
    '<span class="text-primary">' + czasSformatowany + '</span>');
}

export default helper(dataOd);
