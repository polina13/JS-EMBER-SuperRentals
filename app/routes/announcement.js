import Ember from 'ember';
var announcements = [{
  id: 1,
  announcement: "Some announcement"
}, {
  id: 2,
  announcement: "Some other announcement"
}, {
  id: 3,
  announcement: "Some other other announcement"
}];
export default Ember.Route.extend({
  model() {
    return announcements;
  }
});
