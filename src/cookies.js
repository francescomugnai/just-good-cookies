import JGC from './justgoodcookies';
import { showBanner }  from "./banner";

/*
* Check the expiration date of the cookie
*/
export function checkCookieExpiration(val){
  let checkPreference = getCookie('JgcPreferences');
  let cookieDuration = JGC.cookieTimeout * 24 * 60 * 60 * 1000;
  let saveObj = {}
  let date = new Date();
  date.setTime(date.getTime() + cookieDuration);
  let item = { value: val, expiry: date }
  if(!checkPreference['duration']) {
    let getPreferences = getCookie('JgcPreferences');
      const uniqueId = Date.now() + Math.random().toString(16).slice(2)
      saveObj = {...getPreferences, duration: item, id: uniqueId}
      saveCookie(saveObj)
    } else {
      let now =  new Date();
      let storedData = new Date(checkPreference['duration']['expiry'])
      if (now.setHours(0, 0, 0, 0) >= storedData.setHours(0, 0, 0, 0)) {
        let getPreferences = getCookie('JgcPreferences');
        delete getPreferences.duration;
        let item = { value: "1", expiry: date }
        saveObj = {...getPreferences, duration: item}
        saveCookie(saveObj)
        showBanner()
      }
  }
}

/**
* Get cookie
*/
export function getCookie(name) {
  let cookie = {}
  document.cookie.split(';').forEach(function(el) {
    let [k,v] = el.split('=')
    cookie[k.trim()] = v
  })
  if(cookie[name]){
    return JSON.parse(cookie[name])
  } else {
    return null
  }
}

/**
* Get cookie preferences (useful for the callbacks from the frontend)
*/
export function getCookieId(name) {
  let cookie = {}
  document.cookie.split(';').forEach(function(el) {
    let [k,v] = el.split('=')
    cookie[k.trim()] = v
  })
  if(cookie[name]){
    const cookieName = JSON.parse(cookie[name])
    return cookieName['id']
  } else {
    return null
  }
}

/**
* Get cookie (useful for a callback from the frontend)
*/
export function getCookiePreferences(name) {
  let cookie = {}
  document.cookie.split(';').forEach(function(el) {
    let [k,v] = el.split('=')
    cookie[k.trim()] = v
  })
  if(cookie[name]){
    const cookieName = JSON.parse(cookie[name])
    return cookieName['preferences']
  } else {
    return null
  }
}

/**
* Refresh the local storage
*/
export function refreshLocalStorage(){
  let checkPreferences = getCookie('JgcPreferences');
  let saveObj = { ...checkPreferences['preferences'] }
  localStorage.setItem("JgcPreferences", JSON.stringify(saveObj));
}

/**
* Save cookie
*/
export function saveCookie(saveObj){
  let checkPreferences = getCookie('JgcPreferences');
  if(checkPreferences && checkPreferences['duration']){
    const expiration = checkPreferences['duration'].expiry
    document.cookie = `JgcPreferences=${JSON.stringify(saveObj)};expires= ${expiration};path=/;SameSite=Strict`
  } else {
    document.cookie = `JgcPreferences=${JSON.stringify(saveObj)};path=/;SameSite=Strict;`
  }
}

/**
* Save cookie categories 
*/
export function saveCookiesPreferences(){
  let arr = [];
  if(JGC.activate) for (let [key, value] of Object.entries(JGC.activate)) arr.push(value.dataJgcTag)
  for (let [k, v] of Object.entries(JGC.getCustomCookies)) arr.push(k)
  let preferences = getCookie('JgcPreferences');
  let saveObj = { ...preferences, enable: arr }
  saveCookie(saveObj)
}