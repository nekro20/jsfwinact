import { Template } from 'meteor/templating';

import { Cart } from '../../lib/cart.js';

Template.CatInCart.events({
  'click .btn-flat'(event, instance) {
    event.preventDefault();
    Cart.remove(Cart.findOne({ id: instance.data._id })._id);
  },
});