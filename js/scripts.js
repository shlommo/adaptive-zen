/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _data = __webpack_require__(1);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getArticleMarkup = function getArticleMarkup(dataItem) {
	  var imageOnlyClass = '';
	  var imageUrl = '';
	  var imageFormat = '';
	  var dataImageUrl = dataItem.image;
	  var articleImg = '';
	  var articleChannel = '';
	  var articleChannelClass = '';
	  var articleDescription = '';
	  var articleFooter = '';
	  var descOnlyClass = '';
	
	  if (typeof dataItem === "undefined") {
	    return '';
	  }
	
	  if (dataItem.hasOwnProperty('channelName')) {
	    articleChannel = '<span class="article__channel">' + dataItem.channelName + '</span>';
	  }
	
	  articleFooter = '<div class="article__footer">\n                      ' + articleChannel + '\n                      <span class="article__icon-btns-item icon-btn icon-btn--action"></span>\n                      <span class="article__icon-btns-item icon-btn icon-btn--heart"></span>\n                    </div>';
	
	  if (dataItem.hasOwnProperty('image')) {
	    imageFormat = dataImageUrl.slice(dataImageUrl.indexOf('.') + 1);
	    imageUrl = dataImageUrl.slice(0, dataImageUrl.indexOf('.'));
	
	    if (dataItem.size === 's') {
	      articleImg = '<picture class="article__img-wrapper">\n                      <source srcset="' + imageUrl + '@3x.' + imageFormat + '" media="(min-width: 992px)">\n                      <source srcset="' + imageUrl + '@2x.' + imageFormat + '" media="(max-width: 991px)">\n                      <img class="img-responsive" src="' + imageUrl + '.' + imageFormat + '">\n                      ' + articleFooter + '\n                    </picture>';
	    } else {
	      articleImg = '<picture class="article__img-wrapper">\n                      <source srcset="' + imageUrl + '@3x.' + imageFormat + '" media="(min-width: 992px)">\n                      <source srcset="' + imageUrl + '@2x.' + imageFormat + '" media="(max-width: 991px)">\n                      <img class="img-responsive" src="' + imageUrl + '.' + imageFormat + '">\n                    </picture>';
	    }
	  }
	
	  if (!dataItem.hasOwnProperty('description')) {
	    imageOnlyClass = 'article--img-only';
	    articleDescription = '';
	  } else {
	    if (dataItem.size === 's') {
	      descOnlyClass = 'article--desc-only';
	    }
	    articleDescription = '<div class="article__description">\n                            <p>' + dataItem.description + '</p>\n                            ' + articleFooter + '\n                          </div>';
	  }
	
	  return '<li class="app-grid__cell app-grid__cell--' + dataItem.size + ' article ' + imageOnlyClass + ' ' + descOnlyClass + '">\n            <a class="article__link" href="#">\n              <div class="article__content-wrapper">\n                  <div class="article__content">\n                    <h2 class="article__title" style="color: ' + dataItem.titleColor + '">\n                      <span>' + dataItem.title + '</span>\n                    </h2>\n\n                    ' + articleDescription + '\n\n                    ' + articleImg + '\n                  </div>\n              </div>\n            </a>\n          </li>';
	};
	
	var getNodeFromMarkup = function getNodeFromMarkup(markupTemplate) {
	  var div = document.createElement('div');
	  div.innerHTML = markupTemplate;
	  return div.firstChild;
	};
	
	var renderArticles = function renderArticles(data) {
	  var articlesContainer = document.getElementById('articlesContainer');
	  var articleMarkup = '';
	  var articleNode = '';
	
	  data.map(function (item) {
	    articleMarkup = getArticleMarkup(item);
	    articleNode = getNodeFromMarkup(articleMarkup);
	
	    articlesContainer.appendChild(articleNode);
	  });
	};
	
	renderArticles(_data2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = [{
	    title: "Civilization VI: Rise and Fall review: A few turns closer to a Golden Age",
	    titleColor: '#576433',
	    image: "img/1.png",
	    description: "Every Civilization game since Civilization IV has followed the same trajectory: the initial release remixes and reinterprets some base systems from the previous game, but franchise veterans deem it anemic because it has fewer systems and features than its fully expanded predecessor. From there, new expansions gradually reintroduce the complexity that was lost in the move to a new game until many of those players conclude that it is the best game in the series yet.",
	    size: "m"
	}, {
	    title: "Для установки патча первого дня владельцам Kingdom Come придётся загрузить 29 ГБ",
	    titleColor: '#3a2210',
	    image: "img/2.png",
	    description: "Ещё до релиза у Kingdom Come: Deliverance вышло два патча «первого дня».\nОбновление до версии 1.01 требовало загрузить 23 ГБ.\nДля сравнения, вся игра на ПК, согласно данным Steam, занимает около 40 ГБ.",
	    size: "m"
	}, {
	    title: "Первому игроку приготовиться: 80-е – 90-е",
	    titleColor: '#334d5b',
	    image: "img/3.png",
	    size: "s"
	}, {
	    title: "The Chrome extensions we can’t live without",
	    titleColor: '#487eb6',
	    image: "img/4.png",
	    size: "s"
	}, {
	    title: "В течение десяти лет будет разработан сверхумный ИИ: он начнёт вытеснять людей практически из всех профессий",
	    titleColor: '#467372',
	    image: "img/5.png",
	    size: "s"
	}, {
	    title: "Где хранить вещи в маленькой квартире: 5 советов",
	    titleColor: '#605a54',
	    image: "img/6.png",
	    description: "В маленькой квартире площадь на вес золота. Сегодня мы поговорим о том как организовать хранение вещей и использовать пространство рационально. Маленькие квартиры требуют смелых и не стандартных решений. Я подготовил пять советов, которые помогут найти скрытые резервы и сделать квартиру удобнее.",
	    size: "l"
	}, {
	    title: "Please tell me Spotify’s new partnership with Discord will fix its bad gamer playlists",
	    titleColor: '#36393e',
	    image: "img/7.png",
	    description: "Discord will now allow users to connect their Spotify accounts on the platform. They’ll be able to share what music they’re listening to on their Discord profiles, or — if they have a Spotify Premium account — simultaneously listen to music within a server.",
	    size: "m"
	}, {
	    title: "Новый босс Microsoft о своей новой роли, достижениях и том, что будет в 2018 году",
	    titleColor: '#6679c1',
	    image: "img/8.png",
	    description: "17 января новость о том, что Хелен Чианг назначена новым руководителем Minecraft в Microsoft, вызвала настоящую бурю одобрения в обсуждениях о роли женщин в технологических и игровых компаниях. Чианг заменила Мэтта Бути, который получил должность руководителя Microsoft Studios. И она в этом деле не новичок — ранее она контролировала деятельность подразделения, и её даже можно назвать ветераном Xbox.  Кроме того Чианг — первая женщина, возглавившая крупную игровую студию, а ещё она страстный поклонник цифрового мира Minecraft.",
	    size: "m"
	}, {
	    title: "9 главных игровых релизов февраля",
	    titleColor: '#605a54',
	    image: "img/9.png",
	    description: "Представляю вам подборку релизов новых игр, которые ожидают нас в феврале.",
	    size: "l"
	}, {
	    title: "Netflix’s Altered Carbon gave me what Blade Runner 2049 couldn’t",
	    titleColor: '#303f36',
	    image: "img/10.png",
	    size: "s"
	}, {
	    title: "Лучшие игрушки",
	    titleColor: '#000000',
	    description: "Проверить это проще всего на примере мобилы. Если подарить ребенку игрушечный китайский телефон, то на него будет потрачено полтора дня внимания. А если подарить ребенку даже испорченный, но настоящий мобильник, то ребенок будет с ним играться бесконечно. То же самое касается и всех остальных игрушек. Дать ребенку возможность порезать юсб-провод ножницами иногда гораздо дороже и важнее, чем подарить радиоуправляемый экскаватор.",
	    size: "s",
	    channelName: 'Артемий Лебедев'
	}, {
	    title: "Исполнительница роли Молчуньи из MGS V в очередной раз намекнула на участие в Death Stranding",
	    titleColor: '#5f4137',
	    image: "img/11.png",
	    size: "s"
	}, {
	    title: "Что такое «ПОКА» при прощании?",
	    titleColor: '#535353',
	    image: "img/12.png",
	    description: "Словами «добрый день» или «здравствуйте» мы желаем человеку хорошего дня или здоровья, это всего лишь форма приветствия. Но если смысл этих фраз прозрачен, то совсем другая ситуация со словом «пока». Что оно означает и откуда взялось в русском языке?",
	    size: "m"
	}, {
	    title: "Почему люди верят в плоскую Землю и не верят в высадку на шарообразную Луну?",
	    titleColor: '#437084',
	    image: "img/13.png",
	    description: "Невинная шутка, наложившись на ограниченность знаний очень многих людей, переросла в откровенную проблему. Усугублению же этой проблемы способствует то, что среди «адептов плоской Земли» очень много медийных личностей. Я ни в коем случае не провожу корреляцию между медийностью и глупостью. Здесь нужно понимать, что на популярных людей постоянно направлены микрофоны и камеры СМИ и достаточно всего одного неосторожного заявления для его массового распространения. Куда больше глупых людей среди комментаторов, ненавистников Маска, масонов, рептилоидов и прочей нечести. Именно эти люди и вносят основной вклад в распространение ложной откровенно необъективной информации. Ведь куда проще свалить всё на заговор древней цивилизации с Нибиру, чем сесть и разобраться — этим и пользуются манипуляторы.",
	    size: "m"
	}, {
	    title: "Kylie Jenner Now Has the Most Liked Instagram Post Ever",
	    titleColor: '#937175',
	    image: "img/14.png",
	    size: "s"
	}, {
	    title: "Kendrick Lamar to Ban Photos at His Live Shows",
	    titleColor: '#487eb6',
	    image: "img/15.png",
	    size: "s"
	}, {
	    title: "«Одноклассники» сделали windows-заповедник для вымирающих игр на Flash",
	    titleColor: '#000000',
	    description: "«Одноклассники» выпустили десктопное игровое приложение «ОК Игры» для компьютеров с операционной системой Windows, с его помощью пользователи могут быстро запускать игры из ОК на своем компьютере.",
	    size: "s",
	    channelName: 'Роем'
	}];

/***/ })
/******/ ]);
//# sourceMappingURL=scripts.js.map