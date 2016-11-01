import Ember from 'ember';

export function partyName(params) {
  var legislator = params[0];
  if(legislator.party === 'D') {
    return 'Democrat';
  } else if(legislator.party === 'R') {
    return 'Republican';
  } else if(legislator.party === 'I') {
    return 'Independent';
  }
}

export default Ember.Helper.helper(partyName);
