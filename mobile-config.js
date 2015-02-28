App.info({
	id: 'org.420radio.podcastapp',
	version: '0.0.1',
	name: '420Radio Podcast',
	description: 'Podcast app for 420Radio.com with Russ.',
	author: '@jamlancaster',
	email: 'lancasja@gmail.com',
	website: 'http://www.420radio.org'
});

// Hide status bar at top of screen
App.setPreference('Fullscreen', 'true');

// Lock orientation
App.setPreference('Orientation', 'portrait');

// No feedback when scrolling past content
App.setPreference('DisallowOverscroll', 'true');

// Hide additional toolbar that appears above keyboard
App.setPreference('HideKeyboardFormAccessoryBar', 'true');

App.icons({
	'iphone': 'icons/420icon.png',
	'iphone_2x': 'icons/420icon@2x.png',
	'iphone_3x': 'icons/420icon@3x.png'
});

App.launchScreens({
	'iphone': 'splash/splash-iphone4.png',
	'iphone5': 'splash/splash-iphone5.png',
	'iphone6': 'splash/splash-iphone6.png',
	'iphone6p_portrait': 'splash/splash-iphone6p.png'
});
