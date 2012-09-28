var Language = function() {};
(function(){

var language = {};

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
		'unsupportedText': 'Cryptocat is currently only available for <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> and <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Switch to one of the world\'s leading browsers today to use Cryptocat.',
		'getChrome': 'Get Cryptocat for Google Chrome',
		'getFirefox': 'Get Cryptocat for Mozilla Firefox',
		'getSafari': 'Get Cryptocat for Safari',
		'notSupported': 'Your Browser is Not Supported'
	}
}

language.lol = {
	'language': 'lol',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': '﻿I Can Haz Private Conversashuns?',
		'introParagraph1': 'Cryptocat iz an instant mesagin platform dat let u ezzily has private conversashuns wif frenz. Mesagez r encryptd befor leavin ur screen an r protectd frum bean viewd by any third party, even frum us.',
		'introParagraph2': 'Cryptocat iz free software built on open standardz. R development proces iz undr continuous examinashun by community ov volunteers an enthusiasts. <a href="https://project.crypto.cat" target="_blank">Lern moar bout teh Cryptocat Project</a>.',
		'project': 'Purroject',
		'blog': 'Blog',
		'source': 'Source',
		'supportedText': 'Cryptocat easily installs in ur browsr 4 quick acces whenevr u ned it.',
		'unsupportedText': 'Cryptocat iz currently only available 4 <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> an <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Switch 2 wan ov teh wurld\'s leadin browsers todai 2 use Cryptocat.',
		'getChrome': 'Git Cryptocat 4 Google Chrome',
		'getFirefox': 'Git Cryptocat 4 Mozilla Firefox',
		'getSafari': 'Git Cryptocat 4 Safari',
		'notSupported': 'Ur Browsr Iz Not Supportd'
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
		'unsupportedText': 'Actualment, Cryptocat només està disponible per a <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> i <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Canvia\'t avui a un dels navegadors més avançats per usar Cryptocat.',
		'getChrome': 'Aconsegueix Cryptocat per a Google Chrome',
		'getFirefox': 'Aconsegueix Cryptocat per a Mozilla Firefox',
		'getSafari': 'Aconsegueix Cryptocat per a Safari',
		'notSupported': 'El teu navegador no està suportat'
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
		'unsupportedText': 'Cryptocat est actuellement disponible pour <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> et <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Installez un des principaux navigateurs du monde d\'aujourd\'hui pour utiliser Cryptocat.',
		'getChrome': 'Obtenez Cryptocat pour Google Chrome',
		'getFirefox': 'Obtenez Cryptocat pour Mozilla Firefox',
		'getSafari': 'Obtenez Cryptocat pour Safari',
		'notSupported': 'Votre Navigateur n\'est pas Supporté'
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
		'unsupportedText': 'Cryptocat è attualmente disponibile solo per <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com">Mozilla Firefox</a> e <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Passa ad uno dei principali browser al mondo di oggi per usare Cryptocat.',
		'getChrome': 'Scarica Cryptocat per Google Chrome',
		'getFirefox': 'Scarica Cryptocat per Mozilla Firefox',
		'getSafari': 'Scarica Cryptocat per Safari',
		'notSupported': 'Il tuo Browser Non è Supportato'
	}
}

language.da = {
	'language': 'da',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': '﻿Privat Samtale for Alle.',
		'introParagraph1': 'Cryptocat er en chat platform der giver dig nem adgang til private samtaler. Besked er krypteret før den forlader din skærm og beskyttet så ingen tredie part kan se dem, selv ikke os.',
		'introParagraph2': 'Cryptocat er free software bygget på open standard. Udviklingsprocessen er under konstant eksaminering af et community af frivillige og entusiaster. <a href="https://project.crypto.cat" target="_blank">Lær mere om Cryptocat projektet.</a>.',
		'project': 'Projekt',
		'blog': 'Blog',
		'source': 'Kildekode',
		'supportedText': 'Cryptocat installeres nemt i din browser så du hurtigt kan bruge den, når du har brug for den.',
		'unsupportedText': 'Cryptocat er i øjeblikket kun tilgængelig i <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> og <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Skift til en af disse browsere idag for at bruge Cryptocat.',
		'getChrome': 'Hent Cryptocat til Google Chrome',
		'getFirefox': 'Hent Cryptocat til Mozilla Firefox',
		'getSafari': 'Hent Cryptocat til Safari',
		'notSupported': 'Din browser understøttes ikke'
	}
}

