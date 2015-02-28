Meteor.publish('episodes', function() {
	return Episodes.find();
});

var parseString = xml2js.parseString;
var url = 'http://420radio.org/shows/420/feed/';
var data = HTTP.get(url);
var xml = data.content;

/*
	- Going to want to run this every hour
	- Can use synced-cron (https://github.com/percolatestudio/meteor-synced-cron)
		or setInterval()
	- Probably want to wrap it in a function
*/
parseString(xml, function(err, result) {
	var channel = result.rss.channel[0];

	// For each episode...
	channel.item.forEach(function(ep, index) {

		// Don't do anything if the document is already in the DB
		// Using the link to check against
		if (Episodes.findOne({ link: ep.link[0] })) {
			return;
		}

		episode = {
			title: ep.title[0],
			link: ep.link[0],
			pubDate: ep.pubDate[0],
			categories: ep.category,
			summary: ep['itunes:summary'],
			showDuration: ep['itunes:duration'],
			audioLength: '',
			audioType: '',
			audioUrl: ''
		}

		if (ep.enclosure !== undefined) {
			episode.audioLength = ep.enclosure[0]['$'].length;
			episode.audioType = ep.enclosure[0]['$'].type;
			episode.audioUrl = ep.enclosure[0]['$'].url;
		}

		// Insert data into the collection
		Episodes.insert(episode);
	});
});