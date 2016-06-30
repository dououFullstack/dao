// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import './about.html';

// Template.about.events({
//   "click .loadmore": function(event, template){
//      alert('sdfs');
//   }
// });

Template.aboutus.events({
  'click .loadmore'(event, instance) {
    // alert('sdfs');
    $("#tengfei1").css("display", "inline-block");
  },
});
