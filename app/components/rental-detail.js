import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental) {
      if (confirm('are you sure you want to delte?')){
        this.sendAction('delete', rental);
      }
    },
    update(rental, params) {
      console.log("rentail detail update")
      var params = {
      owner: this.get('owner'),
      city: this.get('city'),
      type: this.get('type'),
      image: this.get('image'),
      bedrooms: this.get('bedrooms')
      }
      this.sendAction('update', rental, params);
      console.log("rentail detail after send")

      // this.set('updateRentalForm', false);
    }
  }
});
