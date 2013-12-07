$(window).ready(function() {

/*
-------------------
Utility functions
-------------------
*/

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

var scrollToAnchor = function(anchor){
	$('html,body').animate({
		scrollTop: $('#' + anchor).offset().top
	}, 800)
}

/*
-------------------
Download button
-------------------
*/

var downloadLink = {
	'Chrome': {
		'text': 'Download for Chrome',
		'link': 'https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij'
	},
	'Firefox': {
		'text': 'Download for Firefox',
		'link': 'https://addons.mozilla.org/en-US/firefox/addon/cryptocat/'
	},
	'Safari': {
		'text': 'Download for Safari',
		'link': 'https://crypto.cat/get/cryptocat.safariextz'
	},
	'Opera': {
		'text': 'Download for Opera',
		'link': 'https://addons.opera.com/en/extensions/details/cryptocat/'
	},
	'Internet Explorer': {
		'text': 'Cryptocat is not available for your browser.',
		'link': '#'
	}
}

if (document.URL.match('crypto.cat/ca')) {
	downloadLink['Chrome']['text'] = 'Descarrega\'t per Chrome'
	downloadLink['Firefox']['text'] = 'Descarrega\'t per Firefox'
	downloadLink['Safari']['text'] = 'Descarrega\'t per Safari'
	downloadLink['Opera']['text'] = 'Descarrega\'t per Opera'
	downloadLink['Internet Explorer']['text'] = 'Cryptocat no està disponible per al teu navegador.'
	$('div.bubble').attr({'data-content': 'Assegureu-vos Cryptocat és adequat - llegiu les advertències'})
}

var browser = detectBrowser()
$('a#downloadButton').text(downloadLink[browser]['text'])
$('a#downloadButton').attr('href', downloadLink[browser]['link'])
if (browser === 'Chrome') {
	$('a#downloadButton').click(function(e) {
		e.preventDefault()
		chrome.webstore.install('https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij')
	})
}

/*
-------------------
Button bindings
-------------------
*/

$('a#warningsSeeMore').click(function() {
	$('a#warningsSeeMore').fadeOut(function() {
		$('div.warnings').animate({'height': '350px'})
	})
	scrollToAnchor('warningsScroll')
})

$('a.donateLink').click(function() {

})

})