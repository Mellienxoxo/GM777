(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [816],
  {
    84408: function (e, r, t) {
      Promise.resolve().then(t.bind(t, 12470));
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
    12470: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return Error;
          },
        });
      var n = t(57437),
        o = t(71795),
        s = t(2265),
        l = t(51585);
      function Error(e) {
        let { error: r, reset: t } = e,
          u = (0, o.useTranslations)("Error"),
          i = (0, s.useCallback)(() => {
            var e, r, n;
            null == t || t(),
              null === (n = window) ||
                void 0 === n ||
                null === (r = n.location) ||
                void 0 === r ||
                null === (e = r.reload) ||
                void 0 === e ||
                e.call(r);
          }, [t]);
        return (
          (0, s.useEffect)(() => {
            console.error(r);
          }, [r]),
          (0, n.jsx)(l.ErrorResponse, {
            showRefresh: !0,
            title: u("title"),
            children: u.rich("description", {
              p: (e) => (0, n.jsx)("p", { className: "mt-4", children: e }),
              retry: (e) =>
                (0, n.jsx)("button", {
                  className: "text-[#2da47a] underline underline-offset-2",
                  onClick: i,
                  type: "button",
                  children: e,
                }),
            }),
          })
        );
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
        l = t(95708),
        u = t(71795),
        i = t(24033),
        c = t(2265);
      let ErrorResponse = (e) => {
        let {
            title: r,
            error: t,
            showBack: o,
            showRefresh: a,
            extra: f,
            ...d
          } = e,
          p = (0, u.useTranslations)("Error"),
          b = (0, i.useRouter)(),
          h = (0, c.useCallback)(() => b.back(), [b]),
          k = (0, c.useCallback)(() => b.refresh(), [b]),
          E = (0, c.useMemo)(
            () =>
              o &&
              (0, n.jsx)(
                s(),
                { type: "primary", onClick: h, children: "Go Back" },
                "back"
              ),
            [h, o]
          ),
          m = (0, c.useMemo)(
            () =>
              o &&
              (0, n.jsx)(
                s(),
                { type: "primary", onClick: k, children: "Refresh" },
                "back"
              ),
            [k, o]
          );
        return (0, n.jsx)(l.ZP, {
          status: "error",
          extra: f || E || m,
          title: r || p("systemError"),
          subTitle: t,
          ...d,
        });
      };
    },
  },
  function (e) {
    e.O(0, [519, 650, 57, 971, 472, 744], function () {
      return e((e.s = 84408));
    }),
      (_N_E = e.O());
  },
]);
