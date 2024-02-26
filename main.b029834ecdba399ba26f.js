/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(1);

var _global = _interopRequireDefault(__webpack_require__(289));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(2);

__webpack_require__(259);

__webpack_require__(261);

__webpack_require__(264);

__webpack_require__(267);

__webpack_require__(269);

__webpack_require__(271);

__webpack_require__(273);

__webpack_require__(275);

__webpack_require__(277);

__webpack_require__(280);

__webpack_require__(282);

__webpack_require__(284);

__webpack_require__(288);

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(3);
__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(58);
__webpack_require__(60);
__webpack_require__(61);
__webpack_require__(62);
__webpack_require__(63);
__webpack_require__(64);
__webpack_require__(65);
__webpack_require__(66);
__webpack_require__(67);
__webpack_require__(68);
__webpack_require__(70);
__webpack_require__(72);
__webpack_require__(74);
__webpack_require__(76);
__webpack_require__(79);
__webpack_require__(80);
__webpack_require__(81);
__webpack_require__(85);
__webpack_require__(87);
__webpack_require__(89);
__webpack_require__(92);
__webpack_require__(93);
__webpack_require__(94);
__webpack_require__(95);
__webpack_require__(97);
__webpack_require__(98);
__webpack_require__(99);
__webpack_require__(100);
__webpack_require__(101);
__webpack_require__(102);
__webpack_require__(103);
__webpack_require__(105);
__webpack_require__(106);
__webpack_require__(107);
__webpack_require__(109);
__webpack_require__(110);
__webpack_require__(111);
__webpack_require__(113);
__webpack_require__(115);
__webpack_require__(116);
__webpack_require__(117);
__webpack_require__(118);
__webpack_require__(119);
__webpack_require__(120);
__webpack_require__(121);
__webpack_require__(122);
__webpack_require__(123);
__webpack_require__(124);
__webpack_require__(125);
__webpack_require__(126);
__webpack_require__(127);
__webpack_require__(132);
__webpack_require__(133);
__webpack_require__(137);
__webpack_require__(138);
__webpack_require__(139);
__webpack_require__(140);
__webpack_require__(142);
__webpack_require__(143);
__webpack_require__(144);
__webpack_require__(145);
__webpack_require__(146);
__webpack_require__(147);
__webpack_require__(148);
__webpack_require__(149);
__webpack_require__(150);
__webpack_require__(151);
__webpack_require__(152);
__webpack_require__(153);
__webpack_require__(154);
__webpack_require__(155);
__webpack_require__(156);
__webpack_require__(158);
__webpack_require__(159);
__webpack_require__(161);
__webpack_require__(162);
__webpack_require__(168);
__webpack_require__(169);
__webpack_require__(171);
__webpack_require__(172);
__webpack_require__(173);
__webpack_require__(177);
__webpack_require__(178);
__webpack_require__(179);
__webpack_require__(180);
__webpack_require__(181);
__webpack_require__(183);
__webpack_require__(184);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(189);
__webpack_require__(191);
__webpack_require__(192);
__webpack_require__(193);
__webpack_require__(195);
__webpack_require__(197);
__webpack_require__(199);
__webpack_require__(201);
__webpack_require__(202);
__webpack_require__(203);
__webpack_require__(207);
__webpack_require__(208);
__webpack_require__(209);
__webpack_require__(211);
__webpack_require__(221);
__webpack_require__(225);
__webpack_require__(226);
__webpack_require__(228);
__webpack_require__(229);
__webpack_require__(233);
__webpack_require__(234);
__webpack_require__(236);
__webpack_require__(237);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(240);
__webpack_require__(241);
__webpack_require__(242);
__webpack_require__(243);
__webpack_require__(244);
__webpack_require__(245);
__webpack_require__(246);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(252);
__webpack_require__(253);
__webpack_require__(254);
__webpack_require__(256);
__webpack_require__(257);
__webpack_require__(258);
module.exports = __webpack_require__(9);


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(4);
var has = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(18);
var META = (__webpack_require__(25).KEY);
var $fails = __webpack_require__(7);
var shared = __webpack_require__(21);
var setToStringTag = __webpack_require__(26);
var uid = __webpack_require__(19);
var wks = __webpack_require__(27);
var wksExt = __webpack_require__(28);
var wksDefine = __webpack_require__(29);
var enumKeys = __webpack_require__(30);
var isArray = __webpack_require__(45);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(13);
var toObject = __webpack_require__(46);
var toIObject = __webpack_require__(33);
var toPrimitive = __webpack_require__(16);
var createDesc = __webpack_require__(17);
var _create = __webpack_require__(47);
var gOPNExt = __webpack_require__(50);
var $GOPD = __webpack_require__(52);
var $GOPS = __webpack_require__(43);
var $DP = __webpack_require__(11);
var $keys = __webpack_require__(31);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  (__webpack_require__(51).f) = gOPNExt.f = $getOwnPropertyNames;
  (__webpack_require__(44).f) = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(22)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 4 */
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(4);
var core = __webpack_require__(9);
var hide = __webpack_require__(10);
var redefine = __webpack_require__(18);
var ctx = __webpack_require__(23);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 9 */
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(17);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(14);
var toPrimitive = __webpack_require__(16);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function () {
  return Object.defineProperty(__webpack_require__(15)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(13);
var document = (__webpack_require__(4).document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(4);
var hide = __webpack_require__(10);
var has = __webpack_require__(5);
var SRC = __webpack_require__(19)('src');
var $toString = __webpack_require__(20);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(9).inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 19 */
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(21)('native-function-to-string', Function.toString);


/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(9);
var global = __webpack_require__(4);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(22) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = false;


/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(24);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 24 */
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var META = __webpack_require__(19)('meta');
var isObject = __webpack_require__(13);
var has = __webpack_require__(5);
var setDesc = (__webpack_require__(11).f);
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(7)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = (__webpack_require__(11).f);
var has = __webpack_require__(5);
var TAG = __webpack_require__(27)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 27 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(21)('wks');
var uid = __webpack_require__(19);
var Symbol = (__webpack_require__(4).Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(27);


/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(4);
var core = __webpack_require__(9);
var LIBRARY = __webpack_require__(22);
var wksExt = __webpack_require__(28);
var defineProperty = (__webpack_require__(11).f);
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(31);
var gOPS = __webpack_require__(43);
var pIE = __webpack_require__(44);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(32);
var enumBugKeys = __webpack_require__(42);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(5);
var toIObject = __webpack_require__(33);
var arrayIndexOf = __webpack_require__(37)(false);
var IE_PROTO = __webpack_require__(41)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(34);
var defined = __webpack_require__(36);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 34 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(35);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 35 */
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 36 */
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 37 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(33);
var toLength = __webpack_require__(38);
var toAbsoluteIndex = __webpack_require__(40);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 38 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(39);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 39 */
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 40 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(39);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 41 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(21)('keys');
var uid = __webpack_require__(19);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 42 */
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 45 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(35);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 46 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(36);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 47 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(48);
var enumBugKeys = __webpack_require__(42);
var IE_PROTO = __webpack_require__(41)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(15)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(49).appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 48 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(31);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 49 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = (__webpack_require__(4).document);
module.exports = document && document.documentElement;


/***/ }),
/* 50 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(33);
var gOPN = (__webpack_require__(51).f);
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(32);
var hiddenKeys = (__webpack_require__(42).concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(44);
var createDesc = __webpack_require__(17);
var toIObject = __webpack_require__(33);
var toPrimitive = __webpack_require__(16);
var has = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(14);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(8);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(47) });


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: (__webpack_require__(11).f) });


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(8);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperties: __webpack_require__(48) });


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(33);
var $getOwnPropertyDescriptor = (__webpack_require__(52).f);

__webpack_require__(57)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 57 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8);
var core = __webpack_require__(9);
var fails = __webpack_require__(7);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(46);
var $getPrototypeOf = __webpack_require__(59);

__webpack_require__(57)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 59 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(5);
var toObject = __webpack_require__(46);
var IE_PROTO = __webpack_require__(41)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(46);
var $keys = __webpack_require__(31);

__webpack_require__(57)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(57)('getOwnPropertyNames', function () {
  return (__webpack_require__(50).f);
});


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(13);
var meta = (__webpack_require__(25).onFreeze);

__webpack_require__(57)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(13);
var meta = (__webpack_require__(25).onFreeze);

__webpack_require__(57)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(13);
var meta = (__webpack_require__(25).onFreeze);

__webpack_require__(57)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(13);

__webpack_require__(57)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(13);

__webpack_require__(57)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(13);

__webpack_require__(57)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(69) });


/***/ }),
/* 69 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(6);
var getKeys = __webpack_require__(31);
var gOPS = __webpack_require__(43);
var pIE = __webpack_require__(44);
var toObject = __webpack_require__(46);
var IObject = __webpack_require__(34);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(7)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(8);
$export($export.S, 'Object', { is: __webpack_require__(71) });


/***/ }),
/* 71 */
/***/ ((module) => {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(8);
$export($export.S, 'Object', { setPrototypeOf: (__webpack_require__(73).set) });


/***/ }),
/* 73 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(13);
var anObject = __webpack_require__(12);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(23)(Function.call, (__webpack_require__(52).f)(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(75);
var test = {};
test[__webpack_require__(27)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(18)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 75 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(35);
var TAG = __webpack_require__(27)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(8);

$export($export.P, 'Function', { bind: __webpack_require__(77) });


/***/ }),
/* 77 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(24);
var isObject = __webpack_require__(13);
var invoke = __webpack_require__(78);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 78 */
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var dP = (__webpack_require__(11).f);
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 80 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(13);
var getPrototypeOf = __webpack_require__(59);
var HAS_INSTANCE = __webpack_require__(27)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) (__webpack_require__(11).f)(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),
/* 81 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(8);
var $parseInt = __webpack_require__(82);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 82 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = (__webpack_require__(4).parseInt);
var $trim = (__webpack_require__(83).trim);
var ws = __webpack_require__(84);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 83 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(8);
var defined = __webpack_require__(36);
var fails = __webpack_require__(7);
var spaces = __webpack_require__(84);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 84 */
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 85 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(8);
var $parseFloat = __webpack_require__(86);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 86 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseFloat = (__webpack_require__(4).parseFloat);
var $trim = (__webpack_require__(83).trim);

module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(4);
var has = __webpack_require__(5);
var cof = __webpack_require__(35);
var inheritIfRequired = __webpack_require__(88);
var toPrimitive = __webpack_require__(16);
var fails = __webpack_require__(7);
var gOPN = (__webpack_require__(51).f);
var gOPD = (__webpack_require__(52).f);
var dP = (__webpack_require__(11).f);
var $trim = (__webpack_require__(83).trim);
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(47)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(6) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(18)(global, NUMBER, $Number);
}


/***/ }),
/* 88 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(13);
var setPrototypeOf = (__webpack_require__(73).set);
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 89 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var toInteger = __webpack_require__(39);
var aNumberValue = __webpack_require__(90);
var repeat = __webpack_require__(91);
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(7)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),
/* 90 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cof = __webpack_require__(35);
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),
/* 91 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(39);
var defined = __webpack_require__(36);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),
/* 92 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var $fails = __webpack_require__(7);
var aNumberValue = __webpack_require__(90);
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(8);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 94 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(8);
var _isFinite = (__webpack_require__(4).isFinite);

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(8);

$export($export.S, 'Number', { isInteger: __webpack_require__(96) });


/***/ }),
/* 96 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(13);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 97 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(8);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(8);
var isInteger = __webpack_require__(96);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(8);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(8);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 101 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(8);
var $parseFloat = __webpack_require__(86);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 102 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(8);
var $parseInt = __webpack_require__(82);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 103 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(8);
var log1p = __webpack_require__(104);
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),
/* 104 */
/***/ ((module) => {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),
/* 105 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(8);
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 106 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(8);
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),
/* 107 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(8);
var sign = __webpack_require__(108);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),
/* 108 */
/***/ ((module) => {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),
/* 109 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(8);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),
/* 110 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(8);
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),
/* 111 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(8);
var $expm1 = __webpack_require__(112);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 112 */
/***/ ((module) => {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),
/* 113 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(8);

$export($export.S, 'Math', { fround: __webpack_require__(114) });


/***/ }),
/* 114 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(108);
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),
/* 115 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(8);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),
/* 116 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(8);
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(7)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),
/* 117 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(8);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),
/* 118 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(8);

$export($export.S, 'Math', { log1p: __webpack_require__(104) });


/***/ }),
/* 119 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(8);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),
/* 120 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(8);

$export($export.S, 'Math', { sign: __webpack_require__(108) });


/***/ }),
/* 121 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(8);
var expm1 = __webpack_require__(112);
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(7)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),
/* 122 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(8);
var expm1 = __webpack_require__(112);
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),
/* 123 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(8);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),
/* 124 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(8);
var toAbsoluteIndex = __webpack_require__(40);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),
/* 125 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(8);
var toIObject = __webpack_require__(33);
var toLength = __webpack_require__(38);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),
/* 126 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(83)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 127 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $at = __webpack_require__(128)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(129)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 128 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(39);
var defined = __webpack_require__(36);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 129 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(22);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(18);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(130);
var $iterCreate = __webpack_require__(131);
var setToStringTag = __webpack_require__(26);
var getPrototypeOf = __webpack_require__(59);
var ITERATOR = __webpack_require__(27)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 130 */
/***/ ((module) => {

module.exports = {};


/***/ }),
/* 131 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(47);
var descriptor = __webpack_require__(17);
var setToStringTag = __webpack_require__(26);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(27)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 132 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var $at = __webpack_require__(128)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 133 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(8);
var toLength = __webpack_require__(38);
var context = __webpack_require__(134);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(136)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 134 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(135);
var defined = __webpack_require__(36);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 135 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(13);
var cof = __webpack_require__(35);
var MATCH = __webpack_require__(27)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 136 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MATCH = __webpack_require__(27)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 137 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(8);
var context = __webpack_require__(134);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(136)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 138 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(8);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(91)
});


/***/ }),
/* 139 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(8);
var toLength = __webpack_require__(38);
var context = __webpack_require__(134);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(136)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 140 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(141)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 141 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(8);
var fails = __webpack_require__(7);
var defined = __webpack_require__(36);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 142 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(141)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),
/* 143 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(141)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),
/* 144 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(141)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),
/* 145 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(141)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),
/* 146 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(141)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),
/* 147 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(141)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),
/* 148 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(141)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),
/* 149 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(141)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),
/* 150 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(141)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),
/* 151 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(141)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),
/* 152 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(141)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 153 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(141)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),
/* 154 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(8);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 155 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var toObject = __webpack_require__(46);
var toPrimitive = __webpack_require__(16);

$export($export.P + $export.F * __webpack_require__(7)(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),
/* 156 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(8);
var toISOString = __webpack_require__(157);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),
/* 157 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(7);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),
/* 158 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(18)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 159 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_PRIMITIVE = __webpack_require__(27)('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(160));


/***/ }),
/* 160 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(16);
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),
/* 161 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(8);

$export($export.S, 'Array', { isArray: __webpack_require__(45) });


/***/ }),
/* 162 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ctx = __webpack_require__(23);
var $export = __webpack_require__(8);
var toObject = __webpack_require__(46);
var call = __webpack_require__(163);
var isArrayIter = __webpack_require__(164);
var toLength = __webpack_require__(38);
var createProperty = __webpack_require__(165);
var getIterFn = __webpack_require__(166);

$export($export.S + $export.F * !__webpack_require__(167)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 163 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(12);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 164 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(130);
var ITERATOR = __webpack_require__(27)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 165 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(11);
var createDesc = __webpack_require__(17);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 166 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(75);
var ITERATOR = __webpack_require__(27)('iterator');
var Iterators = __webpack_require__(130);
module.exports = (__webpack_require__(9).getIteratorMethod) = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 167 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(27)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 168 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var createProperty = __webpack_require__(165);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(7)(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),
/* 169 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(8);
var toIObject = __webpack_require__(33);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(34) != Object || !__webpack_require__(170)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 170 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(7);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 171 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var html = __webpack_require__(49);
var cof = __webpack_require__(35);
var toAbsoluteIndex = __webpack_require__(40);
var toLength = __webpack_require__(38);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(7)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),
/* 172 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var aFunction = __webpack_require__(24);
var toObject = __webpack_require__(46);
var fails = __webpack_require__(7);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(170)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 173 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var $forEach = __webpack_require__(174)(0);
var STRICT = __webpack_require__(170)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 174 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(23);
var IObject = __webpack_require__(34);
var toObject = __webpack_require__(46);
var toLength = __webpack_require__(38);
var asc = __webpack_require__(175);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 175 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(176);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 176 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(13);
var isArray = __webpack_require__(45);
var SPECIES = __webpack_require__(27)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 177 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var $map = __webpack_require__(174)(1);

$export($export.P + $export.F * !__webpack_require__(170)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 178 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var $filter = __webpack_require__(174)(2);

$export($export.P + $export.F * !__webpack_require__(170)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 179 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var $some = __webpack_require__(174)(3);

$export($export.P + $export.F * !__webpack_require__(170)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 180 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var $every = __webpack_require__(174)(4);

$export($export.P + $export.F * !__webpack_require__(170)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 181 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var $reduce = __webpack_require__(182);

$export($export.P + $export.F * !__webpack_require__(170)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),
/* 182 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(24);
var toObject = __webpack_require__(46);
var IObject = __webpack_require__(34);
var toLength = __webpack_require__(38);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),
/* 183 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var $reduce = __webpack_require__(182);

$export($export.P + $export.F * !__webpack_require__(170)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),
/* 184 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var $indexOf = __webpack_require__(37)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(170)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 185 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var toIObject = __webpack_require__(33);
var toInteger = __webpack_require__(39);
var toLength = __webpack_require__(38);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(170)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),
/* 186 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(8);

$export($export.P, 'Array', { copyWithin: __webpack_require__(187) });

__webpack_require__(188)('copyWithin');


/***/ }),
/* 187 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(46);
var toAbsoluteIndex = __webpack_require__(40);
var toLength = __webpack_require__(38);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 188 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(27)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 189 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(8);

$export($export.P, 'Array', { fill: __webpack_require__(190) });

__webpack_require__(188)('fill');


/***/ }),
/* 190 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(46);
var toAbsoluteIndex = __webpack_require__(40);
var toLength = __webpack_require__(38);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 191 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(8);
var $find = __webpack_require__(174)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(188)(KEY);


/***/ }),
/* 192 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(8);
var $find = __webpack_require__(174)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(188)(KEY);


/***/ }),
/* 193 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(194)('Array');


/***/ }),
/* 194 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(4);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(6);
var SPECIES = __webpack_require__(27)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 195 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var addToUnscopables = __webpack_require__(188);
var step = __webpack_require__(196);
var Iterators = __webpack_require__(130);
var toIObject = __webpack_require__(33);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(129)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 196 */
/***/ ((module) => {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 197 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(4);
var inheritIfRequired = __webpack_require__(88);
var dP = (__webpack_require__(11).f);
var gOPN = (__webpack_require__(51).f);
var isRegExp = __webpack_require__(135);
var $flags = __webpack_require__(198);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function () {
  re2[__webpack_require__(27)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(18)(global, 'RegExp', $RegExp);
}

__webpack_require__(194)('RegExp');


/***/ }),
/* 198 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(12);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 199 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var regexpExec = __webpack_require__(200);
__webpack_require__(8)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 200 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexpFlags = __webpack_require__(198);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 201 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(202);
var anObject = __webpack_require__(12);
var $flags = __webpack_require__(198);
var DESCRIPTORS = __webpack_require__(6);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(7)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 202 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(6) && /./g.flags != 'g') (__webpack_require__(11).f)(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(198)
});


/***/ }),
/* 203 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(12);
var toLength = __webpack_require__(38);
var advanceStringIndex = __webpack_require__(204);
var regExpExec = __webpack_require__(205);

// @@match logic
__webpack_require__(206)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 204 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var at = __webpack_require__(128)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 205 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(75);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 206 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(199);
var redefine = __webpack_require__(18);
var hide = __webpack_require__(10);
var fails = __webpack_require__(7);
var defined = __webpack_require__(36);
var wks = __webpack_require__(27);
var regexpExec = __webpack_require__(200);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 207 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(12);
var toObject = __webpack_require__(46);
var toLength = __webpack_require__(38);
var toInteger = __webpack_require__(39);
var advanceStringIndex = __webpack_require__(204);
var regExpExec = __webpack_require__(205);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(206)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 208 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(12);
var sameValue = __webpack_require__(71);
var regExpExec = __webpack_require__(205);

// @@search logic
__webpack_require__(206)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 209 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(135);
var anObject = __webpack_require__(12);
var speciesConstructor = __webpack_require__(210);
var advanceStringIndex = __webpack_require__(204);
var toLength = __webpack_require__(38);
var callRegExpExec = __webpack_require__(205);
var regexpExec = __webpack_require__(200);
var fails = __webpack_require__(7);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(206)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 210 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(12);
var aFunction = __webpack_require__(24);
var SPECIES = __webpack_require__(27)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 211 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(22);
var global = __webpack_require__(4);
var ctx = __webpack_require__(23);
var classof = __webpack_require__(75);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(13);
var aFunction = __webpack_require__(24);
var anInstance = __webpack_require__(212);
var forOf = __webpack_require__(213);
var speciesConstructor = __webpack_require__(210);
var task = (__webpack_require__(214).set);
var microtask = __webpack_require__(215)();
var newPromiseCapabilityModule = __webpack_require__(216);
var perform = __webpack_require__(217);
var userAgent = __webpack_require__(218);
var promiseResolve = __webpack_require__(219);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(27)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(220)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(26)($Promise, PROMISE);
__webpack_require__(194)(PROMISE);
Wrapper = __webpack_require__(9)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(167)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 212 */
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 213 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(23);
var call = __webpack_require__(163);
var isArrayIter = __webpack_require__(164);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(38);
var getIterFn = __webpack_require__(166);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 214 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(23);
var invoke = __webpack_require__(78);
var html = __webpack_require__(49);
var cel = __webpack_require__(15);
var global = __webpack_require__(4);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(35)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 215 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(4);
var macrotask = (__webpack_require__(214).set);
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(35)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 216 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(24);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 217 */
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 218 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(4);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 219 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(12);
var isObject = __webpack_require__(13);
var newPromiseCapability = __webpack_require__(216);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 220 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(18);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 221 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(222);
var validate = __webpack_require__(223);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(224)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 222 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var dP = (__webpack_require__(11).f);
var create = __webpack_require__(47);
var redefineAll = __webpack_require__(220);
var ctx = __webpack_require__(23);
var anInstance = __webpack_require__(212);
var forOf = __webpack_require__(213);
var $iterDefine = __webpack_require__(129);
var step = __webpack_require__(196);
var setSpecies = __webpack_require__(194);
var DESCRIPTORS = __webpack_require__(6);
var fastKey = (__webpack_require__(25).fastKey);
var validate = __webpack_require__(223);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 223 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(13);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 224 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(4);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(18);
var redefineAll = __webpack_require__(220);
var meta = __webpack_require__(25);
var forOf = __webpack_require__(213);
var anInstance = __webpack_require__(212);
var isObject = __webpack_require__(13);
var fails = __webpack_require__(7);
var $iterDetect = __webpack_require__(167);
var setToStringTag = __webpack_require__(26);
var inheritIfRequired = __webpack_require__(88);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 225 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(222);
var validate = __webpack_require__(223);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(224)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 226 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(4);
var each = __webpack_require__(174)(0);
var redefine = __webpack_require__(18);
var meta = __webpack_require__(25);
var assign = __webpack_require__(69);
var weak = __webpack_require__(227);
var isObject = __webpack_require__(13);
var validate = __webpack_require__(223);
var NATIVE_WEAK_MAP = __webpack_require__(223);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(224)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 227 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var redefineAll = __webpack_require__(220);
var getWeak = (__webpack_require__(25).getWeak);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(13);
var anInstance = __webpack_require__(212);
var forOf = __webpack_require__(213);
var createArrayMethod = __webpack_require__(174);
var $has = __webpack_require__(5);
var validate = __webpack_require__(223);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 228 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var weak = __webpack_require__(227);
var validate = __webpack_require__(223);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(224)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),
/* 229 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(8);
var $typed = __webpack_require__(230);
var buffer = __webpack_require__(231);
var anObject = __webpack_require__(12);
var toAbsoluteIndex = __webpack_require__(40);
var toLength = __webpack_require__(38);
var isObject = __webpack_require__(13);
var ArrayBuffer = (__webpack_require__(4).ArrayBuffer);
var speciesConstructor = __webpack_require__(210);
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(7)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(194)(ARRAY_BUFFER);


/***/ }),
/* 230 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(4);
var hide = __webpack_require__(10);
var uid = __webpack_require__(19);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 231 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(6);
var LIBRARY = __webpack_require__(22);
var $typed = __webpack_require__(230);
var hide = __webpack_require__(10);
var redefineAll = __webpack_require__(220);
var fails = __webpack_require__(7);
var anInstance = __webpack_require__(212);
var toInteger = __webpack_require__(39);
var toLength = __webpack_require__(38);
var toIndex = __webpack_require__(232);
var gOPN = (__webpack_require__(51).f);
var dP = (__webpack_require__(11).f);
var arrayFill = __webpack_require__(190);
var setToStringTag = __webpack_require__(26);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 232 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(39);
var toLength = __webpack_require__(38);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 233 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(8);
$export($export.G + $export.W + $export.F * !(__webpack_require__(230).ABV), {
  DataView: (__webpack_require__(231).DataView)
});


/***/ }),
/* 234 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(235)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 235 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (__webpack_require__(6)) {
  var LIBRARY = __webpack_require__(22);
  var global = __webpack_require__(4);
  var fails = __webpack_require__(7);
  var $export = __webpack_require__(8);
  var $typed = __webpack_require__(230);
  var $buffer = __webpack_require__(231);
  var ctx = __webpack_require__(23);
  var anInstance = __webpack_require__(212);
  var propertyDesc = __webpack_require__(17);
  var hide = __webpack_require__(10);
  var redefineAll = __webpack_require__(220);
  var toInteger = __webpack_require__(39);
  var toLength = __webpack_require__(38);
  var toIndex = __webpack_require__(232);
  var toAbsoluteIndex = __webpack_require__(40);
  var toPrimitive = __webpack_require__(16);
  var has = __webpack_require__(5);
  var classof = __webpack_require__(75);
  var isObject = __webpack_require__(13);
  var toObject = __webpack_require__(46);
  var isArrayIter = __webpack_require__(164);
  var create = __webpack_require__(47);
  var getPrototypeOf = __webpack_require__(59);
  var gOPN = (__webpack_require__(51).f);
  var getIterFn = __webpack_require__(166);
  var uid = __webpack_require__(19);
  var wks = __webpack_require__(27);
  var createArrayMethod = __webpack_require__(174);
  var createArrayIncludes = __webpack_require__(37);
  var speciesConstructor = __webpack_require__(210);
  var ArrayIterators = __webpack_require__(195);
  var Iterators = __webpack_require__(130);
  var $iterDetect = __webpack_require__(167);
  var setSpecies = __webpack_require__(194);
  var arrayFill = __webpack_require__(190);
  var arrayCopyWithin = __webpack_require__(187);
  var $DP = __webpack_require__(11);
  var $GOPD = __webpack_require__(52);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 236 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(235)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 237 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(235)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),
/* 238 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(235)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 239 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(235)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 240 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(235)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 241 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(235)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 242 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(235)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 243 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(235)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 244 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(8);
var aFunction = __webpack_require__(24);
var anObject = __webpack_require__(12);
var rApply = ((__webpack_require__(4).Reflect) || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(7)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),
/* 245 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(8);
var create = __webpack_require__(47);
var aFunction = __webpack_require__(24);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(13);
var fails = __webpack_require__(7);
var bind = __webpack_require__(77);
var rConstruct = ((__webpack_require__(4).Reflect) || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 246 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(11);
var $export = __webpack_require__(8);
var anObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(16);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(7)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 247 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(8);
var gOPD = (__webpack_require__(52).f);
var anObject = __webpack_require__(12);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),
/* 248 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(8);
var anObject = __webpack_require__(12);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(131)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),
/* 249 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(52);
var getPrototypeOf = __webpack_require__(59);
var has = __webpack_require__(5);
var $export = __webpack_require__(8);
var isObject = __webpack_require__(13);
var anObject = __webpack_require__(12);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 250 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(52);
var $export = __webpack_require__(8);
var anObject = __webpack_require__(12);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),
/* 251 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(8);
var getProto = __webpack_require__(59);
var anObject = __webpack_require__(12);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),
/* 252 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(8);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),
/* 253 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(8);
var anObject = __webpack_require__(12);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),
/* 254 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(8);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(255) });


/***/ }),
/* 255 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(51);
var gOPS = __webpack_require__(43);
var anObject = __webpack_require__(12);
var Reflect = (__webpack_require__(4).Reflect);
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 256 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(8);
var anObject = __webpack_require__(12);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 257 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(11);
var gOPD = __webpack_require__(52);
var getPrototypeOf = __webpack_require__(59);
var has = __webpack_require__(5);
var $export = __webpack_require__(8);
var createDesc = __webpack_require__(17);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(13);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 258 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(8);
var setProto = __webpack_require__(73);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 259 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(260);
module.exports = __webpack_require__(9).Array.includes;


/***/ }),
/* 260 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(8);
var $includes = __webpack_require__(37)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(188)('includes');


/***/ }),
/* 261 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(262);
module.exports = __webpack_require__(9).Array.flatMap;


/***/ }),
/* 262 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(8);
var flattenIntoArray = __webpack_require__(263);
var toObject = __webpack_require__(46);
var toLength = __webpack_require__(38);
var aFunction = __webpack_require__(24);
var arraySpeciesCreate = __webpack_require__(175);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(188)('flatMap');


/***/ }),
/* 263 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(45);
var isObject = __webpack_require__(13);
var toLength = __webpack_require__(38);
var ctx = __webpack_require__(23);
var IS_CONCAT_SPREADABLE = __webpack_require__(27)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),
/* 264 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(265);
module.exports = __webpack_require__(9).String.padStart;


/***/ }),
/* 265 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(8);
var $pad = __webpack_require__(266);
var userAgent = __webpack_require__(218);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),
/* 266 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(38);
var repeat = __webpack_require__(91);
var defined = __webpack_require__(36);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 267 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(268);
module.exports = __webpack_require__(9).String.padEnd;


/***/ }),
/* 268 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(8);
var $pad = __webpack_require__(266);
var userAgent = __webpack_require__(218);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),
/* 269 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(270);
module.exports = __webpack_require__(9).String.trimLeft;


/***/ }),
/* 270 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(83)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),
/* 271 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(272);
module.exports = __webpack_require__(9).String.trimRight;


/***/ }),
/* 272 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(83)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),
/* 273 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(274);
module.exports = (__webpack_require__(28).f)('asyncIterator');


/***/ }),
/* 274 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(29)('asyncIterator');


/***/ }),
/* 275 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(276);
module.exports = __webpack_require__(9).Object.getOwnPropertyDescriptors;


/***/ }),
/* 276 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(8);
var ownKeys = __webpack_require__(255);
var toIObject = __webpack_require__(33);
var gOPD = __webpack_require__(52);
var createProperty = __webpack_require__(165);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),
/* 277 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(278);
module.exports = __webpack_require__(9).Object.values;


/***/ }),
/* 278 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(8);
var $values = __webpack_require__(279)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 279 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(6);
var getKeys = __webpack_require__(31);
var toIObject = __webpack_require__(33);
var isEnum = (__webpack_require__(44).f);
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 280 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(281);
module.exports = __webpack_require__(9).Object.entries;


/***/ }),
/* 281 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(8);
var $entries = __webpack_require__(279)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 282 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(211);
__webpack_require__(283);
module.exports = __webpack_require__(9).Promise["finally"];


/***/ }),
/* 283 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(8);
var core = __webpack_require__(9);
var global = __webpack_require__(4);
var speciesConstructor = __webpack_require__(210);
var promiseResolve = __webpack_require__(219);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 284 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(285);
__webpack_require__(286);
__webpack_require__(287);
module.exports = __webpack_require__(9);


/***/ }),
/* 285 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(4);
var $export = __webpack_require__(8);
var userAgent = __webpack_require__(218);
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 286 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(8);
var $task = __webpack_require__(214);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 287 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $iterators = __webpack_require__(195);
var getKeys = __webpack_require__(31);
var redefine = __webpack_require__(18);
var global = __webpack_require__(4);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(130);
var wks = __webpack_require__(27);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 288 */
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),
/* 289 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(290);
module.exports = __webpack_require__(293).global;


/***/ }),
/* 290 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(291);

$export($export.G, { global: __webpack_require__(292) });


/***/ }),
/* 291 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(292);
var core = __webpack_require__(293);
var ctx = __webpack_require__(294);
var hide = __webpack_require__(296);
var has = __webpack_require__(306);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 292 */
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 293 */
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 294 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(295);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 295 */
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 296 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(297);
var createDesc = __webpack_require__(305);
module.exports = __webpack_require__(301) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 297 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(298);
var IE8_DOM_DEFINE = __webpack_require__(300);
var toPrimitive = __webpack_require__(304);
var dP = Object.defineProperty;

