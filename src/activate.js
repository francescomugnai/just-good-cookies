import JGC from './justgoodcookies';

/**
* Activate Google Analytics
*/
export function activateGoogle() {
  let GoogleAnalytics = document.createElement('script');
  let GoogleAnalyticsCode = document.createElement('script');
  let GoogleAnalyticsId = JGC.activate?.GoogleAnalytics?.id ? JGC.activate.GoogleAnalytics.id.escape() : false
  let GoogleAnalyticsAnonymized = JGC.activate?.GoogleAnalytics?.anonymized ? JGC.activate.GoogleAnalytics.anonymized : false
  let GoogleAnalyticsAdStorage = JGC.activate?.GoogleAnalytics?.ad_storage ? JGC.activate.GoogleAnalytics.ad_storage : false
  let GoogleAnalyticsAnalyticsStorage = JGC.activate?.GoogleAnalytics?.analytics_storage ? JGC.activate.GoogleAnalytics.analytics_storage : false
  GoogleAnalytics.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${ GoogleAnalyticsId }`);
  document.head.appendChild(GoogleAnalytics);
  GoogleAnalyticsCode.text = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': '${ GoogleAnalyticsAdStorage == true ? 'granted': 'denied' }',
    'analytics_storage': '${ GoogleAnalyticsAnalyticsStorage == true ? 'granted': 'denied' }',
  });
  gtag('js', new Date());
  gtag('config', '${ GoogleAnalyticsId }', { 'anonymize_ip': ${ GoogleAnalyticsAnonymized ?? false } });`;
  document.head.appendChild(GoogleAnalyticsCode);
}

/**
* Activate Facebook Pixel
*/
export function activateFacebook() {
  if(JGC.activate?.FacebookPixel){
    let FacebookPixel_init = JGC.activate.FacebookPixel.init.escape()
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
    fbq('init', '${ FacebookPixel_init }');
    fbq('track', 'PageView');`;
    document.head.appendChild(FacebookPixel_script);
    FacebookPixel_noscript.setAttribute('width', '1');
    FacebookPixel_noscript.setAttribute('height', '1');
    FacebookPixel_noscript.setAttribute('style', 'display:none');
    FacebookPixel_noscript.setAttribute('src', `https://www.facebook.com/tr?id=${ FacebookPixel_init }&ev=PageView&noscript=1`);
    document.head.appendChild(FacebookPixel_noscript);
  }
}

/**
* Google Tag Manager script
*/
function activateGoogleTagManager(w, d, s, l, i){
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
export function checkActivations(){
  let activations =  {
    "default" : () => {},
    "GoogleAnalytics": () => activateGoogle(),
    "FacebookPixel": () => activateFacebook(),
  }
  if(JGC.activate) Object.keys(JGC.activate).forEach((k) => (activations[k] || activations['default'])())
}

/**
* Activate Google Tag Manager
* TODO: It needs more tests.
*/
export function googleTagManager(){
  if(JGC.activate?.GoogleTagManager){
    let dataObject = { 'event': JGC.activate.GoogleTagManager.event_name };
    let GoogleAnalyticsContainerId = JGC.activate.GoogleTagManager.container_id 
    activateGoogleTagManager(window, document, 'script', 'dataLayer', GoogleAnalyticsContainerId)
    if(JGC.activate.GoogleTagManager.variables){
      JGC.activate.GoogleTagManager.variables.forEach((element) => dataObject[element[0]] = element[1])
    }
    if(typeof dataLayer != 'undefined') dataLayer.push(dataObject);
  }
}

