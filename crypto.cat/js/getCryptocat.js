$('.input[title]').qtip();
$('.button[title]').qtip();

function dialogBox(data, closeable, onClose) {
	if ($('#dialogBox').css('top') !== '-450px') {
		return false;
	}
	if (closeable) {
		$('#dialogBoxClose').css('display', 'block');
	}
	$('#dialogBoxContent').html(data);
	$('#dialogBox').animate({'top': '+=460px'}, 'fast').animate({'top': '-=10px'}, 'fast');
	$('#dialogBoxClose').click(function() {
		if ($('#dialogBoxClose').css('display') === 'none') {
			return false;
		}
		$('#dialogBox').animate({'top': '+=10px'}, 'fast').animate({'top': '-450px'}, 'fast');
		$('#dialogBoxClose').css('display', 'none');
		if (onClose) {
			onClose();
		}
		$('#userInputText').focus();
	});
	$(document).keydown(function(e) {
		if (e.keyCode == 27) {
			$('#dialogBoxClose').click();
		}
	});
}

var supportedText = 'Cryptocat easily installs in your browser for quick access whenever you need it.';
var unsupportedText = 'Cryptocat is currently only available for <a href="https://google.com/chrome" target="_blank">Google Chrome</a> and <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a>. Switch to one of the world\'s leading browsers today to use Cryptocat.';

var downloadButton = [];
downloadButton['chrome'] = '<a href="#"><div id="downloadButton">'
	+ '<img id="browserLogo" src="img/chrome.png" alt="Google Chrome" />'
	+ '<h1>Get Cryptocat for Google Chrome</h1>'
	+ '</div>'
	+ '</a><div class="downloadText">' + supportedText + '</div>';
downloadButton['firefox'] = '<a href="#"><div id="downloadButton">'
	+ '<img id="browserLogo" src="img/firefox.png" alt="Mozilla Firefox" />'
	+ '<h1>Get Cryptocat for Mozilla Firefox</h1>'
	+ '</div>'
	+ '</a><div class="downloadText">' + supportedText + '</div>';
downloadButton['opera'] = '<a href="#"><div id="downloadButton">'
	+ '<img id="browserLogo" src="img/opera.png" alt="Google Chrome" />'
	+ '<h1>Your Browser is Not Supported.</h1>'
	+ '</div>'
	+ '</a><div class="downloadText">' + unsupportedText + '</div>';
downloadButton['safari'] = '<a href="#"><div id="downloadButton">'
	+ '<img id="browserLogo" src="img/safari.png" alt="Google Chrome" />'
	+ '<h1>Your Browser is Not Supported.</h1>'
	+ '</div>'
	+ '</a><div class="downloadText">' + unsupportedText + '</div>';
downloadButton['ie'] = '<a href="#"><div id="downloadButton">'
	+ '<img id="browserLogo" src="img/ie.png" alt="Google Chrome" />'
	+ '<h1>Your Browser is Terrible.</h1>'
	+ '</div>'
	+ '</a><div class="downloadText">' + unsupportedText + '</div>';

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
else if (navigator.userAgent.match('Internet Explorer')) {
	$('#download').html(downloadButton['ie']);
	$('#downloadButton').css('cursor', 'default');
}
else {
	$('#download').html(downloadButton['safari']);
	$('#downloadButton').css('cursor', 'default');
}
