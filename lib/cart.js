import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Cart = new Mongo.Collection('cart');

Meteor.methods({
  'cart.clear'() {
    return Cart.remove({});
  },
});