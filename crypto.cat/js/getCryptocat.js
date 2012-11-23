$(window).load(function() {

var language = window.navigator.userLanguage || window.navigator.language;
try {
	language = Language.set(language.toLowerCase());
}
catch(err) {
	language = Language.set('en');
}

var downloadLink = {
	'chrome': 'https://chrome.google.com/webstore/detail/gonbigodpnfghidmnphnadhepmbabhij',
	'firefox': 'https://addons.mozilla.org/en-US/firefox/addon/cryptocat/',
	'safari': 'https://crypto.cat/get/cryptocat.safariextz'
}

function getDownloadButton() {
	var downloadButton = [];
	downloadButton['chrome'] = '<a href="' + downloadLink['chrome'] + '"><div id="downloadButton" dir="ltr">'
		+ '<img id="browserLogo" src="img/chrome.png" alt="Google Chrome" />'
		+ '<p dir="rtl">' + language['mainWindow']['getChrome'] + '</p>'
		+ '</div>'
		+ '</a><div class="downloadText">' + language['mainWindow']['supportedText'] + '</div>';
	downloadButton['firefox'] = '<a href="' + downloadLink['firefox'] + '"><div id="downloadButton" dir="ltr">'
		+ '<img id="browserLogo" src="img/firefox.png" alt="Mozilla Firefox" />'
		+ '<p dir="rtl">' + language['mainWindow']['getFirefox'] + '</p>'
		+ '</div>'
		+ '</a><div class="downloadText">' + language['mainWindow']['supportedText'] + '</div>';
	downloadButton['safari'] = '<a href="' + downloadLink['safari'] + '"><div id="downloadButton" dir="ltr">'
		+ '<img id="browserLogo" src="img/safari.png" alt="Apple Safari" />'
		+ '<p dir="rtl">' + language['mainWindow']['getSafari'] + '</p>'
		+ '</div>'
		+ '</a><div class="downloadText">' + language['mainWindow']['supportedText'] + '</div>';
	downloadButton['opera'] = '<a href="#"><div id="downloadButton" dir="ltr">'
		+ '<img id="browserLogo" src="img/opera.png" alt="Opera" />'
		+ '<p dir="rtl">' + language['mainWindow']['notSupported'] + '</p>'
		+ '</div>'
		+ '</a><div class="downloadText">' + language['mainWindow']['unsupportedText'] + '</div>';
	downloadButton['ie'] = '<a href="#"><div id="downloadButton" dir="ltr">'
		+ '<img id="browserLogo" src="img/ie.png" alt="Internet Explorer" />'
		+ '<p dir="rtl">' + language['mainWindow']['notSupported'] + '</p>'
		+ '</div>'
		+ '</a><div class="downloadText">' + language['mainWindow']['unsupportedText'] + '</div>';
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

// Language selector
$('#languages').change(function() {
	language = Language.set($(this).val());
	getDownloadButton();
});
getDownloadButton();

// Get language from URL anchor
if (window.location.hash.length > 1) {
	language = Language.set(window.location.hash.substring(1));
	getDownloadButton();
}

});