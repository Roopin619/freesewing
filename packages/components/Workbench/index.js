/**
 * @freesewing/components/Workbench | v2.6.0-rc.0
 * A collection of React components for FreeSewing web UIs
 * (c) 2020 Joost De Cock <joost@decock.org> (https://github.com/joostdecock)
 * @license MIT
 */ 'use strict'
function _interopDefault(e) {
  return e && 'object' == typeof e && 'default' in e ? e['default'] : e
}
var React = require('react'),
  React__default = _interopDefault(React),
  storage = _interopDefault(require('@freesewing/utils/storage')),
  styles = require('@material-ui/core/styles'),
  reactIntl = require('react-intl'),
  useMediaQuery = _interopDefault(require('@material-ui/core/useMediaQuery')),
  defaultGist = _interopDefault(require('@freesewing/utils/defaultGist')),
  muiTheme = require('@freesewing/mui-theme'),
  i18n = require('@freesewing/i18n'),
  LanguageIcon = _interopDefault(require('@material-ui/icons/Translate')),
  DarkModeIcon = _interopDefault(require('@material-ui/icons/Brightness3')),
  Button = _interopDefault(require('@material-ui/core/Button')),
  IconButton = _interopDefault(require('@material-ui/core/IconButton')),
  ZoomIcon = _interopDefault(require('@material-ui/icons/Cancel')),
  Slider = _interopDefault(require('@material-ui/core/Slider')),
  RightIcon = _interopDefault(require('@material-ui/icons/KeyboardArrowRight')),
  ResetIcon = _interopDefault(require('@material-ui/icons/SettingsBackupRestore')),
  sliderStep = _interopDefault(require('@freesewing/utils/sliderStep')),
  roundMm = _interopDefault(require('@freesewing/utils/roundMm')),
  roundMmUp = _interopDefault(require('@freesewing/utils/roundMmUp')),
  roundMmDown = _interopDefault(require('@freesewing/utils/roundMmDown')),
  formatMm = _interopDefault(require('@freesewing/utils/formatMm')),
  Radio = _interopDefault(require('@material-ui/core/Radio')),
  RadioGroup = _interopDefault(require('@material-ui/core/RadioGroup')),
  FormControlLabel = _interopDefault(require('@material-ui/core/FormControlLabel')),
  optionType = _interopDefault(require('@freesewing/utils/optionType')),
  optionDefault = _interopDefault(require('@freesewing/utils/optionDefault')),
  defaultSa = _interopDefault(require('@freesewing/utils/defaultSa')),
  FormGroup = _interopDefault(require('@material-ui/core/FormGroup')),
  Checkbox = _interopDefault(require('@material-ui/core/Checkbox')),
  Prism = _interopDefault(require('prismjs')),
  fileSaver = _interopDefault(require('file-saver')),
  theme = _interopDefault(require('@freesewing/plugin-theme')),
  DesignIcon = _interopDefault(require('@material-ui/icons/Fingerprint')),
  DumpIcon = _interopDefault(require('@material-ui/icons/LocalSee')),
  ClearIcon = _interopDefault(require('@material-ui/icons/HighlightOff')),
  AdvancedIcon = _interopDefault(require('@material-ui/icons/Policy')),
  PaperlessIcon = _interopDefault(require('@material-ui/icons/Nature')),
  CompleteIcon = _interopDefault(require('@material-ui/icons/Style')),
  UnhideIcon = _interopDefault(require('@material-ui/icons/ChevronLeft')),
  HideIcon = _interopDefault(require('@material-ui/icons/ChevronRight')),
  models = require('@freesewing/models'),
  TextField = _interopDefault(require('@material-ui/core/TextField')),
  InvalidIcon = _interopDefault(require('@material-ui/icons/Warning')),
  InputAdornment = _interopDefault(require('@material-ui/core/InputAdornment'))
