(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [30],
  {
    2390: function (e, t, n) {
      "use strict";
      var o = n(25809),
        r = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          l,
          a,
          u,
          c,
          i,
          f,
          s,
          d = !1;
        t || (t = {}), (a = t.debug || !1);
        try {
          if (
            ((c = o()),
            (i = document.createRange()),
            (f = document.getSelection()),
            ((s = document.createElement("span")).textContent = e),
            (s.ariaHidden = "true"),
            (s.style.all = "unset"),
            (s.style.position = "fixed"),
            (s.style.top = 0),
            (s.style.clip = "rect(0, 0, 0, 0)"),
            (s.style.whiteSpace = "pre"),
            (s.style.webkitUserSelect = "text"),
            (s.style.MozUserSelect = "text"),
            (s.style.msUserSelect = "text"),
            (s.style.userSelect = "text"),
            s.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), t.format)) {
                if ((n.preventDefault(), void 0 === n.clipboardData)) {
                  a && console.warn("unable to use e.clipboardData"),
                    a && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var o = r[t.format] || r.default;
                  window.clipboardData.setData(o, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              }
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(s),
            i.selectNodeContents(s),
            f.addRange(i),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          d = !0;
        } catch (o) {
          a && console.error("unable to copy using execCommand: ", o),
            a && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (d = !0);
          } catch (o) {
            a && console.error("unable to copy using clipboardData: ", o),
              a && console.error("falling back to prompt"),
              (n =
                "message" in t
                  ? t.message
                  : "Copy to clipboard: #{key}, Enter"),
              (l =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (u = n.replace(/#{\s*key\s*}/g, l)),
              window.prompt(u, e);
          }
        } finally {
          f &&
            ("function" == typeof f.removeRange
              ? f.removeRange(i)
              : f.removeAllRanges()),
            s && document.body.removeChild(s),
            c();
        }
        return d;
      };
    },
    64549: function (e, t, n) {
      "use strict";
      function getDomainLocale(e, t, n, o) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return getDomainLocale;
          },
        }),
        n(43997),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    68326: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let o = n(21024),
        r = o._(n(2265)),
        l = n(99121),
        a = n(68664),
        u = n(98130),
        c = n(36681),
        i = n(19524),
        f = n(36304),
        s = n(76313),
        d = n(71581),
        p = n(64549),
        y = n(89872),
        g = n(49706),
        b = new Set();
      function prefetch(e, t, n, o, r, l) {
        if (!l && !(0, a.isLocalURL)(t)) return;
        if (!o.bypassPrefetchedCheck) {
          let r =
              void 0 !== o.locale
                ? o.locale
                : "locale" in e
                ? e.locale
                : void 0,
            l = t + "%" + n + "%" + r;
          if (b.has(l)) return;
          b.add(l);
        }
        let u = l ? e.prefetch(t, r) : e.prefetch(t, n, o);
        Promise.resolve(u).catch((e) => {});
      }
      function formatStringOrUrl(e) {
        return "string" == typeof e ? e : (0, u.formatUrl)(e);
      }
      let m = r.default.forwardRef(function (e, t) {
          let n, o;
          let {
            href: u,
            as: b,
            children: m,
            prefetch: v = null,
            passHref: h,
            replace: C,
            shallow: _,
            scroll: E,
            locale: w,
            onClick: D,
            onMouseEnter: S,
            onTouchStart: x,
            legacyBehavior: O = !1,
            ...R
          } = e;
          (n = m),
            O &&
              ("string" == typeof n || "number" == typeof n) &&
              (n = r.default.createElement("a", null, n));
          let k = r.default.useContext(f.RouterContext),
            M = r.default.useContext(s.AppRouterContext),
            P = null != k ? k : M,
            j = !k,
            N = !1 !== v,
            U = null === v ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
            { href: I, as: L } = r.default.useMemo(() => {
              if (!k) {
                let e = formatStringOrUrl(u);
                return { href: e, as: b ? formatStringOrUrl(b) : e };
              }
              let [e, t] = (0, l.resolveHref)(k, u, !0);
              return { href: e, as: b ? (0, l.resolveHref)(k, b) : t || e };
            }, [k, u, b]),
            T = r.default.useRef(I),
            A = r.default.useRef(L);
          O && (o = r.default.Children.only(n));
          let K = O ? o && "object" == typeof o && o.ref : t,
            [H, X, z] = (0, d.useIntersection)({ rootMargin: "200px" }),
            Y = r.default.useCallback(
              (e) => {
                (A.current !== L || T.current !== I) &&
                  (z(), (A.current = L), (T.current = I)),
                  H(e),
                  K &&
                    ("function" == typeof K
                      ? K(e)
                      : "object" == typeof K && (K.current = e));
              },
              [L, K, I, z, H]
            );
          r.default.useEffect(() => {
            P && X && N && prefetch(P, I, L, { locale: w }, { kind: U }, j);
          }, [L, I, X, w, N, null == k ? void 0 : k.locale, P, j, U]);
          let q = {
            ref: Y,
            onClick(e) {
              O || "function" != typeof D || D(e),
                O &&
                  o.props &&
                  "function" == typeof o.props.onClick &&
                  o.props.onClick(e),
                P &&
                  !e.defaultPrevented &&
                  (function (e, t, n, o, l, u, c, i, f, s) {
                    let { nodeName: d } = e.currentTarget,
                      p = "A" === d.toUpperCase();
                    if (
                      p &&
                      ((function (e) {
                        let t = e.currentTarget,
                          n = t.getAttribute("target");
                        return (
                          (n && "_self" !== n) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e) ||
                        (!f && !(0, a.isLocalURL)(n)))
                    )
                      return;
                    e.preventDefault();
                    let navigate = () => {
                      let e = null == c || c;
                      "beforePopState" in t
                        ? t[l ? "replace" : "push"](n, o, {
                            shallow: u,
                            locale: i,
                            scroll: e,
                          })
                        : t[l ? "replace" : "push"](o || n, {
                            forceOptimisticNavigation: !s,
                            scroll: e,
                          });
                    };
                    f ? r.default.startTransition(navigate) : navigate();
                  })(e, P, I, L, C, _, E, w, j, N);
            },
            onMouseEnter(e) {
              O || "function" != typeof S || S(e),
                O &&
                  o.props &&
                  "function" == typeof o.props.onMouseEnter &&
                  o.props.onMouseEnter(e),
                P &&
                  (N || !j) &&
                  prefetch(
                    P,
                    I,
                    L,
                    { locale: w, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: U },
                    j
                  );
            },
            onTouchStart(e) {
              O || "function" != typeof x || x(e),
                O &&
                  o.props &&
                  "function" == typeof o.props.onTouchStart &&
                  o.props.onTouchStart(e),
                P &&
                  (N || !j) &&
                  prefetch(
                    P,
                    I,
                    L,
                    { locale: w, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: U },
                    j
                  );
            },
          };
          if ((0, c.isAbsoluteUrl)(L)) q.href = L;
          else if (!O || h || ("a" === o.type && !("href" in o.props))) {
            let e = void 0 !== w ? w : null == k ? void 0 : k.locale,
              t =
                (null == k ? void 0 : k.isLocaleDomain) &&
                (0, p.getDomainLocale)(
                  L,
                  e,
                  null == k ? void 0 : k.locales,
                  null == k ? void 0 : k.domainLocales
                );
            q.href =
              t ||
              (0, y.addBasePath)(
                (0, i.addLocale)(L, e, null == k ? void 0 : k.defaultLocale)
              );
          }
          return O
            ? r.default.cloneElement(o, q)
            : r.default.createElement("a", { ...R, ...q }, n);
        }),
        v = m;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    71581: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return useIntersection;
          },
        });
      let o = n(2265),
        r = n(62389),
        l = "function" == typeof IntersectionObserver,
        a = new Map(),
        u = [];
      function useIntersection(e) {
        let { rootRef: t, rootMargin: n, disabled: c } = e,
          i = c || !l,
          [f, s] = (0, o.useState)(!1),
          d = (0, o.useRef)(null),
          p = (0, o.useCallback)((e) => {
            d.current = e;
          }, []);
        (0, o.useEffect)(() => {
          if (l) {
            if (i || f) return;
            let e = d.current;
            if (e && e.tagName) {
              let o = (function (e, t, n) {
                let {
                  id: o,
                  observer: r,
                  elements: l,
                } = (function (e) {
                  let t;
                  let n = { root: e.root || null, margin: e.rootMargin || "" },
                    o = u.find(
                      (e) => e.root === n.root && e.margin === n.margin
                    );
                  if (o && (t = a.get(o))) return t;
                  let r = new Map(),
                    l = new IntersectionObserver((e) => {
                      e.forEach((e) => {
                        let t = r.get(e.target),
                          n = e.isIntersecting || e.intersectionRatio > 0;
                        t && n && t(n);
                      });
                    }, e);
                  return (
                    (t = { id: n, observer: l, elements: r }),
                    u.push(n),
                    a.set(n, t),
                    t
                  );
                })(n);
                return (
                  l.set(e, t),
                  r.observe(e),
                  function () {
                    if ((l.delete(e), r.unobserve(e), 0 === l.size)) {
                      r.disconnect(), a.delete(o);
                      let e = u.findIndex(
                        (e) => e.root === o.root && e.margin === o.margin
                      );
                      e > -1 && u.splice(e, 1);
                    }
                  }
                );
              })(e, (e) => e && s(e), {
                root: null == t ? void 0 : t.current,
                rootMargin: n,
              });
              return o;
            }
          } else if (!f) {
            let e = (0, r.requestIdleCallback)(() => s(!0));
            return () => (0, r.cancelIdleCallback)(e);
          }
        }, [i, n, t, f, d.current]);
        let y = (0, o.useCallback)(() => {
          s(!1);
        }, []);
        return [p, f, y];
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    19167: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          suspense: function () {
            return suspense;
          },
          NoSSR: function () {
            return NoSSR;
          },
        });
      let o = n(11283);
      function suspense() {
        let e = Error(o.NEXT_DYNAMIC_NO_SSR_CODE);
        throw ((e.digest = o.NEXT_DYNAMIC_NO_SSR_CODE), e);
      }
      function NoSSR(e) {
        let { children: t } = e;
        return t;
      }
    },
    61396: function (e, t, n) {
      e.exports = n(68326);
    },
    25809: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], o = 0;
          o < e.rangeCount;
          o++
        )
          n.push(e.getRangeAt(o));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
  },
]);
