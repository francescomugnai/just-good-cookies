
import JGC from './justgoodcookies';
import { checkTailwindPrefix  }  from "./utilities";
import { refreshLocalStorage, getCookie, saveCookie }  from "./cookies";
import { closeBanner }  from "./banner";
import { activateToggledCookies, removeScript } from './scripts'

/**
* Animate toggles
*/
export function animateToggle(val, buttonType){
  let toggle = document.getElementById('toggle-'+ buttonType+'-div')
  let toggleRight = document.getElementById('toggle-'+buttonType+'-right')
  let toggleNecessary = document.getElementById('toggle-necessary-right-fixed')
  const bgColor = JGC.customStyle?.toggles ? JGC.customStyle.toggles : checkTailwindPrefix('bg-green-200')
  if(val && (toggle != null && toggleRight != null)){
    toggle.classList.remove(checkTailwindPrefix('bg-gray-800'), checkTailwindPrefix('dark:bg-gray-700'))
    toggle.classList.add(bgColor)
    toggleRight.classList.remove(checkTailwindPrefix('translate-x-0'))
    toggleRight.classList.remove(checkTailwindPrefix('ml-0.5'))
    toggleRight.classList.add(checkTailwindPrefix('-ml-0.5'))
    toggleRight.classList.add(checkTailwindPrefix('border-green-400'))
    // toggleRight.classList.add(checkTailwindPrefix('translate-x-full'))
    toggleRight.classList.remove(checkTailwindPrefix('left-0'))
    toggleRight.classList.add(checkTailwindPrefix('absolute'))
    toggleRight.classList.add(checkTailwindPrefix('right-0'))
  } else if(!val) {
    toggle.classList.remove(checkTailwindPrefix('translate-x-full'))
    toggle.classList.remove(bgColor)
    toggle.classList.add(checkTailwindPrefix('bg-gray-800'), checkTailwindPrefix('dark:bg-gray-700'))
    toggleRight.classList.remove(checkTailwindPrefix('-ml-0.5'))
    toggleRight.classList.remove(checkTailwindPrefix('translate-x-full'))
    toggleRight.classList.remove(checkTailwindPrefix('border-green-400'))
    toggleRight.classList.add(checkTailwindPrefix('ml-0.5'))
    toggleRight.classList.add(checkTailwindPrefix('translate-x-0'))
    toggleRight.classList.add(checkTailwindPrefix('left-0'))
  } else if(val && buttonType == 'necessary' && toggleNecessary){
    toggle.classList.remove(checkTailwindPrefix('bg-gray-800'), checkTailwindPrefix('dark:bg-gray-700'))
    toggle.classList.add(bgColor)
    toggleNecessary.classList.remove(checkTailwindPrefix('ml-0.5'))
    toggleNecessary.classList.add(checkTailwindPrefix('-ml-0.5'))
    toggleNecessary.classList.remove(checkTailwindPrefix('translate-x-0'))
    toggleNecessary.classList.add(checkTailwindPrefix('border-green-400'))
    // toggleNecessary.classList.add(checkTailwindPrefix('translate-x-full'))
    toggleNecessary.classList.remove(checkTailwindPrefix('left-0'))
    toggleNecessary.classList.add(checkTailwindPrefix('absolute'))
    toggleNecessary.classList.add(checkTailwindPrefix('right-0'))
  }
}

/**
* Change toggles and settings
*/
export function changeSettings(toggleClicked){
  let checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));
  checkPreferencesFromStorage[toggleClicked] = !checkPreferencesFromStorage[toggleClicked];
  animateToggle(checkPreferencesFromStorage[toggleClicked], toggleClicked)
  let saveObj = {...checkPreferencesFromStorage }
  localStorage.setItem("JgcPreferences", JSON.stringify(saveObj));
}

/**
* Change the value of toggles
*/
export function changeToggle(){
  let checkPreferences = getCookie('JgcPreferences');
  for (let [k, v] of Object.entries(checkPreferences['preferences'])) if(v == true) animateToggle(true, `${ k }`)
}

/**
* Close the settings panel and reload the page
*/
export function closePreferencePanel(){ 
  activateToggledCookies() 
  removeScript(false)
  let date = new Date();
  date.setTime(date.getTime() + JGC.cookieTimeout);
  const item = {
    value: "1",
    expiry: date
  }
  let checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));
  let getPreferences = getCookie('JgcPreferences');
  let saveObj = {
    ...getPreferences,
    preferences: checkPreferencesFromStorage,
    duration: item
  }
  saveCookie(saveObj)
  closeBanner()
  // And yes, we need to refresh the page to activate specific cookies. Maybe this part can be improved.
  window.location.reload() 
}

