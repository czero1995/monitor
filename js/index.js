// 必须在onload事件里面执行事件，否则加载完成的时间打印出来为0
// const navTimes = performance.getEntriesByType('navigation')[0]
const monitor = performance
const memory = monitor.memory
const navigation = monitor.navigation
const timing = monitor.timing
console.log('monitor',timing)
window.onload = function(){
  

  // DNS寻址时间
  const dnsTime = timing.domainLookupEnd-timing.domainLookupStart
  console.group('DNS寻址时间')
  console.log('DNS开始domainLookupStart:',timing.domainLookupStart)
  console.log('DNS结束domainLookupEnd:',timing.domainLookupEnd)
  console.groupEnd()

  // TCP连接耗时
  const tcpTime = timing.connectEnd-timing.connectStart
  console.group('TCP连接耗时')
  console.log('TCP连接开始connectStart:',timing.connectStart)
  console.log('TCP连接结束connectEnd:',timing.connectEnd)
  console.groupEnd()

  // 统计白屏时间
  const whiteTime = timing.domLoading - timing.fetchStart
  console.group('统计白屏时间')
  console.log('白屏统计开始fetchStart:',timing.fetchStart)
  console.log('白屏统计结束domLoading:',timing.domLoading)
  console.groupEnd()
  // 请求耗时
  const requestTime = timing.responseEnd-timing.requestStart
  console.group('请求耗时')
  console.log('Request请求开始requestStart:',timing.requestStart)
  console.log('Request结束responseEnd:',timing.responseEnd)
  console.groupEnd()

  // DOM开始前所花费的时间
  const domBeforeTime = timing.responseEnd - timing.navigationStart
  console.group('DOM开始前所花费的时间')
  console.log('navigationStart:',timing.navigationStart)
  console.log('responseEnd:',timing.responseEnd)
  console.groupEnd()

  // 解析DOM树完成时间
  const domTime = timing.domInteractive - timing.domLoading
  console.group('解析DOM树完成时间')
  console.log('domLoading:',timing.domLoading)
  console.log('domInteractive:',timing.domInteractive)
  console.groupEnd()

  // 脚本加载时间
  const scriptTime = timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart
  console.group('脚本加载时间')
  console.log('domContentLoadedEventStart:',timing.domContentLoadedEventStart)
  console.log('domContentLoadedEventEnd:',timing.domContentLoadedEventEnd)
  console.groupEnd()

  // 页面加载完成的时间
const domComplete = timing.domComplete - timing.fetchStart
  console.group('页面加载完成的时间')
  console.log('页面加载完成domComplete:',domComplete)
  console.groupEnd()

console.group('总统计:')
console.log('DNS寻址时间:',dnsTime/1000+ 's')
console.log('TCP连接耗时:',tcpTime/1000 + 's')
console.log('白屏时间:',whiteTime/1000 + 's')
console.log('请求耗时:',requestTime/1000 + 's')
console.log('DOM开始前所消耗的时间:',domBeforeTime/1000 + 's')
console.log('解析DOM树耗时:',domTime/1000 + 's')
console.log('脚本加载时间:',scriptTime/1000 + 's')
console.log('页面加载时间:',domComplete/1000 + 's')
console.groupEnd()
}







// // 请求资源耗时
// const [{ startTime, responseEnd }] = performance.getEntriesByType('resource')
// const srcTime = responseEnd-startTime
// console.log('startTime',startTime)
// console.log('responseEnd',responseEnd)
// console.warn('资源加载耗时',srcTime)

