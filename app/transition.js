export default function(){
    let duration = 500;

    this.transition(
      this.fromRoute('index'),
      this.toRoute('tour'),
      this.use('toUp', {duration}),
      this.reverse('toDown', {duration})
    );
    // this.transition(
    //   this.fromRoute('posts.index'),
    //   this.toRoute('posts.new'),
    //   this.use('crossFade'),
    //   this.reverse('crossFade')
    // );
  }