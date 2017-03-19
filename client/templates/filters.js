import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Cats } from '../../lib/cats.js';

import './home.html';

export const state = new ReactiveDict();

Template.Filters.onCreated(function() {
  Meteor.subscribe('cats');
});

Template.Filters.helpers({
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
  priceMin() {
    return _.min(Cats.find().map(x => x.price));
  },
  priceMax() {
    return _.max(Cats.find().map(x => x.price));
  },
  ageMin() {
    return _.min(Cats.find().map(x => x.age));
  },
  ageMax() {
    return _.max(Cats.find().map(x => x.age));
  },
});

Template.Filters.events({
  'click button[type=reset]'(event, instance) {
    state.clear();
  },
  'input #agefrom'(event, instance) {
    state.set('ageFrom', event.target.value);
  },
  'input #ageto'(event, instance) {
    state.set('ageTo', event.target.value);
  },
  'input #pricefrom'(event, instance) {
    state.set('priceFrom', event.target.value);
  },
  'input #priceto'(event, instance) {
    state.set('priceTo', event.target.value);
  },
  'change #sterile'(event, instance) {
    state.set('sterile', event.target.checked);
  },
  'change input[name=sizes]'(event, instance) {
    let checked = _.filter($('input[name=sizes]'), x => x.checked === true).map(x => x.value);
    state.set('sizes', checked);
  },
  'change #furdensity'(event, instance) {
    state.set('furDensity', event.target.value);
  },
  'change input[name=colors]'(event, instance) {
    let checked = _.filter($('input[name=colors]'), x => x.checked === true).map(x => x.value);
    state.set('colors', checked);
  },
});