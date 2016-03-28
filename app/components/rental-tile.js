import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function () {
      this.set('isImageShowing', true);
    },
    imageHide: function () {
      this.set('isImageShowing', false);
    },
    update(rental, params) {
      this.sendAction('update', rental, params);
    },
    delete(rental) {
      if (confirm('are you sure you want to delte?')){
        this.sendAction('destroyRental', rental);
      }
    }

  }
});
