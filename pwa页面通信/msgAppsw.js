// 这个相当于是（后端）代码
// 监听页面发来的消息
self.addEventListener('message', function(e) {
  const promise = self.clients.matchAll().then(function(clients) {
    let senderId = e.source ? e.source.id : 'unknow'
    clients.forEach(client => {
      if (senderId === client.id) {
		// 如果id是自己，不管	  
        return
      } else {
		// 群发给页面
        client.postMessage({
          client: senderId,
          message: e.data
        })
      }
    })
  })
  e.waitUntil(promise)
})