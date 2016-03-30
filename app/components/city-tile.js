import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  delete(city) {
    this.sendAction('destroyCity', city);
    }
  }
});
