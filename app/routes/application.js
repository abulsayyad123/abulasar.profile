import Route from '@ember/routing/route';

export default Route.extend({
  // ----- Overridden Methods -----
  model() {
    return this.transitionTo('home');
  }
});
