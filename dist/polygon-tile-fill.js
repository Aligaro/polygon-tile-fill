var w = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class ce {
  constructor(t) {
    this.messageBus = t;
  }
  get id() {
    if (!this.messageBus.userId)
      throw Error("Unable to get user ID: not ready");
    return this.messageBus.userId;
  }
  getSelection() {
    return w(this, void 0, void 0, function* () {
      const { selection: t } = yield this.messageBus.sendAsync("OBR_PLAYER_GET_SELECTION", {});
      return t;
    });
  }
  select(t, e) {
    return w(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_PLAYER_SELECT", { items: t, replace: e });
    });
  }
  deselect(t) {
    return w(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_PLAYER_DESELECT", { items: t });
    });
  }
  getName() {
    return w(this, void 0, void 0, function* () {
      const { name: t } = yield this.messageBus.sendAsync("OBR_PLAYER_GET_NAME", {});
      return t;
    });
  }
  setName(t) {
    return w(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_PLAYER_SET_NAME", { name: t });
    });
  }
  getColor() {
    return w(this, void 0, void 0, function* () {
      const { color: t } = yield this.messageBus.sendAsync("OBR_PLAYER_GET_COLOR", {});
      return t;
    });
  }
  setColor(t) {
    return w(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_PLAYER_SET_COLOR", { color: t });
    });
  }
  getSyncView() {
    return w(this, void 0, void 0, function* () {
      const { syncView: t } = yield this.messageBus.sendAsync("OBR_PLAYER_GET_SYNC_VIEW", {});
      return t;
    });
  }
  setSyncView(t) {
    return w(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_PLAYER_SET_SYNC_VIEW", { syncView: t });
    });
  }
  getId() {
    return w(this, void 0, void 0, function* () {
      const { id: t } = yield this.messageBus.sendAsync("OBR_PLAYER_GET_ID", {});
      return t;
    });
  }
  getRole() {
    return w(this, void 0, void 0, function* () {
      const { role: t } = yield this.messageBus.sendAsync("OBR_PLAYER_GET_ROLE", {});
      return t;
    });
  }
  getMetadata() {
    return w(this, void 0, void 0, function* () {
      const { metadata: t } = yield this.messageBus.sendAsync("OBR_PLAYER_GET_METADATA", {});
      return t;
    });
  }
  setMetadata(t) {
    return w(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_PLAYER_SET_METADATA", { update: t });
    });
  }
  hasPermission(t) {
    return w(this, void 0, void 0, function* () {
      if ((yield this.getRole()) === "GM")
        return !0;
      const { permissions: n } = yield this.messageBus.sendAsync("OBR_ROOM_GET_PERMISSIONS", {});
      return n.indexOf(t) > -1;
    });
  }
  getConnectionId() {
    return w(this, void 0, void 0, function* () {
      const { connectionId: t } = yield this.messageBus.sendAsync("OBR_PLAYER_GET_CONNECTION_ID", {});
      return t;
    });
  }
  onChange(t) {
    const e = (n) => {
      t(n.player);
    };
    return this.messageBus.send("OBR_PLAYER_SUBSCRIBE", {}), this.messageBus.on("OBR_PLAYER_EVENT_CHANGE", e), () => {
      this.messageBus.send("OBR_PLAYER_UNSUBSCRIBE", {}), this.messageBus.off("OBR_PLAYER_EVENT_CHANGE", e);
    };
  }
}
var U = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class de {
  constructor(t) {
    this.messageBus = t;
  }
  reset() {
    return U(this, void 0, void 0, function* () {
      const { transform: t } = yield this.messageBus.sendAsync("OBR_VIEWPORT_RESET", {});
      return t;
    });
  }
  animateTo(t) {
    return U(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_VIEWPORT_ANIMATE_TO", { transform: t });
    });
  }
  animateToBounds(t) {
    return U(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_VIEWPORT_ANIMATE_TO_BOUNDS", {
        bounds: t
      });
    });
  }
  getPosition() {
    return U(this, void 0, void 0, function* () {
      const { position: t } = yield this.messageBus.sendAsync("OBR_VIEWPORT_GET_POSITION", {});
      return t;
    });
  }
  setPosition(t) {
    return U(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_VIEWPORT_SET_POSITION", { position: t });
    });
  }
  getScale() {
    return U(this, void 0, void 0, function* () {
      const { scale: t } = yield this.messageBus.sendAsync("OBR_VIEWPORT_GET_SCALE", {});
      return t;
    });
  }
  setScale(t) {
    return U(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_VIEWPORT_SET_SCALE", { scale: t });
    });
  }
  getWidth() {
    return U(this, void 0, void 0, function* () {
      const { width: t } = yield this.messageBus.sendAsync("OBR_VIEWPORT_GET_WIDTH", {});
      return t;
    });
  }
  getHeight() {
    return U(this, void 0, void 0, function* () {
      const { height: t } = yield this.messageBus.sendAsync("OBR_VIEWPORT_GET_HEIGHT", {});
      return t;
    });
  }
  transformPoint(t) {
    return U(this, void 0, void 0, function* () {
      const { point: e } = yield this.messageBus.sendAsync("OBR_VIEWPORT_TRANSFORM_POINT", { point: t });
      return e;
    });
  }
  inverseTransformPoint(t) {
    return U(this, void 0, void 0, function* () {
      const { point: e } = yield this.messageBus.sendAsync("OBR_VIEWPORT_INVERSE_TRANSFORM_POINT", { point: t });
      return e;
    });
  }
}
function ae(s) {
  return typeof s.id == "string";
}
var ut = { exports: {} }, kt;
function le() {
  if (kt) return ut.exports;
  kt = 1;
  var s = typeof Reflect == "object" ? Reflect : null, t = s && typeof s.apply == "function" ? s.apply : function(h, _, y) {
    return Function.prototype.apply.call(h, _, y);
  }, e;
  s && typeof s.ownKeys == "function" ? e = s.ownKeys : Object.getOwnPropertySymbols ? e = function(h) {
    return Object.getOwnPropertyNames(h).concat(Object.getOwnPropertySymbols(h));
  } : e = function(h) {
    return Object.getOwnPropertyNames(h);
  };
  function n(d) {
    console && console.warn && console.warn(d);
  }
  var r = Number.isNaN || function(h) {
    return h !== h;
  };
  function i() {
    i.init.call(this);
  }
  ut.exports = i, ut.exports.once = T, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0;
  var u = 10;
  function l(d) {
    if (typeof d != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof d);
  }
  Object.defineProperty(i, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
      return u;
    },
    set: function(d) {
      if (typeof d != "number" || d < 0 || r(d))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + d + ".");
      u = d;
    }
  }), i.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, i.prototype.setMaxListeners = function(h) {
    if (typeof h != "number" || h < 0 || r(h))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + h + ".");
    return this._maxListeners = h, this;
  };
  function f(d) {
    return d._maxListeners === void 0 ? i.defaultMaxListeners : d._maxListeners;
  }
  i.prototype.getMaxListeners = function() {
    return f(this);
  }, i.prototype.emit = function(h) {
    for (var _ = [], y = 1; y < arguments.length; y++) _.push(arguments[y]);
    var p = h === "error", v = this._events;
    if (v !== void 0)
      p = p && v.error === void 0;
    else if (!p)
      return !1;
    if (p) {
      var O;
      if (_.length > 0 && (O = _[0]), O instanceof Error)
        throw O;
      var G = new Error("Unhandled error." + (O ? " (" + O.message + ")" : ""));
      throw G.context = O, G;
    }
    var Q = v[h];
    if (Q === void 0)
      return !1;
    if (typeof Q == "function")
      t(Q, this, _);
    else
      for (var Pt = Q.length, ue = g(Q, Pt), y = 0; y < Pt; ++y)
        t(ue[y], this, _);
    return !0;
  };
  function c(d, h, _, y) {
    var p, v, O;
    if (l(_), v = d._events, v === void 0 ? (v = d._events = /* @__PURE__ */ Object.create(null), d._eventsCount = 0) : (v.newListener !== void 0 && (d.emit(
      "newListener",
      h,
      _.listener ? _.listener : _
    ), v = d._events), O = v[h]), O === void 0)
      O = v[h] = _, ++d._eventsCount;
    else if (typeof O == "function" ? O = v[h] = y ? [_, O] : [O, _] : y ? O.unshift(_) : O.push(_), p = f(d), p > 0 && O.length > p && !O.warned) {
      O.warned = !0;
      var G = new Error("Possible EventEmitter memory leak detected. " + O.length + " " + String(h) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      G.name = "MaxListenersExceededWarning", G.emitter = d, G.type = h, G.count = O.length, n(G);
    }
    return d;
  }
  i.prototype.addListener = function(h, _) {
    return c(this, h, _, !1);
  }, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(h, _) {
    return c(this, h, _, !0);
  };
  function o() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function a(d, h, _) {
    var y = { fired: !1, wrapFn: void 0, target: d, type: h, listener: _ }, p = o.bind(y);
    return p.listener = _, y.wrapFn = p, p;
  }
  i.prototype.once = function(h, _) {
    return l(_), this.on(h, a(this, h, _)), this;
  }, i.prototype.prependOnceListener = function(h, _) {
    return l(_), this.prependListener(h, a(this, h, _)), this;
  }, i.prototype.removeListener = function(h, _) {
    var y, p, v, O, G;
    if (l(_), p = this._events, p === void 0)
      return this;
    if (y = p[h], y === void 0)
      return this;
    if (y === _ || y.listener === _)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete p[h], p.removeListener && this.emit("removeListener", h, y.listener || _));
    else if (typeof y != "function") {
      for (v = -1, O = y.length - 1; O >= 0; O--)
        if (y[O] === _ || y[O].listener === _) {
          G = y[O].listener, v = O;
          break;
        }
      if (v < 0)
        return this;
      v === 0 ? y.shift() : A(y, v), y.length === 1 && (p[h] = y[0]), p.removeListener !== void 0 && this.emit("removeListener", h, G || _);
    }
    return this;
  }, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(h) {
    var _, y, p;
    if (y = this._events, y === void 0)
      return this;
    if (y.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : y[h] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete y[h]), this;
    if (arguments.length === 0) {
      var v = Object.keys(y), O;
      for (p = 0; p < v.length; ++p)
        O = v[p], O !== "removeListener" && this.removeAllListeners(O);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (_ = y[h], typeof _ == "function")
      this.removeListener(h, _);
    else if (_ !== void 0)
      for (p = _.length - 1; p >= 0; p--)
        this.removeListener(h, _[p]);
    return this;
  };
  function E(d, h, _) {
    var y = d._events;
    if (y === void 0)
      return [];
    var p = y[h];
    return p === void 0 ? [] : typeof p == "function" ? _ ? [p.listener || p] : [p] : _ ? x(p) : g(p, p.length);
  }
  i.prototype.listeners = function(h) {
    return E(this, h, !0);
  }, i.prototype.rawListeners = function(h) {
    return E(this, h, !1);
  }, i.listenerCount = function(d, h) {
    return typeof d.listenerCount == "function" ? d.listenerCount(h) : R.call(d, h);
  }, i.prototype.listenerCount = R;
  function R(d) {
    var h = this._events;
    if (h !== void 0) {
      var _ = h[d];
      if (typeof _ == "function")
        return 1;
      if (_ !== void 0)
        return _.length;
    }
    return 0;
  }
  i.prototype.eventNames = function() {
    return this._eventsCount > 0 ? e(this._events) : [];
  };
  function g(d, h) {
    for (var _ = new Array(h), y = 0; y < h; ++y)
      _[y] = d[y];
    return _;
  }
  function A(d, h) {
    for (; h + 1 < d.length; h++)
      d[h] = d[h + 1];
    d.pop();
  }
  function x(d) {
    for (var h = new Array(d.length), _ = 0; _ < h.length; ++_)
      h[_] = d[_].listener || d[_];
    return h;
  }
  function T(d, h) {
    return new Promise(function(_, y) {
      function p(O) {
        d.removeListener(h, v), y(O);
      }
      function v() {
        typeof d.removeListener == "function" && d.removeListener("error", p), _([].slice.call(arguments));
      }
      m(d, h, v, { once: !0 }), h !== "error" && B(d, p, { once: !0 });
    });
  }
  function B(d, h, _) {
    typeof d.on == "function" && m(d, "error", h, _);
  }
  function m(d, h, _, y) {
    if (typeof d.on == "function")
      y.once ? d.once(h, _) : d.on(h, _);
    else if (typeof d.addEventListener == "function")
      d.addEventListener(h, function p(v) {
        y.once && d.removeEventListener(h, p), _(v);
      });
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof d);
  }
  return ut.exports;
}
var he = le();
let ct;
const fe = new Uint8Array(16);
function _e() {
  if (!ct && (ct = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ct))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ct(fe);
}
const N = [];
for (let s = 0; s < 256; ++s)
  N.push((s + 256).toString(16).slice(1));
