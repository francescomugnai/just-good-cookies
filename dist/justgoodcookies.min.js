(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.string.replace.js'), require('core-js/modules/es.object.keys.js'), require('core-js/modules/es.object.entries.js'), require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/web.dom-collections.for-each.js'), require('core-js/modules/es.array.includes.js'), require('core-js/modules/es.string.includes.js'), require('core-js/modules/es.object.values.js'), require('core-js/modules/es.regexp.to-string.js'), require('core-js/modules/es.array.slice.js'), require('core-js/modules/es.string.split.js'), require('core-js/modules/es.string.trim.js'), require('core-js/modules/es.json.stringify.js'), require('core-js/modules/es.regexp.test.js'), require('core-js/modules/es.array.join.js'), require('core-js/modules/es.array.map.js'), require('core-js/modules/es.symbol.js'), require('core-js/modules/es.symbol.description.js'), require('core-js/modules/es.array.iterator.js'), require('core-js/modules/es.string.iterator.js'), require('core-js/modules/web.dom-collections.iterator.js'), require('core-js/modules/web.url.js'), require('core-js/modules/web.url-search-params.js'), require('core-js/modules/es.array.index-of.js'), require('core-js/modules/es.string.match.js')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.regexp.exec.js', 'core-js/modules/es.string.replace.js', 'core-js/modules/es.object.keys.js', 'core-js/modules/es.object.entries.js', 'core-js/modules/es.array.concat.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/web.dom-collections.for-each.js', 'core-js/modules/es.array.includes.js', 'core-js/modules/es.string.includes.js', 'core-js/modules/es.object.values.js', 'core-js/modules/es.regexp.to-string.js', 'core-js/modules/es.array.slice.js', 'core-js/modules/es.string.split.js', 'core-js/modules/es.string.trim.js', 'core-js/modules/es.json.stringify.js', 'core-js/modules/es.regexp.test.js', 'core-js/modules/es.array.join.js', 'core-js/modules/es.array.map.js', 'core-js/modules/es.symbol.js', 'core-js/modules/es.symbol.description.js', 'core-js/modules/es.array.iterator.js', 'core-js/modules/es.string.iterator.js', 'core-js/modules/web.dom-collections.iterator.js', 'core-js/modules/web.url.js', 'core-js/modules/web.url-search-params.js', 'core-js/modules/es.array.index-of.js', 'core-js/modules/es.string.match.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.justgoodcookies = factory());
})(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
  * Activate Google Analytics
  */

  function activateGoogle() {
    var _JGC$activate, _JGC$activate$GoogleA, _JGC$activate2, _JGC$activate2$Google, _JGC$activate3, _JGC$activate3$Google, _JGC$activate4, _JGC$activate4$Google;

    var GoogleAnalytics = document.createElement('script');
    var GoogleAnalyticsCode = document.createElement('script');
    var GoogleAnalyticsId = (_JGC$activate = JGC.activate) !== null && _JGC$activate !== void 0 && (_JGC$activate$GoogleA = _JGC$activate.GoogleAnalytics) !== null && _JGC$activate$GoogleA !== void 0 && _JGC$activate$GoogleA.id ? JGC.activate.GoogleAnalytics.id.escape() : false;
    var GoogleAnalyticsAnonymized = (_JGC$activate2 = JGC.activate) !== null && _JGC$activate2 !== void 0 && (_JGC$activate2$Google = _JGC$activate2.GoogleAnalytics) !== null && _JGC$activate2$Google !== void 0 && _JGC$activate2$Google.anonymized ? JGC.activate.GoogleAnalytics.anonymized : false;
    var GoogleAnalyticsAdStorage = (_JGC$activate3 = JGC.activate) !== null && _JGC$activate3 !== void 0 && (_JGC$activate3$Google = _JGC$activate3.GoogleAnalytics) !== null && _JGC$activate3$Google !== void 0 && _JGC$activate3$Google.ad_storage ? JGC.activate.GoogleAnalytics.ad_storage : false;
    var GoogleAnalyticsAnalyticsStorage = (_JGC$activate4 = JGC.activate) !== null && _JGC$activate4 !== void 0 && (_JGC$activate4$Google = _JGC$activate4.GoogleAnalytics) !== null && _JGC$activate4$Google !== void 0 && _JGC$activate4$Google.analytics_storage ? JGC.activate.GoogleAnalytics.analytics_storage : false;
    GoogleAnalytics.setAttribute('src', "https://www.googletagmanager.com/gtag/js?id=".concat(GoogleAnalyticsId));
    document.head.appendChild(GoogleAnalytics);
    GoogleAnalyticsCode.text = "window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('consent', 'default', {\n    'ad_storage': '".concat(GoogleAnalyticsAdStorage == true ? 'granted' : 'denied', "',\n    'analytics_storage': '").concat(GoogleAnalyticsAnalyticsStorage == true ? 'granted' : 'denied', "',\n  });\n  gtag('js', new Date());\n  gtag('config', '").concat(GoogleAnalyticsId, "', { 'anonymize_ip': ").concat(GoogleAnalyticsAnonymized !== null && GoogleAnalyticsAnonymized !== void 0 ? GoogleAnalyticsAnonymized : false, " });");
    document.head.appendChild(GoogleAnalyticsCode);
  }
  /**
  * Activate Facebook Pixel
  */

  function activateFacebook() {
    var _JGC$activate5;

    if ((_JGC$activate5 = JGC.activate) !== null && _JGC$activate5 !== void 0 && _JGC$activate5.FacebookPixel) {
      var FacebookPixel_init = JGC.activate.FacebookPixel.init.escape();
      var FacebookPixel_noscript = document.createElement('noscript');
      var FacebookPixel_script = document.createElement('script');
      FacebookPixel_script.text = "\n    !function(f,b,e,v,n,t,s)\n    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n    n.queue=[];t=b.createElement(e);t.async=!0;\n    t.src=v;s=b.getElementsByTagName(e)[0];\n    s.parentNode.insertBefore(t,s)}(window, document,'script',\n    'https://connect.facebook.net/en_US/fbevents.js');\n    fbq('init', '".concat(FacebookPixel_init, "');\n    fbq('track', 'PageView');");
      document.head.appendChild(FacebookPixel_script);
      FacebookPixel_noscript.setAttribute('width', '1');
      FacebookPixel_noscript.setAttribute('height', '1');
      FacebookPixel_noscript.setAttribute('style', 'display:none');
      FacebookPixel_noscript.setAttribute('src', "https://www.facebook.com/tr?id=".concat(FacebookPixel_init, "&ev=PageView&noscript=1"));
      document.head.appendChild(FacebookPixel_noscript);
    }
  }
  /**
  * Google Tag Manager script
  */

  function activateGoogleTagManager(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  }
  /**
  * Check custom user's activations  
  */


  function checkActivations() {
    var activations = {
      "default": function _default() {},
      "GoogleAnalytics": function GoogleAnalytics() {
        return activateGoogle();
      },
      "FacebookPixel": function FacebookPixel() {
        return activateFacebook();
      }
    };
    if (JGC.activate) Object.keys(JGC.activate).forEach(function (k) {
      return (activations[k] || activations['default'])();
    });
  }
  /**
  * Activate Google Tag Manager
  * TODO: It needs more tests.
  */

  function googleTagManager() {
    var _JGC$activate6;

    if ((_JGC$activate6 = JGC.activate) !== null && _JGC$activate6 !== void 0 && _JGC$activate6.GoogleTagManager) {
      var dataObject = {
        'event': JGC.activate.GoogleTagManager.event_name
      };
      var GoogleAnalyticsContainerId = JGC.activate.GoogleTagManager.container_id;
      activateGoogleTagManager(window, document, 'script', 'dataLayer', GoogleAnalyticsContainerId);

      if (JGC.activate.GoogleTagManager.variables) {
        JGC.activate.GoogleTagManager.variables.forEach(function (element) {
          return dataObject[element[0]] = element[1];
        });
      }

      if (typeof dataLayer != 'undefined') dataLayer.push(dataObject);
    }
  }

  /**
  * Intercept the pressure of the "enter" key
  */

  function addEnterAction(el) {
    document.getElementById(el).addEventListener('keyup', function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        return 'JGC.' + el + '()';
      }
    });
  }
  /**
  * Control whether the background should be dark or not
  */

  function checkBackground() {
    var getPreferences = getCookie('JgcPreferences');

    if (JGC.bannerConfig.backgroundDark != false) {
      if (getPreferences['darkBackground'] == false || getPreferences['darkBackground'] && !getPreferences['duration']) {
        var modal = document.createElement("div");
        modal.id = 'jgcModal';
        modal.className = checkTailwindPrefix('bg-black bg-opacity-80 fixed min-h-screen top-0 w-full z-index-50');
        document.body.appendChild(modal);

        var saveObj = _objectSpread2(_objectSpread2({}, getPreferences), {}, {
          darkBackground: true
        });

        saveCookie(saveObj);
      }
    }
  }
  /**
  * Check if the dark mode should be activated.
  */

  function checkDarkMode() {
    var htmlClass = document.querySelector('html').classList.contains(checkTailwindPrefix('dark'));
    if (htmlClass) JGC.darkMode = true;
  }
  /**
  * Check if a prefix for Tailwind has been chosen and updates all class names
  */

  function checkTailwindPrefix(value) {
    var colon = /:/;

    if (checkTailwindPrefix) {
      if (/\s/.test(value)) {
        var splitWords = value.split(/[ ,]+/);

        var arr = _toConsumableArray(splitWords);

        return arr.map(function (el) {
          if (colon.test(el)) {
            var prefix = el.split(':')[0];
            var newstr = "";

            if (el.includes('dark:group-hover')) {
              var prefix2 = el.split(':')[1];
              newstr = el.replace(prefix + ':' + prefix2 + ':', "".concat(prefix, ":").concat(prefix2, ":").concat(JGC.tailwindPrefix));
            } else {
              newstr = el.replace(prefix + ':', "".concat(prefix, ":").concat(JGC.tailwindPrefix));
            }

            return newstr;
          } else {
            return JGC.tailwindPrefix + el;
          }
        }).join(' ');
      } else {
        if (colon.test(value)) {
          var prefix = value.split(':')[0];
          var newstr = "";

          if (value.includes('dark:group-hover')) {
            var prefix2 = el.split(':')[1];
            newstr = value.replace(prefix + ':' + prefix2 + ':', "".concat(prefix, ":").concat(prefix2, ":").concat(JGC.tailwindPrefix));
          } else {
            newstr = value.replace(prefix + ':', "".concat(prefix, ":").concat(JGC.tailwindPrefix));
          }

          return newstr;
        } else {
          return JGC.tailwindPrefix + value;
        }
      }
    }
  }
  /**
  * Get the max width of the banner
  */

  function getMaxWidth(defaultValue) {
    var _JGC$bannerConfig;

    if ((_JGC$bannerConfig = JGC.bannerConfig) !== null && _JGC$bannerConfig !== void 0 && _JGC$bannerConfig.maxWidth) {
      switch (JGC.bannerConfig.maxWidth) {
        case 'xs':
          return checkTailwindPrefix('max-w-xs');

        case 'sm':
          return checkTailwindPrefix('max-w-sm');

        case 'md':
          return checkTailwindPrefix('max-w-md');

        case 'lg':
          return checkTailwindPrefix('max-w-lg');

        case 'xl':
          return checkTailwindPrefix('max-w-xl');

        case '2xl':
          return checkTailwindPrefix('max-w-2xl');

        case '3xl':
          return checkTailwindPrefix('max-w-3xl');

        case '4xl':
          return checkTailwindPrefix('max-w-4xl');

        case '5xl':
          return checkTailwindPrefix('max-w-5xl');

        case '6xl':
          return checkTailwindPrefix('max-w-6xl');

        case '7xl':
          return checkTailwindPrefix('max-w-7xl');

        case 'full':
          return checkTailwindPrefix('max-w-full');

        case 'min':
          return checkTailwindPrefix('max-w-min');

        case 'max':
          return checkTailwindPrefix('max-w-max');
      }
    } else {
      return checkTailwindPrefix(defaultValue);
    }
  }
  /**
  * Check if a value is a boolean
  */

  function isBoolean(value, key) {
    if (value != "undefined" && typeof value == 'boolean') {
      return true;
    } else if (value != "undefined") {
      return false;
    } else {
      throw ": \"".concat(key, "\" is not valid, must be a boolean.");
    }
  }
  /**
  * Check if a value is a function
  */

  function isFunction(value, key) {
    if (typeof value == "function") {
      return value;
    } else {
      throw ": \"".concat(key, "\" is not valid, must be a function.");
    }
  }
  /**
  * Checking whether a value is a string or an object (for translations)
  */

  function isString(value, key) {
    if (typeof value === 'string' || value instanceof String) {
      return value.escape();
    } else if (_typeof(value) === 'object' || value instanceof Object) {
      return value[JGC.localeString].escape();
    } else {
      throw ": \"".concat(key, "\" is not valid, must be a string or an object.");
    }
  }
  /**
   * Load user-defined text
   */

  function loadText() {
    var bannerText = document.getElementById('jgc-banner-text');
    if (bannerText) JGC.bannerText = bannerText.innerHTML;
    var bannerLink = document.getElementById('jgc-banner-link');
    if (bannerLink) JGC.bannerLink = bannerLink.innerHTML;
    var panelHeader = document.getElementById('jgc-panel-header');
    if (panelHeader) JGC.panelHeader = panelHeader.innerHTML;
    var panelFooter = document.getElementById('jgc-panel-footer');
    if (panelFooter) JGC.panelFooter = panelFooter.innerHTML;
  }
  /**
  * Return icons (if any)
  */

  function returnIcon() {
    if (JGC.bannerConfig.icon && JGC.darkMode != true) {
      return "<div><img class=\"".concat(checkTailwindPrefix('w-4 h-4'), "\" src=\"").concat(JGC.bannerConfig.icon, "\" /></div>");
    } else if (JGC.bannerConfig.icon && JGC.darkMode == true) {
      return "<div><img class=\"".concat(checkTailwindPrefix('w-4 h-4'), "\" src=\"").concat(JGC.bannerConfig.iconDark, "\" /></div>");
    } else if (JGC.bannerConfig.icon == null) {
      return "";
    }
  }
  /**
  * Return logo (if any)
  */

  function returnLogo() {
    return "".concat(JGC.bannerConfig.logo ? "<img class=\"".concat(JGC.bannerConfig.logoClasses ? JGC.bannerConfig.logoClasses : '', "\" src=\"").concat(JGC.bannerConfig.logo, "\" />") : '');
  }

  /**
  * Make a placeholder over the blocked iframes
  */

  function generateIframeDivs(element) {
    var _JGC$placeholder, _JGC$placeholder2;

    var checkIfTextPlaceholderExist = element.getAttribute('data-jgc-placeholder-text') || ((_JGC$placeholder = JGC.placeholder) === null || _JGC$placeholder === void 0 ? void 0 : _JGC$placeholder.text);
    var checkIfImgPlaceholderExist = element.getAttribute('data-jgc-placeholder-img') || ((_JGC$placeholder2 = JGC.placeholder) === null || _JGC$placeholder2 === void 0 ? void 0 : _JGC$placeholder2.image);

    if (element.tagName == 'IFRAME' && (checkIfTextPlaceholderExist || checkIfImgPlaceholderExist)) {
      var _JGC$placeholder3;

      var getIdElement = element.getAttribute('src') || element.getAttribute('data-jgc-src');
      var getTag = element.getAttribute('data-jgc-tag');
      var tag = document.createElement("div");

      if (checkIfImgPlaceholderExist) {
        tag.setAttribute("style", "background-image: url(".concat(returnPlaceholderImg(element), ")"));
      }

      tag.setAttribute("data-jgc-placeholder-id", getIdElement);

      if (getTag) {
        tag.setAttribute("data-jgc-placeholder-tag", getTag);
        tag.setAttribute("data-jgc-placeholder-height", element.getAttribute('height'));
      }

      tag.classList.add(checkTailwindPrefix('flex'));
      tag.classList.add(checkTailwindPrefix("md:pt-0"));
      tag.classList.add(checkTailwindPrefix("pt-[56.25%]"));
      tag.classList.add(checkTailwindPrefix("md:w-[".concat(returnIframeSize(element, 'width'), "]")));
      tag.classList.add(checkTailwindPrefix("md:h-[".concat(returnIframeSize(element, 'height'), "]")));
      tag.classList.add(checkTailwindPrefix('w-full'));
      tag.classList.add(checkTailwindPrefix('items-center'));
      tag.classList.add(checkTailwindPrefix('justify-center'));
      tag.classList.add(checkTailwindPrefix('bg-gray-100'));
      tag.classList.add(checkTailwindPrefix('cursor-pointer'));

      if ((_JGC$placeholder3 = JGC.placeholder) !== null && _JGC$placeholder3 !== void 0 && _JGC$placeholder3.classes) {
        var classes = JGC.placeholder.classes;
        var splitWords = classes.split(/[ ,]+/);

        var array = _toConsumableArray(splitWords);

        for (var i = 0; i < array.length; i++) {
          var _element = array[i];
          tag.classList.add(_element);
        }
      }

      if (checkIfTextPlaceholderExist) {
        var _JGC$placeholder4;

        var settingsHtml = checkIfTextPlaceholderExist ? checkIfTextPlaceholderExist : "".concat((_JGC$placeholder4 = JGC.placeholder) !== null && _JGC$placeholder4 !== void 0 && _JGC$placeholder4.text ? JGC.placeholder.text : '');
        tag.innerHTML = settingsHtml.escape();
      }

      tag.addEventListener('click', function () {
        return managePreferences();
      });
      element.parentNode.insertBefore(tag, element);
      if (element.hasAttribute('data-jgc-src')) element.setAttribute('height', 0);
    }
  }
  /**
  * Remove placeholders
  */

  function removePlaceholders() {
    var getElementsPlaceholder = document.querySelectorAll('[data-jgc-placeholder]');

    if (getElementsPlaceholder.length > 0) {
      for (var i = 0; i < getElementsPlaceholder.length; i++) {
        var _getSrcToRemove$;

        var element = getElementsPlaceholder[i];
        var getPlaceholder = element.querySelectorAll("[data-jgc-placeholder-tag]");
        var getOriginalIframe = element.querySelectorAll("[data-jgc-tag]");
        var getSrcToRemove = element.querySelectorAll("[data-jgc-src]");

        if (getOriginalIframe) {
          for (var _i = 0; _i < getOriginalIframe.length; _i++) {
            var el = getOriginalIframe[_i];

            if (getPlaceholder.length > 0) {
              var height = getPlaceholder[0].getAttribute(['data-jgc-placeholder-height']);
              el.setAttribute('height', "".concat(height, "px"));
            }
          }
        }

        if (getPlaceholder) {
          for (var _i2 = 0; _i2 < getPlaceholder.length; _i2++) {
            var _el = getPlaceholder[_i2];

            var placeholderId = _el.getAttribute('data-jgc-placeholder-id');

            var hiddenDiv = document.querySelectorAll("[data-jgc-placeholder-tag=\"".concat(placeholderId, "\"]"));
            hiddenDiv[0].remove();

            _el.remove();
          }
        }

        var getSrc = ((_getSrcToRemove$ = getSrcToRemove[0]) === null || _getSrcToRemove$ === void 0 ? void 0 : _getSrcToRemove$.getAttribute('data-jgc-src')) || element.getAttribute('data-jgc-placeholder-id');
        JGC.removeHiddenDivs(getSrc);
      }
    } else {
      document.body.querySelectorAll('[data-jgc-tag]').forEach(function (el) {
        return el.classList.remove(checkTailwindPrefix('h-0'), checkTailwindPrefix('w-0'));
      });
    }
  }
  /**
  * Calculate the dimensions of an iFrame (in px, in percentage or from the style attribute).
  */

  var returnIframeSize = function returnIframeSize(element, prop) {
    var style = element.getAttribute('style');

    if (element.getAttribute(prop)) {
      var checkWidthPercentage = element.getAttribute(prop).indexOf("%") > -1;
      var checkWidthPx = element.getAttribute(prop).indexOf("px") > -1;

      if (checkWidthPercentage || checkWidthPx) {
        return element.getAttribute(prop);
      } else {
        return element.getAttribute(prop) + 'px';
      }
    } else if (style) {
      var getProps = style.replace(/\s/g, '').replace(/^.*{([^}]+)}.*/, '$1').match(/([^;]+)/g);
      var returnValue = '';
      getProps.forEach(function (element) {
        if (element.includes(prop)) {
          returnValue = element.split(":").pop();
        }
      });
      return returnValue;
    }
  };
  /**
  * Shows an image as a placeholder, if it exists
  */


  function returnPlaceholderImg(element) {
    var _JGC$placeholder5;

    var checkIfImgPlaceholderExist = element.getAttribute('data-jgc-placeholder-img');

    if ((checkIfImgPlaceholderExist === null || checkIfImgPlaceholderExist === void 0 ? void 0 : checkIfImgPlaceholderExist.length) > 0 && checkIfImgPlaceholderExist != 'disable') {
      return checkIfImgPlaceholderExist;
    }

    if ((_JGC$placeholder5 = JGC.placeholder) !== null && _JGC$placeholder5 !== void 0 && _JGC$placeholder5.image && !checkIfImgPlaceholderExist) {
      return JGC.placeholder.image;
    }

    if (checkIfImgPlaceholderExist && checkIfImgPlaceholderExist == 'disable') {
      return;
    }
  }

  /**
  * Enable scripts
  */

  function activateToggledCookies() {
    var checkPreferences = getCookie('JgcPreferences');

    var _loop = function _loop() {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          k = _Object$entries$_i[0],
          v = _Object$entries$_i[1];

      var tagToCheck = "[data-jgc-tag=\"".concat(k, "\"]"),
          cookieExists = document.querySelectorAll(tagToCheck);

      if (v == true) {
        replaceScripts(tagToCheck);
      } else {
        cookieExists.forEach(function (element) {
          var parent = element.parentNode;

          if (parent.hasAttribute('data-jgc-placeholder')) {
            generateIframeDivs(element);
          } else {
            if (v != false) {
              element.classList.add(checkTailwindPrefix('hidden'));
              element.innerHTML = '';
            }
          }
        });
      }
    };

    for (var _i = 0, _Object$entries = Object.entries(checkPreferences['preferences']); _i < _Object$entries.length; _i++) {
      _loop();
    }

    if (checkPreferences['darkBackground']) {
      var saveObj = _objectSpread2(_objectSpread2({}, checkPreferences), {}, {
        darkBackground: false
      });

      saveCookie(saveObj);
      var modal = document.getElementById('jgcModal');
      if (modal) modal.classList.add(checkTailwindPrefix('hidden'));
    }
  }
  /**
  * Delete Google Analytics cookies if the user has changed their settings in this regard
  * TODO: It needs to be improved.
  */

  function checkGoogleAnalytics() {
    var checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));

    for (var _i2 = 0, _Object$entries2 = Object.entries(checkPreferencesFromStorage); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          k = _Object$entries2$_i[0],
          v = _Object$entries2$_i[1];

      if (k != 'necessary') {
        var getGoogleAnalytics = document.getElementById('googleAnalytics');

        if (getGoogleAnalytics) {
          var urlParams = new URL(getGoogleAnalytics.getAttribute('data-jgc-src')).escape();
          var googleAnalyticsId = urlParams.searchParams.get("id");
          var domain = window.location.hostname;
          var getAttribute = getGoogleAnalytics.getAttribute('data-jgc-tag'); // TODO: This part can be improved

          if (k == getAttribute && v == false) {
            document.cookie = "_ga=; path=/; domain=".concat(domain, "; expires=") + new Date(0).toUTCString();
            document.cookie = "_ga=; path=/; domain=.".concat(domain, "; expires=") + new Date(0).toUTCString();
            document.cookie = "_ga_".concat(googleAnalyticsId.slice(2), "=; path=/; domain=").concat(domain, "; expires=") + new Date(0).toUTCString();
            document.cookie = "_ga_".concat(googleAnalyticsId.slice(2), "=; path=/; domain=.").concat(domain, "; expires=") + new Date(0).toUTCString();
            document.cookie = "_gid=; path=/; domain=".concat(domain, "; expires=") + new Date(0).toUTCString();
            document.cookie = "_gid=; path=/; domain=.".concat(domain, "; expires=") + new Date(0).toUTCString();
            document.cookie = "_gat_gtag_".concat(googleAnalyticsId, "=; path=/; domain=").concat(domain, "; expires=") + new Date(0).toUTCString();
            document.cookie = "_gat_gtag_".concat(googleAnalyticsId, "=; path=/; domain=.").concat(domain, "; expires=") + new Date(0).toUTCString();
            document.cookie = "_gat_gtag_UA_".concat(googleAnalyticsId.slice(3, -2), "_1=; path=/; domain=").concat(domain, "; expires=") + new Date(0).toUTCString();
            document.cookie = "_gat_gtag_UA_".concat(googleAnalyticsId.slice(3, -2), "_1=; path=/; domain=.").concat(domain, "; expires=") + new Date(0).toUTCString();
          }
        }
      }
    }
  }
  /**
  * Hide the scripts
  */

  function hideScripts() {
    var getElementsJgc = document.querySelectorAll('[data-jgc-tag]');
    var getElementsToHide = document.querySelectorAll('[data-jgc-remove]');
    var getElementsPlaceholder = document.querySelectorAll('[data-jgc-placeholder]');

    var _loop2 = function _loop2(i) {
      var element = getElementsJgc[i];

      if (element.getAttribute('data-jgc-tag') != 'necessary') {
        generateIframeDivs(element);
      } else {
        if (getElementsPlaceholder) {
          getElementsPlaceholder.forEach(function (e) {
            if (e.contains(element)) {
              e.style.backgroundColor = '';
              e.className = '';
            }
          });
        }

        replaceScripts("[data-jgc-tag=\"necessary\"]");
      }
    };

    for (var i = 0; i < getElementsJgc.length; i++) {
      _loop2(i);
    }

    if (getElementsToHide.length > 0) removeScript(true);
  }
  /**
  * Remove all divs that hide user accepted iframes                                                                   
  */

  function removeDivsOfUserAcceptedIframes() {
    var checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));

    for (var _i3 = 0, _Object$entries3 = Object.entries(checkPreferencesFromStorage); _i3 < _Object$entries3.length; _i3++) {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
          k = _Object$entries3$_i[0],
          v = _Object$entries3$_i[1];

      if (k != 'necessary') {
        var getDivsToRemove = document.querySelectorAll('[data-jgc-remove-style]');

        for (var i = 0; i < getDivsToRemove.length; i++) {
          var element = getDivsToRemove[i];
          if (element.getAttribute('data-jgc-tag') == k && v == true) element.remove();
        }
      }
    }
  }
  /**
  * Remove scripts from the DOM (if necessary)
  */

  function removeScript(value) {
    var scriptsToRemove = document.querySelectorAll('[data-jgc-remove]');

    if (value && scriptsToRemove.length > 0) {
      var getPreferences = getCookie('JgcPreferences');

      var saveObj = _objectSpread2(_objectSpread2({}, getPreferences), {}, {
        remove: scriptsToRemove.length
      });

      saveCookie(saveObj);
      var checkPreferences = getCookie('JgcPreferences');
      var servicesToReturn = [];
      scriptsToRemove.forEach(function (element) {
        var service = element.getAttribute('data-jgc-service');

        if (service && service.length > 0) {
          var item = {
            service: service,
            tag: element.getAttribute('data-jgc-tag')
          };
          servicesToReturn.push(item);

          var updatedObj = _objectSpread2(_objectSpread2({}, saveObj), {}, {
            servicesRemoved: servicesToReturn
          });

          saveCookie(updatedObj);
        }

        if (!checkPreferences['preferences'][element.getAttribute('data-jgc-tag')] || checkPreferences['preferences'][element.getAttribute('data-jgc-tag')] == false) element.remove();
      });
    } else {
      var _getPreferences = getCookie('JgcPreferences');

      var _saveObj = _objectSpread2(_objectSpread2({}, _getPreferences), {}, {
        remove: 0
      });

      saveCookie(_saveObj);

      if (!_getPreferences['refresh']) {
        var updatedObj = _objectSpread2(_objectSpread2({}, _saveObj), {}, {
          refresh: true
        });

        saveCookie(updatedObj);
        window.location.reload();
      }
    }
  }
  /**
  * Replace the attribute "jgc" from scripts if the user accepts
  */

  function replaceScripts(customAttributeToCheck) {
    var getElementsToShow = document.querySelectorAll(customAttributeToCheck);

    var _loop3 = function _loop3(i) {
      var element = getElementsToShow[i];
      element.style.display = '';
      element.style.backgroundColor = '';
      var customTypeAttribute = element.getAttribute('data-jgc-type');
      if (customTypeAttribute) element.setAttribute('type', customTypeAttribute);
      var customSrc = element.getAttribute('data-jgc-src') ? element.getAttribute('data-jgc-src').escape() : null;

      if (customSrc) {
        var isFirefox = typeof InstallTrigger !== 'undefined'; // Need this to turn on some cookies on FF

        if (isFirefox) {
          setTimeout(function () {
            element.setAttribute('src', customSrc);
          }, 100);
        } else {
          element.setAttribute('src', customSrc);
        }

        element.classList.remove(checkTailwindPrefix('hidden'));
      } // TODO: This part can be improved


      if (element.hasAttribute('data-jgc-remove')) {
        if (element.hasChildNodes()) {
          for (var _i4 = 0; _i4 < element.children.length; _i4++) {
            var el = element.children[_i4];

            if (el.hasAttribute('data-jgc-src')) {
              var _customSrc = el.getAttribute('data-jgc-src').escape();

              el.setAttribute('src', _customSrc);
            }
          }
        }
      }
    };

    for (var i = 0; i < getElementsToShow.length; i++) {
      _loop3(i);
    }
  }

  /**
  * Animate toggles
  */

  function animateToggle(val, buttonType) {
    var _JGC$customStyle;

    var toggle = document.getElementById('toggle-' + buttonType + '-div');
    var toggleRight = document.getElementById('toggle-' + buttonType + '-right');
    var toggleNecessary = document.getElementById('toggle-necessary-right-fixed');
    var bgColor = (_JGC$customStyle = JGC.customStyle) !== null && _JGC$customStyle !== void 0 && _JGC$customStyle.toggles ? JGC.customStyle.toggles : checkTailwindPrefix('bg-green-200');

    if (val && toggle != null && toggleRight != null) {
      toggle.classList.remove(checkTailwindPrefix('bg-gray-800'), checkTailwindPrefix('dark:bg-gray-700'));
      toggle.classList.add(bgColor);
      toggleRight.classList.remove(checkTailwindPrefix('translate-x-0'));
      toggleRight.classList.remove(checkTailwindPrefix('ml-0.5'));
      toggleRight.classList.add(checkTailwindPrefix('-ml-0.5'));
      toggleRight.classList.add(checkTailwindPrefix('border-green-400')); // toggleRight.classList.add(checkTailwindPrefix('translate-x-full'))

      toggleRight.classList.remove(checkTailwindPrefix('left-0'));
      toggleRight.classList.add(checkTailwindPrefix('absolute'));
      toggleRight.classList.add(checkTailwindPrefix('right-0'));
    } else if (!val) {
      toggle.classList.remove(checkTailwindPrefix('translate-x-full'));
      toggle.classList.remove(bgColor);
      toggle.classList.add(checkTailwindPrefix('bg-gray-800'), checkTailwindPrefix('dark:bg-gray-700'));
      toggleRight.classList.remove(checkTailwindPrefix('-ml-0.5'));
      toggleRight.classList.remove(checkTailwindPrefix('translate-x-full'));
      toggleRight.classList.remove(checkTailwindPrefix('border-green-400'));
      toggleRight.classList.add(checkTailwindPrefix('ml-0.5'));
      toggleRight.classList.add(checkTailwindPrefix('translate-x-0'));
      toggleRight.classList.add(checkTailwindPrefix('left-0'));
    } else if (val && buttonType == 'necessary' && toggleNecessary) {
      toggle.classList.remove(checkTailwindPrefix('bg-gray-800'), checkTailwindPrefix('dark:bg-gray-700'));
      toggle.classList.add(bgColor);
      toggleNecessary.classList.remove(checkTailwindPrefix('ml-0.5'));
      toggleNecessary.classList.add(checkTailwindPrefix('-ml-0.5'));
      toggleNecessary.classList.remove(checkTailwindPrefix('translate-x-0'));
      toggleNecessary.classList.add(checkTailwindPrefix('border-green-400')); // toggleNecessary.classList.add(checkTailwindPrefix('translate-x-full'))

      toggleNecessary.classList.remove(checkTailwindPrefix('left-0'));
      toggleNecessary.classList.add(checkTailwindPrefix('absolute'));
      toggleNecessary.classList.add(checkTailwindPrefix('right-0'));
    }
  }
  /**
  * Change toggles and settings
  */

  function changeSettings(toggleClicked) {
    var checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));
    checkPreferencesFromStorage[toggleClicked] = !checkPreferencesFromStorage[toggleClicked];
    animateToggle(checkPreferencesFromStorage[toggleClicked], toggleClicked);

    var saveObj = _objectSpread2({}, checkPreferencesFromStorage);

    localStorage.setItem("JgcPreferences", JSON.stringify(saveObj));
  }
  /**
  * Change the value of toggles
  */

  function changeToggle() {
    var checkPreferences = getCookie('JgcPreferences');

    for (var _i = 0, _Object$entries = Object.entries(checkPreferences['preferences']); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          k = _Object$entries$_i[0],
          v = _Object$entries$_i[1];

      if (v == true) animateToggle(true, "".concat(k));
    }
  }
  /**
  * Close the settings panel and reload the page
  */

  function closePreferencePanel() {
    activateToggledCookies();
    removeScript(false);
    var date = new Date();
    date.setTime(date.getTime() + JGC.cookieTimeout);
    var item = {
      value: "1",
      expiry: date
    };
    var checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));
    var getPreferences = getCookie('JgcPreferences');

    var saveObj = _objectSpread2(_objectSpread2({}, getPreferences), {}, {
      preferences: checkPreferencesFromStorage,
      duration: item
    });

    saveCookie(saveObj);
    closeBanner(); // And yes, we need to refresh the page to activate specific cookies. Maybe this part can be improved.

    window.location.reload();
  }
  /**
  * Change the local storage on "Save All"
  */

  function closePreferencePanelAndSaveAll() {
    var checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));
    var preferences = {};

    for (var _i2 = 0, _Object$entries2 = Object.entries(checkPreferencesFromStorage); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          k = _Object$entries2$_i[0];
          _Object$entries2$_i[1];

      preferences[k] = true;
    }

    localStorage.setItem("JgcPreferences", JSON.stringify(preferences));
    if (document.getElementById('preferenceDiv')) closePreferencePanel();
  }
  /**
  * Generate single options (for the panel)
  */

  function generateOptions() {
    var arr = [],
        cookieExists = getCookie('JgcPreferences');

    var _loop = function _loop() {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
          k = _Object$entries3$_i[0],
          v = _Object$entries3$_i[1];

      if (cookieExists['enable'].length > 0 && cookieExists['enable'].includes(k)) {
        var _JGC$customStyle2, _JGC$customStyle3, _JGC$customStyle4, _JGC$customStyle5;

        arr += "\n        <div class=\"".concat(checkTailwindPrefix('flex items-center space-x-6 py-1 px-4'), " ").concat((_JGC$customStyle2 = JGC.customStyle) !== null && _JGC$customStyle2 !== void 0 && _JGC$customStyle2.stripes ? "".concat(JGC.customStyle.stripes) : '', " \"> \n          <div>\n            <div class=\"").concat(checkTailwindPrefix('flex items-center justify-center'), "\">\n            <div id=\"toggle-").concat(k, "-div\" class=\"").concat(checkTailwindPrefix('relative w-12 h-7 transition duration-200 ease-linear rounded-full bg-gray-800 dark:bg-gray-700'), "\">\n              <label id=\"").concat(k == 'necessary' ? "toggle-necessary-right-fixed" : "toggle-".concat(k, "-right"), "\"\n                for=\"toggle-").concat(k, "\" class=\"").concat(checkTailwindPrefix('bg-gray-100 absolute left-0 w-6 h-6 mt-0.5 ml-0.5 transition duration-100 ease-linear transform rounded-full cursor-pointer mr-[2px]'), "\">\n                ").concat(k == 'necessary' ? "\n                <div class=\"".concat(checkTailwindPrefix('p-1 flex items-center justify-center'), "\">\n                  <svg class=\"").concat((_JGC$customStyle3 = JGC.customStyle) !== null && _JGC$customStyle3 !== void 0 && _JGC$customStyle3.lockIcon ? JGC.customStyle.lockIcon : checkTailwindPrefix('text-green-600'), "\" fill=\"currentColor\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 512 512\">\n                    <g>\n                      <path d=\"m432,224h-48v-96c0-70.578-57.422-128-128-128s-128,57.422-128,128v96h-48c-8.836,0-16,7.164-16,16v256c0,8.836 7.164,16 16,16h352c8.836,0 16-7.164 16-16v-256c0-8.836-7.164-16-16-16zm-272-96c0-52.938 43.063-96 96-96s96,43.063 96,96v96h-16v-96c0-44.109-35.891-80-80-80s-80,35.891-80,80v96h-16v-96zm48,96v-96c0-26.469 21.531-48 48-48 26.469,0 48,21.531 48,48v96h-96zm208,256h-320v-224h320v224z\"/>\n                      <path d=\"m256,304.002c-17.673,0-32,14.326-32,32 0,11.814 6.476,22.018 16,27.561v36.439c0,8.836 7.163,16 16,16 8.837,0 16-7.164 16-16v-36.439c9.524-5.543 16-15.747 16-27.561 0-17.674-14.327-32-32-32z\"/>\n                    </g>\n                  </svg>\n                </div>\n                ") : "", "\n              </label>\n              <input tabindex=\"0\" type=\"checkbox\" id=\"toggle-").concat(k, "\" name=\"toggle-").concat(k, "\" class=\"").concat(checkTailwindPrefix('w-full h-full appearance-none focus:shadow-2xl '), "\"/>\n            </div>\n          </div>\n        </div>\n      <div class=\"").concat((_JGC$customStyle4 = JGC.customStyle) !== null && _JGC$customStyle4 !== void 0 && _JGC$customStyle4.servicesTag ? JGC.customStyle.services : "".concat(checkTailwindPrefix('dark:text-gray-300')), " ").concat(checkTailwindPrefix('w-full'), "\">\n          <div class=\"").concat(checkTailwindPrefix('flex items-center space-x-2'), "\">\n            <h4 class=\"").concat(checkTailwindPrefix('font-bold text-md'), "\">").concat(v.title, "</h4> \n          </div>\n          <div class=\"").concat((_JGC$customStyle5 = JGC.customStyle) !== null && _JGC$customStyle5 !== void 0 && _JGC$customStyle5.panelText ? JGC.customStyle.panelText : "".concat(checkTailwindPrefix('dark:text-gray-300')), " ").concat(checkTailwindPrefix('text-xs md:text-md'), "\">").concat(v.description, "</div>\n          ").concat(returnServices(k), "\n        </div>\n      </div>");
        setTimeout(function () {
          document.getElementById("toggle-".concat(k, "-right")) && document.getElementById("toggle-".concat(k, "-right")).addEventListener('click', function () {
            return changeSettings("".concat(k));
          });
          var getLabel = document.getElementById("toggle-".concat(k));

          if (getLabel) {
            getLabel.addEventListener("keyup", function (e) {
              if (e.keyCode === 13) {
                e.preventDefault();
                changeSettings("".concat(k));
              }
            });
          }

          if (JGC.config.layout == 'style8') changeToggle();
        }, 1);
      }
    };

    for (var _i3 = 0, _Object$entries3 = Object.entries(JGC.getCustomCookies); _i3 < _Object$entries3.length; _i3++) {
      _loop();
    }

    return arr;
  }
  /**
  * Load preferences
  */

  function loadPreferences() {
    var findPreferenceButton = document.querySelectorAll('[data-jgc-preferences]');
    var preferenceButton = findPreferenceButton[0];
    if (preferenceButton) preferenceButton.addEventListener('click', function () {
      return managePreferences();
    });
  }
  /**
  * Return an array of services 
  */

  function makeArrForServices(value) {
    var _JGC$customStyle6, _JGC$customStyle7;

    return "<div class=\"".concat((_JGC$customStyle6 = JGC.customStyle) !== null && _JGC$customStyle6 !== void 0 && _JGC$customStyle6.toggles ? JGC.customStyle.toggles : checkTailwindPrefix('bg-green-200'), " \n  ").concat((_JGC$customStyle7 = JGC.customStyle) !== null && _JGC$customStyle7 !== void 0 && _JGC$customStyle7.servicesTag ? JGC.customStyle.servicesTag : checkTailwindPrefix('text-green-800'), " \n  ").concat(checkTailwindPrefix('px-2 py-0.5 rounded'), "\">").concat(value, "</div>");
  }
  /**
  * Generate panel
  */


  function managePreferences() {
    document.body.classList.add(checkTailwindPrefix('overflow-hidden'));
    closeBanner();
    var panelExists = document.querySelector("#preferenceDiv") != null;

    if (!panelExists) {
      var _JGC$panel, _JGC$customStyle8, _JGC$panel2, _JGC$customStyle9, _JGC$customStyle10, _JGC$text, _JGC$customStyle11, _JGC$text2, _JGC$customStyle12, _JGC$text3;

      var cookiePanel = document.createElement("div");
      cookiePanel.innerHTML = "\n    <div id=\"preferenceDiv\" style=\"background-color: rgba(0,0,0,0.6);z-index:9999 !important;\" class=\"".concat(checkTailwindPrefix('w-full min-h-screen top-0 fixed flex flex-col p-6 shadow-2xl items-center justify-center mx-auto transition duration-700 ease-in-out'), " ").concat(JGC.panelHeader ? '' : null, " \">\n        ").concat(JGC.panelHeader ? "<div id=\"jgc-custom-header\" class=\"".concat(checkTailwindPrefix('w-full'), "\"></div>") : '', "\n          <div class=\"").concat((_JGC$panel = JGC.panel) !== null && _JGC$panel !== void 0 && _JGC$panel.bgColor ? JGC.panel.bgColor : "".concat((_JGC$customStyle8 = JGC.customStyle) !== null && _JGC$customStyle8 !== void 0 && _JGC$customStyle8.preferenceDiv ? JGC.customStyle.preferenceDiv : checkTailwindPrefix('bg-white dark:bg-gray-800 max-w-3xl w-full')), " ").concat(((_JGC$panel2 = JGC.panel) === null || _JGC$panel2 === void 0 ? void 0 : _JGC$panel2.padding) == false ? '' : "".concat(checkTailwindPrefix('p-2')), "\">\n            <div class=\"").concat((_JGC$customStyle9 = JGC.customStyle) !== null && _JGC$customStyle9 !== void 0 && _JGC$customStyle9.panelHeader ? JGC.customStyle.panelHeader : "".concat(checkTailwindPrefix('md:flex justify-between px-4 py-4')), "\">\n              <h2 class=\"").concat((_JGC$customStyle10 = JGC.customStyle) !== null && _JGC$customStyle10 !== void 0 && _JGC$customStyle10.panelTitle ? JGC.customStyle.panelTitle : checkTailwindPrefix('dark:text-gray-300 leading-snug text-xl font-bold m-0 p-0'), "\">\n                ").concat((_JGC$text = JGC.text) !== null && _JGC$text !== void 0 && _JGC$text.panelTitle ? JGC.text.panelTitle : '', " \n              </h2>\n              <div class=\"").concat(checkTailwindPrefix('space-x-1 md:mt-0 mt-4'), "\">\n                <button role=\"button\" id=\"closePreferencePanel\" type=\"button\" class=\"").concat((_JGC$customStyle11 = JGC.customStyle) !== null && _JGC$customStyle11 !== void 0 && _JGC$customStyle11.saveButton ? JGC.customStyle.saveButton : "".concat(checkTailwindPrefix('px-3 py-1 uppercase font-bold tracking-wide text-xs z-index-10 relative rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer text-green-600 ring-1 ring-green-600')), " \">\n                  ").concat((_JGC$text2 = JGC.text) !== null && _JGC$text2 !== void 0 && _JGC$text2.saveButton ? JGC.text.saveButton : JGC.locale.saveAndContinue, "  \n                </button>\n                <button role=\"button\" id=\"closePreferencePanelAcceptAll\" type=\"button\" class=\"").concat((_JGC$customStyle12 = JGC.customStyle) !== null && _JGC$customStyle12 !== void 0 && _JGC$customStyle12.saveAllButton ? JGC.customStyle.saveAllButton : "".concat(checkTailwindPrefix('px-3 py-1 uppercase font-bold tracking-wide text-xs z-index-10 relative rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer text-green-600 ring-1 ring-green-600')), "  \">\n                  ").concat((_JGC$text3 = JGC.text) !== null && _JGC$text3 !== void 0 && _JGC$text3.saveAllButton ? JGC.text.saveAllButton : JGC.locale.saveAndContinueAcceptAll, "  \n                </button>\n              </div>\n            </div>\n            <div>\n              <div style=\"overflow-y: scroll; -webkit-overflow-scrolling: touch; max-height: calc(100vh - 400px);\" class=\"").concat(JGC.panel && JGC.panel.stripes ? "".concat(JGC.panel.stripes.odd, " ").concat(JGC.panel.stripes.even) : checkTailwindPrefix('space-y-4 overflow-y-auto'), " ").concat(checkTailwindPrefix('text-sm py-4'), "\"> \n                ").concat(generateOptions(), "\n              </div> \n            </div>\n          </div>\n          ").concat(JGC.panelFooter ? "<div id=\"jgc-custom-footer\" class=\"".concat(checkTailwindPrefix('w-full'), "\"></div>") : '', "\n        </div>\n    </div>\n    ");
      document.body.appendChild(cookiePanel);
      if (JGC.panelHeader) document.getElementById('jgc-custom-header').innerHTML = JGC.panelHeader;
      if (JGC.panelFooter) document.getElementById('jgc-custom-footer').innerHTML = JGC.panelFooter;
      document.getElementById('closePreferencePanel').addEventListener('click', function () {
        return closePreferencePanel();
      });
      document.getElementById('closePreferencePanelAcceptAll').addEventListener('click', function () {
        return closePreferencePanelAndSaveAll();
      });
    } else {
      document.querySelector("#preferenceDiv").classList.remove(checkTailwindPrefix('hidden'));
    }

    changeToggle();
  }
  /**
  *  Add the click event to fire the settings panel 
  */

  function managePreferencesLinkListener() {
    refreshLocalStorage();
    var preferenceButton = document.getElementById('openPanel');
    preferenceButton.addEventListener('click', function () {
      return managePreferences();
    });
  }
  /**
  * Fire the settings panel
  */

  function managePreferencesLink(colors) {
    var _JGC$customStyle13, _JGC$customStyle14, _JGC$text$preferences;

    var createButton = document.createElement("div");
    return createButton.innerHTML = "\n  <button id=\"openPanel\" style=".concat((_JGC$customStyle13 = JGC.customStyle) !== null && _JGC$customStyle13 !== void 0 && _JGC$customStyle13.preferencesText ? '' : 'font-size:0.6rem', " ;\" class=\"").concat(colors ? colors : "".concat((_JGC$customStyle14 = JGC.customStyle) !== null && _JGC$customStyle14 !== void 0 && _JGC$customStyle14.preferencesText ? JGC.customStyle.preferencesText : checkTailwindPrefix('font-bold uppercase dark:text-white')), "\">\n    ").concat((_JGC$text$preferences = JGC.text.preferencesText) !== null && _JGC$text$preferences !== void 0 ? _JGC$text$preferences : 'Manage and choose cookies', " \n  </button>");
  }
  /**
  * Open panel
  */

  function openPanel() {
    var getPreferences = getCookie('JgcPreferences');
    var refreshed = getPreferences['refresh'];

    if (refreshed == null && JGC.panel && JGC.panel.open) {
      var banner = document.getElementById('bannerContent');

      if (JGC.config.layout == 'style8') {
        // Style8 is a bit particular...
        banner.remove();
        setTimeout(function () {
          managePreferences();
        }, 200);
      } else {
        managePreferences();
      }
    }
  }
  /**
  * Return services
  */

  function returnServices(service) {
    var _checkPreferences$ser, _JGC$customStyle$serv, _JGC$customStyle15;

    var getElementsJgc = document.querySelectorAll("[data-jgc-tag=\"".concat(service, "\"]"));
    var arr = [];
    var divsToReturn = [];
    var checkPreferences = getCookie('JgcPreferences');
    var check = undefined;

    if (getElementsJgc) {
      for (var index = 0; index < getElementsJgc.length; index++) {
        var element = getElementsJgc[index];
        var getService = element.getAttribute('data-jgc-service') ? element.getAttribute('data-jgc-service').escape() : null;

        if (getService) {
          if (element.hasAttribute('data-jgc-remove')) check = true;
          arr += makeArrForServices(getService);
        }
      }
    }

    if (((_checkPreferences$ser = checkPreferences['servicesRemoved']) === null || _checkPreferences$ser === void 0 ? void 0 : _checkPreferences$ser.length) > 0 && !checkPreferences['duration']) {
      if (!check) {
        for (var _index = 0; _index < checkPreferences['servicesRemoved'].length; _index++) {
          var _element = checkPreferences['servicesRemoved'][_index];
          var _getService = _element['service'];
          var getTag = _element['tag'];
          if (getTag == service) arr += makeArrForServices(_getService);
        }
      }
    }

    if (JGC.auto) {
      var objKeys = Object.values(JGC.autoCategories);
      objKeys.forEach(function (el, k) {
        if (service == el[1]) arr += makeArrForServices(el[0]);
      });
    }

    if (JGC.activate) {
      var objEntries = Object.entries(JGC.activate);

      for (var i = 0; i < objEntries.length; i++) {
        var _element2 = objEntries[i];

        if (_element2[1].dataJgcService && service == _element2[1].dataJgcTag) {
          arr += makeArrForServices(_element2[1].dataJgcService);
        }
      }
    }

    divsToReturn += "<div class=\"".concat(arr.length > 0 ? checkTailwindPrefix('mt-2 border-t') : '', "\"> \n    ").concat(arr.length > 0 ? "<h4 class=\"".concat(checkTailwindPrefix('text-xs mt-1'), " ").concat((_JGC$customStyle$serv = (_JGC$customStyle15 = JGC.customStyle) === null || _JGC$customStyle15 === void 0 ? void 0 : _JGC$customStyle15.servicesText) !== null && _JGC$customStyle$serv !== void 0 ? _JGC$customStyle$serv : '', "\">").concat(JGC.text.servicesTag, "</h4>") : '', "\n    <div class=\"").concat(checkTailwindPrefix('flex space-x-1 mt-2 text-xs font-semibold'), "\">").concat(arr, "</div>\n    </div>");
    return divsToReturn;
  }
  /**
  * Grab the custom tags and write an item to local storage
  */


  function setPreferences() {
    var preferences = {};

    for (var _i4 = 0, _Object$entries4 = Object.entries(JGC.getCustomCookies); _i4 < _Object$entries4.length; _i4++) {
      var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 2),
          k = _Object$entries4$_i[0];
          _Object$entries4$_i[1];

      preferences[k] = true;
    }

    var getPreferences = getCookie('JgcPreferences');

    var saveObj = _objectSpread2(_objectSpread2({}, getPreferences), {}, {
      preferences: preferences
    });

    saveCookie(saveObj);
  }

  /**
   * Close banner
   */

  function closeBanner() {
    var banner = document.getElementById('bannerContent');

    if (banner) {
      banner.classList.add(checkTailwindPrefix('opacity-0'), checkTailwindPrefix('pointer-events-none'));

      if (JGC.config.layout != 'style8') {
        // "style8" is a little special. I can not use animations here because the toggle switches repeat in 2 different areas.
        setTimeout(function () {
          banner.remove(); // I need this timeout for the fade out animation
        }, 700);
      } else {
        banner.remove();
      }
    }
  }
  /**
  * Close banner with button
  */

  function closeBannerWithButton() {
    JGC.bannerConfig.closeButtonAccept ? JGC.yesCookies() : JGC.noCookies();
  }
  /**
  * Make banner buttons
  */

  function generateButtons() {
    var _JGC$bannerConfig;

    document.getElementById('yesCookies').addEventListener('click', function () {
      return JGC.yesCookies();
    });
    addEnterAction('yesCookies');

    if (((_JGC$bannerConfig = JGC.bannerConfig) === null || _JGC$bannerConfig === void 0 ? void 0 : _JGC$bannerConfig.disableReject) == false) {
      document.getElementById('noCookies').addEventListener('click', function () {
        return JGC.noCookies();
      });
      addEnterAction('noCookies');
    }

    managePreferencesLinkListener();
  }
  /**
  * Animate banner
  */

  function makeBannerAnimation() {
    var _JGC$bannerConfig2;

    if (JGC.bannerConfig.animation) {
      var bannerDiv = document.getElementById('bannerContent');

      switch (((_JGC$bannerConfig2 = JGC.bannerConfig) === null || _JGC$bannerConfig2 === void 0 ? void 0 : _JGC$bannerConfig2.position) || 'bottom') {
        case 'top':
          if (bannerDiv) {
            if (JGC.config.layout == 'style7') {
              document.getElementById('jgc-close-button').classList.remove(checkTailwindPrefix('-top-[8px]'));
              document.getElementById('jgc-close-button').classList.remove(checkTailwindPrefix('rounded-tr-lg'));
              document.getElementById('jgc-close-button').classList.remove(checkTailwindPrefix('rounded-tl-lg'));
              document.getElementById('jgc-close-button').classList.add(checkTailwindPrefix('-bottom-[40px]'));
              document.getElementById('jgc-close-button').classList.add(checkTailwindPrefix('rounded-br-lg'));
              document.getElementById('jgc-close-button').classList.add(checkTailwindPrefix('rounded-bl-lg'));
            }

            bannerDiv.classList.add(checkTailwindPrefix('-translate-y-full'));
            setTimeout(function () {
              bannerDiv.classList.remove(checkTailwindPrefix('-translate-y-full'));
              bannerDiv.classList.add(checkTailwindPrefix('translate-y-0'));
            }, 300);
            break;
          }

        case 'bottom':
          if (bannerDiv) {
            bannerDiv.classList.add(checkTailwindPrefix('translate-y-full'));
            setTimeout(function () {
              // bannerDiv.classList.add(checkTailwindPrefix('mb-4'))
              bannerDiv.classList.remove(checkTailwindPrefix('translate-y-full'));
            }, 300);
          }

          break;
      }
    }
  }
  /**
  * Show banner
  */

  function showBanner() {
    return JGC.banner.style.display = "";
  }

  /*
  * Check the expiration date of the cookie
  */

  function checkCookieExpiration(val) {
    var checkPreference = getCookie('JgcPreferences');
    var cookieDuration = JGC.cookieTimeout * 24 * 60 * 60 * 1000;
    var saveObj = {};
    var date = new Date();
    date.setTime(date.getTime() + cookieDuration);
    var item = {
      value: val,
      expiry: date.toString()
    };

    if (!checkPreference['duration']) {
      var getPreferences = getCookie('JgcPreferences');
      var uniqueId = Date.now() + Math.random().toString(16).slice(2);
      saveObj = _objectSpread2(_objectSpread2({}, getPreferences), {}, {
        duration: item,
        id: uniqueId
      });
      saveCookie(saveObj);
    } else {
      var now = new Date();
      var storedData = new Date(checkPreference['duration']['expiry']);

      if (now.setHours(0, 0, 0, 0) >= storedData.setHours(0, 0, 0, 0)) {
        var _getPreferences = getCookie('JgcPreferences');

        delete _getPreferences.duration;
        var _item = {
          value: "1",
          expiry: date.toString()
        };
        saveObj = _objectSpread2(_objectSpread2({}, _getPreferences), {}, {
          duration: _item
        });
        saveCookie(saveObj);
        showBanner();
      }
    }
  }
  /**
  * Get cookie
  */

  function getCookie(name) {
    var cookie = {};
    document.cookie.split(';').forEach(function (el) {
      var _el$split = el.split('='),
          _el$split2 = _slicedToArray(_el$split, 2),
          k = _el$split2[0],
          v = _el$split2[1];

      cookie[k.trim()] = v;
    });

    if (cookie[name]) {
      return JSON.parse(cookie[name]);
    } else {
      return null;
    }
  }
  /**
  * Refresh the local storage
  */

  function refreshLocalStorage() {
    var checkPreferences = getCookie('JgcPreferences');

    var saveObj = _objectSpread2({}, checkPreferences['preferences']);

    localStorage.setItem("JgcPreferences", JSON.stringify(saveObj));
  }
  /**
  * Save cookie
  */

  function saveCookie(saveObj) {
    var checkPreferences = getCookie('JgcPreferences');

    if (checkPreferences && checkPreferences['duration']) {
      var expiration = checkPreferences['duration'].expiry;
      document.cookie = "JgcPreferences=".concat(JSON.stringify(saveObj), ";expires= ").concat(expiration, ";path=/;SameSite=Strict");
    } else {
      document.cookie = "JgcPreferences=".concat(JSON.stringify(saveObj), ";path=/;SameSite=Strict;");
    }
  }
  /**
  * Save cookie categories 
  */

  function saveCookiesPreferences() {
    var arr = [];
    if (JGC.activate) for (var _i = 0, _Object$entries = Object.entries(JGC.activate); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2);
          _Object$entries$_i[0];
          var value = _Object$entries$_i[1];

      arr.push(value.dataJgcTag);
    }

    for (var _i2 = 0, _Object$entries2 = Object.entries(JGC.getCustomCookies); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          k = _Object$entries2$_i[0];
          _Object$entries2$_i[1];

      arr.push(k);
    }

    var preferences = getCookie('JgcPreferences');

    var saveObj = _objectSpread2(_objectSpread2({}, preferences), {}, {
      enable: arr
    });

    saveCookie(saveObj);
  }

  /**
  * Enable Auto Mode
  */

  function autoMode(arrToActivate) {
    var objKeys = Object.keys(JGC.autoCategories);
    var arrService = [];

    if (arrToActivate) {
      for (var _i = 0, _Object$entries = Object.entries(JGC.autoCategories); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            k = _Object$entries$_i[0],
            v = _Object$entries$_i[1];

        if (!arrToActivate.includes(v[1])) {
          var scripts = document.querySelectorAll('iframe,script,link');

          var _iterator = _createForOfIteratorHelper(scripts),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var element = _step.value;

              if (!element.getAttribute('data-jgc-tag')) {
                var src = element.src || (element.tagName == 'LINK' ? element.getAttribute("href") : undefined);

                if (src && src.includes(k)) {
                  if (element.tagName == 'IFRAME') generateIframeDivs(element);
                  removeElements(element);
                } else {
                  element.classList.remove(checkTailwindPrefix('hidden'));
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          var removeStyle = document.querySelectorAll("[data-jgc-remove-style]");

          if (removeStyle) {
            for (var i = 0; i < removeStyle.length; i++) {
              var _element = removeStyle[i];
              if (_element.getAttribute('data-jgc-remove-style') == k) _element.remove();
            }
          }
        }
      }
    } else {
      setTimeout(function () {
        var checkedElement = undefined;
        document.querySelectorAll('iframe,script,link').forEach(function (element) {
          var src = element.src || (element.tagName == 'LINK' ? element.getAttribute("href") : undefined);

          if (src) {
            if (!element.getAttribute('data-jgc-tag')) {
              element.classList.remove(checkTailwindPrefix('hidden'));

              if (objKeys.some(function (v) {
                if (src && src.includes(v)) {
                  arrService.push(JGC.autoCategories[v]);
                  checkedElement = v;
                  return src.includes(v);
                }
              })) {
                var checkIfNecessary = Object.values(JGC.autoCategories[checkedElement]);

                if (checkIfNecessary[1] != 'necessary') {
                  if (element.tagName == 'IFRAME') generateIframeDivs(element);
                  removeElements(element);
                }
              }
            }
          }
        });
        generatePreferenceStorage();
      }, 1);
    }
  }
  /**
  * Check active cookies in AutoMode
  */

  function checkCookiesAutoMode() {
    if (JGC.auto) {
      var checkPreferences = getCookie('JgcPreferences');
      var trueArr = [];

      for (var _i2 = 0, _Object$entries2 = Object.entries(checkPreferences['preferences']); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            k = _Object$entries2$_i[0],
            v = _Object$entries2$_i[1];

        if (v) trueArr.push(k);
      }

      for (var i = 0; i < trueArr.length; i++) {
        trueArr[i];
      }

      autoMode(trueArr);
    }
  }
  /**
  * Generate the storage for "JgcPreferences"
  */

  function generatePreferenceStorage() {
    var checkPreferences = getCookie('JgcPreferences');

    if (checkPreferences == null) {
      var preferences = {};

      for (var _i3 = 0, _Object$entries3 = Object.entries(JGC.getCustomCookies); _i3 < _Object$entries3.length; _i3++) {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
            k = _Object$entries3$_i[0];
            _Object$entries3$_i[1];

        k == 'necessary' ? preferences[k] = true : preferences[k] = false;
      }

      var saveObj = {
        preferences: preferences
      };
      saveCookie(saveObj);
    }
  }
  /**
  * Remove elements and siblings from DOM in AutoMode.
  */

  function removeElements(element) {
    var nextSibling = element.nextSibling; // Need a quick timeout

    setTimeout(function () {
      element.parentNode.removeChild(element);
      element.remove();
      if (nextSibling && nextSibling.tagName == 'IFRAME') nextSibling.remove();
    }, 1);
  }

  var locales = {
    de: {
      'acceptText': 'Cookies akzeptieren',
      'acceptSelectedShortText': 'Ausgewählte akzeptieren',
      'acceptSelectedText': 'Ausgewählte akzeptieren',
      'acceptShortText': 'Akzeptieren',
      'bannerDescription': "\n      Wir verwenden Cookies, um Inhalte zu personalisieren, die Benutzerfreundlichkeit zu verbessern und unseren Datenverkehr zu analysieren.\n      Wenn Sie auf \"Akzeptieren\" klicken, erkl\xE4ren Sie sich mit der Verwendung aller Cookies einverstanden. \n      Sie k\xF6nnen Ihre Einstellungen jederzeit \xE4ndern, indem Sie die Cookie-Einstellungen besuchen.\n    ",
      'bannerShortDescription': 'Diese Website verwendet Cookies.',
      'bannerLinkLabel': 'Datenschutzbestimmungen',
      'bannerLinkDescription': 'Lesen Sie mehr in der',
      'panelTitle': 'Cookies-Einstellungen',
      'preferencesText': 'Mehr erfahren und individuell anpassen',
      'rejectShortText': 'Ablehnen',
      'rejectText': 'Cookies ablehnen',
      'saveAndContinue': 'Speichern und fortfahren',
      'saveAndContinueAcceptAll': 'Alle akzeptieren und schließen',
      'servicesText': 'Inklusive Dienstleistungen'
    },
    fr: {
      'acceptText': 'Accepter les cookies',
      'acceptSelectedShortText': 'Accepter la sélection',
      'acceptSelectedText': 'Accepter la sélection',
      'acceptShortText': 'Accepter',
      'bannerDescription': "\n      Nous utilisons des cookies pour personnaliser le contenu, am\xE9liorer l'exp\xE9rience utilisateur et analyser notre trafic.\n      En cliquant sur \"Accepter\", vous consentez \xE0 l'utilisation de tous les cookies. \n      Vous pouvez modifier vos param\xE8tres \xE0 tout moment en vous rendant dans les pr\xE9f\xE9rences relatives aux cookies.\n    ",
      'bannerShortDescription': 'Ce site web utilise des cookies.',
      'bannerLinkLabel': 'politique de confidentialité',
      'bannerLinkDescription': "Plus d'informations dans le",
      'panelTitle': 'Préférences en matière de cookies',
      'preferencesText': 'En savoir plus et personnaliser',
      'rejectShortText': 'Rejeter',
      'rejectText': 'Rejeter les cookies',
      'saveAndContinue': 'Sauvegarder et continuer',
      'saveAndContinueAcceptAll': 'Accepter tout et fermer',
      'servicesText': 'Les services proposés sont les suivants'
    },
    en: {
      'acceptText': 'Accept cookies',
      'acceptSelectedShortText': 'Accept selected',
      'acceptSelectedText': 'Accept selected',
      'acceptShortText': 'Accept',
      'bannerDescription': "\n      We use cookies to personalize content, improve user experience, and analyze our traffic.\n      By clicking \u201CAccept,\u201D you consent to the use of all the cookies. \n      You may change your settings at any time by visiting the Cookie preferences.\n    ",
      'bannerShortDescription': 'This website uses cookies.',
      'bannerLinkLabel': 'privacy policy',
      'bannerLinkDescription': 'Read more in the',
      'panelTitle': 'Cookies preferences',
      'preferencesText': 'Learn more and customize',
      'rejectShortText': 'Reject',
      'rejectText': 'Reject cookies',
      'saveAndContinue': 'Save and continue',
      'saveAndContinueAcceptAll': 'Accept all and close',
      'servicesText': 'Services included'
    },
    es: {
      'acceptText': 'Aceptar cookies',
      'acceptSelectedShortText': 'Aceptar la selección',
      'acceptSelectedText': 'Aceptar la selección',
      'acceptShortText': 'Aceptar',
      'bannerDescription': "\n      En nuestro sitio utilizamos cookies para personalizar el contenido, mejorar la experiencia del usuario y analizar nuestro tr\xE1fico.\n      Al hacer clic en \"Aceptar\", usted consiente el uso de todas las cookies. \n      Puede cambiar la configuraci\xF3n en cualquier momento visitando las preferencias de cookies.\n    ",
      'bannerShortDescription': 'Este sitio web utiliza cookies.',
      'bannerLinkLabel': 'política de privacidad',
      'bannerLinkDescription': 'Puede obtener más información en nuestra',
      'panelTitle': 'Preferencias de las cookies',
      'preferencesText': 'Más información y personalización',
      'rejectShortText': 'Rechazar',
      'rejectText': 'Rechazar cookies',
      'saveAndContinue': 'Guardar y continuar',
      'saveAndContinueAcceptAll': 'Aceptar todo y cerrar',
      'servicesText': 'Servicios incluidos'
    },
    it: {
      'acceptText': 'Accetta i cookie',
      'acceptSelectedShortText': 'Accetto la selezione',
      'acceptSelectedText': 'Accetto la selezione',
      'acceptShortText': 'Accetto',
      'bannerDescription': "\n      Utilizziamo cookie nostri e di terze parti per personalizzare il contenuto e analizzare il traffico web. \n      Puoi prestare, rifiutare o revocare il tuo consenso, in qualsiasi momento, aprendo il pannello delle preferenze.  \n      Chiudendo questa informativa, continui senza accettare.\n    ",
      'bannerLinkLabel': 'privacy policy',
      'bannerLinkDescription': 'Per saperne di più riguardo i cookie puoi leggere la',
      'bannerShortDescription': 'Utilizziamo i cookies',
      'panelTitle': 'Preferenze cookies',
      'preferencesText': 'Gestisci i cookie',
      'rejectShortText': 'Rifiuto',
      'rejectText': 'Rifiuta i cookie',
      'saveAndContinue': 'Salva e chiudi',
      'saveAndContinueAcceptAll': 'Accetta tutti e chiudi',
      'servicesText': 'Servizi inclusi'
    }
  };

  /**
  * Load banner layouts
  */

  function loadBannerLayout(style) {
    var _JGC$customStyle, _JGC$customStyle2, _JGC$customStyle3, _JGC$customStyle4, _JGC$customStyle5, _JGC$customStyle6, _JGC$customStyle7, _JGC$customStyle8, _JGC$customStyle9, _JGC$customStyle10, _JGC$customStyle11, _JGC$customStyle12, _JGC$customStyle13, _JGC$customStyle14, _JGC$customStyle15, _JGC$customStyle16, _JGC$customStyle17, _JGC$customStyle18, _JGC$bannerConfig$bac, _JGC$bannerConfig$bac2, _JGC$customStyle$bann, _JGC$customStyle19, _JGC$customStyle20, _JGC$customStyle21, _JGC$customStyle$priv, _JGC$customStyle22, _JGC$text, _JGC$bannerConfig, _JGC$customStyle23, _JGC$customStyle24, _JGC$customStyle$bann2, _JGC$customStyle25, _JGC$customStyle26, _JGC$bannerLink, _JGC$text2, _JGC$customStyle27, _JGC$customStyle$bann3, _JGC$customStyle28, _JGC$bannerLink2, _JGC$text3, _JGC$customStyle29, _JGC$customStyle30, _JGC$customStyle31, _JGC$customStyle32, _JGC$customStyle$bann4, _JGC$customStyle33, _JGC$customStyle34, _JGC$text4, _JGC$customStyle35, _JGC$customStyle36, _JGC$customStyle37, _JGC$customStyle38, _JGC$customStyle$bann5, _JGC$customStyle39, _JGC$customStyle40, _JGC$text5, _JGC$customStyle41, _JGC$customStyle42, _JGC$bannerConfig$pos, _JGC$customStyle43, _JGC$customStyle$bann6, _JGC$customStyle44, _JGC$customStyle45, _JGC$bannerLink3, _JGC$text6, _JGC$customStyle46, _JGC$customStyle47, _JGC$bannerConfig$bac3, _JGC$bannerConfig$bac4, _JGC$customStyle$bann7, _JGC$customStyle48, _JGC$customStyle49, _JGC$text7, _JGC$customStyle50, _JGC$customStyle51, _JGC$customStyle$bann8, _JGC$customStyle52, _JGC$customStyle53, _JGC$customStyle54, _JGC$text8, _JGC$customStyle55, _JGC$customStyle56, _JGC$customStyle57, _JGC$bannerConfig$bac5, _JGC$bannerConfig$bac6, _JGC$customStyle58;

    // "Yes" and "No" buttons
    var yesCookies = (_JGC$customStyle = JGC.customStyle) !== null && _JGC$customStyle !== void 0 && _JGC$customStyle.accept ? JGC.customStyle.accept : checkTailwindPrefix('text-green-800 dark:text-green-300 bg-green-50 hover:bg-green-100 transition-all duration-300 dark:bg-green-900 ring-1 ring-green-200 px-2 py-0.5 text-xs uppercase font-bold items-center rounded my-2 border-none');
    var noCookies = (_JGC$customStyle2 = JGC.customStyle) !== null && _JGC$customStyle2 !== void 0 && _JGC$customStyle2.reject ? JGC.customStyle.reject : checkTailwindPrefix('text-red-800 dark:text-red-300 bg-red-50 hover:bg-red-100 transition-all duration-300 dark:bg-red-900 ring-red-200 ring-1 px-2 py-0.5 text-xs uppercase font-bold items-center rounded my-2 border-none');
    var yesCookies2 = (_JGC$customStyle3 = JGC.customStyle) !== null && _JGC$customStyle3 !== void 0 && _JGC$customStyle3.accept ? JGC.customStyle.accept : checkTailwindPrefix('text-green-600 bg-transparent ring-green-400 ring-2 px-3 leading-6 text-xs text-center font-medium uppercase transition transition-all duration-300  hover:bg-green-100 focus:shadow-2xl rounded-full border-none');
    var noCookies2 = (_JGC$customStyle4 = JGC.customStyle) !== null && _JGC$customStyle4 !== void 0 && _JGC$customStyle4.reject ? JGC.customStyle.reject : checkTailwindPrefix('text-red-600 bg-transparent ring-red-600 ring-2 px-3 leading-6 text-xs text-center font-medium uppercase transition transition-all duration-300  hover:bg-red-100 focus:shadow-2xl rounded-full border-none');
    var yesCookies3 = (_JGC$customStyle5 = JGC.customStyle) !== null && _JGC$customStyle5 !== void 0 && _JGC$customStyle5.accept ? JGC.customStyle.accept : checkTailwindPrefix('text-green-600 bg-transparent transition transition-all duration-300 ring-green-400 ring-2 px-3 py-2 leading-tight text-xs text-center font-medium uppercase transition hover:bg-green-100 focus:shadow-2xl rounded-full border-none');
    var noCookies3 = (_JGC$customStyle6 = JGC.customStyle) !== null && _JGC$customStyle6 !== void 0 && _JGC$customStyle6.reject ? JGC.customStyle.reject : checkTailwindPrefix('text-red-600 bg-transparent transition transition-all duration-300 ring-red-600 ring-2 px-3 py-2 leading-tight text-xs text-center font-medium uppercase transition hover:bg-red-100 focus:shadow-2xl rounded-full border-none');
    var yesCookies4 = (_JGC$customStyle7 = JGC.customStyle) !== null && _JGC$customStyle7 !== void 0 && _JGC$customStyle7.accept ? JGC.customStyle.accept : checkTailwindPrefix('text-gray-500 dark:text-green-300 px-3 leading-6 text-xs text-center font-bold uppercase transition focus:shadow-2xl tracking-widest rounded-full border-none');
    var noCookies4 = (_JGC$customStyle8 = JGC.customStyle) !== null && _JGC$customStyle8 !== void 0 && _JGC$customStyle8.reject ? JGC.customStyle.reject : checkTailwindPrefix('text-gray-500  dark:text-red-300 px-3 leading-6 text-xs text-center font-bold uppercase transition focus:shadow-2xl tracking-widest rounded-full border-none');
    var yesCookies5 = (_JGC$customStyle9 = JGC.customStyle) !== null && _JGC$customStyle9 !== void 0 && _JGC$customStyle9.accept ? JGC.customStyle.accept : checkTailwindPrefix('text-white dark:text-green-400 px-5 text-sm text-center font-bold uppercase transition focus:shadow-2xl tracking-wide rounded-full border-none');
    var noCookies5 = (_JGC$customStyle10 = JGC.customStyle) !== null && _JGC$customStyle10 !== void 0 && _JGC$customStyle10.reject ? JGC.customStyle.reject : checkTailwindPrefix('text-red-600 dark:text-red-400 px-5 leading-6 text-sm text-center font-bold uppercase transition focus:shadow-2xl tracking-wide rounded-full border-none');
    var yesCookies6 = (_JGC$customStyle11 = JGC.customStyle) !== null && _JGC$customStyle11 !== void 0 && _JGC$customStyle11.accept ? JGC.customStyle.accept : checkTailwindPrefix('text-white dark:text-gray-400 px-12 py-2 text-sm text-center font-semibold uppercase transition focus:shadow-2xl tracking-widest rounded-full border-none');
    var yesCookies7 = (_JGC$customStyle12 = JGC.customStyle) !== null && _JGC$customStyle12 !== void 0 && _JGC$customStyle12.reject ? JGC.customStyle.reject : checkTailwindPrefix('text-gray-600 dark:text-white rounded-full text-xs font-semibold focus:shadow-2xl border-none');
    var noCookies7 = (_JGC$customStyle13 = JGC.customStyle) !== null && _JGC$customStyle13 !== void 0 && _JGC$customStyle13.accept ? JGC.customStyle.accept : checkTailwindPrefix('text-gray-600 dark:text-white text-xs leading-6 font-bold focus:shadow-2xl rounded-full border-none');
    var yesCookies8 = (_JGC$customStyle14 = JGC.customStyle) !== null && _JGC$customStyle14 !== void 0 && _JGC$customStyle14.reject ? JGC.customStyle.reject : checkTailwindPrefix('text-gray-600 group-hover:text-green-600 dark:bg-green-900 py-2 dark:text-green-400 px-5 text-sm text-center font-semibold transition focus:shadow-2xl tracking-wide rounded-full border-none');
    var selectedCookies8 = (_JGC$customStyle15 = JGC.customStyle) !== null && _JGC$customStyle15 !== void 0 && _JGC$customStyle15.accept ? JGC.customStyle.accept : checkTailwindPrefix('text-orange-600 group-hover:text-orange-600 dark:text-orange-400 dark:bg-orange-900 py-2 px-5 text-sm text-center font-semibold transition focus:shadow-2xl tracking-wide rounded-full border-none');
    var noCookies8 = (_JGC$customStyle16 = JGC.customStyle) !== null && _JGC$customStyle16 !== void 0 && _JGC$customStyle16.accept ? JGC.customStyle.accept : checkTailwindPrefix('text-red-600 group-hover:text-red-600 dark:bg-red-900 py-2 dark:text-red-400 px-5 leading-6 text-sm text-center font-semibold transition focus:shadow-2xl tracking-wide rounded-full border-none');
    var yesCookies9 = (_JGC$customStyle17 = JGC.customStyle) !== null && _JGC$customStyle17 !== void 0 && _JGC$customStyle17.reject ? JGC.customStyle.reject : checkTailwindPrefix('text-white bg-black dark:text-gray-100 px-6 py-1 text-xs text-center font-semibold uppercase transition focus:shadow-2xl tracking-widest rounded-full border-none');
    var noCookies9 = (_JGC$customStyle18 = JGC.customStyle) !== null && _JGC$customStyle18 !== void 0 && _JGC$customStyle18.accept ? JGC.customStyle.accept : checkTailwindPrefix('text-red-900 ring-1 ring-red-900 dark:text-red-700 dark:ring-red-700 px-6 py-1 text-xs text-center font-semibold uppercase transition focus:shadow-2xl tracking-widest rounded-full border-none');

    switch (style) {
      case "style1":
        JGC.positions = {
          "top": checkTailwindPrefix("justify-top items-start top-0"),
          "center": checkTailwindPrefix("mx-auto top-1/2 -translate-y-1/2"),
          "bottom": checkTailwindPrefix("justify-end items-center bottom-0")
        };
        JGC.banner = document.createElement("div");
        JGC.banner.style.display = "none";
        JGC.banner.innerHTML = "<div id=\"bannerContent\" style=\"".concat(JGC.bannerConfig.backgroundImage ? "background-size:cover; background-image:url(".concat(JGC.bannerConfig.backgroundImage, ")") : '', "\" \n            class=\"\n            ").concat(JGC.positions[JGC.bannerConfig.position || 'bottom'], " \n            ").concat(JGC.bannerConfig.backgroundColor, " \n            ").concat(JGC.bannerConfig.backgroundImage ? "".concat(JGC.bannerConfig.backgroundColor, " ").concat(checkTailwindPrefix('p-2')) : "".concat(JGC.bannerConfig.innerBackgroundImage ? '' : checkTailwindPrefix('p-6')), "\n            ").concat(getMaxWidth('max-w-sm'), "\n            ").concat(checkTailwindPrefix('fixed shadow-2xl md:flex md:flex-col md:space-x-1 right-0 md:mr-[2%] transition duration-700 ease-in-out z-[99999] rounded'), "\">\n            <div class=\"").concat(checkTailwindPrefix('space-y-2 flex flex-col'), " ").concat(JGC.bannerConfig.backgroundImage && !JGC.bannerConfig.innerBackgroundImage ? "".concat((_JGC$bannerConfig$bac = JGC.bannerConfig.backgroundColor) !== null && _JGC$bannerConfig$bac !== void 0 ? _JGC$bannerConfig$bac : '', "  ").concat(checkTailwindPrefix('p-4')) : '', "\n              ").concat(JGC.bannerConfig.innerBackgroundImage && !JGC.bannerConfig.backgroundImage ? checkTailwindPrefix('pb-8') : '', " \n              ").concat(JGC.bannerConfig.innerBackgroundImage && JGC.bannerConfig.backgroundImage ? "".concat(checkTailwindPrefix('pb-8'), " ").concat((_JGC$bannerConfig$bac2 = JGC.bannerConfig.backgroundColor) !== null && _JGC$bannerConfig$bac2 !== void 0 ? _JGC$bannerConfig$bac2 : '') : '', "\n              \">\n              ").concat(JGC.bannerConfig.innerBackgroundImage ? "<img class=\"".concat(checkTailwindPrefix('md:rounded-t'), "\" src=\"").concat(JGC.bannerConfig.innerBackgroundImage, "\" />") : '', "\n              ").concat(returnLogo(), "\n              <div class=\"").concat(checkTailwindPrefix('flex w-full'), "\" >\n                  <div class=\"").concat(checkTailwindPrefix('flex items-center space-x-1'), " ").concat(JGC.bannerConfig.innerBackgroundImage ? checkTailwindPrefix('px-6') : '', "\">\n                    ").concat(returnIcon(), "\n                    <h4 class=\"").concat((_JGC$customStyle$bann = (_JGC$customStyle19 = JGC.customStyle) === null || _JGC$customStyle19 === void 0 ? void 0 : _JGC$customStyle19.bannerTitle) !== null && _JGC$customStyle$bann !== void 0 ? _JGC$customStyle$bann : checkTailwindPrefix('text-xl font-bold dark:text-white'), "\">").concat(JGC.bannerConfig.title, "</h4>\n                  </div>  \n                  ").concat(JGC.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat(JGC.bannerConfig.logo ? "".concat(checkTailwindPrefix('absolute top-2 right-4')) : "", "   ").concat((_JGC$customStyle20 = JGC.customStyle) !== null && _JGC$customStyle20 !== void 0 && _JGC$customStyle20.closeButton ? "".concat(JGC.customStyle.closeButton) : "".concat(checkTailwindPrefix('dark:text-white text-xl ml-auto m-0 p-0 bg-transparent')), "\">&times;</button>") : '', "\n              </div>\n              <div class=\"").concat((_JGC$customStyle21 = JGC.customStyle) !== null && _JGC$customStyle21 !== void 0 && _JGC$customStyle21.bannerText ? JGC.customStyle.bannerText : checkTailwindPrefix('dark:text-white'), " ").concat(JGC.bannerConfig.innerBackgroundImage ? checkTailwindPrefix('px-6') : '', "\">\n                <div>").concat(JGC.bannerText ? JGC.bannerText : "".concat(JGC.text.descriptionText ? JGC.text.descriptionText : JGC.locale.bannerDescription), "<br/></div>\n                <div>").concat(JGC.bannerLink ? JGC.bannerLink : "".concat(JGC.locale.bannerLinkDescription, " <a class=\"").concat((_JGC$customStyle$priv = (_JGC$customStyle22 = JGC.customStyle) === null || _JGC$customStyle22 === void 0 ? void 0 : _JGC$customStyle22.privacyLink) !== null && _JGC$customStyle$priv !== void 0 ? _JGC$customStyle$priv : "".concat(checkTailwindPrefix('dark:decoration-sky-500 dark:underline font-bold text-black dark:text-white')), "\" target=\"_blank\" href=\"").concat(JGC.config.privacyLink, "\"> ").concat((_JGC$text = JGC.text) !== null && _JGC$text !== void 0 && _JGC$text.bannerLinkLabel ? JGC.text.bannerLinkLabel : JGC.locale.bannerLinkLabel, "</a>"), "</div>\n              </div>\n              <div class=\"").concat(checkTailwindPrefix('mt-2 flex flex-col'), " ").concat(JGC.bannerConfig.innerBackgroundImage && checkTailwindPrefix('px-6'), "\">\n                <div class=\"").concat(checkTailwindPrefix('flex space-x-2'), "\">\n                  <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"yesCookies\" class=\"").concat(yesCookies, "\">").concat(JGC.bannerConfig.shortText ? JGC.locale.acceptShortText : JGC.text.acceptText, "</button>\n                  ").concat(((_JGC$bannerConfig = JGC.bannerConfig) === null || _JGC$bannerConfig === void 0 ? void 0 : _JGC$bannerConfig.disableReject) == false ? "<button role=\"button\" tabindex=\"0\" type=\"button\" id=\"noCookies\" class=\"".concat(noCookies, "\">").concat(JGC.bannerConfig.shortText ? JGC.locale.rejectShortText : JGC.text.rejectText, "</button>") : '', "\n                </div>\n                <div>").concat(managePreferencesLink(), "</div>\n              </div>\n            </div>\n      </div>");
        document.body.appendChild(JGC.banner);
        makeBannerAnimation();
        if (JGC.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
          return closeBannerWithButton();
        });
        generateButtons();
        break;

      case "style2":
        JGC.positions = {
          "top": checkTailwindPrefix("justify-top items-center top-0 mt-6"),
          "center": checkTailwindPrefix("mx-auto top-1/2 -translate-y-1/2"),
          "bottom": checkTailwindPrefix("justify-end items-center bottom-0")
        };
        JGC.banner = document.createElement("div");
        JGC.banner.style.display = "none";
        JGC.banner.innerHTML = "\n      <div id=\"bannerContent\"\n      style=\"".concat(JGC.bannerConfig.backgroundImage && "background-size:cover; background-image:url(".concat(JGC.bannerConfig.backgroundImage, ")"), "\"\n      class=\"").concat(JGC.positions[JGC.bannerConfig.position || 'bottom'], "\n        ").concat(JGC.bannerConfig.backgroundColor, " \n        ").concat(JGC.bannerConfig.backgroundImage ? checkTailwindPrefix('p-2') : checkTailwindPrefix('p-6'), "\n        ").concat(getMaxWidth('max-w-5xl'), "\n          ").concat(checkTailwindPrefix('fixed mx-auto md:left-1/2 md:-translate-x-1/2 right-0 shadow-2xl md:space-x-1 md:mr-[2%] md:mb-[1.5%]  transition duration-700 ease-in-out z-[999] md:rounded-full'), "\">\n            <div class=\"").concat(checkTailwindPrefix('flex justify-center items-center flex-col relative'), "\n            ").concat(JGC.bannerConfig.backgroundImage ? "".concat(JGC.bannerConfig.backgroundColor, " ").concat(checkTailwindPrefix('p-6')) : checkTailwindPrefix('p-4'), "\">\n            ").concat(returnLogo(), "\n            ").concat(JGC.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat((_JGC$customStyle23 = JGC.customStyle) !== null && _JGC$customStyle23 !== void 0 && _JGC$customStyle23.closeButton ? JGC.customStyle.closeButton : checkTailwindPrefix('text-white'), " ").concat((_JGC$customStyle24 = JGC.customStyle) !== null && _JGC$customStyle24 !== void 0 && _JGC$customStyle24.closeButton ? JGC.customStyle.closeButton : checkTailwindPrefix('bg-black dark:bg-white'), "  \n            ").concat(checkTailwindPrefix('rounded-full w-6 h-6 self-end absolute -top-5 right-20 transform -translate-y-4 dark:text-black dark:ring-2 dark:ring-gray-800 m-0 p-0'), "\">\n            &times;</button>") : '', "\n              <div class=\"").concat(checkTailwindPrefix('flex items-center space-x-2 mb-4 dark:text-white'), "\">\n                ").concat(returnIcon(), "\n                <h4 class=\"").concat(checkTailwindPrefix('text-xl font-bold'), " ").concat((_JGC$customStyle$bann2 = (_JGC$customStyle25 = JGC.customStyle) === null || _JGC$customStyle25 === void 0 ? void 0 : _JGC$customStyle25.bannerTitle) !== null && _JGC$customStyle$bann2 !== void 0 ? _JGC$customStyle$bann2 : '', "\">").concat(JGC.bannerConfig.title, "</h4>\n              </div>\n              <div class=\"").concat((_JGC$customStyle26 = JGC.customStyle) !== null && _JGC$customStyle26 !== void 0 && _JGC$customStyle26.bannerText ? JGC.customStyle.bannerText : "".concat(checkTailwindPrefix('dark:text-gray-300')), " ").concat(checkTailwindPrefix('text-sm text-center'), "\">\n                <div>").concat(JGC.bannerText ? JGC.bannerText : "".concat(JGC.text.descriptionText ? JGC.text.descriptionText : JGC.locale.bannerDescription), " <br/></div>\n                <div>").concat((_JGC$bannerLink = JGC.bannerLink) !== null && _JGC$bannerLink !== void 0 ? _JGC$bannerLink : "<div>".concat(JGC.locale.bannerLinkDescription, " <a class=\"").concat(checkTailwindPrefix('font-bold'), "\" target=\"_blank\" href=\"").concat(JGC.config.privacyLink, "\"> ").concat((_JGC$text2 = JGC.text) !== null && _JGC$text2 !== void 0 && _JGC$text2.bannerLinkLabel ? JGC.text.bannerLinkLabel : JGC.locale.bannerLinkLabel, "</a></div>"), "  </div>\n              </div>\n              <div class=\"").concat(checkTailwindPrefix('flex justify-center space-x-2 mt-6'), "\">\n                <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"yesCookies\" class=\"").concat(yesCookies2, "\">").concat(JGC.bannerConfig.shortText ? JGC.locale.acceptShortText : JGC.text.acceptText, "</button>\n                <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"noCookies\" class=\"").concat(noCookies2, "\">").concat(JGC.bannerConfig.shortText ? JGC.locale.rejectShortText : JGC.text.rejectText, "</button>\n              </div>\n              <div class=\"").concat(checkTailwindPrefix('mt-2'), "\">").concat(managePreferencesLink(), "</div>\n            </div>\n      </div>\n      ");
        document.body.appendChild(JGC.banner);
        makeBannerAnimation();
        if (JGC.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
          return closeBannerWithButton();
        });
        generateButtons();
        break;

      case "style3":
        JGC.positions = {
          "top": checkTailwindPrefix("justify-top items-center top-0 mt-6"),
          "center": checkTailwindPrefix("mx-auto top-1/2 -translate-y-1/2"),
          "bottom": checkTailwindPrefix("justify-end items-center bottom-0")
        };
        JGC.banner = document.createElement("div");
        JGC.banner.style.display = "none";
        JGC.banner.innerHTML = "\n      <div id=\"bannerContent\"\n      style=\"".concat(JGC.bannerConfig.backgroundImage && "background-size:cover; background-image:url(".concat(JGC.bannerConfig.backgroundImage, ")"), "\"\n      class=\"\n      ").concat(JGC.positions[JGC.bannerConfig.position || 'bottom'], "\n      ").concat(JGC.bannerConfig.backgroundColor, " \n\n      ").concat(JGC.bannerConfig.backgroundImage ? checkTailwindPrefix('p-2') : checkTailwindPrefix('p-6'), " \n      ").concat(checkTailwindPrefix('fixed shadow-2xl mx-auto md:left-1/2 md:-translate-x-1/2 md:mb-[1.5%]  transition duration-700 ease-in-out z-[999] md:rounded-full'), "\">\n            <div class=\"").concat(checkTailwindPrefix('md:grid grid-cols-5 relative justify-between items-center md:space-x-4'), " \n            ").concat(JGC.bannerConfig.backgroundImage ? "".concat(JGC.bannerConfig.backgroundColor, " ").concat(checkTailwindPrefix('p-6 rounded-full')) : checkTailwindPrefix('p-4'), "\">\n              <div class=\"").concat((_JGC$customStyle27 = JGC.customStyle) !== null && _JGC$customStyle27 !== void 0 && _JGC$customStyle27.bannerText ? JGC.customStyle.bannerText : "".concat(checkTailwindPrefix('dark:text-gray-300')), " \n                ").concat(checkTailwindPrefix('text-xs mt-2 md:mt-0 flex flex-col items-start px-2 col-span-3'), "\">\n                ").concat(returnLogo(), "\n                <div class=\"").concat(checkTailwindPrefix('flex items-center space-x-1 mb-1'), "\">\n                  ").concat(returnIcon(), "\n                  <h4 class=\"").concat(checkTailwindPrefix('text-xl font-bold leading-tight'), " ").concat((_JGC$customStyle$bann3 = (_JGC$customStyle28 = JGC.customStyle) === null || _JGC$customStyle28 === void 0 ? void 0 : _JGC$customStyle28.bannerTitle) !== null && _JGC$customStyle$bann3 !== void 0 ? _JGC$customStyle$bann3 : '', "\">").concat(JGC.bannerConfig.title, "</h4>\n                </div>\n                ").concat(JGC.bannerText ? JGC.bannerText : "".concat(JGC.text.descriptionText ? JGC.text.descriptionText : JGC.locale.bannerDescription), " <br/>  \n                ").concat((_JGC$bannerLink2 = JGC.bannerLink) !== null && _JGC$bannerLink2 !== void 0 ? _JGC$bannerLink2 : "<div>".concat(JGC.locale.bannerLinkDescription, " <a class=\"").concat(checkTailwindPrefix('font-bold'), "\" target=\"_blank\" href=\"").concat(JGC.config.privacyLink, "\"> ").concat((_JGC$text3 = JGC.text) !== null && _JGC$text3 !== void 0 && _JGC$text3.bannerLinkLabel ? JGC.text.bannerLinkLabel : JGC.locale.bannerLinkLabel, "</a></div>"), "  \n              </div>\n              <div class=\"").concat(checkTailwindPrefix('col-span-2 flex items-center justify-center'), "\">\n                ").concat(JGC.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat((_JGC$customStyle29 = JGC.customStyle) !== null && _JGC$customStyle29 !== void 0 && _JGC$customStyle29.customStyle ? JGC.customStyle.customStyle : checkTailwindPrefix('text-white'), " \n                ").concat((_JGC$customStyle30 = JGC.customStyle) !== null && _JGC$customStyle30 !== void 0 && _JGC$customStyle30.closeButton ? JGC.customStyle.closeButton : checkTailwindPrefix('bg-black'), " \n                ").concat(checkTailwindPrefix('rounded-full w-6 h-6 self-end absolute -top-4 right-6 transform -translate-y-4 m-0 p-0'), "\">&times;</button>") : '', "\n              <div class=\"").concat(checkTailwindPrefix('flex flex-col mt-4 md:mt-0 '), "\">\n                <div class=\"").concat(checkTailwindPrefix('space-x-3 flex'), "\">\n                  <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"yesCookies\" class=\"").concat(yesCookies3, "\">").concat(JGC.bannerConfig.shortText ? JGC.bannerConfig.shortText : JGC.text.acceptText, "</button>\n                  <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"noCookies\" class=\"").concat(noCookies3, "\">").concat(JGC.bannerConfig.shortText ? JGC.locale.rejectShortText : JGC.text.rejectText, "</button>\n                </div>\n                <div class=\"").concat(checkTailwindPrefix('mt-2 flex justify-center'), "\">").concat(managePreferencesLink(), "</div>\n              </div>\n              </div>\n            </div>\n      </div>\n      ");
        document.body.appendChild(JGC.banner);
        makeBannerAnimation();
        if (JGC.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
          return closeBannerWithButton();
        });
        generateButtons();
        break;

      case "style4":
        JGC.positions = {
          "top": checkTailwindPrefix("justify-top items-center p-6"),
          "center": checkTailwindPrefix("items-center justify-center"),
          "bottom": checkTailwindPrefix("justify-end items-center p-6")
        };
        JGC.banner = document.createElement("div");
        JGC.banner.style.display = "none";
        JGC.banner.innerHTML = "\n        <div id=\"bannerContent\" \n        style=\"background-color: rgba(0,0,0,0.7);\"\n        class=\"".concat(JGC.positions[JGC.bannerConfig.position || 'center'], "\n      ").concat(checkTailwindPrefix('w-full min-h-screen fixed flex flex-col shadow-2xl top-0 transition duration-700 ease-in-out z-[999]'), "\">\n        ").concat(JGC.bannerConfig.backgroundImage ? "\n              <div class=\"".concat(checkTailwindPrefix('p-2'), "\" style=\"background-size:cover; background-image:url(").concat(JGC.bannerConfig.backgroundImage, ")\">") : '', "\n              <div class=\"").concat(JGC.bannerConfig.backgroundColor, "  bg-gray-300 \n              ").concat(getMaxWidth('max-w-xl'), "\n              ").concat(checkTailwindPrefix('relative  flex flex-col justify-between items-center'), "\">\n                ").concat(JGC.bannerConfig.innerBackgroundImage ? "<img class=\"".concat(checkTailwindPrefix('md:rounded-t'), "\" src=\"").concat(JGC.bannerConfig.innerBackgroundImage, "\" />") : '', "\n                <div class=\"").concat(checkTailwindPrefix('flex flex-col justify-start w-full px-6'), " ").concat(JGC.bannerConfig.innerBackgroundImage ? checkTailwindPrefix('pb-6') : checkTailwindPrefix('py-6'), " ").concat(checkTailwindPrefix('space-x-1"'), ">\n                ").concat(returnLogo(), "\n                ").concat(JGC.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat((_JGC$customStyle31 = JGC.customStyle) !== null && _JGC$customStyle31 !== void 0 && _JGC$customStyle31.closeButton ? JGC.customStyle.closeButton : checkTailwindPrefix('text-white'), " \n                ").concat((_JGC$customStyle32 = JGC.customStyle) !== null && _JGC$customStyle32 !== void 0 && _JGC$customStyle32.closeButton ? JGC.customStyle.closeButton : checkTailwindPrefix('bg-black'), " ").concat(checkTailwindPrefix('rounded-full w-6 h-6 self-end absolute top-0 right-0 transform -translate-y-4 translate-x-2 m-0 p-0'), "\">&times;</button>") : '', " \n                  <div class=\"").concat(checkTailwindPrefix('flex space-x-2 items-center'), "\">\n                  ").concat(returnIcon(), "\n                  <h4 class=\"").concat((_JGC$customStyle$bann4 = (_JGC$customStyle33 = JGC.customStyle) === null || _JGC$customStyle33 === void 0 ? void 0 : _JGC$customStyle33.bannerTitle) !== null && _JGC$customStyle$bann4 !== void 0 ? _JGC$customStyle$bann4 : checkTailwindPrefix('text-2xl font-bold dark:text-white'), "\">").concat(JGC.bannerConfig.title, "</h4>\n                  </div>\n                </div>\n                <div class=\"").concat((_JGC$customStyle34 = JGC.customStyle) !== null && _JGC$customStyle34 !== void 0 && _JGC$customStyle34.bannerText ? JGC.customStyle.bannerText : "".concat(checkTailwindPrefix('dark:text-gray-300')), " ").concat(checkTailwindPrefix('flex flex-col text-sm px-6 pb-6'), "\">\n                  ").concat(JGC.bannerText ? JGC.bannerText : "".concat(JGC.text.descriptionText ? JGC.text.descriptionText : JGC.locale.bannerDescription), " <br/>  \n                  ").concat(JGC.bannerLink ? JGC.bannerLink : "".concat(JGC.locale.bannerLinkDescription, " <a class=\"").concat(checkTailwindPrefix('font-bold'), "\" target=\"_blank\" href=\"").concat(JGC.config.privacyLink, "\"> ").concat((_JGC$text4 = JGC.text) !== null && _JGC$text4 !== void 0 && _JGC$text4.bannerLinkLabel ? JGC.text.bannerLinkLabel : JGC.locale.bannerLinkLabel, "</a>"), "  \n                </div>  \n                <div class=\"").concat(checkTailwindPrefix('grid grid-cols-2 bg-black w-full divide-x divide-gray-300 dark:divide-gray-700'), "\">\n                <div class=\"").concat(checkTailwindPrefix('group'), "\">\n                    <div class=\"").concat((_JGC$customStyle35 = JGC.customStyle) !== null && _JGC$customStyle35 !== void 0 && _JGC$customStyle35.accept ? JGC.customStyle.accept : checkTailwindPrefix('bg-gray-300 dark:bg-gray-800'), " \n                      ").concat(checkTailwindPrefix('py-4 flex items-center justify-center transition duration-500 group-hover:scale-110 relative hover:z-10'), "\" style=\"box-shadow: 0px 14px 20px 20px rgba(0, 0, 0, 10%);\">\n                      <button type=\"button\" role=\"button\" tabindex=\"0\" id=\"yesCookies\" class=\"").concat(yesCookies4, " group-hover:text-green-800 transition duration-500\">\n                        ").concat(JGC.bannerConfig.shortText ? JGC.bannerConfig.shortText : JGC.text.acceptText, "    \n                      </button>\n                    </div>\n                  </div>\n                  <div class=\"").concat(checkTailwindPrefix('group'), "\">\n                    <div class=\"").concat((_JGC$customStyle36 = JGC.customStyle) !== null && _JGC$customStyle36 !== void 0 && _JGC$customStyle36.reject ? JGC.customStyle.reject : checkTailwindPrefix('bg-gray-300 dark:bg-gray-800'), "\n                      ").concat(checkTailwindPrefix('py-4 flex items-center justify-center  transition duration-500 hover:scale-110 relative hover:z-10'), "\" style=\"box-shadow: 0px 14px 20px 5px rgb(0, 0, 0, 10%);\">\n                      <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"noCookies\" class=\"").concat(noCookies4, " group-hover:text-red-800 transition duration-500\">\n                        ").concat(JGC.bannerConfig.shortText ? JGC.locale.rejectShortText : JGC.text.rejectText, "    \n                      </button>\n                    </div>\n                  </div> \n                </div>\n                <div class=\"").concat(checkTailwindPrefix('bg-gradient-to-r from-gray-300 dark:from-gray-600 to-gray-400 dark:to-gray-800 w-full flex justify-center py-2'), "\">\n                  ").concat(managePreferencesLink(checkTailwindPrefix('text-white')), "\n                </div>\n              </div>\n              ").concat(JGC.bannerConfig.backgroundImage ? "</div>" : '', "\n        </div>\n        ");
        document.body.appendChild(JGC.banner);
        if (JGC.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
          return closeBannerWithButton();
        });
        generateButtons();
        break;

      case "style5":
        JGC.positions = {
          "top": checkTailwindPrefix("top-0"),
          "center": checkTailwindPrefix("mx-auto top-1/2 -translate-y-1/2"),
          "bottom": checkTailwindPrefix("bottom-0")
        };
        JGC.banner = document.createElement("div");
        JGC.banner.style.display = "none";
        JGC.banner.innerHTML = "<div style=\"".concat(JGC.bannerConfig.backgroundImage && "background-size:cover; background-image:url(".concat(JGC.bannerConfig.backgroundImage, ")"), "\"\n        id=\"bannerContent\" class=\"\n        ").concat(JGC.positions[JGC.bannerConfig.position || 'bottom'], "\n        ").concat(JGC.bannerConfig.backgroundColor, "\n        ").concat(JGC.bannerConfig.innerBackgroundImage ? "".concat(checkTailwindPrefix("grid grid-cols-5"), "  ").concat(JGC.bannerConfig.backgroundImage ? '' : checkTailwindPrefix('gap-6')) : checkTailwindPrefix('flex flex-col'), "\n        ").concat(JGC.bannerConfig.backgroundImage ? checkTailwindPrefix('p-2') : checkTailwindPrefix('px-6 items-start justify-center py-8'), " \n        ").concat(checkTailwindPrefix('sm:w-full md:w-full w-full fixed shadow-2xl  transition duration-700 ease-in-out dark:bg-gray-800 z-[999]'), "\">\n        ").concat(JGC.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat((_JGC$customStyle37 = JGC.customStyle) !== null && _JGC$customStyle37 !== void 0 && _JGC$customStyle37.closeButton ? JGC.customStyle.closeButton : checkTailwindPrefix('text-black dark:text-white'), " \n        ").concat((_JGC$customStyle38 = JGC.customStyle) !== null && _JGC$customStyle38 !== void 0 && _JGC$customStyle38.closeButton ? JGC.customStyle.closeButton : '', " ").concat(checkTailwindPrefix('rounded-full text-2xl self-end m-0 p-0 bg-transparent'), "\">&times;</button>") : '', "\n        ").concat(JGC.bannerConfig.innerBackgroundImage ? "<img class=\"".concat(checkTailwindPrefix('md:rounded-t col-span-1'), "\" src=\"").concat(JGC.bannerConfig.innerBackgroundImage, "\" />") : '', "\n            <div class=\"\n            ").concat(JGC.bannerConfig.backgroundImage ? "".concat(JGC.bannerConfig.backgroundColor, " ").concat(checkTailwindPrefix('w-full p-4')) : '', " \n            ").concat(JGC.bannerConfig.innerBackgroundImage && checkTailwindPrefix('col-span-4'), "\n            ").concat(checkTailwindPrefix('flex flex-col items-start space-y-3'), "\">                  \n                <div>\n                  <div class=\"").concat(checkTailwindPrefix('flex flex-col items-start space-x-1 w-full'), "\">\n                      ").concat(returnLogo(), "\n                    <div class=\"").concat(checkTailwindPrefix('flex space-x-2 items-center'), "\"> \n                      ").concat(returnIcon(), "\n                      <h4 class=\"").concat((_JGC$customStyle$bann5 = (_JGC$customStyle39 = JGC.customStyle) === null || _JGC$customStyle39 === void 0 ? void 0 : _JGC$customStyle39.bannerTitle) !== null && _JGC$customStyle$bann5 !== void 0 ? _JGC$customStyle$bann5 : checkTailwindPrefix('text-2xl font-semibold dark:text-white'), "\">").concat(JGC.bannerConfig.title, "</h4>   \n                    </div>                  \n                  </div>\n                  <div class=\"").concat((_JGC$customStyle40 = JGC.customStyle) !== null && _JGC$customStyle40 !== void 0 && _JGC$customStyle40.bannerText ? JGC.customStyle.bannerText : "".concat(checkTailwindPrefix('dark:text-gray-300')), "\">\n                    ").concat(JGC.bannerText ? JGC.bannerText : "".concat(JGC.text.descriptionText ? JGC.text.descriptionText : JGC.locale.bannerDescription), "<br/>  \n                    ").concat(JGC.bannerLink ? JGC.bannerLink : "".concat(JGC.locale.bannerLinkDescription, " \n                    <a class=\"").concat(checkTailwindPrefix('font-bold'), "\" target=\"_blank\" href=\"").concat(JGC.config.privacyLink, "\"> ").concat((_JGC$text5 = JGC.text) !== null && _JGC$text5 !== void 0 && _JGC$text5.bannerLinkLabel ? JGC.text.bannerLinkLabel : JGC.locale.bannerLinkLabel, "</a>."), "  \n                  </div>\n                </div>                                                      \n                <div class=\"").concat(checkTailwindPrefix('flex w-full space-x-2'), "\">\n                  <div class=\"").concat((_JGC$customStyle41 = JGC.customStyle) !== null && _JGC$customStyle41 !== void 0 && _JGC$customStyle41.accept ? JGC.customStyle.accept : checkTailwindPrefix('bg-black dark:bg-gray-600'), " \n                    ").concat(checkTailwindPrefix('py-2 rounded-full flex items-center justify-center shadow-2xl'), "\">\n                    <button type=\"button\" role=\"button\" tabindex=\"0\" id=\"yesCookies\" class=\"").concat(yesCookies5, "\">\n                      ").concat(JGC.bannerConfig.shortText ? JGC.locale.acceptShortText : JGC.text.acceptText, "    \n                    </button>\n                  </div>\n                  <div class=\"").concat((_JGC$customStyle42 = JGC.customStyle) !== null && _JGC$customStyle42 !== void 0 && _JGC$customStyle42.reject ? JGC.customStyle.reject : checkTailwindPrefix('dark:bg-gray-600'), " \n                  ").concat(checkTailwindPrefix('py-2 border dark:border-0 border-red-200 rounded-full flex items-center justify-center shadow-2xl'), "\">\n                    <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"noCookies\" class=\"").concat(noCookies5, "\"> ").concat(JGC.bannerConfig.shortText ? JGC.locale.rejectShortText : JGC.text.rejectText, " </button>\n                  </div>\n                </div>\n                ").concat(managePreferencesLink(), "\n              </div>\n        </div>\n        ");
        document.body.appendChild(JGC.banner);
        makeBannerAnimation();
        if (JGC.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
          return closeBannerWithButton();
        });
        generateButtons();
        break;

      case "style6":
        JGC.positions = {
          "center": checkTailwindPrefix("items-center justify-center"),
          "bottom": checkTailwindPrefix("justify-end items-center"),
          "top": checkTailwindPrefix("justify-top items-center")
        };
        JGC.banner = document.createElement("div");
        JGC.banner.style.display = "none";
        JGC.banner.innerHTML = "\n      <div \n      id=\"bannerContent\" class=\"\n      ".concat(JGC.positions[(_JGC$bannerConfig$pos = JGC.bannerConfig.position) !== null && _JGC$bannerConfig$pos !== void 0 ? _JGC$bannerConfig$pos : 'center'], "\n      ").concat(JGC.bannerConfig.backgroundImage ? checkTailwindPrefix('p-2') : checkTailwindPrefix('p-6'), "\n    ").concat(checkTailwindPrefix('bg-black bg-opacity-70 w-full min-h-screen fixed flex flex-col top-0 shadow-2xl mx-auto transition duration-700 ease-in-out z-[999]'), "\">\n      ").concat(JGC.bannerConfig.backgroundImage ? "\n            <div class=\"".concat(checkTailwindPrefix('p-2'), " ").concat(checkTailwindPrefix('md:rounded-xl'), "\" \n            style=\"background-size:cover; background-image:url(").concat(JGC.bannerConfig.backgroundImage, ")\">") : '', "\n            ").concat(JGC.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat(checkTailwindPrefix('rounded-full w-6 h-6 self-end absolute top-4 right-6'), " ").concat((_JGC$customStyle43 = JGC.customStyle) !== null && _JGC$customStyle43 !== void 0 && _JGC$customStyle43.closeButton ? JGC.customStyle.closeButton : checkTailwindPrefix('text-white m-0 p-0 bg-transparent'), "\">&times;</button>") : '', " \n            <div class=\"").concat(JGC.bannerConfig.backgroundColor, " \n            ").concat(JGC.bannerConfig.innerBackgroundImage ? checkTailwindPrefix('pb-4') : checkTailwindPrefix('py-4'), "\n            ").concat(getMaxWidth('max-w-xl'), "\n            ").concat(checkTailwindPrefix('flex flex-col justify-between items-center md:rounded-xl'), "\">\n              ").concat(JGC.bannerConfig.innerBackgroundImage ? "<img class=\"".concat(checkTailwindPrefix('md:rounded-t'), "\" src=\"").concat(JGC.bannerConfig.innerBackgroundImage, "\" />") : '', "\n              <div class=\"").concat(checkTailwindPrefix('flex flex-col items-center mt-4'), "\">\n                ").concat(returnLogo(), "\n                <div class=\"").concat(checkTailwindPrefix('flex space-x-2 items-center'), "\">\n                  ").concat(returnIcon(), "\n                  <h4 class=\"").concat((_JGC$customStyle$bann6 = (_JGC$customStyle44 = JGC.customStyle) === null || _JGC$customStyle44 === void 0 ? void 0 : _JGC$customStyle44.bannerTitle) !== null && _JGC$customStyle$bann6 !== void 0 ? _JGC$customStyle$bann6 : checkTailwindPrefix('text-3xl font-bold dark:text-white'), "\">").concat(JGC.bannerConfig.title, "</h4>\n                </div>\n              </div>                            \n              <div class=\"").concat((_JGC$customStyle45 = JGC.customStyle) !== null && _JGC$customStyle45 !== void 0 && _JGC$customStyle45.bannerText ? JGC.customStyle.bannerText : "".concat(checkTailwindPrefix('dark:text-gray-300')), " \n              ").concat(checkTailwindPrefix('flex flex-col text-xs px-12 text-center mt-2'), "\">\n                ").concat(JGC.bannerText ? JGC.bannerText : "".concat(JGC.text.descriptionText ? JGC.text.descriptionText : JGC.locale.bannerDescription), " <br/>  \n                ").concat((_JGC$bannerLink3 = JGC.bannerLink) !== null && _JGC$bannerLink3 !== void 0 ? _JGC$bannerLink3 : "<div>".concat(JGC.locale.bannerLinkDescription, " <a class=\"jgc-font-bold\" target=\"_blank\" href=\"").concat(JGC.config.privacyLink, "\"> ").concat((_JGC$text6 = JGC.text) !== null && _JGC$text6 !== void 0 && _JGC$text6.bannerLinkLabel ? JGC.text.bannerLinkLabel : JGC.locale.bannerLinkLabel, "</a></div>"), "  \n              </div>\n              <div id=\"bannerButtons\" class=\"").concat(checkTailwindPrefix('flex flex-col items-center space-y-2 tracking-tighter mt-4 mb-2'), "\">\n                <div class=\"").concat((_JGC$customStyle46 = JGC.customStyle) !== null && _JGC$customStyle46 !== void 0 && _JGC$customStyle46.accept ? JGC.customStyle.accept : checkTailwindPrefix('bg-black dark:bg-gray-900'), " ").concat(checkTailwindPrefix('rounded-full'), "\">\n                  <button type=\"button\" role=\"button\" tabindex=\"0\" id=\"yesCookies\" class=\"").concat(yesCookies6, "\">").concat(JGC.bannerConfig.shortText ? JGC.locale.acceptShortText : JGC.text.acceptText, "</button>\n                </div>\n              </div>\n            </div>\n            ").concat(JGC.bannerConfig.backgroundImage ? "</div>" : '', "\n            <div class=\"").concat(checkTailwindPrefix('mt-2'), "\">").concat(managePreferencesLink(checkTailwindPrefix('text-white underline')), "</div>\n      </div>\n      ");
        document.body.appendChild(JGC.banner);
        if (JGC.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
          return closeBannerWithButton();
        });
        document.getElementById('yesCookies').addEventListener('click', function () {
          return JGC.yesCookies();
        });
        addEnterAction('yesCookies');
        managePreferencesLinkListener();
        break;

      case "style7":
        JGC.positions = {
          "top": checkTailwindPrefix("justify-top items-start top-0"),
          "center": checkTailwindPrefix("mx-auto top-1/2 -translate-y-1/2"),
          "bottom": checkTailwindPrefix("justify-end items-end bottom-0")
        };
        JGC.banner = document.createElement("div");
        JGC.banner.style.display = "none";
        JGC.banner.innerHTML = "\n      <div id=\"bannerContent\" style=\"".concat(JGC.bannerConfig.backgroundImage ? "background-size:cover; background-image:url(".concat(JGC.bannerConfig.backgroundImage, ")") : '', "\" \n            class=\"\n            ").concat(JGC.positions[JGC.bannerConfig.position || 'bottom'], "\n            ").concat(JGC.bannerConfig.backgroundColor, " \n            ").concat(JGC.bannerConfig.backgroundImage ? "".concat(JGC.bannerConfig.backgroundColor, " ").concat(checkTailwindPrefix('p-2')) : "".concat(JGC.bannerConfig.innerBackgroundImage ? '' : checkTailwindPrefix('p-6')), "\n            ").concat(getMaxWidth('max-w-xl'), "\n            ").concat(checkTailwindPrefix('translate-y-full origin-bottom fixed bg-opacity-95 right-0 shadow-2xl md:flex md:flex-col md:space-x-1  transition duration-700 ease-in-out z-[999] rounded'), "\">\n            ").concat(JGC.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat((_JGC$customStyle47 = JGC.customStyle) === null || _JGC$customStyle47 === void 0 ? void 0 : _JGC$customStyle47.closeButton, "  \n            ").concat(checkTailwindPrefix('text-sm bg-gray-800 px-3 py-0.5 rounded-tr-lg rounded-tl-lg  border-t-rounded text-white self-end absolute -top-[8px] right-2 transform -translate-y-4 m-0'), "\">\n            &times;</button>") : '', "\n            <div class=\"").concat(checkTailwindPrefix('space-y-6 flex flex-col'), "\n              ").concat(JGC.bannerConfig.backgroundImage && !JGC.bannerConfig.innerBackgroundImage ? "".concat((_JGC$bannerConfig$bac3 = JGC.bannerConfig.backgroundColor) !== null && _JGC$bannerConfig$bac3 !== void 0 ? _JGC$bannerConfig$bac3 : '', " ").concat(checkTailwindPrefix('p-4')) : '', "\n              ").concat(JGC.bannerConfig.innerBackgroundImage && !JGC.bannerConfig.backgroundImage ? checkTailwindPrefix('pb-8') : '', "\n              ").concat(JGC.bannerConfig.innerBackgroundImage && JGC.bannerConfig.backgroundImage ? "".concat(checkTailwindPrefix('pb-8'), " ").concat((_JGC$bannerConfig$bac4 = JGC.bannerConfig.backgroundColor) !== null && _JGC$bannerConfig$bac4 !== void 0 ? _JGC$bannerConfig$bac4 : '') : '', "\n              \">\n              ").concat(JGC.bannerConfig.innerBackgroundImage ? "<img class=\"".concat(checkTailwindPrefix('md:rounded-t'), "\" src=\"").concat(JGC.bannerConfig.innerBackgroundImage, "\" />") : '', "\n              ").concat(JGC.bannerConfig.logo ? "<img class=\"".concat(JGC.bannerConfig.logoClasses ? JGC.bannerConfig.logoClasses : '', "\" src=\"").concat(JGC.bannerConfig.logo, "\" />") : '', " \n              <div class=\"").concat(checkTailwindPrefix('flex items-center space-x-2'), " ").concat(JGC.bannerConfig.innerBackgroundImage ? checkTailwindPrefix('px-6') : '', "\">\n                  ").concat(returnIcon(), "\n                  <h4 class=\"").concat((_JGC$customStyle$bann7 = (_JGC$customStyle48 = JGC.customStyle) === null || _JGC$customStyle48 === void 0 ? void 0 : _JGC$customStyle48.bannerTitle) !== null && _JGC$customStyle$bann7 !== void 0 ? _JGC$customStyle$bann7 : checkTailwindPrefix('text-xl font-bold dark:text-white'), "\">").concat(JGC.bannerConfig.title, "</h4>\n              </div>\n              <div class=\"").concat((_JGC$customStyle49 = JGC.customStyle) !== null && _JGC$customStyle49 !== void 0 && _JGC$customStyle49.bannerText ? JGC.customStyle.bannerText : checkTailwindPrefix('dark:text-white'), " ").concat(JGC.bannerConfig.innerBackgroundImage ? checkTailwindPrefix('px-6') : '', "\">\n                <div>").concat(JGC.bannerText ? JGC.bannerText : "".concat(JGC.text.descriptionText ? JGC.text.descriptionText : JGC.locale.bannerDescription), " <br/></div>\n                <div>").concat(JGC.bannerLink ? JGC.bannerLink : "".concat(JGC.locale.bannerLinkDescription, " <a class=\"").concat(checkTailwindPrefix('font-bold'), "\" target=\"_blank\" href=\"").concat(JGC.config.privacyLink, "\"> ").concat((_JGC$text7 = JGC.text) !== null && _JGC$text7 !== void 0 && _JGC$text7.bannerLinkLabel ? JGC.text.bannerLinkLabel : JGC.locale.bannerLinkLabel, "</a>"), "</div>\n              </div>\n              <div class=\"").concat(checkTailwindPrefix('flex justify-start w-full'), " ").concat(JGC.bannerConfig.innerBackgroundImage && checkTailwindPrefix('px-6'), "\">\n                <div class=\"").concat(checkTailwindPrefix('space-x-2 w-full flex'), "\">\n                    <button type=\"button\" role=\"button\" tabindex=\"0\" id=\"yesCookies\" class=\"").concat(yesCookies7, " ").concat(checkTailwindPrefix('group flex items-center'), "\">\n                      <div class=\"").concat(checkTailwindPrefix('w-3 h-3 rounded-full border border-sky-800 dark:border-green-800 mr-1 group-hover:bg-sky-800 dark:group-hover:bg-green-800 transition duration-300'), "\"></div>\n                      <div class=\"").concat((_JGC$customStyle50 = JGC.customStyle) !== null && _JGC$customStyle50 !== void 0 && _JGC$customStyle50.accept ? JGC.customStyle.accept : checkTailwindPrefix('group-hover:text-sky-800 dark:group-hover:text-green-200'), "\">").concat(JGC.bannerConfig.shortText ? JGC.locale.acceptShortText : JGC.text.acceptText, "</div>\n                    </button>\n                    <button type=\"button\" role=\"button\" tabindex=\"0\" id=\"noCookies\" class=\"").concat(noCookies7, " ").concat(checkTailwindPrefix('group flex items-center'), "\">\n                      <div class=\"").concat(checkTailwindPrefix('w-3 h-3 rounded-full border border-sky-800 dark:border-red-800 mr-1 group-hover:bg-sky-800 dark:group-hover:bg-red-800 transition duration-300'), "\"></div>\n                        <div class=\"").concat((_JGC$customStyle51 = JGC.customStyle) !== null && _JGC$customStyle51 !== void 0 && _JGC$customStyle51.reject ? JGC.customStyle.reject : checkTailwindPrefix('group-hover:text-sky-800 dark:group-hover:text-red-200'), "\">").concat(JGC.bannerConfig.shortText ? JGC.locale.rejectShortText : JGC.text.rejectText, "</div>\n                      </button>\n                    </div>\n                    <div class=\"").concat(checkTailwindPrefix('ml-auto w-full text-right'), "\">").concat(managePreferencesLink(), "</div>\n                </div>\n            </div>\n        </div>\n        ");
        document.body.appendChild(JGC.banner);
        makeBannerAnimation();
        if (JGC.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
          return closeBannerWithButton();
        });
        generateButtons();
        break;

      case "style8":
        var cookieExists = getCookie('JgcPreferences');
        JGC.positions = {
          "top": checkTailwindPrefix("top-0"),
          "center": checkTailwindPrefix("mx-auto top-1/2 -translate-y-1/2"),
          "bottom": checkTailwindPrefix("bottom-0")
        };
        JGC.banner = document.createElement("div");
        JGC.banner.style.display = "none";
        JGC.banner.innerHTML = "<div style=\"".concat(JGC.bannerConfig.backgroundImage && "background-size:cover; background-image:url(".concat(JGC.bannerConfig.backgroundImage, ")"), "\"\n        id=\"bannerContent\" class=\"\n        ").concat(JGC.positions[JGC.bannerConfig.position || 'bottom'], "\n        ").concat(JGC.bannerConfig.backgroundColor, "\n        ").concat(JGC.bannerConfig.innerBackgroundImage ? "".concat(checkTailwindPrefix("grid grid-cols-5"), "  ").concat(JGC.bannerConfig.backgroundImage ? '' : checkTailwindPrefix('gap-6')) : checkTailwindPrefix('flex flex-col'), "\n        ").concat(JGC.bannerConfig.backgroundImage ? checkTailwindPrefix('p-2') : checkTailwindPrefix('px-6 items-start justify-center'), " \n        ").concat(checkTailwindPrefix('sm:w-full md:w-full w-full fixed shadow-2xl transition duration-700 ease-in-out dark:bg-gray-800 z-[999] py-4'), "\">\n        ").concat(JGC.bannerConfig.innerBackgroundImage ? "<img class=\"".concat(checkTailwindPrefix('md:rounded-t col-span-1'), "\" src=\"").concat(JGC.bannerConfig.innerBackgroundImage, "\" />") : '', "\n            <div class=\"\n            ").concat(JGC.bannerConfig.backgroundImage ? "".concat(JGC.bannerConfig.backgroundColor, " ").concat(checkTailwindPrefix('w-full p-4')) : '', " \n            ").concat(JGC.bannerConfig.innerBackgroundImage && checkTailwindPrefix('col-span-4'), "\n            ").concat(checkTailwindPrefix('flex flex-col items-start space-y-3 w-full'), "\">                  \n                <div class=\"").concat(checkTailwindPrefix('w-full'), "\">\n                  <div class=\"").concat(checkTailwindPrefix('flex items-center w-full mb-3'), "\" >\n                    <div class=\"").concat(checkTailwindPrefix('flex flex-col items-start space-x-1'), " ").concat(JGC.bannerConfig.innerBackgroundImage ? checkTailwindPrefix('px-6') : '', "\">\n                      ").concat(returnLogo(), "\n                      <div class=\"").concat(checkTailwindPrefix('flex items-center space-x-2'), "\">\n                        ").concat(returnIcon(), "\n                        <h4 class=\"").concat((_JGC$customStyle$bann8 = (_JGC$customStyle52 = JGC.customStyle) === null || _JGC$customStyle52 === void 0 ? void 0 : _JGC$customStyle52.bannerTitle) !== null && _JGC$customStyle$bann8 !== void 0 ? _JGC$customStyle$bann8 : checkTailwindPrefix('text-xl font-bold dark:text-white'), "\">").concat(JGC.bannerConfig.title, "</h4>\n                      </div>\n                    </div>  \n                    ").concat(JGC.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat((_JGC$customStyle53 = JGC.customStyle) === null || _JGC$customStyle53 === void 0 ? void 0 : _JGC$customStyle53.closeButton, "  ").concat(checkTailwindPrefix('ml-auto'), "\">&times;</button>") : '', "\n                  </div>\n                  <div class=\"").concat((_JGC$customStyle54 = JGC.customStyle) !== null && _JGC$customStyle54 !== void 0 && _JGC$customStyle54.bannerText ? JGC.customStyle.bannerText : "".concat(checkTailwindPrefix('dark:text-gray-300')), " ").concat(checkTailwindPrefix('mb-4 leading-relaxed'), "\">\n                    ").concat(JGC.bannerText ? JGC.bannerText : "".concat(JGC.text.descriptionText ? JGC.text.descriptionText : JGC.locale.bannerDescription), " <br/>  \n                    ").concat(JGC.bannerLink ? JGC.bannerLink : "".concat(JGC.locale.bannerLinkDescription, " \n                    <a class=\"").concat(checkTailwindPrefix('font-bold'), "\" target=\"_blank\" href=\"").concat(JGC.config.privacyLink, "\"> ").concat((_JGC$text8 = JGC.text) !== null && _JGC$text8 !== void 0 && _JGC$text8.bannerLinkLabel ? JGC.text.bannerLinkLabel : JGC.locale.bannerLinkLabel, "</a>."), "  \n                  </div>\n                </div>    \n                <div class=\"").concat(checkTailwindPrefix('flex w-full space-x-2'), "\">\n                    <div class=\"").concat(checkTailwindPrefix('group'), "\">\n                    <div class=\"").concat((_JGC$customStyle55 = JGC.customStyle) !== null && _JGC$customStyle55 !== void 0 && _JGC$customStyle55.accept ? JGC.customStyle.accept : '', " \n                      ").concat(checkTailwindPrefix('py-2 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ease-linear'), "\">\n                      <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"yesCookies\" class=\"").concat(yesCookies8, "\">").concat(JGC.bannerConfig.shortText ? JGC.locale.acceptShortText : JGC.text.acceptText, " </button>\n                    </div>\n                  </div>\n                  <div class=\"").concat(checkTailwindPrefix('group'), "\">\n                    <div class=\"").concat((_JGC$customStyle56 = JGC.customStyle) !== null && _JGC$customStyle56 !== void 0 && _JGC$customStyle56.accept ? JGC.customStyle.accept : '', " \n                      ").concat(checkTailwindPrefix('py-2 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ease-linear'), "\">\n                      <button type=\"button\" id=\"acceptSelected\" class=\"").concat(selectedCookies8, "\">").concat(JGC.bannerConfig.shortText ? JGC.locale.acceptSelectedShortText : JGC.text.acceptSelectedText, " </button>\n                    </div>\n                  </div>\n                  <div class=\"").concat(checkTailwindPrefix('group'), "\">\n                    <div class=\"").concat((_JGC$customStyle57 = JGC.customStyle) !== null && _JGC$customStyle57 !== void 0 && _JGC$customStyle57.reject ? JGC.customStyle.reject : checkTailwindPrefix(''), " ").concat(checkTailwindPrefix('py-2 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ease-linear'), "\">\n                    <button type=\"button\" id=\"noCookies\" class=\"").concat(noCookies8, "\"> ").concat(JGC.bannerConfig.shortText ? JGC.locale.rejectShortText : JGC.text.rejectText, " </button>\n                    </div>\n                  </div>\n                </div>\n                <br/>\n                <div class=\"").concat(checkTailwindPrefix('md:grid border-t hidden'), " \n                  ").concat(cookieExists['enable'].length == 1 ? "".concat(checkTailwindPrefix('md:grid-cols-1')) : '', "\n                  ").concat(cookieExists['enable'].length == 2 ? "".concat(checkTailwindPrefix('md:grid-cols-2')) : '', "\n                  ").concat(cookieExists['enable'].length == 3 ? "".concat(checkTailwindPrefix('md:grid-cols-3')) : '', "\n                  ").concat(cookieExists['enable'].length >= 4 ? "".concat(checkTailwindPrefix('md:grid-cols-4')) : '', "\n                  \">\n                  ").concat(JGC.generateOptions(), "\n                </div>\n                <div class=\"").concat(checkTailwindPrefix('block w-full border-t md:hidden'), " \">").concat(managePreferencesLink(), "</div>\n              </div>\n        </div>\n        ");
        document.body.appendChild(JGC.banner);
        makeBannerAnimation();
        if (JGC.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
          return closeBannerWithButton();
        });
        generateButtons();
        document.getElementById('acceptSelected').addEventListener('click', function () {
          return JGC.closePreferencePanel();
        }); // Close

        break;

      case "style9":
        if (!JGC.bannerConfig.shortText) {
          throw "You need to turn on the 'shortText' property in order to use style 9 correctly.";
        }

        JGC.positions = {
          "top": checkTailwindPrefix("justify-top top-4"),
          "bottom": checkTailwindPrefix("justify-end bottom-0")
        };
        JGC.banner = document.createElement("div");
        JGC.banner.style.display = "none";
        JGC.banner.innerHTML = "<div id=\"bannerContent\" style=\"".concat(JGC.bannerConfig.backgroundImage ? "background-size:cover; background-image:url(".concat(JGC.bannerConfig.backgroundImage, ")") : '', "\" \n                class=\" ").concat(JGC.positions[JGC.bannerConfig.position || 'bottom'], "\n                ").concat(JGC.bannerConfig.backgroundColor, " \n                ").concat(JGC.bannerConfig.backgroundImage ? "".concat(JGC.bannerConfig.backgroundColor, " ").concat(checkTailwindPrefix('p-2')) : "".concat(JGC.bannerConfig.innerBackgroundImage ? '' : checkTailwindPrefix('px-6 py-2')), "\n                ").concat(checkTailwindPrefix('fixed right-0 shadow-2xl md:flex md:flex-col md:space-x-1 md:mr-[4%] mb-10 transition duration-700 ease-in-out rounded-full z-[999]'), "\">\n                <div class=\"").concat(checkTailwindPrefix('flex items-center space-x-2'), "\n                  ").concat(JGC.bannerConfig.backgroundImage && !JGC.bannerConfig.innerBackgroundImage ? "".concat((_JGC$bannerConfig$bac5 = JGC.bannerConfig.backgroundColor) !== null && _JGC$bannerConfig$bac5 !== void 0 ? _JGC$bannerConfig$bac5 : '', "  ").concat(checkTailwindPrefix('p-4')) : '', "\n                  ").concat(JGC.bannerConfig.innerBackgroundImage && !JGC.bannerConfig.backgroundImage ? checkTailwindPrefix('pb-8') : '', "\n                  ").concat(JGC.bannerConfig.innerBackgroundImage && JGC.bannerConfig.backgroundImage ? "".concat(checkTailwindPrefix('pb-8'), " ").concat((_JGC$bannerConfig$bac6 = JGC.bannerConfig.backgroundColor) !== null && _JGC$bannerConfig$bac6 !== void 0 ? _JGC$bannerConfig$bac6 : '') : '', "\n                  \">\n                  ").concat(JGC.bannerConfig.innerBackgroundImage ? "<img class=\"".concat(checkTailwindPrefix('md:rounded-t'), "\" src=\"").concat(JGC.bannerConfig.innerBackgroundImage, "\" />") : '', "\n                  ").concat(JGC.bannerConfig.logo ? "<img class=\"".concat(JGC.bannerConfig.logoClasses ? JGC.bannerConfig.logoClasses : '', "\" src=\"").concat(JGC.bannerConfig.logo, "\" />") : '', " \n                  <div class=\"").concat(checkTailwindPrefix('col-span-3 flex space-x-2'), "\n                    ").concat((_JGC$customStyle58 = JGC.customStyle) !== null && _JGC$customStyle58 !== void 0 && _JGC$customStyle58.bannerText ? JGC.customStyle.bannerText : checkTailwindPrefix('dark:text-white'), " ").concat(JGC.bannerConfig.innerBackgroundImage ? checkTailwindPrefix('px-6') : '', "\">\n                    <div>").concat(JGC.bannerText ? JGC.bannerText : "".concat(JGC.text.descriptionText ? JGC.text.descriptionText : "".concat(JGC.bannerConfig.shortText ? JGC.locale.bannerShortDescription : JGC.locale.bannerDescription)), "</div>  \n                    <div><a class=\"").concat(checkTailwindPrefix('font-bold underline'), "\" target=\"_blank\" href=\"").concat(JGC.config.privacyLink, "\"> Read more </a></div>\n                  </div>\n                  <div class=\"").concat(checkTailwindPrefix('space-x-1 col-span-1'), " ").concat(JGC.bannerConfig.innerBackgroundImage && checkTailwindPrefix('px-6'), "\">\n                    <button type=\"button\" role=\"button\" tabindex=\"0\" id=\"yesCookies\" class=\"").concat(yesCookies9, "\">").concat(JGC.bannerConfig.shortText ? JGC.locale.acceptShortText : JGC.text.acceptText, "</button>\n                    <button type=\"button\" role=\"button\" tabindex=\"0\" id=\"noCookies\" class=\"").concat(noCookies9, "\">").concat(JGC.bannerConfig.shortText ? JGC.locale.rejectShortText : JGC.text.rejectText, "</button>\n                  </div>\n                </div>\n          </div>\n          ");
        document.body.appendChild(JGC.banner);
        makeBannerAnimation();
        document.getElementById('yesCookies').addEventListener('click', function () {
          return JGC.yesCookies();
        });
        document.getElementById('noCookies').addEventListener('click', function () {
          return JGC.noCookies();
        });
        addEnterAction('yesCookies');
        addEnterAction('noCookies');
        break;
    }
  }

  var JustGoodCookies = /*#__PURE__*/function () {
    function JustGoodCookies() {
      _classCallCheck(this, JustGoodCookies);

      this.activate = undefined; // Custom Activations

      this.auto = false; // autoMode

      this.autoCategories = undefined; // Categories for autoMode

      this.banner = undefined; // Banner div

      this.bannerConfig = undefined; // Banner config

      this.bannerLink = undefined; // Privacy policy link

      this.bannerText = undefined; // Custom banner text

      this.cookieTimeout = undefined; // Default cookie duration (360 days)

      this.config = undefined; // General config

      this.customStyle = undefined; // Banner style 

      this.darkMode = undefined; // Force dark mode

      this.getCustomCookies = undefined; // Cookie preferences and tags

      this.locale = undefined; // Locale 

      this.localeString = undefined; // Lang string

      this.onAccept = undefined; // Callback on "accept"

      this.onReject = undefined; // Callback on "reject"

      this.panel = undefined; // Preference panel

      this.positions = {}; // Banner positions

      this.panelFooter = undefined; // "Footer"

      this.panelHeader = undefined; // "Header"

      this.placeholder = undefined; // Placeholder

      this.tailwindPrefix = ''; // Tailwind Prefix

      this.text = undefined; // Custom texts

      String.prototype.escape = function () {
        var replace = {
          '>': '&gt;',
          '<': '&lt;',
          '&': '&amp;'
        };
        return this.replace(/[&<>]/g, function (tag) {
          return replace[tag] || tag;
        });
      };
    }
    /*
    *  Check the current status
    */


    _createClass(JustGoodCookies, [{
      key: "checkCookies",
      value: function checkCookies() {
        var preference = getCookie('JgcPreferences');

        if (preference['duration']) {
          var getValue = preference['duration'].value;

          switch (getValue) {
            case "0":
              // Cookies rejected :(
              if (this.auto) autoMode();
              checkCookieExpiration(); // Check if cookie is expired

              hideScripts(); // Hide the scripts

              break;

            case "1":
              // Cookies accepted :)
              bannerContent.classList.add(checkTailwindPrefix('hidden'));
              checkCookiesAutoMode(); // Check if we are running the autoMode

              removePlaceholders(); // Remove placeholders

              removeDivsOfUserAcceptedIframes(); // Remove hidden divs (if any) for accepted cookies

              checkCookieExpiration(); // Check if the cookie is expired

              checkActivations(); // Check if we need to activate some pre-built scripts

              checkGoogleAnalytics(); // Check Google Analytics

              activateToggledCookies(); // We enable cookies and manage them through the settings panel

              googleTagManager(); // Check if we need to turn on Google Tag Manager

              closeBanner(); // Close the banner

              break;
          }
        } else {
          // The banner has not been accepted yet, let's turn off all scripts and show the banner
          if (this.auto) autoMode();
          hideScripts();
          showBanner();
        }
      }
      /*
      * Accepts cookies
      */

    }, {
      key: "yesCookies",
      value: function yesCookies() {
        checkCookieExpiration('1');
        checkActivations();
        setPreferences();
        activateToggledCookies();
        closePreferencePanelAndSaveAll();
        var checkPreferences = getCookie('JgcPreferences');

        if (checkPreferences['remove'] > 0) {
          removeScript(true); // We need to remove them AND refresh the page
        } else {
          googleTagManager(); // Do not trigger Google Tag Manager twice

          removePlaceholders();
        }

        if (this.onAccept && typeof this.onAccept == 'function') this.onAccept();
        closeBanner();
        removeDivsOfUserAcceptedIframes();
        if (!this.bannerConfig.onAccept) window.location.reload();
        if (document.getElementById('preferenceDiv')) closePreferencePanel();
      }
      /*
      * Reject cookies
      */

    }, {
      key: "noCookies",
      value: function noCookies() {
        checkCookieExpiration('0');
        var getPreferences = getCookie('JgcPreferences');

        var saveObj = _objectSpread2({}, getPreferences);

        saveCookie(saveObj);
        if (this.onReject && typeof this.onReject == 'function') this.onReject();
        closeBanner();
      }
      /**
      * Activate the JGC engine and all the main functions
      */

    }, {
      key: "init",
      value: function init(data) {
        var _data$text,
            _data$text2,
            _data$text3,
            _data$text4,
            _data$text5,
            _data$text6,
            _data$text7,
            _data$text8,
            _data$text9,
            _data$text10,
            _data$banner,
            _data$banner2,
            _data$banner3,
            _data$banner4,
            _data$banner5,
            _data$banner6,
            _data$banner7,
            _data$banner8,
            _data$banner9,
            _data$banner10,
            _data$banner11,
            _data$banner12,
            _data$banner13,
            _data$banner14,
            _data$banner15,
            _data$banner16,
            _data$banner17,
            _data$banner18,
            _this = this;

        if (data.locale) {
          this.locales = locales;
          this.locale = this.locales[data.locale.escape()] || this.locales['en'];
          this.localeString = data.locale;
        } // Check if the autoMode is active or not


        if (data.autoMode && isBoolean(data.autoMode, "autoMode")) {
          var checkPreferences = getCookie('JgcPreferences');

          if (!checkPreferences) {
            var scripts = document.querySelectorAll('iframe,script');

            var _iterator = _createForOfIteratorHelper(scripts),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var element = _step.value;
                element.classList.add(checkTailwindPrefix('hidden'));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          this.auto = true;

          if (data.autoCategories) {
            for (var _i = 0, _Object$keys = Object.keys(data.autoCategories); _i < _Object$keys.length; _i++) {
              var a = _Object$keys[_i];
              data.autoCategories[a][0] = data.autoCategories[a][0].escape();
              data.autoCategories[a][1] = data.autoCategories[a][1].escape();
            }

            this.autoCategories = data.autoCategories;
          }
        } // General config


        this.config = {
          locale: data.locale !== undefined ? data.locale.escape() : new Languages('en'),
          layout: data.layout.escape() || 'style1',
          privacyLink: data.privacyLink.escape() || ''
        }; // Cookie duration

        this.cookieTimeout = data.cookieDuration ? data.cookieDuration : 360; // Tailwind Prefix

        if (data.tailwindPrefix) {
          this.tailwindPrefix = data.tailwindPrefix;
        } // Automatic Dark Mode 


        if (data.dark) {
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            var htmlClass = document.querySelector('html');
            htmlClass.classList.add(checkTailwindPrefix('dark'));
            this.darkMode = true;
          }
        } // Custom texts 


        this.text = {
          acceptSelectedText: (_data$text = data.text) !== null && _data$text !== void 0 && _data$text.acceptSelectedText ? isString(data.text.acceptSelectedText, "acceptSelectedText") : this.locale.acceptSelectedText,
          acceptText: (_data$text2 = data.text) !== null && _data$text2 !== void 0 && _data$text2.acceptText ? isString(data.text.acceptText, "acceptText") : this.locale.acceptText,
          bannerLinkLabel: (_data$text3 = data.text) !== null && _data$text3 !== void 0 && _data$text3.bannerLinkLabel ? isString(data.text.bannerLinkLabel, "bannerLinkLabel") : this.locale.bannerLinkLabel,
          descriptionText: (_data$text4 = data.text) !== null && _data$text4 !== void 0 && _data$text4.descriptionText ? isString(data.text.descriptionText, "descriptionText") : null,
          panelTitle: (_data$text5 = data.text) !== null && _data$text5 !== void 0 && _data$text5.panelTitle ? isString(data.text.panelTitle, "panelTitle") : this.locale.panelTitle,
          preferencesText: (_data$text6 = data.text) !== null && _data$text6 !== void 0 && _data$text6.preferencesText ? isString(data.text.preferencesText, "preferencesText") : this.locale.preferencesText,
          rejectText: (_data$text7 = data.text) !== null && _data$text7 !== void 0 && _data$text7.rejectText ? isString(data.text.rejectText, "rejectText") : this.locale.rejectText,
          saveButton: (_data$text8 = data.text) !== null && _data$text8 !== void 0 && _data$text8.saveButton ? isString(data.text.saveButton, "saveButton") : this.locale.saveAndContinue,
          saveAllButton: (_data$text9 = data.text) !== null && _data$text9 !== void 0 && _data$text9.saveAllButton ? isString(data.text.saveAllButton, "saveAllButton") : this.locale.saveAndContinueAcceptAll,
          servicesTag: (_data$text10 = data.text) !== null && _data$text10 !== void 0 && _data$text10.servicesTag ? isString(data.text.servicesTag, "servicesTag") : this.locale.servicesText
        }; // Banner config & style 

        this.bannerConfig = {
          animation: isBoolean((_data$banner = data.banner) === null || _data$banner === void 0 ? void 0 : _data$banner.animation, "animation") ? data.banner.animation : true,
          backgroundColor: (_data$banner2 = data.banner) !== null && _data$banner2 !== void 0 && _data$banner2.backgroundColor ? isString(data.banner.backgroundColor, "backgroundColor") : checkTailwindPrefix('bg-white dark:bg-gray-800'),
          backgroundDark: (_data$banner3 = data.banner) !== null && _data$banner3 !== void 0 && _data$banner3.backgroundDark ? isBoolean(data.banner.backgroundDark, "backgroundDark") : false,
          backgroundImage: (_data$banner4 = data.banner) !== null && _data$banner4 !== void 0 && _data$banner4.backgroundImage ? isString(data.banner.backgroundImage, "backgroundImage") : null,
          closeButton: (_data$banner5 = data.banner) !== null && _data$banner5 !== void 0 && _data$banner5.closeButton ? isBoolean(data.banner.closeButton, "closeButton") : true,
          closeButtonAccept: (_data$banner6 = data.banner) !== null && _data$banner6 !== void 0 && _data$banner6.closeButtonAccept ? isBoolean(data.banner.closeButtonAccept, "closeButtonAccept") : false,
          disableReject: (_data$banner7 = data.banner) !== null && _data$banner7 !== void 0 && _data$banner7.disableReject ? isBoolean(data.banner.disableReject, "disableReject") : false,
          icon: (_data$banner8 = data.banner) !== null && _data$banner8 !== void 0 && _data$banner8.icon ? isString(data.banner.icon, "icon") : null,
          iconDark: (_data$banner9 = data.banner) !== null && _data$banner9 !== void 0 && _data$banner9.iconDark ? isString(data.banner.iconDark, "iconDark") : null,
          innerBackgroundImage: (_data$banner10 = data.banner) !== null && _data$banner10 !== void 0 && _data$banner10.innerBackgroundImage ? isString(data.banner.innerBackgroundImage, "innerBackgroundImage") : null,
          logo: (_data$banner11 = data.banner) !== null && _data$banner11 !== void 0 && _data$banner11.logo ? isString(data.banner.logo, "logo") : undefined,
          logoClasses: (_data$banner12 = data.banner) !== null && _data$banner12 !== void 0 && _data$banner12.logoClasses ? isString(data.banner.logoClasses, "logoClasses") : undefined,
          maxWidth: (_data$banner13 = data.banner) !== null && _data$banner13 !== void 0 && _data$banner13.maxWidth ? isString(data.banner.maxWidth, "maxWidth") : undefined,
          onAccept: (_data$banner14 = data.banner) !== null && _data$banner14 !== void 0 && _data$banner14.onAccept ? this.onAccept = isFunction(data.banner.onAccept, "onAccept") : null,
          onReject: (_data$banner15 = data.banner) !== null && _data$banner15 !== void 0 && _data$banner15.onReject ? this.onReject = isFunction(data.banner.onReject, "onReject") : null,
          position: (_data$banner16 = data.banner) !== null && _data$banner16 !== void 0 && _data$banner16.position ? isString(data.banner.position) : undefined,
          shortText: (_data$banner17 = data.banner) !== null && _data$banner17 !== void 0 && _data$banner17.shortText && isBoolean(data.banner.shortText, "shortText") ? this.locale.acceptShortText : this.acceptText,
          title: (_data$banner18 = data.banner) !== null && _data$banner18 !== void 0 && _data$banner18.title ? isString(data.banner.title, "title") : 'Cookies'
        }; // Custom text placeholder

        if (data.placeholder) {
          var _data$placeholder, _data$placeholder2, _data$placeholder3;

          this.placeholder = {
            classes: ((_data$placeholder = data.placeholder) === null || _data$placeholder === void 0 ? void 0 : _data$placeholder.classes) && isString(data.placeholder.classes, "placeholder classes"),
            image: ((_data$placeholder2 = data.placeholder) === null || _data$placeholder2 === void 0 ? void 0 : _data$placeholder2.image) && isString(data.placeholder.image, "placeholder image"),
            text: ((_data$placeholder3 = data.placeholder) === null || _data$placeholder3 === void 0 ? void 0 : _data$placeholder3.text) && isString(data.placeholder.text, "placeholder text")
          };
        } // Preference Panel


        if (data.panel) {
          var _data$panel, _data$panel2, _data$panel3;

          this.panel = {
            bgColor: (_data$panel = data.panel) !== null && _data$panel !== void 0 && _data$panel.bgColor ? isString(data.panel.bgColor, "bgColor") : null,
            open: (_data$panel2 = data.panel) !== null && _data$panel2 !== void 0 && _data$panel2.open ? isBoolean(data.panel.open, "open") : false,
            padding: (_data$panel3 = data.panel) !== null && _data$panel3 !== void 0 && _data$panel3.padding ? isBoolean(data.panel.padding, "padding") : false
          };
        } // Banner style


        if (data.style) {
          var _data$style, _data$style2, _data$style3, _data$style4, _data$style5, _data$style6, _data$style7, _data$style8, _data$style9, _data$style10, _data$style11, _data$style12, _data$style13, _data$style14, _data$style15, _data$style16, _data$style17, _data$style18;

          this.customStyle = {
            accept: (_data$style = data.style) !== null && _data$style !== void 0 && _data$style.accept ? isString(data.style.accept, "accept") : null,
            bannerText: (_data$style2 = data.style) !== null && _data$style2 !== void 0 && _data$style2.bannerText ? isString(data.style.bannerText, "bannerText") : null,
            bannerTitle: (_data$style3 = data.style) !== null && _data$style3 !== void 0 && _data$style3.bannerTitle ? isString(data.style.bannerTitle, "bannerTitle") : null,
            closeButton: (_data$style4 = data.style) !== null && _data$style4 !== void 0 && _data$style4.closeButton ? isString(data.style.closeButton, "closeButton") : null,
            toggles: (_data$style5 = data.style) !== null && _data$style5 !== void 0 && _data$style5.toggles ? isString(data.style.toggles, "toggles") : null,
            lockIcon: (_data$style6 = data.style) !== null && _data$style6 !== void 0 && _data$style6.lockIcon ? isString(data.style.lockIcon, "lockIcon") : null,
            panelHeader: (_data$style7 = data.style) !== null && _data$style7 !== void 0 && _data$style7.panelHeader ? isString(data.style.panelHeader, "panelHeader") : null,
            panelText: (_data$style8 = data.style) !== null && _data$style8 !== void 0 && _data$style8.panelText ? isString(data.style.panelText, "panelText") : null,
            panelTitle: (_data$style9 = data.style) !== null && _data$style9 !== void 0 && _data$style9.panelTitle ? isString(data.style.panelTitle, "panelTitle") : null,
            preferenceDiv: (_data$style10 = data.style) !== null && _data$style10 !== void 0 && _data$style10.preferenceDiv ? isString(data.style.preferenceDiv, "preferenceDiv") : null,
            preferencesText: (_data$style11 = data.style) !== null && _data$style11 !== void 0 && _data$style11.preferencesText ? isString(data.style.preferencesText, "preferencesText") : null,
            privacyLink: (_data$style12 = data.style) !== null && _data$style12 !== void 0 && _data$style12.privacyLink ? isString(data.style.privacyLink, "privacyLink") : null,
            reject: (_data$style13 = data.style) !== null && _data$style13 !== void 0 && _data$style13.reject ? isString(data.style.reject, "reject") : null,
            saveButton: (_data$style14 = data.style) !== null && _data$style14 !== void 0 && _data$style14.saveButton ? isString(data.style.saveButton, "classes") : null,
            saveAllButton: (_data$style15 = data.style) !== null && _data$style15 !== void 0 && _data$style15.saveAllButton ? isString(data.style.saveAllButton, "classes") : null,
            servicesText: (_data$style16 = data.style) !== null && _data$style16 !== void 0 && _data$style16.servicesText ? isString(data.style.servicesText, "servicesText") : null,
            servicesTag: (_data$style17 = data.style) !== null && _data$style17 !== void 0 && _data$style17.servicesTag ? isString(data.style.servicesTag, "servicesTag") : null,
            stripes: (_data$style18 = data.style) !== null && _data$style18 !== void 0 && _data$style18.stripes ? isString(data.style.stripes, "stripes: classes") : null
          };
        } // Cookie Categories


        if (data.cookies) {
          this.getCustomCookies = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(data.cookies); _i2 < _Object$keys2.length; _i2++) {
            var jgcTag = _Object$keys2[_i2];

            for (var _i3 = 0, _Object$entries = Object.entries(data.cookies[jgcTag]); _i3 < _Object$entries.length; _i3++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 1),
                  objKey = _Object$entries$_i[0];

              data.cookies[jgcTag][objKey] = isString(data.cookies[jgcTag][objKey]);
            }
          }

          this.getCustomCookies = data.cookies;
        } // Activations


        this.activate = data.activate ? data.activate : null; // Let's start the engine

        window.addEventListener('load', function () {
          checkDarkMode(); // Check Dark Mode

          loadText(); // Check if there is a custom text for the banner

          generatePreferenceStorage(); // Create the default user settings

          checkBackground(); // Check if we need to add a dark overlay

          loadPreferences(); // Make the preference button clickable

          saveCookiesPreferences(); // Save cookies

          loadBannerLayout(_this.config.layout); // Load the banner

          openPanel(); // Check whether the preferences panel should be visible or not

          _this.checkCookies(); // Check cookies

        });
      }
    }]);

    return JustGoodCookies;
  }();

  var JGC = new JustGoodCookies();

  return JGC;

}));
