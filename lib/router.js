import { Cats } from '../lib/cats.js';

Router.configure({
  layoutTemplate: 'Layout'
});
Router.route('/', function() {
  this.render('Home');
});
Router.route('cart', function() {
  this.render('Cart');
});
Router.route('/cat/:id', function () {
  this.render('Cat', {
    data: () => Cats.findOne({_id: this.params.id})
  });
});