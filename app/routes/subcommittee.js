import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id=' + params.committee_id + '&apikey=' + key;
    var url2 = 'http://congress.api.sunlightfoundation.com/committees?committee_id=' + params.committee_id + '&subcommittee=false&apikey=' + key;
    return Ember.RSVP.hash({
      subcommittees: Ember.$.getJSON(url).then(function(responseJSON) {
        if (responseJSON.results.length > 0) {
          return responseJSON.results;
        } else {
          return false;
        }
      }),
      committees: Ember.$.getJSON(url2).then(function(responseJSON) {
        return responseJSON.results;
      })
    });
  }
});
