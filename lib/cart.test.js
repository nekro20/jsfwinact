import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';

import { Cart } from './cart.js';

if(Meteor.isServer) {
  describe('Cart', () => {
    describe('methods', () => {
      beforeEach(() => {
        Cart.remove({});
        Cart.insert({ id: "123456" });
      });

      it('can clear the cart', () => {
        Meteor.server.method_handlers['cart.clear']();
        assert.equal(Cart.find().count(), 0);
      });
    });
  });
}
