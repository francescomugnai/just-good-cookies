import JGC from './justgoodcookies';
import { getCookie, saveCookie }  from "./cookies";

/**
* Intercept the pressure of the "enter" key
*/
export function addEnterAction(el){
  document.getElementById(el).addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      return 'JGC.'+el+'()'
    }
  })
}

/**
* Control whether the background should be dark or not
*/
export function checkBackground(){
  let getPreferences = getCookie('JgcPreferences');
  if(JGC.bannerConfig.backgroundDark != false){
    if(getPreferences['darkBackground'] == false || getPreferences['darkBackground'] && !getPreferences['duration']){
      var modal = document.createElement("div");
      modal.id = 'jgcModal'
      modal.className = checkTailwindPrefix('bg-black bg-opacity-80 fixed min-h-screen top-0 w-full z-index-50');
      document.body.appendChild(modal);
      let saveObj = {...getPreferences, darkBackground: true }
      saveCookie(saveObj)
    } 
  }
}

/**
* Check if the dark mode should be activated.
*/
export function checkDarkMode(){
  const htmlClass = document.querySelector('html').classList.contains(checkTailwindPrefix('dark'))
  if(htmlClass) JGC.darkMode = true
}

/**
* Check if a prefix for Tailwind has been chosen and updates all class names
*/
export function checkTailwindPrefix(value){
  const colon = /:/;
  if(checkTailwindPrefix){
    if (/\s/.test(value)) {
      let splitWords = value.split(/[ ,]+/)
      let arr = [...splitWords];
      return arr.map(el => {
        if(colon.test(el)){
          const prefix = el.split(':')[0]
          let newstr = ""
          if(el.includes('dark:group-hover')){
            const prefix2 = el.split(':')[1]
            newstr = el.replace(prefix+':'+prefix2+':', `${prefix}:${prefix2}:${JGC.tailwindPrefix}`);
          } else {
            newstr = el.replace(prefix+':', `${prefix}:${JGC.tailwindPrefix}`);
          }
          return newstr
        }else {
          return JGC.tailwindPrefix+el;
        }
      }).join(' ')
    } else {
        if(colon.test(value)){
          const prefix = value.split(':')[0]
          let newstr = ""
          if(value.includes('dark:group-hover')){
            const prefix2 = el.split(':')[1]
            newstr = value.replace(prefix+':'+prefix2+':', `${prefix}:${prefix2}:${JGC.tailwindPrefix}`);
          } else {
            newstr = value.replace(prefix+':', `${prefix}:${JGC.tailwindPrefix}`);
          }
          return newstr
        } else {
          return JGC.tailwindPrefix+value;
        }
    }
  }
}

/**
* Get the max width of the banner
*/
export function getMaxWidth(defaultValue){
  if(JGC.bannerConfig?.maxWidth){
    switch (JGC.bannerConfig.maxWidth) {
      case 'xs':
        return checkTailwindPrefix('max-w-xs')
        break;
      case 'sm':
        return checkTailwindPrefix('max-w-sm')
        break;
      case 'md':
        return checkTailwindPrefix('max-w-md')
        break;
      case 'lg':
        return checkTailwindPrefix('max-w-lg')
        break;
      case 'xl':
        return checkTailwindPrefix('max-w-xl')
        break;
      case '2xl':
        return checkTailwindPrefix('max-w-2xl')
        break;
      case '3xl':
        return checkTailwindPrefix('max-w-3xl')
        break;
      case '4xl':
        return checkTailwindPrefix('max-w-4xl')
        break;
      case '5xl':
        return checkTailwindPrefix('max-w-5xl')
        break;
      case '6xl':
        return checkTailwindPrefix('max-w-6xl')
        break;
      case '7xl':
        return checkTailwindPrefix('max-w-7xl')
        break;
      case 'full':
        return checkTailwindPrefix('max-w-full')
        break;
      case 'min':
        return checkTailwindPrefix('max-w-min')
        break;
      case 'max':
        return checkTailwindPrefix('max-w-max')
        break;
      default:
        break;
    }
  } else {
    return checkTailwindPrefix(defaultValue)
  } 
}

/**
* Check if a value is a boolean
*/
export function isBoolean(value, key){
  if(value != "undefined" && typeof value == 'boolean'){
    return true
  } else if(value != "undefined"){
    return false
  }
   else {
    throw `: "${key}" is not valid, must be a boolean.`
  }
}

/**
* Check if a value is a function
*/
export function isFunction(value, key){
  if (typeof value == "function") {
    return value
  } else {
    throw `: "${key}" is not valid, must be a function.`
  }
}

/**
* Checking whether a value is a string or an object (for translations)
*/
export function isString(value, key){
  if (typeof value === 'string' || value instanceof String){
    return value.escape()
  } else if(typeof value === 'object' || value instanceof Object){
    return value[JGC.localeString].escape()
  } else {
    throw `: "${key}" is not valid, must be a string or an object.`
  }
}

/**
 * Load user-defined text
 */
 export function loadText(){
  let bannerText = document.getElementById('jgc-banner-text')
  if(bannerText) JGC.bannerText = bannerText.innerHTML

  let bannerLink = document.getElementById('jgc-banner-link')
  if(bannerLink) JGC.bannerLink = bannerLink.innerHTML

  let panelHeader = document.getElementById('jgc-panel-header')
  if(panelHeader) JGC.panelHeader = panelHeader.innerHTML

  let panelFooter = document.getElementById('jgc-panel-footer')
  if(panelFooter) JGC.panelFooter = panelFooter.innerHTML
}

/**
* Return icons (if any)
*/
export function returnIcon(){
  if(JGC.bannerConfig.icon && JGC.darkMode != true){
    return `<div><img class="${checkTailwindPrefix('w-4 h-4')}" src="${ JGC.bannerConfig.icon }" /></div>`
  } else if(JGC.bannerConfig.icon && JGC.darkMode == true) {
    return `<div><img class="${checkTailwindPrefix('w-4 h-4')}" src="${ JGC.bannerConfig.iconDark }" /></div>`
  } else if(JGC.bannerConfig.icon == null) {
    return ``
  } 
}

/**
* Return logo (if any)
*/
export function returnLogo(){
  return `${ JGC.bannerConfig.logo ? `<img class="${ JGC.bannerConfig.logoClasses ? JGC.bannerConfig.logoClasses : '' }" src="${ JGC.bannerConfig.logo }" />` : '' }`
}
