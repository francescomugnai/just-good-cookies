/*
    @license
    JustGoodCookies
    Created by Francesco Mugnai 
    2022 - v 0.9.8
    Released under MIT License
    If you use this script, you will always remain the sole responsible party, use it at your own risk
    https://github.com/francescomugnai/just-good-cookies
*/


import { googleTagManager, checkActivations }  from "./activate";
import { autoMode, generatePreferenceStorage, checkCookiesAutoMode }  from "./autoMode";
import { showBanner, closeBanner }  from "./banner";
import { getCookie, getCookieId, getCookiePreferences, saveCookie, checkCookieExpiration, saveCookiesPreferences }  from "./cookies";
import { locales }  from "./locales";
import { activateToggledCookies, hideScripts, removeScript, removeDivsOfUserAcceptedIframes, checkGoogleAnalytics }  from "./scripts";
import { loadBannerLayout }  from "./styles";
import { removePlaceholders }  from "./placeholders";
import { closePreferencePanel, closePreferencePanelAndSaveAll, setPreferences, loadPreferences, openPanel  }  from "./preferences";
import { isString, isBoolean, isFunction, checkTailwindPrefix, checkDarkMode, checkBackground, loadText  }  from "./utilities";

class JustGoodCookies {
  constructor() {
    this.activate = undefined // Custom Activations
    this.auto = false // autoMode
    this.autoCategories = undefined // Categories for autoMode
    this.banner = undefined // Banner div
    this.bannerConfig = undefined // Banner config
    this.bannerLink = undefined // Privacy policy link
    this.bannerText = undefined // Custom banner text
    this.cookieTimeout = undefined; // Default cookie duration (360 days)
    this.config = undefined // General config
    this.customStyle = undefined // Banner style 
    this.darkMode = undefined // Force dark mode
    this.getCustomCookies = undefined  // Cookie preferences and tags
    this.locale = undefined // Locale 
    this.localeString = undefined // Lang string
    this.onAccept = undefined // Callback on "accept"
    this.onReject = undefined // Callback on "reject"
    this.panel = undefined // Preference panel
    this.positions = {} // Banner positions
    this.panelFooter = undefined // "Footer"
    this.panelHeader = undefined // "Header"
    this.placeholder = undefined // Placeholder
    this.tailwindPrefix = '' // Tailwind Prefix
    this.text = undefined // Custom texts

    this.getCookieId = getCookieId
    this.getCookiePreferences = getCookiePreferences

    String.prototype.escape = function() {
      var replace = {
        '>': '&gt;',
        '<': '&lt;',
        '&': '&amp;'
      };
      return this.replace(/[&<>]/g, (tag) => replace[tag] || tag);
    };
  }

  /*
  *  Check the current status
  */
  checkCookies() {
    let preference = getCookie('JgcPreferences');
    if(preference['duration']){
      let getValue = preference['duration'].value
      switch (getValue) {
        case "0":  // Cookies rejected :(
          if(this.auto) autoMode() 
          checkCookieExpiration() // Check if cookie is expired
          hideScripts() // Hide the scripts
          break;
        case "1": // Cookies accepted :)
          bannerContent.classList.add(checkTailwindPrefix('hidden')); 
          checkCookiesAutoMode() // Check if we are running the autoMode
          removePlaceholders() // Remove placeholders
          removeDivsOfUserAcceptedIframes() // Remove hidden divs (if any) for accepted cookies
          checkCookieExpiration()  // Check if the cookie is expired
          checkActivations() // Check if we need to activate some pre-built scripts
          checkGoogleAnalytics() // Check Google Analytics
          activateToggledCookies() // We enable cookies and manage them through the settings panel
          googleTagManager()  // Check if we need to turn on Google Tag Manager
          closeBanner() // Close the banner
          break;
      }
    } else { 
      // The banner has not been accepted yet, let's turn off all scripts and show the banner
      if(this.auto) autoMode() 
      hideScripts() 
      showBanner() 
    }
  }

  /*
  * Accepts cookies
  */
  yesCookies() {
    checkCookieExpiration('1') 
    checkActivations() 
    setPreferences() 
    activateToggledCookies() 
    closePreferencePanelAndSaveAll()
    let checkPreferences = getCookie('JgcPreferences');
    if(checkPreferences['remove'] > 0){
      removeScript(true) // We need to remove them AND refresh the page
    } else {
      googleTagManager() // Do not trigger Google Tag Manager twice
      removePlaceholders() 
    }
    if(this.onAccept && typeof(this.onAccept) == 'function') this.onAccept()
    closeBanner() 
    removeDivsOfUserAcceptedIframes()
    if(!this.bannerConfig.onAccept) window.location.reload()
    if(document.getElementById('preferenceDiv')) closePreferencePanel()
  }
  
