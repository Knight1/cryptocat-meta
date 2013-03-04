$(window).load(function() {

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
		'text': 'Cryptocat is not available for your browser.',
		'link': '#'
	},
	'internetExplorer': {
		'text': 'Cryptocat is not available for your browser.',
		'link': '#'
	}
};

if (document.URL.match('.cat/ca')) {
	downloadLink['chrome']['text'] = 'Descarrega\'t Cryptocat per Chrome';
	downloadLink['firefox']['text'] = 'Descarrega\'t Cryptocat per Firefox';
	downloadLink['safari']['text'] = 'Descarrega\'t Cryptocat per Safari';
	downloadLink['opera']['text'] = 'Cryptocat no està disponible per al teu navegador.';
	downloadLink['internetExplorer']['text'] = 'Cryptocat no està disponible per al teu navegador.';
}

var mediaQuotes = [
	{
		'quote': '“Cryptocat has a simple, countercultural goal: people should be able to talk on the Internet without being subjected to surveillance.”',
		'source': 'The New York Times'
	},
	{
		'quote': '"An essential privacy tool."',
		'source': 'Forbes'
	},
	{
		'quote': '“The beauty of Cryptocat is its simplicity.”',
		'source': 'PC World'
	},
	{
		'quote': '“One of the best Google Chrome apps currently out there.”',
		'source': 'Business Insider'
	},
	{
		'quote': '“We’ve finally found a stylish and secure way to chat online that fits our hip/paranoid lifestyle: Cryptocat.”',
		'source': 'Netted'
	},
	{
		'quote': '“16th Annual Webby Awards Honoree, Social Media Category.”',
		'source': 'Webby Awards'
	},
	{
		'quote': '“Wall Street Journal Data Transparency Award for Outstanding Data Control Project.”',
		'source': 'Wall Street Journal'
	},
	{
		'quote': '“Cryptocat brings extra-secure communication to web chat, especially in places where conversations might be watched.”',
		'source': 'Ars Technica'
	},
	{
		'quote': '“Cryptocat may turn out to be the Web’s easiest way to communicate with strong encryption.”',
		'source': 'Forbes'
	},
	{
		'quote': '“Cryptocat creates an encrypted, disposable chatroom on any computer with a web browser.”',
		'source': 'Lifehacker'
	},
	{
		'quote': '“Cryptocat works inside a web browser and enables people to chat online via encrypted instant messaging.”',
		'source': 'BBC News'
	}
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
	var aTag = $('#' + aid);
	$('body').animate({scrollTop: aTag.offset().top}, 800);
}

function displayQuote(n) {
	var quote = mediaQuotes[n]['quote'] + ' — <strong>' + mediaQuotes[n]['source'] + '</strong>';
	$('#mediaQuotes').animate({'opacity': '0'}, 700, function() {
		$(this).html(quote);
		$(this).animate({'opacity': '1'}, 700);
	});
}

var browser = detectBrowser();
$('.downloadLink').text(downloadLink[browser]['text']);
$('.downloadLink').attr('href', downloadLink[browser]['link']);
if (browser === 'chrome') {
	$('.downloadLink').click(function(e) {
		e.preventDefault();
		chrome.webstore.install('https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij');
	});
}

if (navigator.userAgent.match('Macintosh')) {
	//$('#macStore').delay(200).fadeIn(1200);
}

$('#cryptocatLink').click(function(e) {
	e.preventDefault();
	var aid = $(this).attr('href').substring(1);
	scrollToAnchor(aid);
});

$('#warningLink').click(function(e) {
	e.preventDefault();
	$('#warningsBox').slideDown(500, function() {
		window.setTimeout(function() {
			scrollToAnchor('warnings');
		});
	});
});

/* var q = 1; window.setInterval(function() {
	displayQuote(q);
	q++;
	if (q >= mediaQuotes.length) { q = 0 }
}, 7000);

displayQuote(0); */

});