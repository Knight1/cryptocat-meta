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

var downloadButton = [];
downloadButton['chrome'] = '<a href="#"><div id="downloadButton">'
	+ '<img id="browserLogo" src="img/chrome.png" alt="Google Chrome" />'
	+ '<h1>Download for Google Chrome</h1>'
	+ '</div>'
	+ '</a>';
downloadButton['firefox'] = '<a href="#"><div id="downloadButton">'
	+ '<img id="browserLogo" src="img/firefox.png" alt="Mozilla Firefox" />'
	+ '<h1>Download for Mozilla Firefox</h1>'
	+ '</div>'
	+ '</a>';
downloadButton['other'] = '<a href="#"><div id="downloadButton">'
	+ '<img id="browserLogo" src="img/chrome.png" alt="Google Chrome" />'
	+ '<h1>Your Browser is Not Supported.</h1>'
	+ '</div>'
	+ '</a>';

if (navigator.userAgent.match('Chrome')) {
	$('#download').html(downloadButton['chrome']);
}
else if (navigator.userAgent.match('Firefox')) {
	$('#download').html(downloadButton['firefox']);
	$('#browserLogo').css('bottom', '8px');
}
else {
	$('#download').html(downloadButton['other']);
}