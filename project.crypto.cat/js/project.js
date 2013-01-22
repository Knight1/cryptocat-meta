$(window).load(function() {
	
var browser = detectBrowser();

var downloadLink = {
	'chrome': {
		'text': 'Download Cryptocat for Chrome',
		'link': 'https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij'
	},
	'firefox': {
		'text': 'Download Cryptocat for Firefox',
		'link': 'https://addons.mozilla.org/en-US/firefox/addon/cryptocat/'
	},
	'safari': {
		'text': 'Download Cryptocat for Safari',
		'link': 'https://crypto.cat/get/cryptocat.safariextz'
	},
	'opera': {
		'text': 'Unfortunately, Cryptocat is only available for Chrome, Firefox and Safari.',
		'link': '#'
	},
	'internetExplorer': {
		'text': 'Unfortunately, Cryptocat is only available for Chrome, Firefox and Safari.',
		'link': '#'
	}
}

var mediaQuotes = [
	'“Cryptocat has a simple, countercultural goal: people should be able to talk on the Internet without being subjected to surveillance.”',
	'"An essential privacy tool."',
	'“The beauty of Cryptocat is its simplicity.”',
	'“One of the best Google Chrome apps currently out there.”',
	'“We’ve finally found a stylish and secure way to chat online that fits our hip/paranoid lifestyle: Cryptocat.”',
	'“16th Annual Webby Awards Honoree, Social Media Category.”',
	'“Wall Street Journal Data Transparency Award for Outstanding Data Control Project.”',
	'“Cryptocat brings extra-secure communication to web chat, especially in places where conversations might be watched.”',
	'“Cryptocat may turn out to be the Web’s easiest way to communicate with strong encryption.”',
	'“Cryptocat creates an encrypted, disposable chatroom on any computer with a web browser.”',
	'“Cryptocat works inside a web browser and enables people to chat online via encrypted instant messaging.”'
];
var mediaSources = [
	'The New York Times',
	"Forbes",
	'PC World',
	'Business Insider',
	'Netted',
	'Webby Awards',
	'Wall Street Journal',
	'Ars Technica',
	'Forbes',
	'Lifehacker',
	'BBC News'
];

function detectBrowser() {
	if (navigator.userAgent.match('Chrome')) {
		return 'chrome';
	}
	if (navigator.userAgent.match('Firefox')) {
		return 'firefox';
	}
	if (navigator.userAgent.match('Opera')) {
		return 'opera';
	}
	if (navigator.userAgent.match('MSIE')) {
		return 'internetExplorer';
	}
	return 'safari';
}

function scrollToAnchor(aid){
	var aTag = $("a[name='"+ aid +"']");
	$('body').animate({scrollTop: aTag.offset().top}, 1000);
}

$('#navLinks a').click(function(e) {
	e.preventDefault();
	var aid = $(this).attr('href').substring(1);
	scrollToAnchor(aid);
});

mapbox.auto('map', 'kaepora.map-mf3ru1ma', function(map) {
	map.zoom(2.5, false);
	map.center({ lat: 25, lon: 150 });
	map.ease.location({ lat: 35, lon: 10 }).zoom(2.5, false).optimal(0.002);
});

$('.downloadLink').text(downloadLink[browser]['text']);
$('.downloadLink').attr('href', downloadLink[browser]['link']);

});