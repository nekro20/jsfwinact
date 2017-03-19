import { Meteor } from 'meteor/meteor';

import { Cart } from '../lib/cart.js';

Meteor.startup(function() {
  return Meteor.methods({
    clearCart: function() {
      return Cart.remove({});
    }
  });
});