import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=false&apikey=' + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
