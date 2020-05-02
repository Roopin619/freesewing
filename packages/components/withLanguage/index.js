/**
 * @freesewing/components/withLanguage | v2.6.0-rc.0
 * A collection of React components for FreeSewing web UIs
 * (c) 2020 Joost De Cock <joost@decock.org> (https://github.com/joostdecock)
 * @license MIT
 */ 'use strict'
function _interopDefault(a) {
  return a && 'object' == typeof a && 'default' in a ? a['default'] : a
}
var React = _interopDefault(require('react')),
  reactIntl = require('react-intl'),
  i18n = require('@freesewing/i18n')
function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function')
}
function _defineProperties(a, b) {
  for (var c, d = 0; d < b.length; d++)
    (c = b[d]),
      (c.enumerable = c.enumerable || !1),
      (c.configurable = !0),
      'value' in c && (c.writable = !0),
      Object.defineProperty(a, c.key, c)
}
function _createClass(a, b, c) {
  return b && _defineProperties(a.prototype, b), c && _defineProperties(a, c), a
}
function _defineProperty(a, b, c) {
  return (
    b in a
      ? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 })
      : (a[b] = c),
    a
  )
}
function _extends() {
  return (
    (_extends =
      Object.assign ||
      function (a) {
        for (var b, c = 1; c < arguments.length; c++)
          for (var d in ((b = arguments[c]), b))
            Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d])
        return a
      }),
    _extends.apply(this, arguments)
  )
}
function ownKeys(a, b) {
  var c = Object.keys(a)
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a)
    b &&
      (d = d.filter(function (b) {
        return Object.getOwnPropertyDescriptor(a, b).enumerable
      })),
      c.push.apply(c, d)
  }
  return c
}
function _objectSpread2(a) {
  for (var b, c = 1; c < arguments.length; c++)
    (b = null == arguments[c] ? {} : arguments[c]),
      c % 2
        ? ownKeys(Object(b), !0).forEach(function (c) {
            _defineProperty(a, c, b[c])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b))
        : ownKeys(Object(b)).forEach(function (c) {
            Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c))
          })
  return a
}
function _inherits(a, b) {
  if ('function' != typeof b && null !== b)
    throw new TypeError('Super expression must either be null or a function')
  ;(a.prototype = Object.create(b && b.prototype, {
    constructor: { value: a, writable: !0, configurable: !0 }
  })),
    b && _setPrototypeOf(a, b)
}
function _getPrototypeOf(a) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (a) {
          return a.__proto__ || Object.getPrototypeOf(a)
        }),
    _getPrototypeOf(a)
  )
}
function _setPrototypeOf(a, b) {
  return (
    (_setPrototypeOf =
      Object.setPrototypeOf ||
      function (a, b) {
        return (a.__proto__ = b), a
      }),
    _setPrototypeOf(a, b)
  )
}
function _isNativeReflectConstruct() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return !1
  if (Reflect.construct.sham) return !1
  if ('function' == typeof Proxy) return !0
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
  } catch (a) {
    return !1
  }
}
function _assertThisInitialized(a) {
  if (void 0 === a)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return a
}
function _possibleConstructorReturn(a, b) {
  return b && ('object' == typeof b || 'function' == typeof b) ? b : _assertThisInitialized(a)
}
function _createSuper(a) {
  return function () {
    var b,
      c = _getPrototypeOf(a)
    if (_isNativeReflectConstruct()) {
      var d = _getPrototypeOf(this).constructor
      b = Reflect.construct(c, arguments, d)
    } else b = c.apply(this, arguments)
    return _possibleConstructorReturn(this, b)
  }
}
var withLanguage = function (a) {
  var b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 'en',
    c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : {}
  return (function (d) {
    function e(a) {
      var c
      return (
        _classCallCheck(this, e),
        (c = f.call(this, a)),
        (c.strings = i18n.strings),
        (c.setLanguage = c.setLanguage.bind(_assertThisInitialized(c))),
        (c.addTranslations = c.addTranslations.bind(_assertThisInitialized(c))),
        (c.state = { language: b, strings: c.strings[b] }),
        c
      )
    }
    _inherits(e, d)
    var f = _createSuper(e)
    return (
      _createClass(e, [
        {
          key: 'setLanguage',
          value: function (a) {
            this.setState({ language: a, strings: this.strings[a] })
          }
        },
        {
          key: 'addTranslations',
          value: function (a) {
            this.setState({
              language: this.state.language,
              strings: _objectSpread2({}, this.strings[this.state.language], {}, a)
            })
          }
        },
        {
          key: 'render',
          value: function () {
            return React.createElement(
              reactIntl.IntlProvider,
              {
                locale: this.state.language,
                messages: _objectSpread2({}, this.state.strings, {}, c)
              },
              React.createElement(
                a,
                _extends(
                  {
                    language: this.state.language,
                    setLanguage: this.setLanguage,
                    addTranslations: this.addTranslations
                  },
                  this.props
                )
              )
            )
          }
        }
      ]),
      e
    )
  })(React.Component)
}
module.exports = withLanguage
//# sourceMappingURL=index.js.map
