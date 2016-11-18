import Ember from 'ember';

let bookmarks = [{
  id: 1,
  title: 'Microsoft',
  link: 'http://www.microsoft.com',
  about: 'At Microsoft the mission is blah blah blah'
},
{
  id: 2,
  title: 'Wikipedia',
  link: 'www.Wikipedia.org',
  about: 'The free encyclopedia'
},
{
  id: 3,
  title: 'Google',
  link: 'www.google.com',
  about: null
}];

export default Ember.Route.extend({
  model(){
    return bookmarks;
  }
});