exports.f = __webpack_require__(301) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 298 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(299);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 299 */
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 300 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(301) && !__webpack_require__(302)(function () {
  return Object.defineProperty(__webpack_require__(303)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 301 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(302)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 302 */
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 303 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(299);
var document = (__webpack_require__(292).document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 304 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(299);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 305 */
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 306 */
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 307 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(308);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(319);
/* harmony import */ var _modules_headerFooterComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(329);
/* harmony import */ var _modules_sliderComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(336);
/* harmony import */ var _modules_menuComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(338);
/* harmony import */ var _modules_tabsComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(340);
/* harmony import */ var _modules_modalComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(365);
/* harmony import */ var _favorites__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(366);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(344);
/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(370);














var slider = (0,_modules_sliderComponent__WEBPACK_IMPORTED_MODULE_4__.createComponent)(_favorites__WEBPACK_IMPORTED_MODULE_8__.favoritesJSON);
var sectionFavorite = document.getElementById("favcoffee");
sectionFavorite.append(slider);
var tabs = (0,_modules_tabsComponent__WEBPACK_IMPORTED_MODULE_6__.createTabsComponent)();
var sectionMenu = document.getElementById("menu");
var menu = (0,_modules_menuComponent__WEBPACK_IMPORTED_MODULE_5__.createMenuComponent)(_modules_tabsComponent__WEBPACK_IMPORTED_MODULE_6__.cardsToShow);
sectionMenu.append(tabs);
sectionMenu.append(menu);
var burgerMenu = (0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_10__.createBurgerMenuComponent)();
var header = document.getElementById("header");
header.append(burgerMenu);
var burgerBtn = document.getElementsByClassName("header__burger");
burgerBtn[0].addEventListener("click", _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_10__.burgerBtnClickHandler);

/***/ }),
/* 308 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(310), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(311), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(312), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(313), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(314), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(315), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(316), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(317), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(318), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0 minimum-scale=1.0\"\n    />\n    <title>Coffee House</title>\n    <link\n      rel=\"icon\"\n      type=\"image/x-icon\"\n      href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n    />\n  </head>\n  <body class=\"container flex flex-fd-column\">\n    <!-- Header Section -->\n    <header id=\"header\" class=\"header\">\n      <h1 class=\"hidden\">Coffee House</h1>\n      <nav class=\"header__nav flex flex-jc-space-between flex-ai-center\">\n        <a\n          href=\"javascript:void(0);\"\n          onclick=\"location.reload();\"\n          class=\"header__logo\"\n        >\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Logo Coffee House\" />\n        </a>\n        <ul\n          class=\"header__links hide-for-mobile flex flex-jc-center flex-ai-center flex-as-stretch\"\n        >\n          <li>\n            <a href=\"#favcoffee\" onclick=\"goToHomePage()\">Favorite coffee</a>\n          </li>\n          <li><a href=\"#about\" onclick=\"goToHomePage()\">About</a></li>\n          <li><a href=\"#mobile-app\" onclick=\"goToHomePage()\">Mobile app</a></li>\n          <li><a href=\"#footer\" onclick=\"goToHomePage()\">Contact us</a></li>\n        </ul>\n        <button\n          id=\"menu-btn\"\n          onclick=\"toggleSections()\"\n          class=\"header__menu hide-for-mobile link-with-icon\"\n        >\n          Menu<img\n            class=\"icon\"\n            src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n            alt=\"Coffee Cup Icon\"\n          />\n        </button>\n        <div class=\"header__burger hide-for-desktop\">\n          <a href=\"#\" id=\"burger-link\">\n            <span></span>\n            <span></span>\n          </a>\n        </div>\n      </nav>\n    </header>\n    <!-- Main Content Section -->\n    <main id=\"main\">\n      <!-- Start-screen Section -->\n      <section class=\"section-visible\" id=\"start-screen\">\n        <div class=\"start-screen flex\">\n          <video class=\"start-screen_background\" autoplay muted loop>\n            <source src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" type=\"video/mp4\" />\n            Your browser does not support the video tag.\n          </video>\n          <div class=\"start-screen_content\">\n            <h2 class=\"start-screen_title\">\n              <span class=\"highlight\">Enjoy</span> premium coffee at our\n              charming cafe\n            </h2>\n            <p class=\"start-screen_subtitle\">\n              With its inviting atmosphere and delicious coffee options, the\n              Coffee House Resource is a popular destination for coffee lovers\n              and those seeking a warm and inviting space to enjoy their\n              favorite beverage.\n            </p>\n            <a href=\"#\" onclick=\"toggleSections()\" class=\"btn-primary\"\n              >Menu<img\n                class=\"start-screen_icon\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n                alt=\"Coffee Cup Icon\"\n            /></a>\n          </div>\n        </div>\n      </section>\n      <!-- Favorite coffee Section -->\n      <section class=\"section-visible\" id=\"favcoffee\">\n        <h2 class=\"title favcoffee_title\">\n          Choose your <span class=\"highlight\">favorite</span> coffee\n        </h2>\n      </section>\n      <!-- About Section -->\n      <section class=\"section-visible\" id=\"about\">\n        <h2 class=\"title about_title\">\n          Resource is\n          <span class=\"highlight\">the perfect and cozy place</span> where you\n          can enjoy a variety of hot beverages, relax, catch up with friends, or\n          get some work done.\n        </h2>\n        <div class=\"about_fotos_container flex\">\n          <div class=\"about-item_column\">\n            <div class=\"about-item_image\" id=\"first-image\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"First Image\" />\n            </div>\n            <div class=\"about-item_image\" id=\"second-image\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Second Image\" />\n            </div>\n          </div>\n          <div class=\"about-item_column\">\n            <div class=\"about-item_image\" id=\"third-image\">\n              <img\n                src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\n                alt=\"Third Image\"\n                id=\"image3\"\n              />\n            </div>\n            <div class=\"about-item_image\" id=\"fourth-image\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Fourth Image\" />\n            </div>\n          </div>\n        </div>\n      </section>\n      <!-- Mobile App Section -->\n      <section class=\"section-visible\" id=\"mobile-app\">\n        <div class=\"mobile-app_container flex flex-jc-center flex-ai-center\">\n          <div class=\"mobile-app_offer flex flex-fd-column flex-jc-center\">\n            <h2 class=\"title mobile-app_title\">\n              <span class=\"highlight\">Download</span> our apps to start ordering\n            </h2>\n            <p class=\"mobile-app_subtitle\">\n              Download the Resource app today and experience the comfort of\n              ordering your favorite coffee from wherever you are\n            </p>\n            <div class=\"mobile-app_buttons flex\">\n              <a href=\"#\" class=\"btn-app-store flex flex-ai-center\"\n                ><svg\n                  class=\"btn_icon\"\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  viewBox=\"0 0 36 36\"\n                >\n                  <path\n                    d=\"M26.7063 18.6307C26.6694 14.6324 30.0641 12.6872 30.2193 12.5966C28.2967 9.86366 25.3169 9.49026 24.2697 9.46048C21.767 9.20369 19.3393 10.9206 18.0644 10.9206C16.764 10.9206 14.8008 9.48529 12.6848 9.52747C9.96196 9.56841 7.41468 11.1055 6.01762 13.4923C3.13444 18.359 5.28474 25.5108 8.04705 29.4446C9.42884 31.3712 11.0435 33.5223 13.1569 33.4466C15.2245 33.3635 15.9968 32.1614 18.4919 32.1614C20.9641 32.1614 21.6893 33.4466 23.8447 33.3983C26.0637 33.3635 27.4608 31.463 28.7942 29.519C30.3911 27.3108 31.0323 25.1362 31.0578 25.0245C31.0056 25.0071 26.7483 23.4229 26.7063 18.6307Z\"\n                  />\n                  <path\n                    d=\"M22.6347 6.87268C23.7468 5.51675 24.5076 3.67205 24.2964 1.80005C22.6869 1.86952 20.674 2.88554 19.5149 4.21169C18.4893 5.38029 17.5732 7.29571 17.8099 9.097C19.6179 9.2285 21.4743 8.20752 22.6347 6.87268Z\"\n                  />\n                </svg>\n                <div class=\"btn-app-store_text\">\n                  <span class=\"small-text\">Available on the</span><br />App\n                  Store\n                </div></a\n              >\n              <a href=\"#\" class=\"btn-google-play flex flex-ai-center\"\n                ><svg\n                  class=\"btn_icon\"\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  viewBox=\"0 0 36 36\"\n                >\n                  <path\n                    d=\"M3.7558 3.20309C3.39335 3.57302 3.18359 4.14896 3.18359 4.89483V31.4995C3.18359 32.2454 3.39335 32.8213 3.7558 33.1913L3.84525 33.2725L19.1359 18.3701V18.0182L3.84525 3.11587L3.7558 3.20309Z\"\n                  />\n                  <path\n                    d=\"M26.0776 23.34L20.9863 18.3701V18.0182L26.0837 13.0482L26.1979 13.1129L32.2345 16.4618C33.9573 17.4122 33.9573 18.9761 32.2345 19.9325L26.1979 23.2754L26.0776 23.34Z\"\n                  />\n                  <path\n                    d=\"M25.2733 24.2008L20.0617 19.1196L4.68164 34.1167C5.25384 34.7031 6.18695 34.7738 7.24807 34.1873L25.2733 24.2008Z\"\n                  />\n                  <path\n                    d=\"M25.2733 12.1876L7.24807 2.20103C6.18695 1.62058 5.25384 1.69125 4.68164 2.27772L20.0617 17.2688L25.2733 12.1876Z\"\n                  />\n                </svg>\n                <div class=\"btn-app-store_text\">\n                  <span class=\"small-text\">Available on </span><br />Google Play\n                </div></a\n              >\n            </div>\n          </div>\n          <div class=\"mobile-app_screens\">\n            <img\n              src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\n              alt=\"Mobile Screens\"\n            />\n          </div>\n        </div>\n      </section>\n      <!-- Menu Section -->\n      <section class=\"section-hidden\" id=\"menu\">\n        <h2 class=\"title menu_title\">\n          Behind each of our cups hides an\n          <span class=\"highlight\">amazing surprise</span>\n        </h2>\n      </section>\n    </main>\n    <!-- Footer Section -->\n    <footer-component></footer-component>\n    <" + "script>\n      function toggleSections() {\n        const sections = document.getElementsByTagName(\"section\");\n        const menuButton = document.getElementById(\"menu-btn\");\n\n        for (let i = 0; i < sections.length; i++) {\n          sections[i].classList.toggle(\"section-hidden\");\n          sections[i].classList.toggle(\"section-visible\");\n        }\n        menuButton.style[\"pointer-events\"] = \"none\";\n        menuButton.style[\"border-bottom\"] = \"2px solid #403f3d\";\n      }\n\n      function goToHomePage() {\n        const menuSegment = document.getElementById(\"menu\");\n        const isHomePage = menuSegment.classList.contains(\"section-hidden\");\n        const menuButton = document.getElementById(\"menu-btn\");\n\n        if (!isHomePage) {\n          toggleSections();\n          menuButton.style[\"pointer-events\"] = \"auto\";\n          menuButton.style[\"border-bottom\"] = \"2px solid transparent\";\n        }\n      }\n    <" + "/script>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),
/* 309 */
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),
/* 310 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icons8-kaffee-16.png";

/***/ }),
/* 311 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/logo.svg";

/***/ }),
/* 312 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/coffee-cup.svg";

/***/ }),
/* 313 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "videos/video-coffee.mp4";

/***/ }),
/* 314 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/about-1.png";

/***/ }),
/* 315 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/about-2.png";

/***/ }),
/* 316 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/about-3.png";

/***/ }),
/* 317 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/about-4.png";

/***/ }),
/* 318 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/mobile-screens.png";

/***/ }),
/* 319 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(320);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(322);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(323);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(324);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(325);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(326);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 320 */
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 321 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 322 */
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 323 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 324 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 325 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 326 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(327);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(328);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden],
template {
  display: none;
}

