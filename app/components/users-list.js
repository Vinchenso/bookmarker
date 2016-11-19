import Ember from 'ember';

const UserListComponent = Ember.Component.extend({
  imgClass: "avatar",
  click(){
    Ember.Logger.info('Users list was clicked');
    return false;
  }
});

UserListComponent.reopenClass({
  positionalParams: ['avatarUrl', 'email']
});

export default UserListComponent;
