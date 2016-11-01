import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('legislator', {path: '/legislator/:zip'});
  this.route('committee');
  this.route('subcommittee', {path: '/committee/:committee_id'});
  this.route('bills');
  this.route('billid', {path: 'bills/:bill_id'});
});

export default Router;