html {
  background: #e1d4c9;
  color: #403f3d;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

html,
button,
input,
select,
textarea {
  font-family: "Inter", sans-serif;
}

body {
  margin: 0;
}

a {
  background: transparent;
}
a:focus {
  outline: thin dotted;
}
a:hover, a:active {
  outline: 0;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

h2 {
  font-size: 1.5em;
  margin: 0.83em 0;
}

h3 {
  font-size: 1.17em;
  margin: 1em 0;
}

h4 {
  font-size: 1em;
  margin: 1.33em 0;
}

h5 {
  font-size: 0.83em;
  margin: 1.67em 0;
}

h6 {
  font-size: 0.75em;
  margin: 2.33em 0;
}

abbr[title] {
  border-bottom: 1px dotted;
}

b,
strong {
  font-weight: bold;
}

dfn {
  font-style: italic;
}

mark {
  background: #ff0;
  color: #000;
}

code,
kbd,
pre,
samp {
  font-family: monospace, serif;
  font-size: 1em;
}

pre {
  white-space: pre;
  white-space: pre-wrap;
  word-wrap: break-word;
}

q {
  quotes: "“" "”" "‘" "’";
}

q:before, q:after {
  content: "";
  content: none;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

img {
  border: 0;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 0;
}

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  border: 0;
  padding: 0;
  white-space: normal;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;
}

button,
input {
  line-height: normal;
}

button,
select {
  text-transform: none;
}

button,
html input[type=button],
input[type=reset],
input[type=submit] {
  -webkit-appearance: button;
  cursor: pointer;
}

button[disabled],
input[disabled] {
  cursor: default;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto;
  vertical-align: top;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input[type=search] {
  -webkit-appearance: textfield;
  box-sizing: content-box;
}
input[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}
input[type=checkbox], input[type=radio] {
  box-sizing: border-box;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}

.hidden {
  position: absolute;
  left: -99999em;
  width: 1px;
  height: 1px;
}

@media (max-width: 769px) {
  .hide-for-mobile {
    display: none !important;
  }
}

@media (min-width: 769px) {
  .hide-for-desktop {
    display: none !important;
  }
}

@media (max-width: 576px) {
  .hide-for-phones {
    display: none !important;
  }
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 0 40px;
  width: 100%;
}

h2 {
  margin: 0;
}

.section-visible {
  display: block;
  padding: 0 40px 100px 40px;
}
@media (max-width: 576px) {
  .section-visible {
    padding: 0 16px 100px 16px;
  }
}

.section-hidden {
  display: none;
}

li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.flex {
  display: flex;
}
.flex-fd-row {
  flex-direction: row;
}
.flex-fd-column {
  flex-direction: column;
}
.flex-fw-wrap {
  flex-wrap: wrap;
}
.flex-jc-center {
  justify-content: center;
}
.flex-jc-start {
  justify-content: flex-start;
}
.flex-jc-space-between {
  justify-content: space-between;
}
.flex-ai-center {
  align-items: center;
}
.flex-as-stretch {
  align-self: stretch;
}

.highlight {
  color: #b0907a;
  font-style: italic;
}

.small-text {
  font-size: 0.625rem;
  font-weight: 600;
  line-height: 140%;
}

.title {
  font-size: 3.75rem;
  font-weight: 600;
  line-height: 125%;
}
@media (max-width: 576px) {
  .title {
    font-size: 2rem;
  }
}

.about_title {
  margin-top: 0;
  margin-bottom: 0;
}
@media (max-width: 992px) {
  .about_title {
    margin-bottom: 40px;
  }
}

.about_fotos_container {
  gap: 40px;
}
@media (max-width: 992px) {
  .about_fotos_container {
    flex-direction: column;
  }
}
.about_fotos_container .about-item_column {
  flex: 1;
  box-sizing: border-box;
}
.about_fotos_container .about-item_column .about-item_image {
  border-radius: 20px;
  margin-top: 38px;
  overflow: hidden;
}
@media (max-width: 992px) {
  .about_fotos_container .about-item_column .about-item_image {
    height: 590px;
    margin-top: 0;
  }
}
.about_fotos_container .about-item_column .about-item_image img {
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  transform: scale(1.2);
  transition: transform 0.6s ease;
}
@media (max-width: 576px) {
  .about_fotos_container .about-item_column .about-item_image img {
    width: -moz-max-content;
    width: max-content;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
.about_fotos_container .about-item_column .about-item_image:hover img {
  transform: scale(1);
  transition: transform 0.6s ease;
}

#image3 {
  height: 430px;
}

@media (max-width: 992px) {
  #second-image,
  #third-image {
    display: none;
  }
}

.header {
  padding: 0 40px 20px 40px;
}
@media (max-width: 576px) {
  .header {
    padding: 0 16px 20px 16px;
  }
}
.header__nav a {
  position: relative;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  line-height: 50%;
  color: #403f3d;
}
.header__links {
  padding: 0 0;
  gap: 40px;
  margin-top: 12px;
  margin-left: 8px;
}
.header__links a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #403f3d;
  transform: scaleX(0);
  transform-origin: 50% 50%;
  transition: transform 350ms ease;
}
.header__links a:hover::after {
  transform: scaleX(1);
  transform-origin: 50% 50%;
}
.header__menu {
  padding-right: 30px;
  margin-bottom: 4px;
}

.footer {
  margin: 0 40px;
  padding: 100px;
  border-radius: 40px;
  background: #665f55;
  color: #e1d4c9;
  gap: 100px;
}
@media (max-width: 992px) {
  .footer {
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 60px;
    gap: 100px;
  }
}
@media (max-width: 576px) {
  .footer {
    margin: 0 16px;
    padding: 60px 16px;
    gap: 35px;
  }
}
.footer .footer__title {
  margin-bottom: 32px;
  max-width: 530px;
}
@media (max-width: 992px) {
  .footer .footer__title {
    margin-bottom: 40px;
  }
}
.footer .footer-social {
  flex-basis: 50% !important;
}
.footer .footer-icons__container {
  gap: 12px;
}
.footer .footer-contacts__title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 125%;
}
.footer .footer__list {
  padding: 0;
}
.footer .footer__item {
  position: relative;
  padding: 20px 0 0;
  border-bottom: 2px solid transparent;
}
.footer .footer__item img {
  padding-right: 4px;
}
.footer .footer__item a {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #e1d4c9;
}
.footer .footer__item a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 70%;
  height: 2px;
  background: #e1d4c9;
  transform: scaleX(0);
  transform-origin: 50% 50%;
  transition: transform 450ms ease;
}
.footer .footer__item a:hover::after {
  transform: scaleX(1);
  transform-origin: 50% 50%;
}

.start-screen {
  position: relative;
}
.start-screen_background {
  position: absolute;
  width: 100%;
  height: 644px;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 40px;
  z-index: -1;
}
@media (max-width: 769px) {
  .start-screen_background {
    height: 100%;
  }
}
.start-screen_content {
  padding: 100px 100px;
  max-width: 530px;
  color: #e1d4c9;
}
@media (max-width: 1200px) {
  .start-screen_content {
    padding: 100px 60px;
  }
}
@media (max-width: 576px) {
  .start-screen_content {
    padding: 60px 16px;
  }
}
.start-screen_content .start-screen_title {
  font-size: 4.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 106%;
}
@media (max-width: 576px) {
  .start-screen_content .start-screen_title {
    font-size: 2.625rem;
    line-height: 115%;
  }
}
.start-screen_content .start-screen_subtitle {
  font-weight: 400;
  line-height: 150%;
  padding: 23px 0 44px;
}

#favcoffee {
  position: relative;
  height: 50rem;
}
@media (max-width: 992px) {
  #favcoffee {
    height: 56rem;
  }
}
@media (max-width: 576px) {
  #favcoffee {
    height: 40rem;
  }
}

.favcoffee_title {
  text-align: center;
}

.mobile-app_container {
  gap: 100px;
}
@media (max-width: 1200px) {
  .mobile-app_container {
    flex-direction: column;
    gap: 90px;
  }
}
@media (max-width: 576px) {
  .mobile-app_container {
    gap: 30px;
  }
}
.mobile-app_container .mobile-app_offer {
  gap: 40px;
  margin-bottom: 12px;
}
.mobile-app_container .mobile-app_offer .mobile-app_title {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0px;
}
.mobile-app_container .mobile-app_offer .mobile-app_subtitle {
  font-weight: 400;
  line-height: 150%;
  padding-top: 0px;
  margin: 0;
}
.mobile-app_container .mobile-app_offer .mobile-app_buttons {
  gap: 20px;
  padding-top: 0px;
}
@media (max-width: 576px) {
  .mobile-app_container .mobile-app_offer .mobile-app_buttons {
    flex-direction: column;
  }
}
@media (max-width: 576px) {
  .mobile-app_container .mobile-app_screens img {
    width: 348px;
  }
}

.menu_card-container {
  gap: 37px;
}
@media (max-width: 769px) {
  .menu_card-container {
    padding-bottom: 40px;
  }
}

.menu_title {
  margin: 0 290px;
  text-align: center;
}
@media (max-width: 1200px) {
  .menu_title {
    margin: 0;
  }
}

.menu_tabs {
  gap: 16px;
  padding: 40px 0;
}

.menu_card {
  width: 310px;
  height: 467px;
  flex-shrink: 0;
  padding-bottom: 40px;
  border-radius: 40px;
  border: 1px solid #c1b6ad;
}
.menu_card_img {
  border-radius: 40px;
  overflow: hidden;
}
.menu_card img {
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  transform: scale(1.1);
  transition: transform 0.6s ease;
}
.menu_card:hover img {
  transform: scale(1);
  transition: transform 0.6s ease;
}
.menu_card .menu_card_content {
  position: relative;
  padding: 20px;
}
.menu_card .menu_card_content .menu_card_title {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 110%;
  margin: 0;
}
.menu_card .menu_card_content .menu_card_description {
  line-height: 150%;
  margin-top: 12px;
  margin-bottom: 0;
}
.menu_card .menu_card_content .menu_card_price {
  position: absolute;
  top: 120px;
  left: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 125%;
}

@media (max-width: 992px) {
  #coffee5,
  #coffee6,
  #coffee7,
  #coffee8 {
    display: none;
  }
}

.btn-primary {
  cursor: pointer;
  position: relative;
  width: 200px;
  padding: 22px 78px;
  border-radius: 100px;
  background: #e1d4c9;
  color: #403f3d;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-weight: 600;
  line-height: 150%;
}
.btn-primary .start-screen_icon {
  position: absolute;
  right: 26%;
  top: 50%;
  transform: translateY(-50%);
  display: none;
}
@media (max-width: 769px) {
  .btn-primary .start-screen_icon {
    display: block;
  }
}
.btn-primary:hover .start-screen_icon {
  display: block;
}

.btn__arrow, .btn-icon-light, .btn__refresh {
  cursor: pointer;
  border: 1px solid #665f55;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
@media (hover: hover) {
  .btn__arrow:hover, .btn-icon-light:hover, .btn__refresh:hover {
    background-color: #665f55;
    color: #e1d4c9;
    transition: background-color 0.5s ease-in-out;
  }
}

.btn__refresh {
  font-size: 1.4rem;
  font-weight: 200;
  margin: 0 auto;
}

.btn-app-store,
.btn-google-play {
  cursor: pointer;
  width: 160px;
  padding: 8px 19px;
  align-items: center;
  border: 1px solid #665f55;
  color: #403f3d;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-weight: 600;
  line-height: 140%;
  border-radius: 100px;
}
.btn-app-store .btn_icon,
.btn-google-play .btn_icon {
  width: 36px;
  height: 36px;
  margin-right: 8px;
  fill: #403f3d;
}
@media (hover: hover) {
  .btn-app-store:hover,
  .btn-google-play:hover {
    background-color: #665f55;
    color: #e1d4c9;
    transition: background-color 0.6s ease-in-out;
  }
  .btn-app-store:hover .btn_icon,
  .btn-google-play:hover .btn_icon {
    fill: #e1d4c9;
  }
}

.btn-icon-light {
  cursor: pointer;
  border-color: #c1b6ad;
}
@media (hover: hover) {
  .btn-icon-light:hover {
    background-color: #e1d4c9;
    color: #403f3d;
    transition: background-color 0.5s ease-in-out;
  }
  .btn-icon-light:hover img {
    filter: invert(1);
  }
}

.tab-item {
  cursor: pointer;
  display: inline-flex;
  flex-direction: row-reverse;
  padding: 8px 16px 8px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  border: 1px solid #c1b6ad;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-weight: 600;
  line-height: 150%;
  color: #403f3d;
  background-color: #e1d4c9;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.tab-item img {
  border-radius: 100px;
  border: 1px solid #c1b6ad;
  padding: 3px;
  background-color: #c1b6ad;
}
.tab-item:hover {
  background-color: #665f55;
  color: #e1d4c9;
  transition: background-color 0.5s ease-in-out;
}
.tab-item-active {
  background-color: #665f55;
  color: #e1d4c9;
}
.tab-item-inactive {
  background-color: #fff;
}

.link-with-icon {
  cursor: pointer;
  position: relative;
  display: inline-block;
  background-color: #e1d4c9;
  border: 1px solid transparent;
  font-weight: 600;
  line-height: 150%;
  color: #403f3d;
}
.link-with-icon::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #403f3d;
  transform: scaleX(0);
  transform-origin: 50% 50%;
  transition: transform 350ms ease;
}
.link-with-icon:hover::after {
  transform: scaleX(1);
  transform-origin: 50% 50%;
}

.icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.header__burger {
  display: flex;
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid #665f55;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
}
.header__burger span {
  display: block;
  position: absolute;
  transition: transform 0.3s ease;
  width: 16px;
  height: 2px;
  background-color: #403f3d;
  transition: transform 2s ease-in-out, top 2s ease-in-out, left 2s ease-in-out;
}
.header__burger span:first-child {
  top: 4px;
  left: -8px;
}
.header__burger span:last-child {
  bottom: 4px;
  left: -8px;
}

.carousel {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  text-align: center;
  transform: translate(-50%, -50%);
}
.carousel .slides-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slide-container {
  display: none;
  position: relative;
  margin: 0 auto;
  width: 480px;
  overflow: hidden;
  animation: 1s ease-in-out;
}
.slide-container img {
  max-width: 480px;
}
@media (max-width: 576px) {
  .slide-container img {
    margin: 0 auto;
    width: 348px;
  }
}
.slide-container .slide-content h3 {
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  padding-top: 61px;
  margin: 0px;
}
.slide-container .slide-content .slide-description {
  text-align: center;
  padding-top: 15px;
  line-height: 150%;
  margin: 0;
}
.slide-container .slide-content .slide-price {
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  padding-top: 17px;
  margin: 0px;
}
.slide-container.active, .slide-container.next {
  display: block;
}
.slide-container.next {
  position: absolute;
  top: 0;
  width: 100%;
}

.horizontal-line {
  width: 40px;
  height: 4px;
  background-color: #c1b6ad;
  margin: 39px 6px 0 6px;
}

.horizontal-line-active {
  background-color: #403f3d;
  animation: anim 7s ease 0s 1 normal forwards;
}

@keyframes anim {
  0% {
    transform: scaleX(0);
    transform-origin: 0% 0%;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 0% 0%;
  }
}
.animate_to-left {
  animation-name: scrollToLeft;
}

.animate_to-right {
  animation-name: scrollToRight;
  animation-direction: reverse;
}

.animate_from-left {
  animation-name: scrollToLeft;
  animation-direction: reverse;
}

.animate_from-right {
  animation-name: scrollToRight;
}

@keyframes scrollToLeft {
  from {
    left: 0;
  }
  to {
    left: -100%;
  }
}
@keyframes scrollToRight {
  from {
    left: 100%;
  }
  to {
    left: 0;
  }
}
.mobile__nav {
  position: fixed;
  margin-top: 20px;
  padding: 60px 0px;
  top: 78px;
  left: 100%;
  width: 100%;
  min-height: 100vh;
  display: block;
  z-index: 5;
  background-color: #e1d4c9;
  transition: 2s;
}
.mobile__nav ul {
  margin: 0;
  padding: 0;
  gap: 60px;
}
.mobile__nav ul a {
  position: relative;
  margin-top: 40px;
  width: 140px;
}
.mobile__nav ul a img {
  position: absolute;
  top: -2px;
  width: 30%;
  padding-left: 14px;
}
.mobile__nav a {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #403f3d;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
}
.mobile__nav a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #403f3d;
  transform: scaleX(0);
  transform-origin: 50% 50%;
  transition: transform 350ms ease;
}
@media (hover: hover) {
  .mobile__nav a:hover::after {
    transform: scaleX(1);
    transform-origin: 50% 50%;
  }
}
.mobile__nav-active {
  left: 8px;
}
.mobile__btn-active span:first-child {
  transform: translateY(-5px) rotate(45deg);
  transition: transform 2s ease-in-out, top 2s ease-in-out, left 2s ease-in-out;
}
.mobile__btn-active span:last-child {
  transform: translateY(5px) rotate(-45deg);
  transition: transform 2s ease-in-out, top 2s ease-in-out, left 2s ease-in-out;
}