language.es = {
	'language': 'es',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': '﻿Conversaciones privadas para todos.',
		'introParagraph1': 'Cryptocat es una plataforma de mensajería instantánea que te permite tener conversaciones privadas facilmente con tus amigos. Los mensajes son encriptados antes de dejar tu computador y son protegidos de ser vistos por alguna persona ajena, incluidos nosotros.',
		'introParagraph2': 'Cryptocat es un software libre construido sobre estándares abiertos. Nuestro proceso de desarrollo esta en un continuo período de evaluación por una comunidad de voluntarios y entusiastas. <a href="https://project.crypto.cat" target="_blank">Descubre mas sobre el Proyecto Cryptocat</a>.',
		'project': 'Proyecto',
		'blog': 'Blog',
		'source': 'Fuente',
		'supportedText': 'Cryptocat se instala fácilmente en tu navegador para acceder rápidamente cada vez que lo necesites.',
		'unsupportedText': 'Cryptocat está disponible solo para <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> y <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Cámbiate a uno de los navegadores más avanzados ahora para usar Cryptocat.',
		'getChrome': 'Consigue Cryptocat para Google Chrome',
		'getFirefox': 'Consigue Cryptocat para Mozilla Firefox',
		'getSafari': 'Consigue Cryptocat para Safari',
		'notSupported': 'Tu navegador no está soportado'
	}
}

language.fa = {
	'language': 'fa',
	'direction': 'rtl',
	'font-family': 'Tahoma, DejaVu, Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': '﻿گفتگوی خصوصی برای تمامی افراد.',
		'introParagraph1': 'کریپتوکت یک پیام‌سان فوری است که شما می‌توانید به راحتی با دوستان خود گفتگوی خصوصی داشته باشید. تمامی پیام‌ها قبل از ترک صفحه‌ی نمایش شما، کدگذاری می‌شوند و قابل مشاهده و خواندن توسط دیگر افراد، از جمله ما نخواهند بود.',
		'introParagraph2': 'کریپتوکت یک نرم‌افزار آزاد بر مبانی استانداردهای باز است. فرآیند توسعه‌ی به صورت مستمر توسط افراد داوطلب و علاقه‌مند مورد آزمایش و بررسی قرار می‌گیرد.'
		+ 'در مورد پروژه‌ی کریپتوکت بیشتر بدانید.',
		'project': 'پروژه',
		'blog': 'وبلاگ',
		'source': 'منبع',
		'supportedText': 'کریپتوکت برای دسترسی سریع به آن در هر زمان که به آن نیاز دارید، به راحتی بر روی مرورگر شما نصب می‌شود.',
		'unsupportedText': 'کریپتوکت هم اکنون تنها برای مرورگرهای گوگل کروم و موزیلا فایرفاکس در دسترس است. به یکی از این مرورگرهای مطرح در جهان مهاجرت کنید و از کریپتوکت استفاده کنید.',
		'getChrome': 'دریافت کریپتوکت برای گوگل کروم',
		'getFirefox': 'دریافت کریپتوکت برای موزیلا فایرفاکس',
		'getSafari': 'دریافت کریپتوکت برای سفاري',
		'notSupported': 'مرورگر شما پشتیبانی نمی‌شود.'
	}
}

