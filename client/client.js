Meteor.subscribe('episodes');

Template.feed.helpers({
	episodes: function() {
		return Episodes.findOne();
	}
});