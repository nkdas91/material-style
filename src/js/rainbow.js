/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): rainbow.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'rainbow'
const VERSION = '2.0.0'
const DATA_KEY_RAINBOW = 'ms.rainbow'
const JQUERY_NO_CONFLICT = $.fn[NAME]

class Rainbow {
  constructor(element) {
    this._element = element
    this.initRainbow()
  }

  static get VERSION() {
    return VERSION
  }

  static _jQueryInterface() {
    return this.each(function () {
      const $element = $(this)
      let data = $element.data(DATA_KEY_RAINBOW)

      if (!data) {
        data = new Rainbow(this)
        $element.data(DATA_KEY_RAINBOW, data)
      }
    })
  }

  initRainbow() {
    let colorBars = this._element.querySelectorAll('.ms-bar')
    let barCount = colorBars.length

    for (let i = 0; i < barCount; i++) {
      colorBars[i].style.animation = `ms-rainbow ${barCount}s cubic-bezier(0.165, 0.84, 0.44, 1) ${i}s infinite`
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = Rainbow._jQueryInterface
$.fn[NAME].Constructor = Rainbow
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return Rainbow._jQueryInterface
}

export default Rainbow
