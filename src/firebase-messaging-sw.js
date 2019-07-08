importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js')

firebase.initializeApp({
  messagingSenderId: '74163403274'
})

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  )
  // Customize notification here
  var notificationTitle = payload.data.heading
  var notificationOptions = {
    body: payload.data.content,
    vibrate: [100, 50, 100],
    icon: 'favicon.ico'
  }

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close()
  var promiseChain = clients.openWindow('/')
  if ('data' in event.notification) {
    var temp = event.notification.data
    if ('openWindow' in clients) {
      promiseChain = clients.openWindow(temp.link)
    }
  }
  event.waitUntil(promiseChain)
})