  /*
  * Reject cookies
  */
  noCookies() {
    checkCookieExpiration('0') 
    let getPreferences = getCookie('JgcPreferences');
    const saveObj = {...getPreferences}
    saveCookie(saveObj)
    if(this.onReject && typeof(this.onReject) == 'function') this.onReject()
    closeBanner() 
  }

  /**
  * Activate the JGC engine and all the main functions
  */
  init(data) {
    data ? data : {}

    // Initialize the language
    if(data.locale){
      this.locales = locales
      this.locale = this.locales[data.locale.escape()] || this.locales['en']
      this.localeString = data.locale
    } 

    // Check if the autoMode is active or not
    if(data.autoMode && isBoolean(data.autoMode, "autoMode")){
      let checkPreferences = getCookie('JgcPreferences');
      if(!checkPreferences){
        let scripts = document.querySelectorAll('iframe,script')
        for(const element of scripts) element.classList.add(checkTailwindPrefix('hidden'))
      }
      this.auto = true 
      if(data.autoCategories){
        for(let a of Object.keys(data.autoCategories)){
          data.autoCategories[a][0] = data.autoCategories[a][0].escape()
          data.autoCategories[a][1] = data.autoCategories[a][1].escape()
        }
        this.autoCategories = data.autoCategories
      }
    }

    // General config
    this.config = {
      locale: data.locale !== undefined ? data.locale.escape() : new Languages('en'),
      layout: data.layout.escape() || 'style1',
      privacyLink: data.privacyLink.escape() || '',
    }

    // Cookie duration
    this.cookieTimeout = data.cookieDuration ? data.cookieDuration : 360

    // Tailwind Prefix
    if(data.tailwindPrefix){
      this.tailwindPrefix = data.tailwindPrefix
    } 

    // Automatic Dark Mode 
    if(data.dark){
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      const htmlClass = document.querySelector('html')
      htmlClass.classList.add(checkTailwindPrefix('dark'))
      this.darkMode = true
     }
    }

    // Custom texts 
    this.text = {
      acceptSelectedText: data.text?.acceptSelectedText ? isString(data.text.acceptSelectedText, "acceptSelectedText") : this.locale.acceptSelectedText,
      acceptText: data.text?.acceptText ? isString(data.text.acceptText, "acceptText") : this.locale.acceptText,
      bannerLinkLabel: data.text?.bannerLinkLabel ? isString(data.text.bannerLinkLabel, "bannerLinkLabel") : this.locale.bannerLinkLabel,
      descriptionText: data.text?.descriptionText ? isString(data.text.descriptionText, "descriptionText") : null,
      panelTitle: data.text?.panelTitle ? isString(data.text.panelTitle, "panelTitle") : this.locale.panelTitle,
      preferencesText: data.text?.preferencesText ? isString(data.text.preferencesText, "preferencesText") : this.locale.preferencesText,
      rejectText: data.text?.rejectText ? isString(data.text.rejectText, "rejectText") : this.locale.rejectText,
      saveButton: data.text?.saveButton ? isString(data.text.saveButton, "saveButton") : this.locale.saveAndContinue,
      saveAllButton: data.text?.saveAllButton ? isString(data.text.saveAllButton, "saveAllButton") : this.locale.saveAndContinueAcceptAll,
      servicesTag: data.text?.servicesTag ? isString(data.text.servicesTag, "servicesTag") : this.locale.servicesText,
    }
  
    // Banner config & style 
    this.bannerConfig = {
      animation: isBoolean(data.banner?.animation, "animation") ? data.banner.animation : true,
      backgroundColor: data.banner?.backgroundColor ? isString(data.banner.backgroundColor, "backgroundColor") : checkTailwindPrefix('bg-white dark:bg-gray-800'),
      backgroundDark: data.banner?.backgroundDark ?isBoolean( data.banner.backgroundDark, "backgroundDark") : false,
      backgroundImage: data.banner?.backgroundImage ? isString(data.banner.backgroundImage, "backgroundImage") : null,
      closeButton: data.banner?.closeButton ? isBoolean(data.banner.closeButton, "closeButton") : true,
      closeButtonAccept: data.banner?.closeButtonAccept ? isBoolean(data.banner.closeButtonAccept, "closeButtonAccept") : false,
      disableReject: data.banner?.disableReject ? isBoolean(data.banner.disableReject, "disableReject") : false,
      icon: data.banner?.icon ? isString(data.banner.icon, "icon") : null,
      iconDark: data.banner?.iconDark ? isString(data.banner.iconDark, "iconDark") : null,
      innerBackgroundImage: data.banner?.innerBackgroundImage ? isString(data.banner.innerBackgroundImage, "innerBackgroundImage") : null,
      logo: data.banner?.logo ? isString(data.banner.logo, "logo") : undefined,
      logoClasses: data.banner?.logoClasses ? isString(data.banner.logoClasses, "logoClasses") : undefined,
      maxWidth: data.banner?.maxWidth ? isString(data.banner.maxWidth, "maxWidth") : undefined,
      onAccept: data.banner?.onAccept ? this.onAccept = isFunction(data.banner.onAccept, "onAccept") : null,
      onReject: data.banner?.onReject ? this.onReject = isFunction(data.banner.onReject, "onReject") : null,
      position: data.banner?.position ? isString(data.banner.position) : undefined,
      shortText: data.banner?.shortText && isBoolean(data.banner.shortText, "shortText") ? this.locale.acceptShortText : this.acceptText,
      title: data.banner?.title ? isString(data.banner.title, "title") : 'Cookies',
    }

