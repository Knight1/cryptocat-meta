var downloadLink = {
	'chrome': 'https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij',
	'firefox': 'https://addons.mozilla.org/en-US/firefox/addon/cryptocat/',
	'safari': 'https://crypto.cat/get/cryptocat.safariextz'
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
