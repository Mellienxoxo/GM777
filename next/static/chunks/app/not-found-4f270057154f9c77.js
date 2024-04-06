(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [160],
  {
    92758: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 43619));
    },
    55327: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return Error;
          },
        });
      let r = n(21024),
        o = r._(n(2265)),
        l = r._(n(35793)),
        a = {
          400: "Bad Request",
          404: "This page could not be found",
          405: "Method Not Allowed",
          500: "Internal Server Error",
        };
      function _getInitialProps(e) {
        let { res: t, err: n } = e,
          r = t && t.statusCode ? t.statusCode : n ? n.statusCode : 404;
        return { statusCode: r };
      }
      let u = {
        error: {
          fontFamily:
            'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        desc: { lineHeight: "48px" },
        h1: {
          display: "inline-block",
          margin: "0 20px 0 0",
          paddingRight: 23,
          fontSize: 24,
          fontWeight: 500,
          verticalAlign: "top",
        },
        h2: { fontSize: 14, fontWeight: 400, lineHeight: "28px" },
        wrap: { display: "inline-block" },
      };
      let Error = class Error extends o.default.Component {
        render() {
          let { statusCode: e, withDarkMode: t = !0 } = this.props,
            n = this.props.title || a[e] || "An unexpected error has occurred";
          return o.default.createElement(
            "div",
            { style: u.error },
            o.default.createElement(
              l.default,
              null,
              o.default.createElement(
                "title",
                null,
                e
                  ? e + ": " + n
                  : "Application error: a client-side exception has occurred"
              )
            ),
            o.default.createElement(
              "div",
              { style: u.desc },
              o.default.createElement("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" +
                    (t
                      ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"
                      : ""),
                },
              }),
              e
                ? o.default.createElement(
                    "h1",
                    { className: "next-error-h1", style: u.h1 },
                    e
                  )
                : null,
              o.default.createElement(
                "div",
                { style: u.wrap },
                o.default.createElement(
                  "h2",
                  { style: u.h2 },
                  this.props.title || e
                    ? n
                    : o.default.createElement(
                        o.default.Fragment,
                        null,
                        "Application error: a client-side exception has occurred (see the browser console for more information)"
                      ),
                  "."
                )
              )
            )
          );
        }
      };
      (Error.displayName = "ErrorPage"),
        (Error.getInitialProps = _getInitialProps),
        (Error.origGetInitialProps = _getInitialProps),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    28569: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(21024),
        o = r._(n(2265)),
        l = o.default.createContext({});
    },
    94472: function (e, t) {
      "use strict";
      function isInAmpMode(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return isInAmpMode;
          },
        });
    },
    35793: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          defaultHead: function () {
            return defaultHead;
          },
          default: function () {
            return _default;
          },
        });
      let r = n(21024),
        o = n(68533),
        l = o._(n(2265)),
        a = r._(n(80110)),
        u = n(28569),
        i = n(61852),
        d = n(94472);
      function defaultHead(e) {
        void 0 === e && (e = !1);
        let t = [l.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              l.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function onlyReactElement(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === l.default.Fragment
          ? e.concat(
              l.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(92637);
      let s = ["name", "httpEquiv", "charSet", "itemProp"];
      function reduceComponents(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(onlyReactElement, [])
          .reverse()
          .concat(defaultHead(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (o) => {
                let l = !0,
                  a = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (l = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (l = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = s.length; e < t; e++) {
                      let t = s[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (l = !1) : n.add(t);
                        else {
                          let e = o.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !a) && n.has(e)
                            ? (l = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return l;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                l.default.cloneElement(e, t)
              );
            }
            return l.default.cloneElement(e, { key: r });
          });
      }
      let _default = function (e) {
        let { children: t } = e,
          n = (0, l.useContext)(u.AmpStateContext),
          r = (0, l.useContext)(i.HeadManagerContext);
        return l.default.createElement(
          a.default,
          {
            reduceComponentsToState: reduceComponents,
            headManager: r,
            inAmpMode: (0, d.isInAmpMode)(n),
          },
          t
        );
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    80110: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return SideEffect;
          },
        });
      let r = n(2265),
        o = r.useLayoutEffect,
        l = r.useEffect;
      function SideEffect(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function emitChange() {
          if (t && t.mountedInstances) {
            let o = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(o, e));
          }
        }
        return (
          o(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = emitChange),
              () => {
                t && (t._pendingUpdate = emitChange);
              }
            )
          ),
          l(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    92637: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "warnOnce", {
          enumerable: !0,
          get: function () {
            return warnOnce;
          },
        });
      let warnOnce = (e) => {};
    },
    43619: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return NotFound;
          },
        });
      var r = n(57437),
        o = n(1375),
        l = n.n(o);
      function NotFound() {
        return (0, r.jsx)("html", {
          lang: "en",
          children: (0, r.jsx)("body", {
            children: (0, r.jsx)(l(), { statusCode: 404 }),
          }),
        });
      }
    },
    30622: function (e, t, n) {
      "use strict";
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = n(2265),
        o = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        u =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        i = { key: !0, ref: !0, __self: !0, __source: !0 };
      function q(e, t, n) {
        var r,
          l = {},
          d = null,
          s = null;
        for (r in (void 0 !== n && (d = "" + n),
        void 0 !== t.key && (d = "" + t.key),
        void 0 !== t.ref && (s = t.ref),
        t))
          a.call(t, r) && !i.hasOwnProperty(r) && (l[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: s,
          props: l,
          _owner: u.current,
        };
      }
      (t.Fragment = l), (t.jsx = q), (t.jsxs = q);
    },
    57437: function (e, t, n) {
      "use strict";
      e.exports = n(30622);
    },
    1375: function (e, t, n) {
      e.exports = n(55327);
    },
  },
  function (e) {
    e.O(0, [971, 472, 744], function () {
      return e((e.s = 92758));
    }),
      (_N_E = e.O());
  },
]);