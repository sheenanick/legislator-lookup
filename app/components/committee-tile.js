import Ember from 'ember';

export default Ember.Component.extend({
  all: true,
  house: false,
  actions: {
    filter(params) {
      if(params === 'house'){
        this.set('house', true);
        this.set('all', false);
      }
      if(params === 'all'){
        this.set('house', false);
        this.set('all', true);
      }

    }
  }
});