/**
* Change the local storage on "Save All"
*/
export function closePreferencePanelAndSaveAll(){ 
  let checkPreferencesFromStorage = JSON.parse(localStorage.getItem("JgcPreferences"));
  let preferences = {}
  for (let [k, v] of Object.entries(checkPreferencesFromStorage)) preferences[k] = true
  localStorage.setItem("JgcPreferences", JSON.stringify(preferences));
  if(document.getElementById('preferenceDiv')) closePreferencePanel()
}

/**
* Generate single options (for the panel)
*/
export function generateOptions(){
  let arr = [],
  cookieExists = getCookie('JgcPreferences');
  for (let [k, v] of Object.entries(JGC.getCustomCookies)) {
    if(cookieExists['enable'].length > 0 && cookieExists['enable'].includes(k)) {
      arr+= `
        <div class="${checkTailwindPrefix('flex items-center space-x-6 py-1 px-4')} ${ JGC.customStyle?.stripes ? `${ JGC.customStyle.stripes }` : '' } "> 
          <div>
            <div class="${checkTailwindPrefix('flex items-center justify-center')}">
            <div id="toggle-${ k }-div" class="${checkTailwindPrefix('relative w-12 h-7 transition duration-200 ease-linear rounded-full bg-gray-800 dark:bg-gray-700')}">
              <label id="${ k == 'necessary' ? `toggle-necessary-right-fixed`: `toggle-${ k }-right` }"
                for="toggle-${ k }" class="${checkTailwindPrefix('bg-gray-100 absolute left-0 w-6 h-6 mt-0.5 ml-0.5 transition duration-100 ease-linear transform rounded-full cursor-pointer mr-[2px]')}">
                ${ k == 'necessary' ? `
                <div class="${checkTailwindPrefix('p-1 flex items-center justify-center')}">
                  <svg class="${ JGC.customStyle?.lockIcon ? JGC.customStyle.lockIcon : checkTailwindPrefix('text-green-600')}" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
                    <g>
                      <path d="m432,224h-48v-96c0-70.578-57.422-128-128-128s-128,57.422-128,128v96h-48c-8.836,0-16,7.164-16,16v256c0,8.836 7.164,16 16,16h352c8.836,0 16-7.164 16-16v-256c0-8.836-7.164-16-16-16zm-272-96c0-52.938 43.063-96 96-96s96,43.063 96,96v96h-16v-96c0-44.109-35.891-80-80-80s-80,35.891-80,80v96h-16v-96zm48,96v-96c0-26.469 21.531-48 48-48 26.469,0 48,21.531 48,48v96h-96zm208,256h-320v-224h320v224z"/>
                      <path d="m256,304.002c-17.673,0-32,14.326-32,32 0,11.814 6.476,22.018 16,27.561v36.439c0,8.836 7.163,16 16,16 8.837,0 16-7.164 16-16v-36.439c9.524-5.543 16-15.747 16-27.561 0-17.674-14.327-32-32-32z"/>
                    </g>
                  </svg>
                </div>
                `: `` }
              </label>
              <input tabindex="0" type="checkbox" id="toggle-${ k }" name="toggle-${ k }" class="${checkTailwindPrefix('w-full h-full appearance-none focus:shadow-2xl ')}"/>
            </div>
          </div>
        </div>
      <div class="${ JGC.customStyle?.servicesTag ? JGC.customStyle.services : `${checkTailwindPrefix('dark:text-gray-300')}` } ${checkTailwindPrefix('w-full')}">
          <div class="${checkTailwindPrefix('flex items-center space-x-2')}">
            <h4 class="${checkTailwindPrefix('font-bold text-md')}">${ v.title }</h4> 
          </div>
          <div class="${ JGC.customStyle?.panelText ? JGC.customStyle.panelText : `${checkTailwindPrefix('dark:text-gray-300')}` } ${checkTailwindPrefix('text-xs md:text-md')}">${ v.description }</div>
          ${ returnServices(k) }
        </div>
      </div>`
      setTimeout(() => {
        document.getElementById(`toggle-${ k }-right`) && document.getElementById(`toggle-${ k }-right`).addEventListener('click', () => changeSettings(`${ k }`)) 
        let getLabel = document.getElementById(`toggle-${ k }`)
        if(getLabel){
          getLabel.addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
              e.preventDefault();
              changeSettings(`${ k }`)
            }
          });
        }
        if(JGC.config.layout == 'style8') changeToggle()
      }, 1);
    }
  }
  return arr
}

