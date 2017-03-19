import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Cats } from '../../lib/cats.js';
import { Cart } from '../../lib/cart.js';

import './cart.html';

Template.Cart.onCreated(function() {
  this.total = new ReactiveVar();
  Meteor.subscribe('cats');
  Meteor.subscribe('cart');
});

Template.Cart.helpers({
  cats() {
    const instance = Template.instance();
    let cats = Cats.find({
      _id: { $in: Cart.find().map(x => x.id) }
    });
    instance.total.set(cats.map(x => x.price).reduce((prev, next) => prev + next, 0));
    return cats;
  },
  total() {
    return Template.instance().total.get();
  }
});

Template.Cart.events({
  'click #checkout'(event, instance) {
    event.preventDefault();
    alert('Thank you for purchase!'); //TODO: replace by modal
    Meteor.call('clearCart')
  },
});