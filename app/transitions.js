export default function(){
    let duration = 500;

    this.transition(
      this.fromRoute('home'),
      this.toRoute('about'),
      this.use('toUp', {duration}),
      this.reverse('toDown', {duration})
    )
  }