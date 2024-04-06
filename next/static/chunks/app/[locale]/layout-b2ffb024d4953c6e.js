(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [203],
  {
    36316: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return NextIntlClientProvider;
          },
        });
      var n = r(6543),
        u = r(2265),
        o = r(5713);
      function NextIntlClientProvider({
        children: e,
        locale: t,
        now: r,
        ...l
      }) {
        let c;
        try {
          c = (0, n.useRouter)();
        } catch (e) {}
        if (
          (!t && c && (t = c.locale),
          "string" == typeof r && (r = new Date(r)),
          !t)
        )
          throw Error(void 0);
        return u.createElement(o.Z, { locale: t, now: r, ...l }, e);
      }
    },
    54686: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 36316)),
        Promise.resolve().then(r.bind(r, 48888));
    },
    36304: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(21024),
        u = n._(r(2265)),
        o = u.default.createContext(null);
    },
    48888: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(57437),
        u = r(2265),
        o = r(56528),
        l = r(24033);
      t.default = (e) => {
        let { children: t } = e,
          r = u.useMemo(() => (0, o.createCache)(), []);
        return (
          (0, l.useServerInsertedHTML)(() =>
            (0, n.jsx)("style", {
              id: "antd",
              dangerouslySetInnerHTML: { __html: (0, o.extractStyle)(r, !0) },
            })
          ),
          (0, n.jsx)(o.StyleProvider, { cache: r, children: t })
        );
      };
    },
  },
  function (e) {
    e.O(0, [519, 971, 472, 744], function () {
      return e((e.s = 54686));
    }),
      (_N_E = e.O());
  },
]);
