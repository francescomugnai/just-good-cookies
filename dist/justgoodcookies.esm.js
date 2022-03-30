/*
    @license
    JustGoodCookies
    Created by Francesco Mugnai 
    2022 - v 0.8.0
    Released under MIT License
    If you use this script, you will always remain the sole responsible party, use it at your own risk
    https://github.com/francescomugnai/just-good-cookies
*/
class JustGoodCookies {
  constructor() {
    /** General */
    this.config = undefined; // General config

    this.activate = undefined; // Custom Activations

    this.locale = undefined; // Locale 

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
      return this.replace(/[&<>]/g, tag => replace[tag] || tag);
    };
  }
  /*
  *  Check the current status
  */


  checkCookies() {
    let preference = this.getCookie('JgcPreferences');

    if (preference['duration']) {
      let getValue = preference['duration'].value;

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


  yesCookies() {
    this.checkCookieExpiration('1');
    this.checkActivations();
    this.setPreferences();
    this.activateToggledCookies();
    this.closePreferencePanelAndSaveAll();
    let checkPreferences = this.getCookie('JgcPreferences');

    if (checkPreferences['remove'] > 0) {
      this.removeScript(true); // We need to remove them AND refresh the page
    } else {
      this.googleTagManager(); // Do not trigger Google Tag Manager twice

      this.removePlaceholders();
    }

    if (this.onAccept && typeof this.onAccept == 'function') this.onAccept();
    this.closeBanner();
    this.removeDivsOfUserAcceptedIframes();
    if (this.auto && !this.bannerConfig.onAccept) window.location.reload();
    if (document.getElementById('preferenceDiv')) this.closePreferencePanel();
  }
  /*
  * Reject cookies
  */


  noCookies() {
    this.checkCookieExpiration('0');
    let getPreferences = this.getCookie('JgcPreferences');
    const saveObj = { ...getPreferences
    };
    this.saveCookie(saveObj);
    if (this.onReject && typeof this.onReject == 'function') this.onReject();
    this.closeBanner();
  }
  /**
   * Load user-defined text
   */


  loadText() {
    let bannerText = document.getElementById('jgc-banner-text');
    if (bannerText) this.bannerText = bannerText.innerHTML;
    let bannerLink = document.getElementById('jgc-banner-link');
    if (bannerLink) this.bannerLink = bannerLink.innerHTML;
    let panelHeader = document.getElementById('jgc-panel-header');
    if (!this.isEmpty(panelHeader)) this.panelHeader = panelHeader.innerHTML;
    let panelFooter = document.getElementById('jgc-panel-footer');
    if (!this.isEmpty(panelFooter)) this.panelFooter = panelFooter.innerHTML;
  }
  /*
  * Check the expiration date of the cookie
  */


  checkCookieExpiration(val) {
    let checkPreference = this.getCookie('JgcPreferences');
    let cookieDuration = this.cookieTimeout * 24 * 60 * 60 * 1000;
    let saveObj = {};
    let date = new Date();
    date.setTime(date.getTime() + cookieDuration);
    let item = {
      value: val,
      expiry: date.toString()
    };

    if (!checkPreference['duration']) {
      let getPreferences = this.getCookie('JgcPreferences');
      const uniqueId = Date.now() + Math.random().toString(16).slice(2);
      saveObj = { ...getPreferences,
        duration: item,
        id: uniqueId
      };
      this.saveCookie(saveObj);
    } else {
      let now = new Date();
      let storedData = new Date(checkPreference['duration']['expiry']);

      if (now.setHours(0, 0, 0, 0) >= storedData.setHours(0, 0, 0, 0)) {
        let getPreferences = this.getCookie('JgcPreferences');
        delete getPreferences.duration;
        let item = {
          value: "1",
          expiry: date.toString()
        };
        saveObj = { ...getPreferences,
          duration: item
        };
        this.saveCookie(saveObj);
        this.showBanner();
      }
    }
  }
  /**
  * Hide the scripts
  */


  hideScripts() {
    let getElementsJgc = document.querySelectorAll('[data-jgc-tag]');
    let getElementsToHide = document.querySelectorAll('[data-jgc-remove]');
    let getElementsPlaceholder = document.querySelectorAll('[data-jgc-placeholder]');

    for (let i = 0; i < getElementsJgc.length; i++) {
      const element = getElementsJgc[i];

      if (element.getAttribute('data-jgc-tag') != 'necessary') {
        this.generateIframeDivs(element);
      } else {
        if (getElementsPlaceholder) {
          getElementsPlaceholder.forEach(e => {
            if (e.contains(element)) {
              e.style.backgroundColor = '';
              e.className = '';
            }
          });
        }

        this.replaceScripts(`[data-jgc-tag="necessary"]`);
      }
    }

    if (getElementsToHide.length > 0) this.removeScript(true);
  }
  /**
  * Remove hidden divs
  */


  removeHiddenDivs(src) {
    let getDivsToRemove = document.querySelectorAll('[data-jgc-placeholder-tag]');

    if (getDivsToRemove.length > 0) {
      for (let i = 0; i < getDivsToRemove.length; i++) {
        const element = getDivsToRemove[i];
        if (element.getAttribute('data-jgc-placeholder-tag') == src) element.remove();
      }
    }
  }
  /**
  * Remove all divs that hide user accepted iframes                                                                   
  */


  removeDivsOfUserAcceptedIframes() {
    let checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));

    for (let [k, v] of Object.entries(checkPreferencesFromStorage)) {
      if (k != 'necessary') {
        let getDivsToRemove = document.querySelectorAll('[data-jgc-remove-style]');

        for (let i = 0; i < getDivsToRemove.length; i++) {
          const element = getDivsToRemove[i];
          if (element.getAttribute('data-jgc-tag') == k && v == true) element.remove();
        }
      }
    }
  }
  /**
  * Remove placeholders
  */


  removePlaceholders() {
    let getElementsPlaceholder = document.querySelectorAll('[data-jgc-placeholder]');

    if (getElementsPlaceholder.length > 0) {
      for (let i = 0; i < getElementsPlaceholder.length; i++) {
        const element = getElementsPlaceholder[i];
        let getPlaceholder = element.querySelectorAll("[data-jgc-placeholder-tag]");
        let getOriginalIframe = element.querySelectorAll("[data-jgc-tag]");
        let getSrcToRemove = element.querySelectorAll("[data-jgc-src]");

        if (getOriginalIframe) {
          for (let i = 0; i < getOriginalIframe.length; i++) {
            let el = getOriginalIframe[i];

            if (getPlaceholder.length > 0) {
              let height = getPlaceholder[0].getAttribute(['data-jgc-placeholder-height']);
              el.setAttribute('height', `${height}px`);
            }
          }
        }

        if (getPlaceholder) {
          for (let i = 0; i < getPlaceholder.length; i++) {
            let el = getPlaceholder[i];
            let placeholderId = el.getAttribute('data-jgc-placeholder-id');
            let hiddenDiv = document.querySelectorAll(`[data-jgc-placeholder-tag="${placeholderId}"]`);
            hiddenDiv[0].remove();
            el.remove();
          }
        }

        let getSrc = getSrcToRemove[0]?.getAttribute('data-jgc-src') || element.getAttribute('data-jgc-placeholder-id');
        this.removeHiddenDivs(getSrc);
      }
    } else {
      document.body.querySelectorAll('[data-jgc-tag]').forEach(el => el.classList.remove(this.checkTailwindPrefix('h-0'), this.checkTailwindPrefix('w-0')));
    }
  }
  /**
  * Remove scripts from the DOM (if necessary)
  */


  removeScript(value) {
    let scriptsToRemove = document.querySelectorAll('[data-jgc-remove]');

    if (value && scriptsToRemove.length > 0) {
      let getPreferences = this.getCookie('JgcPreferences');
      let saveObj = { ...getPreferences,
        remove: scriptsToRemove.length
      };
      this.saveCookie(saveObj);
      let checkPreferences = this.getCookie('JgcPreferences');
      let servicesToReturn = [];
      scriptsToRemove.forEach(element => {
        const service = element.getAttribute('data-jgc-service');

        if (service && service.length > 0) {
          const item = {
            service: service,
            tag: element.getAttribute('data-jgc-tag')
          };
          servicesToReturn.push(item);
          const updatedObj = { ...saveObj,
            servicesRemoved: servicesToReturn
          };
          this.saveCookie(updatedObj);
        }

        if (!checkPreferences['preferences'][element.getAttribute('data-jgc-tag')] || checkPreferences['preferences'][element.getAttribute('data-jgc-tag')] == false) element.remove();
      });
    } else {
      let getPreferences = this.getCookie('JgcPreferences');
      let saveObj = { ...getPreferences,
        remove: 0
      };
      this.saveCookie(saveObj);

      if (!getPreferences['refresh']) {
        const updatedObj = { ...saveObj,
          refresh: true
        };
        this.saveCookie(updatedObj);
        window.location.reload();
      }
    }
  }
  /**
  * Replace the attribute "jgc" from scripts if the user accepts
  */


  replaceScripts(customAttributeToCheck) {
    let getElementsToShow = document.querySelectorAll(customAttributeToCheck);

    for (let i = 0; i < getElementsToShow.length; i++) {
      const element = getElementsToShow[i];
      element.style.display = '';
      element.style.backgroundColor = '';
      let customTypeAttribute = element.getAttribute('data-jgc-type');
      if (customTypeAttribute) element.setAttribute('type', customTypeAttribute);
      let customSrc = element.getAttribute('data-jgc-src');

      if (customSrc) {
        const isFirefox = typeof InstallTrigger !== 'undefined'; // Need this to turn on some cookies on FF

        if (isFirefox) {
          setTimeout(() => {
            element.setAttribute('src', customSrc);
          }, 100);
        } else {
          element.setAttribute('src', customSrc);
        }

        element.classList.remove(this.checkTailwindPrefix('hidden'));
      } // TODO: This part can be improved


      if (element.hasAttribute('data-jgc-remove')) {
        if (element.hasChildNodes()) {
          for (let i = 0; i < element.children.length; i++) {
            const el = element.children[i];

            if (el.hasAttribute('data-jgc-src')) {
              let customSrc = el.getAttribute('data-jgc-src');
              el.setAttribute('src', customSrc);
            }
          }
        }
      }
    }
  }
  /**
  * Check custom user's activations  
  */


  checkActivations() {
    let activations = {
      "default": () => {},
      "GoogleAnalytics": () => this.activateGoogle(),
      "FacebookPixel": () => this.activateFacebook()
    };
    if (this.activate) Object.keys(this.activate).forEach(k => (activations[k] || activations['default'])());
  }
  /**
  * Activate Google Analytics
  */


  activateGoogle() {
    let GoogleAnalytics = document.createElement('script');
    let GoogleAnalyticsCode = document.createElement('script');
    let GoogleAnalyticsId = this.activate?.GoogleAnalytics?.id ? this.activate.GoogleAnalytics.id.escape() : false;
    let GoogleAnalyticsAnonymized = this.activate?.GoogleAnalytics?.anonymized ? this.activate.GoogleAnalytics.anonymized : false;
    let GoogleAnalyticsAdStorage = this.activate?.GoogleAnalytics?.ad_storage ? this.activate.GoogleAnalytics.ad_storage : false;
    let GoogleAnalyticsAnalyticsStorage = this.activate?.GoogleAnalytics?.analytics_storage ? this.activate.GoogleAnalytics.analytics_storage : false;
    GoogleAnalytics.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsId}`);
    document.head.appendChild(GoogleAnalytics);
    GoogleAnalyticsCode.text = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {
        'ad_storage': '${GoogleAnalyticsAdStorage == true ? 'granted' : 'denied'}',
        'analytics_storage': '${GoogleAnalyticsAnalyticsStorage == true ? 'granted' : 'denied'}',
      });
      gtag('js', new Date());
      gtag('config', '${GoogleAnalyticsId}', { 'anonymize_ip': ${GoogleAnalyticsAnonymized ?? false} });`;
    document.head.appendChild(GoogleAnalyticsCode);
  }
  /**
  * Activate Facebook Pixel
  */


  activateFacebook() {
    if (this.activate?.FacebookPixel) {
      let FacebookPixel_init = this.activate.FacebookPixel.init.escape();
      let FacebookPixel_noscript = document.createElement('noscript');
      let FacebookPixel_script = document.createElement('script');
      FacebookPixel_script.text = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${FacebookPixel_init}');
      fbq('track', 'PageView');`;
      document.head.appendChild(FacebookPixel_script);
      FacebookPixel_noscript.setAttribute('width', '1');
      FacebookPixel_noscript.setAttribute('height', '1');
      FacebookPixel_noscript.setAttribute('style', 'display:none');
      FacebookPixel_noscript.setAttribute('src', `https://www.facebook.com/tr?id=${FacebookPixel_init}&ev=PageView&noscript=1`);
      document.head.appendChild(FacebookPixel_noscript);
    }
  }
  /**
  * Activate Google Tag Manager
  * TODO: It needs more tests.
  */


  googleTagManager() {
    if (this.activate?.GoogleTagManager) {
      let dataObject = {
        'event': this.activate.GoogleTagManager.event_name
      };
      let GoogleAnalyticsContainerId = this.activate.GoogleTagManager.container_id;
      this.activateGoogleTagManager(window, document, 'script', 'dataLayer', GoogleAnalyticsContainerId);

      if (this.activate.GoogleTagManager.variables) {
        this.activate.GoogleTagManager.variables.forEach(element => dataObject[element[0]] = element[1]);
      }

      if (typeof dataLayer != 'undefined') dataLayer.push(dataObject);
    }
  }
  /**
  *  Google Tag Manager script
  */


  activateGoogleTagManager(w, d, s, l, i) {
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


  checkGoogleAnalytics() {
    let checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));

    for (let [k, v] of Object.entries(checkPreferencesFromStorage)) {
      if (k != 'necessary') {
        const getGoogleAnalytics = document.getElementById('googleAnalytics');

        if (getGoogleAnalytics) {
          const urlParams = new URL(getGoogleAnalytics.getAttribute('data-jgc-src'));
          const googleAnalyticsId = urlParams.searchParams.get("id");
          const domain = window.location.hostname;
          let getAttribute = getGoogleAnalytics.getAttribute('data-jgc-tag'); // TODO: This part can be improved

          if (k == getAttribute && v == false) {
            document.cookie = `_ga=; path=/; domain=${domain}; expires=` + new Date(0).toUTCString();
            document.cookie = `_ga=; path=/; domain=.${domain}; expires=` + new Date(0).toUTCString();
            document.cookie = `_ga_${googleAnalyticsId.slice(2)}=; path=/; domain=${domain}; expires=` + new Date(0).toUTCString();
            document.cookie = `_ga_${googleAnalyticsId.slice(2)}=; path=/; domain=.${domain}; expires=` + new Date(0).toUTCString();
            document.cookie = `_gid=; path=/; domain=${domain}; expires=` + new Date(0).toUTCString();
            document.cookie = `_gid=; path=/; domain=.${domain}; expires=` + new Date(0).toUTCString();
            document.cookie = `_gat_gtag_${googleAnalyticsId}=; path=/; domain=${domain}; expires=` + new Date(0).toUTCString();
            document.cookie = `_gat_gtag_${googleAnalyticsId}=; path=/; domain=.${domain}; expires=` + new Date(0).toUTCString();
            document.cookie = `_gat_gtag_UA_${googleAnalyticsId.slice(3, -2)}_1=; path=/; domain=${domain}; expires=` + new Date(0).toUTCString();
            document.cookie = `_gat_gtag_UA_${googleAnalyticsId.slice(3, -2)}_1=; path=/; domain=.${domain}; expires=` + new Date(0).toUTCString();
          }
        }
      }
    }
  }
  /**
  * Generate the storage for "JgcPreferences"
  */


  generatePreferenceStorage() {
    let checkPreferences = this.getCookie('JgcPreferences');

    if (checkPreferences == null) {
      let preferences = {};

      for (let [k, v] of Object.entries(this.getCustomCookies)) k == 'necessary' ? preferences[k] = true : preferences[k] = false;

      let saveObj = {
        preferences
      };
      this.saveCookie(saveObj);
    }
  }
  /**
  * Load preferences
  */


  loadPreferences() {
    const findPreferenceButton = document.querySelectorAll('[data-jgc-preferences]');
    const preferenceButton = findPreferenceButton[0];
    if (preferenceButton) preferenceButton.addEventListener('click', () => this.managePreferences());
  }
  /**
  * Save cookie categories 
  */


  saveCookiesPreferences() {
    let arr = [];
    if (this.activate) for (let [key, value] of Object.entries(this.activate)) arr.push(value.dataJgcTag);

    for (let [k, v] of Object.entries(this.getCustomCookies)) arr.push(k);

    let preferences = this.getCookie('JgcPreferences');
    let saveObj = { ...preferences,
      enable: arr
    };
    this.saveCookie(saveObj);
  }
  /**
  * Return an array of services 
  */


  makeArrForServices(value) {
    return `<div class="${this.customStyle?.toggles ? this.customStyle.toggles : this.checkTailwindPrefix('bg-green-200')} 
    ${this.customStyle?.servicesTag ? this.customStyle.servicesTag : this.checkTailwindPrefix('text-green-800')} 
    ${this.checkTailwindPrefix('px-2 py-0.5 rounded')}">${value}</div>`;
  }
  /**
  * Return services
  */


  returnServices(service) {
    let getElementsJgc = document.querySelectorAll(`[data-jgc-tag="${service}"]`);
    let arr = [];
    let divsToReturn = [];
    let checkPreferences = this.getCookie('JgcPreferences');
    let check = undefined;

    if (getElementsJgc) {
      for (let index = 0; index < getElementsJgc.length; index++) {
        const element = getElementsJgc[index];
        const getService = element.getAttribute('data-jgc-service');

        if (getService) {
          if (element.hasAttribute('data-jgc-remove')) check = true;
          arr += this.makeArrForServices(getService);
        }
      }
    }

    if (checkPreferences['servicesRemoved']?.length > 0 && !checkPreferences['duration']) {
      if (!check) {
        for (let index = 0; index < checkPreferences['servicesRemoved'].length; index++) {
          const element = checkPreferences['servicesRemoved'][index];
          const getService = element['service'];
          const getTag = element['tag'];
          if (getTag == service) arr += this.makeArrForServices(getService);
        }
      }
    }

    if (this.auto) {
      const objKeys = Object.values(this.autoCategories);
      objKeys.forEach((el, k) => {
        if (service == el[1]) arr += this.makeArrForServices(el[0]);
      });
    }

    divsToReturn += `<div class="${arr.length > 0 ? this.checkTailwindPrefix('mt-2 border-t') : ''}"> 
      ${arr.length > 0 ? `<h4 class="${this.checkTailwindPrefix('text-xs mt-1')} ${this.customStyle?.servicesText ?? ''}">${this.text.servicesTag}</h4>` : ''}
      <div class="${this.checkTailwindPrefix('flex space-x-1 mt-2 text-xs font-semibold')}">${arr}</div>
      </div>`;
    return divsToReturn;
  }
  /**
  * Generate single options (for the panel)
  */


  generateOptions() {
    let arr = [],
        cookieExists = this.getCookie('JgcPreferences');

    for (let [k, v] of Object.entries(this.getCustomCookies)) {
      if (cookieExists['enable'].length > 0 && cookieExists['enable'].includes(k)) {
        arr += `
          <div class="${this.checkTailwindPrefix('flex items-center space-x-6 py-1 px-4')} ${this.customStyle?.stripes ? `${this.customStyle.stripes}` : ''} "> 
            <div>
              <div class="${this.checkTailwindPrefix('flex items-center justify-center')}">
              <div id="toggle-${k}-div" class="${this.checkTailwindPrefix('relative w-12 h-7 transition duration-200 ease-linear rounded-full bg-gray-800 dark:bg-gray-700')}">
                <label id="${k == 'necessary' ? `toggle-necessary-right-fixed` : `toggle-${k}-right`}"
                  for="toggle-${k}" class="${this.checkTailwindPrefix('bg-gray-100 absolute left-0 w-6 h-6 mt-0.5 ml-0.5 transition duration-100 ease-linear transform rounded-full cursor-pointer mr-[2px]')}">
                  ${k == 'necessary' ? `
                  <div class="${this.checkTailwindPrefix('p-1 flex items-center justify-center')}">
                    <svg class="${this.customStyle?.lockIcon ? this.customStyle.lockIcon : this.checkTailwindPrefix('text-green-600')}" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
                      <g>
                        <path d="m432,224h-48v-96c0-70.578-57.422-128-128-128s-128,57.422-128,128v96h-48c-8.836,0-16,7.164-16,16v256c0,8.836 7.164,16 16,16h352c8.836,0 16-7.164 16-16v-256c0-8.836-7.164-16-16-16zm-272-96c0-52.938 43.063-96 96-96s96,43.063 96,96v96h-16v-96c0-44.109-35.891-80-80-80s-80,35.891-80,80v96h-16v-96zm48,96v-96c0-26.469 21.531-48 48-48 26.469,0 48,21.531 48,48v96h-96zm208,256h-320v-224h320v224z"/>
                        <path d="m256,304.002c-17.673,0-32,14.326-32,32 0,11.814 6.476,22.018 16,27.561v36.439c0,8.836 7.163,16 16,16 8.837,0 16-7.164 16-16v-36.439c9.524-5.543 16-15.747 16-27.561 0-17.674-14.327-32-32-32z"/>
                      </g>
                    </svg>
                  </div>
                  ` : ``}
                </label>
                <input tabindex="0" type="checkbox" id="toggle-${k}" name="toggle-${k}" class="${this.checkTailwindPrefix('w-full h-full appearance-none focus:shadow-2xl ')}"/>
              </div>
            </div>
          </div>
        <div class="${this.customStyle?.servicesTag ? this.customStyle.services : `${this.checkTailwindPrefix('dark:text-gray-300')}`} ${this.checkTailwindPrefix('w-full')}">
          <div class="${this.checkTailwindPrefix('flex items-center space-x-2')}">
            <h4 class="${this.checkTailwindPrefix('font-bold text-md')}">${v.title}</h4> 
          </div>
          <div class="${this.customStyle?.panelText ? this.customStyle.panelText : `${this.checkTailwindPrefix('dark:text-gray-300')}`} ${this.checkTailwindPrefix('text-xs md:text-md')}">${v.description}</div>
            ${this.returnServices(k)}
          </div>
        </div>`;
        setTimeout(() => {
          document.getElementById(`toggle-${k}-right`) && document.getElementById(`toggle-${k}-right`).addEventListener('click', () => {
            this.changeSettings(`${k}`);
          });
          let getLabel = document.getElementById(`toggle-${k}`);

          if (getLabel) {
            getLabel.addEventListener("keyup", e => {
              if (e.keyCode === 13) {
                e.preventDefault();
                this.changeSettings(`${k}`);
              }
            });
          }

          if (this.config.layout == 'style8') this.changeToggle();
        }, 1);
      }
    }

    return arr;
  }
  /**
  * Generate panel
  */


  managePreferences() {
    document.body.classList.add(this.checkTailwindPrefix('overflow-hidden'));
    this.closeBanner();
    let panelExists = document.querySelector("#preferenceDiv") != null;

    if (!panelExists) {
      let cookiePanel = document.createElement("div");
      cookiePanel.innerHTML = `
      <div id="preferenceDiv" style="background-color: rgba(0,0,0,0.6);z-index:9999 !important;" class="${this.checkTailwindPrefix(' w-full min-h-screen top-0 fixed flex flex-col p-6 shadow-2xl items-center justify-center mx-auto transition duration-700 ease-in-out')} ${this.panelHeader ? '' : null} ">
            <div id="jgc-custom-header" class="${this.checkTailwindPrefix('w-full')}"></div>
              <div class="${this.panel?.bgColor ? this.panel.bgColor : `${this.checkTailwindPrefix('bg-white dark:bg-gray-800')}`} ${this.checkTailwindPrefix('max-w-3xl w-full')} ${this.panel?.padding == false ? '' : `${this.checkTailwindPrefix('p-2')}`}">
                <div class="${this.customStyle?.panelHeader ? this.customStyle.panelHeader : `${this.checkTailwindPrefix('md:flex justify-between px-4 py-4')}`}">
                  <h2 class="${this.customStyle?.panelTitle ? this.customStyle.panelTitle : this.checkTailwindPrefix('dark:text-gray-300 leading-snug')} ${this.checkTailwindPrefix('text-xl font-bold')}">
                    ${this.text?.panelTitle ? this.text.panelTitle : ''} 
                  </h2>
                  <div class="${this.checkTailwindPrefix('space-x-1 md:mt-0 mt-4')}">
                    <button role="button" id="closePreferencePanel" type="button" class="${this.customStyle?.saveButton ? this.customStyle.saveButton : `${this.checkTailwindPrefix('px-3 py-1 uppercase font-bold tracking-wide text-xs z-index-10 relative rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer text-green-600 ring-1 ring-green-600')}`} ">
                      ${this.text?.saveButton ? this.text.saveButton : this.locale.saveAndContinue}  
                    </button>
                    <button role="button" id="closePreferencePanelAcceptAll" type="button" class="${this.customStyle?.saveAllButton ? this.customStyle.saveAllButton : `${this.checkTailwindPrefix('px-3 py-1 uppercase font-bold tracking-wide text-xs z-index-10 relative rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer text-green-600 ring-1 ring-green-600')}`}  ">
                      ${this.text?.saveAllButton ? this.text.saveAllButton : this.locale.saveAndContinueAcceptAll}  
                    </button>
                  </div>
                </div>
                <div>
                  <div style="overflow-y: scroll; -webkit-overflow-scrolling: touch; max-height: calc(100vh - 400px);" class="${this.panel && this.panel.stripes ? `${this.panel.stripes.odd} ${this.panel.stripes.even}` : this.checkTailwindPrefix('space-y-4 overflow-y-auto')} ${this.checkTailwindPrefix('text-sm py-4')}"> 
                    ${this.generateOptions()}
                  </div> 
                </div>
              </div>
              <div id="jgc-custom-footer" class="${this.checkTailwindPrefix('w-full')}"></div>
            </div>
      </div>
      `;
      document.body.appendChild(cookiePanel);
      if (!this.isEmpty(document.getElementById('jgc-panel-header'))) document.getElementById('jgc-custom-header').innerHTML = this.panelHeader;
      if (!this.isEmpty(document.getElementById('jgc-panel-footer'))) document.getElementById('jgc-custom-footer').innerHTML = this.panelFooter;
      document.getElementById('closePreferencePanel').addEventListener('click', () => this.closePreferencePanel());
      document.getElementById('closePreferencePanelAcceptAll').addEventListener('click', () => this.closePreferencePanelAndSaveAll());
    } else {
      document.querySelector("#preferenceDiv").classList.remove(this.checkTailwindPrefix('hidden'));
    }

    this.changeToggle();
  }
  /**
  * Fire the settings panel
  */


  managePreferencesLink(colors) {
    let createButton = document.createElement("div");
    return createButton.innerHTML = `
    <button id="openPanel" style=${this.customStyle?.preferencesText ? '' : 'font-size:0.6rem'} ;" class="${colors ? colors : `${this.customStyle?.preferencesText ? this.customStyle.preferencesText : this.checkTailwindPrefix('font-bold uppercase dark:text-white')}`}">
      ${this.text.preferencesText ?? 'Manage and choose cookies'} 
    </button>`;
  }
  /**
  * Open panel
  */


  openPanel() {
    let getPreferences = this.getCookie('JgcPreferences');
    let refreshed = getPreferences['refresh'];

    if (refreshed == null && this.panel && this.panel.open) {
      let banner = document.getElementById('bannerContent');

      if (this.config.layout == 'style8') {
        // Style8 is a bit particular...
        banner.remove();
        setTimeout(() => {
          this.managePreferences();
        }, 200);
      } else {
        this.managePreferences();
      }
    }
  }
  /**
  *  Add the click event to fire the settings panel 
  */


  managePreferencesLinkListener() {
    this.refreshLocalStorage();
    const preferenceButton = document.getElementById('openPanel');
    preferenceButton.addEventListener('click', () => this.managePreferences());
  }
  /**
  * UTILITY
  * Check if a value is null, undefined or ''
  */


  isEmpty(value) {
    return value === null || typeof value === 'undefined' || value === '';
  }
  /**
  * UTILITY
  * Check if a value is a string
  */


  isString(value, key) {
    if (typeof value === 'string' || value instanceof String) {
      return value;
    } else {
      throw `: "${key}" is not valid, must be a string.`;
    }
  }
  /**
  * UTILITY
  * Check if a value is a boolean
  */


  isBoolean(value, key) {
    if (typeof value == "boolean") {
      return value;
    } else {
      throw `: "${key}" is not valid, must be a boolean.`;
    }
  }
  /**
  * UTILITY
  * Check if a value is a function
  */


  isFunction(value, key) {
    if (typeof value == "function") {
      return value;
    } else {
      throw `: "${key}" is not valid, must be a function.`;
    }
  }
  /**
  * UTILITY
  * Get cookie
  */


  getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
      let [k, v] = el.split('=');
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


  getCookieId(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
      let [k, v] = el.split('=');
      cookie[k.trim()] = v;
    });

    if (cookie[name]) {
      const cookieName = JSON.parse(cookie[name]);
      return cookieName['id'];
    } else {
      return null;
    }
  }
  /**
  * UTILITY
  * Get cookie (useful for a callback from the frontend)
  */


  getCookiePreferences(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
      let [k, v] = el.split('=');
      cookie[k.trim()] = v;
    });

    if (cookie[name]) {
      const cookieName = JSON.parse(cookie[name]);
      return cookieName['preferences'];
    } else {
      return null;
    }
  }
  /**
  * UTILITY
  * Save cookie
  */


  saveCookie(saveObj) {
    let checkPreferences = this.getCookie('JgcPreferences');

    if (checkPreferences && checkPreferences['duration']) {
      const expiration = checkPreferences['duration'].expiry;
      document.cookie = `JgcPreferences=${JSON.stringify(saveObj)};expires= ${expiration};path=/;SameSite=Strict`;
    } else {
      document.cookie = `JgcPreferences=${JSON.stringify(saveObj)};path=/;SameSite=Strict;`;
    }
  }
  /**
  * UTILITY
  * Intercept the pressure of the "enter" key
  */


  addEnterAction(el) {
    document.getElementById(el).addEventListener('keyup', e => {
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


  refreshLocalStorage() {
    let checkPreferences = this.getCookie('JgcPreferences');
    let saveObj = { ...checkPreferences['preferences']
    };
    localStorage.setItem("JgcPreferences", JSON.stringify(saveObj));
  }
  /**
  * Close the settings panel and reload the page
  */


  closePreferencePanel() {
    this.activateToggledCookies();
    this.removeScript(false);
    let date = new Date();
    date.setTime(date.getTime() + this.cookieTimeout);
    const item = {
      value: "1",
      expiry: date
    };
    let checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));
    let getPreferences = this.getCookie('JgcPreferences');
    let saveObj = { ...getPreferences,
      preferences: checkPreferencesFromStorage,
      duration: item
    };
    this.saveCookie(saveObj);
    this.closeBanner(); // And yes, we need to refresh the page to activate specific cookies. Maybe this part can be improved.

    window.location.reload();
  }
  /**
  * Change the local storage on "Save All"
  */


  closePreferencePanelAndSaveAll() {
    let checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));
    let preferences = {};

    for (let [k, v] of Object.entries(checkPreferencesFromStorage)) preferences[k] = true;

    localStorage.setItem("JgcPreferences", JSON.stringify(preferences));
    if (document.getElementById('preferenceDiv')) this.closePreferencePanel();
  }
  /**
  * Enable scripts
  */


  activateToggledCookies() {
    let checkPreferences = this.getCookie('JgcPreferences');

    for (let [k, v] of Object.entries(checkPreferences['preferences'])) {
      let tagToCheck = `[data-jgc-tag="${k}"]`,
          cookieExists = document.querySelectorAll(tagToCheck);

      if (v == true) {
        this.replaceScripts(tagToCheck);
      } else {
        cookieExists.forEach(element => {
          let parent = element.parentNode;

          if (parent.hasAttribute('data-jgc-placeholder')) {
            this.generateIframeDivs(element);
          } else {
            element.classList.add(this.checkTailwindPrefix('hidden'));
            element.innerHTML = '';
          }
        });
      }
    }

    if (checkPreferences['darkBackground']) {
      let saveObj = { ...checkPreferences,
        darkBackground: false
      };
      this.saveCookie(saveObj);
      const modal = document.getElementById('jgcModal');
      if (modal) modal.classList.add(this.checkTailwindPrefix('hidden'));
    }
  }
  /**
  * Grab the custom tags and write an item to local storage
  */


  setPreferences() {
    let preferences = {};

    for (let [k, v] of Object.entries(this.getCustomCookies)) preferences[k] = true;

    let getPreferences = this.getCookie('JgcPreferences');
    let saveObj = { ...getPreferences,
      preferences
    };
    this.saveCookie(saveObj);
  }
  /**
  * Change toggles and settings
  */


  changeSettings(toggleClicked) {
    let checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));
    checkPreferencesFromStorage[toggleClicked] = !checkPreferencesFromStorage[toggleClicked];
    this.animateToggle(checkPreferencesFromStorage[toggleClicked], toggleClicked);
    let saveObj = { ...checkPreferencesFromStorage
    };
    localStorage.setItem("JgcPreferences", JSON.stringify(saveObj));
  }
  /**
  * Animate toggles
  */


  animateToggle(val, buttonType) {
    let toggle = document.getElementById('toggle-' + buttonType + '-div');
    let toggleRight = document.getElementById('toggle-' + buttonType + '-right');
    let toggleNecessary = document.getElementById('toggle-necessary-right-fixed');
    const bgColor = this.customStyle?.toggles ? this.customStyle.toggles : this.checkTailwindPrefix('bg-green-200');

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


  changeToggle() {
    let checkPreferences = this.getCookie('JgcPreferences');

    for (let [k, v] of Object.entries(checkPreferences['preferences'])) if (v == true) this.animateToggle(true, `${k}`);
  }
  /**
  * Show banner
  */


  showBanner = () => this.banner.style.display = "";
  /**
  * Close banner
  */

  closeBanner() {
    let banner = document.getElementById('bannerContent');

    if (banner) {
      banner.classList.add(this.checkTailwindPrefix('opacity-0'), this.checkTailwindPrefix('pointer-events-none'));

      if (this.config.layout != 'style8') {
        // "style8" is a little special. I can not use animations here because the toggle switches repeat in 2 different areas.
        setTimeout(() => {
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
  closeBannerWithButton() {
    this.bannerConfig.closeButtonAccept ? this.yesCookies() : this.noCookies();
  }
  /**
  * Control whether the background should be dark or not
  */


  checkBackground() {
    let getPreferences = this.getCookie('JgcPreferences');

    if (this.bannerConfig.backgroundDark != false) {
      if (getPreferences['darkBackground'] == false || getPreferences['darkBackground'] && !getPreferences['duration']) {
        var modal = document.createElement("div");
        modal.id = 'jgcModal';
        modal.className = this.checkTailwindPrefix('bg-black bg-opacity-80 fixed min-h-screen top-0 w-full z-index-50');
        document.body.appendChild(modal);
        let saveObj = { ...getPreferences,
          darkBackground: true
        };
        this.saveCookie(saveObj);
      }
    }
  }
  /**
  * Return icons (if any)
  */


  returnIcon() {
    if (this.bannerConfig.icon && this.darkMode != true) {
      return `<div><img class="${this.checkTailwindPrefix('w-4 h-4')}" src="${this.bannerConfig.icon}" /></div>`;
    } else if (this.bannerConfig.icon && this.darkMode == true) {
      return `<div><img class="${this.checkTailwindPrefix('w-4 h-4')}" src="${this.bannerConfig.iconDark}" /></div>`;
    } else if (this.bannerConfig.icon == null) {
      return ``;
    }
  }
  /**
  * Return logo (if any)
  */


  returnLogo() {
    return `${this.bannerConfig.logo ? `<img class="${this.bannerConfig.logoClasses ? this.bannerConfig.logoClasses : ''}" src="${this.bannerConfig.logo}" />` : ''}`;
  }
  /**
  * Animate banner
  */


  makeBannerAnimation() {
    if (this.bannerConfig.animation) {
      const bannerDiv = document.getElementById('bannerContent');

      switch (this.bannerConfig?.position || 'bottom') {
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
            setTimeout(() => {
              bannerDiv.classList.remove(this.checkTailwindPrefix('-translate-y-full'));
              bannerDiv.classList.add(this.checkTailwindPrefix('translate-y-0'));
            }, 300);
            break;
          }

        case 'bottom':
          if (bannerDiv) {
            bannerDiv.classList.add(this.checkTailwindPrefix('translate-y-full'));
            setTimeout(() => {
              // bannerDiv.classList.add(this.checkTailwindPrefix('mb-4'))
              bannerDiv.classList.remove(this.checkTailwindPrefix('translate-y-full'));
            }, 300);
          }

          break;
      }
    }
  }
  /**
  * Make banner buttons
  */


  generateButtons() {
    document.getElementById('yesCookies').addEventListener('click', () => this.yesCookies());
    this.addEnterAction('yesCookies');

    if (this.bannerConfig?.disableReject == false) {
      document.getElementById('noCookies').addEventListener('click', () => this.noCookies());
      this.addEnterAction('noCookies');
    }

    this.managePreferencesLinkListener();
  }
  /**
  * Get the max width of the banner
  */


  getMaxWidth(defaultValue) {
    if (this.bannerConfig?.maxWidth) {
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


  loadBannerLayout(style) {
    switch (style) {
      case "style1":
        this.positions = {
          "top": this.checkTailwindPrefix("justify-top items-start top-0"),
          "center": this.checkTailwindPrefix("mx-auto top-1/2 -translate-y-1/2"),
          "bottom": this.checkTailwindPrefix("justify-end items-center bottom-0")
        };
        this.banner = document.createElement("div");
        this.banner.style.display = "none";
        this.banner.innerHTML = `<div id="bannerContent" style="${this.bannerConfig.backgroundImage ? `background-size:cover; background-image:url(${this.bannerConfig.backgroundImage})` : ''}" 
              class="
              ${this.positions[this.bannerConfig.position || 'bottom']} 
              ${this.bannerConfig.backgroundColor} 
              ${this.bannerConfig.backgroundImage ? `${this.bannerConfig.backgroundColor} ${this.checkTailwindPrefix('p-2')}` : `${this.bannerConfig.innerBackgroundImage ? '' : this.checkTailwindPrefix('p-6')}`}
              ${this.getMaxWidth('max-w-sm')}
              ${this.checkTailwindPrefix('fixed shadow-2xl md:flex md:flex-col md:space-x-1 right-0 md:mr-[2%] transition duration-700 ease-in-out z-[99999] rounded')}">
              <div class="${this.checkTailwindPrefix('space-y-2 flex flex-col')} ${this.bannerConfig.backgroundImage && !this.bannerConfig.innerBackgroundImage ? `${this.bannerConfig.backgroundColor ?? ''}  ${this.checkTailwindPrefix('p-4')}` : ''}
                ${this.bannerConfig.innerBackgroundImage && !this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('pb-8') : ''} 
                ${this.bannerConfig.innerBackgroundImage && this.bannerConfig.backgroundImage ? `${this.checkTailwindPrefix('pb-8')} ${this.bannerConfig.backgroundColor ?? ''}` : ''}
                ">
                ${this.bannerConfig.innerBackgroundImage ? `<img class="${this.checkTailwindPrefix('md:rounded-t')}" src="${this.bannerConfig.innerBackgroundImage}" />` : ''}
                ${this.returnLogo()}
                <div class="${this.checkTailwindPrefix('flex w-full')}" >
                    <div class="${this.checkTailwindPrefix('flex items-center space-x-1')} ${this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('px-6') : ''}">
                      ${this.returnIcon()}
                      <h4 class="${this.customStyle?.bannerTitle ?? this.checkTailwindPrefix('text-xl font-bold dark:text-white')}">${this.bannerConfig.title}</h4>
                    </div>  
                    ${this.bannerConfig.closeButton ? `<button id="jgc-close-button" class="${this.bannerConfig.logo ? `${this.checkTailwindPrefix('absolute top-2 right-4')}` : ``}   ${this.customStyle?.closeButton ? `${this.customStyle.closeButton}` : `${this.checkTailwindPrefix('dark:text-white text-xl ml-auto')}`}">&times;</button>` : ''}
                </div>
                <div class="${this.customStyle?.bannerText ? this.customStyle.bannerText : this.checkTailwindPrefix('dark:text-white')} ${this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('px-6') : ''}">
                  <div>${this.bannerText ? this.bannerText : `${this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription}`}<br/></div>
                  <div>${this.bannerLink ? this.bannerLink : `${this.locale.bannerLinkDescription} <a class="${this.customStyle?.privacyLink ?? `${this.checkTailwindPrefix('dark:decoration-sky-500 dark:underline font-bold text-black dark:text-white')}`}" target="_blank" href="${this.config.privacyLink}"> ${this.text?.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel}</a>`}</div>
                </div>
                <div class="${this.checkTailwindPrefix('mt-2 flex flex-col')} ${this.bannerConfig.innerBackgroundImage && this.checkTailwindPrefix('px-6')}">
                  <div class="${this.checkTailwindPrefix('flex space-x-2')}">
                    <button role="button" tabindex="0" type="button" id="yesCookies" class="${this.style.yesCookies}">${this.bannerConfig.shortText ? this.locale.acceptShortText : this.text.acceptText}</button>
                    ${this.bannerConfig?.disableReject == false ? `<button role="button" tabindex="0" type="button" id="noCookies" class="${this.style.noCookies}">${this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText}</button>` : ''}
                  </div>
                  <div>${this.managePreferencesLink()}</div>
                </div>
              </div>
        </div>`;
        document.body.appendChild(this.banner);
        this.makeBannerAnimation();
        if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', () => this.closeBannerWithButton());
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
        this.banner.innerHTML = `
        <div id="bannerContent"
        style="${this.bannerConfig.backgroundImage && `background-size:cover; background-image:url(${this.bannerConfig.backgroundImage})`}"
        class="${this.positions[this.bannerConfig.position || 'bottom']}
          ${this.bannerConfig.backgroundColor} 
          ${this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('p-2') : this.checkTailwindPrefix('p-6')}
          ${this.getMaxWidth('max-w-5xl')}
            ${this.checkTailwindPrefix('fixed mx-auto md:left-1/2 md:-translate-x-1/2 right-0 shadow-2xl md:space-x-1 md:mr-[2%] md:mb-[1.5%]  transition duration-700 ease-in-out z-[999] md:rounded-full')}">
              <div class="${this.checkTailwindPrefix('flex justify-center items-center flex-col relative')}
              ${this.bannerConfig.backgroundImage ? `${this.bannerConfig.backgroundColor} ${this.checkTailwindPrefix('p-6')}` : this.checkTailwindPrefix('p-4')}">
              ${this.returnLogo()}
              ${this.bannerConfig.closeButton ? `<button id="jgc-close-button" class="${this.customStyle?.closeButton ? this.customStyle.closeButton : this.checkTailwindPrefix('text-white')} ${this.customStyle?.closeButton ? this.customStyle.closeButton : this.checkTailwindPrefix('bg-black dark:bg-white')}  
              ${this.checkTailwindPrefix('rounded-full w-6 h-6 self-end absolute -top-5 right-20 transform -translate-y-4 dark:text-black dark:ring-2 dark:ring-gray-800')}">
              &times;</button>` : ''}
                <div class="${this.checkTailwindPrefix('flex items-center space-x-2 mb-4 dark:text-white')}">
                  ${this.returnIcon()}
                  <h4 class="${this.checkTailwindPrefix('text-xl font-bold')} ${this.customStyle?.bannerTitle ?? ''}">${this.bannerConfig.title}</h4>
                </div>
                <div class="${this.customStyle?.bannerText ? this.customStyle.bannerText : `${this.checkTailwindPrefix('dark:text-gray-300')}`} ${this.checkTailwindPrefix('text-sm text-center')}">
                  <div>${this.bannerText ? this.bannerText : `${this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription}`} <br/></div>
                  <div>${this.bannerLink ?? `<div>${this.locale.bannerLinkDescription} <a class="${this.checkTailwindPrefix('font-bold')}" target="_blank" href="${this.config.privacyLink}"> ${this.text?.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel}</a></div>`}  </div>
                </div>
                <div class="${this.checkTailwindPrefix('flex justify-center space-x-2 mt-6')}">
                  <button role="button" tabindex="0" type="button" id="yesCookies" class="${this.style.yesCookies2}">${this.bannerConfig.shortText ? this.locale.acceptShortText : this.text.acceptText}</button>
                  <button role="button" tabindex="0" type="button" id="noCookies" class="${this.style.noCookies2}">${this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText}</button>
                </div>
                <div class="${this.checkTailwindPrefix('mt-2')}">${this.managePreferencesLink()}</div>
              </div>
        </div>
        `;
        document.body.appendChild(this.banner);
        this.makeBannerAnimation();
        if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', () => this.closeBannerWithButton());
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
        this.banner.innerHTML = `
        <div id="bannerContent"
        style="${this.bannerConfig.backgroundImage && `background-size:cover; background-image:url(${this.bannerConfig.backgroundImage})`}"
        class="
        ${this.positions[this.bannerConfig.position || 'bottom']}
        ${this.bannerConfig.backgroundColor} 

        ${this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('p-2') : this.checkTailwindPrefix('p-6')} 
        ${this.checkTailwindPrefix('fixed shadow-2xl mx-auto md:left-1/2 md:-translate-x-1/2 md:mb-[1.5%]  transition duration-700 ease-in-out z-[999] md:rounded-full')}">
              <div class="${this.checkTailwindPrefix('md:grid grid-cols-5 relative justify-between items-center md:space-x-4')} 
              ${this.bannerConfig.backgroundImage ? `${this.bannerConfig.backgroundColor} ${this.checkTailwindPrefix('p-6 rounded-full')}` : this.checkTailwindPrefix('p-4')}">
                <div class="${this.customStyle?.bannerText ? this.customStyle.bannerText : `${this.checkTailwindPrefix('dark:text-gray-300')}`} 
                  ${this.checkTailwindPrefix('text-xs mt-2 md:mt-0 flex flex-col items-start px-2 col-span-3')}">
                  ${this.returnLogo()}
                  <div class="${this.checkTailwindPrefix('flex items-center space-x-1 mb-1')}">
                    ${this.returnIcon()}
                    <h4 class="${this.checkTailwindPrefix('text-xl font-bold leading-tight')} ${this.customStyle?.bannerTitle ?? ''}">${this.bannerConfig.title}</h4>
                  </div>
                  ${this.bannerText ? this.bannerText : `${this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription}`} <br/>  
                  ${this.bannerLink ?? `<div>${this.locale.bannerLinkDescription} <a class="${this.checkTailwindPrefix('font-bold')}" target="_blank" href="${this.config.privacyLink}"> ${this.text?.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel}</a></div>`}  
                </div>
               <div class="${this.checkTailwindPrefix('col-span-2 flex items-center justify-center')}">
                  ${this.bannerConfig.closeButton ? `<button id="jgc-close-button" class="${this.customStyle?.customStyle ? this.customStyle.customStyle : this.checkTailwindPrefix('text-white')} 
                  ${this.customStyle?.closeButton ? this.customStyle.closeButton : this.checkTailwindPrefix('bg-black')} 
                  ${this.checkTailwindPrefix('rounded-full w-6 h-6 self-end absolute -top-4 right-6 transform -translate-y-4')}">&times;</button>` : ''}
               <div class="${this.checkTailwindPrefix('flex flex-col mt-4 md:mt-0 ')}">
                 <div class="${this.checkTailwindPrefix('space-x-3 flex')}">
                   <button role="button" tabindex="0" type="button" id="yesCookies" class="${this.style.yesCookies3}">${this.bannerConfig.shortText ? this.bannerConfig.shortText : this.text.acceptText}</button>
                   <button role="button" tabindex="0" type="button" id="noCookies" class="${this.style.noCookies3}">${this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText}</button>
                 </div>
                 <div class="${this.checkTailwindPrefix('mt-2 flex justify-center')}">${this.managePreferencesLink()}</div>
               </div>
               </div>
              </div>
        </div>
        `;
        document.body.appendChild(this.banner);
        this.makeBannerAnimation();
        if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', () => this.closeBannerWithButton());
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
        this.banner.innerHTML = `
          <div id="bannerContent" 
          style="background-color: rgba(0,0,0,0.7);"
          class="${this.positions[this.bannerConfig.position || 'center']}
        ${this.checkTailwindPrefix('w-full min-h-screen fixed flex flex-col shadow-2xl top-0 transition duration-700 ease-in-out z-[999]')}">
          ${this.bannerConfig.backgroundImage ? `
                <div class="${this.checkTailwindPrefix('p-2')}" style="background-size:cover; background-image:url(${this.bannerConfig.backgroundImage})">` : ''}
                <div class="${this.bannerConfig.backgroundColor}  bg-gray-300 
                ${this.getMaxWidth('max-w-xl')}
                ${this.checkTailwindPrefix('relative  flex flex-col justify-between items-center')}">
                  ${this.bannerConfig.innerBackgroundImage ? `<img class="${this.checkTailwindPrefix('md:rounded-t')}" src="${this.bannerConfig.innerBackgroundImage}" />` : ''}
                  <div class="${this.checkTailwindPrefix('flex flex-col justify-start w-full px-6')} ${this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('pb-6') : this.checkTailwindPrefix('py-6')} ${this.checkTailwindPrefix('space-x-1"')}>
                  ${this.returnLogo()}
                  ${this.bannerConfig.closeButton ? `<button id="jgc-close-button" class="${this.customStyle?.closeButton ? this.customStyle.closeButton : this.checkTailwindPrefix('text-white')} 
                  ${this.customStyle?.closeButton ? this.customStyle.closeButton : this.checkTailwindPrefix('bg-black')} ${this.checkTailwindPrefix('rounded-full w-6 h-6 self-end absolute top-0 right-0 transform -translate-y-4 translate-x-2')}">&times;</button>` : ''} 
                    <div class="${this.checkTailwindPrefix('flex space-x-2 items-center')}">
                    ${this.returnIcon()}
                    <h4 class="${this.customStyle?.bannerTitle ?? this.checkTailwindPrefix('text-2xl font-bold dark:text-white')}">${this.bannerConfig.title}</h4>
                    </div>
                  </div>
                  <div class="${this.customStyle?.bannerText ? this.customStyle.bannerText : `${this.checkTailwindPrefix('dark:text-gray-300')}`} ${this.checkTailwindPrefix('flex flex-col text-sm px-6 pb-6')}">
                    ${this.bannerText ? this.bannerText : `${this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription}`} <br/>  
                    ${this.bannerLink ? this.bannerLink : `${this.locale.bannerLinkDescription} <a class="${this.checkTailwindPrefix('font-bold')}" target="_blank" href="${this.config.privacyLink}"> ${this.text?.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel}</a>`}  
                  </div>  
                  <div class="${this.checkTailwindPrefix('grid grid-cols-2 bg-black w-full divide-x divide-gray-300 dark:divide-gray-700')}">
                  <div class="${this.checkTailwindPrefix('group')}">
                      <div class="${this.customStyle?.accept ? this.customStyle.accept : this.checkTailwindPrefix('bg-gray-300 dark:bg-gray-800')} 
                        ${this.checkTailwindPrefix('py-4 flex items-center justify-center transition duration-500 group-hover:scale-110 relative hover:z-10')}" style="box-shadow: 0px 14px 20px 20px rgba(0, 0, 0, 10%);">
                        <button type="button" role="button" tabindex="0" id="yesCookies" class="${this.style.yesCookies4} group-hover:text-green-800 transition duration-500">
                          ${this.bannerConfig.shortText ? this.bannerConfig.shortText : this.text.acceptText}    
                        </button>
                      </div>
                    </div>
                    <div class="${this.checkTailwindPrefix('group')}">
                      <div class="${this.customStyle?.reject ? this.customStyle.reject : this.checkTailwindPrefix('bg-gray-300 dark:bg-gray-800')}
                        ${this.checkTailwindPrefix('py-4 flex items-center justify-center  transition duration-500 hover:scale-110 relative hover:z-10')}" style="box-shadow: 0px 14px 20px 5px rgb(0, 0, 0, 10%);">
                        <button role="button" tabindex="0" type="button" id="noCookies" class="${this.style.noCookies4} group-hover:text-red-800 transition duration-500">
                          ${this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText}    
                        </button>
                      </div>
                    </div> 
                  </div>
                  <div class="${this.checkTailwindPrefix('bg-gradient-to-r from-gray-300 dark:from-gray-600 to-gray-400 dark:to-gray-800 w-full flex justify-center py-2')}">
                    ${this.managePreferencesLink(this.checkTailwindPrefix('text-white'))}
                  </div>
                </div>
                ${this.bannerConfig.backgroundImage ? `</div>` : ''}
          </div>
          `;
        document.body.appendChild(this.banner);
        if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', () => this.closeBannerWithButton());
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
        this.banner.innerHTML = `<div style="${this.bannerConfig.backgroundImage && `background-size:cover; background-image:url(${this.bannerConfig.backgroundImage})`}"
          id="bannerContent" class="
          ${this.positions[this.bannerConfig.position || 'bottom']}
          ${this.bannerConfig.backgroundColor}
          ${this.bannerConfig.innerBackgroundImage ? `${this.checkTailwindPrefix("grid grid-cols-5")}  ${this.bannerConfig.backgroundImage ? '' : this.checkTailwindPrefix('gap-6')}` : this.checkTailwindPrefix('flex flex-col')}
          ${this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('p-2') : this.checkTailwindPrefix('px-6 items-start justify-center py-8')} 
          ${this.checkTailwindPrefix('sm:w-full md:w-full w-full fixed shadow-2xl  transition duration-700 ease-in-out dark:bg-gray-800 z-[999]')}">
          ${this.bannerConfig.closeButton ? `<button id="jgc-close-button" class="${this.customStyle?.closeButton ? this.customStyle.closeButton : this.checkTailwindPrefix('text-black dark:text-white')} 
          ${this.customStyle?.closeButton ? this.customStyle.closeButton : ''} ${this.checkTailwindPrefix('rounded-full text-2xl self-end')}">&times;</button>` : ''}
          ${this.bannerConfig.innerBackgroundImage ? `<img class="${this.checkTailwindPrefix('md:rounded-t col-span-1')}" src="${this.bannerConfig.innerBackgroundImage}" />` : ''}
              <div class="
              ${this.bannerConfig.backgroundImage ? `${this.bannerConfig.backgroundColor} ${this.checkTailwindPrefix('w-full p-4')}` : ''} 
              ${this.bannerConfig.innerBackgroundImage && this.checkTailwindPrefix('col-span-4')}
              ${this.checkTailwindPrefix('flex flex-col items-start space-y-3')}">                  
                  <div>
                    <div class="${this.checkTailwindPrefix('flex flex-col items-start space-x-1 w-full')}">
                        ${this.returnLogo()}
                      <div class="${this.checkTailwindPrefix('flex space-x-2 items-center')}"> 
                        ${this.returnIcon()}
                        <h4 class="${this.customStyle?.bannerTitle ?? this.checkTailwindPrefix('text-2xl font-semibold dark:text-white')}">${this.bannerConfig.title}</h4>   
                      </div>                  
                    </div>
                    <div class="${this.customStyle?.bannerText ? this.customStyle.bannerText : `${this.checkTailwindPrefix('dark:text-gray-300')}`}">
                      ${this.bannerText ? this.bannerText : `${this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription}`}<br/>  
                      ${this.bannerLink ? this.bannerLink : `${this.locale.bannerLinkDescription} 
                      <a class="${this.checkTailwindPrefix('font-bold')}" target="_blank" href="${this.config.privacyLink}"> ${this.text?.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel}</a>.`}  
                    </div>
                  </div>                                                      
                  <div class="${this.checkTailwindPrefix('flex w-full space-x-2')}">
                    <div class="${this.customStyle?.accept ? this.customStyle.accept : this.checkTailwindPrefix('bg-black dark:bg-gray-600')} 
                      ${this.checkTailwindPrefix('py-2 rounded-full flex items-center justify-center shadow-2xl')}">
                      <button type="button" role="button" tabindex="0" id="yesCookies" class="${this.style.yesCookies5}">
                        ${this.bannerConfig.shortText ? this.locale.acceptShortText : this.text.acceptText}    
                      </button>
                    </div>
                    <div class="${this.customStyle?.reject ? this.customStyle.reject : this.checkTailwindPrefix('dark:bg-gray-600')} 
                    ${this.checkTailwindPrefix('py-2 border dark:border-0 border-red-200 rounded-full flex items-center justify-center shadow-2xl')}">
                      <button role="button" tabindex="0" type="button" id="noCookies" class="${this.style.noCookies5}"> ${this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText} </button>
                    </div>
                  </div>
                  ${this.managePreferencesLink()}
                </div>
          </div>
          `;
        document.body.appendChild(this.banner);
        this.makeBannerAnimation();
        if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', () => this.closeBannerWithButton());
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
        this.banner.innerHTML = `
        <div 
        id="bannerContent" class="
        ${this.positions[this.bannerConfig.position ?? 'center']}
        ${this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('p-2') : this.checkTailwindPrefix('p-6')}
      ${this.checkTailwindPrefix('bg-black bg-opacity-70 w-full min-h-screen fixed flex flex-col top-0 shadow-2xl mx-auto transition duration-700 ease-in-out z-[999]')}">
        ${this.bannerConfig.backgroundImage ? `
              <div class="${this.checkTailwindPrefix('p-2')} ${this.checkTailwindPrefix('md:rounded-xl')}" 
              style="background-size:cover; background-image:url(${this.bannerConfig.backgroundImage})">` : ''}
              ${this.bannerConfig.closeButton ? `<button id="jgc-close-button" class="${this.checkTailwindPrefix('rounded-full w-6 h-6 self-end absolute top-4 right-6')} ${this.customStyle?.closeButton ? this.customStyle.closeButton : this.checkTailwindPrefix('text-white')}">&times;</button>` : ''} 
              <div class="${this.bannerConfig.backgroundColor} 
              ${this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('pb-4') : this.checkTailwindPrefix('py-4')}
              ${this.getMaxWidth('max-w-xl')}
              ${this.checkTailwindPrefix('flex flex-col justify-between items-center md:rounded-xl')}">
                ${this.bannerConfig.innerBackgroundImage ? `<img class="${this.checkTailwindPrefix('md:rounded-t')}" src="${this.bannerConfig.innerBackgroundImage}" />` : ''}
                <div class="${this.checkTailwindPrefix('flex flex-col items-center mt-4')}">
                  ${this.returnLogo()}
                  <div class="${this.checkTailwindPrefix('flex space-x-2 items-center')}">
                    ${this.returnIcon()}
                    <h4 class="${this.customStyle?.bannerTitle ?? this.checkTailwindPrefix('text-3xl font-bold dark:text-white')}">${this.bannerConfig.title}</h4>
                  </div>
                </div>                            
                <div class="${this.customStyle?.bannerText ? this.customStyle.bannerText : `${this.checkTailwindPrefix('dark:text-gray-300')}`} 
                ${this.checkTailwindPrefix('flex flex-col text-xs px-12 text-center mt-2')}">
                  ${this.bannerText ? this.bannerText : `${this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription}`} <br/>  
                  ${this.bannerLink ?? `<div>${this.locale.bannerLinkDescription} <a class="jgc-font-bold" target="_blank" href="${this.config.privacyLink}"> ${this.text?.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel}</a></div>`}  
                </div>
                <div id="bannerButtons" class="${this.checkTailwindPrefix('flex flex-col items-center space-y-2 tracking-tighter mt-4 mb-2')}">
                  <div class="${this.customStyle?.accept ? this.customStyle.accept : this.checkTailwindPrefix('bg-black dark:bg-gray-900')} ${this.checkTailwindPrefix('rounded-full')}">
                    <button type="button" role="button" tabindex="0" id="yesCookies" class="${this.style.yesCookies6}">${this.bannerConfig.shortText ? this.locale.acceptShortText : this.text.acceptText}</button>
                  </div>
                </div>
              </div>
              ${this.bannerConfig.backgroundImage ? `</div>` : ''}
              <div class="${this.checkTailwindPrefix('mt-2')}">${this.managePreferencesLink(this.checkTailwindPrefix('text-white underline'))}</div>
        </div>
        `;
        document.body.appendChild(this.banner);
        if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', () => this.closeBannerWithButton());
        document.getElementById('yesCookies').addEventListener('click', () => this.yesCookies());
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
        this.banner.innerHTML = `
        <div id="bannerContent" style="${this.bannerConfig.backgroundImage ? `background-size:cover; background-image:url(${this.bannerConfig.backgroundImage})` : ''}" 
              class="
              ${this.positions[this.bannerConfig.position || 'bottom']}
              ${this.bannerConfig.backgroundColor} 
              ${this.bannerConfig.backgroundImage ? `${this.bannerConfig.backgroundColor} ${this.checkTailwindPrefix('p-2')}` : `${this.bannerConfig.innerBackgroundImage ? '' : this.checkTailwindPrefix('p-6')}`}
              ${this.getMaxWidth('max-w-xl')}
              ${this.checkTailwindPrefix('translate-y-full origin-bottom fixed bg-opacity-95 right-0 shadow-2xl md:flex md:flex-col md:space-x-1  transition duration-700 ease-in-out z-[999] rounded')}">
              ${this.bannerConfig.closeButton ? `<button id="jgc-close-button" class="${this.customStyle?.closeButton}  
              ${this.checkTailwindPrefix('text-sm bg-gray-800 px-3 py-0.5 rounded-tr-lg rounded-tl-lg  border-t-rounded text-white self-end absolute -top-[8px] right-2 transform -translate-y-4')}">
              &times;</button>` : ''}
              <div class="${this.checkTailwindPrefix('space-y-6 flex flex-col')}
                ${this.bannerConfig.backgroundImage && !this.bannerConfig.innerBackgroundImage ? `${this.bannerConfig.backgroundColor ?? ''} ${this.checkTailwindPrefix('p-4')}` : ''}
                ${this.bannerConfig.innerBackgroundImage && !this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('pb-8') : ''}
                ${this.bannerConfig.innerBackgroundImage && this.bannerConfig.backgroundImage ? `${this.checkTailwindPrefix('pb-8')} ${this.bannerConfig.backgroundColor ?? ''}` : ''}
                ">
                ${this.bannerConfig.innerBackgroundImage ? `<img class="${this.checkTailwindPrefix('md:rounded-t')}" src="${this.bannerConfig.innerBackgroundImage}" />` : ''}
                ${this.bannerConfig.logo ? `<img class="${this.bannerConfig.logoClasses ? this.bannerConfig.logoClasses : ''}" src="${this.bannerConfig.logo}" />` : ''} 
                <div class="${this.checkTailwindPrefix('flex items-center space-x-2')} ${this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('px-6') : ''}">
                    ${this.returnIcon()}
                    <h4 class="${this.customStyle?.bannerTitle ?? this.checkTailwindPrefix('text-xl font-bold dark:text-white')}">${this.bannerConfig.title}</h4>
                </div>
                <div class="${this.customStyle?.bannerText ? this.customStyle.bannerText : this.checkTailwindPrefix('dark:text-white')} ${this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('px-6') : ''}">
                  <div>${this.bannerText ? this.bannerText : `${this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription}`} <br/></div>
                  <div>${this.bannerLink ? this.bannerLink : `${this.locale.bannerLinkDescription} <a class="${this.checkTailwindPrefix('font-bold')}" target="_blank" href="${this.config.privacyLink}"> ${this.text?.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel}</a>`}</div>
                </div>
                <div class="${this.checkTailwindPrefix('flex justify-start w-full')} ${this.bannerConfig.innerBackgroundImage && this.checkTailwindPrefix('px-6')}">
                  <div class="${this.checkTailwindPrefix('space-x-2 w-full flex')}">
                      <button type="button" role="button" tabindex="0" id="yesCookies" class="${this.style.yesCookies7} ${this.checkTailwindPrefix('group flex items-center')}">
                        <div class="${this.checkTailwindPrefix('w-3 h-3 rounded-full border border-sky-800 dark:border-green-800 mr-1 group-hover:bg-sky-800 dark:group-hover:bg-green-800 transition duration-300')}"></div>
                        <div class="${this.customStyle?.accept ? this.customStyle.accept : this.checkTailwindPrefix('group-hover:text-sky-800 dark:group-hover:text-green-200')}">${this.bannerConfig.shortText ? this.locale.acceptShortText : this.text.acceptText}</div>
                      </button>
                      <button type="button" role="button" tabindex="0" id="noCookies" class="${this.style.noCookies7} ${this.checkTailwindPrefix('group flex items-center')}">
                        <div class="${this.checkTailwindPrefix('w-3 h-3 rounded-full border border-sky-800 dark:border-red-800 mr-1 group-hover:bg-sky-800 dark:group-hover:bg-red-800 transition duration-300')}"></div>
                          <div class="${this.customStyle?.reject ? this.customStyle.reject : this.checkTailwindPrefix('group-hover:text-sky-800 dark:group-hover:text-red-200')}">${this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText}</div>
                        </button>
                      </div>
                      <div class="${this.checkTailwindPrefix('ml-auto w-full text-right')}">${this.managePreferencesLink()}</div>
                  </div>
              </div>
          </div>
          `;
        document.body.appendChild(this.banner);
        this.makeBannerAnimation();
        if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', () => this.closeBannerWithButton());
        this.generateButtons();
        break;

      case "style8":
        let cookieExists = this.getCookie('JgcPreferences');
        this.positions = {
          "top": this.checkTailwindPrefix("top-0"),
          "center": this.checkTailwindPrefix("mx-auto top-1/2 -translate-y-1/2"),
          "bottom": this.checkTailwindPrefix("bottom-0")
        };
        this.banner = document.createElement("div");
        this.banner.style.display = "none";
        this.banner.innerHTML = `<div style="${this.bannerConfig.backgroundImage && `background-size:cover; background-image:url(${this.bannerConfig.backgroundImage})`}"
          id="bannerContent" class="
          ${this.positions[this.bannerConfig.position || 'bottom']}
          ${this.bannerConfig.backgroundColor}
          ${this.bannerConfig.innerBackgroundImage ? `${this.checkTailwindPrefix("grid grid-cols-5")}  ${this.bannerConfig.backgroundImage ? '' : this.checkTailwindPrefix('gap-6')}` : this.checkTailwindPrefix('flex flex-col')}
          ${this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('p-2') : this.checkTailwindPrefix('px-6 items-start justify-center')} 
          ${this.checkTailwindPrefix('sm:w-full md:w-full w-full fixed shadow-2xl transition duration-700 ease-in-out dark:bg-gray-800 z-[999] py-4')}">
          ${this.bannerConfig.innerBackgroundImage ? `<img class="${this.checkTailwindPrefix('md:rounded-t col-span-1')}" src="${this.bannerConfig.innerBackgroundImage}" />` : ''}
              <div class="
              ${this.bannerConfig.backgroundImage ? `${this.bannerConfig.backgroundColor} ${this.checkTailwindPrefix('w-full p-4')}` : ''} 
              ${this.bannerConfig.innerBackgroundImage && this.checkTailwindPrefix('col-span-4')}
              ${this.checkTailwindPrefix('flex flex-col items-start space-y-3 w-full')}">                  
                  <div class="${this.checkTailwindPrefix('w-full')}">
                    <div class="${this.checkTailwindPrefix('flex items-center w-full mb-3')}" >
                      <div class="${this.checkTailwindPrefix('flex flex-col items-start space-x-1')} ${this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('px-6') : ''}">
                        ${this.returnLogo()}
                        <div class="${this.checkTailwindPrefix('flex items-center space-x-2')}">
                          ${this.returnIcon()}
                          <h4 class="${this.customStyle?.bannerTitle ?? this.checkTailwindPrefix('text-xl font-bold dark:text-white')}">${this.bannerConfig.title}</h4>
                        </div>
                      </div>  
                      ${this.bannerConfig.closeButton ? `<button id="jgc-close-button" class="${this.customStyle?.closeButton}  ${this.checkTailwindPrefix('ml-auto')}">&times;</button>` : ''}
                    </div>
                    <div class="${this.customStyle?.bannerText ? this.customStyle.bannerText : `${this.checkTailwindPrefix('dark:text-gray-300')}`} ${this.checkTailwindPrefix('mb-4 leading-relaxed')}">
                      ${this.bannerText ? this.bannerText : `${this.text.descriptionText ? this.text.descriptionText : this.locale.bannerDescription}`} <br/>  
                      ${this.bannerLink ? this.bannerLink : `${this.locale.bannerLinkDescription} 
                      <a class="${this.checkTailwindPrefix('font-bold')}" target="_blank" href="${this.config.privacyLink}"> ${this.text?.bannerLinkLabel ? this.text.bannerLinkLabel : this.locale.bannerLinkLabel}</a>.`}  
                    </div>
                  </div>    
                  <div class="${this.checkTailwindPrefix('flex w-full space-x-2')}">
                     <div class="${this.checkTailwindPrefix('group')}">
                      <div class="${this.customStyle?.accept ? this.customStyle.accept : ''} 
                        ${this.checkTailwindPrefix('py-2 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ease-linear')}">
                        <button role="button" tabindex="0" type="button" id="yesCookies" class="${this.style.yesCookies8}">${this.bannerConfig.shortText ? this.locale.acceptShortText : this.text.acceptText} </button>
                      </div>
                    </div>
                    <div class="${this.checkTailwindPrefix('group')}">
                      <div class="${this.customStyle?.accept ? this.customStyle.accept : ''} 
                        ${this.checkTailwindPrefix('py-2 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ease-linear')}">
                        <button type="button" id="acceptSelected" class="${this.style.selectedCookies8}">${this.bannerConfig.shortText ? this.locale.acceptSelectedShortText : this.text.acceptSelectedText} </button>
                      </div>
                    </div>
                    <div class="${this.checkTailwindPrefix('group')}">
                      <div class="${this.customStyle?.reject ? this.customStyle.reject : this.checkTailwindPrefix('')} ${this.checkTailwindPrefix('py-2 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ease-linear')}">
                      <button type="button" id="noCookies" class="${this.style.noCookies8}"> ${this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText} </button>
                      </div>
                    </div>
                  </div>
                  <br/>
                  <div class="${this.checkTailwindPrefix('md:grid border-t hidden')} 
                    ${cookieExists['enable'].length == 1 ? `${this.checkTailwindPrefix('md:grid-cols-1')}` : ''}
                    ${cookieExists['enable'].length == 2 ? `${this.checkTailwindPrefix('md:grid-cols-2')}` : ''}
                    ${cookieExists['enable'].length == 3 ? `${this.checkTailwindPrefix('md:grid-cols-3')}` : ''}
                    ${cookieExists['enable'].length >= 4 ? `${this.checkTailwindPrefix('md:grid-cols-4')}` : ''}
                    ">
                    ${this.generateOptions()}
                  </div>
                  <div class="${this.checkTailwindPrefix('block w-full border-t md:hidden')} ">${this.managePreferencesLink()}</div>
                </div>
          </div>
          `;
        document.body.appendChild(this.banner);
        this.makeBannerAnimation();
        if (this.bannerConfig.closeButton) document.getElementById('jgc-close-button').addEventListener('click', () => this.closeBannerWithButton());
        this.generateButtons();
        document.getElementById('acceptSelected').addEventListener('click', () => this.closePreferencePanel()); // Close

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
        this.banner.innerHTML = `<div id="bannerContent" style="${this.bannerConfig.backgroundImage ? `background-size:cover; background-image:url(${this.bannerConfig.backgroundImage})` : ''}" 
                  class=" ${this.positions[this.bannerConfig.position || 'bottom']}
                  ${this.bannerConfig.backgroundColor} 
                  ${this.bannerConfig.backgroundImage ? `${this.bannerConfig.backgroundColor} ${this.checkTailwindPrefix('p-2')}` : `${this.bannerConfig.innerBackgroundImage ? '' : this.checkTailwindPrefix('px-6 py-2')}`}
                  ${this.checkTailwindPrefix('fixed right-0 shadow-2xl md:flex md:flex-col md:space-x-1 md:mr-[4%] mb-10 transition duration-700 ease-in-out rounded-full z-[999]')}">
                  <div class="${this.checkTailwindPrefix('flex items-center space-x-2')}
                    ${this.bannerConfig.backgroundImage && !this.bannerConfig.innerBackgroundImage ? `${this.bannerConfig.backgroundColor ?? ''}  ${this.checkTailwindPrefix('p-4')}` : ''}
                    ${this.bannerConfig.innerBackgroundImage && !this.bannerConfig.backgroundImage ? this.checkTailwindPrefix('pb-8') : ''}
                    ${this.bannerConfig.innerBackgroundImage && this.bannerConfig.backgroundImage ? `${this.checkTailwindPrefix('pb-8')} ${this.bannerConfig.backgroundColor ?? ''}` : ''}
                    ">
                    ${this.bannerConfig.innerBackgroundImage ? `<img class="${this.checkTailwindPrefix('md:rounded-t')}" src="${this.bannerConfig.innerBackgroundImage}" />` : ''}
                    ${this.bannerConfig.logo ? `<img class="${this.bannerConfig.logoClasses ? this.bannerConfig.logoClasses : ''}" src="${this.bannerConfig.logo}" />` : ''} 
                    <div class="${this.checkTailwindPrefix('col-span-3 flex space-x-2')}
                      ${this.customStyle?.bannerText ? this.customStyle.bannerText : this.checkTailwindPrefix('dark:text-white')} ${this.bannerConfig.innerBackgroundImage ? this.checkTailwindPrefix('px-6') : ''}">
                      <div>${this.bannerText ? this.bannerText : `${this.text.descriptionText ? this.text.descriptionText : `${this.bannerConfig.shortText ? this.locale.bannerShortDescription : this.locale.bannerDescription}`}`}</div>  
                      <div><a class="${this.checkTailwindPrefix('font-bold underline')}" target="_blank" href="${this.config.privacyLink}"> Read more </a></div>
                    </div>
                    <div class="${this.checkTailwindPrefix('space-x-1 col-span-1')} ${this.bannerConfig.innerBackgroundImage && this.checkTailwindPrefix('px-6')}">
                      <button type="button" role="button" tabindex="0" id="yesCookies" class="${this.style.yesCookies9}">${this.bannerConfig.shortText ? this.locale.acceptShortText : this.text.acceptText}</button>
                      <button type="button" role="button" tabindex="0" id="noCookies" class="${this.style.noCookies9}">${this.bannerConfig.shortText ? this.locale.rejectShortText : this.text.rejectText}</button>
                    </div>
                  </div>
            </div>
            `;
        document.body.appendChild(this.banner);
        this.makeBannerAnimation();
        document.getElementById('yesCookies').addEventListener('click', () => this.yesCookies());
        document.getElementById('noCookies').addEventListener('click', () => this.noCookies());
        this.addEnterAction('yesCookies');
        this.addEnterAction('noCookies');
        break;
    }
  }
  /**
  * Check if a prefix for Tailwind has been chosen and updates all class names
  */


  checkTailwindPrefix(value) {
    const colon = /:/;

    if (this.checkTailwindPrefix) {
      if (/\s/.test(value)) {
        let splitWords = value.split(/[ ,]+/);
        let arr = [...splitWords];
        return arr.map(el => {
          if (colon.test(el)) {
            const prefix = el.split(':')[0];
            let newstr = "";

            if (el.includes('dark:group-hover')) {
              const prefix2 = el.split(':')[1];
              newstr = el.replace(prefix + ':' + prefix2 + ':', `${prefix}:${prefix2}:${this.tailwindPrefix}`);
            } else {
              newstr = el.replace(prefix + ':', `${prefix}:${this.tailwindPrefix}`);
            }

            return newstr;
          } else {
            return this.tailwindPrefix + el;
          }
        }).join(' ');
      } else {
        if (colon.test(value)) {
          const prefix = value.split(':')[0];
          let newstr = "";

          if (value.includes('dark:group-hover')) {
            const prefix2 = el.split(':')[1];
            newstr = value.replace(prefix + ':' + prefix2 + ':', `${prefix}:${prefix2}:${this.tailwindPrefix}`);
          } else {
            newstr = value.replace(prefix + ':', `${prefix}:${this.tailwindPrefix}`);
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


  checkDarkMode() {
    const htmlClass = document.querySelector('html').classList.contains(this.checkTailwindPrefix('dark'));
    if (htmlClass) this.darkMode = true;
  }
  /**
  * Shows an image as a placeholder, if it exists
  */


  returnPlaceholderImg(element) {
    let checkIfImgPlaceholderExist = element.getAttribute('data-jgc-placeholder-img');

    if (checkIfImgPlaceholderExist?.length > 0 && checkIfImgPlaceholderExist != 'disable') {
      return checkIfImgPlaceholderExist;
    }

    if (this.placeholder?.image && !checkIfImgPlaceholderExist) {
      return this.placeholder.image;
    }

    if (checkIfImgPlaceholderExist && checkIfImgPlaceholderExist == 'disable') {
      return;
    }
  }
  /**
  * Calculate the dimensions of an iFrame (in px, in percentage or from the style attribute).
  */


  returnIframeSize(element, prop) {
    if (element.getAttribute(prop)) {
      const checkWidthPercentage = element.getAttribute(prop).indexOf("%") > -1;
      const checkWidthPx = element.getAttribute(prop).indexOf("px") > -1;

      if (checkWidthPercentage || checkWidthPx) {
        return element.getAttribute(prop);
      } else {
        return element.getAttribute(prop) + 'px';
      }
    } else {
      const style = element.getAttribute('style');
      const getProps = style.replace(/\s/g, '').replace(/^.*{([^}]+)}.*/, '$1').match(/([^;]+)/g);
      let returnValue = '';
      getProps.forEach(element => {
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


  generateIframeDivs(element) {
    const checkIfTextPlaceholderExist = element.getAttribute('data-jgc-placeholder-text') || this.placeholder?.text;
    const checkIfImgPlaceholderExist = element.getAttribute('data-jgc-placeholder-img') || this.placeholder?.image;

    if (element.tagName == 'IFRAME' && (checkIfTextPlaceholderExist || checkIfImgPlaceholderExist)) {
      const getIdElement = element.getAttribute('src') || element.getAttribute('data-jgc-src');
      const getTag = element.getAttribute('data-jgc-tag');
      let tag = document.createElement("div");

      if (checkIfImgPlaceholderExist) {
        tag.setAttribute("style", `background-image: url(${this.returnPlaceholderImg(element)})`);
      }

      tag.setAttribute("data-jgc-placeholder-id", getIdElement);

      if (getTag) {
        tag.setAttribute("data-jgc-placeholder-tag", getTag);
        tag.setAttribute("data-jgc-placeholder-height", element.getAttribute('height'));
      }

      tag.classList.add(this.checkTailwindPrefix('flex'));
      tag.classList.add(this.checkTailwindPrefix(`md:pt-0`));
      tag.classList.add(this.checkTailwindPrefix(`pt-[56.25%]`));
      tag.classList.add(this.checkTailwindPrefix(`md:w-[${this.returnIframeSize(element, 'width')}]`));
      tag.classList.add(this.checkTailwindPrefix(`md:h-[${this.returnIframeSize(element, 'height')}]`));
      tag.classList.add(this.checkTailwindPrefix('w-full'));
      tag.classList.add(this.checkTailwindPrefix('items-center'));
      tag.classList.add(this.checkTailwindPrefix('justify-center'));
      tag.classList.add(this.checkTailwindPrefix('bg-gray-100'));
      tag.classList.add(this.checkTailwindPrefix('cursor-pointer'));

      if (this.placeholder?.classes) {
        let classes = this.placeholder.classes;
        let splitWords = classes.split(/[ ,]+/);
        let array = [...splitWords];

        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          tag.classList.add(element);
        }
      }

      if (checkIfTextPlaceholderExist) {
        const settingsHtml = checkIfTextPlaceholderExist ? checkIfTextPlaceholderExist : `${this.placeholder?.text ? this.placeholder.text : ''}`;
        tag.innerHTML = settingsHtml;
      }

      tag.addEventListener('click', () => this.managePreferences());
      element.parentNode.insertBefore(tag, element);
      if (element.hasAttribute('data-jgc-src')) element.setAttribute('height', 0);
    }
  }
  /**
  * Enable Auto Mode
  */


  autoMode(arrToActivate) {
    let objKeys = Object.keys(this.autoCategories);
    let arrService = [];

    if (arrToActivate) {
      for (let [k, v] of Object.entries(this.autoCategories)) {
        if (!arrToActivate.includes(v[1])) {
          let scripts = document.querySelectorAll('iframe,script,link');

          for (const element of scripts) {
            if (!element.getAttribute('data-jgc-tag')) {
              const src = element.src || (element.tagName == 'LINK' ? element.getAttribute("href") : undefined);

              if (src && src.includes(k)) {
                if (element.tagName == 'IFRAME') this.generateIframeDivs(element);
                this.removeElements(element);
              } else {
                element.classList.remove(this.checkTailwindPrefix('hidden'));
              }
            }
          }
        } else {
          const removeStyle = document.querySelectorAll("[data-jgc-remove-style]");

          if (removeStyle) {
            for (let i = 0; i < removeStyle.length; i++) {
              const element = removeStyle[i];
              if (element.getAttribute('data-jgc-remove-style') == k) element.remove();
            }
          }
        }
      }
    } else {
      setTimeout(() => {
        let checkedElement = undefined;
        document.querySelectorAll('iframe,script,link').forEach(element => {
          const src = element.src || (element.tagName == 'LINK' ? element.getAttribute("href") : undefined);

          if (src) {
            if (!element.getAttribute('data-jgc-tag')) {
              element.classList.remove(this.checkTailwindPrefix('hidden'));

              if (objKeys.some(v => {
                if (src && src.includes(v)) {
                  arrService.push(this.autoCategories[v]);
                  checkedElement = v;
                  return src.includes(v);
                }
              })) {
                let checkIfNecessary = Object.values(this.autoCategories[checkedElement]);

                if (checkIfNecessary[1] != 'necessary') {
                  if (element.tagName == 'IFRAME') this.generateIframeDivs(element);
                  this.removeElements(element);
                }
              }
            }
          }
        });
        this.generatePreferenceStorage();
      }, 1);
    }
  }
  /**
  * Remove elements and siblings from DOM in AutoMode.
  */


  removeElements(element) {
    let nextSibling = element.nextSibling; // Need a quick timeout

    setTimeout(() => {
      element.parentNode.removeChild(element);
      element.remove();
      if (nextSibling && nextSibling.tagName == 'IFRAME') nextSibling.remove();
    }, 1);
  }
  /**
  * Check active cookies in AutoMode
  */


  checkCookiesAutoMode() {
    if (this.auto) {
      let checkPreferences = this.getCookie('JgcPreferences');
      let trueArr = [];

      for (let [k, v] of Object.entries(checkPreferences['preferences'])) if (v) trueArr.push(k);

      for (let i = 0; i < trueArr.length; i++) {
        trueArr[i];
      }

      this.autoMode(trueArr);
    }
  }
  /**
  * Activate the JGC engine and all the main functions
  */


  init(data) {
    data.locale ? this.locale = new Languages(data.locale.escape()) : this.locale = new Languages('en');

    if (data.autoMode && this.isBoolean(data.autoMode, "autoMode")) {
      let checkPreferences = this.getCookie('JgcPreferences');

      if (!checkPreferences) {
        let scripts = document.querySelectorAll('iframe,script');

        for (const element of scripts) element.classList.add(this.checkTailwindPrefix('hidden'));
      }

      this.auto = true;

      if (data.autoCategories) {
        for (let a of Object.keys(data.autoCategories)) {
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

    this.cookieTimeout = !this.isEmpty(data.cookieDuration) ? data.cookieDuration : 360; // Tailwind Prefix

    if (data.tailwindPrefix) {
      this.tailwindPrefix = data.tailwindPrefix;
    } // Automatic Dark Mode 


    if (data.dark) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        const htmlClass = document.querySelector('html');
        htmlClass.classList.add(this.checkTailwindPrefix('dark'));
        this.darkMode = true;
      }
    } // Custom texts 


    this.text = {
      acceptSelectedText: !this.isEmpty(data.text?.acceptSelectedText) ? this.isString(data.text.acceptSelectedText.escape(), "acceptSelectedText") : this.locale.acceptSelectedText,
      acceptText: !this.isEmpty(data.text?.acceptText) ? this.isString(data.text.acceptText.escape(), "acceptText") : this.locale.acceptText,
      bannerLinkLabel: !this.isEmpty(data.text?.bannerLinkLabel) ? this.isString(data.text.bannerLinkLabel.escape(), "bannerLinkLabel") : this.locale.bannerLinkLabel,
      descriptionText: !this.isEmpty(data.text?.descriptionText) ? this.isString(data.text.descriptionText.escape(), "descriptionText") : null,
      panelTitle: !this.isEmpty(data.text?.panelTitle) ? this.isString(data.text.panelTitle.escape(), "panelTitle") : this.locale.panelTitle,
      preferencesText: !this.isEmpty(data.text?.preferencesText) ? this.isString(data.text.preferencesText.escape(), "preferencesText") : this.locale.preferencesText,
      rejectText: !this.isEmpty(data.text?.rejectText) ? this.isString(data.text.rejectText.escape(), "rejectText") : this.locale.rejectText,
      saveButton: !this.isEmpty(data.text?.saveButton) ? this.isString(data.text.saveButton.escape(), "saveButton") : this.locale.saveAndContinue,
      saveAllButton: !this.isEmpty(data.text?.saveAllButton) ? this.isString(data.text.saveAllButton.escape(), "saveAllButton") : this.locale.saveAndContinueAcceptAll,
      servicesTag: !this.isEmpty(data.text?.servicesTag) ? this.isString(data.text.servicesTag.escape(), "servicesTag") : this.locale.servicesText
    }; // Banner config & style 

    this.bannerConfig = {
      animation: !this.isEmpty(data.banner?.animation) ? this.isBoolean(data.banner.animation, "animation") : true,
      backgroundColor: !this.isEmpty(data.banner?.backgroundColor) ? this.isString(data.banner.backgroundColor.escape(), "backgroundColor") : this.checkTailwindPrefix('bg-white dark:bg-gray-800'),
      backgroundDark: !this.isEmpty(data.banner?.backgroundDark) ? this.isBoolean(data.banner.backgroundDark, "backgroundDark") : false,
      backgroundImage: !this.isEmpty(data.banner?.backgroundImage) ? this.isString(data.banner.backgroundImage.escape(), "backgroundImage") : null,
      closeButton: !this.isEmpty(data.banner?.closeButton) ? this.isBoolean(data.banner.closeButton, "closeButton") : true,
      closeButtonAccept: !this.isEmpty(data.banner?.closeButtonAccept) ? this.isBoolean(data.banner.closeButtonAccept, "closeButtonAccept") : false,
      disableReject: !this.isEmpty(data.banner?.disableReject) ? this.isBoolean(data.banner.disableReject, "disableReject") : false,
      icon: !this.isEmpty(data.banner?.icon) ? this.isString(data.banner.icon.escape(), "icon") : null,
      iconDark: !this.isEmpty(data.banner?.iconDark) ? this.isString(data.banner.iconDark.escape(), "iconDark") : null,
      innerBackgroundImage: !this.isEmpty(data.banner?.innerBackgroundImage) ? this.isString(data.banner.innerBackgroundImage.escape(), "innerBackgroundImage") : null,
      logo: !this.isEmpty(data.banner?.logo) ? this.isString(data.banner.logo.escape(), "logo") : undefined,
      logoClasses: !this.isEmpty(data.banner?.logoClasses) ? this.isString(data.banner.logoClasses, "logoClasses") : undefined,
      maxWidth: !this.isEmpty(data.banner?.maxWidth) ? this.isString(data.banner.maxWidth, "maxWidth") : undefined,
      onAccept: !this.isEmpty(data.banner?.onAccept) ? this.onAccept = this.isFunction(data.banner.onAccept, "onAccept") : null,
      onReject: !this.isEmpty(data.banner?.onReject) ? this.onReject = this.isFunction(data.banner.onReject, "onReject") : null,
      position: !this.isEmpty(data.banner?.position) ? this.isString(data.banner.position.escape()) : undefined,
      shortText: !this.isEmpty(data.banner?.shortText) && this.isBoolean(data.banner.shortText, "shortText") ? this.locale.acceptShortText : this.acceptText,
      title: !this.isEmpty(data.banner?.title) ? this.isString(data.banner.title.escape(), "title") : 'Cookies'
    }; // Custom text placeholder

    if (data.placeholder) {
      this.placeholder = {
        classes: !this.isEmpty(data.placeholder?.classes) && this.isString(data.placeholder.classes.escape(), "placeholder classes"),
        image: !this.isEmpty(data.placeholder?.image) && this.isString(data.placeholder.image.escape(), "placeholder image"),
        text: !this.isEmpty(data.placeholder?.text) && this.isString(data.placeholder.text.escape(), "placeholder text")
      };
    } // Preference Panel


    if (data.panel) {
      this.panel = {
        bgColor: !this.isEmpty(data.panel?.bgColor) ? this.isString(data.panel.bgColor.escape(), "bgColor") : null,
        open: !this.isEmpty(data.panel?.open) ? this.isBoolean(data.panel.open, "open") : false,
        padding: !this.isEmpty(data.panel?.padding) ? this.isBoolean(data.panel.padding, "padding") : false
      };
    } // Banner style


    if (data.style) {
      this.customStyle = {
        accept: !this.isEmpty(data.style?.accept) ? this.isString(data.style.accept.escape(), "accept") : null,
        bannerText: !this.isEmpty(data.style?.bannerText) ? this.isString(data.style.bannerText.escape(), "bannerText") : null,
        bannerTitle: !this.isEmpty(data.style?.bannerTitle) ? this.isString(data.style.bannerTitle.escape(), "bannerTitle") : null,
        closeButton: !this.isEmpty(data.style?.closeButton) ? this.isString(data.style.closeButton.escape(), "services: closeButton") : null,
        toggles: !this.isEmpty(data.style?.toggles) ? this.isString(data.style.toggles.escape(), "toggles") : null,
        lockIcon: !this.isEmpty(data.style?.lockIcon) ? this.isString(data.style.lockIcon.escape(), "lockIcon") : null,
        panelHeader: !this.isEmpty(data.style?.panelHeader) ? this.isString(data.style.panelHeader.escape(), "panelHeader") : null,
        panelText: !this.isEmpty(data.style?.panelText) ? this.isString(data.style.panelText.escape(), "panelText") : null,
        panelTitle: !this.isEmpty(data.style?.panelTitle) ? this.isString(data.style.panelTitle.escape(), "classes") : null,
        preferencesText: !this.isEmpty(data.style?.preferencesText) ? this.isString(data.style.preferencesText.escape(), "services: preferencesText") : null,
        privacyLink: !this.isEmpty(data.style?.privacyLink) ? this.isString(data.style.privacyLink.escape(), "services: privacyLink") : null,
        reject: !this.isEmpty(data.style?.reject) ? this.isString(data.style.reject.escape(), "reject") : null,
        saveButton: !this.isEmpty(data.style?.saveButton) ? this.isString(data.style.saveButton.escape(), "classes") : null,
        saveAllButton: !this.isEmpty(data.style?.saveAllButton) ? this.isString(data.style.saveAllButton.escape(), "classes") : null,
        servicesText: !this.isEmpty(data.style?.servicesText) ? this.isString(data.style.servicesText.escape(), "services: servicesText") : null,
        servicesTag: !this.isEmpty(data.style?.servicesTag) ? this.isString(data.style.servicesTag.escape(), "services: servicesTag") : null,
        stripes: !this.isEmpty(data.style?.stripes) ? this.isString(data.style.stripes.escape(), "stripes: classes") : null
      };
    } // Cookie Categories


    if (data.cookies) {
      this.getCustomCookies = {};

      for (let a of Object.keys(data.cookies)) {
        for (let [title] of Object.entries(data.cookies[a])) {
          if (title == 'title') {
            data.cookies[a]['title'] = data.cookies[a]['title'].escape();
          } else if (title == 'description') {
            data.cookies[a]['description'] = data.cookies[a]['description'].escape();
          }
        }
      }

      this.getCustomCookies = data.cookies;
    } // Activations


    this.activate = !this.isEmpty(data.activate) ? data.activate : null; // Default button styles

    this.style = {
      yesCookies: `${this.customStyle?.accept ? this.customStyle.accept : `${this.checkTailwindPrefix('text-green-800 dark:text-green-300 bg-green-50 hover:bg-green-100 transition-all duration-300 dark:bg-green-900 ring-1 ring-green-200 px-2 py-0.5 text-xs uppercase font-bold items-center rounded my-2')}`}`,
      noCookies: `${this.customStyle?.reject ? this.customStyle.reject : `${this.checkTailwindPrefix('text-red-800 dark:text-red-300 bg-red-50 hover:bg-red-100 transition-all duration-300 dark:bg-red-900 ring-red-200 ring-1 px-2 py-0.5 text-xs uppercase font-bold items-center rounded my-2')}`}`,
      yesCookies2: `${this.customStyle?.accept ? this.customStyle.accept : `${this.checkTailwindPrefix('text-green-600 bg-transparent ring-green-400 ring-2 px-3 leading-6 text-xs text-center font-medium uppercase transition transition-all duration-300  hover:bg-green-100 focus:shadow-2xl rounded-full')}`}`,
      noCookies2: `${this.customStyle?.reject ? this.customStyle.reject : `${this.checkTailwindPrefix('text-red-600 bg-transparent ring-red-600 ring-2 px-3 leading-6 text-xs text-center font-medium uppercase transition transition-all duration-300  hover:bg-red-100 focus:shadow-2xl rounded-full')}`}`,
      yesCookies3: `${this.customStyle?.accept ? this.customStyle.accept : `${this.checkTailwindPrefix('text-green-600 bg-transparent transition transition-all duration-300 ring-green-400 ring-2 px-3 py-2 leading-tight text-xs text-center font-medium uppercase transition hover:bg-green-100 focus:shadow-2xl rounded-full')}`}`,
      noCookies3: `${this.customStyle?.reject ? this.customStyle.reject : `${this.checkTailwindPrefix('text-red-600 bg-transparent transition transition-all duration-300 ring-red-600 ring-2 px-3 py-2 leading-tight text-xs text-center font-medium uppercase transition hover:bg-red-100 focus:shadow-2xl rounded-full')}`}`,
      yesCookies4: `${this.customStyle?.accept ? this.customStyle.accept : `${this.checkTailwindPrefix('text-gray-500 dark:text-green-300 px-3 leading-6 text-xs text-center font-bold uppercase transition focus:shadow-2xl tracking-widest rounded-full')}`}`,
      noCookies4: `${this.customStyle?.reject ? this.customStyle.reject : `${this.checkTailwindPrefix('text-gray-500  dark:text-red-300 px-3 leading-6 text-xs text-center font-bold uppercase transition focus:shadow-2xl tracking-widest rounded-full')}`}`,
      yesCookies5: `${this.customStyle?.accept ? this.customStyle.accept : `${this.checkTailwindPrefix('text-white dark:text-green-400 px-5 text-sm text-center font-bold uppercase transition focus:shadow-2xl tracking-wide rounded-full')}`}`,
      noCookies5: `${this.customStyle?.reject ? this.customStyle.reject : `${this.checkTailwindPrefix('text-red-600 dark:text-red-400 px-5 leading-6 text-sm text-center font-bold uppercase transition focus:shadow-2xl tracking-wide rounded-full')}`}`,
      yesCookies6: `${this.customStyle?.accept ? this.customStyle.accept : `${this.checkTailwindPrefix('text-white dark:text-gray-400 px-12 py-2 text-sm text-center font-semibold uppercase transition focus:shadow-2xl tracking-widest rounded-full')}`}`,
      yesCookies7: `${this.customStyle?.reject ? this.customStyle.reject : `${this.checkTailwindPrefix('text-gray-600 dark:text-white rounded-full text-xs font-semibold focus:shadow-2xl')}`}`,
      noCookies7: `${this.customStyle?.accept ? this.customStyle.accept : `${this.checkTailwindPrefix('text-gray-600 dark:text-white text-xs leading-6 font-bold focus:shadow-2xl rounded-full')}`}`,
      yesCookies8: `${this.customStyle?.reject ? this.customStyle.reject : `${this.checkTailwindPrefix('text-gray-600 group-hover:text-green-600 dark:bg-green-900 py-2 dark:text-green-400 px-5 text-sm text-center font-semibold transition focus:shadow-2xl tracking-wide rounded-full')}`}`,
      selectedCookies8: `${this.customStyle?.accept ? this.customStyle.accept : `${this.checkTailwindPrefix('text-orange-600 group-hover:text-orange-600 dark:text-orange-400 dark:bg-orange-900 py-2 px-5 text-sm text-center font-semibold transition focus:shadow-2xl tracking-wide rounded-full')}`}`,
      noCookies8: `${this.customStyle?.accept ? this.customStyle.accept : `${this.checkTailwindPrefix('text-red-600 group-hover:text-red-600 dark:bg-red-900 py-2 dark:text-red-400 px-5 leading-6 text-sm text-center font-semibold transition focus:shadow-2xl tracking-wide rounded-full')}`}`,
      yesCookies9: `${this.customStyle?.reject ? this.customStyle.reject : `${this.checkTailwindPrefix('text-white bg-black dark:text-gray-100 px-6 py-1 text-xs text-center font-semibold uppercase transition focus:shadow-2xl tracking-widest rounded-full')}`}`,
      noCookies9: `${this.customStyle?.accept ? this.customStyle.accept : `${this.checkTailwindPrefix('text-red-900 ring-1 ring-red-900 dark:text-red-700 dark:ring-red-700 px-6 py-1 text-xs text-center font-semibold uppercase transition focus:shadow-2xl tracking-widest rounded-full')}`}`
    }; // Let's start the engine

    window.addEventListener('load', () => {
      this.checkDarkMode(); // Check Dark Mode

      this.loadText(); // Check if there is a custom text for the banner

      this.generatePreferenceStorage(); // Create the default user settings

      this.checkBackground(); // Check if we need to add a dark overlay

      this.loadPreferences(); // Make the preference button clickable

      this.saveCookiesPreferences(); // Save cookies

      this.loadBannerLayout(this.config.layout); // Load the banner

      this.openPanel(); // Check whether the preferences panel should be visible or not

      this.checkCookies(); // Check cookies
    });
  }

} // Locales 


class Languages {
  constructor(locale) {
    this.init();
    return this.locales[locale] || this.locales['en'];
  }

  init() {
    this.locales = {
      en: {
        'acceptText': 'Accept cookies',
        'acceptSelectedShortText': 'Accept selected',
        'acceptSelectedText': 'Accept selected',
        'acceptShortText': 'Accept',
        'bannerDescription': `
          We use cookies to personalize content, improve user experience, and analyze our traffic.
          By clicking “Accept,” you consent to the use of all the cookies. 
          You may change your settings at any time by visiting the Cookie preferences.
        `,
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
        'bannerDescription': `
          Utilizziamo cookie nostri e di terze parti per personalizzare il contenuto e analizzare il traffico web. 
          Puoi prestare, rifiutare o revocare il tuo consenso, in qualsiasi momento, aprendo il pannello delle preferenze.  
          Chiudendo questa informativa, continui senza accettare.
        `,
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

}

var justgoodcookies = new JustGoodCookies();

export { justgoodcookies as default };
