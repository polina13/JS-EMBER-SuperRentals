import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
  },
  actions: {
    saveRental(params) {
      console.log("it work");
      var newRental = this.store.createRecord('rental', params);
      console.log(params);
      var city = params.city;
      console.log(city);
      city.get('rentals').addObject(newRental);
      newRental.save().then(function() {
        return city.save();
      });
      this.transitionTo('city', params.city);
    },
    destroyCity(city) {
          var rental_deletions = city.get('rentals').map(function(rental) {
            return rental.destroyRecord();
          });
          Ember.RSVP.all(rental_deletions)
             .then(function() {
             return city.destroyRecord();
          })
          this.transitionTo('index');
        }
  }
});
