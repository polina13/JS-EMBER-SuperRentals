import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['cost:asc'],
  sortedRentals: Ember.computed.sort('city.rentals', 'sortBy'),
});