function ye(s, t = 0) {
  return N[s[t + 0]] + N[s[t + 1]] + N[s[t + 2]] + N[s[t + 3]] + "-" + N[s[t + 4]] + N[s[t + 5]] + "-" + N[s[t + 6]] + N[s[t + 7]] + "-" + N[s[t + 8]] + N[s[t + 9]] + "-" + N[s[t + 10]] + N[s[t + 11]] + N[s[t + 12]] + N[s[t + 13]] + N[s[t + 14]] + N[s[t + 15]];
}
const Ee = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Gt = {
  randomUUID: Ee
};
function Zt(s, t, e) {
  if (Gt.randomUUID && !s)
    return Gt.randomUUID();
  s = s || {};
  const n = s.random || (s.rng || _e)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, ye(n);
}
class pe extends he.EventEmitter {
  constructor(t, e) {
    super(), this.ready = !1, this.userId = null, this.ref = null, this.handleMessage = (n) => {
      const r = n.data;
      if (n.origin === this.targetOrigin && ae(r)) {
        if (r.id === "OBR_READY") {
          this.ready = !0;
          const i = r.data;
          this.ref = i.ref, this.userId = i.userId;
        }
        this.emit(r.id, r.data);
      }
    }, this.send = (n, r, i) => {
      var u;
      if (!this.ref)
        throw Error("Unable to send message: not ready");
      (u = window.parent) === null || u === void 0 || u.postMessage({
        id: n,
        data: r,
        ref: this.ref,
        nonce: i
      }, this.targetOrigin);
    }, this.sendAsync = (n, r, i = 5e3) => {
      const u = `_${Zt()}`;
      return this.send(n, r, u), Promise.race([
        new Promise((l, f) => {
          const c = this;
          function o(E) {
            c.off(`${n}_RESPONSE${u}`, o), c.off(`${n}_ERROR${u}`, a), l(E);
          }
          function a(E) {
            c.off(`${n}_RESPONSE${u}`, o), c.off(`${n}_ERROR${u}`, a), f(E);
          }
          this.on(`${n}_RESPONSE${u}`, o), this.on(`${n}_ERROR${u}`, a);
        }),
        ...i > 0 ? [
          new Promise((l, f) => window.setTimeout(() => f(new Error(`Message ${n} took longer than ${i}ms to get a result`)), i))
        ] : []
      ]);
    }, this.roomId = e, this.targetOrigin = t, window.addEventListener("message", this.handleMessage), this.setMaxListeners(100);
  }
  destroy() {
    window.removeEventListener("message", this.handleMessage);
  }
}
var Ut = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class me {
  constructor(t) {
    this.messageBus = t;
  }
  show(t, e) {
    return Ut(this, void 0, void 0, function* () {
      const { id: n } = yield this.messageBus.sendAsync("OBR_NOTIFICATION_SHOW", { message: t, variant: e });
      return n;
    });
  }
  close(t) {
    return Ut(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_NOTIFICATION_CLOSE", { id: t });
    });
  }
}
var K = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class Oe {
  constructor(t) {
    this.messageBus = t;
  }
  getColor() {
    return K(this, void 0, void 0, function* () {
      const { color: t } = yield this.messageBus.sendAsync("OBR_SCENE_FOG_GET_COLOR", {});
      return t;
    });
  }
  setColor(t) {
    return K(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_FOG_SET_COLOR", { color: t });
    });
  }
  getStrokeWidth() {
    return K(this, void 0, void 0, function* () {
      const { strokeWidth: t } = yield this.messageBus.sendAsync("OBR_SCENE_FOG_GET_STROKE_WIDTH", {});
      return t;
    });
  }
  setStrokeWidth(t) {
    return K(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_FOG_SET_STROKE_WIDTH", {
        strokeWidth: t
      });
    });
  }
  getFilled() {
    return K(this, void 0, void 0, function* () {
      const { filled: t } = yield this.messageBus.sendAsync("OBR_SCENE_FOG_GET_FILLED", {});
      return t;
    });
  }
  setFilled(t) {
    return K(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_FOG_SET_FILLED", { filled: t });
    });
  }
  onChange(t) {
    const e = (n) => {
      t(n.fog);
    };
    return this.messageBus.send("OBR_SCENE_FOG_SUBSCRIBE", {}), this.messageBus.on("OBR_SCENE_FOG_EVENT_CHANGE", e), () => {
      this.messageBus.send("OBR_SCENE_FOG_UNSUBSCRIBE", {}), this.messageBus.off("OBR_SCENE_FOG_EVENT_CHANGE", e);
    };
  }
}
var I = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class ge {
  constructor(t) {
    this.messageBus = t;
  }
  getDpi() {
    return I(this, void 0, void 0, function* () {
      const { dpi: t } = yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_DPI", {});
      return t;
    });
  }
  getScale() {
    return I(this, void 0, void 0, function* () {
      return yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_SCALE", {});
    });
  }
  setScale(t) {
    return I(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_SCALE", { scale: t });
    });
  }
  getColor() {
    return I(this, void 0, void 0, function* () {
      const { color: t } = yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_COLOR", {});
      return t;
    });
  }
  setColor(t) {
    return I(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_COLOR", { color: t });
    });
  }
  getOpacity() {
    return I(this, void 0, void 0, function* () {
      const { opacity: t } = yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_OPACITY", {});
      return t;
    });
  }
  setOpacity(t) {
    return I(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_OPACITY", { opacity: t });
    });
  }
  getType() {
    return I(this, void 0, void 0, function* () {
      const { type: t } = yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_TYPE", {});
      return t;
    });
  }
  setType(t) {
    return I(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_TYPE", { type: t });
    });
  }
  getLineType() {
    return I(this, void 0, void 0, function* () {
      const { lineType: t } = yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_LINE_TYPE", {});
      return t;
    });
  }
  setLineType(t) {
    return I(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_LINE_TYPE", {
        lineType: t
      });
    });
  }
  getMeasurement() {
    return I(this, void 0, void 0, function* () {
      const { measurement: t } = yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_MEASUREMENT", {});
      return t;
    });
  }
  setMeasurement(t) {
    return I(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_MEASUREMENT", {
        measurement: t
      });
    });
  }
  getLineWidth() {
    return I(this, void 0, void 0, function* () {
      const { lineWidth: t } = yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_LINE_WIDTH", {});
      return t;
    });
  }
  setLineWidth(t) {
    return I(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_LINE_WIDTH", {
        lineWidth: t
      });
    });
  }
  snapPosition(t, e, n, r) {
    return I(this, void 0, void 0, function* () {
      const { position: i } = yield this.messageBus.sendAsync("OBR_SCENE_GRID_SNAP_POSITION", {
        position: t,
        snappingSensitivity: e,
        useCorners: n,
        useCenter: r
      });
      return i;
    });
  }
  getDistance(t, e) {
    return I(this, void 0, void 0, function* () {
      const { distance: n } = yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_DISTANCE", { from: t, to: e });
      return n;
    });
  }
  onChange(t) {
    const e = (n) => {
      t(n.grid);
    };
    return this.messageBus.send("OBR_SCENE_GRID_SUBSCRIBE", {}), this.messageBus.on("OBR_SCENE_GRID_EVENT_CHANGE", e), () => {
      this.messageBus.send("OBR_SCENE_GRID_UNSUBSCRIBE", {}), this.messageBus.off("OBR_SCENE_GRID_EVENT_CHANGE", e);
    };
  }
}
var dt = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class Te {
  constructor(t) {
    this.messageBus = t;
  }
  undo() {
    return dt(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_HISTORY_UNDO", {});
    });
  }
  redo() {
    return dt(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_HISTORY_REDO", {});
    });
  }
  canUndo() {
    return dt(this, void 0, void 0, function* () {
      const { canUndo: t } = yield this.messageBus.sendAsync("OBR_SCENE_HISTORY_CAN_UNDO", {});
      return t;
    });
  }
  canRedo() {
    return dt(this, void 0, void 0, function* () {
      const { canRedo: t } = yield this.messageBus.sendAsync("OBR_SCENE_HISTORY_CAN_REDO", {});
      return t;
    });
  }
}
var It = Symbol.for("immer-nothing"), J = Symbol.for("immer-draftable"), D = Symbol.for("immer-state"), Qt = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(s) {
    return `The plugin for '${s}' has not been loaded into Immer. To enable the plugin, import and call \`enable${s}()\` when initializing your application.`;
  },
  function(s) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${s}'`;
  },
  "This object has been frozen and should not be mutated",
  function(s) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + s;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(s) {
    return `'current' expects a draft, got: ${s}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(s) {
    return `'original' expects a draft, got: ${s}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function C(s, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const e = Qt[s], n = typeof e == "function" ? e.apply(null, t) : e;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${s}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var z = Object.getPrototypeOf;
function Y(s) {
  return !!s && !!s[D];
}
function V(s) {
  var t;
  return s ? Jt(s) || Array.isArray(s) || !!s[J] || !!((t = s.constructor) != null && t[J]) || rt(s) || ot(s) : !1;
}
var Ae = Object.prototype.constructor.toString();
function Jt(s) {
  if (!s || typeof s != "object")
    return !1;
  const t = z(s);
  if (t === null)
    return !0;
  const e = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return e === Object ? !0 : typeof e == "function" && Function.toString.call(e) === Ae;
}
function et(s, t) {
  j(s) === 0 ? Reflect.ownKeys(s).forEach((e) => {
    t(e, s[e], s);
  }) : s.forEach((e, n) => t(n, e, s));
}
function j(s) {
  const t = s[D];
  return t ? t.type_ : Array.isArray(s) ? 1 : rt(s) ? 2 : ot(s) ? 3 : 0;
}
function st(s, t) {
  return j(s) === 2 ? s.has(t) : Object.prototype.hasOwnProperty.call(s, t);
}
function yt(s, t) {
  return j(s) === 2 ? s.get(t) : s[t];
}
function te(s, t, e) {
  const n = j(s);
  n === 2 ? s.set(t, e) : n === 3 ? s.add(e) : s[t] = e;
}
function Be(s, t) {
  return s === t ? s !== 0 || 1 / s === 1 / t : s !== s && t !== t;
}
function rt(s) {
  return s instanceof Map;
}
function ot(s) {
  return s instanceof Set;
}
function W(s) {
  return s.copy_ || s.base_;
}
function gt(s, t) {
  if (rt(s))
    return new Map(s);
  if (ot(s))
    return new Set(s);
  if (Array.isArray(s))
    return Array.prototype.slice.call(s);
  const e = Jt(s);
  if (t === !0 || t === "class_only" && !e) {
    const n = Object.getOwnPropertyDescriptors(s);
    delete n[D];
    let r = Reflect.ownKeys(n);
    for (let i = 0; i < r.length; i++) {
      const u = r[i], l = n[u];
      l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (n[u] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: l.enumerable,
        value: s[u]
      });
    }
    return Object.create(z(s), n);
  } else {
    const n = z(s);
    if (n !== null && e)
      return { ...s };
    const r = Object.create(n);
    return Object.assign(r, s);
  }
}
function Nt(s, t = !1) {
  return _t(s) || Y(s) || !V(s) || (j(s) > 1 && (s.set = s.add = s.clear = s.delete = Re), Object.freeze(s), t && Object.entries(s).forEach(([e, n]) => Nt(n, !0))), s;
}
function Re() {
  C(2);
}
function _t(s) {
  return Object.isFrozen(s);
}
var Tt = {};
function $(s) {
  const t = Tt[s];
  return t || C(0, s), t;
}
function ve(s, t) {
  Tt[s] || (Tt[s] = t);
}
var nt;
function ee() {
  return nt;
}
function xe(s, t) {
  return {
    drafts_: [],
    parent_: s,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Vt(s, t) {
  t && ($("Patches"), s.patches_ = [], s.inversePatches_ = [], s.patchListener_ = t);
}
function At(s) {
  Bt(s), s.drafts_.forEach(Ce), s.drafts_ = null;
}
function Bt(s) {
  s === nt && (nt = s.parent_);
}
function Wt(s) {
  return nt = xe(nt, s);
}
function Ce(s) {
  const t = s[D];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Ht(s, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const e = t.drafts_[0];
  return s !== void 0 && s !== e ? (e[D].modified_ && (At(t), C(4)), V(s) && (s = ht(t, s), t.parent_ || ft(t, s)), t.patches_ && $("Patches").generateReplacementPatches_(
    e[D].base_,
    s,
    t.patches_,
    t.inversePatches_
  )) : s = ht(t, e, []), At(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), s !== It ? s : void 0;
}
function ht(s, t, e) {
  if (_t(t))
    return t;
  const n = t[D];
  if (!n)
    return et(
      t,
      (r, i) => Ft(s, n, t, r, i, e)
    ), t;
  if (n.scope_ !== s)
    return t;
  if (!n.modified_)
    return ft(s, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const r = n.copy_;
    let i = r, u = !1;
    n.type_ === 3 && (i = new Set(r), r.clear(), u = !0), et(
      i,
      (l, f) => Ft(s, n, r, l, f, e, u)
    ), ft(s, r, !1), e && s.patches_ && $("Patches").generatePatches_(
      n,
      e,
      s.patches_,
      s.inversePatches_
    );
  }
  return n.copy_;
}
function Ft(s, t, e, n, r, i, u) {
  if (process.env.NODE_ENV !== "production" && r === e && C(5), Y(r)) {
    const l = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !st(t.assigned_, n) ? i.concat(n) : void 0, f = ht(s, r, l);
    if (te(e, n, f), Y(f))
      s.canAutoFreeze_ = !1;
    else
      return;
  } else u && e.add(r);
  if (V(r) && !_t(r)) {
    if (!s.immer_.autoFreeze_ && s.unfinalizedDrafts_ < 1)
      return;
    ht(s, r), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(e, n) && ft(s, r);
  }
}
function ft(s, t, e = !1) {
  !s.parent_ && s.immer_.autoFreeze_ && s.canAutoFreeze_ && Nt(t, e);
}
function Se(s, t) {
  const e = Array.isArray(s), n = {
    type_: e ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : ee(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: s,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let r = n, i = wt;
  e && (r = [n], i = it);
  const { revoke: u, proxy: l } = Proxy.revocable(r, i);
  return n.draft_ = l, n.revoke_ = u, l;
}
var wt = {
  get(s, t) {
    if (t === D)
      return s;
    const e = W(s);
    if (!st(e, t))
      return Ie(s, e, t);
    const n = e[t];
    return s.finalized_ || !V(n) ? n : n === Et(s.base_, t) ? (pt(s), s.copy_[t] = vt(n, s)) : n;
  },
  has(s, t) {
    return t in W(s);
  },
  ownKeys(s) {
    return Reflect.ownKeys(W(s));
  },
  set(s, t, e) {
    const n = se(W(s), t);
    if (n != null && n.set)
      return n.set.call(s.draft_, e), !0;
    if (!s.modified_) {
      const r = Et(W(s), t), i = r == null ? void 0 : r[D];
      if (i && i.base_ === e)
        return s.copy_[t] = e, s.assigned_[t] = !1, !0;
      if (Be(e, r) && (e !== void 0 || st(s.base_, t)))
        return !0;
      pt(s), Rt(s);
    }
    return s.copy_[t] === e && // special case: handle new props with value 'undefined'
    (e !== void 0 || t in s.copy_) || // special case: NaN
    Number.isNaN(e) && Number.isNaN(s.copy_[t]) || (s.copy_[t] = e, s.assigned_[t] = !0), !0;
  },
  deleteProperty(s, t) {
    return Et(s.base_, t) !== void 0 || t in s.base_ ? (s.assigned_[t] = !1, pt(s), Rt(s)) : delete s.assigned_[t], s.copy_ && delete s.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(s, t) {
    const e = W(s), n = Reflect.getOwnPropertyDescriptor(e, t);
    return n && {
      writable: !0,
      configurable: s.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: e[t]
    };
  },
  defineProperty() {
    C(11);
  },
  getPrototypeOf(s) {
    return z(s.base_);
  },
  setPrototypeOf() {
    C(12);
  }
}, it = {};
et(wt, (s, t) => {
  it[s] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
it.deleteProperty = function(s, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && C(13), it.set.call(this, s, t, void 0);
};
it.set = function(s, t, e) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && C(14), wt.set.call(this, s[0], t, e, s[0]);
};
function Et(s, t) {
  const e = s[D];
  return (e ? W(e) : s)[t];
}
function Ie(s, t, e) {
  var r;
  const n = se(t, e);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (r = n.get) == null ? void 0 : r.call(s.draft_)
  ) : void 0;
}
function se(s, t) {
  if (!(t in s))
    return;
  let e = z(s);
  for (; e; ) {
    const n = Object.getOwnPropertyDescriptor(e, t);
    if (n)
      return n;
    e = z(e);
  }
}
function Rt(s) {
  s.modified_ || (s.modified_ = !0, s.parent_ && Rt(s.parent_));
}
function pt(s) {
  s.copy_ || (s.copy_ = gt(
    s.base_,
    s.scope_.immer_.useStrictShallowCopy_
  ));
}
var Ne = class {
  constructor(s) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, e, n) => {
      if (typeof t == "function" && typeof e != "function") {
        const i = e;
        e = t;
        const u = this;
        return function(f = i, ...c) {
          return u.produce(f, (o) => e.call(this, o, ...c));
        };
      }
      typeof e != "function" && C(6), n !== void 0 && typeof n != "function" && C(7);
      let r;
      if (V(t)) {
        const i = Wt(this), u = vt(t, void 0);
        let l = !0;
        try {
          r = e(u), l = !1;
        } finally {
          l ? At(i) : Bt(i);
        }
        return Vt(i, n), Ht(r, i);
      } else if (!t || typeof t != "object") {
        if (r = e(t), r === void 0 && (r = t), r === It && (r = void 0), this.autoFreeze_ && Nt(r, !0), n) {
          const i = [], u = [];
          $("Patches").generateReplacementPatches_(t, r, i, u), n(i, u);
        }
        return r;
      } else
        C(1, t);
    }, this.produceWithPatches = (t, e) => {
      if (typeof t == "function")
        return (u, ...l) => this.produceWithPatches(u, (f) => t(f, ...l));
      let n, r;
      return [this.produce(t, e, (u, l) => {
        n = u, r = l;
      }), n, r];
    }, typeof (s == null ? void 0 : s.autoFreeze) == "boolean" && this.setAutoFreeze(s.autoFreeze), typeof (s == null ? void 0 : s.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(s.useStrictShallowCopy);
  }
  createDraft(s) {
    V(s) || C(8), Y(s) && (s = we(s));
    const t = Wt(this), e = vt(s, void 0);
    return e[D].isManual_ = !0, Bt(t), e;
  }
  finishDraft(s, t) {
    const e = s && s[D];
    (!e || !e.isManual_) && C(9);
    const { scope_: n } = e;
    return Vt(n, t), Ht(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(s) {
    this.autoFreeze_ = s;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(s) {
    this.useStrictShallowCopy_ = s;
  }
  applyPatches(s, t) {
    let e;
    for (e = t.length - 1; e >= 0; e--) {
      const r = t[e];
      if (r.path.length === 0 && r.op === "replace") {
        s = r.value;
        break;
      }
    }
    e > -1 && (t = t.slice(e + 1));
    const n = $("Patches").applyPatches_;
    return Y(s) ? n(s, t) : this.produce(
      s,
      (r) => n(r, t)
    );
  }
};
function vt(s, t) {
  const e = rt(s) ? $("MapSet").proxyMap_(s, t) : ot(s) ? $("MapSet").proxySet_(s, t) : Se(s, t);
  return (t ? t.scope_ : ee()).drafts_.push(e), e;
}
function we(s) {
  return Y(s) || C(10, s), ne(s);
}
function ne(s) {
  if (!V(s) || _t(s))
    return s;
  const t = s[D];
  let e;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, e = gt(s, t.scope_.immer_.useStrictShallowCopy_);
  } else
    e = gt(s, !0);
  return et(e, (n, r) => {
    te(e, n, ne(r));
  }), t && (t.finalized_ = !1), e;
}
function Mt() {
  process.env.NODE_ENV !== "production" && Qt.push(
    'Sets cannot have "replace" patches.',
    function(E) {
      return "Unsupported patch operation: " + E;
    },
    function(E) {
      return "Cannot apply patch, path doesn't resolve: " + E;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const t = "replace", e = "add", n = "remove";
  function r(E, R, g, A) {
    switch (E.type_) {
      case 0:
      case 2:
        return u(
          E,
          R,
          g,
          A
        );
      case 1:
        return i(E, R, g, A);
      case 3:
        return l(
          E,
          R,
          g,
          A
        );
    }
  }
  function i(E, R, g, A) {
    let { base_: x, assigned_: T } = E, B = E.copy_;
    B.length < x.length && ([x, B] = [B, x], [g, A] = [A, g]);
    for (let m = 0; m < x.length; m++)
      if (T[m] && B[m] !== x[m]) {
        const d = R.concat([m]);
        g.push({
          op: t,
          path: d,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: a(B[m])
        }), A.push({
          op: t,
          path: d,
          value: a(x[m])
        });
      }
    for (let m = x.length; m < B.length; m++) {
      const d = R.concat([m]);
      g.push({
        op: e,
        path: d,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: a(B[m])
      });
    }
    for (let m = B.length - 1; x.length <= m; --m) {
      const d = R.concat([m]);
      A.push({
        op: n,
        path: d
      });
    }
  }
  function u(E, R, g, A) {
    const { base_: x, copy_: T } = E;
    et(E.assigned_, (B, m) => {
      const d = yt(x, B), h = yt(T, B), _ = m ? st(x, B) ? t : e : n;
      if (d === h && _ === t)
        return;
      const y = R.concat(B);
      g.push(_ === n ? { op: _, path: y } : { op: _, path: y, value: h }), A.push(
        _ === e ? { op: n, path: y } : _ === n ? { op: e, path: y, value: a(d) } : { op: t, path: y, value: a(d) }
      );
    });
  }
  function l(E, R, g, A) {
    let { base_: x, copy_: T } = E, B = 0;
    x.forEach((m) => {
      if (!T.has(m)) {
        const d = R.concat([B]);
        g.push({
          op: n,
          path: d,
          value: m
        }), A.unshift({
          op: e,
          path: d,
          value: m
        });
      }
      B++;
    }), B = 0, T.forEach((m) => {
      if (!x.has(m)) {
        const d = R.concat([B]);
        g.push({
          op: e,
          path: d,
          value: m
        }), A.unshift({
          op: n,
          path: d,
          value: m
        });
      }
      B++;
    });
  }
  function f(E, R, g, A) {
    g.push({
      op: t,
      path: [],
      value: R === It ? void 0 : R
    }), A.push({
      op: t,
      path: [],
      value: E
    });
  }
  function c(E, R) {
    return R.forEach((g) => {
      const { path: A, op: x } = g;
      let T = E;
      for (let h = 0; h < A.length - 1; h++) {
        const _ = j(T);
        let y = A[h];
        typeof y != "string" && typeof y != "number" && (y = "" + y), (_ === 0 || _ === 1) && (y === "__proto__" || y === "constructor") && C(19), typeof T == "function" && y === "prototype" && C(19), T = yt(T, y), typeof T != "object" && C(18, A.join("/"));
      }
      const B = j(T), m = o(g.value), d = A[A.length - 1];
      switch (x) {
        case t:
          switch (B) {
            case 2:
              return T.set(d, m);
            case 3:
              C(16);
            default:
              return T[d] = m;
          }
        case e:
          switch (B) {
            case 1:
              return d === "-" ? T.push(m) : T.splice(d, 0, m);
            case 2:
              return T.set(d, m);
            case 3:
              return T.add(m);
            default:
              return T[d] = m;
          }
        case n:
          switch (B) {
            case 1:
              return T.splice(d, 1);
            case 2:
              return T.delete(d);
            case 3:
              return T.delete(g.value);
            default:
              return delete T[d];
          }
        default:
          C(17, x);
      }
    }), E;
  }
  function o(E) {
    if (!V(E))
      return E;
    if (Array.isArray(E))
      return E.map(o);
    if (rt(E))
      return new Map(
        Array.from(E.entries()).map(([g, A]) => [g, o(A)])
      );
    if (ot(E))
      return new Set(Array.from(E).map(o));
    const R = Object.create(z(E));
    for (const g in E)
      R[g] = o(E[g]);
    return st(E, J) && (R[J] = E[J]), R;
  }
  function a(E) {
    return Y(E) ? o(E) : E;
  }
  ve("Patches", {
    applyPatches_: c,
    generatePatches_: r,
    generateReplacementPatches_: f
  });
}
var b = new Ne();
b.produce;
var Lt = b.produceWithPatches.bind(
  b
);
b.setAutoFreeze.bind(b);
b.setUseStrictShallowCopy.bind(b);
b.applyPatches.bind(b);
b.createDraft.bind(b);
b.finishDraft.bind(b);
var X = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
Mt();
class Me {
  constructor(t) {
    this.messageBus = t;
  }
  getItems(t) {
    return X(this, void 0, void 0, function* () {
      if (Array.isArray(t)) {
        const { items: e } = yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_GET_ITEMS", { ids: t });
        return e;
      } else if (t) {
        const { items: e } = yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_GET_ALL_ITEMS", {});
        return e.filter(t);
      } else {
        const { items: e } = yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_GET_ALL_ITEMS", {});
        return e;
      }
    });
  }
  isItemArray(t) {
    return Array.isArray(t) && t.every((e) => typeof e != "string");
  }
  updateItems(t, e) {
    return X(this, void 0, void 0, function* () {
      let n;
      this.isItemArray(t) ? n = t : n = yield this.getItems(t);
      const [r, i] = Lt(n, e), u = r.map((f) => ({
        id: f.id,
        type: f.type
      }));
      for (const f of i) {
        const [c, o] = f.path;
        typeof c == "number" && typeof o == "string" && (u[c][o] = r[c][o]);
      }
      const l = u.filter(
        // Ensure that there are updates besides the default ID and type
        (f) => Object.keys(f).length > 2
      );
      l.length !== 0 && (yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_UPDATE_ITEMS", {
        updates: l
      }));
    });
  }
  addItems(t) {
    return X(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_ADD_ITEMS", {
        items: t
      });
    });
  }
  deleteItems(t) {
    return X(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_DELETE_ITEMS", {
        ids: t
      });
    });
  }
  getItemAttachments(t) {
    return X(this, void 0, void 0, function* () {
      const { items: e } = yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_GET_ITEM_ATTACHMENTS", { ids: t });
      return e;
    });
  }
  getItemBounds(t) {
    return X(this, void 0, void 0, function* () {
      const { bounds: e } = yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_GET_ITEM_BOUNDS", { ids: t });
      return e;
    });
  }
  onChange(t) {
    const e = (n) => {
      t(n.items);
    };
    return this.messageBus.send("OBR_SCENE_ITEMS_SUBSCRIBE", {}), this.messageBus.on("OBR_SCENE_ITEMS_EVENT_CHANGE", e), () => {
      this.messageBus.send("OBR_SCENE_ITEMS_UNSUBSCRIBE", {}), this.messageBus.off("OBR_SCENE_ITEMS_EVENT_CHANGE", e);
    };
  }
}
var q = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
Mt();
class Le {
  constructor(t) {
    this.messageBus = t;
  }
  getItems(t) {
    return q(this, void 0, void 0, function* () {
      if (Array.isArray(t)) {
        const { items: e } = yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_GET_ITEMS", { ids: t });
        return e;
      } else if (t) {
        const { items: e } = yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_GET_ALL_ITEMS", {});
        return e.filter(t);
      } else {
        const { items: e } = yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_GET_ALL_ITEMS", {});
        return e;
      }
    });
  }
  isItemArray(t) {
    return Array.isArray(t) && t.every((e) => typeof e != "string");
  }
  updateItems(t, e, n) {
    return q(this, void 0, void 0, function* () {
      let r;
      this.isItemArray(t) ? r = t : r = yield this.getItems(t);
      const [i, u] = Lt(r, e), l = i.map((c) => ({
        id: c.id,
        type: c.type
      }));
      for (const c of u) {
        const [o, a] = c.path;
        typeof o == "number" && typeof a == "string" && (l[o][a] = i[o][a]);
      }
      const f = l.filter(
        // Ensure that there are updates besides the default ID and type
        (c) => Object.keys(c).length > 2
      );
      f.length !== 0 && (yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_UPDATE_ITEMS", {
        updates: f,
        fastUpdate: n
      }));
    });
  }
  addItems(t) {
    return q(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_ADD_ITEMS", {
        items: t
      });
    });
  }
  deleteItems(t) {
    return q(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_DELETE_ITEMS", {
        ids: t
      });
    });
  }
  getItemAttachments(t) {
    return q(this, void 0, void 0, function* () {
      const { items: e } = yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_GET_ITEM_ATTACHMENTS", { ids: t });
      return e;
    });
  }
  getItemBounds(t) {
    return q(this, void 0, void 0, function* () {
      const { bounds: e } = yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_GET_ITEM_BOUNDS", { ids: t });
      return e;
    });
  }
  onChange(t) {
    const e = (n) => {
      t(n.items);
    };
    return this.messageBus.send("OBR_SCENE_LOCAL_SUBSCRIBE", {}), this.messageBus.on("OBR_SCENE_LOCAL_EVENT_CHANGE", e), () => {
      this.messageBus.send("OBR_SCENE_LOCAL_UNSUBSCRIBE", {}), this.messageBus.off("OBR_SCENE_LOCAL_EVENT_CHANGE", e);
    };
  }
}
var mt = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class De {
  constructor(t) {
    this.messageBus = t, this.grid = new ge(t), this.fog = new Oe(t), this.history = new Te(t), this.items = new Me(t), this.local = new Le(t);
  }
  isReady() {
    return mt(this, void 0, void 0, function* () {
      const { ready: t } = yield this.messageBus.sendAsync("OBR_SCENE_IS_READY", {});
      return t;
    });
  }
  onReadyChange(t) {
    const e = (n) => {
      t(n.ready);
    };
    return this.messageBus.send("OBR_SCENE_READY_SUBSCRIBE", {}), this.messageBus.on("OBR_SCENE_EVENT_READY_CHANGE", e), () => {
      this.messageBus.send("OBR_SCENE_READY_UNSUBSCRIBE", {}), this.messageBus.off("OBR_SCENE_EVENT_READY_CHANGE", e);
    };
  }
  getMetadata() {
    return mt(this, void 0, void 0, function* () {
      const { metadata: t } = yield this.messageBus.sendAsync("OBR_SCENE_GET_METADATA", {});
      return t;
    });
  }
  setMetadata(t) {
    return mt(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_SCENE_SET_METADATA", { update: t });
    });
  }
  onMetadataChange(t) {
    const e = (n) => {
      t(n.metadata);
    };
    return this.messageBus.send("OBR_SCENE_METADATA_SUBSCRIBE", {}), this.messageBus.on("OBR_SCENE_METADATA_EVENT_CHANGE", e), () => {
      this.messageBus.send("OBR_SCENE_METADATA_UNSUBSCRIBE", {}), this.messageBus.off("OBR_SCENE_METADATA_EVENT_CHANGE", e);
    };
  }
}
function ie(s) {
  return s.startsWith("http") ? s : `${window.location.origin}${s}`;
}
function tt(s) {
  return s.map((t) => Object.assign(Object.assign({}, t), { icon: ie(t.icon) }));
}
function Dt(s) {
  return Object.assign(Object.assign({}, s), { url: ie(s.url) });
}
var zt = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class be {
  constructor(t) {
    this.contextMenus = {}, this.handleClick = (e) => {
      var n;
      const r = this.contextMenus[e.id];
      r && ((n = r.onClick) === null || n === void 0 || n.call(r, e.context, e.elementId));
    }, this.messageBus = t, t.on("OBR_CONTEXT_MENU_EVENT_CLICK", this.handleClick);
  }
  create(t) {
    return zt(this, void 0, void 0, function* () {
      this.messageBus.sendAsync("OBR_CONTEXT_MENU_CREATE", {
        id: t.id,
        shortcut: t.shortcut,
        icons: tt(t.icons),
        embed: t.embed && Dt(t.embed)
      }), this.contextMenus[t.id] = t;
    });
  }
  remove(t) {
    return zt(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_CONTEXT_MENU_REMOVE", { id: t }), delete this.contextMenus[t];
    });
  }
}
var k = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class Pe {
  constructor(t) {
    this.tools = {}, this.toolActions = {}, this.toolModes = {}, this.handleToolClick = (e) => {
      const n = this.tools[e.id];
      if (n)
        if (n.onClick) {
          const r = n.onClick(e.context, e.elementId);
          Promise.resolve(r).then((i) => {
            i && this.messageBus.send("OBR_TOOL_ACTIVATE", {
              id: e.id
            });
          });
        } else
          this.messageBus.send("OBR_TOOL_ACTIVATE", {
            id: e.id
          });
    }, this.handleToolActionClick = (e) => {
      var n;
      const r = this.toolActions[e.id];
      r && ((n = r.onClick) === null || n === void 0 || n.call(r, e.context, e.elementId));
    }, this.handleToolModeClick = (e) => {
      const n = this.toolModes[e.id];
      if (n)
        if (n.onClick) {
          const r = n.onClick(e.context, e.elementId);
          Promise.resolve(r).then((i) => {
            i && this.messageBus.send("OBR_TOOL_MODE_ACTIVATE", {
              toolId: e.context.activeTool,
              modeId: e.id
            });
          });
        } else
          this.messageBus.send("OBR_TOOL_MODE_ACTIVATE", {
            toolId: e.context.activeTool,
            modeId: e.id
          });
    }, this.handleToolModeToolClick = (e) => {
      const n = this.toolModes[e.id];
      if (n)
        if (n.onToolClick) {
          const r = n.onToolClick(e.context, e.event);
          Promise.resolve(r).then((i) => {
            i && e.event.target && !e.event.target.locked && this.messageBus.sendAsync("OBR_PLAYER_SELECT", {
              items: [e.event.target.id]
            });
          });
        } else
          e.event.target && !e.event.target.locked && this.messageBus.sendAsync("OBR_PLAYER_SELECT", {
            items: [e.event.target.id]
          });
    }, this.handleToolModeToolDoubleClick = (e) => {
      const n = this.toolModes[e.id];
      if (n)
        if (n.onToolDoubleClick) {
          const r = n.onToolDoubleClick(e.context, e.event);
          Promise.resolve(r).then((i) => {
            i && e.event.target && this.messageBus.sendAsync("OBR_PLAYER_SELECT", {
              items: [e.event.target.id]
            });
          });
        } else
          e.event.target && this.messageBus.sendAsync("OBR_PLAYER_SELECT", {
            items: [e.event.target.id]
          });
    }, this.handleToolModeToolDown = (e) => {
      var n;
      const r = this.toolModes[e.id];
      r && ((n = r.onToolDown) === null || n === void 0 || n.call(r, e.context, e.event));
    }, this.handleToolModeToolMove = (e) => {
      var n;
      const r = this.toolModes[e.id];
      r && ((n = r.onToolMove) === null || n === void 0 || n.call(r, e.context, e.event));
    }, this.handleToolModeToolUp = (e) => {
      var n;
      const r = this.toolModes[e.id];
      r && ((n = r.onToolUp) === null || n === void 0 || n.call(r, e.context, e.event));
    }, this.handleToolModeToolDragStart = (e) => {
      var n;
      const r = this.toolModes[e.id];
      r && ((n = r.onToolDragStart) === null || n === void 0 || n.call(r, e.context, e.event));
    }, this.handleToolModeToolDragMove = (e) => {
      var n;
      const r = this.toolModes[e.id];
      r && ((n = r.onToolDragMove) === null || n === void 0 || n.call(r, e.context, e.event));
    }, this.handleToolModeToolDragEnd = (e) => {
      var n;
      const r = this.toolModes[e.id];
      r && ((n = r.onToolDragEnd) === null || n === void 0 || n.call(r, e.context, e.event));
    }, this.handleToolModeToolDragCancel = (e) => {
      var n;
      const r = this.toolModes[e.id];
      r && ((n = r.onToolDragCancel) === null || n === void 0 || n.call(r, e.context, e.event));
    }, this.handleToolModeKeyDown = (e) => {
      var n;
      const r = this.toolModes[e.id];
      r && ((n = r.onKeyDown) === null || n === void 0 || n.call(r, e.context, e.event));
    }, this.handleToolModeKeyUp = (e) => {
      var n;
      const r = this.toolModes[e.id];
      r && ((n = r.onKeyUp) === null || n === void 0 || n.call(r, e.context, e.event));
    }, this.handleToolModeActivate = (e) => {
      var n;
      const r = this.toolModes[e.id];
      r && ((n = r.onActivate) === null || n === void 0 || n.call(r, e.context));
    }, this.handleToolModeDeactivate = (e) => {
      var n;
      const r = this.toolModes[e.id];
      r && ((n = r.onDeactivate) === null || n === void 0 || n.call(r, e.context));
    }, this.messageBus = t, t.on("OBR_TOOL_EVENT_CLICK", this.handleToolClick), t.on("OBR_TOOL_ACTION_EVENT_CLICK", this.handleToolActionClick), t.on("OBR_TOOL_MODE_EVENT_CLICK", this.handleToolModeClick), t.on("OBR_TOOL_MODE_EVENT_TOOL_CLICK", this.handleToolModeToolClick), t.on("OBR_TOOL_MODE_EVENT_TOOL_DOUBLE_CLICK", this.handleToolModeToolDoubleClick), t.on("OBR_TOOL_MODE_EVENT_TOOL_DOWN", this.handleToolModeToolDown), t.on("OBR_TOOL_MODE_EVENT_TOOL_MOVE", this.handleToolModeToolMove), t.on("OBR_TOOL_MODE_EVENT_TOOL_UP", this.handleToolModeToolUp), t.on("OBR_TOOL_MODE_EVENT_TOOL_DRAG_START", this.handleToolModeToolDragStart), t.on("OBR_TOOL_MODE_EVENT_TOOL_DRAG_MOVE", this.handleToolModeToolDragMove), t.on("OBR_TOOL_MODE_EVENT_TOOL_DRAG_END", this.handleToolModeToolDragEnd), t.on("OBR_TOOL_MODE_EVENT_TOOL_DRAG_CANCEL", this.handleToolModeToolDragCancel), t.on("OBR_TOOL_MODE_EVENT_KEY_DOWN", this.handleToolModeKeyDown), t.on("OBR_TOOL_MODE_EVENT_KEY_UP", this.handleToolModeKeyUp), t.on("OBR_TOOL_MODE_EVENT_ACTIVATE", this.handleToolModeActivate), t.on("OBR_TOOL_MODE_EVENT_DEACTIVATE", this.handleToolModeDeactivate);
  }
  create(t) {
    return k(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_TOOL_CREATE", {
        id: t.id,
        shortcut: t.shortcut,
        defaultMode: t.defaultMode,
        defaultMetadata: t.defaultMetadata,
        icons: tt(t.icons),
        disabled: t.disabled
      }), this.tools[t.id] = t;
    });
  }
  remove(t) {
    return k(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_TOOL_REMOVE", { id: t }), delete this.tools[t];
    });
  }
  activateTool(t) {
    return k(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_TOOL_ACTIVATE", { id: t });
    });
  }
  getActiveTool() {
    return k(this, void 0, void 0, function* () {
      const { id: t } = yield this.messageBus.sendAsync("OBR_TOOL_GET_ACTIVE", {});
      return t;
    });
  }
  onToolChange(t) {
    const e = (n) => {
      t(n.id);
    };
    return this.messageBus.send("OBR_TOOL_ACTIVE_SUBSCRIBE", {}), this.messageBus.on("OBR_TOOL_ACTIVE_EVENT_CHANGE", e), () => {
      this.messageBus.send("OBR_TOOL_ACTIVE_UNSUBSCRIBE", {}), this.messageBus.off("OBR_TOOL_ACTIVE_EVENT_CHANGE", e);
    };
  }
  getMetadata(t) {
    return k(this, void 0, void 0, function* () {
      const { metadata: e } = yield this.messageBus.sendAsync("OBR_TOOL_GET_METADATA", { id: t });
      return e;
    });
  }
  setMetadata(t, e) {
    return k(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_TOOL_SET_METADATA", {
        toolId: t,
        update: e
      });
    });
  }
  createAction(t) {
    return k(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_TOOL_ACTION_CREATE", {
        id: t.id,
        shortcut: t.shortcut,
        icons: tt(t.icons),
        disabled: t.disabled
      }), this.toolActions[t.id] = t;
    });
  }
  removeAction(t) {
    return k(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_TOOL_ACTION_REMOVE", { id: t }), delete this.tools[t];
    });
  }
  createMode(t) {
    return k(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_TOOL_MODE_CREATE", {
        id: t.id,
        shortcut: t.shortcut,
        icons: tt(t.icons),
        preventDrag: t.preventDrag,
        disabled: t.disabled,
        cursors: t.cursors
      }), this.toolModes[t.id] = t;
    });
  }
  removeMode(t) {
    return k(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_TOOL_MODE_REMOVE", { id: t }), delete this.tools[t];
    });
  }
  activateMode(t, e) {
    return k(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_TOOL_MODE_ACTIVATE", {
        toolId: t,
        modeId: e
      });
    });
  }
  getActiveToolMode() {
    return k(this, void 0, void 0, function* () {
      const { id: t } = yield this.messageBus.sendAsync("OBR_TOOL_MODE_GET_ACTIVE", {});
      return t;
    });
  }
  onToolModeChange(t) {
    const e = (n) => {
      t(n.id);
    };
    return this.messageBus.send("OBR_TOOL_MODE_ACTIVE_SUBSCRIBE", {}), this.messageBus.on("OBR_TOOL_MODE_ACTIVE_EVENT_CHANGE", e), () => {
      this.messageBus.send("OBR_TOOL_MODE_ACTIVE_UNSUBSCRIBE", {}), this.messageBus.off("OBR_TOOL_MODE_ACTIVE_EVENT_CHANGE", e);
    };
  }
}
var Z = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class ke {
  constructor(t) {
    this.messageBus = t;
  }
  open(t) {
    return Z(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_POPOVER_OPEN", Object.assign({}, Dt(t)));
    });
  }
  close(t) {
    return Z(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_POPOVER_CLOSE", { id: t });
    });
  }
  getWidth(t) {
    return Z(this, void 0, void 0, function* () {
      const { width: e } = yield this.messageBus.sendAsync("OBR_POPOVER_GET_WIDTH", { id: t });
      return e;
    });
  }
  setWidth(t, e) {
    return Z(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_POPOVER_SET_WIDTH", { id: t, width: e });
    });
  }
  getHeight(t) {
    return Z(this, void 0, void 0, function* () {
      const { height: e } = yield this.messageBus.sendAsync("OBR_POPOVER_GET_HEIGHT", { id: t });
      return e;
    });
  }
  setHeight(t, e) {
    return Z(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_POPOVER_SET_HEIGHT", { id: t, height: e });
    });
  }
}
var Yt = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class Ge {
  constructor(t) {
    this.messageBus = t;
  }
  open(t) {
    return Yt(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_MODAL_OPEN", Object.assign({}, Dt(t)));
    });
  }
  close(t) {
    return Yt(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_MODAL_CLOSE", { id: t });
    });
  }
}
var M = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class Ue {
  constructor(t) {
    this.messageBus = t;
  }
  getWidth() {
    return M(this, void 0, void 0, function* () {
      const { width: t } = yield this.messageBus.sendAsync("OBR_ACTION_GET_WIDTH", {});
      return t;
    });
  }
  setWidth(t) {
    return M(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_ACTION_SET_WIDTH", { width: t });
    });
  }
  getHeight() {
    return M(this, void 0, void 0, function* () {
      const { height: t } = yield this.messageBus.sendAsync("OBR_ACTION_GET_HEIGHT", {});
      return t;
    });
  }
  setHeight(t) {
    return M(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_ACTION_SET_HEIGHT", { height: t });
    });
  }
  getBadgeText() {
    return M(this, void 0, void 0, function* () {
      const { badgeText: t } = yield this.messageBus.sendAsync("OBR_ACTION_GET_BADGE_TEXT", {});
      return t;
    });
  }
  setBadgeText(t) {
    return M(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_ACTION_SET_BADGE_TEXT", { badgeText: t });
    });
  }
  getBadgeBackgroundColor() {
    return M(this, void 0, void 0, function* () {
      const { badgeBackgroundColor: t } = yield this.messageBus.sendAsync("OBR_ACTION_GET_BADGE_BACKGROUND_COLOR", {});
      return t;
    });
  }
  setBadgeBackgroundColor(t) {
    return M(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_ACTION_SET_BADGE_BACKGROUND_COLOR", {
        badgeBackgroundColor: t
      });
    });
  }
  getIcon() {
    return M(this, void 0, void 0, function* () {
      const { icon: t } = yield this.messageBus.sendAsync("OBR_ACTION_GET_ICON", {});
      return t;
    });
  }
  setIcon(t) {
    return M(this, void 0, void 0, function* () {
      const e = tt([{ icon: t }]);
      yield this.messageBus.sendAsync("OBR_ACTION_SET_ICON", {
        icon: e[0].icon
      });
    });
  }
  getTitle() {
    return M(this, void 0, void 0, function* () {
      const { title: t } = yield this.messageBus.sendAsync("OBR_ACTION_GET_TITLE", {});
      return t;
    });
  }
  setTitle(t) {
    return M(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_ACTION_SET_TITLE", { title: t });
    });
  }
  isOpen() {
    return M(this, void 0, void 0, function* () {
      const { isOpen: t } = yield this.messageBus.sendAsync("OBR_ACTION_GET_IS_OPEN", {});
      return t;
    });
  }
  open() {
    return M(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_ACTION_OPEN", {});
    });
  }
  close() {
    return M(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_ACTION_CLOSE", {});
    });
  }
  onOpenChange(t) {
    const e = (n) => {
      t(n.isOpen);
    };
    return this.messageBus.send("OBR_ACTION_IS_OPEN_SUBSCRIBE", {}), this.messageBus.on("OBR_ACTION_IS_OPEN_EVENT_CHANGE", e), () => {
      this.messageBus.send("OBR_IS_OPEN_ACTION_UNSUBSCRIBE", {}), this.messageBus.off("OBR_ACTION_IS_OPEN_EVENT_CHANGE", e);
    };
  }
}
var Ve = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
Mt();
class We {
  constructor(t) {
    this.messageBus = t;
  }
  startItemInteraction(t) {
    return Ve(this, void 0, void 0, function* () {
      const { id: e } = yield this.messageBus.sendAsync("OBR_INTERACTION_START_ITEM_INTERACTION", { baseState: t });
      let n = t;
      return [(u) => {
        const [l, f] = Lt(n, u);
        return n = l, this.messageBus.send("OBR_INTERACTION_UPDATE_ITEM_INTERACTION", {
          id: e,
          patches: f
        }), l;
      }, () => {
        this.messageBus.send("OBR_INTERACTION_STOP_ITEM_INTERACTION", { id: e });
      }];
    });
  }
}
var He = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class Fe {
  constructor(t) {
    this.messageBus = t;
  }
  getPlayers() {
    return He(this, void 0, void 0, function* () {
      const { players: t } = yield this.messageBus.sendAsync("OBR_PARTY_GET_PLAYERS", {});
      return t;
    });
  }
  onChange(t) {
    const e = (n) => {
      t(n.players);
    };
    return this.messageBus.send("OBR_PARTY_SUBSCRIBE", {}), this.messageBus.on("OBR_PARTY_EVENT_CHANGE", e), () => {
      this.messageBus.send("OBR_PARTY_UNSUBSCRIBE", {}), this.messageBus.off("OBR_PARTY_EVENT_CHANGE", e);
    };
  }
}
var Ot = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class ze {
  constructor(t) {
    this.messageBus = t;
  }
  get id() {
    return this.messageBus.roomId;
  }
  getPermissions() {
    return Ot(this, void 0, void 0, function* () {
      const { permissions: t } = yield this.messageBus.sendAsync("OBR_ROOM_GET_PERMISSIONS", {});
      return t;
    });
  }
  getMetadata() {
    return Ot(this, void 0, void 0, function* () {
      const { metadata: t } = yield this.messageBus.sendAsync("OBR_ROOM_GET_METADATA", {});
      return t;
    });
  }
  setMetadata(t) {
    return Ot(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_ROOM_SET_METADATA", { update: t });
    });
  }
  onMetadataChange(t) {
    const e = (n) => {
      t(n.metadata);
    };
    return this.messageBus.send("OBR_ROOM_METADATA_SUBSCRIBE", {}), this.messageBus.on("OBR_ROOM_METADATA_EVENT_CHANGE", e), () => {
      this.messageBus.send("OBR_METADATA_ROOM_UNSUBSCRIBE", {}), this.messageBus.off("OBR_ROOM_METADATA_EVENT_CHANGE", e);
    };
  }
  onPermissionsChange(t) {
    const e = (n) => {
      t(n.permissions);
    };
    return this.messageBus.send("OBR_ROOM_PERMISSIONS_SUBSCRIBE", {}), this.messageBus.on("OBR_ROOM_PERMISSIONS_EVENT_CHANGE", e), () => {
      this.messageBus.send("OBR_PERMISSIONS_ROOM_UNSUBSCRIBE", {}), this.messageBus.off("OBR_ROOM_PERMISSIONS_EVENT_CHANGE", e);
    };
  }
}
var Ye = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class je {
  constructor(t) {
    this.messageBus = t;
  }
  getTheme() {
    return Ye(this, void 0, void 0, function* () {
      const { theme: t } = yield this.messageBus.sendAsync("OBR_THEME_GET_THEME", {});
      return t;
    });
  }
  onChange(t) {
    const e = (n) => {
      t(n.theme);
    };
    return this.messageBus.send("OBR_THEME_SUBSCRIBE", {}), this.messageBus.on("OBR_THEME_EVENT_CHANGE", e), () => {
      this.messageBus.send("OBR_THEME_UNSUBSCRIBE", {}), this.messageBus.off("OBR_THEME_EVENT_CHANGE", e);
    };
  }
}
var at = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class $e {
  constructor(t) {
    this.messageBus = t;
  }
  uploadImages(t, e) {
    return at(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_ASSETS_UPLOAD_IMAGES", {
        images: t,
        typeHint: e
      });
    });
  }
  uploadScenes(t, e) {
    return at(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_ASSETS_UPLOAD_SCENES", {
        scenes: t,
        disableShowScenes: e
      });
    });
  }
  downloadImages(t, e, n) {
    return at(this, void 0, void 0, function* () {
      const { images: r } = yield this.messageBus.sendAsync("OBR_ASSETS_DOWNLOAD_IMAGES", { multiple: t, defaultSearch: e, typeHint: n }, -1);
      return r;
    });
  }
  downloadScenes(t, e) {
    return at(this, void 0, void 0, function* () {
      const { scenes: n } = yield this.messageBus.sendAsync("OBR_ASSETS_DOWNLOAD_SCENES", { multiple: t, defaultSearch: e }, -1);
      return n;
    });
  }
}
var Ke = function(s, t, e, n) {
  function r(i) {
    return i instanceof e ? i : new e(function(u) {
      u(i);
    });
  }
  return new (e || (e = Promise))(function(i, u) {
    function l(o) {
      try {
        c(n.next(o));
      } catch (a) {
        u(a);
      }
    }
    function f(o) {
      try {
        c(n.throw(o));
      } catch (a) {
        u(a);
      }
    }
    function c(o) {
      o.done ? i(o.value) : r(o.value).then(l, f);
    }
    c((n = n.apply(s, t || [])).next());
  });
};
class Xe {
  constructor(t) {
    this.messageBus = t;
  }
  sendMessage(t, e, n) {
    return Ke(this, void 0, void 0, function* () {
      yield this.messageBus.sendAsync("OBR_BROADCAST_SEND_MESSAGE", {
        channel: t,
        data: e,
        options: n
      });
    });
  }
  onMessage(t, e) {
    return this.messageBus.send("OBR_BROADCAST_SUBSCRIBE", { channel: t }), this.messageBus.on(`OBR_BROADCAST_MESSAGE_${t}`, e), () => {
      this.messageBus.send("OBR_BROADCAST_UNSUBSCRIBE", { channel: t }), this.messageBus.off(`OBR_BROADCAST_MESSAGE_${t}`, e);
    };
  }
}
class P {
  constructor(t) {
    this._item = {
      createdUserId: t.id,
      id: Zt(),
      name: "Item",
      zIndex: Date.now(),
      lastModified: (/* @__PURE__ */ new Date()).toISOString(),
      lastModifiedUserId: t.id,
      locked: !1,
      metadata: {},
      position: { x: 0, y: 0 },
      rotation: 0,
      scale: { x: 1, y: 1 },
      type: "ITEM",
      visible: !0,
      layer: "POPOVER"
    };
  }
  createdUserId(t) {
    return this._item.createdUserId = t, this.self();
  }
  id(t) {
    return this._item.id = t, this.self();
  }
  name(t) {
    return this._item.name = t, this.self();
  }
  description(t) {
    return this._item.description = t, this.self();
  }
  lastModified(t) {
    return this._item.lastModified = t, this.self();
  }
  zIndex(t) {
    return this._item.zIndex = t, this.self();
  }
  lastModifiedUserId(t) {
    return this._item.lastModifiedUserId = t, this.self();
  }
  locked(t) {
    return this._item.locked = t, this.self();
  }
  metadata(t) {
    return this._item.metadata = t, this.self();
  }
  position(t) {
    return this._item.position = t, this.self();
  }
  rotation(t) {
    return this._item.rotation = t, this.self();
  }
  scale(t) {
    return this._item.scale = t, this.self();
  }
  visible(t) {
    return this._item.visible = t, this.self();
  }
  attachedTo(t) {
    return this._item.attachedTo = t, this.self();
  }
  layer(t) {
    return this._item.layer = t, this.self();
  }
  disableHit(t) {
    return this._item.disableHit = t, this.self();
  }
  disableAutoZIndex(t) {
    return this._item.disableAutoZIndex = t, this.self();
  }
  disableAttachmentBehavior(t) {
    return this._item.disableAttachmentBehavior = t, this.self();
  }
  self() {
    return this;
  }
}
class qe extends P {
  constructor(t) {
    super(t), this._points = [], this._style = {
      fillColor: "black",
      fillOpacity: 1,
      strokeColor: "white",
      strokeOpacity: 1,
      strokeWidth: 5,
      strokeDash: [],
      tension: 0.5
    }, this._item.name = "Curve", this._item.layer = "DRAWING";
  }
  points(t) {
    return this._points = t, this.self();
  }
  style(t) {
    return this._style = t, this.self();
  }
  fillColor(t) {
    return this._style.fillColor = t, this.self();
  }
  fillOpacity(t) {
    return this._style.fillOpacity = t, this.self();
  }
  strokeColor(t) {
    return this._style.strokeColor = t, this.self();
  }
  strokeOpacity(t) {
    return this._style.strokeOpacity = t, this.self();
  }
  strokeWidth(t) {
    return this._style.strokeWidth = t, this.self();
  }
  strokeDash(t) {
    return this._style.strokeDash = t, this.self();
  }
  tension(t) {
    return this._style.tension = t, this.self();
  }
  closed(t) {
    return this._style.closed = t, this.self();
  }
  build() {
    return Object.assign(Object.assign({}, this._item), { type: "CURVE", points: this._points, style: this._style });
  }
}
class Ze extends P {
  constructor(t, e, n) {
    super(t), this._image = e, this._grid = n, this._item.name = "Image", this._text = {
      richText: [
        {
          type: "paragraph",
          children: [{ text: "" }]
        }
      ],
      plainText: "",
      style: {
        padding: 8,
        fontFamily: "Roboto",
        fontSize: 24,
        fontWeight: 400,
        textAlign: "CENTER",
        textAlignVertical: "BOTTOM",
        fillColor: "white",
        fillOpacity: 1,
        strokeColor: "white",
        strokeOpacity: 1,
        strokeWidth: 0,
        lineHeight: 1.5
      },
      type: "PLAIN",
      width: "AUTO",
      height: "AUTO"
    }, this._textItemType = "LABEL";
  }
  text(t) {
    return this._text = t, this.self();
  }
  textItemType(t) {
    return this._textItemType = t, this.self();
  }
  textWidth(t) {
    return this._text.width = t, this.self();
  }
  textHeight(t) {
    return this._text.height = t, this.self();
  }
  richText(t) {
    return this._text.richText = t, this.self();
  }
  plainText(t) {
    return this._text.plainText = t, this.self();
  }
  textType(t) {
    return this._text.type = t, this.self();
  }
  textPadding(t) {
    return this._text.style.padding = t, this.self();
  }
  fontFamily(t) {
    return this._text.style.fontFamily = t, this.self();
  }
  fontSize(t) {
    return this._text.style.fontSize = t, this.self();
  }
  fontWeight(t) {
    return this._text.style.fontWeight = t, this.self();
  }
  textAlign(t) {
    return this._text.style.textAlign = t, this.self();
  }
  textAlignVertical(t) {
    return this._text.style.textAlignVertical = t, this.self();
  }
  textFillColor(t) {
    return this._text.style.fillColor = t, this.self();
  }
  textFillOpacity(t) {
    return this._text.style.fillOpacity = t, this.self();
  }
  textStrokeColor(t) {
    return this._text.style.strokeColor = t, this.self();
  }
  textStrokeOpacity(t) {
    return this._text.style.strokeOpacity = t, this.self();
  }
  textStrokeWidth(t) {
    return this._text.style.strokeWidth = t, this.self();
  }
  textLineHeight(t) {
    return this._text.style.lineHeight = t, this.self();
  }
  build() {
    return Object.assign(Object.assign({}, this._item), { type: "IMAGE", image: this._image, grid: this._grid, text: this._text, textItemType: this._textItemType });
  }
}
class Qe extends P {
  constructor(t) {
    super(t), this._text = {
      richText: [
        {
          type: "paragraph",
          children: [{ text: "" }]
        }
      ],
      plainText: "",
      style: {
        padding: 8,
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: 400,
        textAlign: "CENTER",
        textAlignVertical: "MIDDLE",
        fillColor: "white",
        fillOpacity: 1,
        strokeColor: "white",
        strokeOpacity: 1,
        strokeWidth: 0,
        lineHeight: 1.5
      },
      type: "PLAIN",
      width: "AUTO",
      height: "AUTO"
    }, this._style = {
      backgroundColor: "#3D4051",
      backgroundOpacity: 1,
      cornerRadius: 8,
      pointerDirection: "DOWN",
      pointerWidth: 4,
      pointerHeight: 4
    }, this._item.layer = "TEXT", this._item.name = "Label";
  }
  text(t) {
    return this._text = t, this.self();
  }
  width(t) {
    return this._text.width = t, this.self();
  }
  height(t) {
    return this._text.height = t, this.self();
  }
  plainText(t) {
    return this._text.plainText = t, this.self();
  }
  padding(t) {
    return this._text.style.padding = t, this.self();
  }
  fontFamily(t) {
    return this._text.style.fontFamily = t, this.self();
  }
  fontSize(t) {
    return this._text.style.fontSize = t, this.self();
  }
  fontWeight(t) {
    return this._text.style.fontWeight = t, this.self();
  }
  textAlign(t) {
    return this._text.style.textAlign = t, this.self();
  }
  textAlignVertical(t) {
    return this._text.style.textAlignVertical = t, this.self();
  }
  fillColor(t) {
    return this._text.style.fillColor = t, this.self();
  }
  fillOpacity(t) {
    return this._text.style.fillOpacity = t, this.self();
  }
  strokeColor(t) {
    return this._text.style.strokeColor = t, this.self();
  }
  strokeOpacity(t) {
    return this._text.style.strokeOpacity = t, this.self();
  }
  strokeWidth(t) {
    return this._text.style.strokeWidth = t, this.self();
  }
  lineHeight(t) {
    return this._text.style.lineHeight = t, this.self();
  }
  style(t) {
    return this._style = t, this.self();
  }
  backgroundColor(t) {
    return this._style.backgroundColor = t, this.self();
  }
  backgroundOpacity(t) {
    return this._style.backgroundOpacity = t, this.self();
  }
  cornerRadius(t) {
    return this._style.cornerRadius = t, this.self();
  }
  pointerWidth(t) {
    return this._style.pointerWidth = t, this.self();
  }
  pointerHeight(t) {
    return this._style.pointerHeight = t, this.self();
  }
  pointerDirection(t) {
    return this._style.pointerDirection = t, this.self();
  }
  maxViewScale(t) {
    return this._style.maxViewScale = t, this.self();
  }
  minViewScale(t) {
    return this._style.minViewScale = t, this.self();
  }
  build() {
    return Object.assign(Object.assign({}, this._item), { type: "LABEL", text: this._text, style: this._style });
  }
}
class Je extends P {
  constructor(t) {
    super(t), this._style = {
      strokeColor: "black",
      strokeOpacity: 1,
      strokeWidth: 5,
      strokeDash: []
    }, this._startPosition = { x: 0, y: 0 }, this._endPosition = { x: 0, y: 0 }, this._item.layer = "DRAWING", this._item.name = "Line";
  }
  style(t) {
    return this._style = t, this.self();
  }
  strokeColor(t) {
    return this._style.strokeColor = t, this.self();
  }
  strokeOpacity(t) {
    return this._style.strokeOpacity = t, this.self();
  }
  strokeWidth(t) {
    return this._style.strokeWidth = t, this.self();
  }
  strokeDash(t) {
    return this._style.strokeDash = t, this.self();
  }
  startPosition(t) {
    return this._startPosition = t, this.self();
  }
  endPosition(t) {
    return this._endPosition = t, this.self();
  }
  build() {
    return Object.assign(Object.assign({}, this._item), { type: "LINE", startPosition: this._startPosition, endPosition: this._endPosition, style: this._style });
  }
}
class ts extends P {
  constructor(t) {
    super(t), this._color = "black", this._radius = 20, this._item.layer = "POINTER", this._item.name = "Pointer";
  }
  color(t) {
    return this._color = t, this.self();
  }
  radius(t) {
    return this._radius = t, this.self();
  }
  build() {
    return Object.assign(Object.assign({}, this._item), { type: "POINTER", color: this._color, radius: this._radius });
  }
}
class es extends P {
  constructor(t) {
    super(t), this._startPosition = { x: 0, y: 0 }, this._endPosition = { x: 0, y: 0 }, this._measurement = "", this._item.layer = "RULER", this._item.name = "Ruler", this._style = {
      variant: "FILLED"
    };
  }
  startPosition(t) {
    return this._startPosition = t, this.self();
  }
  endPosition(t) {
    return this._endPosition = t, this.self();
  }
  measurement(t) {
    return this._measurement = t, this.self();
  }
  variant(t) {
    return this._style.variant = t, this.self();
  }
  build() {
    return Object.assign(Object.assign({}, this._item), { type: "RULER", startPosition: this._startPosition, endPosition: this._endPosition, measurement: this._measurement, style: this._style });
  }
}
class ss extends P {
  constructor(t) {
    super(t), this._width = 0, this._height = 0, this._shapeType = "RECTANGLE", this._style = {
      fillColor: "black",
      fillOpacity: 1,
      strokeColor: "white",
      strokeOpacity: 1,
      strokeWidth: 5,
      strokeDash: []
    }, this._item.layer = "DRAWING", this._item.name = "Shape";
  }
  width(t) {
    return this._width = t, this.self();
  }
  height(t) {
    return this._height = t, this.self();
  }
  shapeType(t) {
    return this._shapeType = t, this.self();
  }
  style(t) {
    return this._style = t, this.self();
  }
  fillColor(t) {
    return this._style.fillColor = t, this.self();
  }
  fillOpacity(t) {
    return this._style.fillOpacity = t, this.self();
  }
  strokeColor(t) {
    return this._style.strokeColor = t, this.self();
  }
  strokeOpacity(t) {
    return this._style.strokeOpacity = t, this.self();
  }
  strokeWidth(t) {
    return this._style.strokeWidth = t, this.self();
  }
  strokeDash(t) {
    return this._style.strokeDash = t, this.self();
  }
  build() {
    return Object.assign(Object.assign({}, this._item), { type: "SHAPE", width: this._width, height: this._height, shapeType: this._shapeType, style: this._style });
  }
}
class ns extends P {
  constructor(t) {
    super(t), this._text = {
      richText: [
        {
          type: "paragraph",
          children: [{ text: "" }]
        }
      ],
      plainText: "",
      style: {
        padding: 0,
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: 400,
        textAlign: "LEFT",
        textAlignVertical: "TOP",
        fillColor: "white",
        fillOpacity: 1,
        strokeColor: "white",
        strokeOpacity: 1,
        strokeWidth: 0,
        lineHeight: 1.5
      },
      type: "RICH",
      width: "AUTO",
      height: "AUTO"
    }, this._item.layer = "TEXT", this._item.name = "Text";
  }
  text(t) {
    return this._text = t, this.self();
  }
  width(t) {
    return this._text.width = t, this.self();
  }
  height(t) {
    return this._text.height = t, this.self();
  }
  richText(t) {
    return this._text.richText = t, this.self();
  }
  plainText(t) {
    return this._text.plainText = t, this.self();
  }
  textType(t) {
    return this._text.type = t, this.self();
  }
  padding(t) {
    return this._text.style.padding = t, this.self();
  }
  fontFamily(t) {
    return this._text.style.fontFamily = t, this.self();
  }
  fontSize(t) {
    return this._text.style.fontSize = t, this.self();
  }
  fontWeight(t) {
    return this._text.style.fontWeight = t, this.self();
  }
  textAlign(t) {
    return this._text.style.textAlign = t, this.self();
  }
  textAlignVertical(t) {
    return this._text.style.textAlignVertical = t, this.self();
  }
  fillColor(t) {
    return this._text.style.fillColor = t, this.self();
  }
  fillOpacity(t) {
    return this._text.style.fillOpacity = t, this.self();
  }
  strokeColor(t) {
    return this._text.style.strokeColor = t, this.self();
  }
  strokeOpacity(t) {
    return this._text.style.strokeOpacity = t, this.self();
  }
  strokeWidth(t) {
    return this._text.style.strokeWidth = t, this.self();
  }
  lineHeight(t) {
    return this._text.style.lineHeight = t, this.self();
  }
  build() {
    return Object.assign(Object.assign({}, this._item), { type: "TEXT", text: this._text });
  }
}
class is extends P {
  constructor(t) {
    super(t), this._commands = [], this._fillRule = "nonzero", this._style = {
      fillColor: "black",
      fillOpacity: 1,
      strokeColor: "white",
      strokeOpacity: 1,
      strokeWidth: 5,
      strokeDash: []
    }, this._item.name = "Path", this._item.layer = "DRAWING";
  }
  commands(t) {
    return this._commands = t, this.self();
  }
  fillRule(t) {
    return this._fillRule = t, this.self();
  }
  style(t) {
    return this._style = t, this.self();
  }
  fillColor(t) {
    return this._style.fillColor = t, this.self();
  }
  fillOpacity(t) {
    return this._style.fillOpacity = t, this.self();
  }
  strokeColor(t) {
    return this._style.strokeColor = t, this.self();
  }
  strokeOpacity(t) {
    return this._style.strokeOpacity = t, this.self();
  }
  strokeWidth(t) {
    return this._style.strokeWidth = t, this.self();
  }
  strokeDash(t) {
    return this._style.strokeDash = t, this.self();
  }
  build() {
    return Object.assign(Object.assign({}, this._item), { type: "PATH", commands: this._commands, fillRule: this._fillRule, style: this._style });
  }
}
class rs {
  constructor(t) {
    this._upload = {
      file: t,
      grid: {
        dpi: 150,
        offset: { x: 0, y: 0 }
      },
      name: "",
      rotation: 0,
      scale: { x: 1, y: 1 },
      text: {
        richText: [
          {
            type: "paragraph",
            children: [{ text: "" }]
          }
        ],
        plainText: "",
        style: {
          padding: 8,
          fontFamily: "Roboto",
          fontSize: 24,
          fontWeight: 400,
          textAlign: "CENTER",
          textAlignVertical: "BOTTOM",
          fillColor: "white",
          fillOpacity: 1,
          strokeColor: "white",
          strokeOpacity: 1,
          strokeWidth: 0,
          lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
      },
      locked: !1,
      textItemType: "LABEL",
      visible: !0
    };
  }
  grid(t) {
    return this._upload.grid = t, this;
  }
  dpi(t) {
    return this._upload.grid.dpi = t, this;
  }
  offset(t) {
    return this._upload.grid.offset = t, this;
  }
  name(t) {
    return this._upload.name = t, this;
  }
  description(t) {
    return this._upload.description = t, this;
  }
  rotation(t) {
    return this._upload.rotation = t, this;
  }
  scale(t) {
    return this._upload.scale = t, this;
  }
  locked(t) {
    return this._upload.locked = t, this;
  }
  visible(t) {
    return this._upload.visible = t, this;
  }
  text(t) {
    return this._upload.text = t, this;
  }
  textItemType(t) {
    return this._upload.textItemType = t, this;
  }
  textWidth(t) {
    return this._upload.text.width = t, this;
  }
  textHeight(t) {
    return this._upload.text.height = t, this;
  }
  richText(t) {
    return this._upload.text.richText = t, this;
  }
  plainText(t) {
    return this._upload.text.plainText = t, this;
  }
  textType(t) {
    return this._upload.text.type = t, this;
  }
  textPadding(t) {
    return this._upload.text.style.padding = t, this;
  }
  fontFamily(t) {
    return this._upload.text.style.fontFamily = t, this;
  }
  fontSize(t) {
    return this._upload.text.style.fontSize = t, this;
  }
  fontWeight(t) {
    return this._upload.text.style.fontWeight = t, this;
  }
  textAlign(t) {
    return this._upload.text.style.textAlign = t, this;
  }
  textAlignVertical(t) {
    return this._upload.text.style.textAlignVertical = t, this;
  }
  textFillColor(t) {
    return this._upload.text.style.fillColor = t, this;
  }
  textFillOpacity(t) {
    return this._upload.text.style.fillOpacity = t, this;
  }
  textStrokeColor(t) {
    return this._upload.text.style.strokeColor = t, this;
  }
  textStrokeOpacity(t) {
    return this._upload.text.style.strokeOpacity = t, this;
  }
  textStrokeWidth(t) {
    return this._upload.text.style.strokeWidth = t, this;
  }
  textLineHeight(t) {
    return this._upload.text.style.lineHeight = t, this;
  }
  build() {
    return this._upload;
  }
}
class os {
  constructor() {
    this._upload = {
      name: "New Scene",
      fog: { filled: !1, style: { color: "#222222", strokeWidth: 5 } },
      grid: {
        dpi: 150,
        scale: "5ft",
        style: {
          lineColor: "LIGHT",
          lineOpacity: 0.4,
          lineType: "DASHED",
          lineWidth: 2
        },
        measurement: "CHEBYSHEV",
        type: "SQUARE"
      },
      items: []
    };
  }
  name(t) {
    return this._upload.name = t, this;
  }
  fogFilled(t) {
    return this._upload.fog.filled = t, this;
  }
  fogColor(t) {
    return this._upload.fog.style.color = t, this;
  }
  fogStrokeWidth(t) {
    return this._upload.fog.style.strokeWidth = t, this;
  }
  gridScale(t) {
    return this._upload.grid.scale = t, this;
  }
  gridColor(t) {
    return this._upload.grid.style.lineColor = t, this;
  }
  gridOpacity(t) {
    return this._upload.grid.style.lineOpacity = t, this;
  }
  gridLineType(t) {
    return this._upload.grid.style.lineType = t, this;
  }
  gridMeasurement(t) {
    return this._upload.grid.measurement = t, this;
  }
  gridType(t) {
    return this._upload.grid.type = t, this;
  }
  items(t) {
    return this._upload.items = t, this;
  }
  baseMap(t) {
    return this._upload.baseMap = t, this;
  }
  thumbnail(t) {
    return this._upload.thumbnail = t, this;
  }
  build() {
    return this._upload;
  }
}
const bt = typeof Buffer == "function", jt = typeof TextDecoder == "function" ? new TextDecoder() : void 0;
typeof TextEncoder == "function" && new TextEncoder();
const us = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", cs = Array.prototype.slice.call(us), lt = ((s) => {
  let t = {};
  return s.forEach((e, n) => t[e] = n), t;
})(cs), ds = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, F = String.fromCharCode.bind(String), $t = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : (s) => new Uint8Array(Array.prototype.slice.call(s, 0)), re = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, ""), as = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, ls = (s) => {
  switch (s.length) {
    case 4:
      var t = (7 & s.charCodeAt(0)) << 18 | (63 & s.charCodeAt(1)) << 12 | (63 & s.charCodeAt(2)) << 6 | 63 & s.charCodeAt(3), e = t - 65536;
      return F((e >>> 10) + 55296) + F((e & 1023) + 56320);
    case 3:
      return F((15 & s.charCodeAt(0)) << 12 | (63 & s.charCodeAt(1)) << 6 | 63 & s.charCodeAt(2));
    default:
      return F((31 & s.charCodeAt(0)) << 6 | 63 & s.charCodeAt(1));
  }
}, hs = (s) => s.replace(as, ls), fs = (s) => {
  if (s = s.replace(/\s+/g, ""), !ds.test(s))
    throw new TypeError("malformed base64.");
  s += "==".slice(2 - (s.length & 3));
  let t, e = "", n, r;
  for (let i = 0; i < s.length; )
    t = lt[s.charAt(i++)] << 18 | lt[s.charAt(i++)] << 12 | (n = lt[s.charAt(i++)]) << 6 | (r = lt[s.charAt(i++)]), e += n === 64 ? F(t >> 16 & 255) : r === 64 ? F(t >> 16 & 255, t >> 8 & 255) : F(t >> 16 & 255, t >> 8 & 255, t & 255);
  return e;
}, oe = typeof atob == "function" ? (s) => atob(re(s)) : bt ? (s) => Buffer.from(s, "base64").toString("binary") : fs, _s = bt ? (s) => $t(Buffer.from(s, "base64")) : (s) => $t(oe(s).split("").map((t) => t.charCodeAt(0))), ys = bt ? (s) => Buffer.from(s, "base64").toString("utf8") : jt ? (s) => jt.decode(_s(s)) : (s) => hs(oe(s)), Es = (s) => re(s.replace(/[-_]/g, (t) => t == "-" ? "+" : "/")), ps = (s) => ys(Es(s));
function ms() {
  const t = new URLSearchParams(window.location.search).get("obrref");
  let e = "", n = "";
  if (t) {
    const i = ps(t).split(" ");
    i.length === 2 && (e = i[0], n = i[1]);
  }
  return { origin: e, roomId: n };
}
class Os extends P {
  constructor(t, e, n) {
    super(t), this._image = e, this._grid = n, this._item.name = "Billboard", this._style = {};
  }
  maxViewScale(t) {
    return this._style.maxViewScale = t, this.self();
  }
  minViewScale(t) {
    return this._style.minViewScale = t, this.self();
  }
  build() {
    return Object.assign(Object.assign({}, this._item), { type: "BILLBOARD", image: this._image, grid: this._grid, style: this._style });
  }
}
class gs extends P {
  constructor(t) {
    super(t), this._item.name = "Effect", this._width = 0, this._height = 0, this._sksl = "", this._effectType = "VIEWPORT", this._uniforms = [], this._blendMode = "SRC_OVER";
  }
  width(t) {
    return this._width = t, this.self();
  }
  height(t) {
    return this._height = t, this.self();
  }
  sksl(t) {
    return this._sksl = t, this.self();
  }
  effectType(t) {
    return this._effectType = t, this.self();
  }
  uniforms(t) {
    return this._uniforms = t, this.self();
  }
  blendMode(t) {
    return this._blendMode = t, this.self();
  }
  build() {
    return Object.assign(Object.assign({}, this._item), { type: "EFFECT", width: this._width, height: this._height, sksl: this._sksl, effectType: this._effectType, uniforms: this._uniforms, blendMode: this._blendMode });
  }
}
class Ts extends P {
  constructor(t) {
    super(t), this._sourceRadius = 50, this._attenuationRadius = 12 * 150, this._falloff = 1, this._innerAngle = 360, this._outerAngle = 360, this._lightType = "PRIMARY", this._item.name = "Light", this._item.layer = "FOG", this._item.zIndex = 0, this._item.disableAutoZIndex = !0;
  }
  sourceRadius(t) {
    return this._sourceRadius = t, this.self();
  }
  attenuationRadius(t) {
    return this._attenuationRadius = t, this.self();
  }
  falloff(t) {
    return this._falloff = t, this.self();
  }
  innerAngle(t) {
    return this._innerAngle = t, this.self();
  }
  outerAngle(t) {
    return this._outerAngle = t, this.self();
  }
  lightType(t) {
    return this._lightType = t, this.self();
  }
  build() {
    return Object.assign(Object.assign({}, this._item), { type: "LIGHT", sourceRadius: this._sourceRadius, attenuationRadius: this._attenuationRadius, falloff: this._falloff, innerAngle: this._innerAngle, outerAngle: this._outerAngle, lightType: this._lightType });
  }
}
class As extends P {
  constructor(t) {
    super(t), this._points = [], this._doubleSided = !0, this._blocking = !0, this._item.name = "Wall", this._item.layer = "FOG", this._item.zIndex = 0, this._item.disableAutoZIndex = !0;
  }
  points(t) {
    return this._points = t, this.self();
  }
  doubleSided(t) {
    return this._doubleSided = t, this.self();
  }
  blocking(t) {
    return this._blocking = t, this.self();
  }
  build() {
    return Object.assign(Object.assign({}, this._item), { type: "WALL", points: this._points, doubleSided: this._doubleSided, blocking: this._blocking });
  }
}
function Bs(s) {
  return s.type === "BILLBOARD";
}
function Rs(s) {
  return s.type === "CURVE";
}
function vs(s) {
  return s.type === "EFFECT";
}
function xs(s) {
  return s.type === "IMAGE";
}
function Cs(s) {
  return s.type === "LABEL";
}
function Ss(s) {
  return s.type === "LIGHT";
}
function Is(s) {
  return s.type === "LINE";
}
var xt;
(function(s) {
  s[s.MOVE = 0] = "MOVE", s[s.LINE = 1] = "LINE", s[s.QUAD = 2] = "QUAD", s[s.CONIC = 3] = "CONIC", s[s.CUBIC = 4] = "CUBIC", s[s.CLOSE = 5] = "CLOSE";
})(xt || (xt = {}));
function Ns(s) {
  return s.type === "PATH";
}
function ws(s) {
  return s.type === "POINTER";
}
function Ms(s) {
  return s.type === "RULER";
}
function Ls(s) {
  return s.type === "SHAPE";
}
function Ds(s) {
  return s.type === "TEXT";
}
function bs(s) {
  return "text" in s;
}
function Ps(s) {
  return "children" in s;
}
function ks(s) {
  return s.type === "WALL";
}
function Kt(s, t) {
  return Math.round(s / t) * t;
}
function Xt(s, t) {
  return Math.floor(s / t) * t;
}
function Ct(s) {
  return s * (Math.PI / 180);
}
function Gs(s) {
  return s * (180 / Math.PI);
}
function qt(s, t, e) {
  return s * (1 - e) + t * e;
}
class Us {
  /**
   * @summary magnitude is used here to not conflict with native length property
   * @returns The squared length of vector `p`
   */
  static magnitudeSquared(t) {
    return t.x * t.x + t.y * t.y;
  }
  /**
   * @summary magnitude is used here to not conflict with native length property
   * @returns The length of vector `p`
   */
  static magnitude(t) {
    const e = Math.sqrt(this.magnitudeSquared(t));
    return isNaN(e) ? 0 : e;
  }
  /**
   * @returns `p` normalized, if length of `p` is 0 `{x: 0, y: 0}` is returned
   */
  static normalize(t) {
    const e = this.magnitude(t);
    return e === 0 ? { x: 0, y: 0 } : this.divide(t, e);
  }
  /**
   * @returns The dot product between `a` and `b`
   */
  static dot(t, e) {
    return t.x * e.x + t.y * e.y;
  }
  /**
   * @returns `a` minus `b`
   */
  static subtract(t, e) {
    return typeof e == "number" ? { x: t.x - e, y: t.y - e } : { x: t.x - e.x, y: t.y - e.y };
  }
  /**
   * @returns `a` plus `b`
   */
  static add(t, e) {
    return typeof e == "number" ? { x: t.x + e, y: t.y + e } : { x: t.x + e.x, y: t.y + e.y };
  }
  /**
   * @returns `a` multiplied by `b`
   */
  static multiply(t, e) {
    return typeof e == "number" ? { x: t.x * e, y: t.y * e } : { x: t.x * e.x, y: t.y * e.y };
  }
  /**
   * @returns `a` divided by `b`
   */
  static divide(t, e) {
    return typeof e == "number" ? { x: t.x / e, y: t.y / e } : { x: t.x / e.x, y: t.y / e.y };
  }
  /**
   * Rotates a point around a given origin by an angle in degrees
   * @param point Point to rotate
   * @param origin Origin of the rotation
   * @param angle Angle of rotation in degrees
   * @returns Rotated point
   */
  static rotate(t, e, n) {
    const r = Math.cos(Ct(n)), i = Math.sin(Ct(n)), u = this.subtract(t, e);
    return {
      x: e.x + r * u.x - i * u.y,
      y: e.y + i * u.x + r * u.y
    };
  }
  /**
   * @returns The min of `a` and `b`
   */
  static min(t, e) {
    return typeof e == "number" ? { x: Math.min(t.x, e), y: Math.min(t.y, e) } : { x: Math.min(t.x, e.x), y: Math.min(t.y, e.y) };
  }
  /**
   * @returns The component wise minimum of `a`
   */
  static componentMin(t) {
    return t.x < t.y ? t.x : t.y;
  }
  /**
   * @returns The max of `a` and `b`
   */
  static max(t, e) {
    return typeof e == "number" ? { x: Math.max(t.x, e), y: Math.max(t.y, e) } : { x: Math.max(t.x, e.x), y: Math.max(t.y, e.y) };
  }
  /**
   * @returns The component wise maximum of `a`
   */
  static componentMax(t) {
    return t.x > t.y ? t.x : t.y;
  }
  /**
   * Rounds `p` to the nearest value of `to`
   */
  static roundTo(t, e) {
    return {
      x: Kt(t.x, e.x),
      y: Kt(t.y, e.y)
    };
  }
  /**
   * Floors `p` to the nearest value of `to`
   */
  static floorTo(t, e) {
    return {
      x: Xt(t.x, e.x),
      y: Xt(t.y, e.y)
    };
  }
  /**
   * @returns The component wise sign of `a`
   */
  static sign(t) {
    return { x: Math.sign(t.x), y: Math.sign(t.y) };
  }
  /**
   * @returns The component wise absolute of `a`
   */
  static abs(t) {
    return { x: Math.abs(t.x), y: Math.abs(t.y) };
  }
  /**
   * @returns `a` to the power of `b`
   */
  static pow(t, e) {
    return typeof e == "number" ? { x: Math.pow(t.x, e), y: Math.pow(t.y, e) } : { x: Math.pow(t.x, e.x), y: Math.pow(t.y, e.y) };
  }
  /**
   * Clamps `a` between `min` and `max`
   */
  static clamp(t, e, n) {
    return {
      x: Math.min(Math.max(t.x, e), n),
      y: Math.min(Math.max(t.y, e), n)
    };
  }
  /**
   * Calculates an axis-aligned bounding box around an array of point
   */
  static boundingBox(t) {
    let e = Number.MAX_SAFE_INTEGER, n = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER, i = Number.MIN_SAFE_INTEGER;
    for (let c of t)
      e = c.x < e ? c.x : e, n = c.x > n ? c.x : n, r = c.y < r ? c.y : r, i = c.y > i ? c.y : i;
    let u = n - e, l = i - r, f = { x: (e + n) / 2, y: (r + i) / 2 };
    return {
      min: { x: e, y: r },
      max: { x: n, y: i },
      width: u,
      height: l,
      center: f
    };
  }
  /**
   * Checks to see if a point is in a polygon using ray casting
   * See more at {@link https://en.wikipedia.org/wiki/Point_in_polygon#Ray_casting_algorithm}
   * and {@link https://stackoverflow.com/questions/217578/how-can-i-determine-whether-a-2d-point-is-within-a-polygon/2922778}
   */
  static pointInPolygon(t, e) {
    const n = this.boundingBox(e);
    if (t.x < n.min.x || t.x > n.max.x || t.y < n.min.y || t.y > n.max.y)
      return !1;
    let r = !1;
    for (let i = 0, u = e.length - 1; i < e.length; u = i++) {
      const l = e[i].y > t.y, f = e[u].y > t.y;
      l !== f && t.x < (e[u].x - e[i].x) * (t.y - e[i].y) / (e[u].y - e[i].y) + e[i].x && (r = !r);
    }
    return r;
  }
  /**
   * @returns True if the distance between `a` and `b` is under `threshold`
   */
  static compare(t, e, n) {
    return this.magnitudeSquared(this.subtract(t, e)) < n * n;
  }
  /**
   * @returns The distance between two vectors
   */
  static distance(t, e) {
    return this.magnitude(this.subtract(t, e));
  }
  /**
   * Linear interpolate between `a` and `b` by `alpha`
   */
  static lerp(t, e, n) {
    return { x: qt(t.x, e.x, n), y: qt(t.y, e.y, n) };
  }
  /**
   * @returns The centroid of the given points
   */
  static centroid(t) {
    let e = { x: 0, y: 0 };
    for (let n of t)
      e.x += n.x, e.y += n.y;
    return t.length > 0 && (e = { x: e.x / t.length, y: e.y / t.length }), e;
  }
}
class H {
  /**
   * @returns The inverse of the given `matrix`
   */
  static inverse(t) {
    const [e, n, r, i, u, l, f, c, o] = t, a = e * (u * o - c * l) - n * (i * o - l * f) + r * (i * c - u * f);
    if (Math.abs(a) < 1e-14)
      return t;
    const E = 1 / a, R = (u * o - c * l) * E, g = (r * c - n * o) * E, A = (n * l - r * u) * E, x = (l * f - i * o) * E, T = (e * o - r * f) * E, B = (i * r - e * l) * E, m = (i * c - f * u) * E, d = (f * n - e * c) * E, h = (e * u - i * n) * E;
    return [R, g, A, x, T, B, m, d, h];
  }
  /**
   * @returns `a` multiplied by `b`
   */
  static multiply(t, e) {
    return [
      t[0] * e[0] + t[1] * e[3] + t[2] * e[6],
      t[0] * e[1] + t[1] * e[4] + t[2] * e[7],
      t[0] * e[2] + t[1] * e[5] + t[2] * e[8],
      t[3] * e[0] + t[4] * e[3] + t[5] * e[6],
      t[3] * e[1] + t[4] * e[4] + t[5] * e[7],
      t[3] * e[2] + t[4] * e[5] + t[5] * e[8],
      t[6] * e[0] + t[7] * e[3] + t[8] * e[6],
      t[6] * e[1] + t[7] * e[4] + t[8] * e[7],
      t[6] * e[2] + t[7] * e[5] + t[8] * e[8]
    ];
  }
  /**
   * Create a new transformation matrix from a position
   */
  static fromPosition(t) {
    return [1, 0, t.x, 0, 1, t.y, 0, 0, 1];
  }
  /**
   * Create a new transformation matrix from a rotation
   * @param rotation - rotation in degrees
   */
  static fromRotation(t) {
    const e = Ct(t);
    return [Math.cos(e), -Math.sin(e), 0, Math.sin(e), Math.cos(e), 0, 0, 0, 1];
  }
  /**
   * Create a new transformation matrix from a scale
   */
  static fromScale(t) {
    return [t.x, 0, 0, 0, t.y, 0, 0, 0, 1];
  }
  static fromItem(t) {
    const e = H.fromPosition(t.position), n = H.fromScale(t.scale), r = H.fromRotation(t.rotation);
    return H.multiply(H.multiply(e, r), n);
  }
  /**
   * Decompose matrix into its individual parts
   * Adapted from @link https://frederic-wang.fr/decomposition-of-2d-transform-matrices.html
   */
  static decompose(t) {
    const [e, n, r, i, u, l] = t, f = e * u - i * n, c = {
      position: { x: r, y: l },
      rotation: 0,
      scale: { x: 1, y: 1 }
    };
    if (e != 0 || i != 0) {
      var o = Math.sqrt(e * e + i * i);
      c.rotation = i > 0 ? Math.acos(e / o) : -Math.acos(e / o), c.scale = { x: o, y: f / o };
    } else if (n != 0 || u != 0) {
      var a = Math.sqrt(n * n + u * u);
      c.rotation = Math.PI / 2 - (u > 0 ? Math.acos(-n / a) : -Math.acos(n / a)), c.scale = { x: f / a, y: a };
    }
    return c.rotation = Gs(c.rotation), c;
  }
}
const St = ms(), S = new pe(St.origin, St.roomId), Vs = new de(S), L = new ce(S), Ws = new Fe(S), Hs = new me(S), Fs = new De(S), zs = new be(S), Ys = new Pe(S), js = new ke(S), $s = new Ge(S), Ks = new Ue(S), Xs = new We(S), qs = new ze(S), Zs = new je(S), Qs = new $e(S), Js = new Xe(S), tn = {
  onReady: (s) => {
    S.ready ? s() : S.once("OBR_READY", () => s());
  },
  get isReady() {
    return S.ready;
  },
  viewport: Vs,
  player: L,
  party: Ws,
  notification: Hs,
  scene: Fs,
  contextMenu: zs,
  tool: Ys,
  popover: js,
  modal: $s,
  action: Ks,
  interaction: Xs,
  room: qs,
  theme: Zs,
  assets: Qs,
  broadcast: Js,
  /** True if the current site is embedded in an instance of Owlbear Rodeo */
  isAvailable: !!St.origin
};
function en(s, t) {
  return new Os(L, s, t);
}
function sn() {
  return new qe(L);
}
function nn() {
  return new gs(L);
}
function rn(s, t) {
  return new Ze(L, s, t);
}
function on() {
  return new Qe(L);
}
function un() {
  return new Ts(L);
}
function cn() {
  return new Je(L);
}
function dn() {
  return new ts(L);
}
function an() {
  return new es(L);
}
function ln() {
  return new ss(L);
}
function hn() {
  return new ns(L);
}
function fn() {
  return new is(L);
}
function _n() {
  return new As(L);
}
function yn(s) {
  return new rs(s);
}
function En() {
  return new os();
}
const pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get Command() {
    return xt;
  },
  Math2: Us,
  MathM: H,
  buildBillboard: en,
  buildCurve: sn,
  buildEffect: nn,
  buildImage: rn,
  buildImageUpload: yn,
  buildLabel: on,
  buildLight: un,
  buildLine: cn,
  buildPath: fn,
  buildPointer: dn,
  buildRuler: an,
  buildSceneUpload: En,
  buildShape: ln,
  buildText: hn,
  buildWall: _n,
  default: tn,
  isBillboard: Bs,
  isCurve: Rs,
  isEffect: vs,
  isElement: Ps,
  isFormattedText: bs,
  isImage: xs,
  isLabel: Cs,
  isLight: Ss,
  isLine: Is,
  isPath: Ns,
  isPointer: ws,
  isRuler: Ms,
  isShape: Ls,
  isText: Ds,
  isWall: ks
}, Symbol.toStringTag, { value: "Module" }));
console.log("SDK exports:", pn);
const mn = {};
export {
  mn as default
};
