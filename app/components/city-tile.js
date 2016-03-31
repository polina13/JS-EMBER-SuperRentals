import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  destroyCity(city) {
    this.sendAction('destroyCity', city);
    }
  }
});
