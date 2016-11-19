import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  avatar: DS.attr('string'),
  isAdmin: DS.attr('boolean', {
    defaultValue: false
  }),
  created: DS.attr('date', {
    defaultValue() {
      return new Date();
    }
  }),
  bookmarks: DS.hasMany('bookmark'),
  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
