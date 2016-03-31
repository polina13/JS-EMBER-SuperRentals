import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
  actions: {
    delete(rental) {
      console.log("its working");
      var city = rental.get('city');
      rental.destroyRecord()
      this.transitionTo('index');
    },
    destroyRental(rental) {
      console.log("its working");
      rental.destroyRecord();
      this.transitionTo('index');
    }
  },
  update(rental,params) {
    console.log("rental update")
    Object.keys(params).forEach(function(key) {
           if(params[key]!==undefined) {
             rental.set(key,params[key]);
           }
         });
    rental.save();
    this.transitionTo('index');
  },

});
