import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Cart } from '../../lib/cart.js';

import './nav.html';

Template.Nav.onCreated(function() {
  Meteor.subscribe('cart');
});

Template.Nav.helpers({
  cartCount() {
    return Cart.find().count();
  },
});