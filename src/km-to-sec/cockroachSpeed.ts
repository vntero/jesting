export function cockroachSpeed(s) {
    let kmToCm = s * 100000
    let sec = 3600
    let cmPerSec = Math.round(kmToCm / sec)
    return cmPerSec
  }

  module.exports = cockroachSpeed