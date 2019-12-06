export default () => {
  Function.prototype.after = function (fn) {
    return () => {
      let ret = this(...arguments)
      if (ret) {
        return ret
      }
      return fn(...arguments)
    }
  }
}