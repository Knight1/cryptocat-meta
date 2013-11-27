$(document).ready(function() {

var downloadLink = {
	'Chrome': {
		'text': 'Download Cryptocat for Chrome',
		'link': 'https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij'
	},
	'Firefox': {
		'text': 'Download Cryptocat for Firefox',
		'link': 'https://addons.mozilla.org/en-US/firefox/addon/cryptocat/'
	},
	'Safari': {
		'text': 'Download Cryptocat for Safari',
		'link': 'https://crypto.cat/get/cryptocat.safariextz'
	},
	'Opera': {
		'text': 'Cryptocat for Opera is coming soon!',
		'link': '#'
	},
	'Internet Explorer': {
		'text': 'Cryptocat is not available for your browser.',
		'link': '#'
	}
}

if (document.URL.match('.cat/ca')) {
	downloadLink['Chrome']['text'] = 'Descarrega\'t Cryptocat per Chrome'
	downloadLink['Firefox']['text'] = 'Descarrega\'t Cryptocat per Firefox'
	downloadLink['Safari']['text'] = 'Descarrega\'t Cryptocat per Safari'
	downloadLink['Opera']['text'] = 'Cryptocat no està disponible per al teu navegador.'
	downloadLink['Internet Explorer']['text'] = 'Cryptocat no està disponible per al teu navegador.'
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
]

function detectBrowser() {
	if (navigator.userAgent.match('OPR')) {
		return 'Opera'
	}
	if (navigator.userAgent.match('Chrome')) {
		return 'Chrome'
	}
	if (navigator.userAgent.match('Firefox')) {
		return 'Firefox'
	}
	if (navigator.userAgent.match('MSIE')) {
		return 'Internet Explorer'
	}
	return 'Safari'
}

function scrollToAnchor(aid){
	var aTag = $('#' + aid)
	$('html,body').animate({scrollTop: aTag.offset().top}, 800)
}

function displayQuote(n) {
	var quote = mediaQuotes[n]['quote'] + ' — <strong>' + mediaQuotes[n]['source'] + '</strong>'
	$('#mediaQuotes').animate({'opacity': '0'}, 700, function() {
		$(this).html(quote)
		$(this).animate({'opacity': '1'}, 700)
	})
}

var browser = detectBrowser()
$('.downloadLink').text(downloadLink[browser]['text'])
$('.downloadLink').attr('href', downloadLink[browser]['link'])
if (browser === 'Chrome') {
	$('.downloadLink').click(function(e) {
		e.preventDefault()
		chrome.webstore.install('https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij')
	})
}

$('#cryptocatLink').click(function(e) {
	e.preventDefault()
	var aid = $(this).attr('href').substring(1)
	scrollToAnchor('cryptocat')
})

$('.videoLink').click(function(e) {
	e.preventDefault()
	$('#videoWrapper').stop().fadeIn()
	$('#videoBox').html(
		'<iframe src="https://player.vimeo.com/video/38439169?title=0&amp;byline=0&amp;portrait=0&amp;color=78b4db&amp;autoplay=1" '
		+ 'width="1000" height="563" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
	)
})

$('#videoWrapper').click(function() {
	$(this).fadeOut(function() {
		$('#videoBox').html('')
	})
})

$('#warningLink').click(function(e) {
	$(this).fadeOut()
	e.preventDefault()
	$('#warningsBox').slideDown(500)
	scrollToAnchor('warnings')
})

$('#warningInfo').click(function(e) {
	e.preventDefault()
	$('#warningLink').click()
})

})