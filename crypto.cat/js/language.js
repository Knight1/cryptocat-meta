var Language = function() {};
(function(){

var language = {};
var defaultLanguage;

Language.setDefault = function(lang) {
	defaultLanguage = language[lang];
}

Language.set = function(lang) {
	lang = language[lang];
	$('body').css('font-family', lang['font-family']);
	$('html').attr('dir', lang['direction']);
	$('#introHeader').html(lang['mainWindow']['introHeader']);
	$('#introParagraph1').html(lang['mainWindow']['introParagraph1']);
	$('#introParagraph2').html(lang['mainWindow']['introParagraph2']);
	$('#project').html(lang['mainWindow']['project']);
	$('#blog').html(lang['mainWindow']['blog']);
	$('#source').html(lang['mainWindow']['source']);
	return lang;
}

language.en = {
	'language': 'en',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': '﻿Private Conversations for Everyone.',
		'introParagraph1': 'Cryptocat is an instant messaging platform that lets you easily have private conversations with friends. Messages are encrypted before leaving your screen and are protected from being viewed by any third party, even from us.',
		'introParagraph2': 'Cryptocat is free software built on open standards. Our development process is under continuous examination by a community of volunteers and enthusiasts. <a href="https://project.crypto.cat" target="_blank">Learn more about the Cryptocat Project</a>.',
		'project': 'Project',
		'blog': 'Blog',
		'source': 'Source',
		'supportedText': 'Cryptocat easily installs in your browser for quick access whenever you need it.',
		'unsupportedText': 'Cryptocat is currently only available for <a href="https://google.com/chrome" target="_blank">Google Chrome</a> and <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a>. Switch to one of the world\'s leading browsers today to use Cryptocat.',
		'getChrome': 'Get Cryptocat for Google Chrome',
		'getFirefox': 'Get Cryptocat for Mozilla Firefox',
		'getSafari': 'Get Cryptocat for Safari',
		'notSupported': 'Your Browser is Not Supported.'
	}
}

language.ca = {
	'language': 'ca',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': '﻿Converses privades per a tothom.',
		'introParagraph1': 'Cryptocat es una plataforma de missatgeria instantània que et permet mantenir converses privades fàcilment amb els amics. Els missatges es xifren abans de sortir de la teva pantalla i són protegits de ser vistos per terceres persones, incloses nosaltres.',
		'introParagraph2': 'Cryptocat és free software construït sobre estàndards oberts. El nostre procés de desenvolupament està en període d\'evaluació continuada per part d\'una comunitat de voluntaris i entusiastes. <a href="https://project.crypto.cat" target="_blank">Descobreix més sobre el Projecte Cryptocat</a>.',
		'project': 'Projecte',
		'blog': 'Bloc',
		'source': 'Font',
		'supportedText': 'Cryptocat s\'instal·la fàcilment al teu navegador per tenir-hi accés ràpidament quan ho necessitis.',
		'unsupportedText': 'Actualment, Cryptocat només està disponible per a <a href="https://google.com/chrome" target="_blank">Google Chrome</a> i <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a>. Canvia\'t avui a un dels navegadors més avançats per usar Cryptocat.',
		'getChrome': 'Aconsegueix Cryptocat per a Google Chrome',
		'getFirefox': 'Aconsegueix Cryptocat per a Mozilla Firefox',
		'getSafari': 'Aconsegueix Cryptocat per a Safari',
		'notSupported': 'El teu navegador no està suportat.'
	}
}

