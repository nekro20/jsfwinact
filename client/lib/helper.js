import { Template } from 'meteor/templating';

Template.registerHelper('FormatPlural', (count, noun, suffix) => {
  suffix = typeof suffix === 'string' ? suffix : 's';
  return `${count} ${noun}${count !== 1 ? suffix : ''}`;
});

Template.registerHelper('FormatMoney', (number) => '$' + number.toLocaleString());