language.eu = {
	'language': 'eu',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': '﻿Elkarrizketa pribatuak edonorentzat.',
		'introParagraph1': 'Cryptocat berehalako mezularitza plataforma da, zeinak era errazean lagunekin elkarrizketa pribatuak izatea ahalbidetzen duen. Mezuak zifratu egiten dira ordenagailua utzi baino lehen eta kanpoko inork, gu barne, ikusi ezin ditzan babesten dira.',
		'introParagraph2': 'Cryptocat software librea da, estandar irekien gainean eraikia. Gure garapen prozesua boluntario eta zalez osaturiko komunitate baten ikuskapen jarraitupean dago. <a href="https://project.crypto.cat" target="_blank">Cryptocat proiektuari buruz argibide gehiago</a>.',
		'project': 'Proiektua',
		'blog': 'Blog',
		'source': 'Iturburua',
		'supportedText': 'Cryptocat era errazean instalatzen da zure nabigatzailean, behar duzunerako sarbide azkarra eskainiz.',
		'unsupportedText': 'Egun, Cryptocat <a href="https://google.com/chrome" target="_blank">Google Chromerako</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefoxrako</a> eta <a href="http://www.apple.com/safari/" target="_blank">Safarirako</a> dago bakarrik eskuragarri. Aldatu munduko nabigatzaile nagusietako batera Cryptocat erabili ahal izateko.',
		'getChrome': 'Eskuratu Cryptocat Google Chrome',
		'getFirefox': 'Eskuratu Cryptocat Mozilla Firefoxrako',
		'getSafari': 'Eskuratu Cryptocat Safarirako',
		'notSupported': 'Zure nabigatzailea ez dago onartuta'
	}
}

language.cs = {
	'language': 'cs',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': '﻿Soukromý pokec pro všechny.',
		'introParagraph1': 'Cryptocat je instantní komunikační platforma, která umožňuje soukromé rozhovory s přáteli. Zprávy jsou šifrovány před odesláním z Vaší obrazovky a jsou chráněny před prohlížením jakoukoli třetí stranou, včetně nás.',
		'introParagraph2': 'Cryptocat je gratis software postavený na standardech open software. Náš vývojový proces je pod konstantním dohledem společenstva dobrovolníků a nadšenců. <a href="https://project.crypto.cat" target="_blank">Přečtěte si více o projektu Cryptocat</a>.',
		'project': 'Projekt',
		'blog': 'Blog',
		'source': 'Zdroj',
		'supportedText': 'Cryptocat se snadno nainstaluje ve vašem prohlížeči pro rychlý přístup, kdykoli jej potřebujete.',
		'unsupportedText': 'Cryptocat je v současné době k dispozici pouze pro <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> a <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Začněte užívat jeden ze světově vůdčích prohlížečů abyste mohli používat Cryptocat.',
		'getChrome': 'Stáhnout Cryptocat pro Google Chrome',
		'getFirefox': 'Stáhnout Cryptocat pro Mozilla Firefox',
		'getSafari': 'Stáhnout Cryptocat pro Safari',
		'notSupported': 'Váš prohlížeč není podporován'
	}
}

language.de = {
	'language': 'de',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': '﻿Privates Chatten für alle.',
		'introParagraph1': 'Cryptocat ist eine Instant-Messaging Plattform, die dir erlaubt, private Konversationen mit Freunden zu führen. Die Nachrichten werden noch vor dem Absenden verschlüsselt und sind somit vor Fremden geschützt und nicht mal wir können sie lesen.',
		'introParagraph2': 'Cryptocat ist Freie Software, die auf offenen Standards basiert. Unser Entwicklungsprozess wird ständig von einer Gemeinschaft freiwilliger Interessenten überprüft. <a href="https://project.crypto.cat" target="_blank">Finde mehr über das Cryptocat Projekt heraus</a>.',
		'project': 'Projekt',
		'blog': 'Blog',
		'source': 'Quelltext',
		'supportedText': 'Cryptocat wird im Browser installiert und bietet jederzeit einen schnellen und einfachen Zugriff.',
		'unsupportedText': 'Derzeit ist Cryptocat nur für <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> und <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Wechsel noch heute zu einem der weltweit führenden Browser um Cryptocat zu benutzen.',
		'getChrome': 'Hole dir Cryptocat für Google Chrome',
		'getFirefox': 'Hole dir Cryptocat für Mozilla Firefox',
		'getSafari': 'Hole dir Cryptocat für Safari',
		'notSupported': 'Dein Browser wird leider nicht unterstützt'
	}
}