language.fr = {
	'language': 'fr',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': '﻿Conversations Privées Pour Tout le Monde.',
		'introParagraph1': 'Cryptocat est une plateforme de messagerie instantanée qui vous permet facilement d\'avoir des conversations privées avec des amis. Les messages sont cryptés avant de quitter votre écran et sont protégés contre leur lecture par un tiers, même de nous.',
		'introParagraph2': 'Cryptocat est un logiciel libre construit sur ​​des standards ouverts. Notre processus de développement est en cours d\'examen continu par une communauté de bénévoles et de passionnés. <a href="https://project.crypto.cat" target="_blank">Apprenez plus sur le projet Cryptocat</a>.',
		'project': 'Projet',
		'blog': 'Blog',
		'source': 'Source',
		'supportedText': 'Cryptocat s\'installe facilement dans votre navigateur pour un accès rapide chaque fois que vous en avez besoin.',
		'unsupportedText': 'Cryptocat est actuellement disponible pour <a href="https://google.com/chrome" target="_blank">Google Chrome</a> et <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a>. Installez un des principaux navigateurs du monde d\'aujourd\'hui pour utiliser Cryptocat.',
		'getChrome': 'Obtenez Cryptocat pour Google Chrome',
		'getFirefox': 'Obtenez Cryptocat pour Mozilla Firefox',
		'getSafari': 'Obtenez Cryptocat pour Safari',
		'notSupported': 'Votre Navigateur n\'est pas Supporté.'
	}
}

language.ar = {
	'language': 'ar',
	'direction': 'rtl',
	'font-family': 'Tahoma, DejaVu, Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': '﻿محادثات خصوصية وآمنة لجميع الأشخاص.',
		'introParagraph1': 'كريبتوكات هو برنامج للتراسل اللحظي، يتيح لك القيام بالمحادثات الآمنة والخصوصية مع أصدقائك وذلك من خلال تعمية (تشفير) الرسائل قبل مغادرتها لشاشة حاسوبك فتبقى محميّة من التعرض للإختراق من قبل الآخرين أو حتى نحن.',
		'introParagraph2': 'كريبتوكات هو برنامج مجاني مبني على معايير مفتوحة. عملية تطويره لا تزال تحت البحث والدراسة المستمرة من قبل مجموعة من المتطوعين والمتحمسين. اعرف المزيد عن مشروع كريبتوكات.',
		'project': 'مشروع',
		'blog': 'مدونة',
		'source': 'مصدر',
		'supportedText': 'كريبتوكات يتثبت بسهولة في متصفحك لإستعماله بسرعة الحاجة.',
		'unsupportedText': 'كريبتوكات حالياً ليس ملائم إلا مع Google Chrome و-Mozilla Firefox. سجل احدهم لإستعمال كريبتوكات.',
		'getChrome': 'إحصل على كريبتوكات ل-Google Chrome',
		'getFirefox': 'إحصل على كريبتوكات ل-Mozilla Firefox',
		'getSafari': 'إحصل على كريبتوكات ل-Safari',
		'notSupported': 'متصفحك ليس ملائم مع كريبتوكات.'
	}
}

language.it = {
	'language': 'it',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': 'Conversazioni Private per Tutti.',
		'introParagraph1': 'Cryptocat è una piattaforma di messaggistica istantanea che ti permette facilmente di avere conversazioni private con amici. I messaggi sono cifrati prima di lasciare il tuo schermo e protetti dall\'essere visti da terzi, compresi noi.',
		'introParagraph2': 'Cryptocat è un software free sviluppato su standard aperti. Il nostro processo di sviluppo è sotto continuo esame da una comunità di volontari e appassionati. <a href="https://project.crypto.cat" target="_blank">Impara di più sul Cryptocat Project.</a>',
		'project': 'Progetto',
		'blog': 'Blog',
		'source': 'Codice',
		'supportedText': 'Cryptocat si installa facilmente nel tuo browser per un accesso veloce ogni volta che ne hai bisogno.',
		'unsupportedText': 'Cryptocat è attualmente disponibile solo per Google Chrome e Mozilla Firefox. Passa ad uno dei principali browser al mondo di oggi per usare Cryptocat.',
		'getChrome': 'Scarica Cryptocat per Google Chrome',
		'getFirefox': 'Scarica Cryptocat per Mozilla Firefox',
		'getSafari': 'Scarica Cryptocat per Safari',
		'notSupported': 'Il tuo Browser Non è Supportato'
	}
}


})();