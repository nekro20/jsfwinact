import { Template } from 'meteor/templating';

import { Cart } from '../../lib/cart.js';

Template.CatInList.events({
  'click .btn-floating'(event, instance) {
    event.preventDefault();
    Cart.insert({id: instance.data._id});
  },
});