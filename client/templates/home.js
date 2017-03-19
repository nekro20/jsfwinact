import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Cats } from '../../lib/cats.js';
import { Cart } from '../../lib/cart.js';

import { state } from './filters.js';

import './home.html';

Template.Home.onCreated(function() {
  Meteor.subscribe('cats');
  Meteor.subscribe('cart');
});

Template.Home.helpers({
  cats() {
    if (!state) return [];
    let filters = state.all();
    //exclude cart items
    let params = {
      _id: { $nin: Cart.find().map(x => x.id) }
    };
    //prepare filter from filters state
    params.price = {
      $gte: filters.priceFrom ? Number(filters.priceFrom) : 0,
      $lte: filters.priceTo ? Number(filters.priceTo) : Infinity,
    };
    params.age = {
      $gte: filters.ageFrom ? Number(filters.ageFrom) : 0,
      $lte: filters.ageTo ? Number(filters.ageTo) : Infinity,
    };
    if (filters.sterile) {
      params.sterile = true;
    }
    if (filters.furDensity && filters.furDensity !== 'any') {
      params.furDensity = filters.furDensity;
    }
    if (filters.sizes && filters.sizes.length > 0) {
      params.size = { $in: filters.sizes };
    }
    if (filters.colors && filters.colors.length > 0) {
      params.color = { $all: filters.colors };
    }
    return Cats.find(params).fetch();
  },
});