/**
* Load preferences
*/
export function loadPreferences(){
  const findPreferenceButton = document.querySelectorAll('[data-jgc-preferences]')
  const preferenceButton = findPreferenceButton[0]
  if(preferenceButton) preferenceButton.addEventListener('click', () => managePreferences())
}

/**
* Return an array of services 
*/
function makeArrForServices(value){
  return `<div class="${ JGC.customStyle?.toggles ? JGC.customStyle.toggles : checkTailwindPrefix('bg-green-200') } 
  ${ JGC.customStyle?.servicesTag ? JGC.customStyle.servicesTag : checkTailwindPrefix('text-green-800') } 
  ${ checkTailwindPrefix('px-2 py-0.5 rounded') }">${ value }</div>`
}

/**
* Generate panel
*/
export function managePreferences(){
  document.body.classList.add(checkTailwindPrefix('overflow-hidden'));
  closeBanner()
  let panelExists = document.querySelector("#preferenceDiv") != null;
  if(!panelExists) {
    let cookiePanel = document.createElement("div");
    cookiePanel.innerHTML = `
    <div id="preferenceDiv" style="background-color: rgba(0,0,0,0.6);z-index:9999 !important;" class="${checkTailwindPrefix('w-full min-h-screen top-0 fixed flex flex-col p-6 shadow-2xl items-center justify-center mx-auto transition duration-700 ease-in-out')} ${ JGC.panelHeader ? '' : null } ">
        ${ JGC.panelHeader ? `<div id="jgc-custom-header" class="${checkTailwindPrefix('w-full')}"></div>` : '' }
          <div class="${ JGC.panel?.bgColor ? JGC.panel.bgColor : `${JGC.customStyle?.preferenceDiv ? JGC.customStyle.preferenceDiv : checkTailwindPrefix('bg-white dark:bg-gray-800 max-w-3xl w-full')}`} ${ JGC.panel?.padding == false ? '' : `${checkTailwindPrefix('p-2')}` }">
            <div class="${ JGC.customStyle?.panelHeader ? JGC.customStyle.panelHeader : `${checkTailwindPrefix('md:flex justify-between px-4 py-4')}` }">
              <h2 class="${ JGC.customStyle?.panelTitle ? JGC.customStyle.panelTitle : checkTailwindPrefix('dark:text-gray-300 leading-snug text-xl font-bold m-0 p-0')}">
                ${ JGC.text?.panelTitle ? JGC.text.panelTitle : '' } 
              </h2>
              <div class="${checkTailwindPrefix('space-x-1 md:mt-0 mt-4')}">
                <button role="button" id="closePreferencePanel" type="button" class="${ JGC.customStyle?.saveButton ? JGC.customStyle.saveButton : `${checkTailwindPrefix('px-3 py-1 uppercase font-bold tracking-wide text-xs z-index-10 relative rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer text-green-600 ring-1 ring-green-600')}` } ">
                  ${ JGC.text?.saveButton ? JGC.text.saveButton : JGC.locale.saveAndContinue }  
                </button>
                <button role="button" id="closePreferencePanelAcceptAll" type="button" class="${ JGC.customStyle?.saveAllButton ? JGC.customStyle.saveAllButton : `${checkTailwindPrefix('px-3 py-1 uppercase font-bold tracking-wide text-xs z-index-10 relative rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer text-green-600 ring-1 ring-green-600')}` }  ">
                  ${ JGC.text?.saveAllButton ? JGC.text.saveAllButton : JGC.locale.saveAndContinueAcceptAll }  
                </button>
              </div>
            </div>
            <div>
              <div style="overflow-y: scroll; -webkit-overflow-scrolling: touch; max-height: calc(100vh - 400px);" class="${ JGC.panel && JGC.panel.stripes ? `${ JGC.panel.stripes.odd } ${ JGC.panel.stripes.even }` : checkTailwindPrefix('space-y-4 overflow-y-auto')} ${checkTailwindPrefix('text-sm py-4')}"> 
                ${ generateOptions() }
              </div> 
            </div>
          </div>
          ${ JGC.panelFooter ? `<div id="jgc-custom-footer" class="${checkTailwindPrefix('w-full')}"></div>` : '' }
        </div>
    </div>
    `;
    document.body.appendChild(cookiePanel);
    if(JGC.panelHeader) document.getElementById('jgc-custom-header').innerHTML = JGC.panelHeader 
    if(JGC.panelFooter) document.getElementById('jgc-custom-footer').innerHTML = JGC.panelFooter
    document.getElementById('closePreferencePanel').addEventListener('click', () => closePreferencePanel()) 
    document.getElementById('closePreferencePanelAcceptAll').addEventListener('click', () => closePreferencePanelAndSaveAll())
  } else {
    document.querySelector("#preferenceDiv").classList.remove(checkTailwindPrefix('hidden'))
  }
  changeToggle()
}

