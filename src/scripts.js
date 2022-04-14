import { getCookie, saveCookie }  from "./cookies";
import { checkTailwindPrefix }  from "./utilities";
import { generateIframeDivs } from "./placeholders"

/**
* Enable scripts
*/
export function activateToggledCookies(){
  let checkPreferences = getCookie('JgcPreferences');
  for (let [k, v] of Object.entries(checkPreferences['preferences'])) {
    let tagToCheck = `[data-jgc-tag="${ k }"]`,
    cookieExists = document.querySelectorAll(tagToCheck)
    if(v == true){
      replaceScripts(tagToCheck) 
    } else {
      cookieExists.forEach(element =>{ 
        let parent = element.parentNode
        if(parent.hasAttribute('data-jgc-placeholder')){
          generateIframeDivs(element)
        } else {
          element.classList.add(checkTailwindPrefix('hidden'))
          element.innerHTML = ''; 
        }
      })
    }
  }
  if(checkPreferences['darkBackground']){
    let saveObj = { ...checkPreferences, darkBackground: false }
    saveCookie(saveObj)
    const modal = document.getElementById('jgcModal')
    if(modal) modal.classList.add(checkTailwindPrefix('hidden'))
  }
}

/**
* Delete Google Analytics cookies if the user has changed their settings in this regard
* TODO: It needs to be improved.
*/
export function checkGoogleAnalytics(){
  let checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));
  for (let [k, v] of Object.entries(checkPreferencesFromStorage)) {
    if(k != 'necessary'){
      const getGoogleAnalytics = document.getElementById('googleAnalytics')
      if(getGoogleAnalytics){
        const urlParams = new URL(getGoogleAnalytics.getAttribute('data-jgc-src')).escape();
        const googleAnalyticsId = urlParams.searchParams.get("id");
        const domain = window.location.hostname
        let getAttribute = getGoogleAnalytics.getAttribute('data-jgc-tag')
        // TODO: This part can be improved
        if(k == getAttribute && v == false){
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
* Hide the scripts
*/
export function hideScripts(){
  let getElementsJgc = document.querySelectorAll('[data-jgc-tag]')
  let getElementsToHide = document.querySelectorAll('[data-jgc-remove]')
  let getElementsPlaceholder = document.querySelectorAll('[data-jgc-placeholder]')
  for (let i = 0; i < getElementsJgc.length; i++) {
    const element = getElementsJgc[i];
    if(element.getAttribute('data-jgc-tag') != 'necessary'){
      generateIframeDivs(element)
    } else {
      if(getElementsPlaceholder){
        getElementsPlaceholder.forEach(e => {
          if (e.contains(element)) { 
            e.style.backgroundColor = ''
            e.className = '';
          }
        });
      }
      replaceScripts(`[data-jgc-tag="necessary"]`) 
    }
  }
  if(getElementsToHide.length > 0) removeScript(true)
}

/**
* Remove all divs that hide user accepted iframes                                                                   
*/
export function removeDivsOfUserAcceptedIframes(){
  let checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));
  for (let [k, v] of Object.entries(checkPreferencesFromStorage)) {
    if(k != 'necessary'){
      let getDivsToRemove = document.querySelectorAll('[data-jgc-remove-style]')
      for (let i = 0; i < getDivsToRemove.length; i++) {
        const element = getDivsToRemove[i];
        if(element.getAttribute('data-jgc-tag') == k && v == true) element.remove()
      }
    }
  }
}

/**
* Remove scripts from the DOM (if necessary)
*/
export function removeScript(value){
  let scriptsToRemove = document.querySelectorAll('[data-jgc-remove]')
  if(value && scriptsToRemove.length > 0){
    let getPreferences = getCookie('JgcPreferences');
    let saveObj = { ...getPreferences, remove: scriptsToRemove.length }
    saveCookie(saveObj)
    let checkPreferences = getCookie('JgcPreferences');
    let servicesToReturn = []
    scriptsToRemove.forEach((element) => {
      const service = element.getAttribute('data-jgc-service')
      if(service && service.length > 0) {
        const item = { service: service, tag: element.getAttribute('data-jgc-tag') }
        servicesToReturn.push(item)
        const updatedObj = { ...saveObj, servicesRemoved: servicesToReturn };
        saveCookie(updatedObj)
      }
      if(!checkPreferences['preferences'][element.getAttribute('data-jgc-tag')] || checkPreferences['preferences'][element.getAttribute('data-jgc-tag')] == false ) element.remove()
    });
  } else {
    let getPreferences = getCookie('JgcPreferences');
    let saveObj = { ...getPreferences, remove: 0 }
    saveCookie(saveObj)
    if(!getPreferences['refresh']) {
      const updatedObj = { ...saveObj, refresh: true };
      saveCookie(updatedObj)
      window.location.reload();
    }
  }
}

/**
* Replace the attribute "jgc" from scripts if the user accepts
*/
export function replaceScripts(customAttributeToCheck){
  let getElementsToShow = document.querySelectorAll(customAttributeToCheck)
  for (let i = 0; i < getElementsToShow.length; i++) {
    const element = getElementsToShow[i];
    element.style.display = '';
    element.style.backgroundColor = '';
    let customTypeAttribute = element.getAttribute('data-jgc-type');
    if(customTypeAttribute) element.setAttribute('type', customTypeAttribute);
    let customSrc = element.getAttribute('data-jgc-src') ? element.getAttribute('data-jgc-src').escape() : null;
    if(customSrc){
      const isFirefox = typeof InstallTrigger !== 'undefined'; // Need this to turn on some cookies on FF
      if(isFirefox){
        setTimeout(() => {
          element.setAttribute('src', customSrc);
        }, 100);
      } else {
        element.setAttribute('src', customSrc);
      }
      element.classList.remove(checkTailwindPrefix('hidden'))
    }
    // TODO: This part can be improved
    if(element.hasAttribute('data-jgc-remove')){
      if (element.hasChildNodes()) {
        for (let i = 0; i < element.children.length; i++) {
          const el =  element.children[i];
          if(el.hasAttribute('data-jgc-src')){
            let customSrc = el.getAttribute('data-jgc-src').escape();
            el.setAttribute('src', customSrc);
          }
        }
      }
    }
  }
}