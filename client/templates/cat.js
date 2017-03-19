import { Template } from 'meteor/templating';

import { Cart } from '../../lib/cart.js';

Template.Cat.helpers({
  sterile() {
    const instance = Template.instance();
    return instance.data.sterile ? 'yes' : 'no';
  },
  isInCart() {
    const instance = Template.instance();
    return instance.data && !Cart.findOne({ id: instance.data._id});
  },
});

Template.Cat.events({
  'click #add'(event, instance) {
    event.preventDefault();
    Cart.insert({id: instance.data._id});
  },
});