language.el = {
	'language': 'el',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': '﻿Ιδιωτικές Συνομιλίες για Όλους.',
		'introParagraph1': 'Cryptocat είναι μια πλατφόρμα άμεσων μηνυμάτων που σας επιτρέπει με εύκολο τρόπο να συνομιλείτε ιδιωτικά με φίλους. Τα μηνύματα κρυπτογραφούνται πριν εγκαταλείψουν την οθόνη σας και η θέασή τους προστατεύεται από τρίτους, ακόμα κι από εμάς.',
		'introParagraph2': 'Cryptocat είναι ελεύθερο λογισμικό βασισμένο σε ανοιχτά πρότυπα. Η διαδικασία ανάπτυξης που ακολουθούμε εξετάζεται συνεχώς από μια κοινότητα εθελοντών και θιασωτών. <a href="https://project.crypto.cat" target="_blank">Μάθετε περισσότερα για το Cryptocat Project</a>.',
		'project': 'Πρότζεκτ',
		'blog': 'Blog',
		'source': 'Πηγή',
		'supportedText': 'Cryptocat εγκαθίσταται εύκολα στον browser σας ώστε να είναι άμεσα διαθέσιμο όποτε το χρειαστείτε.',
		'unsupportedText': 'Cryptocat είναι προς το παρόν διαθέσιμο για τον <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> και τον <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Αλλάξτε και σεις έναν από τους καλύτερους browsers που υπάρχουν για να χρησιμοποιήσετε το Cryptocat.',
		'getChrome': 'Κατεβάστε το Cryptocat για Google Chrome',
		'getFirefox': 'Κατεβάστε το Cryptocat για Mozilla Firefox',
		'getSafari': 'Κατεβάστε το Cryptocat για Safari',
		'notSupported': 'O browser σας δεν υποστηρίζεται'
	}
}

language.nl = {
	'language': 'nl',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': 'Privé Conversaties voor Iedereen.',
		'introParagraph1': 'Cryptocat is een instant messaging platform welke u gemakkelijk privé conversaties met vrienden laat hebben. Berichten worden versleuteld voordat u uw scherm verlaat en zijn beschermd tegen het afluisteren door derden, zelfs door ons.',
		'introParagraph2': 'Cryptocat is vrije software gebaseerd op open standaarden. De ontwikkeling van Cryptocat is onder voortdurend toezicht van een gemeenschap van vrijwilligers en enthousiastelingen. <a href="https://project.crypto.cat" target="_blank">Leer meer over het Cryptocat Project</a>.',
		'project': 'Project',
		'blog': 'Blog',
		'source': 'Broncode',
		'supportedText': 'Cryptocat installeert zich makkelijk in uw browser en is dus altijd binnen handbereik.',
		'unsupportedText': 'Cryptocat is momenteel alleen beschikbaar voor <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> en <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Gebruik een van deze\'s werelds beste browsers om Cryptocat te gebruiken.',
		'getChrome': 'Download Cryptocat voor Google Chrome',
		'getFirefox': 'Download Cryptocat voor Mozilla Firefox',
		'getSafari': 'Download Cryptocat voor Safari',
		'notSupported': 'Uw browser wordt niet ondersteund'
	}
}