function _typeof(e) {
  '@babel/helpers - typeof'
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          }),
    _typeof(e)
  )
}
function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function _defineProperties(e, t) {
  for (var a, n = 0; n < t.length; n++)
    (a = t[n]),
      (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      'value' in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a)
}
function _createClass(e, t, a) {
  return t && _defineProperties(e.prototype, t), a && _defineProperties(e, a), e
}
function _defineProperty(e, t, a) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = a),
    e
  )
}
function _extends() {
  return (
    (_extends =
      Object.assign ||
      function (e) {
        for (var t, a = 1; a < arguments.length; a++)
          for (var n in ((t = arguments[a]), t))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        return e
      }),
    _extends.apply(this, arguments)
  )
}
function ownKeys(e, t) {
  var a = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })),
      a.push.apply(a, n)
  }
  return a
}
function _objectSpread2(e) {
  for (var t, a = 1; a < arguments.length; a++)
    (t = null == arguments[a] ? {} : arguments[a]),
      a % 2
        ? ownKeys(Object(t), !0).forEach(function (a) {
            _defineProperty(e, a, t[a])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys(Object(t)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
          })
  return e
}
function _inherits(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 }
  })),
    t && _setPrototypeOf(e, t)
}
function _getPrototypeOf(e) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }),
    _getPrototypeOf(e)
  )
}
function _setPrototypeOf(e, t) {
  return (
    (_setPrototypeOf =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e
      }),
    _setPrototypeOf(e, t)
  )
}
function _isNativeReflectConstruct() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return !1
  if (Reflect.construct.sham) return !1
  if ('function' == typeof Proxy) return !0
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
  } catch (t) {
    return !1
  }
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function _possibleConstructorReturn(e, t) {
  return t && ('object' == typeof t || 'function' == typeof t) ? t : _assertThisInitialized(e)
}
function _createSuper(e) {
  return function () {
    var t,
      a = _getPrototypeOf(e)
    if (_isNativeReflectConstruct()) {
      var n = _getPrototypeOf(this).constructor
      t = Reflect.construct(a, arguments, n)
    } else t = a.apply(this, arguments)
    return _possibleConstructorReturn(this, t)
  }
}
function _slicedToArray(e, t) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, t) ||
    _unsupportedIterableToArray(e, t) ||
    _nonIterableRest()
  )
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e
}
function _iterableToArrayLimit(e, t) {
  if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
    var a = [],
      n = !0,
      s = !1,
      l = void 0
    try {
      for (
        var i, r = e[Symbol.iterator]();
        !(n = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t));
        n = !0
      );
    } catch (e) {
      ;(s = !0), (l = e)
    } finally {
      try {
        n || null == r['return'] || r['return']()
      } finally {
        if (s) throw l
      }
    }
    return a
  }
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ('string' == typeof e) return _arrayLikeToArray(e, t)
    var a = Object.prototype.toString.call(e).slice(8, -1)
    return (
      'Object' === a && e.constructor && (a = e.constructor.name),
      'Map' === a || 'Set' === a
        ? Array.from(a)
        : 'Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
        ? _arrayLikeToArray(e, t)
        : void 0
    )
  }
}
function _arrayLikeToArray(e, t) {
  ;(null == t || t > e.length) && (t = e.length)
  for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a]
  return n
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  )
}
function _createForOfIteratorHelper(e) {
  if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
    if (Array.isArray(e) || (e = _unsupportedIterableToArray(e))) {
      var t = 0,
        a = function () {}
      return {
        s: a,
        n: function () {
          return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] }
        },
        e: function (t) {
          throw t
        },
        f: a
      }
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    )
  }
  var n,
    s,
    l = !0,
    r = !1
  return {
    s: function () {
      n = e[Symbol.iterator]()
    },
    n: function () {
      var e = n.next()
      return (l = e.done), e
    },
    e: function (t) {
      ;(r = !0), (s = t)
    },
    f: function () {
      try {
        l || null == n.return || n.return()
      } finally {
        if (r) throw s
      }
    }
  }
}
var withGist = function (e) {
    var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : { gist: {}, store: !1 }
    return (function (a) {
      function n(e) {
        var a
        return (
          _classCallCheck(this, n),
          (a = s.call(this, e)),
          (a.setGist = a.setGist.bind(_assertThisInitialized(a))),
          (a.importGist = a.importGist.bind(_assertThisInitialized(a))),
          (a.updateGist = a.updateGist.bind(_assertThisInitialized(a))),
          (a.state = { gist: t.gist || {} }),
          a
        )
      }
      _inherits(n, a)
      var s = _createSuper(n)
      return (
        _createClass(n, [
          {
            key: 'setGist',
            value: function (e) {
              this.setState({ gist: e }), t.store && storage.set(this.state.gist.name || 'gist', e)
            }
          },
          {
            key: 'importGist',
            value: function (e) {
              if (
                ('undefined' == typeof this.state.gist.settings && this.updateGist({}, 'settings'),
                'undefined' == typeof this.state.gist.settings.options &&
                  this.updateGist({}, 'settings', 'options'),
                'undefined' != typeof e.settings)
              ) {
                for (var t, a = 0, n = Object.keys(e.settings); a < n.length; a++)
                  (t = n[a]), 'options' !== t && this.updateGist(e.settings[t], 'settings', t)
                if ('undefined' != typeof e.settings.options)
                  for (var s, l = 0, i = Object.keys(e.settings.options); l < i.length; l++)
                    (s = i[l]), this.updateGist(e.settings.options[s], 'settings', 'options', s)
              }
              for (var r, c = 0, o = Object.keys(e); c < o.length; c++)
                (r = o[c]), 'settings' !== r && this.updateGist(e[r], r)
            }
          },
          {
            key: 'updateGist',
            value: function (e) {
              var a = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
                n = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
                s = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3]
              if (a) {
                var l = this.state.gist
                n && 'undefined' == typeof l[a] && (l[a] = {}),
                  s && 'undefined' == typeof l[a][n] && (l[a][n] = {}),
                  s ? (l[a][n][s] = e) : n ? (l[a][n] = e) : (l[a] = e),
                  this.setState({ gist: l }),
                  t.store && storage.set(this.state.gist.name || 'gist', l)
              }
            }
          },
          {
            key: 'render',
            value: function () {
              return React__default.createElement(
                e,
                _extends(
                  {
                    gist: this.state.gist,
                    importGist: this.importGist,
                    updateGist: this.updateGist
                  },
                  this.props
                )
              )
            }
          }
        ]),
        n
      )
    })(React__default.Component)
  },
  Logo = function (e) {
    var t = e.size,
      a = void 0 === t ? 24 : t,
      n = e.embed,
      s = e.className,
      l = void 0 === s ? '' : s,
      i = e.color,
      r = void 0 !== i && i,
      c = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 48 48', className: l }
    return (
      (void 0 !== n && n) || ((c.width = a), (c.height = a)),
      React__default.createElement(
        'svg',
        c,
        React__default.createElement('path', {
          fill: r ? r : 'currentColor',
          stroke: 'none',
          d:
            'M 35.222,0 C 34.233,0.703 34.284,0.613 33.485,0.874 31.653,1.473 29.896,1.144 27.811,0.97 27.184,0.9 26.562,0.859 25.955,0.855 22.89,0.834 20.287,1.733 19.794,4.243 18.885,4.794 18.049,5.461 17.221,6.129 15.453,7.524 14.122,9.229 13.214,11.284 11.974,14.319 13.094,17.576 13.649,20.652 13.781,21.372 13.919,22.058 13.993,22.323 14.098,22.696 14.283,23.052 14.484,23.372 14.531,23.38 14.779,22.998 14.838,22.829 14.924,22.583 14.915,22.188 14.821,21.848 14.613,21.083 14.415,20.462 14.398,20.15 14.368,19.564 14.482,19.023 14.696,18.755 14.772,18.66 14.946,19.15 14.901,19.332 14.848,19.551 14.808,19.926 14.825,20.099 14.872,20.685 14.958,21.312 15.065,21.86 15.202,22.567 15.261,23.021 15.236,23.197 15.218,23.325 15.158,23.454 14.928,23.85 14.728,24.197 14.624,24.478 14.608,24.726 14.591,24.968 14.664,25.573 14.732,25.721 14.831,25.952 15.129,26.195 15.389,26.255 15.638,26.35 15.763,26.547 15.891,26.768 16.202,27.361 16.442,28.083 16.68,29.171 16.796,29.692 16.893,30.157 16.924,30.401 15.004,30.403 12.545,30.404 10.305,30.404 9.551,30.416 8.189,30.062 6.94,29.98 6.759,28.026 5.901,25.756 4.433,25.624 3.431,25.533 2.6,25.914 1.897,27.497 L 1.917,27.582 C 2.332,27.235 2.77,26.174 4.348,26.247 5.56,26.302 5.964,28.596 6.084,29.976 5.346,30.03 4.718,30.257 4.39,30.824 L 4.383,30.824 C 4.383,30.825 4.383,30.827 4.386,30.829 4.383,30.831 4.383,30.833 4.383,30.835 L 4.39,30.835 C 4.728,31.416 5.379,31.641 6.144,31.686 6.655,46.136 20.238,48 23.95,48 37.798,48 42.646,38.59 43.375,34.863 43.716,36.451 42.642,38.474 42.385,39.967 45.306,36.59 44.778,33.343 44.244,30.077 44.688,30.605 45.289,30.932 46.104,30.751 45.523,30.363 44.735,30.635 44.263,28.998 44.057,28.291 43.879,27.761 43.702,27.316 43.32,25.883 42.778,24.514 42.112,23.18 41.55,21.733 41.921,20.795 41.865,19.553 42.876,22.887 43.508,23.774 44.688,24.123 41.72,20.547 42.736,15.01 41.059,10.068 41.818,10.514 42.684,10.648 43.606,10.103 42.714,9.849 41.824,10.52 40.544,8.639 39.463,6.536 37.897,4.983 35.997,3.613 34.979,2.949 33.849,2.503 32.713,2.089 33.87,1.799 35.162,0.769 35.222,0 z M 33.281,11.107 C 34.805,11.663 36.485,13.775 36.466,15.847 L 36.466,15.933 36.466,15.963 C 36.425,18.777 35.146,20.29 35.2,22.164 35.269,24.371 36.219,25.141 36.408,25.509 36.084,24.148 35.894,22.436 36.322,21.08 36.872,19.336 37.427,17.892 37.387,16.526 37.367,16.206 37.231,15.009 37.14,14.479 38.774,16.837 36.786,20.266 37.358,22.51 38.352,26.419 42.807,26.913 41.481,34.789 40.314,41.713 32.318,46.968 24.122,46.968 18.046,46.968 7.517,43.605 6.997,31.676 8.232,31.588 9.56,31.244 10.305,31.256 12.557,31.256 15.129,31.257 17.067,31.258 17.431,32.9 17.704,33.296 19.085,34.39 20.621,35.598 20.979,35.745 23.251,35.767 25.524,35.79 26.198,35.303 28.403,33.217 28.879,32.659 29.085,31.928 29.316,31.241 31.584,31.22 33.238,31.18 34.865,31.104 36.522,31.029 36.756,31.104 39.426,30.829 36.756,30.554 36.522,30.629 34.865,30.553 33.281,30.481 31.677,30.44 29.508,30.42 29.69,29.603 29.95,28.805 30.227,28.016 30.398,27.551 30.599,27.098 30.805,26.647 L 31.03,26.577 C 31.464,26.423 31.848,26.093 32.001,25.647 32.198,25.056 32.058,24.392 31.677,23.909 31.546,23.728 31.383,23.497 31.316,23.395 31.115,23.077 31.11,22.9 31.28,21.718 31.423,20.728 31.439,20.21 31.34,19.708 31.32,19.421 31.318,18.831 31.309,18.672 31.385,18.714 31.55,19.09 31.717,19.599 31.883,20.11 31.91,20.216 31.948,20.651 31.99,21.145 31.805,21.511 31.653,22.248 31.577,22.628 31.51,22.981 31.51,23.029 31.51,23.08 31.546,23.188 31.584,23.272 31.673,23.46 31.84,23.724 31.871,23.724 32.416,23.123 32.736,22.381 33.021,21.628 33.321,20.776 33.409,19.872 33.619,18.995 33.789,18.231 33.985,17.466 34.046,16.682 34.169,15.152 34.097,14.072 33.759,12.478 33.678,12.118 33.444,11.431 33.281,11.107 z M 27.921,18.644 C 28.506,18.637 29.085,18.708 29.636,18.867 30.385,19.154 30.49,19.823 30.628,20.574 30.705,21.054 30.702,21.399 30.615,21.963 30.554,22.781 30.229,23.414 29.519,23.859 28.448,24.057 27.303,24.248 26.395,23.539 25.633,22.489 25.174,21.162 25.349,19.868 25.46,19.337 25.707,19.061 26.215,18.896 26.762,18.739 27.341,18.653 27.921,18.644 z M 19.038,18.739 C 19.585,18.734 20.138,18.792 20.442,18.986 21.747,19.869 21.328,21.306 20.812,22.567 20.061,24.218 18.437,24.157 16.863,24.144 15.992,23.889 15.912,23.175 15.786,22.412 15.678,21.675 15.448,20.885 15.64,20.144 16.133,18.952 17.935,18.815 19.038,18.739 z M 38.941,18.945 C 38.948,22.118 39.49,23.677 40.578,25.924 39.937,24.701 39.021,24.005 38.68,22.543 38.028,19.72 38.731,19.878 38.941,18.945 z M 23.128,21.243 C 23.3,21.417 23.383,21.657 23.532,21.848 23.647,21.651 23.765,21.455 23.913,21.28 23.99,21.282 24.084,21.434 24.169,21.706 24.533,22.712 24.604,23.819 25.076,24.786 25.517,25.486 24.915,25.894 24.254,25.926 23.772,25.925 23.568,25.596 23.285,25.27 23.212,25.483 23.073,25.62 22.907,25.764 22.485,26.118 21.658,25.987 21.53,25.429 21.7,24.363 22.243,23.384 22.599,22.362 22.776,21.989 22.778,21.703 23.128,21.243 z M 16.936,26.628 C 17.149,26.628 17.734,27.025 17.853,27.249 17.935,27.398 18.122,27.978 18.135,28.119 18.156,28.287 18.105,28.685 18.053,28.793 18.015,28.87 17.986,28.881 17.942,28.831 17.905,28.789 17.415,27.849 17.102,27.227 16.856,26.729 16.83,26.628 16.936,26.628 z M 29.158,26.939 C 29.166,26.94 29.178,26.943 29.189,26.946 29.255,26.973 29.209,27.207 28.961,28.057 28.914,28.313 28.8,28.515 28.633,28.683 28.578,28.683 28.553,28.619 28.467,28.264 28.394,27.961 28.386,27.691 28.437,27.449 28.525,27.146 28.881,27.053 29.158,26.939 z M 27.675,28.792 C 27.696,28.788 27.716,28.799 27.742,28.82 27.832,28.883 27.845,29.049 27.785,29.374 27.712,29.792 27.696,29.838 27.588,29.881 27.541,29.902 27.457,29.917 27.401,29.917 27.3,29.899 27.274,29.817 27.298,29.693 27.298,29.433 27.374,29.207 27.546,28.94 27.611,28.84 27.644,28.797 27.675,28.792 z M 19.042,28.811 C 19.111,28.811 19.319,28.961 19.396,29.065 19.482,29.175 19.58,29.83 19.525,29.943 19.462,30.085 19.154,30.014 19.069,29.837 19.017,29.731 18.894,29.159 18.894,29.023 18.894,28.897 18.955,28.811 19.042,28.811 z M 26.933,28.984 C 27.017,29.104 27.039,29.258 27.021,29.596 L 27.004,29.904 26.916,29.992 C 26.863,30.041 26.773,30.101 26.719,30.126 26.6,30.182 26.509,30.187 26.492,30.142 26.472,30.082 26.506,29.7 26.543,29.571 26.586,29.438 26.779,29.041 26.843,28.957 26.872,28.88 26.906,28.976 26.933,28.984 z M 21.912,28.966 C 22.093,29.012 22.173,29.175 22.272,29.323 L 22.339,29.455 22.245,29.782 C 22.195,29.962 22.142,30.124 22.126,30.142 22.108,30.162 22.041,30.172 21.942,30.171 21.678,30.164 21.648,30.153 21.577,30.045 L 21.511,29.947 21.567,29.672 C 21.648,29.276 21.687,29.157 21.777,29.055 21.824,29 21.871,28.97 21.912,28.966 z M 20.241,29.249 20.39,29.398 20.415,29.735 C 20.428,29.919 20.434,30.09 20.424,30.111 20.415,30.14 20.361,30.148 20.194,30.148 L 19.977,30.148 C 19.861,30.021 19.825,29.866 19.776,29.706 19.662,29.225 19.662,29.006 19.78,28.977 19.973,28.989 20.1,29.129 20.241,29.249 z M 26.041,29.018 C 26.277,29.081 26.23,29.456 26.229,29.724 26.211,30.158 26.194,30.248 26.138,30.304 26.041,30.401 25.771,30.347 25.64,30.203 25.597,30.151 25.593,30.135 25.627,29.924 25.666,29.667 25.716,29.507 25.827,29.287 25.908,29.129 25.984,29.03 26.041,29.018 z M 20.715,29.038 C 20.728,29.037 20.749,29.038 20.769,29.04 20.919,29.052 21.059,29.15 21.183,29.33 L 21.283,29.477 C 21.292,29.718 21.283,29.972 21.24,30.196 21.214,30.209 21.106,30.229 21,30.239 20.816,30.256 20.799,30.252 20.735,30.196 20.646,30.12 20.621,29.979 20.599,29.511 20.586,29.129 20.595,29.044 20.715,29.038 z M 22.984,29.118 C 23.145,29.152 23.247,29.238 23.292,29.379 23.328,29.5 23.35,30.177 23.315,30.224 23.303,30.244 23.227,30.269 23.14,30.28 22.816,30.321 22.53,30.29 22.502,30.213 22.466,30.125 22.707,29.253 22.796,29.145 22.834,29.061 22.926,29.126 22.984,29.118 z M 25.082,29.124 C 25.153,29.117 25.229,29.185 25.303,29.33 25.363,29.451 25.372,29.493 25.372,29.764 25.372,29.98 25.359,30.073 25.336,30.093 25.316,30.109 25.235,30.138 25.149,30.16 24.999,30.199 24.966,30.203 24.919,30.187 L 24.694,30.146 24.711,30.012 C 24.727,29.837 24.842,29.449 24.923,29.281 24.971,29.181 25.026,29.131 25.082,29.124 z M 24.104,29.127 C 24.151,29.125 24.173,29.136 24.203,29.169 24.274,29.253 24.364,29.501 24.421,29.766 24.497,30.139 24.497,30.138 24.334,30.187 24.263,30.209 24.113,30.232 24.006,30.238 23.653,30.256 23.626,30.235 23.669,29.923 23.703,29.645 23.84,29.207 23.899,29.175 23.963,29.141 24.037,29.142 24.104,29.127 z M 6.111,30.536 C 6.114,30.535 6.118,30.536 6.118,30.536 6.127,30.731 6.127,30.928 6.131,31.124 5.636,31.086 5.272,30.968 5.272,30.829 5.272,30.692 5.623,30.575 6.111,30.536 z M 6.976,30.553 C 7.377,30.603 7.654,30.708 7.649,30.829 7.649,30.951 7.381,31.055 6.983,31.104 6.979,30.921 6.979,30.737 6.976,30.553 z M 25.702,31.086 C 25.736,31.083 25.751,31.08 25.803,31.085 26.011,31.106 26.041,31.119 26.041,31.189 26.041,31.281 25.883,31.558 25.776,31.654 25.726,31.702 25.657,31.742 25.633,31.742 25.513,31.742 25.443,31.489 25.499,31.256 25.533,31.13 25.595,31.091 25.702,31.086 z M 24.947,31.169 C 25.04,31.161 25.13,31.186 25.22,31.198 25.194,31.461 25.076,31.676 24.857,31.819 24.803,31.819 24.776,31.716 24.776,31.491 24.776,31.223 24.79,31.172 24.947,31.169 z M 24.119,31.266 C 24.312,31.266 24.482,31.275 24.49,31.286 24.526,31.32 24.422,31.578 24.269,31.84 24.138,32.073 24.119,32.09 24.038,32.096 23.72,32.06 23.729,31.687 23.68,31.431 23.68,31.279 23.714,31.266 24.119,31.266 z M 21.11,31.295 C 21.331,31.299 21.417,31.332 21.417,31.417 21.417,31.525 21.335,31.74 21.288,31.767 21.217,31.806 21.211,31.804 21.071,31.658 20.85,31.41 20.825,31.364 21.11,31.295 z M 22.174,31.306 C 22.178,31.312 22.221,31.39 22.264,31.478 22.358,31.661 22.365,31.741 22.298,31.802 22.14,31.892 22.107,31.841 21.964,31.75 21.798,31.593 21.667,31.382 21.71,31.338 21.858,31.285 22.021,31.305 22.174,31.306 z M 22.596,31.311 22.991,31.318 C 23.145,31.318 23.278,31.326 23.285,31.338 23.312,31.362 23.225,31.876 23.178,31.992 23.124,32.122 22.935,32.123 22.837,31.969 22.697,31.748 22.605,31.562 22.602,31.434 L 22.596,31.311 z'
        })
      )
    )
  },
  Emblem = function (e) {
    return React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement('span', { className: 'emb' }, e.t1 || 'Free'),
      React__default.createElement('span', { className: 'lem' }, e.t2 || 'Sewing')
    )
  },
  Navbar = function (e) {
    var t = e.home,
      a = void 0 === t ? 'https://freesewing.org/' : t,
      n = e.navs,
      s = void 0 === n ? { left: [], right: [], mleft: {}, mright: {} } : n,
      l = e.logo,
      i = void 0 === l ? React__default.createElement(Logo, { embed: !0, color: '#e9ecef' }) : l,
      r = e.emblem,
      c = void 0 === r ? React__default.createElement(Emblem, null) : r,
      o = useMediaQuery('(max-width:599px)')
    if (o) return null
    var d = function (e, t) {
        var a = t.title || t.text,
          n =
            'string' == typeof t.text
              ? React__default.createElement(reactIntl.FormattedMessage, {
                  id: t.text,
                  'data-test': 'navbar-' + e
                })
              : t.text
        if ('component' === t.type) return t.component
        return 'button' === t.type
          ? React__default.createElement(
              'button',
              {
                title: a,
                onClick: t.onClick,
                key: e,
                className: t.active ? 'active' : '',
                'data-test': 'navbar-' + e
              },
              n
            )
          : React__default.createElement(
              'a',
              {
                href: t.href,
                className: t.active ? 'nav active' : 'nav',
                title: a,
                key: e,
                'data-test': 'navbar-' + e
              },
              n
            )
      },
      m = { href: '#home' }
    'function' == typeof a ? (m.onClick = a) : (m.href = a)
    var p = React__default.createElement(
        'div',
        { className: 'logo' },
        React__default.createElement(
          'a',
          _extends({ id: 'home' }, m, { 'data-test': 'navbar-home' }),
          i
        )
      ),
      u = React__default.createElement(
        'div',
        { className: 'emblem' },
        React__default.createElement('a', m, c)
      )
    return React__default.createElement(
      'header',
      { className: 'navbar' },
      React__default.createElement(
        'div',
        null,
        React__default.createElement(
          'div',
          { style: { display: 'flex' } },
          p,
          u,
          Object.keys(s.left).map(function (e) {
            return d(e, s.left[e])
          })
        ),
        React__default.createElement('div', { className: 'spread' }),
        React__default.createElement(
          'div',
          { style: { display: 'flex' } },
          Object.keys(s.right).map(function (e) {
            return d(e, s.right[e])
          })
        )
      )
    )
  },
  withLanguage = function (e) {
    var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : 'en',
      a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : {}
    return (function (n) {
      function s(e) {
        var a
        return (
          _classCallCheck(this, s),
          (a = l.call(this, e)),
          (a.strings = i18n.strings),
          (a.setLanguage = a.setLanguage.bind(_assertThisInitialized(a))),
          (a.addTranslations = a.addTranslations.bind(_assertThisInitialized(a))),
          (a.state = { language: t, strings: a.strings[t] }),
          a
        )
      }
      _inherits(s, n)
      var l = _createSuper(s)
      return (
        _createClass(s, [
          {
            key: 'setLanguage',
            value: function (e) {
              this.setState({ language: e, strings: this.strings[e] })
            }
          },
          {
            key: 'addTranslations',
            value: function (e) {
              this.setState({
                language: this.state.language,
                strings: _objectSpread2({}, this.strings[this.state.language], {}, e)
              })
            }
          },
          {
            key: 'render',
            value: function () {
              return React__default.createElement(
                reactIntl.IntlProvider,
                {
                  locale: this.state.language,
                  messages: _objectSpread2({}, this.state.strings, {}, a)
                },
                React__default.createElement(
                  e,
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
        s
      )
    })(React__default.Component)
  },
  LanguageChooser = function (e) {
    var t = {
        container: { display: 'flex', flexDirection: 'row', width: '100%' },
        chooser: { width: '100%', textAlign: 'center', alignSelf: 'center' },
        button: { margin: '1rem' }
      },
      a = function (t) {
        e.setLanguage(t), e.setDisplay('pattern')
      }
    return React__default.createElement(
      'div',
      { style: t.container },
      React__default.createElement(
        'div',
        { style: t.chooser },
        Object.keys(i18n.languages).map(function (e) {
          return React__default.createElement(
            Button,
            {
              style: t.button,
              key: e,
              color: 'primary',
              size: 'large',
              variant: 'contained',
              onClick: function () {
                return a(e)
              }
            },
            i18n.languages[e]
          )
        })
      )
    )
  },
  Svg = function (e) {
    var t = e.embed,
      a = e.design,
      n = e.language,
      s = void 0 === n ? 'en' : n,
      l = e.className,
      i = void 0 === l ? 'freesewing draft' : l,
      r = e.style,
      c = void 0 === r ? {} : r,
      o = e.viewBox,
      d = e.width,
      m = e.height,
      p = e.children,
      u = {
        xmlns: 'http://www.w3.org/2000/svg',
        'xmlns:svg': 'http://www.w3.org/2000/svg',
        xmlnsXlink: 'http://www.w3.org/1999/xlink',
        xmlLang: s,
        viewBox: (void 0 !== o && o) || '0 0 '.concat(d, ' ').concat(m),
        className: i,
        style: c
      }
    return (
      void 0 === t || t || ((u.width = d + 'mm'), (u.height = m + 'mm')),
      void 0 !== a && a && (u.className += ' design'),
      React__default.createElement('svg', u, p)
    )
  },
  Markers = function () {
    var e = { orient: 'auto', refX: '0.0', refY: '0.0', style: { overflow: 'visible' } },
      t = { d: 'M 0,0 L 12,-4 C 10,-2 10,2  12, 4 z' },
      a = { d: 'M 0,0 L -12,-4 C -10,-2 -10,2  -12, 4 z' },
      n = { grainline: 'note', cutonfold: 'note', dimension: 'mark' },
      s = []
    for (var l in n)
      s.push(
        React__default.createElement(
          'marker',
          _extends({ id: l + 'From', key: l + '-from' }, e),
          React__default.createElement('path', _extends({ className: n[l] + ' fill-' + n[l] }, t))
        )
      ),
        s.push(
          React__default.createElement(
            'marker',
            _extends({ id: l + 'To', key: l + '-to' }, e),
            React__default.createElement('path', _extends({ className: n[l] + ' fill-' + n[l] }, a))
          )
        )
    return s
  },
  logoPathString =
    'M 35.222,0 C 34.233,0.703 34.284,0.613 33.485,0.874 31.653,1.473 29.896,1.144 27.811,0.97 27.184,0.9 26.562,0.859 25.955,0.855 22.89,0.834 20.287,1.733 19.794,4.243 18.885,4.794 18.049,5.461 17.221,6.129 15.453,7.524 14.122,9.229 13.214,11.284 11.974,14.319 13.094,17.576 13.649,20.652 13.781,21.372 13.919,22.058 13.993,22.323 14.098,22.696 14.283,23.052 14.484,23.372 14.531,23.38 14.779,22.998 14.838,22.829 14.924,22.583 14.915,22.188 14.821,21.848 14.613,21.083 14.415,20.462 14.398,20.15 14.368,19.564 14.482,19.023 14.696,18.755 14.772,18.66 14.946,19.15 14.901,19.332 14.848,19.551 14.808,19.926 14.825,20.099 14.872,20.685 14.958,21.312 15.065,21.86 15.202,22.567 15.261,23.021 15.236,23.197 15.218,23.325 15.158,23.454 14.928,23.85 14.728,24.197 14.624,24.478 14.608,24.726 14.591,24.968 14.664,25.573 14.732,25.721 14.831,25.952 15.129,26.195 15.389,26.255 15.638,26.35 15.763,26.547 15.891,26.768 16.202,27.361 16.442,28.083 16.68,29.171 16.796,29.692 16.893,30.157 16.924,30.401 15.004,30.403 12.545,30.404 10.305,30.404 9.551,30.416 8.189,30.062 6.94,29.98 6.759,28.026 5.901,25.756 4.433,25.624 3.431,25.533 2.6,25.914 1.897,27.497 L 1.917,27.582 C 2.332,27.235 2.77,26.174 4.348,26.247 5.56,26.302 5.964,28.596 6.084,29.976 5.346,30.03 4.718,30.257 4.39,30.824 L 4.383,30.824 C 4.383,30.825 4.383,30.827 4.386,30.829 4.383,30.831 4.383,30.833 4.383,30.835 L 4.39,30.835 C 4.728,31.416 5.379,31.641 6.144,31.686 6.655,46.136 20.238,48 23.95,48 37.798,48 42.646,38.59 43.375,34.863 43.716,36.451 42.642,38.474 42.385,39.967 45.306,36.59 44.778,33.343 44.244,30.077 44.688,30.605 45.289,30.932 46.104,30.751 45.523,30.363 44.735,30.635 44.263,28.998 44.057,28.291 43.879,27.761 43.702,27.316 43.32,25.883 42.778,24.514 42.112,23.18 41.55,21.733 41.921,20.795 41.865,19.553 42.876,22.887 43.508,23.774 44.688,24.123 41.72,20.547 42.736,15.01 41.059,10.068 41.818,10.514 42.684,10.648 43.606,10.103 42.714,9.849 41.824,10.52 40.544,8.639 39.463,6.536 37.897,4.983 35.997,3.613 34.979,2.949 33.849,2.503 32.713,2.089 33.87,1.799 35.162,0.769 35.222,0 z M 33.281,11.107 C 34.805,11.663 36.485,13.775 36.466,15.847 L 36.466,15.933 36.466,15.963 C 36.425,18.777 35.146,20.29 35.2,22.164 35.269,24.371 36.219,25.141 36.408,25.509 36.084,24.148 35.894,22.436 36.322,21.08 36.872,19.336 37.427,17.892 37.387,16.526 37.367,16.206 37.231,15.009 37.14,14.479 38.774,16.837 36.786,20.266 37.358,22.51 38.352,26.419 42.807,26.913 41.481,34.789 40.314,41.713 32.318,46.968 24.122,46.968 18.046,46.968 7.517,43.605 6.997,31.676 8.232,31.588 9.56,31.244 10.305,31.256 12.557,31.256 15.129,31.257 17.067,31.258 17.431,32.9 17.704,33.296 19.085,34.39 20.621,35.598 20.979,35.745 23.251,35.767 25.524,35.79 26.198,35.303 28.403,33.217 28.879,32.659 29.085,31.928 29.316,31.241 31.584,31.22 33.238,31.18 34.865,31.104 36.522,31.029 36.756,31.104 39.426,30.829 36.756,30.554 36.522,30.629 34.865,30.553 33.281,30.481 31.677,30.44 29.508,30.42 29.69,29.603 29.95,28.805 30.227,28.016 30.398,27.551 30.599,27.098 30.805,26.647 L 31.03,26.577 C 31.464,26.423 31.848,26.093 32.001,25.647 32.198,25.056 32.058,24.392 31.677,23.909 31.546,23.728 31.383,23.497 31.316,23.395 31.115,23.077 31.11,22.9 31.28,21.718 31.423,20.728 31.439,20.21 31.34,19.708 31.32,19.421 31.318,18.831 31.309,18.672 31.385,18.714 31.55,19.09 31.717,19.599 31.883,20.11 31.91,20.216 31.948,20.651 31.99,21.145 31.805,21.511 31.653,22.248 31.577,22.628 31.51,22.981 31.51,23.029 31.51,23.08 31.546,23.188 31.584,23.272 31.673,23.46 31.84,23.724 31.871,23.724 32.416,23.123 32.736,22.381 33.021,21.628 33.321,20.776 33.409,19.872 33.619,18.995 33.789,18.231 33.985,17.466 34.046,16.682 34.169,15.152 34.097,14.072 33.759,12.478 33.678,12.118 33.444,11.431 33.281,11.107 z M 27.921,18.644 C 28.506,18.637 29.085,18.708 29.636,18.867 30.385,19.154 30.49,19.823 30.628,20.574 30.705,21.054 30.702,21.399 30.615,21.963 30.554,22.781 30.229,23.414 29.519,23.859 28.448,24.057 27.303,24.248 26.395,23.539 25.633,22.489 25.174,21.162 25.349,19.868 25.46,19.337 25.707,19.061 26.215,18.896 26.762,18.739 27.341,18.653 27.921,18.644 z M 19.038,18.739 C 19.585,18.734 20.138,18.792 20.442,18.986 21.747,19.869 21.328,21.306 20.812,22.567 20.061,24.218 18.437,24.157 16.863,24.144 15.992,23.889 15.912,23.175 15.786,22.412 15.678,21.675 15.448,20.885 15.64,20.144 16.133,18.952 17.935,18.815 19.038,18.739 z M 38.941,18.945 C 38.948,22.118 39.49,23.677 40.578,25.924 39.937,24.701 39.021,24.005 38.68,22.543 38.028,19.72 38.731,19.878 38.941,18.945 z M 23.128,21.243 C 23.3,21.417 23.383,21.657 23.532,21.848 23.647,21.651 23.765,21.455 23.913,21.28 23.99,21.282 24.084,21.434 24.169,21.706 24.533,22.712 24.604,23.819 25.076,24.786 25.517,25.486 24.915,25.894 24.254,25.926 23.772,25.925 23.568,25.596 23.285,25.27 23.212,25.483 23.073,25.62 22.907,25.764 22.485,26.118 21.658,25.987 21.53,25.429 21.7,24.363 22.243,23.384 22.599,22.362 22.776,21.989 22.778,21.703 23.128,21.243 z M 16.936,26.628 C 17.149,26.628 17.734,27.025 17.853,27.249 17.935,27.398 18.122,27.978 18.135,28.119 18.156,28.287 18.105,28.685 18.053,28.793 18.015,28.87 17.986,28.881 17.942,28.831 17.905,28.789 17.415,27.849 17.102,27.227 16.856,26.729 16.83,26.628 16.936,26.628 z M 29.158,26.939 C 29.166,26.94 29.178,26.943 29.189,26.946 29.255,26.973 29.209,27.207 28.961,28.057 28.914,28.313 28.8,28.515 28.633,28.683 28.578,28.683 28.553,28.619 28.467,28.264 28.394,27.961 28.386,27.691 28.437,27.449 28.525,27.146 28.881,27.053 29.158,26.939 z M 27.675,28.792 C 27.696,28.788 27.716,28.799 27.742,28.82 27.832,28.883 27.845,29.049 27.785,29.374 27.712,29.792 27.696,29.838 27.588,29.881 27.541,29.902 27.457,29.917 27.401,29.917 27.3,29.899 27.274,29.817 27.298,29.693 27.298,29.433 27.374,29.207 27.546,28.94 27.611,28.84 27.644,28.797 27.675,28.792 z M 19.042,28.811 C 19.111,28.811 19.319,28.961 19.396,29.065 19.482,29.175 19.58,29.83 19.525,29.943 19.462,30.085 19.154,30.014 19.069,29.837 19.017,29.731 18.894,29.159 18.894,29.023 18.894,28.897 18.955,28.811 19.042,28.811 z M 26.933,28.984 C 27.017,29.104 27.039,29.258 27.021,29.596 L 27.004,29.904 26.916,29.992 C 26.863,30.041 26.773,30.101 26.719,30.126 26.6,30.182 26.509,30.187 26.492,30.142 26.472,30.082 26.506,29.7 26.543,29.571 26.586,29.438 26.779,29.041 26.843,28.957 26.872,28.88 26.906,28.976 26.933,28.984 z M 21.912,28.966 C 22.093,29.012 22.173,29.175 22.272,29.323 L 22.339,29.455 22.245,29.782 C 22.195,29.962 22.142,30.124 22.126,30.142 22.108,30.162 22.041,30.172 21.942,30.171 21.678,30.164 21.648,30.153 21.577,30.045 L 21.511,29.947 21.567,29.672 C 21.648,29.276 21.687,29.157 21.777,29.055 21.824,29 21.871,28.97 21.912,28.966 z M 20.241,29.249 20.39,29.398 20.415,29.735 C 20.428,29.919 20.434,30.09 20.424,30.111 20.415,30.14 20.361,30.148 20.194,30.148 L 19.977,30.148 C 19.861,30.021 19.825,29.866 19.776,29.706 19.662,29.225 19.662,29.006 19.78,28.977 19.973,28.989 20.1,29.129 20.241,29.249 z M 26.041,29.018 C 26.277,29.081 26.23,29.456 26.229,29.724 26.211,30.158 26.194,30.248 26.138,30.304 26.041,30.401 25.771,30.347 25.64,30.203 25.597,30.151 25.593,30.135 25.627,29.924 25.666,29.667 25.716,29.507 25.827,29.287 25.908,29.129 25.984,29.03 26.041,29.018 z M 20.715,29.038 C 20.728,29.037 20.749,29.038 20.769,29.04 20.919,29.052 21.059,29.15 21.183,29.33 L 21.283,29.477 C 21.292,29.718 21.283,29.972 21.24,30.196 21.214,30.209 21.106,30.229 21,30.239 20.816,30.256 20.799,30.252 20.735,30.196 20.646,30.12 20.621,29.979 20.599,29.511 20.586,29.129 20.595,29.044 20.715,29.038 z M 22.984,29.118 C 23.145,29.152 23.247,29.238 23.292,29.379 23.328,29.5 23.35,30.177 23.315,30.224 23.303,30.244 23.227,30.269 23.14,30.28 22.816,30.321 22.53,30.29 22.502,30.213 22.466,30.125 22.707,29.253 22.796,29.145 22.834,29.061 22.926,29.126 22.984,29.118 z M 25.082,29.124 C 25.153,29.117 25.229,29.185 25.303,29.33 25.363,29.451 25.372,29.493 25.372,29.764 25.372,29.98 25.359,30.073 25.336,30.093 25.316,30.109 25.235,30.138 25.149,30.16 24.999,30.199 24.966,30.203 24.919,30.187 L 24.694,30.146 24.711,30.012 C 24.727,29.837 24.842,29.449 24.923,29.281 24.971,29.181 25.026,29.131 25.082,29.124 z M 24.104,29.127 C 24.151,29.125 24.173,29.136 24.203,29.169 24.274,29.253 24.364,29.501 24.421,29.766 24.497,30.139 24.497,30.138 24.334,30.187 24.263,30.209 24.113,30.232 24.006,30.238 23.653,30.256 23.626,30.235 23.669,29.923 23.703,29.645 23.84,29.207 23.899,29.175 23.963,29.141 24.037,29.142 24.104,29.127 z M 6.111,30.536 C 6.114,30.535 6.118,30.536 6.118,30.536 6.127,30.731 6.127,30.928 6.131,31.124 5.636,31.086 5.272,30.968 5.272,30.829 5.272,30.692 5.623,30.575 6.111,30.536 z M 6.976,30.553 C 7.377,30.603 7.654,30.708 7.649,30.829 7.649,30.951 7.381,31.055 6.983,31.104 6.979,30.921 6.979,30.737 6.976,30.553 z M 25.702,31.086 C 25.736,31.083 25.751,31.08 25.803,31.085 26.011,31.106 26.041,31.119 26.041,31.189 26.041,31.281 25.883,31.558 25.776,31.654 25.726,31.702 25.657,31.742 25.633,31.742 25.513,31.742 25.443,31.489 25.499,31.256 25.533,31.13 25.595,31.091 25.702,31.086 z M 24.947,31.169 C 25.04,31.161 25.13,31.186 25.22,31.198 25.194,31.461 25.076,31.676 24.857,31.819 24.803,31.819 24.776,31.716 24.776,31.491 24.776,31.223 24.79,31.172 24.947,31.169 z M 24.119,31.266 C 24.312,31.266 24.482,31.275 24.49,31.286 24.526,31.32 24.422,31.578 24.269,31.84 24.138,32.073 24.119,32.09 24.038,32.096 23.72,32.06 23.729,31.687 23.68,31.431 23.68,31.279 23.714,31.266 24.119,31.266 z M 21.11,31.295 C 21.331,31.299 21.417,31.332 21.417,31.417 21.417,31.525 21.335,31.74 21.288,31.767 21.217,31.806 21.211,31.804 21.071,31.658 20.85,31.41 20.825,31.364 21.11,31.295 z M 22.174,31.306 C 22.178,31.312 22.221,31.39 22.264,31.478 22.358,31.661 22.365,31.741 22.298,31.802 22.14,31.892 22.107,31.841 21.964,31.75 21.798,31.593 21.667,31.382 21.71,31.338 21.858,31.285 22.021,31.305 22.174,31.306 z M 22.596,31.311 22.991,31.318 C 23.145,31.318 23.278,31.326 23.285,31.338 23.312,31.362 23.225,31.876 23.178,31.992 23.124,32.122 22.935,32.123 22.837,31.969 22.697,31.748 22.605,31.562 22.602,31.434 L 22.596,31.311 z',
  Snippets = function () {
    var e = { fill: 'currentColor', stroke: 'none' },
      t = { fill: 'none', stroke: 'currentColor' }
    return [
      React__default.createElement(
        'g',
        { id: 'notch', className: 'snippet notch', key: 'notch' },
        React__default.createElement('circle', _extends({ cy: '0', cx: '0', r: '1.4' }, e)),
        React__default.createElement('circle', _extends({ cy: '0', cx: '0', r: '2.8' }, t))
      ),
      React__default.createElement(
        'g',
        { id: 'bnotch', className: 'snippet bnotch', key: 'bnotch' },
        React__default.createElement(
          'path',
          _extends({ d: 'M -1.1 -1.1 L 1.1 1.1 M 1.1 -1.1 L -1.1 1.1' }, t)
        ),
        React__default.createElement('circle', _extends({ cy: '0', cx: '0', r: '2.8' }, t))
      ),
      React__default.createElement(
        'g',
        { id: 'button', className: 'snippet button', key: 'button' },
        React__default.createElement('circle', _extends({ cx: '0', cy: '0', r: '3.4' }, t)),
        ' />',
        React__default.createElement('circle', _extends({ cx: '-1', cy: '-1', r: '0.5' }, e)),
        React__default.createElement('circle', _extends({ cx: '1', cy: '-1', r: '0.5' }, e)),
        React__default.createElement('circle', _extends({ cx: '1', cy: '1', r: '0.5' }, e)),
        React__default.createElement('circle', _extends({ cx: '-1', cy: '1', r: '0.5' }, e))
      ),
      React__default.createElement(
        'g',
        { id: 'buttonhole', className: 'snippet buttonhole', key: 'buttonhole' },
        React__default.createElement('path', _extends({ d: 'M -1,-5 L 1,-5 L 1,5 L -1,5 z' }, t)),
        React__default.createElement(
          'path',
          _extends({ d: 'M -1,-5 L 1,-5 L 1,-4 L -1,-4 z M -1,5 L 1,5 L 1,4 L -1,4 z' }, e)
        )
      ),
      React__default.createElement(
        'radialGradient',
        { key: 'grad', id: 'snap-male-grad', cx: '50%', cy: '50%', r: '50%', fx: '50%', fy: '50%' },
        React__default.createElement('stop', {
          offset: '30%',
          style: { stopColor: 'rgb(235,235,235)', stopOpacity: 1 }
        }),
        React__default.createElement('stop', {
          offset: '80%',
          style: { stopColor: 'rgb(100,100,100)', stopOpacity: 1 }
        })
      ),
      React__default.createElement(
        'g',
        { id: 'snap-male', key: 'snapmale' },
        React__default.createElement('circle', {
          cx: '0',
          cy: '0',
          r: '3.4',
          style: { stroke: '#666', fill: '#dddddd', strokeWidth: 0.3 }
        }),
        React__default.createElement('circle', {
          cx: '0',
          cy: '0',
          r: '1.8',
          style: { stroke: 'none', fill: 'url(#snap-male-grad)' }
        }),
        React__default.createElement('path', {
          style: { fill: 'none', stroke: '#666', strokeWidth: 0.2 },
          d:
            'M -2,0 L -3,0 M 2,0 L 3,0 M 0,2 L 0,3 M 0,-2 L 0,-3 M 1.5,1.5 L 2.1,2.1 M -1.5,1.5 L -2.1,2.1 M -1.5,-1.5 L -2.1,-2.1 M 1.5,-1.5 L 2.1,-2.1'
        })
      ),
      React__default.createElement(
        'g',
        { id: 'snap-female', key: 'snapfemale' },
        React__default.createElement('circle', {
          cx: '0',
          cy: '0',
          r: '3.4',
          style: { stroke: '#666', fill: '#bbbbbb', strokeWidth: 0.3 }
        }),
        React__default.createElement('circle', {
          cx: '0',
          cy: '0',
          r: '2',
          style: { stroke: '#666', fill: '#dddddd', strokeWidth: 0.4 }
        }),
        React__default.createElement('path', {
          style: { fill: 'none', stroke: '#666', strokeWidth: 0.5 },
          d: 'M -1.7,-1 L -1.7,1 M 1.7,-1 L 1.7,1'
        })
      ),
      React__default.createElement(
        'g',
        { id: 'logo', className: 'snippet logo', transform: 'translate(-23 -36)', key: 'logo' },
        React__default.createElement('path', _extends({ d: logoPathString }, e))
      )
    ]
  },
  Grid = function (e) {
    var t = { style: { fill: 'none', stroke: 'currentColor' } }
    return 'imperial' === e.units
      ? React__default.createElement(
          'pattern',
          {
            id: 'grid',
            height: '25.4',
            width: '25.4',
            patternUnits: 'userSpaceOnUse',
            key: 'grid'
          },
          React__default.createElement(
            'path',
            _extends({ className: 'gridline lg imperial', d: 'M 0 0 L 0 25.4 L 25.4 25.4' }, t)
          ),
          React__default.createElement(
            'path',
            _extends(
              { className: 'gridline lg imperial', d: 'M 12.7 0 L 12.7 25.4 M 0 12.7 L 25.4 12.7' },
              t
            )
          ),
          React__default.createElement(
            'path',
            _extends(
              {
                className: 'gridline sm imperial',
                d:
                  'M 3.175 0 L 3.175 25.4 M 6.32 0 L 6.35 25.4 M 9.525 0 L 9.525 25.4 M 15.875 0 L 15.875 25.4 M 19.05 0 L 19.05 25.4 M 22.225 0 L 22.225 25.4'
              },
              t
            )
          ),
          React__default.createElement(
            'path',
            _extends(
              {
                className: 'gridline sm imperial',
                d:
                  'M 0 3.175 L 25.4 3.175 M 0 6.32 L 25.4 6.35 M 0 9.525 L 25.4 9.525 M 0 15.875 L 25.4 15.875 M 0 19.05 L 25.4 19.05 M 0 22.225 L 25.4 22.225'
              },
              t
            )
          )
        )
      : React__default.createElement(
          'pattern',
          { id: 'grid', height: '100', width: '100', patternUnits: 'userSpaceOnUse', key: 'grid' },
          React__default.createElement(
            'path',
            _extends({ className: 'gridline lg metric', d: 'M 0 0 L 0 100 L 100 100' }, t)
          ),
          React__default.createElement(
            'path',
            _extends({ className: 'gridline metric', d: 'M 50 0 L 50 100 M 0 50 L 100 50' }, t)
          ),
          React__default.createElement(
            'path',
            _extends(
              {
                className: 'gridline sm metric',
                d:
                  'M 10 0 L 10 100 M 20 0 L 20 100 M 30 0 L 30 100 M 40 0 L 40 100 M 60 0 L 60 100 M 70 0 L 70 100 M 80 0 L 80 100 M 90 0 L 90 100'
              },
              t
            )
          ),
          React__default.createElement(
            'path',
            _extends(
              {
                className: 'gridline sm metric',
                d:
                  'M 0 10 L 100 10 M 0 20 L 100 20 M 0 30 L 100 30 M 0 40 L 100 40 M 0 60 L 100 60 M 0 70 L 100 70 M 0 80 L 100 80 M 0 90 L 100 90'
              },
              t
            )
          ),
          React__default.createElement(
            'path',
            _extends(
              {
                className: 'gridline xs metric',
                d:
                  'M 5 0 L 5 100 M 15 0 L 15 100 M 25 0 L 25 100 M 35 0 L 35 100 M 45 0 L 45 100 M 55 0 L 55 100 M 65 0 L 65 100 M 75 0 L 75 100 M 85 0 L 85 100 M 95 0 L 95 100'
              },
              t
            )
          ),
          React__default.createElement(
            'path',
            _extends(
              {
                className: 'gridline xs metric',
                d:
                  'M 0 5 L 100 5 M 0 15 L 100 15 M 0 25 L 100 25 M 0 35 L 100 35 M 0 45 L 100 45 M 0 55 L 100 55 M 0 65 L 100 65 M 0 75 L 100 75 M 0 85 L 100 85 M 0 95 L 100 95'
              },
              t
            )
          )
        )
  },
  Defs = function (e) {
    var t = null
    if (e.paperless)
      for (var a in ((t = []), e.parts)) {
        var n = { x: 0, y: 0 }
        'undefined' == typeof e.parts[a].points.gridAnchor
          ? 'undefined' != typeof e.parts[a].points.anchor && (n = e.parts[a].points.anchor)
          : (n = e.parts[a].points.gridAnchor),
          t.push(
            React__default.createElement('pattern', {
              id: 'grid-' + a,
              key: 'grid-' + a,
              xlinkHref: '#grid',
              x: n.x,
              y: n.y
            })
          )
      }
    return React__default.createElement(
      'defs',
      null,
      React__default.createElement(Markers, null),
      React__default.createElement(Snippets, null),
      React__default.createElement(Grid, { units: e.units }),
      t
    )
  },
  TextOnPath = function (e) {
    var t,
      a = '',
      n = _createForOfIteratorHelper(e.path.attributes.getAsArray('data-text'))
    try {
      for (n.s(); !(t = n.n()).done; ) {
        var s = t.value
        ;(a += i18n.strings[e.language]['plugin.' + s]
          ? i18n.strings[e.language]['plugin.' + s]
          : s),
          (a += ' ')
      }
    } catch (e) {
      n.e(e)
    } finally {
      n.f()
    }
    var l = { xlinkHref: '#' + e.pathId, startOffset: '0%' },
      i = e.path.attributes.get('data-text-class')
    return (
      i && -1 < i.indexOf('center')
        ? (l.startOffset = '50%')
        : i && -1 < i.indexOf('right') && (l.startOffset = '100%'),
      React__default.createElement(
        'text',
        null,
        React__default.createElement(
          'textPath',
          l,
          React__default.createElement(
            'tspan',
            e.path.attributes.asPropsIfPrefixIs('data-text-'),
            a
          )
        )
      )
    )
  },
  DesignPath = function (e) {
    var t,
      a = [],
      n = 0,
      s = null,
      l = _createForOfIteratorHelper(e.path.ops)
    try {
      for (l.s(); !(t = l.n()).done; ) {
        var r = t.value,
          c = e.part + e.name + n
        'curve' === r.type
          ? (a.push(
              React__default.createElement('path', {
                key: c + 'cp1',
                d: 'M '.concat(s.x, ',').concat(s.y, ' L ').concat(r.cp1.x, ',').concat(r.cp1.y),
                className: 'design path cp'
              })
            ),
            n++,
            a.push(
              React__default.createElement('path', {
                key: c + 'cp2',
                d: 'M '
                  .concat(r.to.x, ',')
                  .concat(r.to.y, ' L ')
                  .concat(r.cp2.x, ',')
                  .concat(r.cp2.y),
                className: 'design path cp'
              })
            ),
            n++,
            a.push(
              React__default.createElement('circle', {
                key: c + 'cpcirc1',
                cx: r.cp1.x,
                cy: r.cp1.y,
                r: 3.5,
                className: 'design path cp'
              })
            ),
            n++,
            a.push(
              React__default.createElement('circle', {
                key: c + 'cpcirc2',
                cx: r.cp2.x,
                cy: r.cp2.y,
                r: 3.5,
                className: 'design path cp'
              })
            ),
            (s = r.to))
          : 'close' !== r.type && (s = r.to)
      }
    } catch (e) {
      l.e(e)
    } finally {
      l.f()
    }
    return (
      a.push(
        React__default.createElement('path', {
          key: e.part + e.name + 'dpath',
          d: e.path.asPathstring(),
          onClick: function () {
            return e.raiseEvent('path', { path: e.path, name: e.name, part: e.part })
          },
          className: 'design hovertrap'
        })
      ),
      a
    )
  },
  getProps = function (e) {
    var t = function (e) {
        var t = e.split('-')
        if (1 < t.length) {
          e = t.shift()
          var a,
            n = _createForOfIteratorHelper(t)
          try {
            for (n.s(); !(a = n.n()).done; ) {
              var l = a.value
              e += l.charAt(0).toUpperCase() + l.slice(1)
            }
          } catch (e) {
            n.e(e)
          } finally {
            n.f()
          }
        }
        return e
      },
      a = function (e) {
        var a,
          n = {},
          s = e.split(';'),
          l = _createForOfIteratorHelper(s)
        try {
          for (l.s(); !(a = l.n()).done; ) {
            var i = a.value,
              r = i.split(':')
            2 === r.length && (n[t(r[0].trim())] = r[1].trim())
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return n
      },
      n = { class: 'className', 'marker-start': 'markerStart', 'marker-end': 'markerEnd' },
      s = {}
    for (var l in e.attributes.list)
      'style' == l && (s[l] = a(e.attributes.get(l))),
        -1 === Object.keys(n).indexOf(l)
          ? 'style' !== l && (s[l] = e.attributes.get(l))
          : (s[n[l]] = e.attributes.get(l))
    return s
  },
  Path = function (e) {
    if (!e.path.render) return null
    var t = [],
      a = 'path-' + e.part + '-' + e.name
    return (
      e.design &&
        t.push(React__default.createElement(DesignPath, _extends({}, e, { key: 'dpa-' + e.name }))),
      t.push(
        React__default.createElement(
          'path',
          _extends({ id: a, key: a, d: e.path.asPathstring() }, getProps(e.path))
        )
      ),
      e.path.attributes.get('data-text') &&
        t.push(
          React__default.createElement(
            TextOnPath,
            _extends({ key: 'text-on-path-' + e.name, pathId: a }, e)
          )
        ),
      t
    )
  },
  DesignPoint = function (e) {
    return React__default.createElement(
      'g',
      { className: e.className },
      React__default.createElement('circle', {
        cx: e.point.x,
        cy: e.point.y,
        r: '2',
        className: 'center'
      }),
      React__default.createElement('circle', {
        cx: e.point.x,
        cy: e.point.y,
        r: '7.5',
        className: 'hovertrap',
        onClick: function () {
          return e.raiseEvent('point', { point: e.point, name: e.name, part: e.part })
        }
      })
    )
  },
  Text = function (e) {
    var t,
      a = [],
      n = '',
      s = _createForOfIteratorHelper(e.point.attributes.getAsArray('data-text'))
    try {
      for (s.s(); !(t = s.n()).done; ) {
        var l = t.value
        ;(n += i18n.strings[e.language]['plugin.' + l]
          ? i18n.strings[e.language]['plugin.' + l]
          : l),
          (n += ' ')
      }
    } catch (e) {
      s.e(e)
    } finally {
      s.f()
    }
    if (-1 !== n.indexOf('\n')) {
      var i = 0,
        r = n.split('\n')
      a.push(React__default.createElement('tspan', { key: 'tspan-' + i }, r.shift()))
      var c,
        o = _createForOfIteratorHelper(r)
      try {
        for (o.s(); !(c = o.n()).done; ) {
          var d = c.value
          i++,
            a.push(
              React__default.createElement(
                'tspan',
                {
                  key: 'tspan-' + i,
                  x: e.point.x,
                  dy: e.point.attributes.get('data-text-lineheight') || 12
                },
                d
              )
            )
        }
      } catch (e) {
        o.e(e)
      } finally {
        o.f()
      }
    } else a.push(React__default.createElement('tspan', { key: 'tspan-1' }, n))
    return React__default.createElement(
      'text',
      _extends({ x: e.point.x, y: e.point.y }, e.point.attributes.asPropsIfPrefixIs('data-text-')),
      a
    )
  },
  Circle = function (e) {
    return React__default.createElement(
      'circle',
      _extends(
        { cx: e.point.x, cy: e.point.y, r: e.point.attributes.get('data-circle') },
        e.point.attributes.asPropsIfPrefixIs('data-circle-')
      )
    )
  },
  Point = function (e) {
    var t = []
    return (
      e.design &&
        t.push(
          React__default.createElement(
            DesignPoint,
            _extends({}, e, { key: 'dp-' + e.name, className: 'design point' })
          )
        ),
      e.point.attributes.get('data-text') &&
        t.push(React__default.createElement(Text, _extends({}, e, { key: 'point-' + e.name }))),
      e.point.attributes.get('data-circle') &&
        t.push(React__default.createElement(Circle, { point: e.point, key: 'circle-' + e.name })),
      1 > t.length ? null : t
    )
  },
  Snippet = function (e) {
    var t = { xlinkHref: '#' + e.snippet.def, x: e.snippet.anchor.x, y: e.snippet.anchor.y },
      a = e.snippet.attributes.get('data-scale'),
      n = e.snippet.attributes.get('data-rotate')
    return (
      (a || n) &&
        ((t.transform = ''),
        a &&
          ((t.transform += 'translate('.concat(t.x, ', ').concat(t.y, ') ')),
          (t.transform += 'scale('.concat(a, ') ')),
          (t.transform += 'translate('.concat(-1 * t.x, ', ').concat(-1 * t.y, ') '))),
        n && (t.transform += 'rotate('.concat(n, ', ').concat(t.x, ', ').concat(t.y, ') '))),
      React__default.createElement('use', _extends({}, t, getProps(e.snippet)))
    )
  },
  Part = function (e) {
    var t = function (t, a) {
        var n = e.part.points[t],
          s = 'M '.concat(n.x, ' ').concat(e.part.topLeft.y, ' ')
        ;(s += 'L '.concat(n.x, ' ').concat(e.part.bottomRight.y, ' ')),
          (s += 'M '.concat(e.part.topLeft.x, ' ').concat(n.y, ' ')),
          (s += 'L '.concat(e.part.bottomRight.x, ' ').concat(n.y, ' '))
        var l = 'focus point c' + (a % 4)
        return React__default.createElement(
          React__default.Fragment,
          { key: 'fp' + t },
          React__default.createElement('path', { d: s, className: l }),
          React__default.createElement('circle', {
            cx: n.x,
            cy: n.y,
            r: '5',
            className: l,
            onClick: function () {
              return e.raiseEvent('clearFocus', { part: e.name, type: 'points', name: t })
            }
          })
        )
      },
      a = function (t, a) {
        var n = 'M '.concat(t.x, ' ').concat(e.part.topLeft.y, ' ')
        ;(n += 'L '.concat(t.x, ' ').concat(e.part.bottomRight.y, ' ')),
          (n += 'M '.concat(e.part.topLeft.x, ' ').concat(t.y, ' ')),
          (n += 'L '.concat(e.part.bottomRight.x, ' ').concat(t.y, ' '))
        var s = 'focus coords c' + (a % 4)
        return React__default.createElement(
          React__default.Fragment,
          { key: 'cp' + a },
          React__default.createElement('path', { d: n, className: s }),
          React__default.createElement('circle', {
            cx: t.x,
            cy: t.y,
            r: '5',
            className: s,
            onClick: function () {
              return e.raiseEvent('clearFocus', { part: e.name, type: 'coords', data: t })
            }
          })
        )
      },
      n = e.paperless
        ? React__default.createElement('rect', {
            x: e.part.topLeft.x,
            y: e.part.topLeft.y,
            width: e.part.width,
            height: e.part.height,
            className: 'grid',
            fill: 'url(#grid-' + e.name + ')'
          })
        : null,
      s = []
    if (e.design && e.focus && 'undefined' != typeof e.focus[e.name]) {
      for (var l in e.focus[e.name].points) s.push(t(e.focus[e.name].points[l], l))
      var i = function (t) {
        var a = e.focus[e.name].paths[t]
        s.push(
          React__default.createElement('path', {
            key: 'fpa-' + a,
            d: e.part.paths[a].asPathstring(),
            className: 'focus path c' + (t % 4),
            onClick: function () {
              return e.raiseEvent('clearFocus', { part: e.name, type: 'paths', name: a })
            }
          })
        )
      }
      for (var r in e.focus[e.name].paths) i(r)
      for (var c in e.focus[e.name].coords) s.push(a(e.focus[e.name].coords[c], c))
    }
    return React__default.createElement(
      'g',
      _extends({}, getProps(e.part), { id: 'part-'.concat(e.name) }),
      n,
      Object.keys(e.part.paths).map(function (t) {
        return React__default.createElement(Path, {
          key: t,
          name: t,
          part: e.name,
          language: e.language,
          path: e.part.paths[t],
          focus: e.focus,
          topLeft: e.part.topLeft,
          bottomRight: e.part.bottomRight,
          design: e.design,
          raiseEvent: e.raiseEvent
        })
      }),
      Object.keys(e.part.points).map(function (t) {
        return React__default.createElement(Point, {
          key: t,
          name: t,
          part: e.name,
          language: e.language,
          point: e.part.points[t],
          focus: e.focus,
          topLeft: e.part.topLeft,
          bottomRight: e.part.bottomRight,
          design: e.design,
          raiseEvent: e.raiseEvent
        })
      }),
      Object.keys(e.part.snippets).map(function (t) {
        return React__default.createElement(Snippet, {
          key: t,
          name: t,
          snippet: e.part.snippets[t]
        })
      }),
      s
    )
  },
  Draft = function (e) {
    return React__default.createElement(
      Svg,
      {
        embed: e.settings.embed,
        width: e.width,
        height: e.height,
        language: e.settings.locale,
        id: e.settings.idPrefix + 'svg',
        design: e.design || !1,
        style: e.style || {},
        viewBox: e.viewBox,
        className: e.className || 'freesewing draft'
      },
      React__default.createElement(Defs, {
        units: e.settings.units,
        parts: e.parts,
        paperless: e.settings.paperless,
        design: e.design || !1
      }),
      React__default.createElement(
        'g',
        null,
        Object.keys(e.parts).map(function (t) {
          return React__default.createElement(Part, {
            part: e.parts[t],
            language: e.settings.locale,
            paperless: e.settings.paperless,
            units: e.settings.units,
            key: t,
            name: t,
            focus: e.focus || !1,
            design: e.design || !1,
            raiseEvent: e.raiseEvent
          })
        })
      )
    )
  },
  Zoombox = function (e) {
    var t = React.useState(!1),
      a = _slicedToArray(t, 2),
      n = a[0],
      s = a[1],
      l = React.useState(!1),
      i = _slicedToArray(l, 2),
      r = i[0],
      c = i[1],
      o = React.useState(!1),
      d = _slicedToArray(o, 2),
      m = d[0],
      p = d[1],
      u = React.useState(1),
      g = _slicedToArray(u, 2),
      f = g[0],
      E = g[1],
      h = React.useState(!1),
      y = _slicedToArray(h, 2),
      v = y[0],
      M = y[1],
      x = React.useState(!1),
      k = _slicedToArray(x, 2),
      b = k[0],
      C = k[1],
      w = React.useState(!1),
      L = _slicedToArray(w, 2),
      N = L[0],
      V = L[1],
      S = React.useState(!1),
      z = _slicedToArray(S, 2),
      D = z[0],
      F = z[1],
      P = React.useRef(null)
    React.useEffect(function () {
      var t = P.current.getBoundingClientRect()
      M(t), E(e.patternProps.width / t.width)
    }, [])
    var H = function (t) {
        t.stopPropagation(), t.preventDefault(), s(!1), c(!1), p(!1), e.setViewBox(!1)
      },
      O = function () {
        e.setViewBox(n[0] * f + ' ' + n[1] * f + ' ' + (r[0] - n[0]) * f + ' ' + (r[1] - n[1]) * f)
      }
    return React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement(
        'div',
        {
          onMouseDown: function (e) {
            e.stopPropagation(),
              e.preventDefault(),
              s([e.clientX - v.x, e.clientY - v.y]),
              c([e.clientX - v.x, e.clientY - v.y]),
              p(1),
              C(!1)
          },
          onMouseUp: function (t) {
            if (2 == m) O(), N && V(!1)
            else {
              V(!0)
              var a = P.current.getBoundingClientRect()
              M(a), E(e.patternProps.width / a.width)
            }
            p(!1), C(!1), t.stopPropagation(), t.preventDefault()
          },
          onMouseMove: function (e) {
            m &&
              (e.stopPropagation(),
              e.preventDefault(),
              1 === m && p(2),
              N && V(!1),
              c([e.clientX - v.x, e.clientY - v.y]))
          },
          className: 'zoombox',
          ref: P
        },
        React__default.createElement(Draft, e.patternProps),
        React__default.createElement('div', { className: 'mask' }),
        v &&
          n &&
          r &&
          1 !== m &&
          !N &&
          React__default.createElement(
            'div',
            {
              className: 'box' + (m ? ' active' : ' inactive'),
              style: {
                width: r[0] - n[0] - 16 + 'px',
                height: r[1] - n[1] - 16 + 'px',
                left: n[0] + 'px',
                top: n[1] + 'px'
              },
              onMouseDown: function (e) {
                m ||
                  b ||
                  (e.stopPropagation(), e.preventDefault(), C(!0), F([e.clientX, e.clientY]))
              },
              onMouseUp: function (e) {
                !m && b && (e.stopPropagation(), e.preventDefault(), C(!1), F(!1), O())
              },
              onMouseMove: function (e) {
                if (!m && b)
                  if ((e.stopPropagation(), e.preventDefault(), -5 >= n[0] + (e.clientX - D[0])));
                  else if (-5 >= n[1] + (e.clientY - D[1]));
                  else if (r[0] + (e.clientX - D[0]) >= v.width + 5);
                  else if (r[1] + (e.clientY - D[1]) >= v.height + 5);
                  else
                    F([e.clientX, e.clientY]),
                      s([n[0] + (e.clientX - D[0]), n[1] + (e.clientY - D[1])]),
                      c([r[0] + (e.clientX - D[0]), r[1] + (e.clientY - D[1])])
              }
            },
            !m &&
              React__default.createElement(
                IconButton,
                {
                  size: 'small',
                  color: 'primary',
                  className: 'close',
                  onMouseDown: H,
                  onMouseUp: H
                },
                React__default.createElement(ZoomIcon, null)
              )
          )
      ),
      React__default.createElement('pre', null, !1)
    )
  },
  Design = function (e) {
    var t = function (e) {
        var t = []
        for (var s in e.list)
          t.push(
            React__default.createElement(
              'li',
              { key: s },
              React__default.createElement('b', null, s),
              ': ',
              n(e.list[s])
            )
          )
        return React__default.createElement('ul', { className: 'links' }, t)
      },
      n = function (e) {
        if (Array.isArray(e)) {
          if (1 === e.length) return e.pop()
          var t,
            a = [],
            n = _createForOfIteratorHelper(e)
          try {
            for (n.s(); !(t = n.n()).done; ) {
              var s = t.value
              a.push(React__default.createElement('li', { key: s }, s))
            }
          } catch (e) {
            n.e(e)
          } finally {
            n.f()
          }
          return React__default.createElement('ul', null, a)
        }
        return e
      },
      s = function (t, n) {
        for (var a in e.parts[t].points) {
          var s = e.parts[t].points[a]
          if (n.x === s.x && n.y === s.y) return a
        }
        return !1
      },
      l = function (e, t) {
        var a = []
        for (var n in e.ops) a.push(r(e.ops[n], n, t))
        return React__default.createElement('ul', { className: 'links' }, a)
      },
      r = function (a, t, n) {
        var l = { part: n, coords: { x: null, y: null } }
        if ('move' === a.type || 'line' === a.type) {
          ;(l.coords.x = a.to.x), (l.coords.y = a.to.y)
          var i = React__default.createElement('span', null, '(op.to.x,op.to.y)'),
            r = function () {
              return e.raiseEvent('coords', l)
            },
            c = s(n, a.to)
          return (
            c &&
              ((i = c),
              (r = function () {
                return e.raiseEvent('point', { point: e.parts[n].points[c], name: c, part: n })
              })),
            React__default.createElement(
              'li',
              { key: t },
              React__default.createElement('b', null, a.type),
              '\xA0\xBB\xA0',
              React__default.createElement('a', { href: '#logo', role: 'button', onClick: r }, i)
            )
          )
        }
        if ('curve' === a.type) {
          for (
            var o = {},
              d = {},
              m = ['to', 'cp1', 'cp2'],
              p = function () {
                var i = g[u],
                  t = s(n, a[i])
                t
                  ? ((o[i] = t),
                    (d[i] = function () {
                      return e.raiseEvent('point', {
                        point: e.parts[n].points[t],
                        name: t,
                        part: n
                      })
                    }))
                  : ((o[i] = React__default.createElement(
                      'span',
                      null,
                      '(',
                      a[i].x,
                      ',',
                      a[i].y,
                      ')'
                    )),
                    (d[i] = function () {
                      return e.raiseEvent(
                        'coords',
                        _objectSpread2({}, l, { coords: { x: a[i].x, y: a[i].y } })
                      )
                    }))
              },
              u = 0,
              g = m;
            u < g.length;
            u++
          )
            p()
          return React__default.createElement(
            'li',
            { key: t },
            React__default.createElement('b', null, a.type),
            m.map(function (e) {
              return React__default.createElement(
                React__default.Fragment,
                { key: e },
                React__default.createElement('span', null, '\u2002\xBB\u2002'),
                React__default.createElement(
                  'a',
                  { href: '#logo', role: 'button', onClick: d[e] },
                  o[e]
                )
              )
            })
          )
        }
        return 'close' === a.type
          ? React__default.createElement(
              'li',
              { key: t },
              React__default.createElement('b', null, 'close')
            )
          : null
      },
      c = {
        container: { padding: '0 1rem' },
        h5: { margin: '0.5rem 0' },
        h6: { margin: '0.25rem 0 0 0.5rem' },
        ul: { marginTop: '0.25rem' }
      }
    if (!e.design || null === e.focus || 1 > Object.keys(e.focus).length) return null
    for (
      var o = [],
        d = function () {
          var a = p[m]
          for (var n in (o.push(
            React__default.createElement(
              'h5',
              { key: 'part-' + a, style: c.h5 },
              'parts.',
              React__default.createElement('b', null, a),
              '(',
              React__default.createElement(
                'a',
                {
                  href: '#logo',
                  onClick: function () {
                    return e.raiseEvent('part', a)
                  }
                },
                'Isolate'
              ),
              ')'
            )
          ),
          e.focus[a].paths)) {
            var s = e.focus[a].paths[n],
              i = e.parts[a].paths[s]
            o.push(
              React__default.createElement(
                'h6',
                { key: 'patitle-' + s, style: c.h6, className: 'path c' + (n % 4) },
                'path.',
                React__default.createElement('b', null, s)
              )
            ),
              o.push(
                React__default.createElement(
                  'ul',
                  { className: 'links', key: 'ops-' + s, style: c.ul },
                  React__default.createElement(
                    'li',
                    null,
                    React__default.createElement('b', null, 'attributes'),
                    ': ',
                    t(i.attributes)
                  ),
                  React__default.createElement(
                    'li',
                    null,
                    React__default.createElement('b', null, 'ops'),
                    ': ',
                    l(i, a)
                  )
                )
              )
          }
          for (var r in e.focus[a].points) {
            var d = e.focus[a].points[r],
              u = e.parts[a].points[d]
            o.push(
              React__default.createElement(
                'h6',
                { key: 'potitle-' + d, style: c.h6, className: 'point c' + (r % 4) },
                'point.',
                React__default.createElement('b', null, d)
              )
            ),
              o.push(
                React__default.createElement(
                  'ul',
                  { className: 'links', key: 'pdata-' + d, style: c.ul },
                  React__default.createElement(
                    'li',
                    null,
                    React__default.createElement('b', null, 'x'),
                    ': ',
                    u.x
                  ),
                  React__default.createElement(
                    'li',
                    null,
                    React__default.createElement('b', null, 'y'),
                    ': ',
                    u.y
                  ),
                  React__default.createElement(
                    'li',
                    null,
                    React__default.createElement('b', null, 'attributes'),
                    ': ',
                    t(u.attributes)
                  )
                )
              )
          }
        },
        m = 0,
        p = Object.keys(e.focus);
      m < p.length;
      m++
    )
      d()
    return React__default.createElement('div', { style: c.container, className: 'design' }, o)
  },
  PaddedSlider = styles.withStyles({
    container: { padding: '25px 0' },
    track: { height: '4px' },
    thumb: { width: '16px', height: '16px' }
  })(Slider),
  FormFieldSlider = function (e) {
    var t = e.min,
      a = void 0 === t ? 0 : t,
      n = e.max,
      s = void 0 === n ? 100 : n,
      l = e.step,
      i = void 0 === l ? 0.1 : l,
      r = e.label,
      c = e.updateValue,
      o = e.name,
      d = React.useState(value),
      m = _slicedToArray(d, 2),
      p = m[0],
      u = m[1]
    React.useEffect(
      function () {
        value !== p && u(value)
      },
      [value]
    )
    var g = function (e, t) {
      c(o, t, e), u(t)
    }
    return React__default.createElement(PaddedSlider, {
      value: p,
      min: a,
      max: s,
      step: i,
      onChange: g,
      onChangeCommitted: g,
      classes: { track: 'slider-track', thumb: 'slider-thumb' },
      'aria-labelledby': void 0 !== r && r
    })
  },
  OptionPreamble = function (e) {
    var t = e.intl,
      a = e.title,
      n = e.desc,
      s = e.dflt,
      l = e.designDflt,
      i = e.option,
      r = e.value,
      c = e.displayValue,
      o = e.displayFormat,
      d = void 0 === o ? 'node' : o,
      m = e.sameButDifferent,
      p = e.expanded,
      u = e.toggleExpanded,
      g = e.reset,
      f = e.designReset,
      E = {
        container: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
        left: { flexGrow: 1, margin: '0 0.5rem' },
        right: { margin: '0 5px 0 0 ', textAlign: 'right' }
      },
      h = t.formatMessage({ id: 'app.restoreDefaults', defaultMessage: ' \u267B\uFE0F  ' }),
      y = t.formatMessage({ id: 'app.restoreDesignDefaults', defaultMessage: ' \u267B\uFE0F  ' }),
      v = t.formatMessage({ id: 'app.restorePatternDefaults', defaultMessage: ' \u267B\uFE0F  ' }),
      M = !1
    s !== l && (M = !0)
    var x = r === s ? 'dflt' : 'custom'
    M && r === l ? (x = 'p-dflt') : M && m && (x = 'custom')
    var k = React__default.createElement('span', { className: x }, c)
    return (
      'html' === d &&
        (k = React__default.createElement('span', {
          className: x,
          dangerouslySetInnerHTML: { __html: c }
        })),
      React__default.createElement(
        React__default.Fragment,
        null,
        React__default.createElement(
          'div',
          { onClick: u, style: E.container },
          React__default.createElement(
            'div',
            { style: E.left },
            React__default.createElement(RightIcon, {
              className: 'icon-col-exp ' + (p ? 'expanded' : 'collapsed')
            }),
            a
          ),
          React__default.createElement('div', { style: E.right }, k)
        ),
        React__default.createElement(
          'div',
          { className: p ? 'col-exp expanded' : 'col-exp collapsed' },
          React__default.createElement(
            'div',
            { style: E.container },
            React__default.createElement(
              'div',
              { style: E.left },
              React__default.createElement('p', null, n)
            ),
            React__default.createElement(
              'div',
              { style: E.right },
              M
                ? React__default.createElement(
                    IconButton,
                    {
                      title: y,
                      'aria-label': y,
                      color: 'primary',
                      disabled: r === l,
                      onClick: f,
                      className: 'mini-icon-btn pattern'
                    },
                    React__default.createElement(ResetIcon, null)
                  )
                : null,
              React__default.createElement(
                IconButton,
                {
                  title: M ? v : h,
                  'aria-label': M ? v : h,
                  color: 'primary',
                  disabled: !(r !== s || m),
                  onClick: g,
                  className: 'mini-icon-btn' + (M ? ' pattern' : '')
                },
                React__default.createElement(ResetIcon, null)
              )
            )
          ),
          i
        )
      )
    )
  },
  OptionPreamble$1 = reactIntl.injectIntl(OptionPreamble),
  PatternOptionPctDegCount = function (e) {
    var t = e.min,
      a = void 0 === t ? 0 : t,
      n = e.max,
      s = void 0 === n ? 100 : n,
      l = e.step,
      i = void 0 === l ? 0.1 : l,
      r = e.type,
      c = void 0 === r ? 'pct' : r,
      o = e.updateValue,
      d = e.name,
      m = e.dflt,
      p = e.designDflt,
      u = e.title,
      g = e.desc,
      f = e.value,
      E = e.raiseEvent,
      h = e.noDocs,
      y = 1
    'pct' === c && (y = 100)
    var v = function (e) {
        return Math.round(10 * e) / 10
      },
      M = React.useState(null === f ? m : v(f * y)),
      x = _slicedToArray(M, 2),
      k = x[0],
      b = x[1],
      C = React.useState(null === f ? m : v(f * y)),
      w = _slicedToArray(C, 2),
      L = w[0],
      N = w[1],
      V = React.useState(!1),
      S = _slicedToArray(V, 2),
      z = S[0],
      D = S[1],
      F = function (e, t, a) {
        ;(t = v(t)),
          isNaN(t)
            ? 'mousemove' !== a.type && o(e, f / y)
            : (b(t), 'mousemove' !== a.type && o(e, t / y))
      },
      P = function () {
        b(m), o(d, m / y)
      },
      H = function () {
        b(p), o(d, p / y)
      },
      O = ''
    'pct' === c && (O = '%'), 'deg' === c && (O = '\xB0')
    var G = React__default.createElement(FormFieldSlider, {
      name: d,
      value: k,
      min: a,
      max: s,
      step: 'count' === c ? 1 : i,
      onChange: F,
      label: 'po-' + c + '-' + d,
      updateValue: F
    })
    return React__default.createElement(
      'li',
      null,
      React__default.createElement(OptionPreamble$1, {
        dflt: m,
        designDflt: p,
        value: k,
        desc: g,
        title: u,
        id: 'po-' + c + '-' + d,
        displayValue: k + O,
        reset: P,
        patternReset: H,
        toggleExpanded: function () {
          return D(!z)
        },
        expanded: z,
        showHelp: function () {
          return E('showHelp', { type: 'patternOption', value: d })
        },
        option: G,
        noDocs: h
      })
    )
  },
  Pct = function (e) {
    return React__default.createElement(PatternOptionPctDegCount, _extends({}, e, { type: 'pct' }))
  },
  Deg = function (e) {
    return React__default.createElement(PatternOptionPctDegCount, _extends({}, e, { type: 'deg' }))
  },
  PatternOptionMillimeter = function (e) {
    var t = e.title,
      a = e.desc,
      n = e.units,
      s = void 0 === n ? 'metric' : n,
      l = e.min,
      i = void 0 === l ? 0 : l,
      r = e.max,
      c = e.updateValue,
      o = e.name,
      d = e.dflt,
      m = e.noDocs,
      p = React.useState(d),
      u = _slicedToArray(p, 2),
      g = u[0],
      f = u[1],
      E = React.useState(d),
      h = _slicedToArray(E, 2),
      y = h[0],
      v = h[1],
      M = React.useState(!1),
      x = _slicedToArray(M, 2),
      k = x[0],
      b = x[1],
      C = function (e, t, a) {
        ;(t = roundMm(t, s)),
          isNaN(t) ? 'mousemove' !== a.type && c(e, g) : (f(t), 'mousemove' !== a.type && c(e, t))
      },
      w = React__default.createElement(FormFieldSlider, {
        name: o,
        value: g,
        min: roundMmUp(i, s),
        max: roundMmDown(s),
        step: sliderStep[s],
        onChange: C,
        label: 'po-mm-' + o,
        updateValue: C
      })
    return React__default.createElement(
      'li',
      null,
      React__default.createElement(OptionPreamble$1, {
        dflt: d,
        value: g,
        desc: void 0 !== a && a,
        title: void 0 !== t && t,
        id: 'po-mm-' + o,
        displayValue: formatMm(g, s),
        displayFormat: 'html',
        reset: function () {
          f(d), c(o, d)
        },
        toggleExpanded: function () {
          return b(!k)
        },
        expanded: k,
        showHelp: function () {
          return raiseEvent('showHelp', { type: 'patternOption', value: o })
        },
        option: w,
        noDocs: m
      })
    )
  },
  Bool = function (e) {
    var t = e.dflt,
      a = e.labels,
      n = void 0 === a ? ['false', 'true'] : a,
      s = e.value,
      l = e.name,
      i = e.updateValue,
      r = React.useState(void 0 !== t && t),
      c = _slicedToArray(r, 2),
      o = c[0],
      d = c[1]
    React.useEffect(
      function () {
        s !== o && d(s)
      },
      [s]
    )
    return React__default.createElement(
      RadioGroup,
      {
        onChange: function () {
          i(l, !o), d(!o)
        },
        value: JSON.stringify(o)
      },
      React__default.createElement(FormControlLabel, {
        control: React__default.createElement(Radio, { color: 'primary' }),
        value: 'false',
        checked: 'true' !== o && !0 !== o && 1 !== o,
        label: n[0],
        className: 'po-list-item'
      }),
      React__default.createElement(FormControlLabel, {
        control: React__default.createElement(Radio, { color: 'primary' }),
        value: 'true',
        checked: !('true' !== o && !0 !== o && 1 !== o),
        label: n[1],
        className: 'po-list-item'
      })
    )
  },
  PatternOptionBool = function (e) {
    var t = React.useState(null === e.value ? e.dflt : e.value),
      a = _slicedToArray(t, 2),
      n = a[0],
      s = a[1],
      l = React.useState(!1),
      i = _slicedToArray(l, 2),
      r = i[0],
      c = i[1],
      o = function (t, a) {
        e.updateValue(e.name, a), s(a)
      },
      d = React__default.createElement(Bool, {
        name: e.name,
        value: n,
        dflt: e.dflt,
        onChange: o,
        label: 'po-bool-' + e.name,
        updateValue: o,
        labels: e.labels
      })
    return React__default.createElement(
      'li',
      null,
      React__default.createElement(OptionPreamble$1, {
        dflt: e.dflt,
        designDflt: e.designDflt,
        value: n,
        desc: e.desc,
        title: e.title,
        id: 'po-list-' + e.name,
        displayValue: n ? e.labels[1] : e.labels[0],
        toggleExpanded: function () {
          return c(!r)
        },
        expanded: r,
        reset: function () {
          s(e.dflt), e.updateValue(e.name, e.dflt)
        },
        patternReset: function () {
          s(e.designDflt), e.updateValue(e.name, e.designDflt)
        },
        showHelp: function () {
          return e.raiseEvent('showHelp', { type: 'draftSetting', value: e.name })
        },
        option: d,
        noDocs: e.noDocs
      })
    )
  },
  FormFieldList = function (e) {
    var t = React.useState(e.dflt),
      a = _slicedToArray(t, 2),
      n = a[0],
      s = a[1]
    React.useEffect(
      function () {
        e.value !== n && s(e.value)
      },
      [e.value]
    )
    return React__default.createElement(
      RadioGroup,
      {
        onChange: function (t) {
          e.updateValue(e.name, t.target.value), s(t.target.value)
        },
        value: n
      },
      Object.keys(e.list).map(function (t) {
        return React__default.createElement(FormControlLabel, {
          key: t,
          control: React__default.createElement(Radio, { color: 'primary' }),
          value: t,
          checked: !(n !== t),
          label: e.list[t],
          className: 'po-list-item'
        })
      })
    )
  },
  PatternOptionList = function (e) {
    var t,
      a = React.useState(e.dflt),
      n = _slicedToArray(a, 2),
      s = n[0],
      l = n[1],
      i = React.useState(!1),
      r = _slicedToArray(i, 2),
      c = r[0],
      o = r[1],
      d = function (t, a) {
        e.updateValue(e.name, a), l(a)
      },
      m = 'options.'.concat(e.pattern, '.').concat(e.name, '.options.'),
      p = {},
      u = _createForOfIteratorHelper(e.list)
    try {
      for (u.s(); !(t = u.n()).done; ) {
        var g = t.value
        p[g] = e.intl.formatMessage({ id: m + g, defaultMessage: g })
      }
    } catch (e) {
      u.e(e)
    } finally {
      u.f()
    }
    var f = React__default.createElement(FormFieldList, {
      name: e.name,
      value: s,
      dflt: e.dflt,
      designDflt: e.designDflt,
      onChange: d,
      label: 'po-list-' + e.name,
      updateValue: d,
      list: p
    })
    return React__default.createElement(
      'li',
      null,
      React__default.createElement(OptionPreamble$1, {
        dflt: e.dflt,
        value: s,
        desc: e.desc,
        title: e.title,
        id: 'po-list-' + e.name,
        displayValue: p[s],
        reset: function () {
          l(e.dflt), e.updateValue(e.name, e.dflt)
        },
        patternReset: function () {
          l(e.designDflt), e.updateValue(e.name, e.designDflt)
        },
        toggleExpanded: function () {
          return o(!c)
        },
        expanded: c,
        showHelp: function () {
          return e.raiseEvent('showHelp', { type: 'patternOption', value: e.name })
        },
        option: f,
        noDocs: e.noDocs
      })
    )
  },
  Count = function (e) {
    return React__default.createElement(
      PatternOptionPctDegCount,
      _extends({}, e, { type: 'count' })
    )
  },
  OptionGroup = function (e) {
    var t = function (t) {
      var a = e.config.options[t],
        n = optionType(a),
        s = 'options.'.concat(e.config.name, '.').concat(t, '.'),
        l = {
          name: t,
          dflt: optionDefault(t, e.config.options[t], e.pattern),
          designDflt: optionDefault(t, e.config.options[t]),
          units: e.units,
          updateValue: e.updateValue,
          raiseEvent: e.raiseEvent,
          title: React__default.createElement(reactIntl.FormattedMessage, { id: s + 'title' }),
          desc: React__default.createElement(reactIntl.FormattedMessage, { id: s + 'description' }),
          intl: e.intl,
          pattern: e.config.name,
          key: t,
          noDocs: e.noDocs
        }
      l.value =
        'undefined' != typeof e.data &&
        'undefined' != typeof e.data.settings &&
        'undefined' != typeof e.data.settings.options &&
        'undefined' != typeof e.data.settings.options[t]
          ? e.data.settings.options[t]
          : null
      var i = [
        React__default.createElement(reactIntl.FormattedMessage, { id: 'app.no' }),
        React__default.createElement(reactIntl.FormattedMessage, { id: 'app.yes' })
      ]
      switch (n) {
        case 'pct':
          return React__default.createElement(Pct, _extends({}, a, l))
        case 'deg':
          return React__default.createElement(Deg, _extends({}, a, l))
        case 'mm':
          return React__default.createElement(
            PatternOptionMillimeter,
            _extends({}, a, l, { units: e.units })
          )
        case 'bool':
          return React__default.createElement(PatternOptionBool, _extends({}, a, l, { labels: i }))
        case 'list':
          return React__default.createElement(PatternOptionList, _extends({}, a, l))
        case 'count':
          return React__default.createElement(Count, _extends({}, a, l))
        default:
          throw new Error('Unsupported option type: ' + n)
      }
    }
    return React__default.createElement(
      React__default.Fragment,
      null,
      e.options.map(function (e) {
        var a = []
        if ('object' === _typeof(e))
          for (var n = 0, s = Object.keys(e); n < s.length; n++) {
            var l,
              i = s[n],
              r = [],
              c = _createForOfIteratorHelper(e[i])
            try {
              for (c.s(); !(l = c.n()).done; ) {
                var o = l.value
                r.push(t(o, !0))
              }
            } catch (e) {
              c.e(e)
            } finally {
              c.f()
            }
            a.push(
              React__default.createElement(
                'li',
                null,
                React__default.createElement(
                  'span',
                  { key: i + '-title', className: 'subheading' },
                  React__default.createElement(RightIcon, { className: 'icon-col-exp expanded' }),
                  React__default.createElement(reactIntl.FormattedMessage, {
                    id: 'optiongroups.' + i
                  })
                ),
                React__default.createElement('ul', { className: 'config l4' }, r)
              )
            )
          }
        else a.push(t(e))
        return a
      })
    )
  },
  OptionGroup$1 = reactIntl.injectIntl(OptionGroup),
  PatternOptions = function (e) {
    var t = React.useState([]),
      a = _slicedToArray(t, 2),
      n = a[0],
      s = a[1],
      l = function (e) {
        var t = n.slice(0),
          a = t.indexOf(e)
        ;-1 === a ? t.push(e) : t.splice(a, 1), s(t)
      },
      i = function (t) {
        var a = !0
        ;-1 === n.indexOf(t) && (a = !1)
        var s = [],
          i = null
        return (
          -1 !== n.indexOf(t) &&
            (i = React__default.createElement(
              'ul',
              { className: 'config l3' },
              React__default.createElement(OptionGroup$1, {
                noDocs: e.noDocs,
                key: t + '-group',
                units: e.units,
                config: e.config,
                data: e.data,
                pattern: e.pattern,
                options: e.config.optionGroups[t],
                updateValue: e.updateValue,
                raiseEvent: e.raiseEvent
              })
            )),
          s.push(
            React__default.createElement(
              'li',
              { className: a ? 'expanded' : 'collapsed', key: t + '-ghead' },
              React__default.createElement(
                'span',
                {
                  onClick: function () {
                    return l(t)
                  }
                },
                React__default.createElement(RightIcon, {
                  className: 'icon-col-exp ' + (a ? 'expanded' : 'collapsed')
                }),
                React__default.createElement(reactIntl.FormattedMessage, {
                  id: 'optiongroups.' + t
                })
              ),
              i
            )
          ),
          s
        )
      },
      r = []
    for (var c in e.config.optionGroups)
      (e.data.settings.advanced || 'advanced' !== c) && r.push(i(c))
    return React__default.createElement('ul', { className: 'config l2' }, r)
  },
  DraftSettingSa = function (e) {
    var t = React.useState(
        e.value === defaultSa[e.units] ? 'dflt' : 0 === e.value ? 'none' : 'custom'
      ),
      a = _slicedToArray(t, 2),
      n = a[0],
      s = a[1],
      l = React.useState(null === e.value ? defaultSa[e.units] : e.value),
      i = _slicedToArray(l, 2),
      r = i[0],
      c = i[1],
      o = React.useState('custom' === n ? e.value : 10),
      d = _slicedToArray(o, 2),
      m = d[0],
      p = d[1],
      u = React.useState(!1),
      g = _slicedToArray(u, 2),
      f = g[0],
      E = g[1],
      h = function (t, a) {
        'none' === a
          ? (e.updateValue('sa', 0), s(a), c(0))
          : 'dflt' === a
          ? (e.updateValue('sa', defaultSa[e.units]), s(a), c(defaultSa[e.units]))
          : (e.updateValue('sa', m), s(a), c(m))
      },
      y = 'dflt'
    0 === e.dflt && (y = 'none'), 10 !== e.dflt && (y = 'custom')
    var v = function () {
        s(y), c(e.dflt), e.updateValue('sa', e.dflt)
      },
      M = { none: e.labels.none, dflt: e.labels.dflt, custom: e.labels.custom },
      x = React__default.createElement(FormFieldList, {
        name: 'sa',
        value: n,
        dflt: 'dflt',
        onChange: h,
        label: 'po-bool-sa',
        updateValue: h,
        list: M
      })
    return (
      'custom' === n &&
        (x = React__default.createElement(
          React__default.Fragment,
          null,
          x,
          React__default.createElement(FormFieldSlider, {
            name: 'customSa',
            value: r,
            dflt: defaultSa[e.units],
            label: 'po-bool-sa',
            updateValue: function (t, a, n) {
              ;(a = roundMm(a)),
                isNaN(a)
                  ? e.updateValue('sa', m)
                  : (c(a), p(a), 'mousemove' !== n.type && e.updateValue('sa', a))
            },
            min: 0,
            max: 25.4,
            step: sliderStep[e.units]
          })
        )),
      React__default.createElement(
        'li',
        null,
        React__default.createElement(OptionPreamble$1, {
          dflt: y,
          designDflt: 'dflt',
          sameButDifferent: e.dflt !== e.value,
          value: n,
          desc: e.desc,
          title: e.title,
          id: 'po-list-sa',
          displayValue: formatMm(r, e.units),
          displayFormat: 'html',
          reset: v,
          patternReset: function () {
            s('dflt'), c(defaultSa[e.units]), e.updateValue('sa', defaultSa[e.units])
          },
          toggleExpanded: function () {
            return E(!f)
          },
          expanded: f,
          showHelp: function () {
            return e.raiseEvent('showHelp', { type: 'draftSetting', value: 'sa' })
          },
          option: x,
          noDocs: e.noDocs
        })
      )
    )
  },
  DraftSettingMargin = function (e) {
    var t = React.useState(null === e.value ? e.dflt : e.value),
      a = _slicedToArray(t, 2),
      n = a[0],
      s = a[1],
      l = React.useState(!1),
      i = _slicedToArray(l, 2),
      r = i[0],
      c = i[1],
      o = React__default.createElement(FormFieldSlider, {
        name: 'customSa',
        value: n,
        dflt: e.dflt,
        label: 'po-slider-margin',
        updateValue: function (t, a, l) {
          ;(a = roundMm(a)),
            isNaN(a)
              ? e.updateValue('margin', n)
              : (s(a), 'mousemove' !== l.type && e.updateValue('margin', a))
        },
        min: 0,
        max: 25.4,
        step: sliderStep[e.units]
      })
    return React__default.createElement(
      'li',
      null,
      React__default.createElement(OptionPreamble$1, {
        dflt: e.dflt,
        designDflt: e.designDflt,
        value: n,
        desc: e.desc,
        title: e.title,
        id: 'po-slider-margin',
        displayValue: formatMm(n, e.units),
        displayFormat: 'html',
        reset: function () {
          s(e.dflt), e.updateValue('margin', e.dflt)
        },
        patternReset: function () {
          s(e.designDflt), e.updateValue('margin', e.designDflt)
        },
        toggleExpanded: function () {
          return c(!r)
        },
        expanded: r,
        showHelp: function () {
          return e.raiseEvent('showHelp', { type: 'draftSetting', value: 'margin' })
        },
        option: o,
        noDocs: e.noDocs
      })
    )
  },
  DraftSettingComplete = function (e) {
    return React__default.createElement(PatternOptionBool, _extends({}, e, { name: 'complete' }))
  },
  DraftSettingPaperless = function (e) {
    return React__default.createElement(PatternOptionBool, _extends({}, e, { name: 'paperless' }))
  },
  DraftSettingAdvanced = function (e) {
    return React__default.createElement(PatternOptionBool, _extends({}, e, { name: 'advanced' }))
  },
  DraftSettingUnits = function (e) {
    var t = React.useState(e.dflt),
      a = _slicedToArray(t, 2),
      n = a[0],
      s = a[1],
      l = React.useState(!1),
      i = _slicedToArray(l, 2),
      r = i[0],
      c = i[1],
      o = function (t, a) {
        e.updateValue(e.name, a), s(a)
      },
      d = React__default.createElement(FormFieldList, {
        name: 'units',
        value: n,
        dflt: e.dflt,
        onChange: o,
        label: 'po-bool-units',
        updateValue: o,
        list: e.list
      })
    return React__default.createElement(
      'li',
      null,
      React__default.createElement(OptionPreamble$1, {
        dflt: e.dflt,
        designDflt: e.designDflt,
        value: n,
        desc: e.desc,
        title: e.title,
        id: 'po-list-units',
        displayValue: e.list[n],
        reset: function () {
          s(e.dflt), e.updateValue(e.name, e.dflt)
        },
        patternReset: function () {
          s(e.designDflt), e.updateValue(e.name, e.designDflt)
        },
        toggleExpanded: function () {
          return c(!r)
        },
        expanded: r,
        showHelp: function () {
          return e.raiseEvent('showHelp', { type: 'draftSetting', value: 'units' })
        },
        option: d,
        noDocs: e.noDocs
      })
    )
  },
  DraftSettingLanguage = function (e) {
    var t = React.useState(null === e.value ? e.intl.locale : e.value),
      a = _slicedToArray(t, 2),
      n = a[0],
      s = a[1],
      l = React.useState(!1),
      i = _slicedToArray(l, 2),
      r = i[0],
      c = i[1],
      o = function (t, a) {
        e.updateValue(e.name, a), s(a)
      },
      d = React__default.createElement(FormFieldList, {
        name: e.name,
        value: n,
        dflt: e.dflt,
        designDflt: e.intl.locale,
        onChange: o,
        label: 'po-list-' + e.name,
        updateValue: o,
        list: i18n.languages
      })
    return React__default.createElement(
      'li',
      null,
      React__default.createElement(OptionPreamble$1, {
        dflt: e.dflt,
        designDflt: e.intl.locale,
        value: n,
        desc: e.desc,
        title: e.title,
        id: 'po-list-' + e.name,
        displayValue: i18n.languages[n],
        reset: function () {
          s(e.dflt || e.intl.locale), e.updateValue(e.name, e.dflt || e.intl.locale)
        },
        patternReset: function () {
          s(e.intl.locale), e.updateValue(e.name, e.intl.locale)
        },
        toggleExpanded: function () {
          return c(!r)
        },
        expanded: r,
        showHelp: function () {
          return e.raiseEvent('showHelp', { type: 'draftSetting', value: e.name })
        },
        option: d,
        noDocs: e.noDocs
      })
    )
  },
  DraftSettingLanguage$1 = reactIntl.injectIntl(DraftSettingLanguage),
  FormFieldChecks = function (e) {
    var t = React.useState(e.dflt ? e.dflt : []),
      a = _slicedToArray(t, 2),
      n = a[0],
      s = a[1],
      l = function (t) {
        var a = n.slice(0),
          l = a.indexOf(t)
        ;-1 === l ? a.push(t) : a.splice(l, 1), s(a), e.updateValue(e.name, a)
      }
    return React__default.createElement(
      FormGroup,
      null,
      Object.keys(e.checks).map(function (t) {
        return React__default.createElement(FormControlLabel, {
          control: React__default.createElement(Checkbox, {
            checked: -1 !== n.indexOf(t),
            onChange: function () {
              return l(t)
            },
            value: t
          }),
          label: e.checks[t],
          key: t,
          className: 'po-list-item'
        })
      })
    )
  },
  DraftSettingOnly = function (e) {
    var t = React.useState(null === e.value ? 'dflt' : !1 === e.value ? 'dflt' : 'custom'),
      a = _slicedToArray(t, 2),
      n = a[0],
      s = a[1],
      l = React.useState('custom' === n ? e.value : e.customDflt),
      i = _slicedToArray(l, 2),
      r = i[0],
      c = i[1],
      o = React.useState(!1),
      d = _slicedToArray(o, 2),
      m = d[0],
      p = d[1],
      u = function (t, a) {
        s(a), 'dflt' === a ? e.updateValue('only', !1) : e.updateValue('only', r)
      },
      g = 'dflt'
    ;('custom' === e.dflt || Array.isArray(e.dflt)) && (g = 'custom')
    var f = function () {
        s(g),
          'dflt' === g
            ? (c([]), e.updateValue('only', !1))
            : (c(e.dflt), e.updateValue('only', e.dflt))
      },
      E = function (t, a) {
        e.updateValue('only', a), c(a)
      },
      h = { dflt: e.labels.dflt, custom: e.labels.custom },
      y = React__default.createElement(FormFieldList, {
        name: 'only',
        value: n,
        dflt: e.dflt,
        designDflt: e.dflt,
        onChange: u,
        label: 'po-list-only',
        updateValue: u,
        list: h
      })
    return (
      'custom' === n &&
        (y = React__default.createElement(
          React__default.Fragment,
          null,
          y,
          React__default.createElement(FormFieldChecks, {
            checks: e.parts,
            name: 'parts',
            value: n,
            dflt: r,
            onChange: E,
            label: 'po-list-only',
            updateValue: E,
            list: h
          })
        )),
      React__default.createElement(
        'li',
        null,
        React__default.createElement(OptionPreamble$1, {
          dflt: g,
          designDflt: 'dflt',
          sameButDifferent: e.dflt !== e.value,
          value: n,
          desc: e.desc,
          title: e.title,
          id: 'po-list-only',
          displayValue: e.labels[n],
          reset: f,
          patternReset: function () {
            s('dflt'), c([]), e.updateValue('only', !1)
          },
          toggleExpanded: function () {
            return p(!m)
          },
          expanded: m,
          showHelp: function () {
            return e.raiseEvent('showHelp', { type: 'draftSetting', value: 'only' })
          },
          option: y,
          noDocs: e.noDocs
        })
      )
    )
  },
  DraftSettings = function (e) {
    var t = e.units,
      a = void 0 === t ? 'metric' : t,
      n = e.raiseEvent,
      s = e.updateValue,
      l = e.noDocs,
      i = e.pattern,
      r = e.config,
      c = e.data,
      o = void 0 === c ? { settings: {} } : c,
      d = React.useState([]),
      m = _slicedToArray(d, 2),
      p = m[0],
      u = m[1],
      g = [
        React__default.createElement(reactIntl.FormattedMessage, { id: 'app.no' }),
        React__default.createElement(reactIntl.FormattedMessage, { id: 'app.yes' })
      ],
      f = [
        React__default.createElement(reactIntl.FormattedMessage, { id: 'app.hide' }),
        React__default.createElement(reactIntl.FormattedMessage, { id: 'app.show' })
      ],
      E = {
        metric: React__default.createElement(reactIntl.FormattedMessage, { id: 'app.metricUnits' }),
        imperial: React__default.createElement(reactIntl.FormattedMessage, {
          id: 'app.imperialUnits'
        })
      },
      h = {
        sa: {
          none: React__default.createElement(reactIntl.FormattedMessage, {
            id: 'app.noSeamAllowance'
          }),
          dflt: React__default.createElement(reactIntl.FormattedMessage, {
            id: 'app.standardSeamAllowance'
          }),
          custom: React__default.createElement(reactIntl.FormattedMessage, {
            id: 'app.customSeamAllowance'
          })
        },
        only: {
          dflt: React__default.createElement(reactIntl.FormattedMessage, { id: 'app.default' }),
          custom: React__default.createElement(reactIntl.FormattedMessage, { id: 'app.custom' })
        },
        paperless: g,
        advanced: f,
        complete: f
      },
      y = function (e) {
        var t = p.slice(0),
          a = t.indexOf(e)
        ;-1 === a ? t.push(e) : t.splice(a, 1), u(t)
      },
      v = function (e) {
        var t = !!(1 < arguments.length && arguments[1] !== void 0) && arguments[1]
        if (t && 'undefined' != typeof t.settings[e]) return t.settings[e]
        return 'sa' === e
          ? 10
          : 'only' === e
          ? 'dflt'
          : !('complete' != e) || ('margin' === e ? 2 : !('units' != e) && a)
      },
      M = function (e) {
        var t = {
          raiseEvent: n,
          updateValue: s,
          units: a,
          key: e,
          name: e,
          labels: h[e],
          noDocs: l,
          dflt: v(e, i),
          designDflt: v(e),
          title: React__default.createElement(reactIntl.FormattedMessage, {
            id: 'settings.' + e + '.title'
          }),
          desc: React__default.createElement(reactIntl.FormattedMessage, {
            id: 'settings.' + e + '.description'
          })
        }
        if ('only' === e && ((t.customDflt = []), (t.parts = {}), r.draftOrder)) {
          var c,
            d = _createForOfIteratorHelper(r.draftOrder)
          try {
            for (d.s(); !(c = d.n()).done; ) {
              var m = c.value
              t.parts[m] = React__default.createElement(reactIntl.FormattedMessage, {
                id: 'parts.' + m
              })
            }
          } catch (e) {
            d.e(e)
          } finally {
            d.f()
          }
        }
        return (t.value = 'undefined' == typeof o.settings[e] ? null : o.settings[e]), t
      },
      x = {
        advanced: [
          React__default.createElement(DraftSettingLanguage$1, M('locale')),
          React__default.createElement(DraftSettingUnits, _extends({}, M('units'), { list: E })),
          React__default.createElement(DraftSettingComplete, M('complete')),
          React__default.createElement(DraftSettingMargin, M('margin')),
          React__default.createElement(DraftSettingOnly, M('only'))
        ]
      }
    return React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement(
        'ul',
        { className: 'config l2 nogroups' },
        React__default.createElement(DraftSettingSa, M('sa')),
        React__default.createElement(DraftSettingPaperless, M('paperless')),
        React__default.createElement(DraftSettingAdvanced, M('advanced'))
      ),
      o.settings.advanced &&
        React__default.createElement(
          'ul',
          { className: 'config l2' },
          Object.keys(x).map(function (e) {
            var t = !0
            ;-1 === p.indexOf(e) && (t = !1)
            var a = null
            return (
              t &&
                (a = x[e].map(function (e) {
                  return e
                })),
              React__default.createElement(
                React__default.Fragment,
                { key: e },
                React__default.createElement(
                  'li',
                  { className: t ? 'expanded' : 'collapsed', key: e + '-ghead' },
                  React__default.createElement(
                    'span',
                    {
                      onClick: function () {
                        return y(e)
                      }
                    },
                    React__default.createElement(RightIcon, {
                      className: 'icon-col-exp ' + (t ? 'expanded' : 'collapsed')
                    }),
                    React__default.createElement(reactIntl.FormattedMessage, {
                      id: 'optiongroups.' + e
                    })
                  )
                ),
                a
              )
            )
          })
        )
    )
  },
  DraftConfigurator = function (e) {
    var t = e.noDocs,
      a = e.units,
      n = void 0 === a ? 'metric' : a,
      s = e.config,
      l = void 0 === s ? {} : s,
      i = e.data,
      r = void 0 === i ? {} : i,
      c = e.pattern,
      o = e.updatePatternData,
      d = e.raiseEvent,
      m = { noDocs: void 0 !== t && t, units: n, config: l, data: r, pattern: c, raiseEvent: d }
    return React__default.createElement(
      'ul',
      { className: 'config l1' },
      React__default.createElement(
        'li',
        null,
        React__default.createElement(
          'span',
          null,
          React__default.createElement(reactIntl.FormattedMessage, { id: 'app.designOptions' })
        ),
        React__default.createElement(
          PatternOptions,
          _extends({}, m, {
            updateValue: function (e, t) {
              return o(t, 'settings', 'options', e)
            }
          })
        )
      ),
      React__default.createElement(
        'li',
        null,
        React__default.createElement(
          'span',
          null,
          React__default.createElement(reactIntl.FormattedMessage, { id: 'app.patternOptions' })
        ),
        React__default.createElement(
          DraftSettings,
          _extends({}, m, {
            updateValue: function (e, t) {
              return o(t, 'settings', e)
            }
          })
        )
      )
    )
  },
  DraftPattern = function (e) {
    var t = React.useState(!0),
      a = _slicedToArray(t, 2),
      n = a[0],
      s = a[1],
      l = React.useState(null),
      r = _slicedToArray(l, 2),
      c = r[0],
      o = r[1],
      d = React.useState(!1),
      m = _slicedToArray(d, 2),
      u = m[0],
      g = m[1],
      f = React.useState(!1),
      E = _slicedToArray(f, 2),
      h = E[0],
      y = E[1],
      v = function (t, a) {
        if ('clearFocusAll' === t) return e.updateGist(!1, 'settings', 'only'), o(null)
        var n = {}
        if (
          (null !== c && (n = _objectSpread2({}, c)),
          'undefined' == typeof n[a.part] && (n[a.part] = { paths: [], points: [], coords: [] }),
          'point' === t)
        )
          n[a.part].points.push(a.name)
        else if ('path' === t) n[a.part].paths.push(a.name)
        else if ('coords' === t) n[a.part].coords.push(a.coords)
        else if ('clearFocus' === t) {
          var s = c[a.part][a.type].indexOf(a.name)
          n[a.part][a.type].splice(s, 1)
        } else 'part' === t && e.updateGist(a, 'settings', 'only')
        o(n)
      }
    e.svgExport &&
      ((function (t) {
        var a = new Blob([t], { type: 'image/svg+xml;charset=utf-8' })
        fileSaver.saveAs(a, 'freesewing-' + e.config.name + '.svg')
      })(
        new e.Pattern(_objectSpread2({}, e.gist.settings, { embed: !1 }))
          .use(theme)
          .draft()
          .render()
      ),
      e.setSvgExport(!1))
    var M = {
        paragraph: { padding: '0 1rem' },
        aside: {
          maxWidth: '350px',
          background: 'transparent',
          border: 0,
          fontSize: '90%',
          boxShadow: '0 0 1px #cccc',
          display: h ? 'none' : 'block'
        },
        icon: { margin: '0 0.25rem' },
        unhide: {
          position: 'absolute',
          top: '76px',
          right: 0,
          background: 'dark' === e.theme ? '#f8f9fa' : '#212529',
          borderTopLeftRadius: '50%',
          borderBottomLeftRadius: '50%',
          width: '26px',
          height: '30px'
        }
      },
      x = new e.Pattern(e.gist.settings)
    x.draft()
    var k = x.getRenderProps()
    if (null !== c)
      for (var b, C = 0, w = Object.keys(c); C < w.length; C++) {
        for (var L in ((b = w[C]), c[b].points));
        for (var i in c[b].paths);
        for (var N in c[b].coords);
      }
    var V = Prism.highlight(
        JSON.stringify(e.gist, null, 2),
        Prism.languages.javascript,
        'javascript'
      ),
      S = { size: 'small', style: M.icon, color: 'inherit' },
      z = function (e) {
        return e ? '#40c057' : '#fa5252'
      }
    return React__default.createElement(
      'div',
      { className: 'fs-sa' },
      React__default.createElement(
        'section',
        { style: { margin: '1rem' } },
        React__default.createElement(
          Draft,
          _extends({}, k, {
            design: n,
            focus: c,
            raiseEvent: v,
            viewBox: u,
            className: 'freesewing draft shadow'
          })
        ),
        h &&
          React__default.createElement(
            'div',
            { style: M.unhide },
            React__default.createElement(
              IconButton,
              _extends(
                {
                  onClick: function () {
                    return y(!1)
                  },
                  title: 'Show sidebar'
                },
                S,
                { style: { margin: 0 } }
              ),
              React__default.createElement(
                'span',
                { style: { color: 'dark' === e.theme ? '#212529' : '#f8f9fa' } },
                React__default.createElement(UnhideIcon, null)
              )
            )
          )
      ),
      React__default.createElement(
        'aside',
        { style: M.aside },
        React__default.createElement(
          'div',
          { className: 'sticky' },
          React__default.createElement(
            'div',
            { style: { padding: '5px' } },
            React__default.createElement(Zoombox, { patternProps: k, setViewBox: g })
          ),
          React__default.createElement(
            'div',
            { style: { margin: '1rem auto 0', textAlign: 'center' } },
            React__default.createElement(
              IconButton,
              _extends(
                {
                  onClick: function () {
                    return s(!n)
                  },
                  title: 'Toggle design mode'
                },
                S
              ),
              React__default.createElement(
                'span',
                { style: { color: z(n) } },
                React__default.createElement(DesignIcon, null)
              )
            ),
            n &&
              React__default.createElement(
                IconButton,
                _extends(
                  {
                    onClick: function () {
                      return v('clearFocusAll', null)
                    },
                    title: 'Clear design mode'
                  },
                  S
                ),
                React__default.createElement(ClearIcon, { color: 'primary' })
              ),
            React__default.createElement(
              IconButton,
              _extends(
                {
                  onClick: function () {
                    return console.log(x)
                  },
                  title: 'console.log(pattern)'
                },
                S
              ),
              React__default.createElement(DumpIcon, { color: 'primary' })
            ),
            '|',
            React__default.createElement(
              IconButton,
              _extends(
                {
                  onClick: function () {
                    return e.updateGist(!e.gist.settings.advanced, 'settings', 'advanced')
                  },
                  title: 'Toggle advanced settings'
                },
                S
              ),
              React__default.createElement(
                'span',
                { style: { color: z(e.gist.settings.advanced) } },
                React__default.createElement(AdvancedIcon, null)
              )
            ),
            React__default.createElement(
              IconButton,
              _extends(
                {
                  onClick: function () {
                    return e.updateGist(!e.gist.settings.paperless, 'settings', 'paperless')
                  },
                  title: 'Toggle paperless'
                },
                S
              ),
              React__default.createElement(
                'span',
                { style: { color: z(e.gist.settings.paperless) } },
                React__default.createElement(PaperlessIcon, null)
              )
            ),
            React__default.createElement(
              IconButton,
              _extends(
                {
                  onClick: function () {
                    return e.updateGist(!e.gist.settings.complete, 'settings', 'complete')
                  },
                  title: 'Toggle complete'
                },
                S
              ),
              React__default.createElement(
                'span',
                { style: { color: z(e.gist.settings.complete) } },
                React__default.createElement(CompleteIcon, null)
              )
            ),
            React__default.createElement(
              IconButton,
              _extends(
                {
                  onClick: function () {
                    return y(!0)
                  },
                  title: 'Hide sidebar'
                },
                S
              ),
              React__default.createElement(HideIcon, null)
            )
          ),
          n &&
            React__default.createElement(Design, {
              focus: c,
              design: n,
              raiseEvent: v,
              parts: k.parts
            }),
          React__default.createElement(DraftConfigurator, {
            noDocs: !0,
            config: e.config,
            data: e.gist,
            updatePatternData: e.updateGist,
            raiseEvent: e.raiseEvent,
            freesewing: e.freesewing,
            units: e.units || 'metric'
          })
        )
      )
    )
  },
  PatternJson = function (e) {
    var t = Prism.highlight(
      JSON.stringify(e.gist, null, 2),
      Prism.languages.javascript,
      'javascript'
    )
    return React__default.createElement(
      'div',
      { style: { padding: '1rem' } },
      React__default.createElement(
        'div',
        { className: 'gatsby-highlight' },
        React__default.createElement('pre', {
          className: 'language-json',
          dangerouslySetInnerHTML: { __html: t }
        })
      )
    )
  },
  OptionGroup$2 = function (e) {
    return React__default.createElement(
      React__default.Fragment,
      null,
      e.options.map(function (t) {
        var a = []
        if ('object' === _typeof(t))
          for (var n, s = 0, l = Object.keys(t); s < l.length; s++) {
            ;(n = l[s]),
              a.push(
                React__default.createElement(
                  'h5',
                  { key: n + '-title', className: 'subheading' },
                  React__default.createElement(reactIntl.FormattedMessage, {
                    id: 'optiongroups.' + n
                  })
                )
              )
            var i,
              r = [],
              c = _createForOfIteratorHelper(t[n])
            try {
              var o = function () {
                var t = i.value
                r.push(
                  React__default.createElement(
                    'li',
                    null,
                    React__default.createElement(
                      'a',
                      {
                        href: '#logo',
                        onClick: function () {
                          return e.sampleOption(t)
                        }
                      },
                      React__default.createElement(reactIntl.FormattedMessage, {
                        id: 'options.' + e.config.name + '.' + t + '.title'
                      })
                    )
                  )
                )
              }
              for (c.s(); !(i = c.n()).done; ) o()
            } catch (e) {
              c.e(e)
            } finally {
              c.f()
            }
            a.push(React__default.createElement('ul', { style: { paddingLeft: '1rem' } }, r))
          }
        else
          a.push(
            React__default.createElement(
              'li',
              null,
              React__default.createElement(
                'a',
                {
                  href: '#logo',
                  onClick: function () {
                    return e.sampleOption(t)
                  }
                },
                React__default.createElement(reactIntl.FormattedMessage, {
                  id: 'options.' + e.config.name + '.' + t + '.title'
                })
              )
            )
          )
        return a
      })
    )
  },
  OptionGroup$3 = reactIntl.injectIntl(OptionGroup$2),
  PatternOptions$1 = function (e) {
    var t = function (t) {
      var a = [],
        n = React__default.createElement(
          'ul',
          { className: 'links' },
          React__default.createElement(OptionGroup$3, {
            key: t + '-group',
            units: e.units,
            config: e.config,
            options: e.config.optionGroups[t],
            sampleOption: e.sampleOption
          })
        )
      return (
        a.push(
          React__default.createElement(
            'li',
            { key: t + '-ghead', className: 'nodot' },
            React__default.createElement(
              'h3',
              null,
              React__default.createElement(reactIntl.FormattedMessage, { id: 'optiongroups.' + t })
            ),
            n
          )
        ),
        a
      )
    }
    return React__default.createElement(
      'ul',
      { className: 'links' },
      Object.keys(e.config.optionGroups).map(function (e) {
        return t(e)
      })
    )
  },
  SampleConfigurator = function (e) {
    var t = React.useState([]),
      a = _slicedToArray(t, 2),
      n = a[0],
      s = a[1],
      l = function (t) {
        e.updateGist({ type: 'measurement', measurement: t }, 'settings', 'sample')
      },
      i = function (t) {
        e.updateGist({ type: 'models', models: t }, 'settings', 'sample')
      },
      r = { ant: {}, man: models.withoutBreasts.manSize42 }
    for (var c in models.withoutBreasts.manSize42) r.ant[c] = r.man[c] / 10
    return React__default.createElement(
      'ul',
      { className: 'links' },
      React__default.createElement(
        'li',
        { className: 'nodot' },
        React__default.createElement(
          'h4',
          null,
          React__default.createElement(reactIntl.FormattedMessage, { id: 'app.patternOptions' })
        ),
        React__default.createElement(PatternOptions$1, {
          config: e.config,
          gist: e.gist,
          sampleOption: function (t) {
            e.updateGist({ type: 'option', option: t }, 'settings', 'sample')
          }
        })
      ),
      React__default.createElement(
        'li',
        { className: 'nodot' },
        React__default.createElement(
          'h4',
          null,
          React__default.createElement(reactIntl.FormattedMessage, { id: 'app.measurements' })
        ),
        React__default.createElement(
          'ul',
          { style: { paddingLeft: '1rem' } },
          e.config.measurements.map(function (e) {
            return React__default.createElement(
              'li',
              { key: e },
              React__default.createElement(
                'a',
                {
                  href: '#logo',
                  onClick: function () {
                    return l(e)
                  }
                },
                React__default.createElement(reactIntl.FormattedMessage, {
                  id: 'measurements.' + e
                })
              )
            )
          })
        )
      ),
      React__default.createElement(
        'li',
        { className: 'nodot' },
        React__default.createElement(
          'h4',
          null,
          React__default.createElement(reactIntl.FormattedMessage, { id: 'app.models' })
        ),
        React__default.createElement(
          'ul',
          { style: { paddingLeft: '1rem' } },
          React__default.createElement(
            'li',
            null,
            React__default.createElement(
              'a',
              {
                href: '#logo',
                onClick: function () {
                  return i(models.withBreasts)
                }
              },
              React__default.createElement(reactIntl.FormattedMessage, { id: 'app.withBreasts' })
            )
          ),
          React__default.createElement(
            'li',
            null,
            React__default.createElement(
              'a',
              {
                href: '#logo',
                onClick: function () {
                  return i(models.withoutBreasts)
                }
              },
              React__default.createElement(reactIntl.FormattedMessage, { id: 'app.withoutBreasts' })
            )
          ),
          React__default.createElement(
            'li',
            null,
            React__default.createElement(
              'a',
              {
                href: '#logo',
                onClick: function () {
                  return i(r)
                }
              },
              'Antman'
            )
          )
        )
      )
    )
  },
  version = '2.6.0-rc.0',
  index = {
    name: '@freesewing/plugin-svgattr',
    version: version,
    hooks: {
      preRender: function (t, a) {
        if (!1 === t.attributes.get('freesewing:plugin-svgattr')) {
          for (var n, s = 0, l = Object.keys(a); s < l.length; s++)
            (n = l[s]), t.attributes.add(n, a[n])
          t.attributes.add('freesewing:plugin-svgattr', version)
        }
      }
    }
  },
  SamplePattern = function (e) {
    var t = new e.Pattern(e.gist.settings).use(index, { class: 'freesewing draft' })
    try {
      t.sample()
    } catch (e) {
      console.log(e)
    }
    return React__default.createElement(
      'div',
      { className: 'fs-sa' },
      React__default.createElement(
        'section',
        null,
        React__default.createElement('div', { dangerouslySetInnerHTML: { __html: t.render() } }),
        React__default.createElement(
          'div',
          { style: { padding: '1rem' } },
          React__default.createElement(
            'div',
            { className: 'gatsby-highlight' },
            React__default.createElement('pre', {
              className: 'language-json',
              dangerouslySetInnerHTML: { __html: JSON.stringify(e.gist, null, 2) }
            })
          )
        )
      ),
      React__default.createElement(
        'aside',
        null,
        React__default.createElement(
          'div',
          { className: 'sticky' },
          React__default.createElement(SampleConfigurator, {
            config: e.config,
            gist: e.gist,
            updateGist: e.updateGist,
            raiseEvent: e.raiseEvent,
            freesewing: e.freesewing,
            units: e.units || 'metric'
          })
        )
      )
    )
  },
  Welcome = function (e) {
    var t = {
      container: { textAlign: 'center', maxWidth: '500px', margin: '2vh auto' },
      title: { fontFamily: 'Roboto Condensed' },
      button: { margin: '0.5rem' },
      bigButton: { margin: '0.5rem', width: 'calc(100% - 1rem)' },
      footer: {
        fontFamily: 'Roboto Condensed',
        position: 'fixed',
        bottom: '10px',
        left: 0,
        width: '100%',
        fontSize: '90%'
      }
    }
    return React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement('div', null),
      React__default.createElement(
        'div',
        { className: 'fs-sa' },
        React__default.createElement(
          'section',
          { style: t.container },
          React__default.createElement(
            'div',
            null,
            React__default.createElement(Logo, { size: 250 })
          ),
          React__default.createElement(
            'h1',
            { style: t.title },
            React__default.createElement(reactIntl.FormattedMessage, { id: 'app.welcome' })
          ),
          React__default.createElement(
            'p',
            null,
            React__default.createElement(reactIntl.FormattedMessage, { id: 'cfp.renderInBrowser' }),
            React__default.createElement('br', null),
            React__default.createElement(reactIntl.FormattedMessage, { id: 'cfp.weWillReRender' })
          ),
          React__default.createElement(
            Button,
            {
              style: t.bigButton,
              variant: 'contained',
              size: 'large',
              color: 'primary',
              onClick: function () {
                return e.setDisplay('draft')
              }
            },
            React__default.createElement(reactIntl.FormattedMessage, { id: 'cfp.draftYourPattern' })
          ),
          React__default.createElement(
            Button,
            {
              style: t.bigButton,
              variant: 'contained',
              size: 'large',
              color: 'primary',
              onClick: function () {
                return e.setDisplay('sample')
              }
            },
            React__default.createElement(reactIntl.FormattedMessage, { id: 'cfp.testYourPattern' })
          )
        )
      ),
      React__default.createElement('div', null)
    )
  },
  gitter =
    'M8.501 4.001H10.5V24H8.501V4.001zm6.999 0V24h-2V4.001h2zM3.5 0h2.001v15H3.5V0zm15 4.001h2V15h-2V4.001z',
  github =
    'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  twitter =
    'M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z',
  instagram =
    'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
  google =
    'M 12.25009,0 C 7.5567085,0 3.5033589,2.69334 1.530043,6.613315 0.71674427,8.240005 0.25,10.06676 0.25,12.00009 c 0,1.93333 0.46674427,3.759905 1.280043,5.386595 C 3.5033589,21.30666 7.5567085,24 12.25009,24 c 3.239959,0 5.959944,-1.066635 7.94668,-2.906575 2.266629,-2.093365 3.573349,-5.173415 3.573349,-8.826735 0,-0.98666 -0.08023,-1.70661 -0.253496,-2.453265 l -11.266533,0 0,4.45322 6.613137,0 c -0.133283,1.106705 -0.853233,2.77333 -2.453266,3.89327 -1.013315,0.706675 -2.373243,1.199975 -4.159871,1.199975 -3.173318,0 -5.8666835,-2.09327 -6.826777,-4.986605 -0.2533286,-0.746655 -0.399991,-1.54657 -0.399991,-2.373195 0,-0.82672 0.1467055,-1.62672 0.386706,-2.373375 C 6.3834495,6.73338 9.076772,4.63993 12.25009,4.63993 c 2.253301,0 3.773228,0.973465 4.639932,1.786855 L 20.27666,3.12004 C 18.196718,1.186705 15.490049,0 12.25009,0 Z',
  facebook =
    'M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0',
  note =
    'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  tip = 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
  warning = 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
  units =
    'M 1.2481485,5.9969994 C 0.57472916,5.9969994 0,6.5763504 0,7.2510315 V 14.751864 C 0,15.427642 0.57290973,16 1.2481485,16 H 22.753805 C 23.427222,16 24,15.426545 24,14.751864 V 7.2510315 C 24,6.5752543 23.429042,5.9969994 22.753805,5.9969994 Z M 2.0001628,7.997229 H 2.5021567 V 9.9974209 H 3.4983316 V 7.997229 H 4.5042727 V 9.9974209 H 5.5004476 V 7.997229 h 1.0039881 v 3.004219 H 7.5006105 V 7.997229 H 8.4967853 V 9.9974209 H 9.500773 V 7.997229 h 0.996175 v 2.0001919 h 1.005941 V 7.997229 h 0.996175 v 2.0001919 h 1.003988 V 7.997229 h 0.996175 v 2.0001919 h 1.003987 V 7.997229 h 0.996176 v 3.004219 h 1.003987 V 7.997229 h 0.996176 v 2.0001919 h 1.00594 V 7.997229 h 0.996176 v 2.0001919 h 1.003987 V 7.997229 h 0.494181 V 13.99977 H 19.202735 V 11.659724 H 17.599088 V 13.99977 H 12.801823 V 10.854937 H 11.200131 V 13.99977 H 6.4009116 V 11.659724 H 4.7992186 V 13.99977 H 2.0001628 Z',
  measurements =
    'M 1.7792969,4.1816406 C 1.4635303,4.2034836 1.2472407,4.5095002 1.3320312,4.8144531 2.0126746,7.4312978 2.3589401,9.6399539 2.4804688,11.576172 l -0.2792969,0.179687 c -0.2007566,0.128704 -0.362752,0.219425 -0.5644531,0.480469 -0.1008507,0.130522 -0.2414074,0.337804 -0.2460938,0.683594 -0.00469,0.34579 0.2212218,0.709779 0.4121094,0.861328 0.3438312,0.272974 0.5293755,0.265612 0.7070312,0.279297 -0.102277,2.28979 -0.5523838,4.163493 -1.15625,5.869141 -0.266254,0.647707 0.7399311,1.004673 0.9414063,0.333984 0.6291584,-1.777086 1.0947468,-3.759245 1.2011719,-6.16211 0.8587499,0.0021 1.9817457,-0.02871 3.2402343,0.08203 1.266623,0.111458 2.5881834,0.388821 3.6914059,0.923828 -0.8838667,0.895791 -1.5848887,2.046501 -1.9218746,3.492187 l -0.2265625,0.972657 1.9472651,0.455078 0.226563,-0.97461 c 0.285273,-1.223836 0.850633,-2.097458 1.613281,-2.771484 0.508245,0.558951 0.895359,1.267092 1.117188,2.21875 l 0.226562,0.972656 1.949219,-0.453125 -0.228516,-0.974609 c -0.263451,-1.130219 -0.752009,-2.068727 -1.375,-2.835938 1.029043,-0.475861 2.194264,-0.776127 3.316407,-0.958984 1.232141,-0.200782 2.333045,-0.266545 3.220703,-0.341797 0.08818,2.494183 0.568253,4.529139 1.214843,6.355469 0.201481,0.670677 1.207649,0.313718 0.941407,-0.333984 -0.627794,-1.773234 -1.099219,-3.716671 -1.175781,-6.132811 0.04197,-0.0074 0.08942,-0.01089 0.130859,-0.01953 0.203289,-0.04241 0.397475,-0.06086 0.701172,-0.28711 0.151848,-0.113123 0.350634,-0.325838 0.427734,-0.634765 0.0771,-0.308927 -0.0063,-0.622179 -0.105469,-0.806641 -0.19843,-0.368923 -0.391632,-0.467629 -0.59375,-0.601562 l -0.472656,-0.3125 c 0.145104,-1.8337507 0.478549,-3.8949994 1.109375,-6.3203139 0.09171,-0.3306355 -0.169212,-0.6533027 -0.511719,-0.6328125 -0.218769,0.013497 -0.40325,0.1678902 -0.455078,0.3808594 -0.737,2.8335196 -1.100379,5.2405579 -1.199218,7.341797 -0.815925,0.07419 -2.080274,0.132785 -3.554688,0.373047 -1.478459,0.240919 -3.106344,0.671272 -4.574219,1.509765 -0.13911,-0.09127 -0.278493,-0.182969 -0.421875,-0.263671 -1.545631,-0.869966 -3.2877636,-1.195282 -4.8417966,-1.332032 -1.384279,-0.121812 -2.5095809,-0.08087 -3.296875,-0.08008 L 3.4980469,11.929688 C 3.4010459,9.8222094 3.0389322,7.4079513 2.2988281,4.5625 2.2413801,4.3260531 2.0220721,4.1652822 1.7792969,4.1816406 Z',
  withBreasts =
    'm 8.233159,2.5000002 c 0,0 0.03684,1.4367676 0.07562,2.1541457 C 8.413989,6.5901608 7.3671071,6.9496995 7.3372662,8.1692173 7.3029172,9.5719723 8.2152,10.315942 8.255388,12.267223 8.290568,13.973294 7.1739465,15.012709 7.1739465,17.259683 9.46861,17.549817 10.668009,19.205086 11.354231,21.5 h 0.109763 0.93923 0.109803 c 0.686181,-2.294914 1.88558,-3.950183 4.180285,-4.240317 0,-2.246974 -1.116622,-3.286389 -1.081483,-4.99246 0.04015,-1.951281 0.952433,-2.6952507 0.918122,-4.0980057 -0.0298,-1.2195178 -1.076723,-1.5790565 -0.971513,-3.5150714 0.0389,-0.7173781 0.07562,-2.1541457 0.07562,-2.1541457 h -0.722313 c 0,1.5276628 -1.146752,3.7763442 -2.978112,3.7763442 -1.831402,0 -2.978154,-2.2486814 -2.978154,-3.7763442 z',
  withoutBreasts =
    'M 6.2021092,6.7988281 C 5.0433189,10.972649 5.2215488,13.211802 5.2215488,16.798828 h 5.8983122 l 0.143133,-1.21128 c 0.331559,-1.834081 0.655671,-2.543616 1.078829,0.07477 l 0.134587,1.136509 h 5.896176 c 0,-3.587026 0.180363,-5.826179 -0.978425,-9.9999999 z',
  icons = {
    gitter: gitter,
    github: github,
    twitter: twitter,
    instagram: instagram,
    google: google,
    facebook: facebook,
    note: note,
    tip: tip,
    warning: warning,
    units: units,
    measurements: measurements,
    withBreasts: withBreasts,
    withoutBreasts: withoutBreasts
  },
  Icon = function (e) {
    var t = e.size,
      a = void 0 === t ? 24 : t,
      n = e.viewBox,
      s = void 0 === n ? '0 0 24 24' : n,
      l = e.className,
      i = void 0 === l ? '' : l,
      r = e.icon,
      c = void 0 === r ? 'github' : r,
      o = e.color,
      d = void 0 !== o && o,
      m = e.style,
      p = void 0 === m ? {} : m
    return React__default.createElement(
      'svg',
      {
        style: p,
        className: i,
        xmlns: 'http://www.w3.org/2000/svg',
        width: a,
        height: a,
        viewBox: s
      },
      React__default.createElement('path', {
        stroke: 'none',
        fill: d ? d : 'currentColor',
        d: icons[c]
      })
    )
  },
  version$1 = '2.6.0-rc.0',
  Footer = function (e) {
    var t = {
        gitter: 'https://gitter.im/freesewing/chat',
        twitter: 'https://twitter.com/freesewing_org',
        github: 'https://github.com/freesewing',
        instagram: 'https://instagram.com/freesewing_org'
      },
      a =
        !1 === e.links
          ? {
              left: {
                blog: 'https://' + e.language + '.freesewing.org/blog',
                aboutFreesewing: 'https://' + e.language + '.freesewing.org/docs/about',
                faq: 'https://' + e.language + '.freesewing.org/faq'
              },
              right: {
                becomeAPatron: 'https://' + e.language + '.freesewing.org/patrons/join',
                makerDocs: 'https://' + e.language + '.freesewing.org/docs/',
                devDocs: 'https://' + e.language + '.freesewing.dev/'
              }
            }
          : e.links
    return React__default.createElement(
      'footer',
      null,
      React__default.createElement(
        'a',
        { href: e.home, 'data-test': 'logo' },
        React__default.createElement(Logo, { size: 101 })
      ),
      React__default.createElement(
        'p',
        { 'data-test': 'social' },
        Object.keys(t).map(function (e) {
          return React__default.createElement(
            IconButton,
            { href: t[e], className: e, title: e, key: e },
            React__default.createElement(Icon, { icon: e })
          )
        })
      ),
      React__default.createElement(
        'p',
        { 'data-test': 'text' },
        React__default.createElement(reactIntl.FormattedHTMLMessage, { id: 'app.txt-footer' }),
        ':'
      ),
      e.patrons,
      React__default.createElement(
        'div',
        {
          style: {
            container: {
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }
          }.container
        },
        Object.keys(a).map(function (e) {
          for (var t, n = [], s = 0, l = Object.keys(a[e]); s < l.length; s++)
            (t = l[s]),
              n.push(
                React__default.createElement(
                  'li',
                  { key: t, style: { textAlign: 'center' } },
                  React__default.createElement(
                    'a',
                    { href: a[e][t], 'data-test': t },
                    React__default.createElement(reactIntl.FormattedMessage, { id: 'app.' + t })
                  )
                )
              )
          return React__default.createElement(
            'div',
            { key: e },
            React__default.createElement('ul', { style: { margin: '0 1rem' } }, n)
          )
        })
      ),
      React__default.createElement(
        'p',
        { className: 'version' },
        React__default.createElement(
          'a',
          { href: 'https://github.com/freesewing/freesewing/releases/tag/v' + version$1 },
          'v',
          version$1
        )
      )
    )
  }
Footer.defaultProps = { home: '/', links: !1, patrons: null }
var FormFieldMeasurement = function (e) {
    var t = React.useState(roundMm(e.value / 10)),
      a = _slicedToArray(t, 2),
      n = a[0],
      s = a[1]
    React.useEffect(
      function () {
        isNaN(e.value) || s(roundMm(e.value / 10))
      },
      [e.value]
    )
    return React__default.createElement(TextField, {
      id: e.name,
      fullWidth: !0,
      label: e.intl.formatMessage({ id: e.label }),
      margin: 'normal',
      variant: 'outlined',
      value: n,
      type: 'text',
      onChange: function (t) {
        s(t.target.value),
          '.' !== t.target.value.slice(-1) && e.updateValue(e.name, 10 * t.target.value)
      },
      InputProps: {
        endAdornment: React__default.createElement(
          InputAdornment,
          { position: 'end' },
          isNaN(e.value)
            ? React__default.createElement(InvalidIcon, { color: 'error' })
            : React__default.createElement(
                IconButton,
                { classes: { label: 'color-success' }, size: 'small' },
                'imperial' === e.units ? '"' : 'cm'
              )
        )
      }
    })
  },
  FormFieldMeasurement$1 = reactIntl.injectIntl(FormFieldMeasurement),
  Measurements = function (e) {
    var t = {
        container: { display: 'flex', flexDirection: 'row', width: '100%', minHeight: '70vh' },
        chooser: { width: '100%', maxWidth: '500px', margin: 'auto', alignSelf: 'center' }
      },
      a = function (t) {
        return null === e.measurements
          ? ''
          : 'undefined' == typeof e.measurements[t]
          ? ''
          : e.measurements[t]
      }
    return 1 > e.required.length
      ? React__default.createElement(
          'div',
          { style: t.container },
          React__default.createElement(
            'div',
            { style: t.chooser },
            React__default.createElement(
              'h2',
              null,
              React__default.createElement(reactIntl.FormattedMessage, {
                id: 'app.requiredMeasurements'
              })
            ),
            React__default.createElement(
              'h3',
              null,
              React__default.createElement(reactIntl.FormattedMessage, {
                id: 'cfp.noRequiredMeasurements'
              })
            ),
            React__default.createElement(
              'p',
              null,
              React__default.createElement(reactIntl.FormattedHTMLMessage, {
                id: 'cfp.howtoAddMeasurements'
              })
            ),
            React__default.createElement(
              'p',
              null,
              React__default.createElement(reactIntl.FormattedMessage, { id: 'cfp.seeDocsAt' }),
              '\xA0',
              React__default.createElement(
                'a',
                { href: 'https://' + e.language + '/.freesewing.dev/core/config' },
                e.language,
                '.freesewing.dev/core/config'
              )
            )
          )
        )
      : React__default.createElement(
          'div',
          { style: t.container },
          React__default.createElement(
            'div',
            { style: t.chooser },
            React__default.createElement(
              'h2',
              null,
              React__default.createElement(reactIntl.FormattedMessage, {
                id: 'app.requiredMeasurements'
              })
            ),
            React__default.createElement(
              'p',
              null,
              React__default.createElement(reactIntl.FormattedMessage, { id: 'cfp.youCan' })
            ),
            React__default.createElement(
              'ul',
              null,
              React__default.createElement(
                'li',
                null,
                React__default.createElement(
                  'a',
                  { href: '#manual' },
                  React__default.createElement(reactIntl.FormattedMessage, {
                    id: 'cfp.enterMeasurements'
                  })
                )
              ),
              React__default.createElement(
                'li',
                null,
                React__default.createElement(
                  'a',
                  { href: '#preload' },
                  React__default.createElement(reactIntl.FormattedMessage, {
                    id: 'cfp.preloadMeasurements'
                  })
                )
              )
            ),
            React__default.createElement(
              'h3',
              { id: 'manual' },
              React__default.createElement(reactIntl.FormattedMessage, {
                id: 'cfp.enterMeasurements'
              })
            ),
            e.required.map(function (t) {
              return React__default.createElement(FormFieldMeasurement$1, {
                key: t,
                name: t,
                units: e.units,
                value: a(t),
                label: 'measurements.' + t,
                updateValue: e.updateMeasurement
              })
            }),
            React__default.createElement(
              'h3',
              { id: 'preload' },
              React__default.createElement(reactIntl.FormattedMessage, {
                id: 'cfp.preloadMeasurements'
              })
            ),
            React__default.createElement(
              'h4',
              null,
              React__default.createElement(reactIntl.FormattedMessage, { id: 'app.withoutBreasts' })
            ),
            React__default.createElement(
              'ul',
              null,
              Object.keys(models.withoutBreasts).map(function (t) {
                return React__default.createElement(
                  'li',
                  { key: t },
                  React__default.createElement(
                    Button,
                    {
                      onClick: function () {
                        return e.preloadMeasurements(models.withoutBreasts[t])
                      }
                    },
                    React__default.createElement(reactIntl.FormattedMessage, { id: 'cfp.size' }),
                    '\xA0',
                    t.slice(-2)
                  )
                )
              })
            ),
            React__default.createElement(
              'h4',
              null,
              React__default.createElement(reactIntl.FormattedMessage, { id: 'app.withBreasts' })
            ),
            React__default.createElement(
              'ul',
              null,
              Object.keys(models.withBreasts).map(function (t) {
                return React__default.createElement(
                  'li',
                  { key: t },
                  React__default.createElement(
                    Button,
                    {
                      onClick: function () {
                        return e.preloadMeasurements(models.withBreasts[t])
                      }
                    },
                    React__default.createElement(reactIntl.FormattedMessage, { id: 'cfp.size' }),
                    '\xA0',
                    t.slice(-2)
                  )
                )
              })
            )
          )
        )
  },
  Workbench = function (e) {
    var t = e.updateGist,
      a = e.setLanguage,
      n = e.userLanguage,
      s = void 0 === n ? 'en' : n,
      l = e.language,
      i = void 0 === l ? 'en' : l,
      r = e.gist,
      c = e.importGist,
      o = e.config,
      d = e.freesewing,
      m = e.Pattern,
      p = e.units,
      u = void 0 === p ? 'metric' : p,
      g = e.translations,
      f = void 0 !== g && g,
      E = e.addTranslations,
      h = React.useState(null),
      y = _slicedToArray(h, 2),
      v = y[0],
      M = y[1],
      x = React.useState(!1),
      k = _slicedToArray(x, 2),
      b = k[0],
      C = k[1],
      w = React.useState('light'),
      L = _slicedToArray(w, 2),
      N = L[0],
      V = L[1],
      S = React.useState(null),
      z = _slicedToArray(S, 2),
      D = z[0],
      F = z[1],
      P = React.useState(!1),
      H = _slicedToArray(P, 2),
      O = H[0],
      G = H[1]
    React.useEffect(function () {
      var e = _()
      F(e), t(e, 'settings', 'measurements'), M(B()), a(s), f && E(f)
    }, []),
      React.useEffect(
        function () {
          i !== r.settings.locale && t(i, 'settings', 'locale')
        },
        [i]
      )
    var B = function () {
        return storage.get(o.name + '-display')
      },
      R = function (e) {
        M(e), storage.set(o.name + '-display', e)
      },
      _ = function () {
        return storage.get(o.name + '-measurements')
      },
      A = function (e) {
        storage.set(o.name + '-measurements', e), t(e, 'settings', 'measurements')
      },
      I = function () {
        var e = o.measurements
        if (1 > e.length) return !1
        if (null === D) return !0
        var t,
          a = _createForOfIteratorHelper(e)
        try {
          for (a.s(); !(t = a.n()).done; ) {
            var n = t.value
            if ('undefined' == typeof D[n]) return !0
          }
        } catch (e) {
          a.e(e)
        } finally {
          a.f()
        }
        return !1
      },
      j = function () {},
      T = {
        left: {
          draft: {
            type: 'button',
            onClick: function () {
              return R('draft')
            },
            text: 'cfp.draftYourPattern',
            active: !('draft' !== v)
          },
          sample: {
            type: 'button',
            onClick: function () {
              return R('sample')
            },
            text: 'cfp.testYourPattern',
            active: !('sample' !== v)
          },
          measurements: {
            type: 'button',
            onClick: function () {
              return R('measurements')
            },
            text: 'app.measurements',
            active: !('measurements' !== v)
          },
          json: {
            type: 'button',
            onClick: function () {
              return R('json')
            },
            text: 'JSON',
            active: !('json' !== v)
          }
        },
        right: {
          version: {
            type: 'link',
            href: 'https://github.com/freesewing/freesewing/releases',
            text: 'v' + d.version
          },
          language: {
            type: 'button',
            onClick: function () {
              return R('languages')
            },
            text: React__default.createElement(LanguageIcon, { className: 'nav-icon' }),
            title: 'Languages',
            active: !('languages' !== v)
          },
          dark: {
            type: 'button',
            onClick: function () {
              'light' === N ? V('dark') : V('light')
            },
            text: React__default.createElement(DarkModeIcon, { className: 'nav-icon moon' }),
            title: 'Toggle dark mode'
          }
        }
      }
    'draft' !== v ||
      I() ||
      (T.left.svgExport = {
        type: 'button',
        onClick: function () {
          return G(!0)
        },
        text: 'app.export',
        active: !1
      }),
      (T.mleft = T.left),
      (T.mright = T.right)
    var Y = null
    'languages' === v
      ? (Y = React__default.createElement(LanguageChooser, { setLanguage: a, setDisplay: R }))
      : 'draft' === v
      ? (I() && R('measurements'),
        (Y = React__default.createElement(DraftPattern, {
          freesewing: d,
          Pattern: m,
          config: o,
          gist: r,
          updateGist: t,
          raiseEvent: j,
          units: u,
          svgExport: O,
          setSvgExport: G,
          theme: N
        })))
      : 'sample' === v
      ? (I() && R('measurements'),
        (Y = React__default.createElement(SamplePattern, {
          freesewing: d,
          Pattern: m,
          config: o,
          gist: r,
          updateGist: t,
          raiseEvent: j,
          units: u
        })))
      : 'measurements' === v
      ? (Y = React__default.createElement(Measurements, {
          measurements: D,
          required: o.measurements,
          units: u,
          updateMeasurement: function (e, t) {
            var a = _objectSpread2({}, D)
            ;(a[e] = t), F(a), A(a)
          },
          preloadMeasurements: function (e) {
            var t = _objectSpread2({}, D, {}, e)
            F(t), A(t)
          },
          language: i
        }))
      : 'json' === v
      ? (Y = React__default.createElement(PatternJson, { gist: r }))
      : 'inspect' === v
      ? (Y = React__default.createElement(InspectPattern, {
          freesewing: d,
          Pattern: m,
          config: o,
          gist: r,
          updateGist: t,
          raiseEvent: j,
          units: u,
          svgExport: O,
          setSvgExport: G
        }))
      : (Y = React__default.createElement(Welcome, { language: i, setDisplay: R }))
    var U = { dark: muiTheme.dark, light: muiTheme.light }
    return React__default.createElement(
      styles.MuiThemeProvider,
      { theme: styles.createMuiTheme(U[N]) },
      React__default.createElement(
        'div',
        { className: 'light' === N ? 'theme-wrapper light' : 'theme-wrapper dark' },
        'welcome' === v
          ? null
          : React__default.createElement(Navbar, {
              navs: T,
              home: function () {
                return R('welcome')
              }
            }),
        Y,
        'welcome' === v ? null : React__default.createElement(Footer, { language: i })
      )
    )
  },
  index$1 = withLanguage(withGist(Workbench, { gist: defaultGist, store: !0 }), 'en')
module.exports = index$1
//# sourceMappingURL=index.js.map
