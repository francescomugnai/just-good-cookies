import JGC from './justgoodcookies';
import { checkTailwindPrefix }  from "./utilities";
import { addEnterAction }  from "./utilities";
import { managePreferencesLinkListener  }  from "./preferences";

/**
 * Close banner
 */
export function closeBanner() {
  let banner = document.getElementById('bannerContent')
  if(banner){
    banner.classList.add(checkTailwindPrefix('opacity-0'), checkTailwindPrefix('pointer-events-none'))
    if(JGC.config.layout != 'style8'){ // "style8" is a little special. I can not use animations here because the toggle switches repeat in 2 different areas.
      setTimeout(() => {
        banner.remove() // I need this timeout for the fade out animation
      }, 700);
    } else {
      banner.remove()
    }
  }
};

/**
* Close banner with button
*/
export function closeBannerWithButton(){
  JGC.bannerConfig.closeButtonAccept ? JGC.yesCookies() : JGC.noCookies()
}

/**
* Make banner buttons
*/
export function generateButtons(){
  document.getElementById('yesCookies').addEventListener('click', () => JGC.yesCookies())
  addEnterAction('yesCookies')
  if(JGC.bannerConfig?.disableReject == false ) {
    document.getElementById('noCookies').addEventListener('click', () => JGC.noCookies())
    addEnterAction('noCookies')
  }
  managePreferencesLinkListener()
}

/**
* Animate banner
*/
export function makeBannerAnimation(){
  if(JGC.bannerConfig.animation){
    const bannerDiv = document.getElementById('bannerContent')
    switch (JGC.bannerConfig?.position || 'bottom') {
      case 'top':
        if(bannerDiv){
          if(JGC.config.layout == 'style7'){
            document.getElementById('jgc-close-button').classList.remove(checkTailwindPrefix('-top-[8px]'))
            document.getElementById('jgc-close-button').classList.remove(checkTailwindPrefix('rounded-tr-lg'))
            document.getElementById('jgc-close-button').classList.remove(checkTailwindPrefix('rounded-tl-lg'))
            document.getElementById('jgc-close-button').classList.add(checkTailwindPrefix('-bottom-[40px]'))
            document.getElementById('jgc-close-button').classList.add(checkTailwindPrefix('rounded-br-lg'))
            document.getElementById('jgc-close-button').classList.add(checkTailwindPrefix('rounded-bl-lg'))
          }
          bannerDiv.classList.add(checkTailwindPrefix('-translate-y-full'))
          setTimeout(() => {
            bannerDiv.classList.remove(checkTailwindPrefix('-translate-y-full'))
            bannerDiv.classList.add(checkTailwindPrefix('translate-y-0'))
          }, 300);
          break;
        }
        case 'bottom':
          if(bannerDiv){
            bannerDiv.classList.add(checkTailwindPrefix('translate-y-full'))
            setTimeout(() => {
            // bannerDiv.classList.add(checkTailwindPrefix('mb-4'))
            bannerDiv.classList.remove(checkTailwindPrefix('translate-y-full'))
          }, 300);
        }
        break;
      default:
        break;
    }
  }
}

/**
* Show banner
*/
export function showBanner() {
  return JGC.banner.style.display=""
}