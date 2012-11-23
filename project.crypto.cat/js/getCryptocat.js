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

currentQuote = 0;
function switchQuote() {
	if (currentQuote >= mediaQuotes.length) {
		currentQuote = 0;
	}
	$('#mediaQuote').fadeOut('slow', function() {
		$(this).text(mediaQuotes[currentQuote])
			.append(' — ');
	});
	$('#mediaSource').fadeOut('slow', function() {
		$(this).text(mediaSources[currentQuote]);
		currentQuote++;
		$('#mediaQuote').fadeIn('slow');
		$(this).fadeIn('slow');
	});
}

var language = {
		'getChrome': 'Get Cryptocat for Google Chrome',
		'getFirefox': 'Get Cryptocat for Mozilla Firefox',
		'getSafari': 'Get Cryptocat for Safari',
		'notSupported': 'Your Browser is Not Supported'
}

function getDownloadButton() {
	var downloadButton = [];
	downloadButton['chrome'] = '<a href="' + downloadLink['chrome'] + '"><div id="downloadButton" dir="ltr">'
		+ '<img id="browserLogo" src="https://crypto.cat/img/chrome.png" alt="Google Chrome" />'
		+ '<p dir="rtl">' + language['getChrome'] + '</p>'
		+ '</div>'
		+ '</a>';
	downloadButton['firefox'] = '<a href="' + downloadLink['firefox'] + '"><div id="downloadButton" dir="ltr">'
		+ '<img id="browserLogo" src="https://crypto.cat/img/firefox.png" alt="Mozilla Firefox" />'
		+ '<p dir="rtl">' + language['getFirefox'] + '</p>'
		+ '</div>'
	downloadButton['safari'] = '<a href="' + downloadLink['safari'] + '"><div id="downloadButton" dir="ltr">'
		+ '<img id="browserLogo" src="https://crypto.cat/img/safari.png" alt="Apple Safari" />'
		+ '<p dir="rtl">' + language['getSafari'] + '</p>'
		+ '</div>'
	downloadButton['opera'] = '<a href="#"><div id="downloadButton" dir="ltr">'
		+ '<img id="browserLogo" src="https://crypto.cat/img/opera.png" alt="Opera" />'
		+ '<p dir="rtl">' + language['notSupported'] + '</p>'
		+ '</div>'
	downloadButton['ie'] = '<a href="#"><div id="downloadButton" dir="ltr">'
		+ '<img id="browserLogo" src="https://crypto.cat/img/ie.png" alt="Internet Explorer" />'
		+ '<p dir="rtl">' + language['notSupported'] + '</p>'
		+ '</div>'
	if (navigator.userAgent.match('Chrome')) {
	$('#download').html(downloadButton['chrome']);
	}
	else if (navigator.userAgent.match('Firefox')) {
		$('#download').html(downloadButton['firefox']);
		$('#browserLogo').css('bottom', '8px');
	}
	else if (navigator.userAgent.match('Opera')) {
		$('#download').html(downloadButton['opera']);
		$('#browserLogo').css('bottom', '11px');
		$('#downloadButton').css('cursor', 'default');
	}
	else if (navigator.userAgent.match('MSIE')) {
		$('#download').html(downloadButton['ie']);
		$('#downloadButton').css('cursor', 'default');
	}
	else {
		$('#download').html(downloadButton['safari']);
	}
}

getDownloadButton();
setInterval(switchQuote, 7000);
switchQuote();

});