.modal {
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.75);
}
.modal-container {
  position: fixed;
  margin: 0 auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 48rem;
  padding: 1rem;
  border-radius: 2.5rem;
  background-color: #e1d4c9;
}
.modal-image {
  width: 19.35rem;
  flex-shrink: 0;
  border-radius: 2.5rem;
}
.modal-content {
  padding-left: 1.25rem;
  align-items: flex-start;
}
.modal-content p {
  margin-top: 0;
}
.modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 125%;
  margin: 0 0 0.7rem 0;
}
.modal-description {
  line-height: 150%;
  margin-bottom: 1.35rem;
}
.modal-label {
  margin-bottom: 0.6rem;
}
.modal-label-total {
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  margin-top: 0;
  margin-bottom: 0.9rem;
}
.modal-total-wrapper {
  width: 100%;
}
.modal-line {
  border-top: 1px solid #c1b6ad;
  padding: 0.75rem 0;
}
.modal-info-text {
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.modal-icon {
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  padding: 3px;
  justify-content: center;
  align-items: center;
  background-color: #c1b6ad;
  border: 1px solid #c1b6ad;
}
.modal-buttons-group {
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}
.modal-buttons-group button {
  padding-right: 0.8rem;
}
.modal-info-icon {
  padding-right: 0.5rem;
}
.modal-close-button {
  width: 100%;
  padding: 10px 78px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid #665f55;
  background-color: #e1d4c9;
  margin-top: 0.8rem;
}
@media (hover: hover) {
  .modal-close-button:hover {
    background-color: #665f55;
    color: #e1d4c9;
    transition: background-color 0.5s ease-in-out;
  }
}`, "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/style/base/_normalize.scss","webpack://./src/style/abstracts/_variables.scss","webpack://./src/style/base/_helpers.scss","webpack://./src/style/abstracts/_mixins.scss","webpack://./src/style/layout/_about.scss","webpack://./src/style/layout/_header.scss","webpack://./src/style/layout/_footer.scss","webpack://./src/style/layout/_startscreen.scss","webpack://./src/style/layout/_favcoffee.scss","webpack://./src/style/layout/_mobileapp.scss","webpack://./src/style/layout/_menu.scss","webpack://./src/style/components/_buttons.scss","webpack://./src/style/components/_slider.scss","webpack://./src/style/components/_burgermenu.scss","webpack://./src/style/components/_modal.scss"],"names":[],"mappings":"AAAA,gBAAgB;AC0ChB;;;;;;;;;;;EAWE,cAAA;ADvCF;;AC4CA;;;EAGE,qBAAA;ADzCF;;ACmDA;EACE,aAAA;EACA,SAAA;ADhDF;;ACwDA;;EAEE,aAAA;ADrDF;;ACiEA;EAIE,mBCxFc;EDyFd,cClGgB;EDmGhB,8BAAA;EACA,0BAAA;ADjEF;;ACsEA;;;;;EAKE,gCAjGuB;AD8BzB;;ACwEA;EACE,SAAA;ADrEF;;ACiFA;EAGE,uBAAA;ADhFF;ACoFE;EACE,oBAAA;ADlFJ;ACuFE;EAEE,UAAA;ADtFJ;;ACkGE;EACE,cA3IW;EA4IX,gBArIQ;ADsCZ;;ACkGE;EACE,gBA/IW;EAgJX,gBAzIQ;AD0CZ;;ACkGE;EACE,iBAnJW;EAoJX,aA7IQ;AD8CZ;;ACkGE;EACE,cAvJW;EAwJX,gBAjJQ;ADkDZ;;ACkGE;EACE,iBA3JW;EA4JX,gBArJQ;ADsDZ;;ACkGE;EACE,iBA/JW;EAgKX,gBAzJQ;AD0DZ;;ACqGA;EACE,yBAAA;ADlGF;;ACuGA;;EAEE,iBAAA;ADpGF;;AC+GA;EACE,kBAAA;AD5GF;;ACiHA;EACE,gBAAA;EACA,WAAA;AD9GF;;AC4HA;;;;EAIE,6BAAA;EAIA,cAAA;AD5HF;;ACiIA;EACE,gBAAA;EACA,qBAAA;EACA,qBAAA;AD9HF;;ACmIA;EACE,uBAAA;ADhIF;;AC+IE;EAEE,WAAA;EACA,aAAA;AD7IJ;;ACmJA;EACE,cAAA;ADhJF;;ACsJA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;ADnJF;;ACsJA;EACE,WAAA;ADnJF;;ACsJA;EACE,eAAA;ADnJF;;ACsMA;EACE,SAAA;ADnMF;;AC2MA;EACE,gBAAA;ADxMF;;ACiNA;EACE,SAAA;AD9MF;;AC8NA;EACE,yBAAA;EACA,aAAA;EACA,8BAAA;AD3NF;;ACmOA;EACE,SAAA;EACA,UAAA;EACA,mBAAA;ADhOF;;AC2OA;;;;EAIE,oBAAA;EACA,eAAA;EACA,SAAA;EACA,wBAAA;ADxOF;;ACgPA;;EAEE,mBAAA;AD7OF;;ACqPA;;EAEE,oBAAA;ADlPF;;AC6PA;;;;EAIE,0BAAA;EACA,eAAA;AD1PF;;ACkQA;;EAEE,eAAA;AD/PF;;ACuQE;;EACE,SAAA;EACA,UAAA;ADnQJ;;AC0QA;EACE,cAAA;EACA,mBAAA;ADvQF;;ACgRA;EACE,yBAAA;EACA,iBAAA;AD7QF;;ACmRE;EACE,6BAAA;EAGA,uBAAA;ADhRJ;ACoRI;EAEE,wBAAA;ADnRN;AC2RE;EAEE,sBAAA;EACA,UAAA;AD1RJ;;AG7OA;EACE,uBAAA;AHgPF;;AG7OA;EACE,kBAAA;AHgPF;;AG7OA;EACE,kBAAA;EACA,cAAA;EACA,UAAA;EACA,WAAA;AHgPF;;AIlOE;EDXF;IAEI,wBAAA;EHgPF;AACF;;AI9OE;EDCF;IAEI,wBAAA;EHgPF;AACF;;AI9OE;EDCF;IAEI,wBAAA;EHgPF;AACF;;AG5OA;EACE,iBDRU;ECSV,cAAA;EACA,oBAAA;EACA,WAAA;AH+OF;;AG5OA;EACE,SAAA;AH+OF;;AG5OA;EACE,cAAA;EACA,0BAAA;AH+OF;AIpQE;EDmBF;IAII,0BAAA;EHiPF;AACF;;AG9OA;EACE,aAAA;AHiPF;;AG9OA;EACE,qBAAA;EACA,SAAA;EACA,UAAA;AHiPF;;AG9OA;EACE,aAAA;AHiPF;AG/OE;EACE,mBAAA;AHiPJ;AG/OE;EACE,sBAAA;AHiPJ;AG/OE;EACE,eAAA;AHiPJ;AG/OE;EACE,uBAAA;AHiPJ;AG/OE;EACE,2BAAA;AHiPJ;AG/OE;EACE,8BAAA;AHiPJ;AG/OE;EACE,mBAAA;AHiPJ;AG/OE;EACE,mBAAA;AHiPJ;;AG7OA;EACE,cDrFkB;ECsFlB,kBAAA;AHgPF;;AG7OA;EACE,mBAAA;EACA,gBAAA;EACA,iBAAA;AHgPF;;AG7OA;EACE,kBAAA;EACA,gBAAA;EACA,iBAAA;AHgPF;AIhUE;ED6EF;IAMI,eAAA;EHiPF;AACF;;AK/VA;EACE,aAAA;EACA,gBAAA;ALkWF;AI1UE;EC1BF;IAKI,mBAAA;ELmWF;AACF;;AKhWA;EACE,SAAA;ALmWF;AInVE;ECjBF;IAII,sBAAA;ELoWF;AACF;AKlWE;EACE,OAAA;EACA,sBAAA;ALoWJ;AKnWI;EACE,mBAAA;EACA,gBAAA;EACA,gBAAA;ALqWN;AIjWE;ECPE;IAMI,aAAA;IACA,aAAA;ELsWN;AACF;AKlWM;EACE,WAAA;EACA,oBAAA;KAAA,iBAAA;EACA,qBAAA;EACA,+BAAA;ALoWR;AI7WE;ECKI;IAMI,uBAAA;IAAA,kBAAA;IACA,gBAAA;IACA,2BAAA;ELsWR;AACF;AKpWM;EACE,mBAAA;EACA,+BAAA;ALsWR;;AKjWA;EACE,aAAA;ALoWF;;AI5XE;EC2BF;;IAGI,aAAA;ELoWF;AACF;;AM7ZA;EACE,yBAAA;ANgaF;AIvYE;EE1BF;IAII,yBAAA;ENiaF;AACF;AM9ZI;EACE,kBAAA;EACA,6BAAA;EAAA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,cJZY;AF4alB;AM7ZE;EACE,YAAA;EACA,SAAA;EACA,gBAAA;EACA,gBAAA;AN+ZJ;AM7ZI;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,mBJ5BY;EI6BZ,oBAAA;EACA,yBAAA;EACA,gCAAA;AN+ZN;AM5ZI;EACE,oBAAA;EACA,yBAAA;AN8ZN;AM3ZE;EACE,mBAAA;EACA,kBAAA;AN6ZJ;;AOxcA;EACE,cAAA;EACA,cAAA;EACA,mBAAA;EACA,mBLUmB;EKTnB,cAAA;EACA,UAAA;AP2cF;AIvbE;EG1BF;IASI,sBAAA;IACA,uBAAA;IACA,mBAAA;IACA,UAAA;EP4cF;AACF;AI/bE;EG1BF;IAeI,cAAA;IACA,kBAAA;IACA,SAAA;EP8cF;AACF;AO5cE;EACE,mBAAA;EACA,gBAAA;AP8cJ;AI1cE;EGNA;IAII,mBAAA;EPgdJ;AACF;AO7cE;EACE,0BAAA;AP+cJ;AO5cE;EACE,SAAA;AP8cJ;AO3cE;EACE,SAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;AP6cJ;AO1cE;EACE,UAAA;AP4cJ;AOzcE;EACE,kBAAA;EACA,iBAAA;EACA,oCAAA;AP2cJ;AO1cI;EACE,kBAAA;AP4cN;AO1cI;EACE,6BAAA;EAAA,qBAAA;EACA,cLnDa;AF+fnB;AO3cM;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,UAAA;EACA,WAAA;EACA,mBL3DW;EK4DX,oBAAA;EACA,yBAAA;EACA,gCAAA;AP6cR;AO1cM;EACE,oBAAA;EACA,yBAAA;AP4cR;;AQphBA;EACE,kBAAA;ARuhBF;AQthBE;EACE,kBAAA;EACA,WAAA;EACA,aAAA;EACA,oBAAA;KAAA,iBAAA;EACA,mBAAA;EACA,WAAA;ARwhBJ;AItgBE;EIxBA;IASI,YAAA;ERyhBJ;AACF;AQvhBE;EACE,oBAAA;EACA,gBAAA;EACA,cNZe;AFqiBnB;AIhhBE;EIZA;IAMI,mBAAA;ER0hBJ;AACF;AIrhBE;EIZA;IASI,kBAAA;ER4hBJ;AACF;AQ1hBI;EACE,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AR4hBN;AIhiBE;EIAE;IAOI,mBAAA;IACA,iBAAA;ER6hBN;AACF;AQ3hBI;EACE,gBAAA;EACA,iBAAA;EACA,oBAAA;AR6hBN;;ASrkBA;EACE,kBAAA;EACA,aAAA;ATwkBF;AIhjBE;EK1BF;IAKI,aAAA;ETykBF;AACF;AIrjBE;EK1BF;IAQI,aAAA;ET2kBF;AACF;;ASxkBA;EACE,kBAAA;AT2kBF;;AUxlBA;EACE,UAAA;AV2lBF;AIlkBE;EM1BF;IAII,sBAAA;IACA,SAAA;EV4lBF;AACF;AIxkBE;EM1BF;IAQI,SAAA;EV8lBF;AACF;AU5lBE;EACE,SAAA;EACA,mBAAA;AV8lBJ;AU7lBI;EACE,aAAA;EACA,gBAAA;EACA,gBAAA;AV+lBN;AU7lBI;EACE,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,SAAA;AV+lBN;AU7lBI;EACE,SAAA;EACA,gBAAA;AV+lBN;AIhmBE;EMDE;IAKI,sBAAA;EVgmBN;AACF;AIrmBE;EMUE;IAEI,YAAA;EV6lBN;AACF;;AWpoBA;EACE,SAAA;AXuoBF;AI9mBE;EO1BF;IAII,oBAAA;EXwoBF;AACF;;AWroBA;EACE,eAAA;EACA,kBAAA;AXwoBF;AIxnBE;EOlBF;IAKI,SAAA;EXyoBF;AACF;;AWtoBA;EACE,SAAA;EACA,eAAA;AXyoBF;;AWtoBA;EACE,YAAA;EACA,aAAA;EACA,cAAA;EACA,oBAAA;EACA,mBAAA;EACA,yBAAA;AXyoBF;AWxoBE;EACE,mBAAA;EACA,gBAAA;AX0oBJ;AWxoBE;EACE,WAAA;EACA,oBAAA;KAAA,iBAAA;EACA,qBAAA;EACA,+BAAA;AX0oBJ;AWxoBE;EACE,mBAAA;EACA,+BAAA;AX0oBJ;AWxoBE;EACE,kBAAA;EACA,aAAA;AX0oBJ;AWzoBI;EACE,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,SAAA;AX2oBN;AWzoBI;EACE,iBAAA;EACA,gBAAA;EACA,gBAAA;AX2oBN;AWzoBI;EACE,kBAAA;EACA,UAAA;EACA,UAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;AX2oBN;;AIhrBE;EO0CF;;;;IAKI,aAAA;EXyoBF;AACF;;AYltBA;EACE,eAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,mBVIc;EUHd,cVNgB;EUOhB,6BAAA;EAAA,qBAAA;EACA,gBAAA;EACA,iBAAA;AZqtBF;AYptBE;EACE,kBAAA;EACA,UAAA;EACA,QAAA;EACA,2BAAA;EACA,aAAA;AZstBJ;AI7sBE;EQdA;IAQI,cAAA;EZutBJ;AACF;AYrtBE;EACE,cAAA;AZutBJ;;AYntBA;EACE,eAAA;EACA,yBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;AZstBF;AYrtBE;EACE;IACE,yBVzBe;IU0Bf,cVnCa;IUoCb,6CAAA;EZutBJ;AACF;;AYntBA;EAEE,iBAAA;EACA,gBAAA;EACA,cAAA;AZqtBF;;AYltBA;;EAEE,eAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBAAA;EACA,cV1DgB;EU2DhB,6BAAA;EAAA,qBAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;AZqtBF;AYptBE;;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,aVnEc;AF0xBlB;AYrtBE;EACE;;IACE,yBV3De;IU4Df,cVrEa;IUsEb,6CAAA;EZwtBJ;EYttBE;;IACE,aVzEa;EFkyBjB;AACF;;AYrtBA;EACE,eAAA;EAEA,qBVlEmB;AFyxBrB;AYttBE;EACE;IACE,yBV9EU;IU+EV,cVxFY;IUyFZ,6CAAA;EZwtBJ;EYttBE;IACE,iBAAA;EZwtBJ;AACF;;AYptBA;EACE,eAAA;EACA,oBAAA;EACA,2BAAA;EACA,yBAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;EACA,oBAAA;EACA,yBAAA;EACA,6BAAA;EAAA,qBAAA;EACA,gBAAA;EACA,iBAAA;EACA,cV9GgB;EU+GhB,yBVtGc;EUuGd,yBAAA;KAAA,sBAAA;UAAA,iBAAA;AZutBF;AYrtBE;EACE,oBAAA;EACA,yBAAA;EACA,YAAA;EACA,yBVpGiB;AF2zBrB;AYptBE;EACE,yBVrGgB;EUsGhB,cVlHY;EUmHZ,6CAAA;AZstBJ;AYptBE;EACE,yBV1GgB;EU2GhB,cVvHY;AF60BhB;AYntBE;EACE,sBAAA;AZqtBJ;;AYjtBA;EACE,eAAA;EACA,kBAAA;EACA,qBAAA;EACA,yBVnIc;EUoId,6BAAA;EACA,gBAAA;EACA,iBAAA;EACA,cVhJgB;AFo2BlB;AYltBE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,mBVzJc;EU0Jd,oBAAA;EACA,yBAAA;EACA,gCAAA;AZotBJ;AYjtBE;EACE,oBAAA;EACA,yBAAA;AZmtBJ;;AY/sBA;EACE,kBAAA;EACA,QAAA;EACA,QAAA;EACA,2BAAA;AZktBF;;AY/sBA;EACE,aAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;AZktBF;AYhtBE;EACE,cAAA;EACA,kBAAA;EACA,+BAAA;EACA,WAAA;EACA,WAAA;EACA,yBV9Lc;EU+Ld,6EAAA;AZktBJ;AY/sBE;EACE,QAAA;EACA,UAAA;AZitBJ;AY9sBE;EACE,WAAA;EACA,UAAA;AZgtBJ;;Aa35BA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gCAAA;Ab85BF;Aa55BE;EACE,kBAAA;EACA,WAAA;EACA,gBAAA;Ab85BJ;;Aa15BA;EACE,aAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,gBAAA;EACA,yBAAA;Ab65BF;Aa55BE;EACE,gBAAA;Ab85BJ;AI35BE;ESJA;IAGI,cAAA;IACA,YAAA;Ebg6BJ;AACF;Aa75BI;EACE,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,WAAA;Ab+5BN;Aa75BI;EACE,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,SAAA;Ab+5BN;Aa75BI;EACE,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,WAAA;Ab+5BN;Aa55BE;EAEE,cAAA;Ab65BJ;Aa35BE;EACE,kBAAA;EACA,MAAA;EACA,WAAA;Ab65BJ;;Aaz5BA;EACE,WAAA;EACA,WAAA;EACA,yBX/CmB;EWgDnB,sBAAA;Ab45BF;;Aaz5BA;EACE,yBXtEgB;EWuEhB,4CAAA;Ab45BF;;Aaz5BA;EACE;IACE,oBAAA;IACA,uBAAA;Eb45BF;Eaz5BA;IACE,oBAAA;IACA,uBAAA;Eb25BF;AACF;Aax5BA;EACE,4BAAA;Ab05BF;;Aav5BA;EACE,6BAAA;EACA,4BAAA;Ab05BF;;Aav5BA;EACE,4BAAA;EACA,4BAAA;Ab05BF;;Aav5BA;EACE,6BAAA;Ab05BF;;Aav5BA;EACE;IACE,OAAA;Eb05BF;Eax5BA;IACE,WAAA;Eb05BF;AACF;Aav5BA;EACE;IACE,UAAA;Eby5BF;Eav5BA;IACE,OAAA;Eby5BF;AACF;AcjhCE;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,iBAAA;EACA,cAAA;EACA,UAAA;EACA,yBAAA;EACA,cAAA;AdmhCJ;AcjhCI;EACE,SAAA;EACA,UAAA;EACA,SAAA;AdmhCN;AcjhCM;EACE,kBAAA;EACA,gBAAA;EACA,YAAA;AdmhCR;AcjhCQ;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;AdmhCV;Ac/gCI;EACE,6BAAA;EAAA,qBAAA;EACA,cZhCY;EYiCZ,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AdihCN;Ac9gCI;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,mBZ9CY;EY+CZ,oBAAA;EACA,yBAAA;EACA,gCAAA;AdghCN;Ac7gCI;EACE;IACE,oBAAA;IACA,yBAAA;Ed+gCN;AACF;Ac3gCE;EACE,SAAA;Ad6gCJ;AczgCI;EACE,yCAAA;EACA,6EAAA;Ad2gCN;AcvgCI;EACE,yCAAA;EACA,6EAAA;AdygCN;;AeplCA;EACE,WAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EACA,cAAA;EACA,qCAAA;AfulCF;AerlCE;EACE,eAAA;EACA,cAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EACA,gBAAA;EACA,aAAA;EACA,qBAAA;EACA,yBbTY;AFgmChB;AeplCE;EACE,eAAA;EACA,cAAA;EACA,qBAAA;AfslCJ;AenlCE;EACE,qBAAA;EACA,uBAAA;AfqlCJ;AenlCI;EACE,aAAA;AfqlCN;AejlCE;EACE,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;AfmlCJ;AehlCE;EACE,iBAAA;EACA,sBAAA;AfklCJ;Ae/kCE;EACE,qBAAA;AfilCJ;Ae9kCE;EACE,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,qBAAA;AfglCJ;Ae7kCE;EACE,WAAA;Af+kCJ;Ae5kCE;EACE,6BAAA;EACA,kBAAA;Af8kCJ;Ae3kCE;EACE,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;Af6kCJ;Ae1kCE;EACE,kBAAA;EACA,aAAA;EACA,cAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBblEiB;EamEjB,yBAAA;Af4kCJ;AezkCE;EACE,WAAA;EACA,sBAAA;Af2kCJ;AezkCI;EACE,qBAAA;Af2kCN;AevkCE;EACE,qBAAA;AfykCJ;AetkCE;EACE,WAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,yBAAA;EACA,yBbnGY;EaoGZ,kBAAA;AfwkCJ;AetkCI;EACE;IACE,yBbrGa;IasGb,cb/GW;IagHX,6CAAA;EfwkCN;AACF","sourcesContent":["@charset \"UTF-8\";\n@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900&display=swap);\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden],\ntemplate {\n  display: none;\n}\n\nhtml {\n  background: #e1d4c9;\n  color: #403f3d;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: \"Inter\", sans-serif;\n}\n\nbody {\n  margin: 0;\n}\n\na {\n  background: transparent;\n}\na:focus {\n  outline: thin dotted;\n}\na:hover, a:active {\n  outline: 0;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nh2 {\n  font-size: 1.5em;\n  margin: 0.83em 0;\n}\n\nh3 {\n  font-size: 1.17em;\n  margin: 1em 0;\n}\n\nh4 {\n  font-size: 1em;\n  margin: 1.33em 0;\n}\n\nh5 {\n  font-size: 0.83em;\n  margin: 1.67em 0;\n}\n\nh6 {\n  font-size: 0.75em;\n  margin: 2.33em 0;\n}\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\ndfn {\n  font-style: italic;\n}\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, serif;\n  font-size: 1em;\n}\n\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n\nq {\n  quotes: \"“\" \"”\" \"‘\" \"’\";\n}\n\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nimg {\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 0;\n}\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n  border: 0;\n  padding: 0;\n  white-space: normal;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n  vertical-align: baseline;\n}\n\nbutton,\ninput {\n  line-height: normal;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[disabled],\ninput[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput[type=search] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\ninput[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ninput[type=checkbox], input[type=radio] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  overflow-x: hidden;\n}\n\n.hidden {\n  position: absolute;\n  left: -99999em;\n  width: 1px;\n  height: 1px;\n}\n\n@media (max-width: 769px) {\n  .hide-for-mobile {\n    display: none !important;\n  }\n}\n\n@media (min-width: 769px) {\n  .hide-for-desktop {\n    display: none !important;\n  }\n}\n\n@media (max-width: 576px) {\n  .hide-for-phones {\n    display: none !important;\n  }\n}\n\n.container {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 20px 0 40px;\n  width: 100%;\n}\n\nh2 {\n  margin: 0;\n}\n\n.section-visible {\n  display: block;\n  padding: 0 40px 100px 40px;\n}\n@media (max-width: 576px) {\n  .section-visible {\n    padding: 0 16px 100px 16px;\n  }\n}\n\n.section-hidden {\n  display: none;\n}\n\nli {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.flex {\n  display: flex;\n}\n.flex-fd-row {\n  flex-direction: row;\n}\n.flex-fd-column {\n  flex-direction: column;\n}\n.flex-fw-wrap {\n  flex-wrap: wrap;\n}\n.flex-jc-center {\n  justify-content: center;\n}\n.flex-jc-start {\n  justify-content: flex-start;\n}\n.flex-jc-space-between {\n  justify-content: space-between;\n}\n.flex-ai-center {\n  align-items: center;\n}\n.flex-as-stretch {\n  align-self: stretch;\n}\n\n.highlight {\n  color: #b0907a;\n  font-style: italic;\n}\n\n.small-text {\n  font-size: 0.625rem;\n  font-weight: 600;\n  line-height: 140%;\n}\n\n.title {\n  font-size: 3.75rem;\n  font-weight: 600;\n  line-height: 125%;\n}\n@media (max-width: 576px) {\n  .title {\n    font-size: 2rem;\n  }\n}\n\n.about_title {\n  margin-block-start: 0;\n  margin-block-end: 0;\n}\n@media (max-width: 992px) {\n  .about_title {\n    margin-bottom: 40px;\n  }\n}\n\n.about_fotos_container {\n  gap: 40px;\n}\n@media (max-width: 992px) {\n  .about_fotos_container {\n    flex-direction: column;\n  }\n}\n.about_fotos_container .about-item_column {\n  flex: 1;\n  box-sizing: border-box;\n}\n.about_fotos_container .about-item_column .about-item_image {\n  border-radius: 20px;\n  margin-top: 38px;\n  overflow: hidden;\n}\n@media (max-width: 992px) {\n  .about_fotos_container .about-item_column .about-item_image {\n    height: 590px;\n    margin-top: 0;\n  }\n}\n.about_fotos_container .about-item_column .about-item_image img {\n  width: 100%;\n  object-fit: cover;\n  transform: scale(1.2);\n  transition: transform 0.6s ease;\n}\n@media (max-width: 576px) {\n  .about_fotos_container .about-item_column .about-item_image img {\n    width: max-content;\n    margin-left: 50%;\n    transform: translateX(-50%);\n  }\n}\n.about_fotos_container .about-item_column .about-item_image:hover img {\n  transform: scale(1);\n  transition: transform 0.6s ease;\n}\n\n#image3 {\n  height: 430px;\n}\n\n@media (max-width: 992px) {\n  #second-image,\n  #third-image {\n    display: none;\n  }\n}\n\n.header {\n  padding: 0 40px 20px 40px;\n}\n@media (max-width: 576px) {\n  .header {\n    padding: 0 16px 20px 16px;\n  }\n}\n.header__nav a {\n  position: relative;\n  text-decoration: none;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 50%;\n  color: #403f3d;\n}\n.header__links {\n  padding: 0 0;\n  gap: 40px;\n  margin-top: 12px;\n  margin-left: 8px;\n}\n.header__links a::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #403f3d;\n  transform: scaleX(0);\n  transform-origin: 50% 50%;\n  transition: transform 350ms ease;\n}\n.header__links a:hover::after {\n  transform: scaleX(1);\n  transform-origin: 50% 50%;\n}\n.header__menu {\n  padding-right: 30px;\n  margin-bottom: 4px;\n}\n\n.footer {\n  margin: 0 40px;\n  padding: 100px;\n  border-radius: 40px;\n  background: #665f55;\n  color: #e1d4c9;\n  gap: 100px;\n}\n@media (max-width: 992px) {\n  .footer {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 100px 60px;\n    gap: 100px;\n  }\n}\n@media (max-width: 576px) {\n  .footer {\n    margin: 0 16px;\n    padding: 60px 16px;\n    gap: 35px;\n  }\n}\n.footer .footer__title {\n  margin-bottom: 32px;\n  max-width: 530px;\n}\n@media (max-width: 992px) {\n  .footer .footer__title {\n    margin-bottom: 40px;\n  }\n}\n.footer .footer-social {\n  flex-basis: 50% !important;\n}\n.footer .footer-icons__container {\n  gap: 12px;\n}\n.footer .footer-contacts__title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 125%;\n}\n.footer .footer__list {\n  padding: 0;\n}\n.footer .footer__item {\n  position: relative;\n  padding: 20px 0 0;\n  border-bottom: 2px solid transparent;\n}\n.footer .footer__item img {\n  padding-right: 4px;\n}\n.footer .footer__item a {\n  text-decoration: none;\n  color: #e1d4c9;\n}\n.footer .footer__item a::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 70%;\n  height: 2px;\n  background: #e1d4c9;\n  transform: scaleX(0);\n  transform-origin: 50% 50%;\n  transition: transform 450ms ease;\n}\n.footer .footer__item a:hover::after {\n  transform: scaleX(1);\n  transform-origin: 50% 50%;\n}\n\n.start-screen {\n  position: relative;\n}\n.start-screen_background {\n  position: absolute;\n  width: 100%;\n  height: 644px;\n  object-fit: cover;\n  border-radius: 40px;\n  z-index: -1;\n}\n@media (max-width: 769px) {\n  .start-screen_background {\n    height: 100%;\n  }\n}\n.start-screen_content {\n  padding: 100px 100px;\n  max-width: 530px;\n  color: #e1d4c9;\n}\n@media (max-width: 1200px) {\n  .start-screen_content {\n    padding: 100px 60px;\n  }\n}\n@media (max-width: 576px) {\n  .start-screen_content {\n    padding: 60px 16px;\n  }\n}\n.start-screen_content .start-screen_title {\n  font-size: 4.5rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 106%;\n}\n@media (max-width: 576px) {\n  .start-screen_content .start-screen_title {\n    font-size: 2.625rem;\n    line-height: 115%;\n  }\n}\n.start-screen_content .start-screen_subtitle {\n  font-weight: 400;\n  line-height: 150%;\n  padding: 23px 0 44px;\n}\n\n#favcoffee {\n  position: relative;\n  height: 50rem;\n}\n@media (max-width: 992px) {\n  #favcoffee {\n    height: 56rem;\n  }\n}\n@media (max-width: 576px) {\n  #favcoffee {\n    height: 40rem;\n  }\n}\n\n.favcoffee_title {\n  text-align: center;\n}\n\n.mobile-app_container {\n  gap: 100px;\n}\n@media (max-width: 1200px) {\n  .mobile-app_container {\n    flex-direction: column;\n    gap: 90px;\n  }\n}\n@media (max-width: 576px) {\n  .mobile-app_container {\n    gap: 30px;\n  }\n}\n.mobile-app_container .mobile-app_offer {\n  gap: 40px;\n  margin-bottom: 12px;\n}\n.mobile-app_container .mobile-app_offer .mobile-app_title {\n  margin-block-start: 0;\n  margin-block-end: 0;\n  padding-top: 0px;\n}\n.mobile-app_container .mobile-app_offer .mobile-app_subtitle {\n  font-weight: 400;\n  line-height: 150%;\n  padding-top: 0px;\n  margin: 0;\n}\n.mobile-app_container .mobile-app_offer .mobile-app_buttons {\n  gap: 20px;\n  padding-top: 0px;\n}\n@media (max-width: 576px) {\n  .mobile-app_container .mobile-app_offer .mobile-app_buttons {\n    flex-direction: column;\n  }\n}\n@media (max-width: 576px) {\n  .mobile-app_container .mobile-app_screens img {\n    width: 348px;\n  }\n}\n\n.menu_card-container {\n  gap: 37px;\n}\n@media (max-width: 769px) {\n  .menu_card-container {\n    padding-bottom: 40px;\n  }\n}\n\n.menu_title {\n  margin: 0 290px;\n  text-align: center;\n}\n@media (max-width: 1200px) {\n  .menu_title {\n    margin: 0;\n  }\n}\n\n.menu_tabs {\n  gap: 16px;\n  padding: 40px 0;\n}\n\n.menu_card {\n  width: 310px;\n  height: 467px;\n  flex-shrink: 0;\n  padding-bottom: 40px;\n  border-radius: 40px;\n  border: 1px solid #c1b6ad;\n}\n.menu_card_img {\n  border-radius: 40px;\n  overflow: hidden;\n}\n.menu_card img {\n  width: 100%;\n  object-fit: cover;\n  transform: scale(1.1);\n  transition: transform 0.6s ease;\n}\n.menu_card:hover img {\n  transform: scale(1);\n  transition: transform 0.6s ease;\n}\n.menu_card .menu_card_content {\n  position: relative;\n  padding: 20px;\n}\n.menu_card .menu_card_content .menu_card_title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 110%;\n  margin: 0;\n}\n.menu_card .menu_card_content .menu_card_description {\n  line-height: 150%;\n  margin-top: 12px;\n  margin-bottom: 0;\n}\n.menu_card .menu_card_content .menu_card_price {\n  position: absolute;\n  top: 120px;\n  left: 20px;\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 125%;\n}\n\n@media (max-width: 992px) {\n  #coffee5,\n  #coffee6,\n  #coffee7,\n  #coffee8 {\n    display: none;\n  }\n}\n\n.btn-primary {\n  cursor: pointer;\n  position: relative;\n  width: 200px;\n  padding: 22px 78px;\n  border-radius: 100px;\n  background: #e1d4c9;\n  color: #403f3d;\n  text-decoration: none;\n  font-weight: 600;\n  line-height: 150%;\n}\n.btn-primary .start-screen_icon {\n  position: absolute;\n  right: 26%;\n  top: 50%;\n  transform: translateY(-50%);\n  display: none;\n}\n@media (max-width: 769px) {\n  .btn-primary .start-screen_icon {\n    display: block;\n  }\n}\n.btn-primary:hover .start-screen_icon {\n  display: block;\n}\n\n.btn__arrow, .btn-icon-light, .btn__refresh {\n  cursor: pointer;\n  border: 1px solid #665f55;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n}\n@media (hover: hover) {\n  .btn__arrow:hover, .btn-icon-light:hover, .btn__refresh:hover {\n    background-color: #665f55;\n    color: #e1d4c9;\n    transition: background-color 0.5s ease-in-out;\n  }\n}\n\n.btn__refresh {\n  font-size: 1.4rem;\n  font-weight: 200;\n  margin: 0 auto;\n}\n\n.btn-app-store,\n.btn-google-play {\n  cursor: pointer;\n  width: 160px;\n  padding: 8px 19px;\n  align-items: center;\n  border: 1px solid #665f55;\n  color: #403f3d;\n  text-decoration: none;\n  font-weight: 600;\n  line-height: 140%;\n  border-radius: 100px;\n}\n.btn-app-store .btn_icon,\n.btn-google-play .btn_icon {\n  width: 36px;\n  height: 36px;\n  margin-right: 8px;\n  fill: #403f3d;\n}\n@media (hover: hover) {\n  .btn-app-store:hover,\n  .btn-google-play:hover {\n    background-color: #665f55;\n    color: #e1d4c9;\n    transition: background-color 0.6s ease-in-out;\n  }\n  .btn-app-store:hover .btn_icon,\n  .btn-google-play:hover .btn_icon {\n    fill: #e1d4c9;\n  }\n}\n\n.btn-icon-light {\n  cursor: pointer;\n  border-color: #c1b6ad;\n}\n@media (hover: hover) {\n  .btn-icon-light:hover {\n    background-color: #e1d4c9;\n    color: #403f3d;\n    transition: background-color 0.5s ease-in-out;\n  }\n  .btn-icon-light:hover img {\n    filter: invert(1);\n  }\n}\n\n.tab-item {\n  cursor: pointer;\n  display: inline-flex;\n  flex-direction: row-reverse;\n  padding: 8px 16px 8px 8px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-radius: 100px;\n  border: 1px solid #c1b6ad;\n  text-decoration: none;\n  font-weight: 600;\n  line-height: 150%;\n  color: #403f3d;\n  background-color: #e1d4c9;\n  user-select: none;\n}\n.tab-item img {\n  border-radius: 100px;\n  border: 1px solid #c1b6ad;\n  padding: 3px;\n  background-color: #c1b6ad;\n}\n.tab-item:hover {\n  background-color: #665f55;\n  color: #e1d4c9;\n  transition: background-color 0.5s ease-in-out;\n}\n.tab-item-active {\n  background-color: #665f55;\n  color: #e1d4c9;\n}\n.tab-item-inactive {\n  background-color: #fff;\n}\n\n.link-with-icon {\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  background-color: #e1d4c9;\n  border: 1px solid transparent;\n  font-weight: 600;\n  line-height: 150%;\n  color: #403f3d;\n}\n.link-with-icon::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #403f3d;\n  transform: scaleX(0);\n  transform-origin: 50% 50%;\n  transition: transform 350ms ease;\n}\n.link-with-icon:hover::after {\n  transform: scaleX(1);\n  transform-origin: 50% 50%;\n}\n\n.icon {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.header__burger {\n  display: flex;\n  width: 44px;\n  height: 44px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  border: 1px solid #665f55;\n  border-radius: 50%;\n  position: relative;\n  cursor: pointer;\n}\n.header__burger span {\n  display: block;\n  position: absolute;\n  transition: transform 0.3s ease;\n  width: 16px;\n  height: 2px;\n  background-color: #403f3d;\n  transition: transform 2s ease-in-out, top 2s ease-in-out, left 2s ease-in-out;\n}\n.header__burger span:first-child {\n  top: 4px;\n  left: -8px;\n}\n.header__burger span:last-child {\n  bottom: 4px;\n  left: -8px;\n}\n\n.carousel {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  text-align: center;\n  transform: translate(-50%, -50%);\n}\n.carousel .slides-wrapper {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.slide-container {\n  display: none;\n  position: relative;\n  margin: 0 auto;\n  width: 480px;\n  overflow: hidden;\n  animation: 1s ease-in-out;\n}\n.slide-container img {\n  max-width: 480px;\n}\n@media (max-width: 576px) {\n  .slide-container img {\n    margin: 0 auto;\n    width: 348px;\n  }\n}\n.slide-container .slide-content h3 {\n  font-size: 1.5rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 125%;\n  padding-top: 61px;\n  margin: 0px;\n}\n.slide-container .slide-content .slide-description {\n  text-align: center;\n  padding-top: 15px;\n  line-height: 150%;\n  margin: 0;\n}\n.slide-container .slide-content .slide-price {\n  font-size: 1.5rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 125%;\n  padding-top: 17px;\n  margin: 0px;\n}\n.slide-container.active, .slide-container.next {\n  display: block;\n}\n.slide-container.next {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.horizontal-line {\n  width: 40px;\n  height: 4px;\n  background-color: #c1b6ad;\n  margin: 39px 6px 0 6px;\n}\n\n.horizontal-line-active {\n  background-color: #403f3d;\n  animation: anim 7s ease 0s 1 normal forwards;\n}\n\n@keyframes anim {\n  0% {\n    transform: scaleX(0);\n    transform-origin: 0% 0%;\n  }\n  100% {\n    transform: scaleX(1);\n    transform-origin: 0% 0%;\n  }\n}\n.animate_to-left {\n  animation-name: scrollToLeft;\n}\n\n.animate_to-right {\n  animation-name: scrollToRight;\n  animation-direction: reverse;\n}\n\n.animate_from-left {\n  animation-name: scrollToLeft;\n  animation-direction: reverse;\n}\n\n.animate_from-right {\n  animation-name: scrollToRight;\n}\n\n@keyframes scrollToLeft {\n  from {\n    left: 0;\n  }\n  to {\n    left: -100%;\n  }\n}\n@keyframes scrollToRight {\n  from {\n    left: 100%;\n  }\n  to {\n    left: 0;\n  }\n}\n.mobile__nav {\n  position: fixed;\n  margin-top: 20px;\n  padding: 60px 0px;\n  top: 78px;\n  left: 100%;\n  width: 100%;\n  min-height: 100vh;\n  display: block;\n  z-index: 5;\n  background-color: #e1d4c9;\n  transition: 2s;\n}\n.mobile__nav ul {\n  margin: 0;\n  padding: 0;\n  gap: 60px;\n}\n.mobile__nav ul a {\n  position: relative;\n  margin-top: 40px;\n  width: 140px;\n}\n.mobile__nav ul a img {\n  position: absolute;\n  top: -2px;\n  width: 30%;\n  padding-left: 14px;\n}\n.mobile__nav a {\n  text-decoration: none;\n  color: #403f3d;\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 125%;\n}\n.mobile__nav a::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #403f3d;\n  transform: scaleX(0);\n  transform-origin: 50% 50%;\n  transition: transform 350ms ease;\n}\n@media (hover: hover) {\n  .mobile__nav a:hover::after {\n    transform: scaleX(1);\n    transform-origin: 50% 50%;\n  }\n}\n.mobile__nav-active {\n  left: 8px;\n}\n.mobile__btn-active span:first-child {\n  transform: translateY(-5px) rotate(45deg);\n  transition: transform 2s ease-in-out, top 2s ease-in-out, left 2s ease-in-out;\n}\n.mobile__btn-active span:last-child {\n  transform: translateY(5px) rotate(-45deg);\n  transition: transform 2s ease-in-out, top 2s ease-in-out, left 2s ease-in-out;\n}\n\n.modal {\n  z-index: 10;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.75);\n}\n.modal-container {\n  position: fixed;\n  margin: 0 auto;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 48rem;\n  padding: 1rem;\n  border-radius: 2.5rem;\n  background-color: #e1d4c9;\n}\n.modal-image {\n  width: 19.35rem;\n  flex-shrink: 0;\n  border-radius: 2.5rem;\n}\n.modal-content {\n  padding-left: 1.25rem;\n  align-items: flex-start;\n}\n.modal-content p {\n  margin-top: 0;\n}\n.modal-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 125%;\n  margin: 0 0 0.7rem 0;\n}\n.modal-description {\n  line-height: 150%;\n  margin-bottom: 1.35rem;\n}\n.modal-label {\n  margin-bottom: 0.6rem;\n}\n.modal-label-total {\n  font-size: 1.5rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 125%;\n  margin-top: 0;\n  margin-bottom: 0.9rem;\n}\n.modal-total-wrapper {\n  width: 100%;\n}\n.modal-line {\n  border-top: 1px solid #c1b6ad;\n  padding: 0.75rem 0;\n}\n.modal-info-text {\n  font-size: 0.625rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 140%;\n}\n.modal-icon {\n  border-radius: 50%;\n  width: 1.5rem;\n  height: 1.5rem;\n  padding: 3px;\n  justify-content: center;\n  align-items: center;\n  background-color: #c1b6ad;\n  border: 1px solid #c1b6ad;\n}\n.modal-buttons-group {\n  gap: 0.5rem;\n  margin-bottom: 1.25rem;\n}\n.modal-buttons-group button {\n  padding-right: 0.8rem;\n}\n.modal-info-icon {\n  padding-right: 0.5rem;\n}\n.modal-close-button {\n  width: 100%;\n  padding: 10px 78px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100px;\n  border: 1px solid #665f55;\n  background-color: #e1d4c9;\n  margin-top: 0.8rem;\n}\n@media (hover: hover) {\n  .modal-close-button:hover {\n    background-color: #665f55;\n    color: #e1d4c9;\n    transition: background-color 0.5s ease-in-out;\n  }\n}","// =============================================================================\n// Normalize.scss based on Nicolas Gallagher and Jonathan Neal's\n// normalize.css v2.1.3 | MIT License | git.io/normalize\n// =============================================================================\n\n// =============================================================================\n// Normalize.scss settings\n// =============================================================================\n\n// Set to true if you want to add support for IE6 and IE7\n// Notice: setting to true might render some elements\n// slightly differently than when set to false\n$legacy_support_for_ie: false !default; // Used also in Compass\n\n// Set the default font family here so you don't have to override it later\n$normalized_font_family: \"Inter\", sans-serif !default;\n\n$normalize_headings: true !default;\n\n$h1_font_size: 2em !default;\n$h2_font_size: 1.5em !default;\n$h3_font_size: 1.17em !default;\n$h4_font_size: 1em !default;\n$h5_font_size: 0.83em !default;\n$h6_font_size: 0.75em !default;\n\n$h1_margin: 0.67em 0 !default;\n$h2_margin: 0.83em 0 !default;\n$h3_margin: 1em 0 !default;\n$h4_margin: 1.33em 0 !default;\n$h5_margin: 1.67em 0 !default;\n$h6_margin: 2.33em 0 !default;\n\n$background: $bg-body-color !default;\n$color: $text-dark-color !default;\n\n// =============================================================================\n// HTML5 display definitions\n// =============================================================================\n\n// Corrects block display not defined in IE6/7/8/9 & FF3\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n// Corrects inline-block display not defined in IE6/7/8/9 & FF3\n\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  @if $legacy_support_for_ie {\n    *display: inline;\n    *zoom: 1;\n  }\n}\n\n// 1. Prevents modern browsers from displaying 'audio' without controls\n// 2. Remove excess height in iOS5 devices\n\naudio:not([controls]) {\n  display: none; // 1\n  height: 0; // 2\n}\n\n//\n// Address `[hidden]` styling not present in IE 8/9.\n// Hide the `template` element in IE, Safari, and Firefox < 22.\n//\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n// =============================================================================\n// Base\n// =============================================================================\n\n// 1. Corrects text resizing oddly in IE6/7 when body font-size is set using em units\n//    http://clagnut.com/blog/348/#c790\n// 2. Prevents iOS text size adjust after orientation change, without disabling user zoom\n//    www.456bereastreet.com/archive/201012/controlling_text_size_in_safari_for_ios_without_disabling_user_zoom/\n\nhtml {\n  @if $legacy_support_for_ie {\n    font-size: 100%; // 1\n  }\n  background: $background;\n  color: $color;\n  -webkit-text-size-adjust: 100%; // 2\n  -ms-text-size-adjust: 100%; // 2\n}\n\n// Addresses font-family inconsistency between 'textarea' and other form elements.\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: $normalized_font_family;\n}\n\n// Addresses margins handled incorrectly in IE6/7\n\nbody {\n  margin: 0;\n}\n\n// =============================================================================\n// Links\n// =============================================================================\n\n// 1. Remove the gray background color from active links in IE 10.\n// 2. Addresses outline displayed oddly in Chrome\n// 3. Improves readability when focused and also mouse hovered in all browsers\n//    people.opera.com/patrickl/experiments/keyboard/test\n\na {\n  // 1\n\n  background: transparent;\n\n  // 2\n\n  &:focus {\n    outline: thin dotted;\n  }\n\n  // 3\n\n  &:hover,\n  &:active {\n    outline: 0;\n  }\n}\n\n// =============================================================================\n// Typography\n// =============================================================================\n\n// Addresses font sizes and margins set differently in IE6/7\n// Addresses font sizes within 'section' and 'article' in FF4+, Chrome, S5\n\n@if $normalize_headings == true {\n  h1 {\n    font-size: $h1_font_size;\n    margin: $h1_margin;\n  }\n\n  h2 {\n    font-size: $h2_font_size;\n    margin: $h2_margin;\n  }\n\n  h3 {\n    font-size: $h3_font_size;\n    margin: $h3_margin;\n  }\n\n  h4 {\n    font-size: $h4_font_size;\n    margin: $h4_margin;\n  }\n\n  h5 {\n    font-size: $h5_font_size;\n    margin: $h5_margin;\n  }\n\n  h6 {\n    font-size: $h6_font_size;\n    margin: $h6_margin;\n  }\n}\n\n// Addresses styling not present in IE 8/9, S5, Chrome\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n// Addresses style set to 'bolder' in FF3+, S4/5, Chrome\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n@if $legacy_support_for_ie {\n  blockquote {\n    margin: 1em 40px;\n  }\n}\n\n// Addresses styling not present in S5, Chrome\n\ndfn {\n  font-style: italic;\n}\n\n// Addresses styling not present in IE6/7/8/9\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n// Addresses margins set differently in IE6/7\n@if $legacy_support_for_ie {\n  p,\n  pre {\n    margin: 1em 0;\n  }\n}\n\n// Corrects font family set oddly in IE6, S4/5, Chrome\n// en.wikipedia.org/wiki/User:Davidgothberg/Test59\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, serif;\n  @if $legacy_support_for_ie {\n    _font-family: \"courier new\", monospace;\n  }\n  font-size: 1em;\n}\n\n// Improves readability of pre-formatted text in all browsers\n\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n\n// Set consistent quote types.\n\nq {\n  quotes: \"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";\n}\n\n// 1. Addresses CSS quotes not supported in IE6/7\n// 2. Addresses quote property not supported in S4\n\n// 1\n@if $legacy_support_for_ie {\n  q {\n    quotes: none;\n  }\n}\n\n// 2\nq {\n  &:before,\n  &:after {\n    content: \"\";\n    content: none;\n  }\n}\n\n// Address inconsistent and variable font size in all browsers.\n\nsmall {\n  font-size: 80%;\n}\n\n// Prevents sub and sup affecting line-height in all browsers\n// gist.github.com/413930\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n// =============================================================================\n// Lists\n// =============================================================================\n\n// Addresses margins set differently in IE6/7\n@if $legacy_support_for_ie {\n  dl,\n  menu,\n  ol,\n  ul {\n    margin: 1em 0;\n  }\n}\n\n@if $legacy_support_for_ie {\n  dd {\n    margin: 0 0 0 40px;\n  }\n}\n\n// Addresses paddings set differently in IE6/7\n@if $legacy_support_for_ie {\n  menu,\n  ol,\n  ul {\n    padding: 0 0 0 40px;\n  }\n}\n\n// Corrects list images handled incorrectly in IE7\n\nnav {\n  ul,\n  ol {\n    @if $legacy_support_for_ie {\n      list-style-image: none;\n    }\n  }\n}\n\n// =============================================================================\n// Embedded content\n// =============================================================================\n\n// 1. Removes border when inside 'a' element in IE6/7/8/9, FF3\n// 2. Improves image quality when scaled in IE7\n//    code.flickr.com/blog/2008/11/12/on-ui-quality-the-little-things-client-side-image-resizing/\n\nimg {\n  border: 0; // 1\n  @if $legacy_support_for_ie {\n    -ms-interpolation-mode: bicubic; // 2\n  }\n}\n\n// Corrects overflow displayed oddly in IE9\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n// =============================================================================\n// Figures\n// =============================================================================\n\n// Addresses margin not present in IE6/7/8/9, S5, O11\n\nfigure {\n  margin: 0;\n}\n\n// =============================================================================\n// Forms\n// =============================================================================\n\n// Corrects margin displayed oddly in IE6/7\n@if $legacy_support_for_ie {\n  form {\n    margin: 0;\n  }\n}\n\n// Define consistent border, margin, and padding\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n// 1. Corrects color not being inherited in IE6/7/8/9\n// 2. Remove padding so people aren't caught out if they zero out fieldsets.\n// 3. Corrects text not wrapping in FF3\n// 4. Corrects alignment displayed oddly in IE6/7\n\nlegend {\n  border: 0; // 1\n  padding: 0; // 2\n  white-space: normal; // 3\n  @if $legacy_support_for_ie {\n    *margin-left: -7px; // 4\n  }\n}\n\n// 1. Correct font family not being inherited in all browsers.\n// 2. Corrects font size not being inherited in all browsers\n// 3. Addresses margins set differently in IE6/7, FF3+, S5, Chrome\n// 4. Improves appearance and consistency in all browsers\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit; // 1\n  font-size: 100%; // 2\n  margin: 0; // 3\n  vertical-align: baseline; // 4\n  @if $legacy_support_for_ie {\n    *vertical-align: middle; // 4\n  }\n}\n\n// Addresses FF3/4 setting line-height on 'input' using !important in the UA stylesheet\n\nbutton,\ninput {\n  line-height: normal;\n}\n\n// Address inconsistent `text-transform` inheritance for `button` and `select`.\n// All other form control elements do not inherit `text-transform` values.\n// Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\n// Correct `select` style inheritance in Firefox 4+ and Opera.\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n// 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n//    and `video` controls\n// 2. Corrects inability to style clickable 'input' types in iOS\n// 3. Improves usability and consistency of cursor style between image-type\n//    'input' and others\n// 4. Removes inner spacing in IE7 without affecting normal text inputs\n//    Known issue: inner spacing remains in IE6\n\nbutton,\nhtml input[type=\"button\"], // 1\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; // 2\n  cursor: pointer; // 3\n  @if $legacy_support_for_ie {\n    *overflow: visible; // 4\n  }\n}\n\n// Re-set default cursor for disabled elements\n\nbutton[disabled],\ninput[disabled] {\n  cursor: default;\n}\n\n// Removes inner padding and border in FF3+\n// www.sitepen.com/blog/2008/05/14/the-devils-in-the-details-fixing-dojos-toolbar-buttons/\n\nbutton,\ninput {\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n// 1. Removes default vertical scrollbar in IE6/7/8/9\n// 2. Improves readability and alignment in all browsers\n\ntextarea {\n  overflow: auto; // 1\n  vertical-align: top; // 2\n}\n\n// =============================================================================\n// Tables\n// =============================================================================\n\n// Remove most spacing between table cells\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  // 1. Addresses appearance set to searchfield in S5, Chrome\n  // 2. Addresses box-sizing set to border-box in S5, Chrome (include -moz to future-proof)\n  &[type=\"search\"] {\n    -webkit-appearance: textfield; // 1\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; // 2\n    box-sizing: content-box;\n\n    // Remove inner padding and search cancel button in Safari 5 and Chrome\n    // on OS X.\n    &::-webkit-search-cancel-button,\n    &::-webkit-search-decoration {\n      -webkit-appearance: none;\n    }\n  }\n\n  // 1. Address box sizing set to `content-box` in IE 8/9/10.\n  // 2. Remove excess padding in IE 8/9/10.\n  // 3. Removes excess padding in IE7\n  //    Known issue: excess padding remains in IE6\n  &[type=\"checkbox\"],\n  &[type=\"radio\"] {\n    box-sizing: border-box; // 1\n    padding: 0; // 2\n    @if $legacy_support_for_ie {\n      *height: 13px; // 3\n      *width: 13px; // 3\n    }\n  }\n}\n","/// Colors\n/// @type Color\n$text-dark-color: #403f3d !default;\n\n/// @type Color\n$text-light-color: #e1d4c9 !default;\n\n/// @type Color\n$text-accent-color: #b0907a !default;\n\n/// @type Color\n$bg-body-color: #e1d4c9 !default;\n\n/// @type Color\n$bg-container-color: #665f55 !default;\n\n/// @type Color\n$bg-backdrop-color: rgba(64, 63, 61, 0.8) !default;\n\n/// @type Color\n$border-light-color: #c1b6ad !default;\n\n/// @type Color\n$border-dark-color: #665f55 !default;\n\n/// Container's maximum width\n/// @type Length\n$max-width: 1440px !default;\n\n/// Container's minimum width\n/// @type Length\n$min-width: 380px !default;\n\n/// Background image\n$background-img: \"assets/images/premium-coffe_background.jpeg\";\n","html {\n  scroll-behavior: smooth;\n}\n\nbody {\n  overflow-x: hidden;\n}\n\n.hidden {\n  position: absolute;\n  left: -99999em;\n  width: 1px;\n  height: 1px;\n}\n\n.hide-for-mobile {\n  @include breakpoint-down(adjusted-medium) {\n    display: none !important;\n  }\n}\n\n.hide-for-desktop {\n  @include breakpoint-up(adjusted-medium) {\n    display: none !important;\n  }\n}\n\n.hide-for-phones {\n  @include breakpoint-down(small) {\n    display: none !important;\n  }\n}\n\n// Main content container\n.container {\n  max-width: $max-width;\n  margin: 0 auto;\n  padding: 20px 0 40px;\n  width: 100%;\n}\n\nh2 {\n  margin: 0;\n}\n\n.section-visible {\n  display: block;\n  padding: 0 40px 100px 40px;\n  @include breakpoint-down(small) {\n    padding: 0 16px 100px 16px;\n  }\n}\n\n.section-hidden {\n  display: none;\n}\n\nli {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.flex {\n  display: flex;\n\n  &-fd-row {\n    flex-direction: row;\n  }\n  &-fd-column {\n    flex-direction: column;\n  }\n  &-fw-wrap {\n    flex-wrap: wrap;\n  }\n  &-jc-center {\n    justify-content: center;\n  }\n  &-jc-start {\n    justify-content: flex-start;\n  }\n  &-jc-space-between {\n    justify-content: space-between;\n  }\n  &-ai-center {\n    align-items: center;\n  }\n  &-as-stretch {\n    align-self: stretch;\n  }\n}\n\n.highlight {\n  color: $text-accent-color;\n  font-style: italic;\n}\n\n.small-text {\n  font-size: 0.625rem;\n  font-weight: 600;\n  line-height: 140%;\n}\n\n.title {\n  font-size: 3.75rem;\n  font-weight: 600;\n  line-height: 125%;\n\n  @include breakpoint-down(small) {\n    font-size: 2rem;\n  }\n}\n","@media (min-width: $min-width) {\n}\n\n/// Breakpoints map\n$breakpoints-up: (\n  \"adjusted-medium\": 769px,\n  \"medium\": 992px,\n  \"large\": 1200px,\n  \"huge\": 1440px,\n) !default;\n\n$breakpoints-down: (\n  \"adjusted-small\": 381px,\n  \"small\": 576px,\n  \"adjusted-medium\": 769px,\n  \"medium\": 992px,\n  \"large\": 1200px,\n) !default;\n\n@mixin breakpoint-up($size) {\n  @media (min-width: map-get($breakpoints-up, $size)) {\n    @content;\n  }\n}\n\n@mixin breakpoint-down($size) {\n  @media (max-width: map-get($breakpoints-down, $size)) {\n    @content;\n  }\n}\n",".about_title {\n  margin-block-start: 0;\n  margin-block-end: 0;\n\n  @include breakpoint-down(medium) {\n    margin-bottom: 40px;\n  }\n}\n\n.about_fotos_container {\n  gap: 40px;\n\n  @include breakpoint-down(medium) {\n    flex-direction: column;\n  }\n\n  .about-item_column {\n    flex: 1;\n    box-sizing: border-box;\n    .about-item_image {\n      border-radius: 20px;\n      margin-top: 38px;\n      overflow: hidden;\n\n      @include breakpoint-down(medium) {\n        height: 590px;\n        margin-top: 0;\n      }\n      @include breakpoint-down(small) {\n      }\n\n      img {\n        width: 100%;\n        object-fit: cover;\n        transform: scale(1.2);\n        transition: transform 0.6s ease;\n        @include breakpoint-down(small) {\n          width: max-content;\n          margin-left: 50%;\n          transform: translateX(-50%);\n        }\n      }\n      &:hover img {\n        transform: scale(1);\n        transition: transform 0.6s ease;\n      }\n    }\n  }\n}\n#image3 {\n  height: 430px;\n}\n\n#second-image,\n#third-image {\n  @include breakpoint-down(medium) {\n    display: none;\n  }\n}\n",".header {\n  padding: 0 40px 20px 40px;\n\n  @include breakpoint-down(small) {\n    padding: 0 16px 20px 16px;\n  }\n\n  &__nav {\n    a {\n      position: relative;\n      text-decoration: none;\n      font-style: normal;\n      font-weight: 600;\n      line-height: 50%;\n      color: $text-dark-color;\n    }\n  }\n  &__links {\n    padding: 0 0;\n    gap: 40px;\n    margin-top: 12px;\n    margin-left: 8px;\n\n    a::after {\n      content: \"\";\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 2px;\n      background: $text-dark-color;\n      transform: scaleX(0);\n      transform-origin: 50% 50%;\n      transition: transform 350ms ease;\n    }\n\n    a:hover::after {\n      transform: scaleX(1);\n      transform-origin: 50% 50%;\n    }\n  }\n  &__menu {\n    padding-right: 30px;\n    margin-bottom: 4px;\n  }\n}\n",".footer {\n  margin: 0 40px;\n  padding: 100px;\n  border-radius: 40px;\n  background: $bg-container-color;\n  color: $text-light-color;\n  gap: 100px;\n\n  @include breakpoint-down(medium) {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 100px 60px;\n    gap: 100px;\n  }\n  @include breakpoint-down(small) {\n    margin: 0 16px;\n    padding: 60px 16px;\n    gap: 35px;\n  }\n\n  .footer__title {\n    margin-bottom: 32px;\n    max-width: 530px;\n    @include breakpoint-down(medium) {\n      margin-bottom: 40px;\n    }\n  }\n\n  .footer-social {\n    flex-basis: 50% !important;\n  }\n\n  .footer-icons__container {\n    gap: 12px;\n  }\n\n  .footer-contacts__title {\n    margin: 0;\n    font-size: 1.5rem;\n    font-weight: 600;\n    line-height: 125%;\n  }\n\n  .footer__list {\n    padding: 0;\n  }\n\n  .footer__item {\n    position: relative;\n    padding: 20px 0 0;\n    border-bottom: 2px solid transparent;\n    img {\n      padding-right: 4px;\n    }\n    a {\n      text-decoration: none;\n      color: $text-light-color;\n      &::after {\n        content: \"\";\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 70%;\n        height: 2px;\n        background: $text-light-color;\n        transform: scaleX(0);\n        transform-origin: 50% 50%;\n        transition: transform 450ms ease;\n      }\n\n      &:hover::after {\n        transform: scaleX(1);\n        transform-origin: 50% 50%;\n      }\n    }\n  }\n}\n",".start-screen {\n  position: relative;\n  &_background {\n    position: absolute;\n    width: 100%;\n    height: 644px;\n    object-fit: cover;\n    border-radius: 40px;\n    z-index: -1;\n\n    @include breakpoint-down(adjusted-medium) {\n      height: 100%;\n    }\n  }\n  &_content {\n    padding: 100px 100px;\n    max-width: 530px;\n    color: $text-light-color;\n\n    @include breakpoint-down(large) {\n      padding: 100px 60px;\n    }\n    @include breakpoint-down(small) {\n      padding: 60px 16px;\n    }\n\n    .start-screen_title {\n      font-size: 4.5rem;\n      font-style: normal;\n      font-weight: 600;\n      line-height: 106%;\n\n      @include breakpoint-down(small) {\n        font-size: 2.625rem;\n        line-height: 115%;\n      }\n    }\n    .start-screen_subtitle {\n      font-weight: 400;\n      line-height: 150%;\n      padding: 23px 0 44px;\n    }\n  }\n}\n","#favcoffee {\n  position: relative;\n  height: 50rem;\n\n  @include breakpoint-down(medium) {\n    height: 56rem;\n  }\n  @include breakpoint-down(small) {\n    height: 40rem;\n  }\n}\n\n.favcoffee_title {\n  text-align: center;\n}\n",".mobile-app_container {\n  gap: 100px;\n\n  @include breakpoint-down(large) {\n    flex-direction: column;\n    gap: 90px;\n  }\n  @include breakpoint-down(small) {\n    gap: 30px;\n  }\n\n  .mobile-app_offer {\n    gap: 40px;\n    margin-bottom: 12px;\n    .mobile-app_title {\n      margin-block-start: 0;\n      margin-block-end: 0;\n      padding-top: 0px;\n    }\n    .mobile-app_subtitle {\n      font-weight: 400;\n      line-height: 150%;\n      padding-top: 0px;\n      margin: 0;\n    }\n    .mobile-app_buttons {\n      gap: 20px;\n      padding-top: 0px;\n\n      @include breakpoint-down(small) {\n        flex-direction: column;\n      }\n    }\n  }\n\n  .mobile-app_screens {\n    img {\n      @include breakpoint-down(small) {\n        width: 348px;\n      }\n    }\n  }\n}\n",".menu_card-container {\n  gap: 37px;\n\n  @include breakpoint-down(adjusted-medium) {\n    padding-bottom: 40px;\n  }\n}\n\n.menu_title {\n  margin: 0 290px;\n  text-align: center;\n\n  @include breakpoint-down(large) {\n    margin: 0;\n  }\n}\n\n.menu_tabs {\n  gap: 16px;\n  padding: 40px 0;\n}\n\n.menu_card {\n  width: 310px;\n  height: 467px;\n  flex-shrink: 0;\n  padding-bottom: 40px;\n  border-radius: 40px;\n  border: 1px solid $border-light-color;\n  &_img {\n    border-radius: 40px;\n    overflow: hidden;\n  }\n  img {\n    width: 100%;\n    object-fit: cover;\n    transform: scale(1.1);\n    transition: transform 0.6s ease;\n  }\n  &:hover img {\n    transform: scale(1);\n    transition: transform 0.6s ease;\n  }\n  .menu_card_content {\n    position: relative;\n    padding: 20px;\n    .menu_card_title {\n      font-size: 1.5rem;\n      font-weight: 600;\n      line-height: 110%;\n      margin: 0;\n    }\n    .menu_card_description {\n      line-height: 150%;\n      margin-top: 12px;\n      margin-bottom: 0;\n    }\n    .menu_card_price {\n      position: absolute;\n      top: 120px;\n      left: 20px;\n      font-size: 1.5rem;\n      font-weight: 600;\n      line-height: 125%;\n    }\n  }\n}\n\n#coffee5,\n#coffee6,\n#coffee7,\n#coffee8 {\n  @include breakpoint-down(medium) {\n    display: none;\n  }\n}\n","// All styles related to the button component\n.btn-primary {\n  cursor: pointer;\n  position: relative;\n  width: 200px;\n  padding: 22px 78px;\n  border-radius: 100px;\n  background: $bg-body-color;\n  color: $text-dark-color;\n  text-decoration: none;\n  font-weight: 600;\n  line-height: 150%;\n  .start-screen_icon {\n    position: absolute;\n    right: 26%;\n    top: 50%;\n    transform: translateY(-50%);\n    display: none;\n\n    @include breakpoint-down(adjusted-medium) {\n      display: block;\n    }\n  }\n  &:hover .start-screen_icon {\n    display: block;\n  }\n}\n\n.btn__arrow {\n  cursor: pointer;\n  border: 1px solid $border-dark-color;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  @media (hover: hover) {\n    &:hover {\n      background-color: $bg-container-color;\n      color: $text-light-color;\n      transition: background-color 0.5s ease-in-out;\n    }\n  }\n}\n\n.btn__refresh {\n  @extend .btn__arrow;\n  font-size: 1.4rem;\n  font-weight: 200;\n  margin: 0 auto;\n}\n\n.btn-app-store,\n.btn-google-play {\n  cursor: pointer;\n  width: 160px;\n  padding: 8px 19px;\n  align-items: center;\n  border: 1px solid $border-dark-color;\n  color: $text-dark-color;\n  text-decoration: none;\n  font-weight: 600;\n  line-height: 140%;\n  border-radius: 100px;\n  .btn_icon {\n    width: 36px;\n    height: 36px;\n    margin-right: 8px;\n    fill: $text-dark-color;\n  }\n  @media (hover: hover) {\n    &:hover {\n      background-color: $bg-container-color;\n      color: $text-light-color;\n      transition: background-color 0.6s ease-in-out;\n    }\n    &:hover .btn_icon {\n      fill: $text-light-color;\n    }\n  }\n}\n\n.btn-icon-light {\n  cursor: pointer;\n  @extend .btn__arrow;\n  border-color: $border-light-color;\n  @media (hover: hover) {\n    &:hover {\n      background-color: $bg-body-color;\n      color: $text-dark-color;\n      transition: background-color 0.5s ease-in-out;\n    }\n    &:hover img {\n      filter: invert(1);\n    }\n  }\n}\n\n.tab-item {\n  cursor: pointer;\n  display: inline-flex;\n  flex-direction: row-reverse;\n  padding: 8px 16px 8px 8px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-radius: 100px;\n  border: 1px solid $border-light-color;\n  text-decoration: none;\n  font-weight: 600;\n  line-height: 150%;\n  color: $text-dark-color;\n  background-color: $bg-body-color;\n  user-select: none;\n\n  img {\n    border-radius: 100px;\n    border: 1px solid $border-light-color;\n    padding: 3px;\n    background-color: $border-light-color;\n  }\n\n  &:hover {\n    background-color: $border-dark-color;\n    color: $bg-body-color;\n    transition: background-color 0.5s ease-in-out;\n  }\n  &-active {\n    background-color: $border-dark-color;\n    color: $bg-body-color;\n    // pointer-events: none;\n  }\n  &-inactive {\n    background-color: #fff;\n  }\n}\n\n.link-with-icon {\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  background-color: $bg-body-color;\n  border: 1px solid transparent;\n  font-weight: 600;\n  line-height: 150%;\n  color: $text-dark-color;\n\n  &::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background: $text-dark-color;\n    transform: scaleX(0);\n    transform-origin: 50% 50%;\n    transition: transform 350ms ease;\n  }\n\n  &:hover::after {\n    transform: scaleX(1);\n    transform-origin: 50% 50%;\n  }\n}\n\n.icon {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.header__burger {\n  display: flex;\n  width: 44px;\n  height: 44px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  border: 1px solid $border-dark-color;\n  border-radius: 50%;\n  position: relative;\n  cursor: pointer;\n\n  & span {\n    display: block;\n    position: absolute;\n    transition: transform 0.3s ease;\n    width: 16px;\n    height: 2px;\n    background-color: $text-dark-color;\n    transition: transform 2s ease-in-out, top 2s ease-in-out,\n      left 2s ease-in-out;\n  }\n  & span:first-child {\n    top: 4px;\n    left: -8px;\n  }\n\n  & span:last-child {\n    bottom: 4px;\n    left: -8px;\n  }\n}\n",".carousel {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  text-align: center;\n  transform: translate(-50%, -50%);\n\n  .slides-wrapper {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n  }\n}\n\n.slide-container {\n  display: none;\n  position: relative;\n  margin: 0 auto;\n  width: 480px;\n  overflow: hidden;\n  animation: 1s ease-in-out;\n  img {\n    max-width: 480px;\n    @include breakpoint-down(small) {\n      margin: 0 auto;\n      width: 348px;\n    }\n  }\n  .slide-content {\n    h3 {\n      font-size: 1.5rem;\n      font-style: normal;\n      font-weight: 600;\n      line-height: 125%;\n      padding-top: 61px;\n      margin: 0px;\n    }\n    .slide-description {\n      text-align: center;\n      padding-top: 15px;\n      line-height: 150%;\n      margin: 0;\n    }\n    .slide-price {\n      font-size: 1.5rem;\n      font-style: normal;\n      font-weight: 600;\n      line-height: 125%;\n      padding-top: 17px;\n      margin: 0px;\n    }\n  }\n  &.active,\n  &.next {\n    display: block;\n  }\n  &.next {\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n}\n\n.horizontal-line {\n  width: 40px;\n  height: 4px;\n  background-color: $border-light-color;\n  margin: 39px 6px 0 6px;\n}\n\n.horizontal-line-active {\n  background-color: $text-dark-color;\n  animation: anim 7s ease 0s 1 normal forwards;\n}\n\n@keyframes anim {\n  0% {\n    transform: scaleX(0);\n    transform-origin: 0% 0%;\n  }\n\n  100% {\n    transform: scaleX(1);\n    transform-origin: 0% 0%;\n  }\n}\n\n.animate_to-left {\n  animation-name: scrollToLeft;\n}\n\n.animate_to-right {\n  animation-name: scrollToRight;\n  animation-direction: reverse;\n}\n\n.animate_from-left {\n  animation-name: scrollToLeft;\n  animation-direction: reverse;\n}\n\n.animate_from-right {\n  animation-name: scrollToRight;\n}\n\n@keyframes scrollToLeft {\n  from {\n    left: 0;\n  }\n  to {\n    left: -100%;\n  }\n}\n\n@keyframes scrollToRight {\n  from {\n    left: 100%;\n  }\n  to {\n    left: 0;\n  }\n}\n",".mobile {\n  &__nav {\n    position: fixed;\n    margin-top: 20px;\n    padding: 60px 0px;\n    top: 78px;\n    left: 100%;\n    width: 100%;\n    min-height: 100vh;\n    display: block;\n    z-index: 5;\n    background-color: $bg-body-color;\n    transition: 2s;\n\n    ul {\n      margin: 0;\n      padding: 0;\n      gap: 60px;\n\n      a {\n        position: relative;\n        margin-top: 40px;\n        width: 140px;\n\n        img {\n          position: absolute;\n          top: -2px;\n          width: 30%;\n          padding-left: 14px;\n        }\n      }\n    }\n    a {\n      text-decoration: none;\n      color: $text-dark-color;\n      font-size: 32px;\n      font-style: normal;\n      font-weight: 600;\n      line-height: 125%;\n    }\n\n    a::after {\n      content: \"\";\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 2px;\n      background: $text-dark-color;\n      transform: scaleX(0);\n      transform-origin: 50% 50%;\n      transition: transform 350ms ease;\n    }\n\n    @media (hover: hover) {\n      a:hover::after {\n        transform: scaleX(1);\n        transform-origin: 50% 50%;\n      }\n    }\n  }\n\n  &__nav-active {\n    left: 8px;\n  }\n\n  &__btn-active {\n    span:first-child {\n      transform: translateY(-5px) rotate(45deg);\n      transition: transform 2s ease-in-out, top 2s ease-in-out,\n        left 2s ease-in-out;\n    }\n\n    span:last-child {\n      transform: translateY(5px) rotate(-45deg);\n      transition: transform 2s ease-in-out, top 2s ease-in-out,\n        left 2s ease-in-out;\n    }\n  }\n}\n",".modal {\n  z-index: 10;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.75);\n\n  &-container {\n    position: fixed;\n    margin: 0 auto;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    max-width: 48rem;\n    padding: 1rem;\n    border-radius: 2.5rem;\n    background-color: $bg-body-color;\n  }\n\n  &-image {\n    width: 19.35rem;\n    flex-shrink: 0;\n    border-radius: 2.5rem;\n  }\n\n  &-content {\n    padding-left: 1.25rem;\n    align-items: flex-start;\n\n    p {\n      margin-top: 0;\n    }\n  }\n\n  &-title {\n    font-size: 1.5rem;\n    font-weight: 600;\n    line-height: 125%;\n    margin: 0 0 0.7rem 0;\n  }\n\n  &-description {\n    line-height: 150%;\n    margin-bottom: 1.35rem;\n  }\n\n  &-label {\n    margin-bottom: 0.6rem;\n  }\n\n  &-label-total {\n    font-size: 1.5rem;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 125%;\n    margin-top: 0;\n    margin-bottom: 0.9rem;\n  }\n\n  &-total-wrapper {\n    width: 100%;\n  }\n\n  &-line {\n    border-top: 1px solid $border-light-color;\n    padding: 0.75rem 0;\n  }\n\n  &-info-text {\n    font-size: 0.625rem;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 140%;\n  }\n\n  &-icon {\n    border-radius: 50%;\n    width: 1.5rem;\n    height: 1.5rem;\n    padding: 3px;\n    justify-content: center;\n    align-items: center;\n    background-color: $border-light-color;\n    border: 1px solid $border-light-color;\n  }\n\n  &-buttons-group {\n    gap: 0.5rem;\n    margin-bottom: 1.25rem;\n\n    button {\n      padding-right: 0.8rem;\n    }\n  }\n\n  &-info-icon {\n    padding-right: 0.5rem;\n  }\n\n  &-close-button {\n    width: 100%;\n    padding: 10px 78px;\n    justify-content: center;\n    align-items: center;\n    border-radius: 100px;\n    border: 1px solid $border-dark-color;\n    background-color: $bg-body-color;\n    margin-top: 0.8rem;\n\n    @media (hover: hover) {\n      &:hover {\n        background-color: $bg-container-color;\n        color: $text-light-color;\n        transition: background-color 0.5s ease-in-out;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 327 */
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 328 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 329 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_pin_alt_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(330);
/* harmony import */ var _assets_icons_phone_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(331);
/* harmony import */ var _assets_icons_clock_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(332);
/* harmony import */ var _assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(333);
/* harmony import */ var _assets_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(334);
/* harmony import */ var _assets_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(335);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var FooterComponent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FooterComponent, _HTMLElement);
  var _super = _createSuper(FooterComponent);
  function FooterComponent() {
    _classCallCheck(this, FooterComponent);
    return _super.apply(this, arguments);
  }
  _createClass(FooterComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n      <footer id=\"footer\" class=\"footer flex flex-jc-start flex-ai-center\">\n        <div class\"footer-social\">\n          <h2 class=\"title footer__title\">\n            Sip, Savor, Smile.<span class=\"highlight\"> It\u2019s coffee time!</span>\n          </h2>\n          <div class=\"footer-icons__container flex\">\n            <a href=\"https://twitter.com\" target=\"_blank\" class=\"btn-icon-light flex\"><img src=".concat(_assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_3__, " alt=\"Twitter\"/></a>\n            <a href=\"https://instagram.com\" target=\"_blank\" class=\"btn-icon-light flex\"><img src=").concat(_assets_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_4__, " alt=\"Instagram\"/></a>\n            <a href=\"https://facebook.com\" target=\"_blank\" class=\"btn-icon-light flex\"><img src=").concat(_assets_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_5__, " alt=\"Facebook\"/></a>\n          </div>\n        </div>\n        <div class\"footer-contacts\">\n        <h3 class=\"footer-contacts__title\">Contact us</h3>\n                <nav class=\"footer__nav\">\n                  <ul class=\"footer__list\">\n                    <li class=\"footer__item\">\n                      <a class=\"footer__link\" href=\"https://www.google.de/maps/place/Green+Moore+Rd,+Louisiana+70661,+USa\" target=\"_blank\"><img src=").concat(_assets_icons_pin_alt_svg__WEBPACK_IMPORTED_MODULE_0__, " alt=\"Location\"/>8558 Green Rd., LA</a>\n                    </li>\n                    <li class=\"footer__item\">\n                      <a class=\"footer__link\" href=\"tel:+16035550123\"><img src=").concat(_assets_icons_phone_svg__WEBPACK_IMPORTED_MODULE_1__, " alt=\"Phone\" />+1&#032;(603)&#032;555&#032;0123</a>\n                    </li>\n                    <li class=\"footer__item\">\n                    <img src=").concat(_assets_icons_clock_svg__WEBPACK_IMPORTED_MODULE_2__, " alt=\"Clock\"/>Mon-Sat: 9:00 AM \u2013 23:00 PM\n                  </li>\n                  </ul>\n                </nav></div>\n      </footer>\n      ");
    }
  }]);
  return FooterComponent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("footer-component", FooterComponent);

/***/ }),
/* 330 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/pin-alt.svg";

/***/ }),
/* 331 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/phone.svg";

/***/ }),
/* 332 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/clock.svg";

/***/ }),
/* 333 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/twitter.svg";

/***/ }),
/* 334 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/instagram.svg";

/***/ }),
/* 335 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/facebook.svg";

/***/ }),
/* 336 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createComponent: () => (/* binding */ createComponent),
/* harmony export */   createElement: () => (/* binding */ createElement)
/* harmony export */ });
/* harmony import */ var _sliderItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(337);

var TEXT_BUTTON_LEFT = "←";
var TEXT_BUTTON_RIGHT = "→";
var COUNT_ITEMS = 3;
var elementsWrapper = null;
var currentProgressBarItem = null;
var btnRight = null;
var items = new Array();
var visibleItem = null;
var isEnabled = true;
var intervalId = setInterval(simulateButtonPress, 6000);
function createComponent(favoritesJSON) {
  var sliderComponent = createElement("div", ["flex", "flex-fd-column", "carousel"]);
  elementsWrapper = createElement("div", ["slides-wrapper", "flex", "flex-jc-space-between", "flex-ai-center"]);
  var btnLeft = createElement("div", ["flex", "btn__arrow", "hide-for-phones"]);
  btnLeft.textContent = TEXT_BUTTON_LEFT;
  btnRight = createElement("div", ["flex", "btn__arrow", "hide-for-phones"]);
  btnRight.textContent = TEXT_BUTTON_RIGHT;
  favoritesJSON.forEach(function (element) {
    var sliderItem = _sliderItem__WEBPACK_IMPORTED_MODULE_0__.createComponent(element);
    items.push(sliderItem);
    elementsWrapper.append(sliderItem);
  });
  var progressBarWrapper = createElement("div", ["flex", "flex-fd-row", "flex-jc-center"]);
  for (var i = 0; i < favoritesJSON.length; i += 1) {
    var progressBarItem = createElement("span", ["horizontal-line", "order:" + (i + 1)]);
    progressBarWrapper.append(progressBarItem);
  }
  visibleItem = items[0];
  visibleItem.classList.add("active");
  currentProgressBarItem = progressBarWrapper.firstElementChild;
  currentProgressBarItem.classList.add("horizontal-line-active");
  elementsWrapper.append(btnLeft);
  for (var _i = 0; _i < favoritesJSON.length; _i += 1) {
    elementsWrapper.append(items[_i]);
  }
  elementsWrapper.append(btnRight);
  sliderComponent.append(elementsWrapper);
  sliderComponent.append(progressBarWrapper);
  btnLeft.addEventListener("click", btnLeftClickHandler);
  btnRight.addEventListener("click", btnRightClickHandler);
  return sliderComponent;
}
function btnLeftClickHandler() {
  if (isEnabled) {
    var index = items.indexOf(visibleItem);
    hideVisibleItem("animate_to-right");
    currentProgressBarItem.classList.remove("horizontal-line-active");
    visibleItem = index > 0 ? items[index - 1] : items[COUNT_ITEMS - 1];
    showItem("animate_from-left");
    currentProgressBarItem = index > 0 ? document.querySelectorAll(".horizontal-line")[index - 1] : document.querySelectorAll(".horizontal-line")[COUNT_ITEMS - 1];
    currentProgressBarItem.classList.add("horizontal-line-active");
  }
}
function btnRightClickHandler() {
  if (isEnabled) {
    var index = items.indexOf(visibleItem);
    hideVisibleItem("animate_to-left");
    currentProgressBarItem.classList.remove("horizontal-line-active");
    visibleItem = index < COUNT_ITEMS - 1 ? items[index + 1] : items[0];
    showItem("animate_from-right");
    currentProgressBarItem = index < COUNT_ITEMS - 1 ? document.querySelectorAll(".horizontal-line")[index + 1] : document.querySelectorAll(".horizontal-line")[0];
    currentProgressBarItem.classList.add("horizontal-line-active");
  }
}
function hideVisibleItem(direction) {
  isEnabled = false;
  visibleItem.classList.add(direction);
  visibleItem.addEventListener("animationend", function () {
    this.classList.remove("active", direction);
  });
}
function showItem(direction) {
  visibleItem.classList.add("next", direction);
  visibleItem.addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnabled = true;
  });
}
function simulateButtonPress() {
  var clickEvent = new Event("click");
  btnRight.dispatchEvent(clickEvent);
}

// const slideContainer = document.querySelector(".slide-container");
// slideContainer.addEventListener("mouseover", function () {
//   clearInterval(intervalId);
// });

// visibleItem.addEventListener("mouseout", function () {
//   intervalId = setInterval(simulateButtonPress, 7000);
// });

function createElement(tagName, className) {
  var elem = document.createElement(tagName);
  for (var i = 0; i < className.length; i++) {
    elem.classList.add(className[i]);
  }
  return elem;
}


/***/ }),
/* 337 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createComponent: () => (/* binding */ createComponent)
/* harmony export */ });
/* harmony import */ var _sliderComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);

function createComponent(favorite) {
  var slideContainer = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["slide-container", "flex", "flex-fd-column"]);
  var imgElement = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", []);
  imgElement.src = favorite.img;
  imgElement.alt = favorite.name;
  var slideContent = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["slide-content", "flex", "flex-fd-column", "flex-ai-center"]);
  var title = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", []);
  title.textContent = favorite.name;
  var description = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["slide-description"]);
  description.textContent = favorite.description;
  var price = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["slide-price"]);
  price.textContent = favorite.price;
  slideContainer.append(imgElement);
  slideContent.append(title);
  slideContent.append(description);
  slideContent.append(price);
  slideContainer.append(slideContent);
  return slideContainer;
}


/***/ }),
/* 338 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuComponent: () => (/* binding */ createMenuComponent),
/* harmony export */   refreshBtnClickHandler: () => (/* binding */ refreshBtnClickHandler)
/* harmony export */ });
/* harmony import */ var _menuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(339);
/* harmony import */ var _sliderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(336);
/* harmony import */ var _tabsComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(340);
/* harmony import */ var _modalComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(365);




var menuItems = new Array();
var refreshBtn = null;
var TEXT_BUTTON_REFRESH = "↻";
function createMenuComponent(productsJSON) {
  var menuComponent = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", ["menu-items_container"]);
  menuComponent.setAttribute("id", "menuComponent");
  var menuItemContainer = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", ["menu_card-container", "flex", "flex-fw-wrap", "flex-jc-center"]);
  productsJSON.forEach(function (element) {
    var menuItem = _menuItem__WEBPACK_IMPORTED_MODULE_0__.createComponent(element);
    menuItems.push(menuItem);
    menuItemContainer.append(menuItem);
    menuItem.addEventListener("click", function () {
      menuItemClickHandler(event);
    });
  });
  refreshBtn = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", ["flex", "btn__refresh", "hide-for-desktop"]);
  refreshBtn.textContent = TEXT_BUTTON_REFRESH;
  menuComponent.append(menuItemContainer);
  menuComponent.append(refreshBtn);
  refreshBtn.addEventListener("click", refreshBtnClickHandler);
  return menuComponent;
}
function refreshBtnClickHandler() {
  (0,_tabsComponent__WEBPACK_IMPORTED_MODULE_2__.showAllCardsFromCategory)();
  refreshBtn.classList.add("hide-for-mobile");
}
function menuItemClickHandler(event) {
  var modalComponent = (0,_modalComponent__WEBPACK_IMPORTED_MODULE_3__.createModalComponent)(event.currentTarget.id);
  var main = document.getElementById("main");
  main.append(modalComponent);
}


/***/ }),
/* 339 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createComponent: () => (/* binding */ createComponent)
/* harmony export */ });
/* harmony import */ var _sliderComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);

function createComponent(product) {
  var menuCard = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["menu_card", "flex", "flex-fd-column", "flex-jc-start"]);
  menuCard.setAttribute("id", product.name);
  var imgWrapper = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["menu_card_img"]);
  var img = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", []);
  img.src = product.img;
  img.alt = product.name;
  var content = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["menu_card_content"]);
  var title = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", ["menu_card_title"]);
  title.textContent = product.name;
  var description = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["menu_card_description"]);
  description.textContent = product.description;
  var price = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["menu_card_price"]);
  price.textContent = "$" + product.price;
  imgWrapper.append(img);
  menuCard.append(imgWrapper);
  menuCard.append(content);
  content.append(title);
  content.append(description);
  content.append(price);
  return menuCard;
}


/***/ }),
/* 340 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cardsToShow: () => (/* binding */ cardsToShow),
/* harmony export */   createTabsComponent: () => (/* binding */ createTabsComponent),
/* harmony export */   showAllCardsFromCategory: () => (/* binding */ showAllCardsFromCategory)
/* harmony export */ });
/* harmony import */ var _sliderComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _assets_icons_coffee_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(341);
/* harmony import */ var _assets_icons_tea_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(342);
/* harmony import */ var _assets_icons_dessert_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(343);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(344);
/* harmony import */ var _menuComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(338);







var cardsToShow = getCardsToShow("coffee");
var currentProductsCategory = "coffee";
var menuTabs = null;
function createTabsComponent() {
  menuTabs = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["menu_tabs", "flex", "flex-jc-center"]);
  var coffeeBtn = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", ["tab-item", "tab-item-active", "flex"]);
  coffeeBtn.textContent = "Coffee";
  var coffeeImg = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", []);
  coffeeImg.src = _assets_icons_coffee_svg__WEBPACK_IMPORTED_MODULE_1__;
  coffeeImg.alt = "Coffee";
  coffeeBtn.append(coffeeImg);
  var teaBtn = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", ["tab-item", "flex"]);
  teaBtn.textContent = "Tea";
  var teaImg = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", []);
  teaImg.src = _assets_icons_tea_svg__WEBPACK_IMPORTED_MODULE_2__;
  teaImg.alt = "Tea";
  teaBtn.append(teaImg);
  var dessertBtn = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", ["tab-item", "flex"]);
  dessertBtn.textContent = "Dessert";
  var dessertImg = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", []);
  dessertImg.src = _assets_icons_dessert_svg__WEBPACK_IMPORTED_MODULE_3__;
  dessertImg.alt = "Dessert";
  dessertBtn.append(dessertImg);
  menuTabs.append(coffeeBtn);
  menuTabs.append(teaBtn);
  menuTabs.append(dessertBtn);
  coffeeBtn.addEventListener("click", function () {
    menuBtnClickHandler(event, "coffee");
  });
  teaBtn.addEventListener("click", function () {
    menuBtnClickHandler(event, "tea");
    (0,_menuComponent__WEBPACK_IMPORTED_MODULE_5__.refreshBtnClickHandler)();
  });
  dessertBtn.addEventListener("click", function () {
    menuBtnClickHandler(event, "dessert");
  });
  return menuTabs;
}
function menuBtnClickHandler(event, productsCategory) {
  currentProductsCategory = productsCategory;
  var buttons = menuTabs.children;
  var cards = getCardsToShow(productsCategory);
  updateSectionMenu(cards);
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("tab-item-active");
  }
  event.currentTarget.classList.add("tab-item-active");
}
function getCardsToShow(productsCategory) {
  var screenWidth = window.innerWidth;
  var cards = _products__WEBPACK_IMPORTED_MODULE_4__.productsJSON.filter(function (item) {
    return item.category === productsCategory;
  });
  if (screenWidth <= 768) {
    return cards.slice(0, 4);
  }
  return cards;
}
function showAllCardsFromCategory() {
  var cards = _products__WEBPACK_IMPORTED_MODULE_4__.productsJSON.filter(function (item) {
    return item.category === currentProductsCategory;
  });
  updateSectionMenu(cards);
}
window.addEventListener("resize", handleWindowResizeForProductCategories);
function handleWindowResizeForProductCategories() {
  var cards = getCardsToShow(currentProductsCategory);
  updateSectionMenu(cards);
}
function updateSectionMenu(cards) {
  document.getElementById("menuComponent").remove();
  var menu = (0,_menuComponent__WEBPACK_IMPORTED_MODULE_5__.createMenuComponent)(cards);
  var sectionMenu = document.getElementById("menu");
  sectionMenu.append(menu);
}


/***/ }),
/* 341 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/coffee.svg";

/***/ }),
/* 342 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/tea.svg";

/***/ }),
/* 343 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dessert.svg";

/***/ }),
/* 344 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   productsJSON: () => (/* binding */ productsJSON)
/* harmony export */ });
/* harmony import */ var _assets_images_coffee_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(345);
/* harmony import */ var _assets_images_coffee_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(346);
/* harmony import */ var _assets_images_coffee_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(347);
/* harmony import */ var _assets_images_coffee_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(348);
/* harmony import */ var _assets_images_coffee_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(349);
/* harmony import */ var _assets_images_coffee_6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(350);
/* harmony import */ var _assets_images_coffee_7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(351);
/* harmony import */ var _assets_images_coffee_8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(352);
/* harmony import */ var _assets_images_tea_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(353);
/* harmony import */ var _assets_images_tea_2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(354);
/* harmony import */ var _assets_images_tea_3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(355);
/* harmony import */ var _assets_images_tea_4_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(356);
/* harmony import */ var _assets_images_dessert_1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(357);
/* harmony import */ var _assets_images_dessert_2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(358);
/* harmony import */ var _assets_images_dessert_3_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(359);
/* harmony import */ var _assets_images_dessert_4_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(360);
/* harmony import */ var _assets_images_dessert_5_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(361);
/* harmony import */ var _assets_images_dessert_6_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(362);
/* harmony import */ var _assets_images_dessert_7_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(363);
/* harmony import */ var _assets_images_dessert_8_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(364);




















var productsJSON = [{
  img: _assets_images_coffee_1_png__WEBPACK_IMPORTED_MODULE_0__,
  name: "Irish coffee",
  description: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
  price: "7.00",
  category: "coffee",
  sizes: {
    s: {
      size: "200 ml",
      "add-price": "0.00"
    },
    m: {
      size: "300 ml",
      "add-price": "0.50"
    },
    l: {
      size: "400 ml",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Sugar",
    "add-price": "0.50"
  }, {
    name: "Cinnamon",
    "add-price": "0.50"
  }, {
    name: "Syrup",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_coffee_2_png__WEBPACK_IMPORTED_MODULE_1__,
  name: "Kahlua coffee",
  description: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
  price: "7.00",
  category: "coffee",
  sizes: {
    s: {
      size: "200 ml",
      "add-price": "0.00"
    },
    m: {
      size: "300 ml",
      "add-price": "0.50"
    },
    l: {
      size: "400 ml",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Sugar",
    "add-price": "0.50"
  }, {
    name: "Cinnamon",
    "add-price": "0.50"
  }, {
    name: "Syrup",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_coffee_3_png__WEBPACK_IMPORTED_MODULE_2__,
  name: "Honey raf",
  description: "Espresso with frothed milk, cream and aromatic honey",
  price: "5.50",
  category: "coffee",
  sizes: {
    s: {
      size: "200 ml",
      "add-price": "0.00"
    },
    m: {
      size: "300 ml",
      "add-price": "0.50"
    },
    l: {
      size: "400 ml",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Sugar",
    "add-price": "0.50"
  }, {
    name: "Cinnamon",
    "add-price": "0.50"
  }, {
    name: "Syrup",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_coffee_4_png__WEBPACK_IMPORTED_MODULE_3__,
  name: "Ice cappuccino",
  description: "Cappuccino with soft thick foam in summer version with ice",
  price: "5.00",
  category: "coffee",
  sizes: {
    s: {
      size: "200 ml",
      "add-price": "0.00"
    },
    m: {
      size: "300 ml",
      "add-price": "0.50"
    },
    l: {
      size: "400 ml",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Sugar",
    "add-price": "0.50"
  }, {
    name: "Cinnamon",
    "add-price": "0.50"
  }, {
    name: "Syrup",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_coffee_5_png__WEBPACK_IMPORTED_MODULE_4__,
  name: "Espresso",
  description: "Classic black coffee",
  price: "4.50",
  category: "coffee",
  sizes: {
    s: {
      size: "200 ml",
      "add-price": "0.00"
    },
    m: {
      size: "300 ml",
      "add-price": "0.50"
    },
    l: {
      size: "400 ml",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Sugar",
    "add-price": "0.50"
  }, {
    name: "Cinnamon",
    "add-price": "0.50"
  }, {
    name: "Syrup",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_coffee_6_png__WEBPACK_IMPORTED_MODULE_5__,
  name: "Latte",
  description: "Espresso coffee with the addition of steamed milk and dense milk foam",
  price: "5.50",
  category: "coffee",
  sizes: {
    s: {
      size: "200 ml",
      "add-price": "0.00"
    },
    m: {
      size: "300 ml",
      "add-price": "0.50"
    },
    l: {
      size: "400 ml",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Sugar",
    "add-price": "0.50"
  }, {
    name: "Cinnamon",
    "add-price": "0.50"
  }, {
    name: "Syrup",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_coffee_7_png__WEBPACK_IMPORTED_MODULE_6__,
  name: "Latte macchiato",
  description: "Espresso with frothed milk and chocolate",
  price: "5.50",
  category: "coffee",
  sizes: {
    s: {
      size: "200 ml",
      "add-price": "0.00"
    },
    m: {
      size: "300 ml",
      "add-price": "0.50"
    },
    l: {
      size: "400 ml",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Sugar",
    "add-price": "0.50"
  }, {
    name: "Cinnamon",
    "add-price": "0.50"
  }, {
    name: "Syrup",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_coffee_8_png__WEBPACK_IMPORTED_MODULE_7__,
  name: "Coffee with cognac",
  description: "Fragrant black coffee with cognac and whipped cream",
  price: "6.50",
  category: "coffee",
  sizes: {
    s: {
      size: "200 ml",
      "add-price": "0.00"
    },
    m: {
      size: "300 ml",
      "add-price": "0.50"
    },
    l: {
      size: "400 ml",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Sugar",
    "add-price": "0.50"
  }, {
    name: "Cinnamon",
    "add-price": "0.50"
  }, {
    name: "Syrup",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_tea_1_png__WEBPACK_IMPORTED_MODULE_8__,
  name: "Moroccan",
  description: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
  price: "4.50",
  category: "tea",
  sizes: {
    s: {
      size: "200 ml",
      "add-price": "0.00"
    },
    m: {
      size: "300 ml",
      "add-price": "0.50"
    },
    l: {
      size: "400 ml",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Sugar",
    "add-price": "0.50"
  }, {
    name: "Lemon",
    "add-price": "0.50"
  }, {
    name: "Syrup",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_tea_2_png__WEBPACK_IMPORTED_MODULE_9__,
  name: "Ginger",
  description: "Original black tea with fresh ginger, lemon and honey",
  price: "5.00",
  category: "tea",
  sizes: {
    s: {
      size: "200 ml",
      "add-price": "0.00"
    },
    m: {
      size: "300 ml",
      "add-price": "0.50"
    },
    l: {
      size: "400 ml",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Sugar",
    "add-price": "0.50"
  }, {
    name: "Lemon",
    "add-price": "0.50"
  }, {
    name: "Syrup",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_tea_3_png__WEBPACK_IMPORTED_MODULE_10__,
  name: "Cranberry",
  description: "Invigorating black tea with cranberry and honey",
  price: "5.00",
  category: "tea",
  sizes: {
    s: {
      size: "200 ml",
      "add-price": "0.00"
    },
    m: {
      size: "300 ml",
      "add-price": "0.50"
    },
    l: {
      size: "400 ml",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Sugar",
    "add-price": "0.50"
  }, {
    name: "Lemon",
    "add-price": "0.50"
  }, {
    name: "Syrup",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_tea_4_png__WEBPACK_IMPORTED_MODULE_11__,
  name: "Sea buckthorn",
  description: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
  price: "5.50",
  category: "tea",
  sizes: {
    s: {
      size: "200 ml",
      "add-price": "0.00"
    },
    m: {
      size: "300 ml",
      "add-price": "0.50"
    },
    l: {
      size: "400 ml",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Sugar",
    "add-price": "0.50"
  }, {
    name: "Lemon",
    "add-price": "0.50"
  }, {
    name: "Syrup",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_dessert_1_png__WEBPACK_IMPORTED_MODULE_12__,
  name: "Marble cheesecake",
  description: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
  price: "3.50",
  category: "dessert",
  sizes: {
    s: {
      size: "50 g",
      "add-price": "0.00"
    },
    m: {
      size: "100 g",
      "add-price": "0.50"
    },
    l: {
      size: "200 g",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Berries",
    "add-price": "0.50"
  }, {
    name: "Nuts",
    "add-price": "0.50"
  }, {
    name: "Jam",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_dessert_2_png__WEBPACK_IMPORTED_MODULE_13__,
  name: "Red velvet",
  description: "Layer cake with cream cheese frosting",
  price: "4.00",
  category: "dessert",
  sizes: {
    s: {
      size: "50 g",
      "add-price": "0.00"
    },
    m: {
      size: "100 g",
      "add-price": "0.50"
    },
    l: {
      size: "200 g",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Berries",
    "add-price": "0.50"
  }, {
    name: "Nuts",
    "add-price": "0.50"
  }, {
    name: "Jam",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_dessert_3_png__WEBPACK_IMPORTED_MODULE_14__,
  name: "Cheesecakes",
  description: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
  price: "4.50",
  category: "dessert",
  sizes: {
    s: {
      size: "50 g",
      "add-price": "0.00"
    },
    m: {
      size: "100 g",
      "add-price": "0.50"
    },
    l: {
      size: "200 g",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Berries",
    "add-price": "0.50"
  }, {
    name: "Nuts",
    "add-price": "0.50"
  }, {
    name: "Jam",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_dessert_4_png__WEBPACK_IMPORTED_MODULE_15__,
  name: "Creme brulee",
  description: "Delicate creamy dessert in a caramel basket with wild berries",
  price: "4.00",
  category: "dessert",
  sizes: {
    s: {
      size: "50 g",
      "add-price": "0.00"
    },
    m: {
      size: "100 g",
      "add-price": "0.50"
    },
    l: {
      size: "200 g",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Berries",
    "add-price": "0.50"
  }, {
    name: "Nuts",
    "add-price": "0.50"
  }, {
    name: "Jam",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_dessert_5_png__WEBPACK_IMPORTED_MODULE_16__,
  name: "Pancakes",
  description: "Tender pancakes with strawberry jam and fresh strawberries",
  price: "4.50",
  category: "dessert",
  sizes: {
    s: {
      size: "50 g",
      "add-price": "0.00"
    },
    m: {
      size: "100 g",
      "add-price": "0.50"
    },
    l: {
      size: "200 g",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Berries",
    "add-price": "0.50"
  }, {
    name: "Nuts",
    "add-price": "0.50"
  }, {
    name: "Jam",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_dessert_6_png__WEBPACK_IMPORTED_MODULE_17__,
  name: "Honey cake",
  description: "Classic honey cake with delicate custard",
  price: "4.50",
  category: "dessert",
  sizes: {
    s: {
      size: "50 g",
      "add-price": "0.00"
    },
    m: {
      size: "100 g",
      "add-price": "0.50"
    },
    l: {
      size: "200 g",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Berries",
    "add-price": "0.50"
  }, {
    name: "Nuts",
    "add-price": "0.50"
  }, {
    name: "Jam",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_dessert_7_png__WEBPACK_IMPORTED_MODULE_18__,
  name: "Chocolate cake",
  description: "Cake with hot chocolate filling and nuts with dried apricots",
  price: "5.50",
  category: "dessert",
  sizes: {
    s: {
      size: "50 g",
      "add-price": "0.00"
    },
    m: {
      size: "100 g",
      "add-price": "0.50"
    },
    l: {
      size: "200 g",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Berries",
    "add-price": "0.50"
  }, {
    name: "Nuts",
    "add-price": "0.50"
  }, {
    name: "Jam",
    "add-price": "0.50"
  }]
}, {
  img: _assets_images_dessert_8_png__WEBPACK_IMPORTED_MODULE_19__,
  name: "Black forest",
  description: "A combination of thin sponge cake with cherry jam and light chocolate mousse",
  price: "6.50",
  category: "dessert",
  sizes: {
    s: {
      size: "50 g",
      "add-price": "0.00"
    },
    m: {
      size: "100 g",
      "add-price": "0.50"
    },
    l: {
      size: "200 g",
      "add-price": "1.00"
    }
  },
  additives: [{
    name: "Berries",
    "add-price": "0.50"
  }, {
    name: "Nuts",
    "add-price": "0.50"
  }, {
    name: "Jam",
    "add-price": "0.50"
  }]
}];

/***/ }),
/* 345 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/coffee-1.png";

/***/ }),
/* 346 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/coffee-2.png";

/***/ }),
/* 347 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/coffee-3.png";

/***/ }),
/* 348 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/coffee-4.png";

/***/ }),
/* 349 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/coffee-5.png";

/***/ }),
/* 350 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/coffee-6.png";

/***/ }),
/* 351 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/coffee-7.png";

/***/ }),
/* 352 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/coffee-8.png";

/***/ }),
/* 353 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/tea-1.png";

/***/ }),
/* 354 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/tea-2.png";

/***/ }),
/* 355 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/tea-3.png";

/***/ }),
/* 356 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/tea-4.png";

/***/ }),
/* 357 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dessert-1.png";

/***/ }),
/* 358 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dessert-2.png";

/***/ }),
/* 359 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dessert-3.png";

/***/ }),
/* 360 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dessert-4.png";

/***/ }),
/* 361 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dessert-5.png";

/***/ }),
/* 362 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dessert-6.png";

/***/ }),
/* 363 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dessert-7.png";

/***/ }),
/* 364 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dessert-8.png";

/***/ }),
/* 365 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createModalComponent: () => (/* binding */ createModalComponent)
/* harmony export */ });
/* harmony import */ var _sliderComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(344);


var INFO_ICON = "ⓘ";
var modalSegment = null;
var total = 0;
var calculatedSizeAddOn = 0;
var calculatedAdditivesAddOn = 0;
var endPrice = 0;
var sizeBtnArr = [];
var additivesBtnArr = [];
var price = null;
function createModalComponent(id) {
  var product = _products__WEBPACK_IMPORTED_MODULE_1__.productsJSON.find(function (item) {
    return item.name === id;
  });
  total = parseFloat(product.price, 10);
  modalSegment = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", ["modal"]);
  modalSegment.setAttribute("id", "modal");
  var modalComponent = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["flex", "modal-container"]);
  var imgWrapper = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["hide-for-phones"]);
  var imgElement = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", ["modal-image"]);
  imgElement.src = product.img;
  imgElement.alt = product.name;
  var contentWrapper = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["flex", "flex-fd-column", "modal-content"]);
  var title = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", ["modal-title"]);
  title.textContent = product.name;
  var description = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["modal-description"]);
  description.textContent = product.description;
  var size = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["modal-label"]);
  size.textContent = "Size";
  var sizeWrapper = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["flex", "flex-fw-wrap", "modal-buttons-group"]);
  var sizeObj = product.sizes;
  var _loop = function _loop() {
    if (sizeObj.hasOwnProperty(objKey)) {
      var sizeBtn = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", ["tab-item", "flex"]);
      var addPrice = sizeObj[objKey]["add-price"];
      sizeBtn.textContent = sizeObj[objKey].size;
      sizeBtn.innerHTML += "<span class=\"modal-icon\">".concat(objKey.toUpperCase(), "</span>");
      sizeBtn.setAttribute("id", objKey);
      sizeWrapper.append(sizeBtn);
      if (objKey === "s") {
        sizeBtn.classList.add("tab-item-active");
      }
      sizeBtnArr.push(sizeBtn);
      sizeBtn.addEventListener("click", function () {
        calculatePriceClickHandler(event, addPrice);
      });
    }
  };
  for (var objKey in sizeObj) {
    _loop();
  }
  var additives = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["modal-label"]);
  additives.textContent = "Additives";
  var additivesWrapper = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["flex", "flex-fw-wrap", "modal-buttons-group"]);
  var _loop2 = function _loop2() {
    var additivesBtn = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", ["tab-item", "flex"]);
    var addPrice = product.additives[i]["add-price"];
    additivesBtn.setAttribute("id", i + 1);
    additivesBtn.textContent = product.additives[i].name;
    additivesBtn.innerHTML += "<span class=\"modal-icon\">".concat(i + 1, "</span>");
    additivesWrapper.append(additivesBtn);
    additivesBtnArr.push(additivesBtn);
    additivesBtn.addEventListener("click", function () {
      calculatePriceClickHandler(event, addPrice);
    });
  };
  for (var i = 0; i < product.additives.length; i += 1) {
    _loop2();
  }
  var priceWrapper = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["flex", "flex-jc-space-between", "modal-total-wrapper"]);
  var priceTotal = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", ["modal-label-total"]);
  priceTotal.textContent = "Total:";
  price = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", ["modal-label-total"]);
  price.textContent = "$" + product.price;
  var infoTextWrapper = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["flex", "modal-line"]);
  var infoIcon = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["modal-info-icon"]);
  infoIcon.textContent = INFO_ICON;
  var infoText = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["modal-info-text"]);
  infoText.textContent = "The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.";
  var closeBtn = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", ["modal-close-button"]);
  closeBtn.textContent = "Close";
  imgWrapper.append(imgElement);
  modalComponent.append(imgWrapper);
  contentWrapper.append(title);
  contentWrapper.append(description);
  contentWrapper.append(size);
  contentWrapper.append(sizeWrapper);
  contentWrapper.append(additives);
  contentWrapper.append(additivesWrapper);
  priceWrapper.append(priceTotal);
  priceWrapper.append(price);
  contentWrapper.append(priceWrapper);
  infoTextWrapper.append(infoIcon);
  infoTextWrapper.append(infoText);
  contentWrapper.append(infoTextWrapper);
  contentWrapper.append(closeBtn);
  modalComponent.append(contentWrapper);
  modalSegment.append(modalComponent);
  closeBtn.addEventListener("click", closeBtnClickHandler);
  document.querySelector("body").style.overflow = "hidden";
  modalSegment.style.display = "block";
  return modalSegment;
}
function closeBtnClickHandler() {
  modalSegment.remove();
  document.querySelector("body").style.overflow = "visible";
  calculatedSizeAddOn = 0;
  calculatedAdditivesAddOn = 0;
  endPrice = 0;
  sizeBtnArr = [];
  additivesBtnArr = [];
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalSegment) {
    closeBtnClickHandler();
  }
};
function calculatePriceClickHandler(event, addPrice) {
  var btnId = event.currentTarget.id;
  switch (btnId) {
    case "s":
    case "m":
    case "l":
      sizeBtnArr.forEach(function (btn) {
        return btn.classList.remove("tab-item-active");
      });
      event.currentTarget.classList.add("tab-item-active");
      break;
    case "1":
    case "2":
    case "3":
      event.currentTarget.classList.toggle("tab-item-active");
      calculatedAdditivesAddOn = 0;
      break;
    default:
      console.log("Error, there are no ".concat(btnId, " size or additives."));
  }
  sizeBtnArr.forEach(function (btn) {
    if (btn.classList.contains("tab-item-active") && (btnId === "s" || btnId === "m" || btnId === "l")) {
      calculatedSizeAddOn = parseFloat(addPrice);
    }
  });
  additivesBtnArr.forEach(function (btn) {
    if (btn.classList.contains("tab-item-active") && (btnId === "1" || btnId === "2" || btnId === "3")) {
      calculatedAdditivesAddOn += parseFloat(addPrice);
    }
  });
  endPrice = total + calculatedSizeAddOn + calculatedAdditivesAddOn;
  price.textContent = "$" + endPrice.toFixed(2);
}


/***/ }),
/* 366 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   favoritesJSON: () => (/* binding */ favoritesJSON)
/* harmony export */ });
/* harmony import */ var _assets_images_coffee_slider_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(367);
/* harmony import */ var _assets_images_coffee_slider_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(368);
/* harmony import */ var _assets_images_coffee_slider_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(369);



var favoritesJSON = [{
  img: _assets_images_coffee_slider_1_png__WEBPACK_IMPORTED_MODULE_0__,
  name: "S’mores Frappuccino",
  description: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
  price: "$5.50"
}, {
  img: _assets_images_coffee_slider_2_png__WEBPACK_IMPORTED_MODULE_1__,
  name: "Caramel Macchiato",
  description: "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
  price: "$5.00"
}, {
  img: _assets_images_coffee_slider_3_png__WEBPACK_IMPORTED_MODULE_2__,
  name: "Ice coffee",
  description: "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
  price: "$4.50"
}];

/***/ }),
/* 367 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/coffee-slider-1.png";

/***/ }),
/* 368 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/coffee-slider-2.png";

/***/ }),
/* 369 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/coffee-slider-3.png";

/***/ }),
/* 370 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burgerBtnClickHandler: () => (/* binding */ burgerBtnClickHandler),
/* harmony export */   createBurgerMenuComponent: () => (/* binding */ createBurgerMenuComponent)
/* harmony export */ });
/* harmony import */ var _sliderComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _assets_icons_coffee_cup_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(312);


var burgerMenuContainer = null;
function createBurgerMenuComponent() {
  burgerMenuContainer = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["mobile__nav", "hide-for-desktop"]);
  var burgerMenuNav = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", []);
  var burgerMenuList = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", ["flex", "flex-fd-column", "flex-ai-center"]);
  var burgerMenuListItem1 = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", []);
  var burgerMenuListItem2 = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", []);
  var burgerMenuListItem3 = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", []);
  var burgerMenuListItem4 = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", []);
  var burgerMenuLink1 = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", ["mobile__link"]);
  burgerMenuLink1.href = "#favcoffee";
  burgerMenuLink1.textContent = "Favorite coffee";
  burgerMenuLink1.onclick = function () {
    if (!isHomePage()) {
      toggleSections();
    }
    burgerBtnClickHandler();
  };
  var burgerMenuLink2 = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", ["mobile__link"]);
  burgerMenuLink2.href = "#about";
  burgerMenuLink2.textContent = "About";
  burgerMenuLink2.onclick = function () {
    if (!isHomePage()) {
      toggleSections();
    }
    burgerBtnClickHandler();
  };
  var burgerMenuLink3 = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", ["mobile__link"]);
  burgerMenuLink3.href = "#mobile-app";
  burgerMenuLink3.textContent = "Mobile app";
  burgerMenuLink3.onclick = function () {
    if (!isHomePage()) {
      toggleSections();
    }
    burgerBtnClickHandler();
  };
  var burgerMenuLink4 = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", ["mobile__link"]);
  burgerMenuLink4.href = "#footer";
  burgerMenuLink4.textContent = "Contact us";
  burgerMenuLink4.onclick = function () {
    if (!isHomePage()) {
      toggleSections();
    }
    burgerBtnClickHandler();
  };
  var burgerMenuLinkMenu = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", ["mobile__link"]);
  burgerMenuLinkMenu.href = "#menu";
  burgerMenuLinkMenu.textContent = "Menu";
  burgerMenuLinkMenu.setAttribute("id", "burger-menu-btn");
  var coffeeCupImg = (0,_sliderComponent__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", []);
  coffeeCupImg.src = _assets_icons_coffee_cup_svg__WEBPACK_IMPORTED_MODULE_1__;
  coffeeCupImg.alt = "Coffee Cup";
  burgerMenuLinkMenu.onclick = function () {
    burgerBtnClickHandler();
    goToMenu();
  };
  burgerMenuLinkMenu.append(coffeeCupImg);
  burgerMenuListItem1.append(burgerMenuLink1);
  burgerMenuListItem2.append(burgerMenuLink2);
  burgerMenuListItem3.append(burgerMenuLink3);
  burgerMenuListItem4.append(burgerMenuLink4);
  burgerMenuList.append(burgerMenuListItem1);
  burgerMenuList.append(burgerMenuListItem2);
  burgerMenuList.append(burgerMenuListItem3);
  burgerMenuList.append(burgerMenuListItem4);
  burgerMenuList.append(burgerMenuLinkMenu);
  burgerMenuNav.append(burgerMenuList);
  burgerMenuContainer.append(burgerMenuNav);
  return burgerMenuContainer;
}
function burgerBtnClickHandler() {
  var burgerBtn = document.getElementById("burger-link");
  burgerMenuContainer.classList.toggle("mobile__nav-active");
  burgerBtn.classList.toggle("mobile__btn-active");
  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "";
  } else {
    document.body.style.overflow = "hidden";
  }
}
function toggleSections() {
  var sections = document.getElementsByTagName("section");
  var menuButton = document.getElementById("menu-btn");
  var burgerMenuButton = document.getElementById("burger-menu-btn");
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.toggle("section-hidden");
    sections[i].classList.toggle("section-visible");
  }
  if (!isHomePage()) {
    menuButton.style["pointer-events"] = "none";
    burgerMenuButton.style["pointer-events"] = "none";
    menuButton.style["border-bottom"] = "2px solid #403f3d";
    burgerMenuButton.style["border-bottom"] = "2px solid #403f3d";
  } else if (isHomePage) {
    menuButton.style["pointer-events"] = "auto";
    burgerMenuButton.style["pointer-events"] = "auto";
    menuButton.style["border-bottom"] = "2px solid transparent";
    burgerMenuButton.style["border-bottom"] = "2px solid transparent";
  }
}
function goToMenu() {
  if (isHomePage()) {
    var burgerMenuButton = document.getElementById("burger-menu-btn");
    burgerMenuButton.style["pointer-events"] = "none";
    burgerMenuButton.style["border-bottom"] = "2px solid #403f3d";
    toggleSections();
  }
}
function isHomePage() {
  var menuSegment = document.getElementById("menu");
  var isHomePage = menuSegment.classList.contains("section-hidden");
  return isHomePage;
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(0);
/******/ 	var __webpack_exports__ = __webpack_require__(307);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.b029834ecdba399ba26f.js.map