language.pt = {
	'language': 'pt',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': 'Conversa privada para todos.',
		'introParagraph1': 'Cryptocat é uma plataforma de mensagens instantâneas que permite que você tenha conversas privadas com seus amigos. As mensagens são criptografadas antes de sair do seu computador e são protegidas de serem vistas por terceiros, até de nós.',
		'introParagraph2': 'Cryptocat é um software livre construído com padrões abertos. Nosso processo de desenvolvimento está sob examinação contínua por uma comunidade de voluntários e entusiastas. <a href="https://project.crypto.cat" target="_blank">Aprenda mais sobre o Projeto Cryptocat</a>.',
		'project': 'Projeto',
		'blog': 'Blog',
		'source': 'Código',
		'supportedText': 'Cryptocat se instala facilmente no seu navegador, permitindo fácil e rápido acesso assim que necessário.',
		'unsupportedText': 'Cryptocat é disponibilizado nas versões para <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> e <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Baixe um dos navegadores mais usados do mundo para utilizar Cryptocat.',
		'getChrome': 'Baixe o Cryptocat para Google Chrome',
		'getFirefox': 'Baixe o Cryptocat para Mozilla Firefox',
		'getSafari': 'Baixe o Cryptocat para Safari',
		'notSupported': 'Seu navegador não é compatível'
	}
}

language.ru = {
	'language': 'ru',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': 'Частные беседы для всех.',
		'introParagraph1': 'Cryptocat - это платформа обмена мнгновенными сообщениями, которая позволяет вам приватно общаться с вашими друзьями. Сообщения зашифрованы и защищены от просмотра посторонними людьми, даже разработчиками.',
		'introParagraph2': 'Cryptocat - это свободное программное обеспечение, основанное на открытых стандартах. Наш процесс разработки ведется постоянным контролем сообщества добровольцев и энтузиастов. <a href="https://project.crypto.cat" target="_blank">Узнать больше про проект Cryptocat</a>.',
		'project': 'Проект',
		'blog': 'Блог',
		'source': 'Источник',
		'supportedText': 'Cryptocat легко установить в ваш браузер и потом быстро запускать, когда он вам нужен.',
		'unsupportedText': 'Текущая версия Cryptocat доступна только для <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> и <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Для использования Cryptocat переходите на один из этих популярных браузеров.',
		'getChrome': 'Скачать Cryptocat для Google Chrome',
		'getFirefox': 'Скачать Cryptocat для Mozilla Firefox',
		'getSafari': 'Скачать Cryptocat для Safari',
		'notSupported': 'Ваш браузер не поддерживается'
	}
}

language.sv = {
	'language': 'sv',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': 'Privata konversationer för alla.',
		'introParagraph1': 'Cryptocat är en plattform för direktkommunikation som enkelt ger dig möjlighet till privata konversationer med dina vänner. Meddelanden är krypterade innan de lämnar din skärm och är skyddade för insyn av all tredjepart, även oss.',
		'introParagraph2': 'Cryptopcat är en öppen mjukvara byggd på öppna standarder. Vår utvecklingsprocess är under kontinuerlig övervakning av en community bestående av volontärer och entusiaster. <a href="https://project.crypto.cat" target="_blank">Lär dig mer om Cryptocat Projektet</a>.',
		'project': 'Projekt',
		'blog': 'Blogg',
		'source': 'Källa',
		'supportedText': 'Cryptocat installeras enkelt i din webbläsare för snabb tillgång när du än behöver den.',
		'unsupportedText': 'Cryptocat är för tillfället endast tillgänglig för <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> och <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Byt till en av dessa världsledande webbläsare idag för att använda Cryptocat.',
		'getChrome': 'Skaffa cryptocat för Google Chrome',
		'getFirefox': 'Skaffa cryptocat för Mozilla Firefox',
		'getSafari': 'Skaffa cryptocat för Safari',
		'notSupported': 'Din webbläsare stöds inte'
	}
}

