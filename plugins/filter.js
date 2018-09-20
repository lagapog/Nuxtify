import Vue from 'vue'

const convertMsToMin = function (ms) {
  const min = Math.floor(ms / 60000)
  const seg = ((ms % 60000) / 1000).toFixed(0)
  return `${min}:${(seg < 10) ? '0' + seg : seg}`
}

Vue.filter('ms-to-min', val =>  convertMsToMin(val) )
