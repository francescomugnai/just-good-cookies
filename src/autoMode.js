import JGC from './justgoodcookies';
import { getCookie, saveCookie }  from "./cookies";
import { checkTailwindPrefix }  from "./utilities";
import { generateIframeDivs }  from "./placeholders";

/**
* Enable Auto Mode
*/
export function autoMode(arrToActivate){
  let objKeys = Object.keys(JGC.autoCategories)
  let arrService = []
  if(arrToActivate){
    for (let [k, v] of Object.entries(JGC.autoCategories)) {
      if(!arrToActivate.includes(v[1])){
        let scripts = document.querySelectorAll('iframe,script,link')
        for(const element of scripts) {
          if(!element.getAttribute('data-jgc-tag')){
            const src = element.src ||(element.tagName == 'LINK' ? element.getAttribute("href") : undefined)
            if(src && src.includes(k)){
              if(element.tagName == 'IFRAME') generateIframeDivs(element)
              removeElements(element)
            } else {
              element.classList.remove(checkTailwindPrefix('hidden'))
            }
          }
        }
      } else {
        const removeStyle = document.querySelectorAll("[data-jgc-remove-style]")
        if(removeStyle){
          for (let i = 0; i < removeStyle.length; i++) {
            const element = removeStyle[i];
            if(element.getAttribute('data-jgc-remove-style') == k) element.remove()
          }
        }
      }
    } 
  } else {
    setTimeout(() => {
      let checkedElement = undefined 
      document.querySelectorAll('iframe,script,link').forEach((element) => {
        const src = element.src ||(element.tagName == 'LINK' ? element.getAttribute("href") : undefined)
        if(src) {
          if(!element.getAttribute('data-jgc-tag')){
            element.classList.remove(checkTailwindPrefix('hidden'))
            if(objKeys.some((v) => {
              if(src && src.includes(v)){
                arrService.push(JGC.autoCategories[v])
                checkedElement = v
                return src.includes(v)
              }
            })){
              let checkIfNecessary = Object.values(JGC.autoCategories[checkedElement])
              if(checkIfNecessary[1] != 'necessary'){
              if(element.tagName == 'IFRAME') generateIframeDivs(element)
              removeElements(element)
            }
          } 
          } 
        }
    })
    generatePreferenceStorage()
    }, 1);
  }
}

/**
* Check active cookies in AutoMode
*/
export function checkCookiesAutoMode(){
  if(JGC.auto){
    let checkPreferences = getCookie('JgcPreferences');
    let trueArr = []
    for (let [k, v] of Object.entries(checkPreferences['preferences'])) if(v) trueArr.push(k)
    for (let i = 0; i < trueArr.length; i++) {const element = trueArr[i];}
    autoMode(trueArr)
  }
}

/**
* Generate the storage for "JgcPreferences"
*/
export function generatePreferenceStorage(){
  let checkPreferences = getCookie('JgcPreferences');
  if(checkPreferences == null){
    let preferences = {}
    for (let [k, v] of Object.entries(JGC.getCustomCookies)) k == 'necessary' ? preferences[k] = true : preferences[k] = false
    let saveObj = { preferences }
    saveCookie(saveObj)
  } 
}

/**
* Remove elements and siblings from DOM in AutoMode.
*/
export function removeElements(element){
  let nextSibling = element.nextSibling
  // Need a quick timeout
  setTimeout(() => {
    element.parentNode.removeChild(element)
    element.remove()
    if(nextSibling && nextSibling.tagName == 'IFRAME') nextSibling.remove()
  }, 1);
}