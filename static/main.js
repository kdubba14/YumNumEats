

if ('serviceWorker' in navigator) {
  console.log("service worker present");
  window.addEventListener('load', () => {
    console.log("loading")
    navigator.serviceWorker
    .register('/sw-cached.js')
    .then(registration => {
      console.log('service worker registration successful', registration)
    })
    .catch(err => {
      console.warn('service worker registration failed', err)
    })
  })
}