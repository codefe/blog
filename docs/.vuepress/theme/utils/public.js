export function _debounce(fn, delay) {
  delay = delay || 600
  let timer
  
  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, delay);
  }
}