export default function(){
  // ----- Arguments -----
  let duration = 500;
  let pages = ['home', 'about', 'projects', 'resume', 'github'];

  pages.forEach((page, index) => {
    for(let i=index+1; i<pages.length; i++) {
      this.transition(
        this.fromRoute(page),
        this.toRoute(pages[i]),
        this.use('toUp', {duration}),
        this.reverse('toDown', {duration})
      )
    }
  })
}