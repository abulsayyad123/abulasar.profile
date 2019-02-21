import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  // ----- Arguments -----
  icons: ['home', 'user', 'code', 'file-text', 'github'],
  
  // ----- Computed properties -----
  pageIcons: computed('pages', 'icons', function() {
    const icons = this.get('icons');
    const pages = this.get('pages');
    let pageIcons = [];

    for(let i=0; i < pages.length; i++) {
      pageIcons.push({[icons[i]]: pages[i]});
    }
    return pageIcons;
  })
});