language.pl = {
	'language': 'pl',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': 'Prywatne rozmowy dla każdego.',
		'introParagraph1': 'Cryptocat jest platformą do błyskawicznej komunikacji, która pozwala prowadzić prywatne rozmowy z przyjaciółmi w prosty sposób. Wiadomości są szyfrowane jeszcze zanim je wyślesz i są chronione przed osobami trzecimi, nawet przed nami.',
		'introParagraph2': 'Cryptocat jest darmowym oprogramowaniem opartym na otwartych standardach. Nasz proces rozwoju jest pod ciągłą kontrolą ochotników i entuzjastów. <a href="https://project.crypto.cat" target="_blank">Dowiedz się więcej o projekcie Cryptocat</a>.',
		'project': 'Projekt',
		'blog': 'Blog',
		'source': 'Źródło',
		'supportedText': 'Cryptocat z radością zainstaluje się w twojej przeglądarce, żebyś miał go pod ręką.',
		'unsupportedText': 'Cryptocat jest dostępny dla <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> i <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Przesiądź się na jedną z tych wypasionych przeglądarek, żeby poużywać Cryptocata.',
		'getChrome': 'Ściągnij Cryptocat dla Google Chrome',
		'getFirefox': 'Ściągnij Cryptocat dla Mozilla Firefox',
		'getSafari': 'Ściągnij Cryptocat dla Safari',
		'notSupported': 'Twoja przeglądarka jest nie wspierana'
	}
}

language.he = {
	'language': 'he',
	'direction': 'rtl',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': 'שיחות חופשיות לכולם.',
		'introParagraph1': 'Cryptocat היא פלטפורמת מסרים מידיים שמאפשרת לך לנהל שיחות פרטיות עם חברים בקלות. ההודעות מוצפנות לפני עזיבת המסך שלך ומוגנות מצפיה על ידי צד שלישי, אפילו מאיתנו.',
		'introParagraph2': 'Cryptocat היא תוכנה חופשית ובנויה על סטנדרטים פתוחים. תהליך הפיתוח שלנו נמצא תחת בקרה מתמשכת על ידי קהילה של מתנדבי <a href="https://project.crypto.cat" target="_blank">ם. קראו עוד על פרוייקט Cryptocat</a>.',
		'project': 'פרוייקט',
		'blog': 'בלוג',
		'source': 'מקור',
		'supportedText': 'Cryptocat מותקן בקלות בדפדפן שלך לגישה מהירה מתי שנדרש.',
		'unsupportedText': 'Cryptocat זמין כרגע רק עבור <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> ו-<a href="http://www.apple.com/safari/" target="_blank">Safari</a>. רצוי לעבור לאחד הדפדפנים המובילים בעולם עוד היום על מנת להשתמש בCryptocat.',
		'getChrome': 'הורד את Cryptocat לGoogle Chrome',
		'getFirefox': 'הורד את Cryptocat לGoogle Chrome',
		'getSafari': 'הורד את Cryptocat לSafari',
		'notSupported': 'הדפדפן שלך אינו נתמך'
	}
}

language.vi = {
	'language': 'vi',
	'direction': 'ltr',
	'font-family': 'Helvetica, Arial, Verdana',
	'mainWindow': {
		'introHeader': 'Đối thoại riêng tư cho mọi người.',
		'introParagraph1': 'Cryptocat là hệ thống tin nhắn nhanh để bạn dể dàng trao đổi thông tin với bạn bè. Các tin nhắn đều được mã hoá trước khi được gửi đi và được bảo vệ chặt chẽ, ngoài bạn và người nhận tin nhắn ra, không ai đọc được ngay cả chúng tôi.',
		'introParagraph2': 'Cryptocat là chương trình miễn phí được thành lập theo dạng mở rộng. Quá trình phát triển của chúng tôi luôn được giám sát bởi một cộng đồng tình nguyện viên. <a href="https://project.crypto.cat" target="_blank">Hãy tìm hiểu thêm về Cryptocat Project</a>.',
		'project': 'Dự Án',
		'blog': 'Blog',
		'source': 'Nguồn',
		'supportedText': 'Cài đặt Cryptocat vào trình duyêt để truy cập nhanh chóng khi bạn cần dùng.',
		'unsupportedText': 'Hiện thời Cryptocat chỉ xử dụng được qua trình duyệt web <a href="https://google.com/chrome" target="_blank">Google Chrome</a>, <a href="http://getfirefox.com" target="_blank">Mozilla Firefox</a> và <a href="http://www.apple.com/safari/" target="_blank">Safari</a>. Hãy đổi qua một trong những trình duyệt hàng đầu thế giới này hôm nay để xài Cryptocat.',
		'getChrome': 'Tải Cryptocat về cho Google Chrome',
		'getFirefox': 'Tải Cryptocat về cho Mozilla Firefox',
		'getSafari': 'Tải Cryptocat về cho Safari',
		'notSupported': 'Trình duyệt của bạn không được hỗ trợ'
	}
}

