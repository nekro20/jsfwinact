import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const CartGoods = new Mongo.Collection('cartGoods');

Meteor.methods({
  'cartGoods.insert'(goodId) {
    CartGoods.insert({
      goodId: goodId
    });
  },
  'cartGoods.remove'(cartGoodId) {
    CartGoods.remove(cartGoodId);
  }
});
