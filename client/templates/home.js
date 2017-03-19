import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Cats } from '../../lib/cats.js';
import { Cart } from '../../lib/cart.js';

import './home.html';

Template.Home.onCreated(function() {
  this.state = new ReactiveDict();
  Meteor.subscribe('cats');
  Meteor.subscribe('cart');
});

Template.Home.helpers({
  cats() {
    //exclude cart items
    let params = {
      _id: { $nin: Cart.find().map(x => x.id) }
    };
    //prepare filter from state
    let state = Template.instance().state.all();
    params.price = {
      $gt: state.priceFrom ? Number(state.priceFrom) : 0,
      $lt: state.priceTo ? Number(state.priceTo) : Infinity,
    };
    params.age = {
      $gt: state.ageFrom ? Number(state.ageFrom) : 0,
      $lt: state.ageTo ? Number(state.ageTo) : Infinity,
    };
    if (state.sterile) {
      params.sterile = true;
    }
    if (state.furDensity && state.furDensity !== 'any') {
      params.furDensity = state.furDensity;
    }
    if (state.sizes && state.sizes.length > 0) {
      params.size = { $in: state.sizes };
    }
    if (state.colors && state.colors.length > 0) {
      params.color = { $all: state.colors };
    }
    return Cats.find(params);
  },
  furDensities() {
    let select = $('#furdensity');
    select.closest('div').children('.caret').remove(); //material select bug
    select.material_select();
    return _.uniq(Cats.find().map(x => x.furDensity));
  },
  sizes() {
    return _.uniq(Cats.find().map(x => x.size));
  },
  colors() {
    return _.uniq(_.flatten(Cats.find().map(x => x.color)));
  },
});

Template.Home.events({
  'click button[type=reset]'(event, instance) {
    instance.state.clear();
  },
  'input #agefrom'(event, instance) {
    instance.state.set('ageFrom', event.target.value);
  },
  'input #ageto'(event, instance) {
    instance.state.set('ageTo', event.target.value);
  },
  'input #pricefrom'(event, instance) {
    instance.state.set('priceFrom', event.target.value);
  },
  'input #priceto'(event, instance) {
    instance.state.set('priceTo', event.target.value);
  },
  'change #sterile'(event, instance) {
    instance.state.set('sterile', event.target.checked);
  },
  'change input[name=sizes]'(event, instance) {
    let checked = _.filter($('input[name=sizes]'), x => x.checked === true).map(x => x.value);
    instance.state.set('sizes', checked);
  },
  'change #furdensity'(event, instance) {
    instance.state.set('furDensity', event.target.value);
  },
  'change input[name=colors]'(event, instance) {
    let checked = _.filter($('input[name=colors]'), x => x.checked === true).map(x => x.value);
    instance.state.set('colors', checked);
  },
});