language['zh-cn'] = {
	'language': 'zh-cn',
	'direction': 'ltr',
	'font-family': 'Tahoma, "Microsoft Yahei","微软雅黑", Helvetica, Arial, sans-serif, STXihei, "华文细黑"',
	'mainWindow': {
		'introHeader': '属于每个人的私人对话。',
		'introParagraph1': 'Cryptocat是一个即时通讯平台，可以让你轻松地与朋友拥有的私人对话。讯息在离开你的屏幕画面前进行加密及保护，好让防止任何第三者查看，包括我们。',
		'introParagraph2': 'Cryptocat是建于开放规格上的免​​费软件。我们的开发过程是由公众志愿者和爱好者进行持续的检测。了解更多 <a href="https://project.crypto.cat" target="_blank">Cryptocat的项目。</a>',
		'project': '项目',
		'blog': '博客',
		'source': '源代码',
		'supportedText': 'Cryptocat很容易安装在您的浏览器，以便快速访问。',
		'unsupportedText': 'Cryptocat目前只适用于谷歌和<a href="https://google.com/chrome" target="_blank">Chrome</a> 和 <a href="http://getfirefox.com" target="_blank">浏览器Mozilla的火狐浏览器。</a> Cryptocat是目前世界领先的浏览器之一。',
		'getChrome': '由谷歌浏览器下载Cryptocat',
		'getFirefox': '由Mozilla Firefox浏览器下载Cryptocat',
		'getSafari': '由Safari浏览器下载Cryptocat',
		'notSupported': '您的浏览器并不支援。'
	}
}

language['zh-hk'] = {
	'language': 'zh-hk',
	'direction': 'ltr',
	'font-family': 'Tahoma, "Microsoft Yahei","微软雅黑", Helvetica, Arial, sans-serif, STXihei, "华文细黑"',
	'mainWindow': {
		'introHeader': '屬於每個人的私人對話。',
		'introParagraph1': 'Cryptocat是一個即時通訊平台，可以讓你輕鬆地與朋友擁有的私人對話。訊息在離開你的屏幕畫面前進行加密及保護，好讓防止任何第三者查看，包括我們。',
		'introParagraph2': 'Cryptocat是建於開放規格上的免費軟件。我們的開發過程是由公眾志願者和愛好者進行持續的檢測。了解更多 <a href="https://project.crypto.cat" target="_blank">Cryptocat的項目。</a>',
		'project': '項目',
		'blog': '博客',
		'source': '源代碼',
		'supportedText': 'Cryptocat很容易安裝在您的瀏覽器，以便快速訪問。',
		'unsupportedText': 'Cryptocat目前只適用於谷歌<a href="https://google.com/chrome" target="_blank">Chrome</a> 和 <a href="http://getfirefox.com" target="_blank">浏览器Mozilla的火狐浏览器。</a> 瀏覽器。Cryptocat是目前世界領先的瀏覽器之一。',
		'getChrome': '由谷歌瀏覽器下載Cryptocat',
		'getFirefox': '由Mozilla Firefox下載Cryptocat',
		'getSafari': '由Safari下載Cryptocat',
		'notSupported': '您的瀏覽器並不支援。'
	}
}

language['zh-tw'] = language['zh-hk'];
language['zh-sg'] = language['zh-cn'];


})();