/**
*  Add the click event to fire the settings panel 
*/
export function  managePreferencesLinkListener(){
  refreshLocalStorage()
  const preferenceButton = document.getElementById('openPanel')
  preferenceButton.addEventListener('click', () => managePreferences())
}

/**
* Fire the settings panel
*/
export function managePreferencesLink(colors){
let createButton = document.createElement("div");
return createButton.innerHTML = `
  <button id="openPanel" style=${ JGC.customStyle?.preferencesText ? '': 'font-size:0.6rem' } ;" class="${ colors ? colors : `${ JGC.customStyle?.preferencesText ? JGC.customStyle.preferencesText : checkTailwindPrefix('font-bold uppercase dark:text-white') }` }">
    ${ JGC.text.preferencesText ?? 'Manage and choose cookies' } 
  </button>`
}

/**
* Open panel
*/
export function openPanel(){
  let getPreferences = getCookie('JgcPreferences');
  let refreshed = getPreferences['refresh'];
  if(refreshed == null && (JGC.panel && JGC.panel.open)) {
      let banner = document.getElementById('bannerContent')
      if(JGC.config.layout == 'style8'){ // Style8 is a bit particular...
        banner.remove()
        setTimeout(() => {
          managePreferences() 
        }, 200);
      } else {
        managePreferences()
      }
  }
}

/**
* Return services
*/
function returnServices(service){
  let getElementsJgc = document.querySelectorAll(`[data-jgc-tag="${service}"]`);
  let arr = []
  let divsToReturn = []
  let checkPreferences = getCookie('JgcPreferences');
  let check = undefined
  if(getElementsJgc){
    for (let index = 0; index < getElementsJgc.length; index++) {
      const element = getElementsJgc[index];
      const getService = element.getAttribute('data-jgc-service') ? element.getAttribute('data-jgc-service').escape() : null
      if(getService) {
        if(element.hasAttribute('data-jgc-remove')) check = true
        arr+= makeArrForServices(getService)
      }
    }
  } 

  if(checkPreferences['servicesRemoved']?.length > 0 && !checkPreferences['duration']){
    if(!check){
      for (let index = 0; index < checkPreferences['servicesRemoved'].length; index++) {
        const element = checkPreferences['servicesRemoved'][index];
        const getService = element['service']
        const getTag = element['tag']
        if(getTag == service) arr+= makeArrForServices(getService)
      }
    }
  }

  if(JGC.auto){
    const objKeys = Object.values(JGC.autoCategories)
    objKeys.forEach((el, k) => {
      if(service == el[1]) arr+= makeArrForServices(el[0])
    });
  }

  if(JGC.activate){
    const objEntries = Object.entries(JGC.activate)
    for (let i = 0; i < objEntries.length; i++) {
      const element = objEntries[i];
      if(element[1].dataJgcService && service == element[1].dataJgcTag){
        arr+= makeArrForServices(element[1].dataJgcService)
      }
    }
  }

  divsToReturn+= `<div class="${ arr.length > 0 ? checkTailwindPrefix('mt-2 border-t') : '' }"> 
    ${ arr.length > 0 ? `<h4 class="${checkTailwindPrefix('text-xs mt-1')} ${JGC.customStyle?.servicesText ?? ''}">${JGC.text.servicesTag}</h4>`: '' }
    <div class="${checkTailwindPrefix('flex space-x-1 mt-2 text-xs font-semibold')}">${ arr }</div>
    </div>`
  return divsToReturn
}

/**
* Grab the custom tags and write an item to local storage
*/
export function setPreferences(){
  let preferences = {}
  for (let [k, v] of Object.entries(JGC.getCustomCookies)) preferences[k] = true
  let getPreferences = getCookie('JgcPreferences');
  let saveObj = { ...getPreferences, preferences }
  saveCookie(saveObj)
}