    // Custom text placeholder
    if(data.placeholder) {
      this.placeholder = {
        classes: data.placeholder?.classes && isString(data.placeholder.classes, "placeholder classes"),
        image: data.placeholder?.image && isString(data.placeholder.image, "placeholder image"),
        text: data.placeholder?.text && isString(data.placeholder.text, "placeholder text"),
      }
    }
   
    // Preference Panel
    if(data.panel) {
      this.panel = {
        bgColor: data.panel?.bgColor ? isString(data.panel.bgColor, "bgColor") : null,
        open: data.panel?.open ? isBoolean(data.panel.open, "open") : false,
        padding: data.panel?.padding ? isBoolean(data.panel.padding, "padding") : false,
      }
    }

    // Banner style
    if(data.style) {
      this.customStyle = {        
        accept: data.style?.accept ? isString(data.style.accept, "accept") : null,
        bannerText: data.style?.bannerText ? isString(data.style.bannerText, "bannerText") : null,
        bannerTitle: data.style?.bannerTitle ? isString(data.style.bannerTitle, "bannerTitle") : null,
        closeButton: data.style?.closeButton ? isString(data.style.closeButton, "closeButton") : null, 
        toggles: data.style?.toggles ? isString(data.style.toggles, "toggles") : null,
        lockIcon: data.style?.lockIcon ? isString(data.style.lockIcon, "lockIcon") : null,
        panelHeader: data.style?.panelHeader ? isString(data.style.panelHeader, "panelHeader") : null, 
        panelText: data.style?.panelText ? isString(data.style.panelText, "panelText") : null, 
        panelTitle:  data.style?.panelTitle ? isString(data.style.panelTitle, "panelTitle") : null,
        preferenceDiv:  data.style?.preferenceDiv ? isString(data.style.preferenceDiv, "preferenceDiv") : null,
        preferencesText: data.style?.preferencesText ? isString(data.style.preferencesText, "preferencesText") : null, 
        privacyLink: data.style?.privacyLink ? isString(data.style.privacyLink, "privacyLink") : null, 
        reject: data.style?.reject ? isString(data.style.reject, "reject") : null,
        saveButton: data.style?.saveButton ? isString(data.style.saveButton, "classes") : null,
        saveAllButton: data.style?.saveAllButton ? isString(data.style.saveAllButton, "classes") : null,
        servicesText: data.style?.servicesText ? isString(data.style.servicesText, "servicesText") : null, 
        servicesTag: data.style?.servicesTag ? isString(data.style.servicesTag, "servicesTag") : null, 
        stripes: data.style?.stripes ? isString(data.style.stripes, "stripes: classes") : null,
      }
    }
  
    // Cookie Categories
    if(data.cookies) {
      this.getCustomCookies = {}
      for(let jgcTag of Object.keys(data.cookies)){
        for (let [objKey] of Object.entries(data.cookies[jgcTag])) data.cookies[jgcTag][objKey] = isString(data.cookies[jgcTag][objKey])
      }
      this.getCustomCookies = data.cookies
    }

    // Activations
    this.activate = data.activate ? data.activate : null
    
    // Let's start the engine
    if(document.readyState == 'complete' || document.readyState == 'loading') {
      checkDarkMode() // Check Dark Mode
      loadText() // Check if there is a custom text for the banner
      generatePreferenceStorage() // Create the default user settings
      checkBackground() // Check if we need to add a dark overlay
      loadPreferences() // Make the preference button clickable
      saveCookiesPreferences() // Save cookies
      loadBannerLayout(this.config.layout) // Load the banner
      openPanel() // Check whether the preferences panel should be visible or not
      this.checkCookies() // Check cookies
    }
  }
}


export default new JustGoodCookies()