import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  // ----- Services -----
  router: service(),

  // ----- Arguments -----
  pages: ['home', 'about', 'projects', 'resume', 'github'],
  
  // ----- Actions -----
  actions: {
    navigateToNextPage() {
      let currentRoute = this.get('router').currentRouteName;
      let pages = this.get('pages');
      let indexOfPath = pages.indexOf(currentRoute);
      this.transitionToRoute(pages[indexOfPath+1]);
    }
  }  
});
