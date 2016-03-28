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
      // console.log(this);
      newRental.save();
      this.transitionTo('index');
      // console.log(newRental);
    },
    saveAnnouncement() {
      var someVar= document.getElementById("announcement").value;
      console.log(someVar);
      var params = {
        announcement: someVar
      };
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('index');
    }
  }
});
