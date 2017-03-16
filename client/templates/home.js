import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Cats } from '../../lib/cats.js';

import './home.html';

Template.Home.onRendered(function() {
  $('select').material_select();
  Meteor.subscribe('cats');
});

Template.Home.helpers({
  cats() {
    return Cats.find();
  },
});

Template.Home.helpers({

  agefrom: function(){
    return Template.instance().agefrom.get();
  },

  catsFiltered: function(){
    return Cats.find({
      age:{
        $gt: Template.instance().agefrom.get()
      }
    });
  },
});

Template.Home.events({
  'change #agefrom'(event, instance) {
    //reactive var here
    // instance.state.set('hideCompleted', event.target.checked);
  },
});