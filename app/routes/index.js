import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    var rentals = this.store.findAll('rental');
    var announcements = this.store.findAll('announcement');
    return {rentals: rentals, announcements: announcements};
  },
  actions: {
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }
  }
});
