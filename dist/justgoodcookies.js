(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.string.replace.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.regexp.to-string.js'), require('core-js/modules/es.array.slice.js'), require('core-js/modules/web.dom-collections.for-each.js'), require('core-js/modules/es.object.entries.js'), require('core-js/modules/es.object.keys.js'), require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.array.iterator.js'), require('core-js/modules/es.string.iterator.js'), require('core-js/modules/web.dom-collections.iterator.js'), require('core-js/modules/web.url.js'), require('core-js/modules/web.url-search-params.js'), require('core-js/modules/es.object.values.js'), require('core-js/modules/es.array.includes.js'), require('core-js/modules/es.string.includes.js'), require('core-js/modules/es.symbol.js'), require('core-js/modules/es.symbol.description.js'), require('core-js/modules/es.string.split.js'), require('core-js/modules/es.string.trim.js'), require('core-js/modules/es.json.stringify.js'), require('core-js/modules/es.regexp.test.js'), require('core-js/modules/es.array.join.js'), require('core-js/modules/es.array.map.js'), require('core-js/modules/es.array.index-of.js'), require('core-js/modules/es.string.match.js')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.regexp.exec.js', 'core-js/modules/es.string.replace.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.regexp.to-string.js', 'core-js/modules/es.array.slice.js', 'core-js/modules/web.dom-collections.for-each.js', 'core-js/modules/es.object.entries.js', 'core-js/modules/es.object.keys.js', 'core-js/modules/es.array.concat.js', 'core-js/modules/es.array.iterator.js', 'core-js/modules/es.string.iterator.js', 'core-js/modules/web.dom-collections.iterator.js', 'core-js/modules/web.url.js', 'core-js/modules/web.url-search-params.js', 'core-js/modules/es.object.values.js', 'core-js/modules/es.array.includes.js', 'core-js/modules/es.string.includes.js', 'core-js/modules/es.symbol.js', 'core-js/modules/es.symbol.description.js', 'core-js/modules/es.string.split.js', 'core-js/modules/es.string.trim.js', 'core-js/modules/es.json.stringify.js', 'core-js/modules/es.regexp.test.js', 'core-js/modules/es.array.join.js', 'core-js/modules/es.array.map.js', 'core-js/modules/es.array.index-of.js', 'core-js/modules/es.string.match.js'], factory) :
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

  /*
      @license
      JustGoodCookies
      Created by Francesco Mugnai 
      2022 - v 0.8.7
      Released under MIT License
      If you use this script, you will always remain the sole responsible party, use it at your own risk
      https://github.com/francescomugnai/just-good-cookies
  */
  var JustGoodCookies = /*#__PURE__*/function () {
    function JustGoodCookies() {
      var _this = this;

      _classCallCheck(this, JustGoodCookies);

      _defineProperty(this, "showBanner", function () {
        return _this.banner.style.display = "";
      });

      /** General */
      this.config = undefined; // General config

      this.activate = undefined; // Custom Activations

      this.locale = undefined; // Locale 

      this.localeString = undefined; // Lang string

      this.cookieTimeout = undefined; // Default cookie duration (360 days)

      /** Banner */

      this.banner = undefined; // Banner div

      this.style = undefined; // Banner layout

      this.customStyle = undefined; // Banner style 

      this.bannerConfig = undefined; // Banner config

      this.buttons = undefined; // Banner buttons 

      this.bannerText = undefined; // Custom banner text

      this.bannerLink = undefined; // Privacy policy link

      this.positions = {}; // Banner positions

      this.onAccept = undefined; // Callback on "accept"

      this.onReject = undefined; // Callback on "reject"

      this.text = undefined; // Custom texts

      /** Preference Panel */

      this.panel = undefined; // Preference panel

      this.panelHeader = undefined; // "Header"

      this.panelFooter = undefined; // "Footer"

      this.getCustomCookies = undefined; // Cookie preferences and tags

      /** Others */

      this.tailwindPrefix = ''; // Tailwind Prefix

      this.placeholder = undefined; // Placeholder

      this.darkMode = undefined; // Force dark mode

      /** Auto Mode */

      this.auto = false; // autoMode

      this.autoCategories = undefined; // Categories for autoMode

      /** Need this one to escape some strings */

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
        var preference = this.getCookie('JgcPreferences');

        if (preference['duration']) {
          var getValue = preference['duration'].value;

          switch (getValue) {
            case "0":
              // Cookies rejected :(
              if (this.auto) this.autoMode(); // Check if cookie is expired

              this.checkCookieExpiration(); // Hide the scripts

              this.hideScripts();
              break;

            case "1":
              // Cookies accepted :)
              bannerContent.classList.add(this.checkTailwindPrefix('hidden')); // Check if we are running the autoMode

              this.checkCookiesAutoMode(); // Remove placeholders

              this.removePlaceholders(); // Remove hidden divs (if any) for accepted cookies

              this.removeDivsOfUserAcceptedIframes(); // Check if the cookie is expired

              this.checkCookieExpiration(); // Check if we need to activate some pre-built scripts

              this.checkActivations(); // Check Google Analytics

              this.checkGoogleAnalytics(); // We enable cookies and manage them through the settings panel

              this.activateToggledCookies(); // Check if we need to turn on Google Tag Manager

              this.googleTagManager(); // Close the banner

              this.closeBanner();
              break;
          }
        } else {
          // The banner has not been accepted yet, let's turn off all scripts and show the banner
          if (this.auto) this.autoMode();
          this.hideScripts();
          this.showBanner();
        }
      }
      /*
      * Accepts cookies
      */

    }, {
      key: "yesCookies",
      value: function yesCookies() {
        this.checkCookieExpiration('1');
        this.checkActivations();
        this.setPreferences();
        this.activateToggledCookies();
        this.closePreferencePanelAndSaveAll();
        var checkPreferences = this.getCookie('JgcPreferences');

        if (checkPreferences['remove'] > 0) {
          this.removeScript(true); // We need to remove them AND refresh the page
        } else {
          this.googleTagManager(); // Do not trigger Google Tag Manager twice

          this.removePlaceholders();
        }

        if (this.onAccept && typeof this.onAccept == 'function') this.onAccept();
        this.closeBanner();
        this.removeDivsOfUserAcceptedIframes();
        if (!this.bannerConfig.onAccept) window.location.reload();
        if (document.getElementById('preferenceDiv')) this.closePreferencePanel();
      }
      /*
      * Reject cookies
      */

    }, {
      key: "noCookies",
      value: function noCookies() {
        this.checkCookieExpiration('0');
        var getPreferences = this.getCookie('JgcPreferences');

        var saveObj = _objectSpread2({}, getPreferences);

        this.saveCookie(saveObj);
        if (this.onReject && typeof this.onReject == 'function') this.onReject();
        this.closeBanner();
      }
      /**
       * Load user-defined text
       */

    }, {
      key: "loadText",
      value: function loadText() {
        var bannerText = document.getElementById('jgc-banner-text');
        if (bannerText) this.bannerText = bannerText.innerHTML;
        var bannerLink = document.getElementById('jgc-banner-link');
        if (bannerLink) this.bannerLink = bannerLink.innerHTML;
        var panelHeader = document.getElementById('jgc-panel-header');
        if (panelHeader) this.panelHeader = panelHeader.innerHTML;
        var panelFooter = document.getElementById('jgc-panel-footer');
        if (panelFooter) this.panelFooter = panelFooter.innerHTML;
      }
      /*
      * Check the expiration date of the cookie
      */

    }, {
      key: "checkCookieExpiration",
      value: function checkCookieExpiration(val) {
        var checkPreference = this.getCookie('JgcPreferences');
        var cookieDuration = this.cookieTimeout * 24 * 60 * 60 * 1000;
        var saveObj = {};
        var date = new Date();
        date.setTime(date.getTime() + cookieDuration);
        var item = {
          value: val,
          expiry: date.toString()
        };

        if (!checkPreference['duration']) {
          var getPreferences = this.getCookie('JgcPreferences');
          var uniqueId = Date.now() + Math.random().toString(16).slice(2);
          saveObj = _objectSpread2(_objectSpread2({}, getPreferences), {}, {
            duration: item,
            id: uniqueId
          });
          this.saveCookie(saveObj);
        } else {
          var now = new Date();
          var storedData = new Date(checkPreference['duration']['expiry']);

          if (now.setHours(0, 0, 0, 0) >= storedData.setHours(0, 0, 0, 0)) {
            var _getPreferences = this.getCookie('JgcPreferences');

            delete _getPreferences.duration;
            var _item = {
              value: "1",
              expiry: date.toString()
            };
            saveObj = _objectSpread2(_objectSpread2({}, _getPreferences), {}, {
              duration: _item
            });
            this.saveCookie(saveObj);
            this.showBanner();
          }
        }
      }
      /**
      * Hide the scripts
      */

    }, {
      key: "hideScripts",
      value: function hideScripts() {
        var _this2 = this;

        var getElementsJgc = document.querySelectorAll('[data-jgc-tag]');
        var getElementsToHide = document.querySelectorAll('[data-jgc-remove]');
        var getElementsPlaceholder = document.querySelectorAll('[data-jgc-placeholder]');

        var _loop = function _loop(i) {
          var element = getElementsJgc[i];

          if (element.getAttribute('data-jgc-tag') != 'necessary') {
            _this2.generateIframeDivs(element);
          } else {
            if (getElementsPlaceholder) {
              getElementsPlaceholder.forEach(function (e) {
                if (e.contains(element)) {
                  e.style.backgroundColor = '';
                  e.className = '';
                }
              });
            }

            _this2.replaceScripts("[data-jgc-tag=\"necessary\"]");
          }
        };

        for (var i = 0; i < getElementsJgc.length; i++) {
          _loop(i);
        }

        if (getElementsToHide.length > 0) this.removeScript(true);
      }
      /**
      * Remove hidden divs
      */

    }, {
      key: "removeHiddenDivs",
      value: function removeHiddenDivs(src) {
        var getDivsToRemove = document.querySelectorAll('[data-jgc-placeholder-tag]');

        if (getDivsToRemove.length > 0) {
          for (var i = 0; i < getDivsToRemove.length; i++) {
            var element = getDivsToRemove[i];
            if (element.getAttribute('data-jgc-placeholder-tag') == src) element.remove();
          }
        }
      }
      /**
      * Remove all divs that hide user accepted iframes                                                                   
      */

    }, {
      key: "removeDivsOfUserAcceptedIframes",
      value: function removeDivsOfUserAcceptedIframes() {
        var checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));

        for (var _i = 0, _Object$entries = Object.entries(checkPreferencesFromStorage); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              k = _Object$entries$_i[0],
              v = _Object$entries$_i[1];

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
      * Remove placeholders
      */

    }, {
      key: "removePlaceholders",
      value: function removePlaceholders() {
        var _this3 = this;

        var getElementsPlaceholder = document.querySelectorAll('[data-jgc-placeholder]');

        if (getElementsPlaceholder.length > 0) {
          for (var i = 0; i < getElementsPlaceholder.length; i++) {
            var _getSrcToRemove$;

            var element = getElementsPlaceholder[i];
            var getPlaceholder = element.querySelectorAll("[data-jgc-placeholder-tag]");
            var getOriginalIframe = element.querySelectorAll("[data-jgc-tag]");
            var getSrcToRemove = element.querySelectorAll("[data-jgc-src]");

            if (getOriginalIframe) {
              for (var _i2 = 0; _i2 < getOriginalIframe.length; _i2++) {
                var _el = getOriginalIframe[_i2];

                if (getPlaceholder.length > 0) {
                  var height = getPlaceholder[0].getAttribute(['data-jgc-placeholder-height']);

                  _el.setAttribute('height', "".concat(height, "px"));
                }
              }
            }

            if (getPlaceholder) {
              for (var _i3 = 0; _i3 < getPlaceholder.length; _i3++) {
                var _el2 = getPlaceholder[_i3];

                var placeholderId = _el2.getAttribute('data-jgc-placeholder-id');

                var hiddenDiv = document.querySelectorAll("[data-jgc-placeholder-tag=\"".concat(placeholderId, "\"]"));
                hiddenDiv[0].remove();

                _el2.remove();
              }
            }

            var getSrc = ((_getSrcToRemove$ = getSrcToRemove[0]) === null || _getSrcToRemove$ === void 0 ? void 0 : _getSrcToRemove$.getAttribute('data-jgc-src')) || element.getAttribute('data-jgc-placeholder-id');
            this.removeHiddenDivs(getSrc);
          }
        } else {
          document.body.querySelectorAll('[data-jgc-tag]').forEach(function (el) {
            return el.classList.remove(_this3.checkTailwindPrefix('h-0'), _this3.checkTailwindPrefix('w-0'));
          });
        }
      }
      /**
      * Remove scripts from the DOM (if necessary)
      */

    }, {
      key: "removeScript",
      value: function removeScript(value) {
        var _this4 = this;

        var scriptsToRemove = document.querySelectorAll('[data-jgc-remove]');

        if (value && scriptsToRemove.length > 0) {
          var getPreferences = this.getCookie('JgcPreferences');

          var saveObj = _objectSpread2(_objectSpread2({}, getPreferences), {}, {
            remove: scriptsToRemove.length
          });

          this.saveCookie(saveObj);
          var checkPreferences = this.getCookie('JgcPreferences');
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

              _this4.saveCookie(updatedObj);
            }

            if (!checkPreferences['preferences'][element.getAttribute('data-jgc-tag')] || checkPreferences['preferences'][element.getAttribute('data-jgc-tag')] == false) element.remove();
          });
        } else {
          var _getPreferences2 = this.getCookie('JgcPreferences');

          var _saveObj = _objectSpread2(_objectSpread2({}, _getPreferences2), {}, {
            remove: 0
          });

          this.saveCookie(_saveObj);

          if (!_getPreferences2['refresh']) {
            var updatedObj = _objectSpread2(_objectSpread2({}, _saveObj), {}, {
              refresh: true
            });

            this.saveCookie(updatedObj);
            window.location.reload();
          }
        }
      }
      /**
      * Replace the attribute "jgc" from scripts if the user accepts
      */

    }, {
      key: "replaceScripts",
      value: function replaceScripts(customAttributeToCheck) {
        var _this5 = this;

        var getElementsToShow = document.querySelectorAll(customAttributeToCheck);

        var _loop2 = function _loop2(i) {
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

            element.classList.remove(_this5.checkTailwindPrefix('hidden'));
          } // TODO: This part can be improved


          if (element.hasAttribute('data-jgc-remove')) {
            if (element.hasChildNodes()) {
              for (var _i4 = 0; _i4 < element.children.length; _i4++) {
                var _el3 = element.children[_i4];

                if (_el3.hasAttribute('data-jgc-src')) {
                  var _customSrc = _el3.getAttribute('data-jgc-src').escape();

                  _el3.setAttribute('src', _customSrc);
                }
              }
            }
          }
        };

        for (var i = 0; i < getElementsToShow.length; i++) {
          _loop2(i);
        }
      }
      /**
      * Check custom user's activations  
      */

    }, {
      key: "checkActivations",
      value: function checkActivations() {
        var _this6 = this;

        var activations = {
          "default": function _default() {},
          "GoogleAnalytics": function GoogleAnalytics() {
            return _this6.activateGoogle();
          },
          "FacebookPixel": function FacebookPixel() {
            return _this6.activateFacebook();
          }
        };
        if (this.activate) Object.keys(this.activate).forEach(function (k) {
          return (activations[k] || activations['default'])();
        });
      }
      /**
      * Activate Google Analytics
      */

    }, {
      key: "activateGoogle",
      value: function activateGoogle() {
        var _this$activate, _this$activate$Google, _this$activate2, _this$activate2$Googl, _this$activate3, _this$activate3$Googl, _this$activate4, _this$activate4$Googl;

        var GoogleAnalytics = document.createElement('script');
        var GoogleAnalyticsCode = document.createElement('script');
        var GoogleAnalyticsId = (_this$activate = this.activate) !== null && _this$activate !== void 0 && (_this$activate$Google = _this$activate.GoogleAnalytics) !== null && _this$activate$Google !== void 0 && _this$activate$Google.id ? this.activate.GoogleAnalytics.id.escape() : false;
        var GoogleAnalyticsAnonymized = (_this$activate2 = this.activate) !== null && _this$activate2 !== void 0 && (_this$activate2$Googl = _this$activate2.GoogleAnalytics) !== null && _this$activate2$Googl !== void 0 && _this$activate2$Googl.anonymized ? this.activate.GoogleAnalytics.anonymized : false;
        var GoogleAnalyticsAdStorage = (_this$activate3 = this.activate) !== null && _this$activate3 !== void 0 && (_this$activate3$Googl = _this$activate3.GoogleAnalytics) !== null && _this$activate3$Googl !== void 0 && _this$activate3$Googl.ad_storage ? this.activate.GoogleAnalytics.ad_storage : false;
        var GoogleAnalyticsAnalyticsStorage = (_this$activate4 = this.activate) !== null && _this$activate4 !== void 0 && (_this$activate4$Googl = _this$activate4.GoogleAnalytics) !== null && _this$activate4$Googl !== void 0 && _this$activate4$Googl.analytics_storage ? this.activate.GoogleAnalytics.analytics_storage : false;
        GoogleAnalytics.setAttribute('src', "https://www.googletagmanager.com/gtag/js?id=".concat(GoogleAnalyticsId));
        document.head.appendChild(GoogleAnalytics);
        GoogleAnalyticsCode.text = "window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('consent', 'default', {\n        'ad_storage': '".concat(GoogleAnalyticsAdStorage == true ? 'granted' : 'denied', "',\n        'analytics_storage': '").concat(GoogleAnalyticsAnalyticsStorage == true ? 'granted' : 'denied', "',\n      });\n      gtag('js', new Date());\n      gtag('config', '").concat(GoogleAnalyticsId, "', { 'anonymize_ip': ").concat(GoogleAnalyticsAnonymized !== null && GoogleAnalyticsAnonymized !== void 0 ? GoogleAnalyticsAnonymized : false, " });");
        document.head.appendChild(GoogleAnalyticsCode);
      }
      /**
      * Activate Facebook Pixel
      */

    }, {
      key: "activateFacebook",
      value: function activateFacebook() {
        var _this$activate5;

        if ((_this$activate5 = this.activate) !== null && _this$activate5 !== void 0 && _this$activate5.FacebookPixel) {
          var FacebookPixel_init = this.activate.FacebookPixel.init.escape();
          var FacebookPixel_noscript = document.createElement('noscript');
          var FacebookPixel_script = document.createElement('script');
          FacebookPixel_script.text = "\n      !function(f,b,e,v,n,t,s)\n      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n      n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n      n.queue=[];t=b.createElement(e);t.async=!0;\n      t.src=v;s=b.getElementsByTagName(e)[0];\n      s.parentNode.insertBefore(t,s)}(window, document,'script',\n      'https://connect.facebook.net/en_US/fbevents.js');\n      fbq('init', '".concat(FacebookPixel_init, "');\n      fbq('track', 'PageView');");
          document.head.appendChild(FacebookPixel_script);
          FacebookPixel_noscript.setAttribute('width', '1');
          FacebookPixel_noscript.setAttribute('height', '1');
          FacebookPixel_noscript.setAttribute('style', 'display:none');
          FacebookPixel_noscript.setAttribute('src', "https://www.facebook.com/tr?id=".concat(FacebookPixel_init, "&ev=PageView&noscript=1"));
          document.head.appendChild(FacebookPixel_noscript);
        }
      }
      /**
      * Activate Google Tag Manager
      * TODO: It needs more tests.
      */

    }, {
      key: "googleTagManager",
      value: function googleTagManager() {
        var _this$activate6;

        if ((_this$activate6 = this.activate) !== null && _this$activate6 !== void 0 && _this$activate6.GoogleTagManager) {
          var dataObject = {
            'event': this.activate.GoogleTagManager.event_name
          };
          var GoogleAnalyticsContainerId = this.activate.GoogleTagManager.container_id;
          this.activateGoogleTagManager(window, document, 'script', 'dataLayer', GoogleAnalyticsContainerId);

          if (this.activate.GoogleTagManager.variables) {
            this.activate.GoogleTagManager.variables.forEach(function (element) {
              return dataObject[element[0]] = element[1];
            });
          }

          if (typeof dataLayer != 'undefined') dataLayer.push(dataObject);
        }
      }
      /**
      *  Google Tag Manager script
      */

    }, {
      key: "activateGoogleTagManager",
      value: function activateGoogleTagManager(w, d, s, l, i) {
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
      * Delete Google Analytics cookies if the user has changed their settings in this regard
      * TODO: It needs to be improved.
      */

    }, {
      key: "checkGoogleAnalytics",
      value: function checkGoogleAnalytics() {
        var checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));

        for (var _i5 = 0, _Object$entries2 = Object.entries(checkPreferencesFromStorage); _i5 < _Object$entries2.length; _i5++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i5], 2),
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
      * Generate the storage for "JgcPreferences"
      */

    }, {
      key: "generatePreferenceStorage",
      value: function generatePreferenceStorage() {
        var checkPreferences = this.getCookie('JgcPreferences');

        if (checkPreferences == null) {
          var preferences = {};

          for (var _i6 = 0, _Object$entries3 = Object.entries(this.getCustomCookies); _i6 < _Object$entries3.length; _i6++) {
            var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i6], 2),
                k = _Object$entries3$_i[0];
                _Object$entries3$_i[1];

            k == 'necessary' ? preferences[k] = true : preferences[k] = false;
          }

          var saveObj = {
            preferences: preferences
          };
          this.saveCookie(saveObj);
        }
      }
      /**
      * Load preferences
      */

    }, {
      key: "loadPreferences",
      value: function loadPreferences() {
        var _this7 = this;

        var findPreferenceButton = document.querySelectorAll('[data-jgc-preferences]');
        var preferenceButton = findPreferenceButton[0];
        if (preferenceButton) preferenceButton.addEventListener('click', function () {
          return _this7.managePreferences();
        });
      }
      /**
      * Save cookie categories 
      */

    }, {
      key: "saveCookiesPreferences",
      value: function saveCookiesPreferences() {
        var arr = [];
        if (this.activate) for (var _i7 = 0, _Object$entries4 = Object.entries(this.activate); _i7 < _Object$entries4.length; _i7++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i7], 2);
              _Object$entries4$_i[0];
              var value = _Object$entries4$_i[1];

          arr.push(value.dataJgcTag);
        }

        for (var _i8 = 0, _Object$entries5 = Object.entries(this.getCustomCookies); _i8 < _Object$entries5.length; _i8++) {
          var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i8], 2),
              k = _Object$entries5$_i[0];
              _Object$entries5$_i[1];

          arr.push(k);
        }

        var preferences = this.getCookie('JgcPreferences');

        var saveObj = _objectSpread2(_objectSpread2({}, preferences), {}, {
          enable: arr
        });

        this.saveCookie(saveObj);
      }
      /**
      * Return an array of services 
      */

    }, {
      key: "makeArrForServices",
      value: function makeArrForServices(value) {
        var _this$customStyle, _this$customStyle2;

        return "<div class=\"".concat((_this$customStyle = this.customStyle) !== null && _this$customStyle !== void 0 && _this$customStyle.toggles ? this.customStyle.toggles : this.checkTailwindPrefix('bg-green-200'), " \n    ").concat((_this$customStyle2 = this.customStyle) !== null && _this$customStyle2 !== void 0 && _this$customStyle2.servicesTag ? this.customStyle.servicesTag : this.checkTailwindPrefix('text-green-800'), " \n    ").concat(this.checkTailwindPrefix('px-2 py-0.5 rounded'), "\">").concat(value, "</div>");
      }
      /**
      * Return services
      */

    }, {
      key: "returnServices",
      value: function returnServices(service) {
        var _checkPreferences$ser,
            _this8 = this,
            _this$customStyle$ser,
            _this$customStyle3;

        var getElementsJgc = document.querySelectorAll("[data-jgc-tag=\"".concat(service, "\"]"));
        var arr = [];
        var divsToReturn = [];
        var checkPreferences = this.getCookie('JgcPreferences');
        var check = undefined;

        if (getElementsJgc) {
          for (var index = 0; index < getElementsJgc.length; index++) {
            var element = getElementsJgc[index];
            var getService = element.getAttribute('data-jgc-service') ? element.getAttribute('data-jgc-service').escape() : null;

            if (getService) {
              if (element.hasAttribute('data-jgc-remove')) check = true;
              arr += this.makeArrForServices(getService);
            }
          }
        }

        if (((_checkPreferences$ser = checkPreferences['servicesRemoved']) === null || _checkPreferences$ser === void 0 ? void 0 : _checkPreferences$ser.length) > 0 && !checkPreferences['duration']) {
          if (!check) {
            for (var _index = 0; _index < checkPreferences['servicesRemoved'].length; _index++) {
              var _element = checkPreferences['servicesRemoved'][_index];
              var _getService = _element['service'];
              var getTag = _element['tag'];
              if (getTag == service) arr += this.makeArrForServices(_getService);
            }
          }
        }

        if (this.auto) {
          var objKeys = Object.values(this.autoCategories);
          objKeys.forEach(function (el, k) {
            if (service == el[1]) arr += _this8.makeArrForServices(el[0]);
          });
        }

        if (this.activate) {
          var objEntries = Object.entries(this.activate);

          for (var i = 0; i < objEntries.length; i++) {
            var _element2 = objEntries[i];

            if (_element2[1].dataJgcService && service == _element2[1].dataJgcTag) {
              arr += this.makeArrForServices(_element2[1].dataJgcService);
            }
          }
        }

        divsToReturn += "<div class=\"".concat(arr.length > 0 ? this.checkTailwindPrefix('mt-2 border-t') : '', "\"> \n      ").concat(arr.length > 0 ? "<h4 class=\"".concat(this.checkTailwindPrefix('text-xs mt-1'), " ").concat((_this$customStyle$ser = (_this$customStyle3 = this.customStyle) === null || _this$customStyle3 === void 0 ? void 0 : _this$customStyle3.servicesText) !== null && _this$customStyle$ser !== void 0 ? _this$customStyle$ser : '', "\">").concat(this.text.servicesTag, "</h4>") : '', "\n      <div class=\"").concat(this.checkTailwindPrefix('flex space-x-1 mt-2 text-xs font-semibold'), "\">").concat(arr, "</div>\n      </div>");
        return divsToReturn;
      }
      /**
      * Generate single options (for the panel)
      */

    }, {
      key: "generateOptions",
      value: function generateOptions() {
        var _this9 = this;

        var arr = [],
            cookieExists = this.getCookie('JgcPreferences');

        var _loop3 = function _loop3() {
          var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i9], 2),
              k = _Object$entries6$_i[0],
              v = _Object$entries6$_i[1];

          if (cookieExists['enable'].length > 0 && cookieExists['enable'].includes(k)) {
            var _this9$customStyle, _this9$customStyle2, _this9$customStyle3, _this9$customStyle4;

            arr += "\n          <div class=\"".concat(_this9.checkTailwindPrefix('flex items-center space-x-6 py-1 px-4'), " ").concat((_this9$customStyle = _this9.customStyle) !== null && _this9$customStyle !== void 0 && _this9$customStyle.stripes ? "".concat(_this9.customStyle.stripes) : '', " \"> \n            <div>\n              <div class=\"").concat(_this9.checkTailwindPrefix('flex items-center justify-center'), "\">\n              <div id=\"toggle-").concat(k, "-div\" class=\"").concat(_this9.checkTailwindPrefix('relative w-12 h-7 transition duration-200 ease-linear rounded-full bg-gray-800 dark:bg-gray-700'), "\">\n                <label id=\"").concat(k == 'necessary' ? "toggle-necessary-right-fixed" : "toggle-".concat(k, "-right"), "\"\n                  for=\"toggle-").concat(k, "\" class=\"").concat(_this9.checkTailwindPrefix('bg-gray-100 absolute left-0 w-6 h-6 mt-0.5 ml-0.5 transition duration-100 ease-linear transform rounded-full cursor-pointer mr-[2px]'), "\">\n                  ").concat(k == 'necessary' ? "\n                  <div class=\"".concat(_this9.checkTailwindPrefix('p-1 flex items-center justify-center'), "\">\n                    <svg class=\"").concat((_this9$customStyle2 = _this9.customStyle) !== null && _this9$customStyle2 !== void 0 && _this9$customStyle2.lockIcon ? _this9.customStyle.lockIcon : _this9.checkTailwindPrefix('text-green-600'), "\" fill=\"currentColor\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 512 512\">\n                      <g>\n                        <path d=\"m432,224h-48v-96c0-70.578-57.422-128-128-128s-128,57.422-128,128v96h-48c-8.836,0-16,7.164-16,16v256c0,8.836 7.164,16 16,16h352c8.836,0 16-7.164 16-16v-256c0-8.836-7.164-16-16-16zm-272-96c0-52.938 43.063-96 96-96s96,43.063 96,96v96h-16v-96c0-44.109-35.891-80-80-80s-80,35.891-80,80v96h-16v-96zm48,96v-96c0-26.469 21.531-48 48-48 26.469,0 48,21.531 48,48v96h-96zm208,256h-320v-224h320v224z\"/>\n                        <path d=\"m256,304.002c-17.673,0-32,14.326-32,32 0,11.814 6.476,22.018 16,27.561v36.439c0,8.836 7.163,16 16,16 8.837,0 16-7.164 16-16v-36.439c9.524-5.543 16-15.747 16-27.561 0-17.674-14.327-32-32-32z\"/>\n                      </g>\n                    </svg>\n                  </div>\n                  ") : "", "\n                </label>\n                <input tabindex=\"0\" type=\"checkbox\" id=\"toggle-").concat(k, "\" name=\"toggle-").concat(k, "\" class=\"").concat(_this9.checkTailwindPrefix('w-full h-full appearance-none focus:shadow-2xl '), "\"/>\n              </div>\n            </div>\n          </div>\n        <div class=\"").concat((_this9$customStyle3 = _this9.customStyle) !== null && _this9$customStyle3 !== void 0 && _this9$customStyle3.servicesTag ? _this9.customStyle.services : "".concat(_this9.checkTailwindPrefix('dark:text-gray-300')), " ").concat(_this9.checkTailwindPrefix('w-full'), "\">\n          <div class=\"").concat(_this9.checkTailwindPrefix('flex items-center space-x-2'), "\">\n            <h4 class=\"").concat(_this9.checkTailwindPrefix('font-bold text-md'), "\">").concat(v.title, "</h4> \n          </div>\n          <div class=\"").concat((_this9$customStyle4 = _this9.customStyle) !== null && _this9$customStyle4 !== void 0 && _this9$customStyle4.panelText ? _this9.customStyle.panelText : "".concat(_this9.checkTailwindPrefix('dark:text-gray-300')), " ").concat(_this9.checkTailwindPrefix('text-xs md:text-md'), "\">").concat(v.description, "</div>\n            ").concat(_this9.returnServices(k), "\n          </div>\n        </div>");
            setTimeout(function () {
              document.getElementById("toggle-".concat(k, "-right")) && document.getElementById("toggle-".concat(k, "-right")).addEventListener('click', function () {
                _this9.changeSettings("".concat(k));
              });
              var getLabel = document.getElementById("toggle-".concat(k));

              if (getLabel) {
                getLabel.addEventListener("keyup", function (e) {
                  if (e.keyCode === 13) {
                    e.preventDefault();

                    _this9.changeSettings("".concat(k));
                  }
                });
              }

              if (_this9.config.layout == 'style8') _this9.changeToggle();
            }, 1);
          }
        };

        for (var _i9 = 0, _Object$entries6 = Object.entries(this.getCustomCookies); _i9 < _Object$entries6.length; _i9++) {
          _loop3();
        }

        return arr;
      }
      /**
      * Generate panel
      */

    }, {
      key: "managePreferences",
      value: function managePreferences() {
        var _this10 = this;

        document.body.classList.add(this.checkTailwindPrefix('overflow-hidden'));
        this.closeBanner();
        var panelExists = document.querySelector("#preferenceDiv") != null;

        if (!panelExists) {
          var _this$panel, _this$panel2, _this$customStyle4, _this$customStyle5, _this$text, _this$customStyle6, _this$text2, _this$customStyle7, _this$text3;

          var cookiePanel = document.createElement("div");
          cookiePanel.innerHTML = "\n      <div id=\"preferenceDiv\" style=\"background-color: rgba(0,0,0,0.6);z-index:9999 !important;\" class=\"".concat(this.checkTailwindPrefix(' w-full min-h-screen top-0 fixed flex flex-col p-6 shadow-2xl items-center justify-center mx-auto transition duration-700 ease-in-out'), " ").concat(this.panelHeader ? '' : null, " \">\n            <div id=\"jgc-custom-header\" class=\"").concat(this.checkTailwindPrefix('w-full'), "\"></div>\n              <div class=\"").concat((_this$panel = this.panel) !== null && _this$panel !== void 0 && _this$panel.bgColor ? this.panel.bgColor : "".concat(this.checkTailwindPrefix('bg-white dark:bg-gray-800')), " ").concat(this.checkTailwindPrefix('max-w-3xl w-full'), " ").concat(((_this$panel2 = this.panel) === null || _this$panel2 === void 0 ? void 0 : _this$panel2.padding) == false ? '' : "".concat(this.checkTailwindPrefix('p-2')), "\">\n                <div class=\"").concat((_this$customStyle4 = this.customStyle) !== null && _this$customStyle4 !== void 0 && _this$customStyle4.panelHeader ? this.customStyle.panelHeader : "".concat(this.checkTailwindPrefix('md:flex justify-between px-4 py-4')), "\">\n                  <h2 class=\"").concat((_this$customStyle5 = this.customStyle) !== null && _this$customStyle5 !== void 0 && _this$customStyle5.panelTitle ? this.customStyle.panelTitle : this.checkTailwindPrefix('dark:text-gray-300 leading-snug'), " ").concat(this.checkTailwindPrefix('text-xl font-bold'), "\">\n                    ").concat((_this$text = this.text) !== null && _this$text !== void 0 && _this$text.panelTitle ? this.text.panelTitle : '', " \n                  </h2>\n                  <div class=\"").concat(this.checkTailwindPrefix('space-x-1 md:mt-0 mt-4'), "\">\n                    <button role=\"button\" id=\"closePreferencePanel\" type=\"button\" class=\"").concat((_this$customStyle6 = this.customStyle) !== null && _this$customStyle6 !== void 0 && _this$customStyle6.saveButton ? this.customStyle.saveButton : "".concat(this.checkTailwindPrefix('px-3 py-1 uppercase font-bold tracking-wide text-xs z-index-10 relative rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer text-green-600 ring-1 ring-green-600')), " \">\n                      ").concat((_this$text2 = this.text) !== null && _this$text2 !== void 0 && _this$text2.saveButton ? this.text.saveButton : this.locale.saveAndContinue, "  \n                    </button>\n                    <button role=\"button\" id=\"closePreferencePanelAcceptAll\" type=\"button\" class=\"").concat((_this$customStyle7 = this.customStyle) !== null && _this$customStyle7 !== void 0 && _this$customStyle7.saveAllButton ? this.customStyle.saveAllButton : "".concat(this.checkTailwindPrefix('px-3 py-1 uppercase font-bold tracking-wide text-xs z-index-10 relative rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer text-green-600 ring-1 ring-green-600')), "  \">\n                      ").concat((_this$text3 = this.text) !== null && _this$text3 !== void 0 && _this$text3.saveAllButton ? this.text.saveAllButton : this.locale.saveAndContinueAcceptAll, "  \n                    </button>\n                  </div>\n                </div>\n                <div>\n                  <div style=\"overflow-y: scroll; -webkit-overflow-scrolling: touch; max-height: calc(100vh - 400px);\" class=\"").concat(this.panel && this.panel.stripes ? "".concat(this.panel.stripes.odd, " ").concat(this.panel.stripes.even) : this.checkTailwindPrefix('space-y-4 overflow-y-auto'), " ").concat(this.checkTailwindPrefix('text-sm py-4'), "\"> \n                    ").concat(this.generateOptions(), "\n                  </div> \n                </div>\n              </div>\n              <div id=\"jgc-custom-footer\" class=\"").concat(this.checkTailwindPrefix('w-full'), "\"></div>\n            </div>\n      </div>\n      ");
          document.body.appendChild(cookiePanel);
          if (document.getElementById('jgc-panel-header')) document.getElementById('jgc-custom-header').innerHTML = this.panelHeader;
          if (document.getElementById('jgc-panel-footer')) document.getElementById('jgc-custom-footer').innerHTML = this.panelFooter;
          document.getElementById('closePreferencePanel').addEventListener('click', function () {
            return _this10.closePreferencePanel();
          });
          document.getElementById('closePreferencePanelAcceptAll').addEventListener('click', function () {
            return _this10.closePreferencePanelAndSaveAll();
          });
        } else {
          document.querySelector("#preferenceDiv").classList.remove(this.checkTailwindPrefix('hidden'));
        }

        this.changeToggle();
      }
      /**
      * Fire the settings panel
      */

    }, {
      key: "managePreferencesLink",
      value: function managePreferencesLink(colors) {
        var _this$customStyle8, _this$customStyle9, _this$text$preference;

        var createButton = document.createElement("div");
        return createButton.innerHTML = "\n    <button id=\"openPanel\" style=".concat((_this$customStyle8 = this.customStyle) !== null && _this$customStyle8 !== void 0 && _this$customStyle8.preferencesText ? '' : 'font-size:0.6rem', " ;\" class=\"").concat(colors ? colors : "".concat((_this$customStyle9 = this.customStyle) !== null && _this$customStyle9 !== void 0 && _this$customStyle9.preferencesText ? this.customStyle.preferencesText : this.checkTailwindPrefix('font-bold uppercase dark:text-white')), "\">\n      ").concat((_this$text$preference = this.text.preferencesText) !== null && _this$text$preference !== void 0 ? _this$text$preference : 'Manage and choose cookies', " \n    </button>");
      }
      /**
      * Open panel
      */

    }, {
      key: "openPanel",
      value: function openPanel() {
        var _this11 = this;

        var getPreferences = this.getCookie('JgcPreferences');
        var refreshed = getPreferences['refresh'];

        if (refreshed == null && this.panel && this.panel.open) {
          var banner = document.getElementById('bannerContent');

          if (this.config.layout == 'style8') {
            // Style8 is a bit particular...
            banner.remove();
            setTimeout(function () {
              _this11.managePreferences();
            }, 200);
          } else {
            this.managePreferences();
          }
        }
      }
      /**
      *  Add the click event to fire the settings panel 
      */

    }, {
      key: "managePreferencesLinkListener",
      value: function managePreferencesLinkListener() {
        var _this12 = this;

        this.refreshLocalStorage();
        var preferenceButton = document.getElementById('openPanel');
        preferenceButton.addEventListener('click', function () {
          return _this12.managePreferences();
        });
      }
      /**
      * UTILITY
      * Checking whether a value is a string or an object (for translations)
      */

    }, {
      key: "isString",
      value: function isString(value, key) {
        if (typeof value === 'string' || value instanceof String) {
          return value.escape();
        } else if (_typeof(value) === 'object' || value instanceof Object) {
          return value[this.localeString].escape();
        } else {
          throw ": \"".concat(key, "\" is not valid, must be a string or an object.");
        }
      }
      /**
      * UTILITY
      * Check if a value is a boolean
      */

    }, {
      key: "isBoolean",
      value: function isBoolean(value, key) {
        if (value != "undefined" && typeof value == 'boolean') {
          return true;
        } else {
          throw ": \"".concat(key, "\" is not valid, must be a boolean.");
        }
      }
      /**
      * UTILITY
      * Check if a value is a function
      */

    }, {
      key: "isFunction",
      value: function isFunction(value, key) {
        if (typeof value == "function") {
          return value;
        } else {
          throw ": \"".concat(key, "\" is not valid, must be a function.");
        }
      }
      /**
      * UTILITY
      * Get cookie
      */

    }, {
      key: "getCookie",
      value: function getCookie(name) {
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
      * UTILITY
      * Get cookie preferences (useful for the callbacks from the frontend)
      */

    }, {
      key: "getCookieId",
      value: function getCookieId(name) {
        var cookie = {};
        document.cookie.split(';').forEach(function (el) {
          var _el$split3 = el.split('='),
              _el$split4 = _slicedToArray(_el$split3, 2),
              k = _el$split4[0],
              v = _el$split4[1];

          cookie[k.trim()] = v;
        });

        if (cookie[name]) {
          var cookieName = JSON.parse(cookie[name]);
          return cookieName['id'];
        } else {
          return null;
        }
      }
      /**
      * UTILITY
      * Get cookie (useful for a callback from the frontend)
      */

    }, {
      key: "getCookiePreferences",
      value: function getCookiePreferences(name) {
        var cookie = {};
        document.cookie.split(';').forEach(function (el) {
          var _el$split5 = el.split('='),
              _el$split6 = _slicedToArray(_el$split5, 2),
              k = _el$split6[0],
              v = _el$split6[1];

          cookie[k.trim()] = v;
        });

        if (cookie[name]) {
          var cookieName = JSON.parse(cookie[name]);
          return cookieName['preferences'];
        } else {
          return null;
        }
      }
      /**
      * UTILITY
      * Save cookie
      */

    }, {
      key: "saveCookie",
      value: function saveCookie(saveObj) {
        var checkPreferences = this.getCookie('JgcPreferences');

        if (checkPreferences && checkPreferences['duration']) {
          var expiration = checkPreferences['duration'].expiry;
          document.cookie = "JgcPreferences=".concat(JSON.stringify(saveObj), ";expires= ").concat(expiration, ";path=/;SameSite=Strict");
        } else {
          document.cookie = "JgcPreferences=".concat(JSON.stringify(saveObj), ";path=/;SameSite=Strict;");
        }
      }
      /**
      * UTILITY
      * Intercept the pressure of the "enter" key
      */

    }, {
      key: "addEnterAction",
      value: function addEnterAction(el) {
        document.getElementById(el).addEventListener('keyup', function (e) {
          if (e.keyCode === 13) {
            e.preventDefault();
            return 'this.' + el + '()';
          }
        });
      }
      /**
      * UTILITY
      * Refresh the local storage
      */

    }, {
      key: "refreshLocalStorage",
      value: function refreshLocalStorage() {
        var checkPreferences = this.getCookie('JgcPreferences');

        var saveObj = _objectSpread2({}, checkPreferences['preferences']);

        localStorage.setItem("JgcPreferences", JSON.stringify(saveObj));
      }
      /**
      * Close the settings panel and reload the page
      */

    }, {
      key: "closePreferencePanel",
      value: function closePreferencePanel() {
        this.activateToggledCookies();
        this.removeScript(false);
        var date = new Date();
        date.setTime(date.getTime() + this.cookieTimeout);
        var item = {
          value: "1",
          expiry: date
        };
        var checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));
        var getPreferences = this.getCookie('JgcPreferences');

        var saveObj = _objectSpread2(_objectSpread2({}, getPreferences), {}, {
          preferences: checkPreferencesFromStorage,
          duration: item
        });

        this.saveCookie(saveObj);
        this.closeBanner(); // And yes, we need to refresh the page to activate specific cookies. Maybe this part can be improved.

        window.location.reload();
      }
      /**
      * Change the local storage on "Save All"
      */

    }, {
      key: "closePreferencePanelAndSaveAll",
      value: function closePreferencePanelAndSaveAll() {
        var checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));
        var preferences = {};

        for (var _i10 = 0, _Object$entries7 = Object.entries(checkPreferencesFromStorage); _i10 < _Object$entries7.length; _i10++) {
          var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i10], 2),
              k = _Object$entries7$_i[0];
              _Object$entries7$_i[1];

          preferences[k] = true;
        }

        localStorage.setItem("JgcPreferences", JSON.stringify(preferences));
        if (document.getElementById('preferenceDiv')) this.closePreferencePanel();
      }
      /**
      * Enable scripts
      */

    }, {
      key: "activateToggledCookies",
      value: function activateToggledCookies() {
        var _this13 = this;

        var checkPreferences = this.getCookie('JgcPreferences');

        for (var _i11 = 0, _Object$entries8 = Object.entries(checkPreferences['preferences']); _i11 < _Object$entries8.length; _i11++) {
          var _Object$entries8$_i = _slicedToArray(_Object$entries8[_i11], 2),
              k = _Object$entries8$_i[0],
              v = _Object$entries8$_i[1];

          var tagToCheck = "[data-jgc-tag=\"".concat(k, "\"]"),
              cookieExists = document.querySelectorAll(tagToCheck);

          if (v == true) {
            this.replaceScripts(tagToCheck);
          } else {
            cookieExists.forEach(function (element) {
              var parent = element.parentNode;

              if (parent.hasAttribute('data-jgc-placeholder')) {
                _this13.generateIframeDivs(element);
              } else {
                element.classList.add(_this13.checkTailwindPrefix('hidden'));
                element.innerHTML = '';
              }
            });
          }
        }

        if (checkPreferences['darkBackground']) {
          var saveObj = _objectSpread2(_objectSpread2({}, checkPreferences), {}, {
            darkBackground: false
          });

          this.saveCookie(saveObj);
          var modal = document.getElementById('jgcModal');
          if (modal) modal.classList.add(this.checkTailwindPrefix('hidden'));
        }
      }
      /**
      * Grab the custom tags and write an item to local storage
      */

    }, {
      key: "setPreferences",
      value: function setPreferences() {
        var preferences = {};

        for (var _i12 = 0, _Object$entries9 = Object.entries(this.getCustomCookies); _i12 < _Object$entries9.length; _i12++) {
          var _Object$entries9$_i = _slicedToArray(_Object$entries9[_i12], 2),
              k = _Object$entries9$_i[0];
              _Object$entries9$_i[1];

          preferences[k] = true;
        }

        var getPreferences = this.getCookie('JgcPreferences');

        var saveObj = _objectSpread2(_objectSpread2({}, getPreferences), {}, {
          preferences: preferences
        });

        this.saveCookie(saveObj);
      }
      /**
      * Change toggles and settings
      */

    }, {
      key: "changeSettings",
      value: function changeSettings(toggleClicked) {
        var checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));
        checkPreferencesFromStorage[toggleClicked] = !checkPreferencesFromStorage[toggleClicked];
        this.animateToggle(checkPreferencesFromStorage[toggleClicked], toggleClicked);

        var saveObj = _objectSpread2({}, checkPreferencesFromStorage);

        localStorage.setItem("JgcPreferences", JSON.stringify(saveObj));
      }
      /**
      * Animate toggles
      */

    }, {
      key: "animateToggle",
      value: function animateToggle(val, buttonType) {
        var _this$customStyle10;

        var toggle = document.getElementById('toggle-' + buttonType + '-div');
        var toggleRight = document.getElementById('toggle-' + buttonType + '-right');
        var toggleNecessary = document.getElementById('toggle-necessary-right-fixed');
        var bgColor = (_this$customStyle10 = this.customStyle) !== null && _this$customStyle10 !== void 0 && _this$customStyle10.toggles ? this.customStyle.toggles : this.checkTailwindPrefix('bg-green-200');

        if (val && toggle != null && toggleRight != null) {
          toggle.classList.remove(this.checkTailwindPrefix('bg-gray-800'), this.checkTailwindPrefix('dark:bg-gray-700'));
          toggle.classList.add(bgColor);
          toggleRight.classList.remove(this.checkTailwindPrefix('translate-x-0'));
          toggleRight.classList.remove(this.checkTailwindPrefix('ml-0.5'));
          toggleRight.classList.add(this.checkTailwindPrefix('-ml-0.5'));
          toggleRight.classList.add(this.checkTailwindPrefix('border-green-400')); // toggleRight.classList.add(this.checkTailwindPrefix('translate-x-full'))

          toggleRight.classList.remove(this.checkTailwindPrefix('left-0'));
          toggleRight.classList.add(this.checkTailwindPrefix('absolute'));
          toggleRight.classList.add(this.checkTailwindPrefix('right-0'));
        } else if (!val) {
          toggle.classList.remove(this.checkTailwindPrefix('translate-x-full'));
          toggle.classList.remove(bgColor);
          toggle.classList.add(this.checkTailwindPrefix('bg-gray-800'), this.checkTailwindPrefix('dark:bg-gray-700'));
          toggleRight.classList.remove(this.checkTailwindPrefix('-ml-0.5'));
          toggleRight.classList.remove(this.checkTailwindPrefix('translate-x-full'));
          toggleRight.classList.remove(this.checkTailwindPrefix('border-green-400'));
          toggleRight.classList.add(this.checkTailwindPrefix('ml-0.5'));
          toggleRight.classList.add(this.checkTailwindPrefix('translate-x-0'));
          toggleRight.classList.add(this.checkTailwindPrefix('left-0'));
        } else if (val && buttonType == 'necessary' && toggleNecessary) {
          toggle.classList.remove(this.checkTailwindPrefix('bg-gray-800'), this.checkTailwindPrefix('dark:bg-gray-700'));
          toggle.classList.add(bgColor);
          toggleNecessary.classList.remove(this.checkTailwindPrefix('ml-0.5'));
          toggleNecessary.classList.add(this.checkTailwindPrefix('-ml-0.5'));
          toggleNecessary.classList.remove(this.checkTailwindPrefix('translate-x-0'));
          toggleNecessary.classList.add(this.checkTailwindPrefix('border-green-400')); // toggleNecessary.classList.add(this.checkTailwindPrefix('translate-x-full'))

          toggleNecessary.classList.remove(this.checkTailwindPrefix('left-0'));
          toggleNecessary.classList.add(this.checkTailwindPrefix('absolute'));
          toggleNecessary.classList.add(this.checkTailwindPrefix('right-0'));
        }
      }
      /**
      * Change the value of toggles
      */

    }, {
      key: "changeToggle",
      value: function changeToggle() {
        var checkPreferences = this.getCookie('JgcPreferences');

        for (var _i13 = 0, _Object$entries10 = Object.entries(checkPreferences['preferences']); _i13 < _Object$entries10.length; _i13++) {
          var _Object$entries10$_i = _slicedToArray(_Object$entries10[_i13], 2),
              k = _Object$entries10$_i[0],
              v = _Object$entries10$_i[1];

          if (v == true) this.animateToggle(true, "".concat(k));
        }
      }
      /**
      * Show banner
      */

    }, {
      key: "closeBanner",
      value:
      /**
      * Close banner
      */
      function closeBanner() {
        var banner = document.getElementById('bannerContent');

        if (banner) {
          banner.classList.add(this.checkTailwindPrefix('opacity-0'), this.checkTailwindPrefix('pointer-events-none'));

          if (this.config.layout != 'style8') {
            // "style8" is a little special. I can not use animations here because the toggle switches repeat in 2 different areas.
            setTimeout(function () {
              banner.remove(); // I need this timeout for the fade out animation
            }, 700);
          } else {
            banner.remove();
          }
        }
      }
    }, {
      key: "closeBannerWithButton",
      value:
      /**
      * Close banner with button
      */
      function closeBannerWithButton() {
        this.bannerConfig.closeButtonAccept ? this.yesCookies() : this.noCookies();
      }
      /**
      * Control whether the background should be dark or not
      */

    }, {
      key: "checkBackground",
      value: function checkBackground() {
        var getPreferences = this.getCookie('JgcPreferences');

        if (this.bannerConfig.backgroundDark != false) {
          if (getPreferences['darkBackground'] == false || getPreferences['darkBackground'] && !getPreferences['duration']) {
            var modal = document.createElement("div");
            modal.id = 'jgcModal';
            modal.className = this.checkTailwindPrefix('bg-black bg-opacity-80 fixed min-h-screen top-0 w-full z-index-50');
            document.body.appendChild(modal);

            var saveObj = _objectSpread2(_objectSpread2({}, getPreferences), {}, {
              darkBackground: true
            });

            this.saveCookie(saveObj);
          }
        }
      }
      /**
      * Return icons (if any)
      */

    }, {
      key: "returnIcon",
      value: function returnIcon() {
        if (this.bannerConfig.icon && this.darkMode != true) {
          return "<div><img class=\"".concat(this.checkTailwindPrefix('w-4 h-4'), "\" src=\"").concat(this.bannerConfig.icon, "\" /></div>");
        } else if (this.bannerConfig.icon && this.darkMode == true) {
          return "<div><img class=\"".concat(this.checkTailwindPrefix('w-4 h-4'), "\" src=\"").concat(this.bannerConfig.iconDark, "\" /></div>");
        } else if (this.bannerConfig.icon == null) {
          return "";
        }
      }
      /**
      * Return logo (if any)
      */

    }, {
      key: "returnLogo",
      value: function returnLogo() {
        return "".concat(this.bannerConfig.logo ? "<img class=\"".concat(this.bannerConfig.logoClasses ? this.bannerConfig.logoClasses : '', "\" src=\"").concat(this.bannerConfig.logo, "\" />") : '');
      }
      /**
      * Animate banner
      */

    }, {
      key: "makeBannerAnimation",
      value: function makeBannerAnimation() {
        var _this$bannerConfig,
            _this14 = this;

        if (this.bannerConfig.animation) {
          var bannerDiv = document.getElementById('bannerContent');

          switch (((_this$bannerConfig = this.bannerConfig) === null || _this$bannerConfig === void 0 ? void 0 : _this$bannerConfig.position) || 'bottom') {
            case 'top':
              if (bannerDiv) {
                if (this.config.layout == 'style7') {
                  document.getElementById('jgc-close-button').classList.remove(this.checkTailwindPrefix('-top-[8px]'));
                  document.getElementById('jgc-close-button').classList.remove(this.checkTailwindPrefix('rounded-tr-lg'));
                  document.getElementById('jgc-close-button').classList.remove(this.checkTailwindPrefix('rounded-tl-lg'));
                  document.getElementById('jgc-close-button').classList.add(this.checkTailwindPrefix('-bottom-[40px]'));
                  document.getElementById('jgc-close-button').classList.add(this.checkTailwindPrefix('rounded-br-lg'));
                  document.getElementById('jgc-close-button').classList.add(this.checkTailwindPrefix('rounded-bl-lg'));
                }

                bannerDiv.classList.add(this.checkTailwindPrefix('-translate-y-full'));
                setTimeout(function () {
                  bannerDiv.classList.remove(_this14.checkTailwindPrefix('-translate-y-full'));
                  bannerDiv.classList.add(_this14.checkTailwindPrefix('translate-y-0'));
                }, 300);
                break;
              }

            case 'bottom':
              if (bannerDiv) {
                bannerDiv.classList.add(this.checkTailwindPrefix('translate-y-full'));
                setTimeout(function () {
                  // bannerDiv.classList.add(this.checkTailwindPrefix('mb-4'))
                  bannerDiv.classList.remove(_this14.checkTailwindPrefix('translate-y-full'));
                }, 300);
              }

              break;
          }
        }
      }
      /**
      * Make banner buttons
      */

    }, {
      key: "generateButtons",
      value: function generateButtons() {
        var _this15 = this,
            _this$bannerConfig2;

        document.getElementById('yesCookies').addEventListener('click', function () {
          return _this15.yesCookies();
        });
        this.addEnterAction('yesCookies');

        if (((_this$bannerConfig2 = this.bannerConfig) === null || _this$bannerConfig2 === void 0 ? void 0 : _this$bannerConfig2.disableReject) == false) {
          document.getElementById('noCookies').addEventListener('click', function () {
            return _this15.noCookies();
          });
          this.addEnterAction('noCookies');
        }

        this.managePreferencesLinkListener();
      }
      /**
      * Get the max width of the banner
      */

    }, {
      key: "getMaxWidth",
      value: function getMaxWidth(defaultValue) {
        var _this$bannerConfig3;

        if ((_this$bannerConfig3 = this.bannerConfig) !== null && _this$bannerConfig3 !== void 0 && _this$bannerConfig3.maxWidth) {
          switch (this.bannerConfig.maxWidth) {
            case 'xs':
              return this.checkTailwindPrefix('max-w-xs');

            case 'sm':
              return this.checkTailwindPrefix('max-w-sm');

            case 'md':
              return this.checkTailwindPrefix('max-w-md');

            case 'lg':
              return this.checkTailwindPrefix('max-w-lg');

            case 'xl':
              return this.checkTailwindPrefix('max-w-xl');

            case '2xl':
              return this.checkTailwindPrefix('max-w-2xl');

            case '3xl':
              return this.checkTailwindPrefix('max-w-3xl');

            case '4xl':
              return this.checkTailwindPrefix('max-w-4xl');

            case '5xl':
              return this.checkTailwindPrefix('max-w-5xl');

            case '6xl':
              return this.checkTailwindPrefix('max-w-6xl');

            case '7xl':
              return this.checkTailwindPrefix('max-w-7xl');

            case 'full':
              return this.checkTailwindPrefix('max-w-full');

            case 'min':
              return this.checkTailwindPrefix('max-w-min');

            case 'max':
              return this.checkTailwindPrefix('max-w-max');
          }
        } else {
          return this.checkTailwindPrefix(defaultValue);
        }
      }
      /**
      * Load banner layouts
      */

    }, {
      key: "loadBannerLayout",
      value: function loadBannerLayout(style) {
        var _this$bannerConfig$ba,
            _this$bannerConfig$ba2,
            _this$customStyle$ban,
            _this$customStyle11,
            _this$customStyle12,
            _this$customStyle13,
            _this$customStyle$pri,
            _this$customStyle14,
            _this$text4,
            _this$bannerConfig4,
            _this16 = this,
            _this$customStyle15,
            _this$customStyle16,
            _this$customStyle$ban2,
            _this$customStyle17,
            _this$customStyle18,
            _this$bannerLink,
            _this$text5,
            _this$customStyle19,
            _this$customStyle$ban3,
            _this$customStyle20,
            _this$bannerLink2,
            _this$text6,
            _this$customStyle21,
            _this$customStyle22,
            _this$customStyle23,
            _this$customStyle24,
            _this$customStyle$ban4,
            _this$customStyle25,
            _this$customStyle26,
            _this$text7,
            _this$customStyle27,
            _this$customStyle28,
            _this$customStyle29,
            _this$customStyle30,
            _this$customStyle$ban5,
            _this$customStyle31,
            _this$customStyle32,
            _this$text8,
            _this$customStyle33,
            _this$customStyle34,
            _this$bannerConfig$po,
            _this$customStyle35,
            _this$customStyle$ban6,
            _this$customStyle36,
            _this$customStyle37,
            _this$bannerLink3,
            _this$text9,
            _this$customStyle38,
            _this$customStyle39,
            _this$bannerConfig$ba3,
            _this$bannerConfig$ba4,
            _this$customStyle$ban7,
            _this$customStyle40,
            _this$customStyle41,
            _this$text10,
            _this$customStyle42,
            _this$customStyle43,
            _this$customStyle$ban8,
            _this$customStyle44,
            _this$customStyle45,
            _this$customStyle46,
            _this$text11,
            _this$customStyle47,
            _this$customStyle48,
            _this$customStyle49,
            _this$bannerConfig$ba5,
            _this$bannerConfig$ba6,
            _this$customStyle50;

        switch (style) {
          case "style1":
            this.positions = {
              "top": this.checkTailwindPrefix("justify-top items-start top-0"),
              "center": this.checkTailwindPrefix("mx-auto top-1/2 -translate-y-1/2"),
              "bottom": this.checkTailwindPrefix("justify-end items-center bottom-0")
            };
            this.banner = document.createElement("div");
            this.banner.style.display = "none";
            this.banner.innerHTML = "<div id=\"bannerContent\" style=\"".concat(this.bannerConfig.backgroundImage ? "background-size:cover; background-image:url(".concat(this.bannerConfig.backgroundImage, ")") : '', "\" \n              class=\"\n              ").concat(this.positions[this.bannerConfig.position || 'bottom'], " \n              ").concat(this.bannerConfig.backgroundColor, " \n              ").concat(this.bannerConfig.backgroundImage ? "".concat(this.bannerConfig.backgroundColor, " ").concat(this.checkTailwindPrefix('p-2')) : "".concat(this.bannerConfig.innerBackgroundImage ? '' : this.checkTailwindPrefix('p-6')), "\n              ").concat(this.getMaxWidth('max-w-sm'), "\n              ").concat(this.checkTailwindPrefix('fixed shadow-2xl md:flex md:flex-col md:space-x-1 right-0 md:mr-[2%] transition duration-700 ease-in-out z-[99999] rounded'), "\">\n              <div class=\"").concat(this.checkTailwindPrefix('space-y-2 flex flex-col'), " ").concat(this.bannerConfig.backgroundImage && !this.bannerConfig.innerBackgroundImage ? "".concat((_this$bannerConfig$ba = this.bannerConfig.backgroundColor) !== null && _this$bannerConfig$ba !== void 0 ? _this$bannerConfig$ba : '', "  ").concat(this.checkTailwindPrefix('p-4')) : '', "\n                ").concat(this.bannerConfig.innerBackgroundImage && !this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('pb-8') : '', " \n                ").concat(this.bannerConfig.innerBackgroundImage && this.bannerConfig.backgroundImage ? "".concat(this.checkTailwindPrefix('pb-8'), " ").concat((_this$bannerConfig$ba2 = this.bannerConfig.backgroundColor) !== null && _this$bannerConfig$ba2 !== void 0 ? _this$bannerConfig$ba2 : '') : '', "\n                \">\n                ").concat(this.bannerConfig.innerBackgroundImage ? "<img class=\"".concat(this.checkTailwindPrefix('md:rounded-t'), "\" src=\"").concat(this.bannerConfig.innerBackgroundImage, "\" />") : '', "\n                ").concat(this.returnLogo(), "\n                <div class=\"").concat(this.checkTailwindPrefix('flex w-full'), "\" >\n                    <div class=\"").concat(this.checkTailwindPrefix('flex items-center space-x-1'), " ").concat(this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('px-6') : '', "\">\n                      ").concat(this.returnIcon(), "\n                      <h4 class=\"").concat((_this$customStyle$ban = (_this$customStyle11 = this.customStyle) === null || _this$customStyle11 === void 0 ? void 0 : _this$customStyle11.bannerTitle) !== null && _this$customStyle$ban !== void 0 ? _this$customStyle$ban : this.checkTailwindPrefix('text-xl font-bold dark:text-white'), "\">").concat(this.bannerConfig.title, "</h4>\n                    </div>  \n                    ").concat(this.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat(this.bannerConfig.logo ? "".concat(this.checkTailwindPrefix('absolute top-2 right-4')) : "", "   ").concat((_this$customStyle12 = this.customStyle) !== null && _this$customStyle12 !== void 0 && _this$customStyle12.closeButton ? "".concat(this.customStyle.closeButton) : "".concat(this.checkTailwindPrefix('dark:text-white text-xl ml-auto')), "\">&times;</button>") : '', "\n                </div>\n                <div class=\"").concat((_this$customStyle13 = this.customStyle) !== null && _this$customStyle13 !== void 0 && _this$customStyle13.bannerText ? this.customStyle.bannerText : this.checkTailwindPrefix('dark:text-white'), " ").concat(this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('px-6') : '', "\">\n                  <div>").concat(this.bannerText ? this.bannerText : "".concat(this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription), "<br/></div>\n                  <div>").concat(this.bannerLink ? this.bannerLink : "".concat(this.locale.bannerLinkDescription, " <a class=\"").concat((_this$customStyle$pri = (_this$customStyle14 = this.customStyle) === null || _this$customStyle14 === void 0 ? void 0 : _this$customStyle14.privacyLink) !== null && _this$customStyle$pri !== void 0 ? _this$customStyle$pri : "".concat(this.checkTailwindPrefix('dark:decoration-sky-500 dark:underline font-bold text-black dark:text-white')), "\" target=\"_blank\" href=\"").concat(this.config.privacyLink, "\"> ").concat((_this$text4 = this.text) !== null && _this$text4 !== void 0 && _this$text4.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel, "</a>"), "</div>\n                </div>\n                <div class=\"").concat(this.checkTailwindPrefix('mt-2 flex flex-col'), " ").concat(this.bannerConfig.innerBackgroundImage && this.checkTailwindPrefix('px-6'), "\">\n                  <div class=\"").concat(this.checkTailwindPrefix('flex space-x-2'), "\">\n                    <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"yesCookies\" class=\"").concat(this.style.yesCookies, "\">").concat(this.bannerConfig.shortText ? this.locale.acceptShortText : this.text.acceptText, "</button>\n                    ").concat(((_this$bannerConfig4 = this.bannerConfig) === null || _this$bannerConfig4 === void 0 ? void 0 : _this$bannerConfig4.disableReject) == false ? "<button role=\"button\" tabindex=\"0\" type=\"button\" id=\"noCookies\" class=\"".concat(this.style.noCookies, "\">").concat(this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText, "</button>") : '', "\n                  </div>\n                  <div>").concat(this.managePreferencesLink(), "</div>\n                </div>\n              </div>\n        </div>");
            document.body.appendChild(this.banner);
            this.makeBannerAnimation();
            if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
              return _this16.closeBannerWithButton();
            });
            this.generateButtons();
            break;

          case "style2":
            this.positions = {
              "top": this.checkTailwindPrefix("justify-top items-center top-0 mt-6"),
              "center": this.checkTailwindPrefix("mx-auto top-1/2 -translate-y-1/2"),
              "bottom": this.checkTailwindPrefix("justify-end items-center bottom-0")
            };
            this.banner = document.createElement("div");
            this.banner.style.display = "none";
            this.banner.innerHTML = "\n        <div id=\"bannerContent\"\n        style=\"".concat(this.bannerConfig.backgroundImage && "background-size:cover; background-image:url(".concat(this.bannerConfig.backgroundImage, ")"), "\"\n        class=\"").concat(this.positions[this.bannerConfig.position || 'bottom'], "\n          ").concat(this.bannerConfig.backgroundColor, " \n          ").concat(this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('p-2') : this.checkTailwindPrefix('p-6'), "\n          ").concat(this.getMaxWidth('max-w-5xl'), "\n            ").concat(this.checkTailwindPrefix('fixed mx-auto md:left-1/2 md:-translate-x-1/2 right-0 shadow-2xl md:space-x-1 md:mr-[2%] md:mb-[1.5%]  transition duration-700 ease-in-out z-[999] md:rounded-full'), "\">\n              <div class=\"").concat(this.checkTailwindPrefix('flex justify-center items-center flex-col relative'), "\n              ").concat(this.bannerConfig.backgroundImage ? "".concat(this.bannerConfig.backgroundColor, " ").concat(this.checkTailwindPrefix('p-6')) : this.checkTailwindPrefix('p-4'), "\">\n              ").concat(this.returnLogo(), "\n              ").concat(this.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat((_this$customStyle15 = this.customStyle) !== null && _this$customStyle15 !== void 0 && _this$customStyle15.closeButton ? this.customStyle.closeButton : this.checkTailwindPrefix('text-white'), " ").concat((_this$customStyle16 = this.customStyle) !== null && _this$customStyle16 !== void 0 && _this$customStyle16.closeButton ? this.customStyle.closeButton : this.checkTailwindPrefix('bg-black dark:bg-white'), "  \n              ").concat(this.checkTailwindPrefix('rounded-full w-6 h-6 self-end absolute -top-5 right-20 transform -translate-y-4 dark:text-black dark:ring-2 dark:ring-gray-800'), "\">\n              &times;</button>") : '', "\n                <div class=\"").concat(this.checkTailwindPrefix('flex items-center space-x-2 mb-4 dark:text-white'), "\">\n                  ").concat(this.returnIcon(), "\n                  <h4 class=\"").concat(this.checkTailwindPrefix('text-xl font-bold'), " ").concat((_this$customStyle$ban2 = (_this$customStyle17 = this.customStyle) === null || _this$customStyle17 === void 0 ? void 0 : _this$customStyle17.bannerTitle) !== null && _this$customStyle$ban2 !== void 0 ? _this$customStyle$ban2 : '', "\">").concat(this.bannerConfig.title, "</h4>\n                </div>\n                <div class=\"").concat((_this$customStyle18 = this.customStyle) !== null && _this$customStyle18 !== void 0 && _this$customStyle18.bannerText ? this.customStyle.bannerText : "".concat(this.checkTailwindPrefix('dark:text-gray-300')), " ").concat(this.checkTailwindPrefix('text-sm text-center'), "\">\n                  <div>").concat(this.bannerText ? this.bannerText : "".concat(this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription), " <br/></div>\n                  <div>").concat((_this$bannerLink = this.bannerLink) !== null && _this$bannerLink !== void 0 ? _this$bannerLink : "<div>".concat(this.locale.bannerLinkDescription, " <a class=\"").concat(this.checkTailwindPrefix('font-bold'), "\" target=\"_blank\" href=\"").concat(this.config.privacyLink, "\"> ").concat((_this$text5 = this.text) !== null && _this$text5 !== void 0 && _this$text5.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel, "</a></div>"), "  </div>\n                </div>\n                <div class=\"").concat(this.checkTailwindPrefix('flex justify-center space-x-2 mt-6'), "\">\n                  <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"yesCookies\" class=\"").concat(this.style.yesCookies2, "\">").concat(this.bannerConfig.shortText ? this.locale.acceptShortText : this.text.acceptText, "</button>\n                  <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"noCookies\" class=\"").concat(this.style.noCookies2, "\">").concat(this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText, "</button>\n                </div>\n                <div class=\"").concat(this.checkTailwindPrefix('mt-2'), "\">").concat(this.managePreferencesLink(), "</div>\n              </div>\n        </div>\n        ");
            document.body.appendChild(this.banner);
            this.makeBannerAnimation();
            if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
              return _this16.closeBannerWithButton();
            });
            this.generateButtons();
            break;

          case "style3":
            this.positions = {
              "top": this.checkTailwindPrefix("justify-top items-center top-0 mt-6"),
              "center": this.checkTailwindPrefix("mx-auto top-1/2 -translate-y-1/2"),
              "bottom": this.checkTailwindPrefix("justify-end items-center bottom-0")
            };
            this.banner = document.createElement("div");
            this.banner.style.display = "none";
            this.banner.innerHTML = "\n        <div id=\"bannerContent\"\n        style=\"".concat(this.bannerConfig.backgroundImage && "background-size:cover; background-image:url(".concat(this.bannerConfig.backgroundImage, ")"), "\"\n        class=\"\n        ").concat(this.positions[this.bannerConfig.position || 'bottom'], "\n        ").concat(this.bannerConfig.backgroundColor, " \n\n        ").concat(this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('p-2') : this.checkTailwindPrefix('p-6'), " \n        ").concat(this.checkTailwindPrefix('fixed shadow-2xl mx-auto md:left-1/2 md:-translate-x-1/2 md:mb-[1.5%]  transition duration-700 ease-in-out z-[999] md:rounded-full'), "\">\n              <div class=\"").concat(this.checkTailwindPrefix('md:grid grid-cols-5 relative justify-between items-center md:space-x-4'), " \n              ").concat(this.bannerConfig.backgroundImage ? "".concat(this.bannerConfig.backgroundColor, " ").concat(this.checkTailwindPrefix('p-6 rounded-full')) : this.checkTailwindPrefix('p-4'), "\">\n                <div class=\"").concat((_this$customStyle19 = this.customStyle) !== null && _this$customStyle19 !== void 0 && _this$customStyle19.bannerText ? this.customStyle.bannerText : "".concat(this.checkTailwindPrefix('dark:text-gray-300')), " \n                  ").concat(this.checkTailwindPrefix('text-xs mt-2 md:mt-0 flex flex-col items-start px-2 col-span-3'), "\">\n                  ").concat(this.returnLogo(), "\n                  <div class=\"").concat(this.checkTailwindPrefix('flex items-center space-x-1 mb-1'), "\">\n                    ").concat(this.returnIcon(), "\n                    <h4 class=\"").concat(this.checkTailwindPrefix('text-xl font-bold leading-tight'), " ").concat((_this$customStyle$ban3 = (_this$customStyle20 = this.customStyle) === null || _this$customStyle20 === void 0 ? void 0 : _this$customStyle20.bannerTitle) !== null && _this$customStyle$ban3 !== void 0 ? _this$customStyle$ban3 : '', "\">").concat(this.bannerConfig.title, "</h4>\n                  </div>\n                  ").concat(this.bannerText ? this.bannerText : "".concat(this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription), " <br/>  \n                  ").concat((_this$bannerLink2 = this.bannerLink) !== null && _this$bannerLink2 !== void 0 ? _this$bannerLink2 : "<div>".concat(this.locale.bannerLinkDescription, " <a class=\"").concat(this.checkTailwindPrefix('font-bold'), "\" target=\"_blank\" href=\"").concat(this.config.privacyLink, "\"> ").concat((_this$text6 = this.text) !== null && _this$text6 !== void 0 && _this$text6.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel, "</a></div>"), "  \n                </div>\n               <div class=\"").concat(this.checkTailwindPrefix('col-span-2 flex items-center justify-center'), "\">\n                  ").concat(this.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat((_this$customStyle21 = this.customStyle) !== null && _this$customStyle21 !== void 0 && _this$customStyle21.customStyle ? this.customStyle.customStyle : this.checkTailwindPrefix('text-white'), " \n                  ").concat((_this$customStyle22 = this.customStyle) !== null && _this$customStyle22 !== void 0 && _this$customStyle22.closeButton ? this.customStyle.closeButton : this.checkTailwindPrefix('bg-black'), " \n                  ").concat(this.checkTailwindPrefix('rounded-full w-6 h-6 self-end absolute -top-4 right-6 transform -translate-y-4'), "\">&times;</button>") : '', "\n               <div class=\"").concat(this.checkTailwindPrefix('flex flex-col mt-4 md:mt-0 '), "\">\n                 <div class=\"").concat(this.checkTailwindPrefix('space-x-3 flex'), "\">\n                   <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"yesCookies\" class=\"").concat(this.style.yesCookies3, "\">").concat(this.bannerConfig.shortText ? this.bannerConfig.shortText : this.text.acceptText, "</button>\n                   <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"noCookies\" class=\"").concat(this.style.noCookies3, "\">").concat(this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText, "</button>\n                 </div>\n                 <div class=\"").concat(this.checkTailwindPrefix('mt-2 flex justify-center'), "\">").concat(this.managePreferencesLink(), "</div>\n               </div>\n               </div>\n              </div>\n        </div>\n        ");
            document.body.appendChild(this.banner);
            this.makeBannerAnimation();
            if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
              return _this16.closeBannerWithButton();
            });
            this.generateButtons();
            break;

          case "style4":
            this.positions = {
              "top": this.checkTailwindPrefix("justify-top items-center p-6"),
              "center": this.checkTailwindPrefix("items-center justify-center"),
              "bottom": this.checkTailwindPrefix("justify-end items-center p-6")
            };
            this.banner = document.createElement("div");
            this.banner.style.display = "none";
            this.banner.innerHTML = "\n          <div id=\"bannerContent\" \n          style=\"background-color: rgba(0,0,0,0.7);\"\n          class=\"".concat(this.positions[this.bannerConfig.position || 'center'], "\n        ").concat(this.checkTailwindPrefix('w-full min-h-screen fixed flex flex-col shadow-2xl top-0 transition duration-700 ease-in-out z-[999]'), "\">\n          ").concat(this.bannerConfig.backgroundImage ? "\n                <div class=\"".concat(this.checkTailwindPrefix('p-2'), "\" style=\"background-size:cover; background-image:url(").concat(this.bannerConfig.backgroundImage, ")\">") : '', "\n                <div class=\"").concat(this.bannerConfig.backgroundColor, "  bg-gray-300 \n                ").concat(this.getMaxWidth('max-w-xl'), "\n                ").concat(this.checkTailwindPrefix('relative  flex flex-col justify-between items-center'), "\">\n                  ").concat(this.bannerConfig.innerBackgroundImage ? "<img class=\"".concat(this.checkTailwindPrefix('md:rounded-t'), "\" src=\"").concat(this.bannerConfig.innerBackgroundImage, "\" />") : '', "\n                  <div class=\"").concat(this.checkTailwindPrefix('flex flex-col justify-start w-full px-6'), " ").concat(this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('pb-6') : this.checkTailwindPrefix('py-6'), " ").concat(this.checkTailwindPrefix('space-x-1"'), ">\n                  ").concat(this.returnLogo(), "\n                  ").concat(this.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat((_this$customStyle23 = this.customStyle) !== null && _this$customStyle23 !== void 0 && _this$customStyle23.closeButton ? this.customStyle.closeButton : this.checkTailwindPrefix('text-white'), " \n                  ").concat((_this$customStyle24 = this.customStyle) !== null && _this$customStyle24 !== void 0 && _this$customStyle24.closeButton ? this.customStyle.closeButton : this.checkTailwindPrefix('bg-black'), " ").concat(this.checkTailwindPrefix('rounded-full w-6 h-6 self-end absolute top-0 right-0 transform -translate-y-4 translate-x-2'), "\">&times;</button>") : '', " \n                    <div class=\"").concat(this.checkTailwindPrefix('flex space-x-2 items-center'), "\">\n                    ").concat(this.returnIcon(), "\n                    <h4 class=\"").concat((_this$customStyle$ban4 = (_this$customStyle25 = this.customStyle) === null || _this$customStyle25 === void 0 ? void 0 : _this$customStyle25.bannerTitle) !== null && _this$customStyle$ban4 !== void 0 ? _this$customStyle$ban4 : this.checkTailwindPrefix('text-2xl font-bold dark:text-white'), "\">").concat(this.bannerConfig.title, "</h4>\n                    </div>\n                  </div>\n                  <div class=\"").concat((_this$customStyle26 = this.customStyle) !== null && _this$customStyle26 !== void 0 && _this$customStyle26.bannerText ? this.customStyle.bannerText : "".concat(this.checkTailwindPrefix('dark:text-gray-300')), " ").concat(this.checkTailwindPrefix('flex flex-col text-sm px-6 pb-6'), "\">\n                    ").concat(this.bannerText ? this.bannerText : "".concat(this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription), " <br/>  \n                    ").concat(this.bannerLink ? this.bannerLink : "".concat(this.locale.bannerLinkDescription, " <a class=\"").concat(this.checkTailwindPrefix('font-bold'), "\" target=\"_blank\" href=\"").concat(this.config.privacyLink, "\"> ").concat((_this$text7 = this.text) !== null && _this$text7 !== void 0 && _this$text7.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel, "</a>"), "  \n                  </div>  \n                  <div class=\"").concat(this.checkTailwindPrefix('grid grid-cols-2 bg-black w-full divide-x divide-gray-300 dark:divide-gray-700'), "\">\n                  <div class=\"").concat(this.checkTailwindPrefix('group'), "\">\n                      <div class=\"").concat((_this$customStyle27 = this.customStyle) !== null && _this$customStyle27 !== void 0 && _this$customStyle27.accept ? this.customStyle.accept : this.checkTailwindPrefix('bg-gray-300 dark:bg-gray-800'), " \n                        ").concat(this.checkTailwindPrefix('py-4 flex items-center justify-center transition duration-500 group-hover:scale-110 relative hover:z-10'), "\" style=\"box-shadow: 0px 14px 20px 20px rgba(0, 0, 0, 10%);\">\n                        <button type=\"button\" role=\"button\" tabindex=\"0\" id=\"yesCookies\" class=\"").concat(this.style.yesCookies4, " group-hover:text-green-800 transition duration-500\">\n                          ").concat(this.bannerConfig.shortText ? this.bannerConfig.shortText : this.text.acceptText, "    \n                        </button>\n                      </div>\n                    </div>\n                    <div class=\"").concat(this.checkTailwindPrefix('group'), "\">\n                      <div class=\"").concat((_this$customStyle28 = this.customStyle) !== null && _this$customStyle28 !== void 0 && _this$customStyle28.reject ? this.customStyle.reject : this.checkTailwindPrefix('bg-gray-300 dark:bg-gray-800'), "\n                        ").concat(this.checkTailwindPrefix('py-4 flex items-center justify-center  transition duration-500 hover:scale-110 relative hover:z-10'), "\" style=\"box-shadow: 0px 14px 20px 5px rgb(0, 0, 0, 10%);\">\n                        <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"noCookies\" class=\"").concat(this.style.noCookies4, " group-hover:text-red-800 transition duration-500\">\n                          ").concat(this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText, "    \n                        </button>\n                      </div>\n                    </div> \n                  </div>\n                  <div class=\"").concat(this.checkTailwindPrefix('bg-gradient-to-r from-gray-300 dark:from-gray-600 to-gray-400 dark:to-gray-800 w-full flex justify-center py-2'), "\">\n                    ").concat(this.managePreferencesLink(this.checkTailwindPrefix('text-white')), "\n                  </div>\n                </div>\n                ").concat(this.bannerConfig.backgroundImage ? "</div>" : '', "\n          </div>\n          ");
            document.body.appendChild(this.banner);
            if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
              return _this16.closeBannerWithButton();
            });
            this.generateButtons();
            break;

          case "style5":
            this.positions = {
              "top": this.checkTailwindPrefix("top-0"),
              "center": this.checkTailwindPrefix("mx-auto top-1/2 -translate-y-1/2"),
              "bottom": this.checkTailwindPrefix("bottom-0")
            };
            this.banner = document.createElement("div");
            this.banner.style.display = "none";
            this.banner.innerHTML = "<div style=\"".concat(this.bannerConfig.backgroundImage && "background-size:cover; background-image:url(".concat(this.bannerConfig.backgroundImage, ")"), "\"\n          id=\"bannerContent\" class=\"\n          ").concat(this.positions[this.bannerConfig.position || 'bottom'], "\n          ").concat(this.bannerConfig.backgroundColor, "\n          ").concat(this.bannerConfig.innerBackgroundImage ? "".concat(this.checkTailwindPrefix("grid grid-cols-5"), "  ").concat(this.bannerConfig.backgroundImage ? '' : this.checkTailwindPrefix('gap-6')) : this.checkTailwindPrefix('flex flex-col'), "\n          ").concat(this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('p-2') : this.checkTailwindPrefix('px-6 items-start justify-center py-8'), " \n          ").concat(this.checkTailwindPrefix('sm:w-full md:w-full w-full fixed shadow-2xl  transition duration-700 ease-in-out dark:bg-gray-800 z-[999]'), "\">\n          ").concat(this.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat((_this$customStyle29 = this.customStyle) !== null && _this$customStyle29 !== void 0 && _this$customStyle29.closeButton ? this.customStyle.closeButton : this.checkTailwindPrefix('text-black dark:text-white'), " \n          ").concat((_this$customStyle30 = this.customStyle) !== null && _this$customStyle30 !== void 0 && _this$customStyle30.closeButton ? this.customStyle.closeButton : '', " ").concat(this.checkTailwindPrefix('rounded-full text-2xl self-end'), "\">&times;</button>") : '', "\n          ").concat(this.bannerConfig.innerBackgroundImage ? "<img class=\"".concat(this.checkTailwindPrefix('md:rounded-t col-span-1'), "\" src=\"").concat(this.bannerConfig.innerBackgroundImage, "\" />") : '', "\n              <div class=\"\n              ").concat(this.bannerConfig.backgroundImage ? "".concat(this.bannerConfig.backgroundColor, " ").concat(this.checkTailwindPrefix('w-full p-4')) : '', " \n              ").concat(this.bannerConfig.innerBackgroundImage && this.checkTailwindPrefix('col-span-4'), "\n              ").concat(this.checkTailwindPrefix('flex flex-col items-start space-y-3'), "\">                  \n                  <div>\n                    <div class=\"").concat(this.checkTailwindPrefix('flex flex-col items-start space-x-1 w-full'), "\">\n                        ").concat(this.returnLogo(), "\n                      <div class=\"").concat(this.checkTailwindPrefix('flex space-x-2 items-center'), "\"> \n                        ").concat(this.returnIcon(), "\n                        <h4 class=\"").concat((_this$customStyle$ban5 = (_this$customStyle31 = this.customStyle) === null || _this$customStyle31 === void 0 ? void 0 : _this$customStyle31.bannerTitle) !== null && _this$customStyle$ban5 !== void 0 ? _this$customStyle$ban5 : this.checkTailwindPrefix('text-2xl font-semibold dark:text-white'), "\">").concat(this.bannerConfig.title, "</h4>   \n                      </div>                  \n                    </div>\n                    <div class=\"").concat((_this$customStyle32 = this.customStyle) !== null && _this$customStyle32 !== void 0 && _this$customStyle32.bannerText ? this.customStyle.bannerText : "".concat(this.checkTailwindPrefix('dark:text-gray-300')), "\">\n                      ").concat(this.bannerText ? this.bannerText : "".concat(this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription), "<br/>  \n                      ").concat(this.bannerLink ? this.bannerLink : "".concat(this.locale.bannerLinkDescription, " \n                      <a class=\"").concat(this.checkTailwindPrefix('font-bold'), "\" target=\"_blank\" href=\"").concat(this.config.privacyLink, "\"> ").concat((_this$text8 = this.text) !== null && _this$text8 !== void 0 && _this$text8.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel, "</a>."), "  \n                    </div>\n                  </div>                                                      \n                  <div class=\"").concat(this.checkTailwindPrefix('flex w-full space-x-2'), "\">\n                    <div class=\"").concat((_this$customStyle33 = this.customStyle) !== null && _this$customStyle33 !== void 0 && _this$customStyle33.accept ? this.customStyle.accept : this.checkTailwindPrefix('bg-black dark:bg-gray-600'), " \n                      ").concat(this.checkTailwindPrefix('py-2 rounded-full flex items-center justify-center shadow-2xl'), "\">\n                      <button type=\"button\" role=\"button\" tabindex=\"0\" id=\"yesCookies\" class=\"").concat(this.style.yesCookies5, "\">\n                        ").concat(this.bannerConfig.shortText ? this.locale.acceptShortText : this.text.acceptText, "    \n                      </button>\n                    </div>\n                    <div class=\"").concat((_this$customStyle34 = this.customStyle) !== null && _this$customStyle34 !== void 0 && _this$customStyle34.reject ? this.customStyle.reject : this.checkTailwindPrefix('dark:bg-gray-600'), " \n                    ").concat(this.checkTailwindPrefix('py-2 border dark:border-0 border-red-200 rounded-full flex items-center justify-center shadow-2xl'), "\">\n                      <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"noCookies\" class=\"").concat(this.style.noCookies5, "\"> ").concat(this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText, " </button>\n                    </div>\n                  </div>\n                  ").concat(this.managePreferencesLink(), "\n                </div>\n          </div>\n          ");
            document.body.appendChild(this.banner);
            this.makeBannerAnimation();
            if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
              return _this16.closeBannerWithButton();
            });
            this.generateButtons();
            break;

          case "style6":
            this.positions = {
              "center": this.checkTailwindPrefix("items-center justify-center"),
              "bottom": this.checkTailwindPrefix("justify-end items-center"),
              "top": this.checkTailwindPrefix("justify-top items-center")
            };
            this.banner = document.createElement("div");
            this.banner.style.display = "none";
            this.banner.innerHTML = "\n        <div \n        id=\"bannerContent\" class=\"\n        ".concat(this.positions[(_this$bannerConfig$po = this.bannerConfig.position) !== null && _this$bannerConfig$po !== void 0 ? _this$bannerConfig$po : 'center'], "\n        ").concat(this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('p-2') : this.checkTailwindPrefix('p-6'), "\n      ").concat(this.checkTailwindPrefix('bg-black bg-opacity-70 w-full min-h-screen fixed flex flex-col top-0 shadow-2xl mx-auto transition duration-700 ease-in-out z-[999]'), "\">\n        ").concat(this.bannerConfig.backgroundImage ? "\n              <div class=\"".concat(this.checkTailwindPrefix('p-2'), " ").concat(this.checkTailwindPrefix('md:rounded-xl'), "\" \n              style=\"background-size:cover; background-image:url(").concat(this.bannerConfig.backgroundImage, ")\">") : '', "\n              ").concat(this.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat(this.checkTailwindPrefix('rounded-full w-6 h-6 self-end absolute top-4 right-6'), " ").concat((_this$customStyle35 = this.customStyle) !== null && _this$customStyle35 !== void 0 && _this$customStyle35.closeButton ? this.customStyle.closeButton : this.checkTailwindPrefix('text-white'), "\">&times;</button>") : '', " \n              <div class=\"").concat(this.bannerConfig.backgroundColor, " \n              ").concat(this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('pb-4') : this.checkTailwindPrefix('py-4'), "\n              ").concat(this.getMaxWidth('max-w-xl'), "\n              ").concat(this.checkTailwindPrefix('flex flex-col justify-between items-center md:rounded-xl'), "\">\n                ").concat(this.bannerConfig.innerBackgroundImage ? "<img class=\"".concat(this.checkTailwindPrefix('md:rounded-t'), "\" src=\"").concat(this.bannerConfig.innerBackgroundImage, "\" />") : '', "\n                <div class=\"").concat(this.checkTailwindPrefix('flex flex-col items-center mt-4'), "\">\n                  ").concat(this.returnLogo(), "\n                  <div class=\"").concat(this.checkTailwindPrefix('flex space-x-2 items-center'), "\">\n                    ").concat(this.returnIcon(), "\n                    <h4 class=\"").concat((_this$customStyle$ban6 = (_this$customStyle36 = this.customStyle) === null || _this$customStyle36 === void 0 ? void 0 : _this$customStyle36.bannerTitle) !== null && _this$customStyle$ban6 !== void 0 ? _this$customStyle$ban6 : this.checkTailwindPrefix('text-3xl font-bold dark:text-white'), "\">").concat(this.bannerConfig.title, "</h4>\n                  </div>\n                </div>                            \n                <div class=\"").concat((_this$customStyle37 = this.customStyle) !== null && _this$customStyle37 !== void 0 && _this$customStyle37.bannerText ? this.customStyle.bannerText : "".concat(this.checkTailwindPrefix('dark:text-gray-300')), " \n                ").concat(this.checkTailwindPrefix('flex flex-col text-xs px-12 text-center mt-2'), "\">\n                  ").concat(this.bannerText ? this.bannerText : "".concat(this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription), " <br/>  \n                  ").concat((_this$bannerLink3 = this.bannerLink) !== null && _this$bannerLink3 !== void 0 ? _this$bannerLink3 : "<div>".concat(this.locale.bannerLinkDescription, " <a class=\"jgc-font-bold\" target=\"_blank\" href=\"").concat(this.config.privacyLink, "\"> ").concat((_this$text9 = this.text) !== null && _this$text9 !== void 0 && _this$text9.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel, "</a></div>"), "  \n                </div>\n                <div id=\"bannerButtons\" class=\"").concat(this.checkTailwindPrefix('flex flex-col items-center space-y-2 tracking-tighter mt-4 mb-2'), "\">\n                  <div class=\"").concat((_this$customStyle38 = this.customStyle) !== null && _this$customStyle38 !== void 0 && _this$customStyle38.accept ? this.customStyle.accept : this.checkTailwindPrefix('bg-black dark:bg-gray-900'), " ").concat(this.checkTailwindPrefix('rounded-full'), "\">\n                    <button type=\"button\" role=\"button\" tabindex=\"0\" id=\"yesCookies\" class=\"").concat(this.style.yesCookies6, "\">").concat(this.bannerConfig.shortText ? this.locale.acceptShortText : this.text.acceptText, "</button>\n                  </div>\n                </div>\n              </div>\n              ").concat(this.bannerConfig.backgroundImage ? "</div>" : '', "\n              <div class=\"").concat(this.checkTailwindPrefix('mt-2'), "\">").concat(this.managePreferencesLink(this.checkTailwindPrefix('text-white underline')), "</div>\n        </div>\n        ");
            document.body.appendChild(this.banner);
            if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
              return _this16.closeBannerWithButton();
            });
            document.getElementById('yesCookies').addEventListener('click', function () {
              return _this16.yesCookies();
            });
            this.addEnterAction('yesCookies');
            this.managePreferencesLinkListener();
            break;

          case "style7":
            this.positions = {
              "top": this.checkTailwindPrefix("justify-top items-start top-0"),
              "center": this.checkTailwindPrefix("mx-auto top-1/2 -translate-y-1/2"),
              "bottom": this.checkTailwindPrefix("justify-end items-end bottom-0")
            };
            this.banner = document.createElement("div");
            this.banner.style.display = "none";
            this.banner.innerHTML = "\n        <div id=\"bannerContent\" style=\"".concat(this.bannerConfig.backgroundImage ? "background-size:cover; background-image:url(".concat(this.bannerConfig.backgroundImage, ")") : '', "\" \n              class=\"\n              ").concat(this.positions[this.bannerConfig.position || 'bottom'], "\n              ").concat(this.bannerConfig.backgroundColor, " \n              ").concat(this.bannerConfig.backgroundImage ? "".concat(this.bannerConfig.backgroundColor, " ").concat(this.checkTailwindPrefix('p-2')) : "".concat(this.bannerConfig.innerBackgroundImage ? '' : this.checkTailwindPrefix('p-6')), "\n              ").concat(this.getMaxWidth('max-w-xl'), "\n              ").concat(this.checkTailwindPrefix('translate-y-full origin-bottom fixed bg-opacity-95 right-0 shadow-2xl md:flex md:flex-col md:space-x-1  transition duration-700 ease-in-out z-[999] rounded'), "\">\n              ").concat(this.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat((_this$customStyle39 = this.customStyle) === null || _this$customStyle39 === void 0 ? void 0 : _this$customStyle39.closeButton, "  \n              ").concat(this.checkTailwindPrefix('text-sm bg-gray-800 px-3 py-0.5 rounded-tr-lg rounded-tl-lg  border-t-rounded text-white self-end absolute -top-[8px] right-2 transform -translate-y-4'), "\">\n              &times;</button>") : '', "\n              <div class=\"").concat(this.checkTailwindPrefix('space-y-6 flex flex-col'), "\n                ").concat(this.bannerConfig.backgroundImage && !this.bannerConfig.innerBackgroundImage ? "".concat((_this$bannerConfig$ba3 = this.bannerConfig.backgroundColor) !== null && _this$bannerConfig$ba3 !== void 0 ? _this$bannerConfig$ba3 : '', " ").concat(this.checkTailwindPrefix('p-4')) : '', "\n                ").concat(this.bannerConfig.innerBackgroundImage && !this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('pb-8') : '', "\n                ").concat(this.bannerConfig.innerBackgroundImage && this.bannerConfig.backgroundImage ? "".concat(this.checkTailwindPrefix('pb-8'), " ").concat((_this$bannerConfig$ba4 = this.bannerConfig.backgroundColor) !== null && _this$bannerConfig$ba4 !== void 0 ? _this$bannerConfig$ba4 : '') : '', "\n                \">\n                ").concat(this.bannerConfig.innerBackgroundImage ? "<img class=\"".concat(this.checkTailwindPrefix('md:rounded-t'), "\" src=\"").concat(this.bannerConfig.innerBackgroundImage, "\" />") : '', "\n                ").concat(this.bannerConfig.logo ? "<img class=\"".concat(this.bannerConfig.logoClasses ? this.bannerConfig.logoClasses : '', "\" src=\"").concat(this.bannerConfig.logo, "\" />") : '', " \n                <div class=\"").concat(this.checkTailwindPrefix('flex items-center space-x-2'), " ").concat(this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('px-6') : '', "\">\n                    ").concat(this.returnIcon(), "\n                    <h4 class=\"").concat((_this$customStyle$ban7 = (_this$customStyle40 = this.customStyle) === null || _this$customStyle40 === void 0 ? void 0 : _this$customStyle40.bannerTitle) !== null && _this$customStyle$ban7 !== void 0 ? _this$customStyle$ban7 : this.checkTailwindPrefix('text-xl font-bold dark:text-white'), "\">").concat(this.bannerConfig.title, "</h4>\n                </div>\n                <div class=\"").concat((_this$customStyle41 = this.customStyle) !== null && _this$customStyle41 !== void 0 && _this$customStyle41.bannerText ? this.customStyle.bannerText : this.checkTailwindPrefix('dark:text-white'), " ").concat(this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('px-6') : '', "\">\n                  <div>").concat(this.bannerText ? this.bannerText : "".concat(this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription), " <br/></div>\n                  <div>").concat(this.bannerLink ? this.bannerLink : "".concat(this.locale.bannerLinkDescription, " <a class=\"").concat(this.checkTailwindPrefix('font-bold'), "\" target=\"_blank\" href=\"").concat(this.config.privacyLink, "\"> ").concat((_this$text10 = this.text) !== null && _this$text10 !== void 0 && _this$text10.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel, "</a>"), "</div>\n                </div>\n                <div class=\"").concat(this.checkTailwindPrefix('flex justify-start w-full'), " ").concat(this.bannerConfig.innerBackgroundImage && this.checkTailwindPrefix('px-6'), "\">\n                  <div class=\"").concat(this.checkTailwindPrefix('space-x-2 w-full flex'), "\">\n                      <button type=\"button\" role=\"button\" tabindex=\"0\" id=\"yesCookies\" class=\"").concat(this.style.yesCookies7, " ").concat(this.checkTailwindPrefix('group flex items-center'), "\">\n                        <div class=\"").concat(this.checkTailwindPrefix('w-3 h-3 rounded-full border border-sky-800 dark:border-green-800 mr-1 group-hover:bg-sky-800 dark:group-hover:bg-green-800 transition duration-300'), "\"></div>\n                        <div class=\"").concat((_this$customStyle42 = this.customStyle) !== null && _this$customStyle42 !== void 0 && _this$customStyle42.accept ? this.customStyle.accept : this.checkTailwindPrefix('group-hover:text-sky-800 dark:group-hover:text-green-200'), "\">").concat(this.bannerConfig.shortText ? this.locale.acceptShortText : this.text.acceptText, "</div>\n                      </button>\n                      <button type=\"button\" role=\"button\" tabindex=\"0\" id=\"noCookies\" class=\"").concat(this.style.noCookies7, " ").concat(this.checkTailwindPrefix('group flex items-center'), "\">\n                        <div class=\"").concat(this.checkTailwindPrefix('w-3 h-3 rounded-full border border-sky-800 dark:border-red-800 mr-1 group-hover:bg-sky-800 dark:group-hover:bg-red-800 transition duration-300'), "\"></div>\n                          <div class=\"").concat((_this$customStyle43 = this.customStyle) !== null && _this$customStyle43 !== void 0 && _this$customStyle43.reject ? this.customStyle.reject : this.checkTailwindPrefix('group-hover:text-sky-800 dark:group-hover:text-red-200'), "\">").concat(this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText, "</div>\n                        </button>\n                      </div>\n                      <div class=\"").concat(this.checkTailwindPrefix('ml-auto w-full text-right'), "\">").concat(this.managePreferencesLink(), "</div>\n                  </div>\n              </div>\n          </div>\n          ");
            document.body.appendChild(this.banner);
            this.makeBannerAnimation();
            if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
              return _this16.closeBannerWithButton();
            });
            this.generateButtons();
            break;

          case "style8":
            var cookieExists = this.getCookie('JgcPreferences');
            this.positions = {
              "top": this.checkTailwindPrefix("top-0"),
              "center": this.checkTailwindPrefix("mx-auto top-1/2 -translate-y-1/2"),
              "bottom": this.checkTailwindPrefix("bottom-0")
            };
            this.banner = document.createElement("div");
            this.banner.style.display = "none";
            this.banner.innerHTML = "<div style=\"".concat(this.bannerConfig.backgroundImage && "background-size:cover; background-image:url(".concat(this.bannerConfig.backgroundImage, ")"), "\"\n          id=\"bannerContent\" class=\"\n          ").concat(this.positions[this.bannerConfig.position || 'bottom'], "\n          ").concat(this.bannerConfig.backgroundColor, "\n          ").concat(this.bannerConfig.innerBackgroundImage ? "".concat(this.checkTailwindPrefix("grid grid-cols-5"), "  ").concat(this.bannerConfig.backgroundImage ? '' : this.checkTailwindPrefix('gap-6')) : this.checkTailwindPrefix('flex flex-col'), "\n          ").concat(this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('p-2') : this.checkTailwindPrefix('px-6 items-start justify-center'), " \n          ").concat(this.checkTailwindPrefix('sm:w-full md:w-full w-full fixed shadow-2xl transition duration-700 ease-in-out dark:bg-gray-800 z-[999] py-4'), "\">\n          ").concat(this.bannerConfig.innerBackgroundImage ? "<img class=\"".concat(this.checkTailwindPrefix('md:rounded-t col-span-1'), "\" src=\"").concat(this.bannerConfig.innerBackgroundImage, "\" />") : '', "\n              <div class=\"\n              ").concat(this.bannerConfig.backgroundImage ? "".concat(this.bannerConfig.backgroundColor, " ").concat(this.checkTailwindPrefix('w-full p-4')) : '', " \n              ").concat(this.bannerConfig.innerBackgroundImage && this.checkTailwindPrefix('col-span-4'), "\n              ").concat(this.checkTailwindPrefix('flex flex-col items-start space-y-3 w-full'), "\">                  \n                  <div class=\"").concat(this.checkTailwindPrefix('w-full'), "\">\n                    <div class=\"").concat(this.checkTailwindPrefix('flex items-center w-full mb-3'), "\" >\n                      <div class=\"").concat(this.checkTailwindPrefix('flex flex-col items-start space-x-1'), " ").concat(this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('px-6') : '', "\">\n                        ").concat(this.returnLogo(), "\n                        <div class=\"").concat(this.checkTailwindPrefix('flex items-center space-x-2'), "\">\n                          ").concat(this.returnIcon(), "\n                          <h4 class=\"").concat((_this$customStyle$ban8 = (_this$customStyle44 = this.customStyle) === null || _this$customStyle44 === void 0 ? void 0 : _this$customStyle44.bannerTitle) !== null && _this$customStyle$ban8 !== void 0 ? _this$customStyle$ban8 : this.checkTailwindPrefix('text-xl font-bold dark:text-white'), "\">").concat(this.bannerConfig.title, "</h4>\n                        </div>\n                      </div>  \n                      ").concat(this.bannerConfig.closeButton ? "<button id=\"jgc-close-button\" class=\"".concat((_this$customStyle45 = this.customStyle) === null || _this$customStyle45 === void 0 ? void 0 : _this$customStyle45.closeButton, "  ").concat(this.checkTailwindPrefix('ml-auto'), "\">&times;</button>") : '', "\n                    </div>\n                    <div class=\"").concat((_this$customStyle46 = this.customStyle) !== null && _this$customStyle46 !== void 0 && _this$customStyle46.bannerText ? this.customStyle.bannerText : "".concat(this.checkTailwindPrefix('dark:text-gray-300')), " ").concat(this.checkTailwindPrefix('mb-4 leading-relaxed'), "\">\n                      ").concat(this.bannerText ? this.bannerText : "".concat(this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription), " <br/>  \n                      ").concat(this.bannerLink ? this.bannerLink : "".concat(this.locale.bannerLinkDescription, " \n                      <a class=\"").concat(this.checkTailwindPrefix('font-bold'), "\" target=\"_blank\" href=\"").concat(this.config.privacyLink, "\"> ").concat((_this$text11 = this.text) !== null && _this$text11 !== void 0 && _this$text11.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel, "</a>."), "  \n                    </div>\n                  </div>    \n                  <div class=\"").concat(this.checkTailwindPrefix('flex w-full space-x-2'), "\">\n                     <div class=\"").concat(this.checkTailwindPrefix('group'), "\">\n                      <div class=\"").concat((_this$customStyle47 = this.customStyle) !== null && _this$customStyle47 !== void 0 && _this$customStyle47.accept ? this.customStyle.accept : '', " \n                        ").concat(this.checkTailwindPrefix('py-2 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ease-linear'), "\">\n                        <button role=\"button\" tabindex=\"0\" type=\"button\" id=\"yesCookies\" class=\"").concat(this.style.yesCookies8, "\">").concat(this.bannerConfig.shortText ? this.locale.acceptShortText : this.text.acceptText, " </button>\n                      </div>\n                    </div>\n                    <div class=\"").concat(this.checkTailwindPrefix('group'), "\">\n                      <div class=\"").concat((_this$customStyle48 = this.customStyle) !== null && _this$customStyle48 !== void 0 && _this$customStyle48.accept ? this.customStyle.accept : '', " \n                        ").concat(this.checkTailwindPrefix('py-2 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ease-linear'), "\">\n                        <button type=\"button\" id=\"acceptSelected\" class=\"").concat(this.style.selectedCookies8, "\">").concat(this.bannerConfig.shortText ? this.locale.acceptSelectedShortText : this.text.acceptSelectedText, " </button>\n                      </div>\n                    </div>\n                    <div class=\"").concat(this.checkTailwindPrefix('group'), "\">\n                      <div class=\"").concat((_this$customStyle49 = this.customStyle) !== null && _this$customStyle49 !== void 0 && _this$customStyle49.reject ? this.customStyle.reject : this.checkTailwindPrefix(''), " ").concat(this.checkTailwindPrefix('py-2 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ease-linear'), "\">\n                      <button type=\"button\" id=\"noCookies\" class=\"").concat(this.style.noCookies8, "\"> ").concat(this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText, " </button>\n                      </div>\n                    </div>\n                  </div>\n                  <br/>\n                  <div class=\"").concat(this.checkTailwindPrefix('md:grid border-t hidden'), " \n                    ").concat(cookieExists['enable'].length == 1 ? "".concat(this.checkTailwindPrefix('md:grid-cols-1')) : '', "\n                    ").concat(cookieExists['enable'].length == 2 ? "".concat(this.checkTailwindPrefix('md:grid-cols-2')) : '', "\n                    ").concat(cookieExists['enable'].length == 3 ? "".concat(this.checkTailwindPrefix('md:grid-cols-3')) : '', "\n                    ").concat(cookieExists['enable'].length >= 4 ? "".concat(this.checkTailwindPrefix('md:grid-cols-4')) : '', "\n                    \">\n                    ").concat(this.generateOptions(), "\n                  </div>\n                  <div class=\"").concat(this.checkTailwindPrefix('block w-full border-t md:hidden'), " \">").concat(this.managePreferencesLink(), "</div>\n                </div>\n          </div>\n          ");
            document.body.appendChild(this.banner);
            this.makeBannerAnimation();
            if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', function () {
              return _this16.closeBannerWithButton();
            });
            this.generateButtons();
            document.getElementById('acceptSelected').addEventListener('click', function () {
              return _this16.closePreferencePanel();
            }); // Close

            break;

          case "style9":
            if (!this.bannerConfig.shortText) {
              throw "You need to turn on the 'shortText' property in order to use style 9 correctly.";
            }

            this.positions = {
              "top": this.checkTailwindPrefix("justify-top top-4"),
              "bottom": this.checkTailwindPrefix("justify-end bottom-0")
            };
            this.banner = document.createElement("div");
            this.banner.style.display = "none";
            this.banner.innerHTML = "<div id=\"bannerContent\" style=\"".concat(this.bannerConfig.backgroundImage ? "background-size:cover; background-image:url(".concat(this.bannerConfig.backgroundImage, ")") : '', "\" \n                  class=\" ").concat(this.positions[this.bannerConfig.position || 'bottom'], "\n                  ").concat(this.bannerConfig.backgroundColor, " \n                  ").concat(this.bannerConfig.backgroundImage ? "".concat(this.bannerConfig.backgroundColor, " ").concat(this.checkTailwindPrefix('p-2')) : "".concat(this.bannerConfig.innerBackgroundImage ? '' : this.checkTailwindPrefix('px-6 py-2')), "\n                  ").concat(this.checkTailwindPrefix('fixed right-0 shadow-2xl md:flex md:flex-col md:space-x-1 md:mr-[4%] mb-10 transition duration-700 ease-in-out rounded-full z-[999]'), "\">\n                  <div class=\"").concat(this.checkTailwindPrefix('flex items-center space-x-2'), "\n                    ").concat(this.bannerConfig.backgroundImage && !this.bannerConfig.innerBackgroundImage ? "".concat((_this$bannerConfig$ba5 = this.bannerConfig.backgroundColor) !== null && _this$bannerConfig$ba5 !== void 0 ? _this$bannerConfig$ba5 : '', "  ").concat(this.checkTailwindPrefix('p-4')) : '', "\n                    ").concat(this.bannerConfig.innerBackgroundImage && !this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('pb-8') : '', "\n                    ").concat(this.bannerConfig.innerBackgroundImage && this.bannerConfig.backgroundImage ? "".concat(this.checkTailwindPrefix('pb-8'), " ").concat((_this$bannerConfig$ba6 = this.bannerConfig.backgroundColor) !== null && _this$bannerConfig$ba6 !== void 0 ? _this$bannerConfig$ba6 : '') : '', "\n                    \">\n                    ").concat(this.bannerConfig.innerBackgroundImage ? "<img class=\"".concat(this.checkTailwindPrefix('md:rounded-t'), "\" src=\"").concat(this.bannerConfig.innerBackgroundImage, "\" />") : '', "\n                    ").concat(this.bannerConfig.logo ? "<img class=\"".concat(this.bannerConfig.logoClasses ? this.bannerConfig.logoClasses : '', "\" src=\"").concat(this.bannerConfig.logo, "\" />") : '', " \n                    <div class=\"").concat(this.checkTailwindPrefix('col-span-3 flex space-x-2'), "\n                      ").concat((_this$customStyle50 = this.customStyle) !== null && _this$customStyle50 !== void 0 && _this$customStyle50.bannerText ? this.customStyle.bannerText : this.checkTailwindPrefix('dark:text-white'), " ").concat(this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('px-6') : '', "\">\n                      <div>").concat(this.bannerText ? this.bannerText : "".concat(this.text.descriptionText ? this.text.descriptionText : "".concat(this.bannerConfig.shortText ? this.locale.bannerShortDescription : this.locale.bannerDescription)), "</div>  \n                      <div><a class=\"").concat(this.checkTailwindPrefix('font-bold underline'), "\" target=\"_blank\" href=\"").concat(this.config.privacyLink, "\"> Read more </a></div>\n                    </div>\n                    <div class=\"").concat(this.checkTailwindPrefix('space-x-1 col-span-1'), " ").concat(this.bannerConfig.innerBackgroundImage && this.checkTailwindPrefix('px-6'), "\">\n                      <button type=\"button\" role=\"button\" tabindex=\"0\" id=\"yesCookies\" class=\"").concat(this.style.yesCookies9, "\">").concat(this.bannerConfig.shortText ? this.locale.acceptShortText : this.text.acceptText, "</button>\n                      <button type=\"button\" role=\"button\" tabindex=\"0\" id=\"noCookies\" class=\"").concat(this.style.noCookies9, "\">").concat(this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText, "</button>\n                    </div>\n                  </div>\n            </div>\n            ");
            document.body.appendChild(this.banner);
            this.makeBannerAnimation();
            document.getElementById('yesCookies').addEventListener('click', function () {
              return _this16.yesCookies();
            });
            document.getElementById('noCookies').addEventListener('click', function () {
              return _this16.noCookies();
            });
            this.addEnterAction('yesCookies');
            this.addEnterAction('noCookies');
            break;
        }
      }
      /**
      * Check if a prefix for Tailwind has been chosen and updates all class names
      */

    }, {
      key: "checkTailwindPrefix",
      value: function checkTailwindPrefix(value) {
        var _this17 = this;

        var colon = /:/;

        if (this.checkTailwindPrefix) {
          if (/\s/.test(value)) {
            var splitWords = value.split(/[ ,]+/);

            var arr = _toConsumableArray(splitWords);

            return arr.map(function (el) {
              if (colon.test(el)) {
                var prefix = el.split(':')[0];
                var newstr = "";

                if (el.includes('dark:group-hover')) {
                  var prefix2 = el.split(':')[1];
                  newstr = el.replace(prefix + ':' + prefix2 + ':', "".concat(prefix, ":").concat(prefix2, ":").concat(_this17.tailwindPrefix));
                } else {
                  newstr = el.replace(prefix + ':', "".concat(prefix, ":").concat(_this17.tailwindPrefix));
                }

                return newstr;
              } else {
                return _this17.tailwindPrefix + el;
              }
            }).join(' ');
          } else {
            if (colon.test(value)) {
              var prefix = value.split(':')[0];
              var newstr = "";

              if (value.includes('dark:group-hover')) {
                var prefix2 = el.split(':')[1];
                newstr = value.replace(prefix + ':' + prefix2 + ':', "".concat(prefix, ":").concat(prefix2, ":").concat(this.tailwindPrefix));
              } else {
                newstr = value.replace(prefix + ':', "".concat(prefix, ":").concat(this.tailwindPrefix));
              }

              return newstr;
            } else {
              return this.tailwindPrefix + value;
            }
          }
        }
      }
      /**
      * Check if the dark mode should be activated.
      */

    }, {
      key: "checkDarkMode",
      value: function checkDarkMode() {
        var htmlClass = document.querySelector('html').classList.contains(this.checkTailwindPrefix('dark'));
        if (htmlClass) this.darkMode = true;
      }
      /**
      * Shows an image as a placeholder, if it exists
      */

    }, {
      key: "returnPlaceholderImg",
      value: function returnPlaceholderImg(element) {
        var _this$placeholder;

        var checkIfImgPlaceholderExist = element.getAttribute('data-jgc-placeholder-img');

        if ((checkIfImgPlaceholderExist === null || checkIfImgPlaceholderExist === void 0 ? void 0 : checkIfImgPlaceholderExist.length) > 0 && checkIfImgPlaceholderExist != 'disable') {
          return checkIfImgPlaceholderExist;
        }

        if ((_this$placeholder = this.placeholder) !== null && _this$placeholder !== void 0 && _this$placeholder.image && !checkIfImgPlaceholderExist) {
          return this.placeholder.image;
        }

        if (checkIfImgPlaceholderExist && checkIfImgPlaceholderExist == 'disable') {
          return;
        }
      }
      /**
      * Calculate the dimensions of an iFrame (in px, in percentage or from the style attribute).
      */

    }, {
      key: "returnIframeSize",
      value: function returnIframeSize(element, prop) {
        if (element.getAttribute(prop)) {
          var checkWidthPercentage = element.getAttribute(prop).indexOf("%") > -1;
          var checkWidthPx = element.getAttribute(prop).indexOf("px") > -1;

          if (checkWidthPercentage || checkWidthPx) {
            return element.getAttribute(prop);
          } else {
            return element.getAttribute(prop) + 'px';
          }
        } else {
          var style = element.getAttribute('style');
          var getProps = style.replace(/\s/g, '').replace(/^.*{([^}]+)}.*/, '$1').match(/([^;]+)/g);
          var returnValue = '';
          getProps.forEach(function (element) {
            if (element.includes(prop)) {
              returnValue = element.split(":").pop();
            }
          });
          return returnValue;
        }
      }
      /**
      * Make a placeholder over the blocked iframes
      */

    }, {
      key: "generateIframeDivs",
      value: function generateIframeDivs(element) {
        var _this$placeholder2,
            _this$placeholder3,
            _this18 = this;

        var checkIfTextPlaceholderExist = element.getAttribute('data-jgc-placeholder-text') || ((_this$placeholder2 = this.placeholder) === null || _this$placeholder2 === void 0 ? void 0 : _this$placeholder2.text);
        var checkIfImgPlaceholderExist = element.getAttribute('data-jgc-placeholder-img') || ((_this$placeholder3 = this.placeholder) === null || _this$placeholder3 === void 0 ? void 0 : _this$placeholder3.image);

        if (element.tagName == 'IFRAME' && (checkIfTextPlaceholderExist || checkIfImgPlaceholderExist)) {
          var _this$placeholder4;

          var getIdElement = element.getAttribute('src') || element.getAttribute('data-jgc-src');
          var getTag = element.getAttribute('data-jgc-tag');
          var tag = document.createElement("div");

          if (checkIfImgPlaceholderExist) {
            tag.setAttribute("style", "background-image: url(".concat(this.returnPlaceholderImg(element), ")"));
          }

          tag.setAttribute("data-jgc-placeholder-id", getIdElement);

          if (getTag) {
            tag.setAttribute("data-jgc-placeholder-tag", getTag);
            tag.setAttribute("data-jgc-placeholder-height", element.getAttribute('height'));
          }

          tag.classList.add(this.checkTailwindPrefix('flex'));
          tag.classList.add(this.checkTailwindPrefix("md:pt-0"));
          tag.classList.add(this.checkTailwindPrefix("pt-[56.25%]"));
          tag.classList.add(this.checkTailwindPrefix("md:w-[".concat(this.returnIframeSize(element, 'width'), "]")));
          tag.classList.add(this.checkTailwindPrefix("md:h-[".concat(this.returnIframeSize(element, 'height'), "]")));
          tag.classList.add(this.checkTailwindPrefix('w-full'));
          tag.classList.add(this.checkTailwindPrefix('items-center'));
          tag.classList.add(this.checkTailwindPrefix('justify-center'));
          tag.classList.add(this.checkTailwindPrefix('bg-gray-100'));
          tag.classList.add(this.checkTailwindPrefix('cursor-pointer'));

          if ((_this$placeholder4 = this.placeholder) !== null && _this$placeholder4 !== void 0 && _this$placeholder4.classes) {
            var classes = this.placeholder.classes;
            var splitWords = classes.split(/[ ,]+/);

            var array = _toConsumableArray(splitWords);

            for (var i = 0; i < array.length; i++) {
              var _element3 = array[i];
              tag.classList.add(_element3);
            }
          }

          if (checkIfTextPlaceholderExist) {
            var _this$placeholder5;

            var settingsHtml = checkIfTextPlaceholderExist ? checkIfTextPlaceholderExist : "".concat((_this$placeholder5 = this.placeholder) !== null && _this$placeholder5 !== void 0 && _this$placeholder5.text ? this.placeholder.text : '');
            tag.innerHTML = settingsHtml.escape();
          }

          tag.addEventListener('click', function () {
            return _this18.managePreferences();
          });
          element.parentNode.insertBefore(tag, element);
          if (element.hasAttribute('data-jgc-src')) element.setAttribute('height', 0);
        }
      }
      /**
      * Enable Auto Mode
      */

    }, {
      key: "autoMode",
      value: function autoMode(arrToActivate) {
        var _this19 = this;

        var objKeys = Object.keys(this.autoCategories);
        var arrService = [];

        if (arrToActivate) {
          for (var _i14 = 0, _Object$entries11 = Object.entries(this.autoCategories); _i14 < _Object$entries11.length; _i14++) {
            var _Object$entries11$_i = _slicedToArray(_Object$entries11[_i14], 2),
                k = _Object$entries11$_i[0],
                v = _Object$entries11$_i[1];

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
                      if (element.tagName == 'IFRAME') this.generateIframeDivs(element);
                      this.removeElements(element);
                    } else {
                      element.classList.remove(this.checkTailwindPrefix('hidden'));
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
                  var _element4 = removeStyle[i];
                  if (_element4.getAttribute('data-jgc-remove-style') == k) _element4.remove();
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
                  element.classList.remove(_this19.checkTailwindPrefix('hidden'));

                  if (objKeys.some(function (v) {
                    if (src && src.includes(v)) {
                      arrService.push(_this19.autoCategories[v]);
                      checkedElement = v;
                      return src.includes(v);
                    }
                  })) {
                    var checkIfNecessary = Object.values(_this19.autoCategories[checkedElement]);

                    if (checkIfNecessary[1] != 'necessary') {
                      if (element.tagName == 'IFRAME') _this19.generateIframeDivs(element);

                      _this19.removeElements(element);
                    }
                  }
                }
              }
            });

            _this19.generatePreferenceStorage();
          }, 1);
        }
      }
      /**
      * Remove elements and siblings from DOM in AutoMode.
      */

    }, {
      key: "removeElements",
      value: function removeElements(element) {
        var nextSibling = element.nextSibling; // Need a quick timeout

        setTimeout(function () {
          element.parentNode.removeChild(element);
          element.remove();
          if (nextSibling && nextSibling.tagName == 'IFRAME') nextSibling.remove();
        }, 1);
      }
      /**
      * Check active cookies in AutoMode
      */

    }, {
      key: "checkCookiesAutoMode",
      value: function checkCookiesAutoMode() {
        if (this.auto) {
          var checkPreferences = this.getCookie('JgcPreferences');
          var trueArr = [];

          for (var _i15 = 0, _Object$entries12 = Object.entries(checkPreferences['preferences']); _i15 < _Object$entries12.length; _i15++) {
            var _Object$entries12$_i = _slicedToArray(_Object$entries12[_i15], 2),
                k = _Object$entries12$_i[0],
                v = _Object$entries12$_i[1];

            if (v) trueArr.push(k);
          }

          for (var i = 0; i < trueArr.length; i++) {
            trueArr[i];
          }

          this.autoMode(trueArr);
        }
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
            _this$customStyle51,
            _this$customStyle52,
            _this$customStyle53,
            _this$customStyle54,
            _this$customStyle55,
            _this$customStyle56,
            _this$customStyle57,
            _this$customStyle58,
            _this$customStyle59,
            _this$customStyle60,
            _this$customStyle61,
            _this$customStyle62,
            _this$customStyle63,
            _this$customStyle64,
            _this$customStyle65,
            _this$customStyle66,
            _this$customStyle67,
            _this$customStyle68,
            _this20 = this;

        if (data.locale) {
          this.locale = new Languages(data.locale.escape()) || new Languages('en');
          this.localeString = data.locale;
        }

        if (data.autoMode && this.isBoolean(data.autoMode, "autoMode")) {
          var checkPreferences = this.getCookie('JgcPreferences');

          if (!checkPreferences) {
            var scripts = document.querySelectorAll('iframe,script');

            var _iterator2 = _createForOfIteratorHelper(scripts),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var element = _step2.value;
                element.classList.add(this.checkTailwindPrefix('hidden'));
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          this.auto = true;

          if (data.autoCategories) {
            for (var _i16 = 0, _Object$keys = Object.keys(data.autoCategories); _i16 < _Object$keys.length; _i16++) {
              var a = _Object$keys[_i16];
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
            htmlClass.classList.add(this.checkTailwindPrefix('dark'));
            this.darkMode = true;
          }
        } // Custom texts 


        this.text = {
          acceptSelectedText: (_data$text = data.text) !== null && _data$text !== void 0 && _data$text.acceptSelectedText ? this.isString(data.text.acceptSelectedText, "acceptSelectedText") : this.locale.acceptSelectedText,
          acceptText: (_data$text2 = data.text) !== null && _data$text2 !== void 0 && _data$text2.acceptText ? this.isString(data.text.acceptText, "acceptText") : this.locale.acceptText,
          bannerLinkLabel: !((_data$text3 = data.text) !== null && _data$text3 !== void 0 && _data$text3.bannerLinkLabel) ? this.isString(data.text.bannerLinkLabel, "bannerLinkLabel") : this.locale.bannerLinkLabel,
          descriptionText: !((_data$text4 = data.text) !== null && _data$text4 !== void 0 && _data$text4.descriptionText) ? this.isString(data.text.descriptionText, "descriptionText") : null,
          panelTitle: !((_data$text5 = data.text) !== null && _data$text5 !== void 0 && _data$text5.panelTitle) ? this.isString(data.text.panelTitle, "panelTitle") : this.locale.panelTitle,
          preferencesText: !((_data$text6 = data.text) !== null && _data$text6 !== void 0 && _data$text6.preferencesText) ? this.isString(data.text.preferencesText, "preferencesText") : this.locale.preferencesText,
          rejectText: !((_data$text7 = data.text) !== null && _data$text7 !== void 0 && _data$text7.rejectText) ? this.isString(data.text.rejectText, "rejectText") : this.locale.rejectText,
          saveButton: !((_data$text8 = data.text) !== null && _data$text8 !== void 0 && _data$text8.saveButton) ? this.isString(data.text.saveButton, "saveButton") : this.locale.saveAndContinue,
          saveAllButton: !((_data$text9 = data.text) !== null && _data$text9 !== void 0 && _data$text9.saveAllButton) ? this.isString(data.text.saveAllButton, "saveAllButton") : this.locale.saveAndContinueAcceptAll,
          servicesTag: !((_data$text10 = data.text) !== null && _data$text10 !== void 0 && _data$text10.servicesTag) ? this.isString(data.text.servicesTag, "servicesTag") : this.locale.servicesText
        }; // Banner config & style 

        this.bannerConfig = {
          animation: this.isBoolean(data.banner.animation, "animation") ? data.banner.animation : true,
          backgroundColor: (_data$banner = data.banner) !== null && _data$banner !== void 0 && _data$banner.backgroundColor ? this.isString(data.banner.backgroundColor, "backgroundColor") : this.checkTailwindPrefix('bg-white dark:bg-gray-800'),
          backgroundDark: (_data$banner2 = data.banner) !== null && _data$banner2 !== void 0 && _data$banner2.backgroundDark ? this.isBoolean(data.banner.backgroundDark, "backgroundDark") : false,
          backgroundImage: (_data$banner3 = data.banner) !== null && _data$banner3 !== void 0 && _data$banner3.backgroundImage ? this.isString(data.banner.backgroundImage, "backgroundImage") : null,
          closeButton: (_data$banner4 = data.banner) !== null && _data$banner4 !== void 0 && _data$banner4.closeButton ? this.isBoolean(data.banner.closeButton, "closeButton") : true,
          closeButtonAccept: (_data$banner5 = data.banner) !== null && _data$banner5 !== void 0 && _data$banner5.closeButtonAccept ? this.isBoolean(data.banner.closeButtonAccept, "closeButtonAccept") : false,
          disableReject: (_data$banner6 = data.banner) !== null && _data$banner6 !== void 0 && _data$banner6.disableReject ? this.isBoolean(data.banner.disableReject, "disableReject") : false,
          icon: (_data$banner7 = data.banner) !== null && _data$banner7 !== void 0 && _data$banner7.icon ? this.isString(data.banner.icon, "icon") : null,
          iconDark: (_data$banner8 = data.banner) !== null && _data$banner8 !== void 0 && _data$banner8.iconDark ? this.isString(data.banner.iconDark, "iconDark") : null,
          innerBackgroundImage: (_data$banner9 = data.banner) !== null && _data$banner9 !== void 0 && _data$banner9.innerBackgroundImage ? this.isString(data.banner.innerBackgroundImage, "innerBackgroundImage") : null,
          logo: (_data$banner10 = data.banner) !== null && _data$banner10 !== void 0 && _data$banner10.logo ? this.isString(data.banner.logo, "logo") : undefined,
          logoClasses: (_data$banner11 = data.banner) !== null && _data$banner11 !== void 0 && _data$banner11.logoClasses ? this.isString(data.banner.logoClasses, "logoClasses") : undefined,
          maxWidth: (_data$banner12 = data.banner) !== null && _data$banner12 !== void 0 && _data$banner12.maxWidth ? this.isString(data.banner.maxWidth, "maxWidth") : undefined,
          onAccept: (_data$banner13 = data.banner) !== null && _data$banner13 !== void 0 && _data$banner13.onAccept ? this.onAccept = this.isFunction(data.banner.onAccept, "onAccept") : null,
          onReject: (_data$banner14 = data.banner) !== null && _data$banner14 !== void 0 && _data$banner14.onReject ? this.onReject = this.isFunction(data.banner.onReject, "onReject") : null,
          position: (_data$banner15 = data.banner) !== null && _data$banner15 !== void 0 && _data$banner15.position ? this.isString(data.banner.position) : undefined,
          shortText: (_data$banner16 = data.banner) !== null && _data$banner16 !== void 0 && _data$banner16.shortText && this.isBoolean(data.banner.shortText, "shortText") ? this.locale.acceptShortText : this.acceptText,
          title: (_data$banner17 = data.banner) !== null && _data$banner17 !== void 0 && _data$banner17.title ? this.isString(data.banner.title, "title") : 'Cookies'
        }; // Custom text placeholder

        if (data.placeholder) {
          var _data$placeholder, _data$placeholder2, _data$placeholder3;

          this.placeholder = {
            classes: ((_data$placeholder = data.placeholder) === null || _data$placeholder === void 0 ? void 0 : _data$placeholder.classes) && this.isString(data.placeholder.classes, "placeholder classes"),
            image: ((_data$placeholder2 = data.placeholder) === null || _data$placeholder2 === void 0 ? void 0 : _data$placeholder2.image) && this.isString(data.placeholder.image, "placeholder image"),
            text: ((_data$placeholder3 = data.placeholder) === null || _data$placeholder3 === void 0 ? void 0 : _data$placeholder3.text) && this.isString(data.placeholder.text, "placeholder text")
          };
        } // Preference Panel


        if (data.panel) {
          var _data$panel, _data$panel2, _data$panel3;

          this.panel = {
            bgColor: (_data$panel = data.panel) !== null && _data$panel !== void 0 && _data$panel.bgColor ? this.isString(data.panel.bgColor, "bgColor") : null,
            open: (_data$panel2 = data.panel) !== null && _data$panel2 !== void 0 && _data$panel2.open ? this.isBoolean(data.panel.open, "open") : false,
            padding: (_data$panel3 = data.panel) !== null && _data$panel3 !== void 0 && _data$panel3.padding ? this.isBoolean(data.panel.padding, "padding") : false
          };
        } // Banner style


        if (data.style) {
          var _data$style, _data$style2, _data$style3, _data$style4, _data$style5, _data$style6, _data$style7, _data$style8, _data$style9, _data$style10, _data$style11, _data$style12, _data$style13, _data$style14, _data$style15, _data$style16, _data$style17;

          this.customStyle = {
            accept: (_data$style = data.style) !== null && _data$style !== void 0 && _data$style.accept ? this.isString(data.style.accept, "accept") : null,
            bannerText: (_data$style2 = data.style) !== null && _data$style2 !== void 0 && _data$style2.bannerText ? this.isString(data.style.bannerText, "bannerText") : null,
            bannerTitle: (_data$style3 = data.style) !== null && _data$style3 !== void 0 && _data$style3.bannerTitle ? this.isString(data.style.bannerTitle, "bannerTitle") : null,
            closeButton: (_data$style4 = data.style) !== null && _data$style4 !== void 0 && _data$style4.closeButton ? this.isString(data.style.closeButton, "services: closeButton") : null,
            toggles: (_data$style5 = data.style) !== null && _data$style5 !== void 0 && _data$style5.toggles ? this.isString(data.style.toggles, "toggles") : null,
            lockIcon: (_data$style6 = data.style) !== null && _data$style6 !== void 0 && _data$style6.lockIcon ? this.isString(data.style.lockIcon, "lockIcon") : null,
            panelHeader: (_data$style7 = data.style) !== null && _data$style7 !== void 0 && _data$style7.panelHeader ? this.isString(data.style.panelHeader, "panelHeader") : null,
            panelText: (_data$style8 = data.style) !== null && _data$style8 !== void 0 && _data$style8.panelText ? this.isString(data.style.panelText, "panelText") : null,
            panelTitle: (_data$style9 = data.style) !== null && _data$style9 !== void 0 && _data$style9.panelTitle ? this.isString(data.style.panelTitle, "classes") : null,
            preferencesText: (_data$style10 = data.style) !== null && _data$style10 !== void 0 && _data$style10.preferencesText ? this.isString(data.style.preferencesText, "services: preferencesText") : null,
            privacyLink: (_data$style11 = data.style) !== null && _data$style11 !== void 0 && _data$style11.privacyLink ? this.isString(data.style.privacyLink, "services: privacyLink") : null,
            reject: (_data$style12 = data.style) !== null && _data$style12 !== void 0 && _data$style12.reject ? this.isString(data.style.reject, "reject") : null,
            saveButton: (_data$style13 = data.style) !== null && _data$style13 !== void 0 && _data$style13.saveButton ? this.isString(data.style.saveButton, "classes") : null,
            saveAllButton: (_data$style14 = data.style) !== null && _data$style14 !== void 0 && _data$style14.saveAllButton ? this.isString(data.style.saveAllButton, "classes") : null,
            servicesText: (_data$style15 = data.style) !== null && _data$style15 !== void 0 && _data$style15.servicesText ? this.isString(data.style.servicesText, "services: servicesText") : null,
            servicesTag: (_data$style16 = data.style) !== null && _data$style16 !== void 0 && _data$style16.servicesTag ? this.isString(data.style.servicesTag, "services: servicesTag") : null,
            stripes: (_data$style17 = data.style) !== null && _data$style17 !== void 0 && _data$style17.stripes ? this.isString(data.style.stripes, "stripes: classes") : null
          };
        } // Cookie Categories


        if (data.cookies) {
          this.getCustomCookies = {};

          for (var _i17 = 0, _Object$keys2 = Object.keys(data.cookies); _i17 < _Object$keys2.length; _i17++) {
            var jgcTag = _Object$keys2[_i17];

            for (var _i18 = 0, _Object$entries13 = Object.entries(data.cookies[jgcTag]); _i18 < _Object$entries13.length; _i18++) {
              var _Object$entries13$_i = _slicedToArray(_Object$entries13[_i18], 1),
                  objKey = _Object$entries13$_i[0];

              data.cookies[jgcTag][objKey] = this.isString(data.cookies[jgcTag][objKey]);
            }
          }

          this.getCustomCookies = data.cookies;
        } // Activations


        this.activate = data.activate ? data.activate : null; // Default button styles

        this.style = {
          yesCookies: "".concat((_this$customStyle51 = this.customStyle) !== null && _this$customStyle51 !== void 0 && _this$customStyle51.accept ? this.customStyle.accept : "".concat(this.checkTailwindPrefix('text-green-800 dark:text-green-300 bg-green-50 hover:bg-green-100 transition-all duration-300 dark:bg-green-900 ring-1 ring-green-200 px-2 py-0.5 text-xs uppercase font-bold items-center rounded my-2'))),
          noCookies: "".concat((_this$customStyle52 = this.customStyle) !== null && _this$customStyle52 !== void 0 && _this$customStyle52.reject ? this.customStyle.reject : "".concat(this.checkTailwindPrefix('text-red-800 dark:text-red-300 bg-red-50 hover:bg-red-100 transition-all duration-300 dark:bg-red-900 ring-red-200 ring-1 px-2 py-0.5 text-xs uppercase font-bold items-center rounded my-2'))),
          yesCookies2: "".concat((_this$customStyle53 = this.customStyle) !== null && _this$customStyle53 !== void 0 && _this$customStyle53.accept ? this.customStyle.accept : "".concat(this.checkTailwindPrefix('text-green-600 bg-transparent ring-green-400 ring-2 px-3 leading-6 text-xs text-center font-medium uppercase transition transition-all duration-300  hover:bg-green-100 focus:shadow-2xl rounded-full'))),
          noCookies2: "".concat((_this$customStyle54 = this.customStyle) !== null && _this$customStyle54 !== void 0 && _this$customStyle54.reject ? this.customStyle.reject : "".concat(this.checkTailwindPrefix('text-red-600 bg-transparent ring-red-600 ring-2 px-3 leading-6 text-xs text-center font-medium uppercase transition transition-all duration-300  hover:bg-red-100 focus:shadow-2xl rounded-full'))),
          yesCookies3: "".concat((_this$customStyle55 = this.customStyle) !== null && _this$customStyle55 !== void 0 && _this$customStyle55.accept ? this.customStyle.accept : "".concat(this.checkTailwindPrefix('text-green-600 bg-transparent transition transition-all duration-300 ring-green-400 ring-2 px-3 py-2 leading-tight text-xs text-center font-medium uppercase transition hover:bg-green-100 focus:shadow-2xl rounded-full'))),
          noCookies3: "".concat((_this$customStyle56 = this.customStyle) !== null && _this$customStyle56 !== void 0 && _this$customStyle56.reject ? this.customStyle.reject : "".concat(this.checkTailwindPrefix('text-red-600 bg-transparent transition transition-all duration-300 ring-red-600 ring-2 px-3 py-2 leading-tight text-xs text-center font-medium uppercase transition hover:bg-red-100 focus:shadow-2xl rounded-full'))),
          yesCookies4: "".concat((_this$customStyle57 = this.customStyle) !== null && _this$customStyle57 !== void 0 && _this$customStyle57.accept ? this.customStyle.accept : "".concat(this.checkTailwindPrefix('text-gray-500 dark:text-green-300 px-3 leading-6 text-xs text-center font-bold uppercase transition focus:shadow-2xl tracking-widest rounded-full'))),
          noCookies4: "".concat((_this$customStyle58 = this.customStyle) !== null && _this$customStyle58 !== void 0 && _this$customStyle58.reject ? this.customStyle.reject : "".concat(this.checkTailwindPrefix('text-gray-500  dark:text-red-300 px-3 leading-6 text-xs text-center font-bold uppercase transition focus:shadow-2xl tracking-widest rounded-full'))),
          yesCookies5: "".concat((_this$customStyle59 = this.customStyle) !== null && _this$customStyle59 !== void 0 && _this$customStyle59.accept ? this.customStyle.accept : "".concat(this.checkTailwindPrefix('text-white dark:text-green-400 px-5 text-sm text-center font-bold uppercase transition focus:shadow-2xl tracking-wide rounded-full'))),
          noCookies5: "".concat((_this$customStyle60 = this.customStyle) !== null && _this$customStyle60 !== void 0 && _this$customStyle60.reject ? this.customStyle.reject : "".concat(this.checkTailwindPrefix('text-red-600 dark:text-red-400 px-5 leading-6 text-sm text-center font-bold uppercase transition focus:shadow-2xl tracking-wide rounded-full'))),
          yesCookies6: "".concat((_this$customStyle61 = this.customStyle) !== null && _this$customStyle61 !== void 0 && _this$customStyle61.accept ? this.customStyle.accept : "".concat(this.checkTailwindPrefix('text-white dark:text-gray-400 px-12 py-2 text-sm text-center font-semibold uppercase transition focus:shadow-2xl tracking-widest rounded-full'))),
          yesCookies7: "".concat((_this$customStyle62 = this.customStyle) !== null && _this$customStyle62 !== void 0 && _this$customStyle62.reject ? this.customStyle.reject : "".concat(this.checkTailwindPrefix('text-gray-600 dark:text-white rounded-full text-xs font-semibold focus:shadow-2xl'))),
          noCookies7: "".concat((_this$customStyle63 = this.customStyle) !== null && _this$customStyle63 !== void 0 && _this$customStyle63.accept ? this.customStyle.accept : "".concat(this.checkTailwindPrefix('text-gray-600 dark:text-white text-xs leading-6 font-bold focus:shadow-2xl rounded-full'))),
          yesCookies8: "".concat((_this$customStyle64 = this.customStyle) !== null && _this$customStyle64 !== void 0 && _this$customStyle64.reject ? this.customStyle.reject : "".concat(this.checkTailwindPrefix('text-gray-600 group-hover:text-green-600 dark:bg-green-900 py-2 dark:text-green-400 px-5 text-sm text-center font-semibold transition focus:shadow-2xl tracking-wide rounded-full'))),
          selectedCookies8: "".concat((_this$customStyle65 = this.customStyle) !== null && _this$customStyle65 !== void 0 && _this$customStyle65.accept ? this.customStyle.accept : "".concat(this.checkTailwindPrefix('text-orange-600 group-hover:text-orange-600 dark:text-orange-400 dark:bg-orange-900 py-2 px-5 text-sm text-center font-semibold transition focus:shadow-2xl tracking-wide rounded-full'))),
          noCookies8: "".concat((_this$customStyle66 = this.customStyle) !== null && _this$customStyle66 !== void 0 && _this$customStyle66.accept ? this.customStyle.accept : "".concat(this.checkTailwindPrefix('text-red-600 group-hover:text-red-600 dark:bg-red-900 py-2 dark:text-red-400 px-5 leading-6 text-sm text-center font-semibold transition focus:shadow-2xl tracking-wide rounded-full'))),
          yesCookies9: "".concat((_this$customStyle67 = this.customStyle) !== null && _this$customStyle67 !== void 0 && _this$customStyle67.reject ? this.customStyle.reject : "".concat(this.checkTailwindPrefix('text-white bg-black dark:text-gray-100 px-6 py-1 text-xs text-center font-semibold uppercase transition focus:shadow-2xl tracking-widest rounded-full'))),
          noCookies9: "".concat((_this$customStyle68 = this.customStyle) !== null && _this$customStyle68 !== void 0 && _this$customStyle68.accept ? this.customStyle.accept : "".concat(this.checkTailwindPrefix('text-red-900 ring-1 ring-red-900 dark:text-red-700 dark:ring-red-700 px-6 py-1 text-xs text-center font-semibold uppercase transition focus:shadow-2xl tracking-widest rounded-full')))
        }; // Let's start the engine

        window.addEventListener('load', function () {
          _this20.checkDarkMode(); // Check Dark Mode


          _this20.loadText(); // Check if there is a custom text for the banner


          _this20.generatePreferenceStorage(); // Create the default user settings


          _this20.checkBackground(); // Check if we need to add a dark overlay


          _this20.loadPreferences(); // Make the preference button clickable


          _this20.saveCookiesPreferences(); // Save cookies


          _this20.loadBannerLayout(_this20.config.layout); // Load the banner


          _this20.openPanel(); // Check whether the preferences panel should be visible or not


          _this20.checkCookies(); // Check cookies

        });
      }
    }]);

    return JustGoodCookies;
  }(); // Locales 


  var Languages = /*#__PURE__*/function () {
    function Languages(locale) {
      _classCallCheck(this, Languages);

      this.init();
      return this.locales[locale] || this.locales['en'];
    }

    _createClass(Languages, [{
      key: "init",
      value: function init() {
        this.locales = {
          en: {
            'acceptText': 'Accept cookies',
            'acceptSelectedShortText': 'Accept selected',
            'acceptSelectedText': 'Accept selected',
            'acceptShortText': 'Accept',
            'bannerDescription': "\n          We use cookies to personalize content, improve user experience, and analyze our traffic.\n          By clicking \u201CAccept,\u201D you consent to the use of all the cookies. \n          You may change your settings at any time by visiting the Cookie preferences.\n        ",
            'bannerShortDescription': 'This website uses cookies.',
            'bannerLinkLabel': 'privacy policy',
            'bannerLinkDescription': 'Read more in the',
            'preferencesText': 'Learn more and customize',
            'rejectShortText': 'Reject',
            'rejectText': 'Reject cookies',
            'saveAndContinue': 'Save and continue',
            'saveAndContinueAcceptAll': 'Accept all and close',
            'servicesText': 'Services included',
            'panelTitle': 'Cookies preferences'
          },
          it: {
            'acceptText': 'Accetta i cookie',
            'acceptSelectedShortText': 'Accetto la selezione',
            'acceptSelectedText': 'Accetto la selezione',
            'acceptShortText': 'Accetto',
            'bannerDescription': "\n          Utilizziamo cookie nostri e di terze parti per personalizzare il contenuto e analizzare il traffico web. \n          Puoi prestare, rifiutare o revocare il tuo consenso, in qualsiasi momento, aprendo il pannello delle preferenze.  \n          Chiudendo questa informativa, continui senza accettare.\n        ",
            'bannerLinkLabel': 'privacy policy',
            'bannerLinkDescription': 'Per saperne di più riguardo i cookie puoi leggere la',
            'bannerShortDescription': 'Utilizziamo i cookies',
            'preferencesText': 'Gestisci i cookie',
            'rejectShortText': 'Rifiuto',
            'rejectText': 'Rifiuta i cookie',
            'saveAndContinue': 'Salva e chiudi',
            'saveAndContinueAcceptAll': 'Accetta tutti e chiudi',
            'servicesText': 'Servizi inclusi',
            'panelTitle': 'Preferenze cookies'
          }
        };
      }
    }]);

    return Languages;
  }();

  var justgoodcookies = new JustGoodCookies();

  return justgoodcookies;

}));
