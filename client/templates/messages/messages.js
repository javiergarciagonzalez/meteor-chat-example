Template.messages.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    // instance.counter.set(instance.counter.get() + 1);
    Messages.remove(this._id);
    Router.go('welcome');

  },
});


if (Meteor.isClient) {
    Template.messages.helpers({
        messages: function() {
            return Messages.find({}, { sort: { time: -1}});
        }
    });
}
