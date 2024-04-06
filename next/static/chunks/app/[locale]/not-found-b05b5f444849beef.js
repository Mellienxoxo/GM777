(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [82],
  {
    57686: function (e, r, t) {
      Promise.resolve().then(t.bind(t, 45031));
    },
    36304: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "RouterContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = t(21024),
        o = n._(t(2265)),
        s = o.default.createContext(null);
    },
    45031: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return NotFoundPage;
          },
        });
      var n = t(57437),
        o = t(51585),
        s = t(71795);
      function NotFoundPage() {
        let e = (0, s.useTranslations)("NotFoundPage");
        return (0, n.jsx)(o.ErrorResponse, {
          title: e("title"),
          children: e("description"),
        });
      }
    },
    51585: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          ErrorResponse: function () {
            return ErrorResponse;
          },
        });
      var n = t(57437),
        o = t(88110),
        s = t.n(o),
        u = t(95708),
        i = t(71795),
        c = t(24033),
        l = t(2265);
      let ErrorResponse = (e) => {
        let {
            title: r,
            error: t,
            showBack: o,
            showRefresh: a,
            extra: f,
            ...d
          } = e,
          p = (0, i.useTranslations)("Error"),
          b = (0, c.useRouter)(),
          k = (0, l.useCallback)(() => b.back(), [b]),
          h = (0, l.useCallback)(() => b.refresh(), [b]),
          E = (0, l.useMemo)(
            () =>
              o &&
              (0, n.jsx)(
                s(),
                { type: "primary", onClick: k, children: "Go Back" },
                "back"
              ),
            [k, o]
          ),
          _ = (0, l.useMemo)(
            () =>
              o &&
              (0, n.jsx)(
                s(),
                { type: "primary", onClick: h, children: "Refresh" },
                "back"
              ),
            [h, o]
          );
        return (0, n.jsx)(u.ZP, {
          status: "error",
          extra: f || E || _,
          title: r || p("systemError"),
          subTitle: t,
          ...d,
        });
      };
    },
  },
  function (e) {
    e.O(0, [519, 650, 57, 971, 472, 744], function () {
      return e((e.s = 57686));
    }),
      (_N_E = e.O());
  },
]);
