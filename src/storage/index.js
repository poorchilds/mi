// storage封装
const STORAGE_KEY = 'mall'

export default {
  // 获取值
  getItem(key, module) {
    var val = this.getStorage()
    if (module) {
      if (val) return val[module][key]
    }
    return val[key] || {}
  },
  // 存值
  setItem(key, value, module) {
    var val = this.getStorage()
    if (module) {
      // console.log(module, key)
      this.getItem(module)
      val[module][key] = value
    } else {
      val[key] = value
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  },
  // 获取整个数据
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 清除某一个值
  clear(key, module) {
    var val = this.getStorage()
    if (module) {
      if (!val[module][key]) return
      delete val[module][key]
    } else {
      if (!val[key]) return
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    // this.setItem()
  }
}
