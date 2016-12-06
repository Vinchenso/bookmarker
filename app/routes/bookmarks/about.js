import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').findRecord('bookmark',1);
    //this.get('store').queryRecord('bookmark',{aboutIsNull:true})
  }
});
