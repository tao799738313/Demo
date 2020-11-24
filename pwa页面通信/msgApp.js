
// 连接serviceWorker
navigator.serviceWorker
  .register('./msgAppsw.js', { scope: './' })
  .then(req => {
    console.log(req)
  })
  .catch(e => {
    console.log(e)
  })
1
const input = document.getElementById('input')
const btn = document.getElementById('btn')
btn.onclick = function() {
  console.log(input)
  // 发送消息给serviceWorker
  navigator.serviceWorker.controller.postMessage(input.value)
}
// 监听（后端）传来的消息
navigator.serviceWorker.addEventListener('message', function(e) {
  const ul = document.getElementsByTagName('ul')[0]
  const li = document.createElement('li')
  li.innerHTML = e.data.message
  ul.appendChild(li)
})
