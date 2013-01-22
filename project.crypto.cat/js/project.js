$(window).load(function() {

var downloadLink = {
	'chrome': 'https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij',
	'firefox': 'https://addons.mozilla.org/en-US/firefox/addon/cryptocat/',
	'safari': 'https://crypto.cat/get/cryptocat.safariextz'
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

mapbox.auto('map', 'kaepora.map-mf3ru1ma', function(map) {
	map.zoom(2, false);
	map.center({ lat: 25, lon: 150 });
	map.ease.location({ lat: 30, lon: 10 }).zoom(2, false).optimal(0.005);
});


});