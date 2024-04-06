(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [175],
  {
    26183: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 90413, 23)),
        Promise.resolve().then(n.t.bind(n, 19167, 23)),
        Promise.resolve().then(n.bind(n, 51585)),
        Promise.resolve().then(n.bind(n, 54013)),
        Promise.resolve().then(n.bind(n, 1686)),
        Promise.resolve().then(n.bind(n, 32316)),
        Promise.resolve().then(n.bind(n, 1209)),
        Promise.resolve().then(n.bind(n, 22859));
    },
    9656: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return AndroidOrHarmonyView;
        },
      });
      var o = n(57437),
        a = n(31095);
      let AndroidOrHarmonyView = (e) => {
        let { children: t } = e;
        return (0, o.jsx)(a.St, {
          condition: a.Dt || a.z$.includes("HarmonyOS"),
          children: t,
        });
      };
    },
    51585: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ErrorResponse: function () {
            return ErrorResponse;
          },
        });
      var o = n(57437),
        a = n(88110),
        l = n.n(a),
        r = n(95708),
        s = n(71795),
        i = n(24033),
        c = n(2265);
      let ErrorResponse = (e) => {
        let {
            title: t,
            error: n,
            showBack: a,
            showRefresh: d,
            extra: u,
            ...m
          } = e,
          x = (0, s.useTranslations)("Error"),
          h = (0, i.useRouter)(),
          g = (0, c.useCallback)(() => h.back(), [h]),
          w = (0, c.useCallback)(() => h.refresh(), [h]),
          f = (0, c.useMemo)(
            () =>
              a &&
              (0, o.jsx)(
                l(),
                { type: "primary", onClick: g, children: "Go Back" },
                "back"
              ),
            [g, a]
          ),
          v = (0, c.useMemo)(
            () =>
              a &&
              (0, o.jsx)(
                l(),
                { type: "primary", onClick: w, children: "Refresh" },
                "back"
              ),
            [w, a]
          );
        return (0, o.jsx)(r.ZP, {
          status: "error",
          extra: u || f || v,
          title: t || x("systemError"),
          subTitle: n,
          ...m,
        });
      };
    },
    17330: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return Footer;
        },
        Z: function () {
          return b;
        },
      });
      var o = n(57437),
        a = n(2265),
        l = n(9656),
        r = n(76762),
        s = n(2390),
        i = n.n(s),
        c = n(61396),
        d = n.n(c),
        u = n(77590),
        m = n(28176),
        x = n(54938),
        h = n(50291),
        g = n(33345),
        w = n(86498),
        f = n(62601),
        v = a.memo((e) => {
          var t;
          let { brand: n, params: l, downloadUrl: r, ...s } = e,
            c =
              (null === u.q2 || void 0 === u.q2 ? void 0 : u.q2[n]) ||
              (null == f
                ? void 0
                : null === (t = f.env) || void 0 === t
                ? void 0
                : "id") ||
              w.S.English,
            v = (0, a.useRef)(null),
            { chn: b } = (0, x.DP)(location.href),
            { run: p } = (0, g.Z)(
              () => m.Z.downloadReportByChannel({ chn: (0, h.pe)(b) }),
              { manual: !0 }
            ),
            j = (0, a.useCallback)(() => {
              var e;
              l.id && i()(l.id),
                b && p(),
                null == v ||
                  null === (e = v.current) ||
                  void 0 === e ||
                  e.click();
            }, [b, l.id, p]);
          return (0, o.jsx)("a", {
            ref: v,
            href: r,
            target: "_blank",
            download: !0,
            children: (0, o.jsx)(d(), {
              href: {
                pathname: "/".concat(c, "/").concat(n, "/download"),
                search: "?downloadUrl="
                  .concat(encodeURIComponent(r), "&id=")
                  .concat(encodeURIComponent(l.id), "&chn=")
                  .concat(b),
              },
              children: (0, o.jsx)("div", { ...s, onClick: j }),
            }),
          });
        });
      let Footer = (e) => {
        let { brand: t, downloadUrl: n, params: s } = e,
          i = (0, a.useContext)(r.x);
        return (0, o.jsx)(l.m, {
          children: (0, o.jsx)("footer", {
            className:
              "fixed bottom-0 left-0 z-10 flex h-[15vw] w-full items-center justify-end bg-cover bg-no-repeat",
            style: {
              backgroundImage: "url("
                .concat(i.download_url)
                .concat(i.download_buoy, ")"),
            },
            children: (0, o.jsx)(v, {
              brand: t,
              className:
                "mr-[2vw] mt-[2vw] h-[9vw] w-[calc(9vw/7*18)]  bg-cover bg-no-repeat",
              downloadUrl: n,
              params: s,
            }),
          }),
        });
      };
      var b = a.memo(Footer);
    },
    1686: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DownloadQRCode: function () {
            return DownloadQRCode;
          },
        });
      var o = n(57437),
        a = n(16691),
        l = n.n(a),
        r = n(92395),
        s = n(2265),
        i = n(31095);
      let DownloadQRCode = (e) => {
        let { language: t, downloadUrl: n } = e;
        return (0, o.jsx)(i.tu, {
          children: (0, o.jsxs)("div", {
            className:
              'fixed left-0 top-[38%] z-[999] box-border flex h-[calc(120px*1.071842)] w-[120px] -translate-y-1/2 transform flex-col items-center justify-center bg-[url("/common/qrcode/background.png")] bg-cover bg-no-repeat',
            children: [
              (0, o.jsx)(r.ZP, { value: n, size: 66 }),
              (0, o.jsx)(l(), {
                className:
                  "mt-1 h-[calc(82px*0.151618)] w-[82px] bg-cover bg-no-repeat",
                src: "/common/langs/".concat(t, "/qrcode-title.png"),
                width: 690,
                height: 87,
                alt: "qrcode-title",
              }),
            ],
          }),
        });
      };
      t.default = s.memo(DownloadQRCode);
    },
    32316: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Footer: function () {
            return Footer;
          },
          default: function () {
            return w;
          },
        });
      var o = n(57437),
        a = n(2265),
        l = n(9656),
        r = n(2390),
        s = n.n(r),
        i = n(61396),
        c = n.n(i),
        d = n(77590),
        u = n(28176),
        m = n(54938),
        x = n(50291),
        h = n(33345),
        g = a.memo((e) => {
          let { brand: t, params: n, downloadUrl: l, ...r } = e,
            i = d.q2[t],
            g = (0, a.useRef)(null),
            { chn: w } = (0, m.DP)(location.href),
            { run: f } = (0, h.Z)(
              () => u.Z.downloadReportByChannel({ chn: (0, x.pe)(w) }),
              { manual: !0 }
            ),
            v = (0, a.useCallback)(() => {
              var e;
              n.id && s()(n.id),
                w && f(),
                null == g ||
                  null === (e = g.current) ||
                  void 0 === e ||
                  e.click();
            }, [w, n.id, f]);
          return (0, o.jsx)("a", {
            ref: g,
            href: l,
            target: "_blank",
            download: !0,
            children: (0, o.jsx)(c(), {
              href: {
                pathname: "/".concat(i, "/").concat(t, "/download"),
                search: "?downloadUrl="
                  .concat(encodeURIComponent(l), "&id=")
                  .concat(encodeURIComponent(n.id)),
              },
              children: (0, o.jsx)("div", { ...r, onClick: v }),
            }),
          });
        });
      let getDownloadImgPath = (e) => {
          let t;
          try {
            let n = Object(
              (function () {
                var e = Error("Cannot find module 'undefined'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
              })()
            );
            t = n
              ? "/images/".concat(e, "/buttons/download.png")
              : "/common/footer-download-button.png";
          } catch (e) {
            t = "/common/footer-download-button.png";
          }
          return t;
        },
        Footer = (e) => {
          let { brand: t, downloadUrl: n, params: a } = e,
            r = "/images/".concat(t, "/android/footer-background.png"),
            s = getDownloadImgPath(t);
          return (0, o.jsx)(l.m, {
            children: (0, o.jsx)("footer", {
              className:
                "fixed bottom-0 left-0 z-10 flex h-[15vw] w-full items-center justify-end bg-cover bg-no-repeat",
              style: { backgroundImage: "url(".concat(r, ")") },
              children: (0, o.jsx)(g, {
                brand: t,
                className:
                  "mr-[2vw] mt-[2vw] h-[9vw] w-[calc(9vw/7*18)] bg-cover bg-no-repeat",
                style: { backgroundImage: "url(".concat(s, ")") },
                downloadUrl: n,
                params: a,
              }),
            }),
          });
        };
      var w = a.memo(Footer);
    },
    1209: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ServiceIcon: function () {
            return ServiceIcon;
          },
        });
      var o = n(57437),
        a = n(2265),
        l = n(16392);
      let ServiceIcon = (e) => {
        let { serviceUrl: t } = e,
          [n, r] = (0, a.useState)("");
        return (
          (0, a.useEffect)(() => {
            let geneServiceUrlByVisitorId = async () => {
              let e = await l.ZP.load(),
                n = await e.get(),
                o = n.visitorId;
              r("".concat(t, "/?aid=website_").concat(o));
            };
            geneServiceUrlByVisitorId();
          }, [t]),
          n &&
            (0, o.jsx)("a", {
              href: n,
              target: "_blank",
              rel: "noreferrer",
              className:
                "fixed right-[2vw] h-[12.73vw] max-h-[51px] w-[12vw] max-w-[48px] bg-[url('/common/service-button.png')] bg-cover bg-top bg-no-repeat portrait:top-[32vw] landscape:top-[10vw]",
            })
        );
      };
      t.default = a.memo(ServiceIcon);
    },
    22859: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TryOutButton: function () {
            return TryOutButton;
          },
          default: function () {
            return h;
          },
        });
      var o = n(57437),
        a = n(16691),
        l = n.n(a),
        r = n(2265),
        s = n(31095),
        i = r.memo((e) => {
          let { gameUrl: t } = e;
          return (0, o.jsx)("a", {
            href: t,
            className:
              "mx-auto my-5 inline-block min-h-[86px] w-1/2 bg-[url('/common/ios/go-button.png')] bg-contain bg-center bg-no-repeat ",
          });
        }),
        c = r.memo((e) => {
          let { language: t, ...n } = e;
          return (0, o.jsxs)("div", {
            className: "text-center",
            children: [
              (0, o.jsx)(l(), {
                className: "m-auto block w-[90%] ",
                src: "/common/langs/".concat(t, "/download-android.png"),
                width: 606,
                height: 606,
                alt: "android Download",
              }),
              (0, o.jsx)(i, { ...n }),
            ],
          });
        }),
        d = n(67825),
        u = n.n(d),
        m = r.memo((e) => {
          let { language: t, ...n } = e;
          return (0, o.jsxs)("div", {
            className: "text-center",
            children: [
              (0, o.jsxs)(u(), {
                config: {
                  loop: !0,
                  autoplay: {
                    delay: 3e3,
                    stopOnLastSlide: !1,
                    disableOnInteraction: !0,
                  },
                  preloadImages: !1,
                  lazy: !0,
                  speed: 500,
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  pagination: {
                    el: ".swiper-pagination",
                    bulletElement: "li",
                    hideOnClick: !0,
                    clickable: !0,
                  },
                },
                children: [
                  (0, o.jsx)("div", {
                    className: "swiper-wrapper",
                    children: [1, 2, 3, 4].map((e) =>
                      (0, o.jsx)(
                        "div",
                        {
                          className: "swiper-slide relative h-full w-full",
                          children: (0, o.jsx)(l(), {
                            className: "m-auto block w-[90%] ",
                            src: "/common/langs/"
                              .concat(t, "/ios/")
                              .concat(e, ".png"),
                            width: 606,
                            height: 606,
                            alt: "IOS Download ".concat(e),
                          }),
                        },
                        e
                      )
                    ),
                  }),
                  (0, o.jsx)("div", { className: "swiper-pagination" }),
                ],
              }),
              (0, o.jsx)(i, { ...n }),
            ],
          });
        }),
        x = r.memo((e) => {
          let { open: t, onClose: n, children: a } = e;
          return (
            t &&
            (0, o.jsx)("div", {
              className:
                "fixed bottom-0 left-0 right-0 top-0 z-[1000] bg-black/30",
              children: (0, o.jsx)("div", {
                className: "flex h-screen items-center justify-center",
                children: (0, o.jsxs)("div", {
                  className: " relative min-h-[86px] min-w-full",
                  children: [
                    a,
                    (0, o.jsx)("div", {
                      className: "absolute right-[8vw] top-3 z-[999]",
                      children: (0, o.jsx)(l(), {
                        src: "/common/close-button.png",
                        width: 31,
                        height: 29,
                        alt: "close button",
                        onClick: n,
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        });
      let TryOutButton = (e) => {
        let { language: t, gameUrl: n, brand: a, params: d } = e,
          [u, h] = (0, r.useState)(!1),
          g = (0, r.useCallback)(() => {
            h(!0);
          }, []);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(l(), {
              className:
                "absolute left-1/2 h-auto w-[60%] -translate-x-1/2 -translate-y-1/2",
              style: { top: "gowin" === a ? "19%" : "21.5%" },
              src:
                "gowin" === a
                  ? "/images/".concat(a, "/buttons/tryout.png")
                  : "/common/langs/".concat(t, "/tryout-button.png"),
              width: 247,
              height: 64,
              alt: "Hero Tryout Button",
              onClick: g,
            }),
            (0, o.jsx)(x, {
              open: u,
              onClose: g,
              children: s.tq
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(s.tu, {
                        children: (0, o.jsx)(c, { language: t, gameUrl: n }),
                      }),
                      (0, o.jsx)(s.N, {
                        children: (0, o.jsx)(m, { language: t, gameUrl: n }),
                      }),
                    ],
                  })
                : (0, o.jsx)("div", {
                    className: "text-center",
                    children: (0, o.jsx)(i, { gameUrl: n }),
                  }),
            }),
          ],
        });
      };
      var h = r.memo(TryOutButton);
    },
    54013: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var o = n(57437),
        a = n(9656),
        l = n(21740),
        r = n(42815),
        s = n(79123),
        i = n(71795),
        c = n(16691),
        d = n.n(c),
        u = n(92395),
        m = n(2265),
        x = m.memo((e) => {
          let { open: t, onClose: n, children: a } = e;
          return (
            t &&
            (0, o.jsx)("div", {
              className:
                "fixed bottom-0 left-0 right-0 top-0 z-[1000] bg-black/30",
              children: (0, o.jsx)("div", {
                className: "flex h-screen items-center justify-center",
                children: (0, o.jsx)("div", {
                  className:
                    " relative flex min-h-[86px] min-w-full items-center justify-center",
                  children: a,
                }),
              }),
            })
          );
        });
      let DownloadQRCode = (e) => {
        var t;
        let { language: n, downloadUrl: c } = e,
          h = (0, m.useRef)(null),
          g = (0, m.useRef)(null),
          w = (0, l.Z)(h),
          [f, v] = (0, m.useState)(!1);
        (0, m.useEffect)(() => {
          let e = g.current;
          f
            ? r.ZP.to(e, { opacity: 1, duration: 0.5, ease: s.Aq.easeInOut })
            : r.ZP.to(e, { opacity: 0, duration: 0.5, ease: s.Aq.easeInOut });
        }, [f]);
        let b = (0, m.useCallback)((e) => {
            v(e);
          }, []),
          p = (0, m.useMemo)(
            () =>
              ["mx", "id", "en"].includes(n)
                ? "/common/index/H5/QRcode-".concat(n, ".png")
                : "/common/index/H5/QRcode-en.png",
            [n]
          ),
          j = (0, i.useTranslations)("LandingPage");
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)(a.m, {
            children: [
              (0, o.jsx)("div", {
                onClick: () => b(!0),
                className:
                  "fixed right-[1vw] portrait:top-[50vw] landscape:top-[15vw]",
                children: (0, o.jsx)(d(), {
                  className: "mb-5 w-[13vw]",
                  src: p,
                  width: 90,
                  height: 90,
                  alt: "QRcode",
                }),
              }),
              (0, o.jsx)(x, {
                open: f,
                onClose: () => b(!1),
                children: (0, o.jsxs)("div", {
                  ref: g,
                  className: "relative w-[80%] opacity-0",
                  children: [
                    (0, o.jsx)(d(), {
                      className: "w-full object-contain",
                      src: "/common/index/H5/QRcode-modal.png",
                      width: 606,
                      height: 603,
                      alt: "QRcode-modal",
                    }),
                    (0, o.jsx)("div", {
                      ref: h,
                      className:
                        "absolute left-[50%] top-[50%] w-[40vw] -translate-x-1/2 -translate-y-1/2",
                      children: (0, o.jsx)(u.ZP, {
                        value: c,
                        size:
                          null !== (t = null == w ? void 0 : w.width) &&
                          void 0 !== t
                            ? t
                            : 180,
                      }),
                    }),
                    (0, o.jsx)(d(), {
                      className:
                        "absolute right-[5%] top-[5%] w-[4vw] object-contain",
                      src: "/common/index/H5/close.png",
                      onClick: () => b(!1),
                      width: 31,
                      height: 29,
                      alt: "close",
                    }),
                    (0, o.jsx)("div", {
                      className:
                        "absolute left-[50%] top-[1vh] -translate-x-1/2 text-2xl font-bold text-[#782219] sm:top-[1.5vh] sm:text-4xl md:text-5xl lg:top-[2vh] lg:text-6xl xl:text-7xl 2xl:text-8xl",
                      children: j("qrcode"),
                    }),
                    (0, o.jsx)("div", {
                      className:
                        "absolute bottom-[2.5vh] left-[50%] w-full -translate-x-1/2 text-center text-2xl font-bold text-[#782219]  sm:top-[3.5vh] sm:text-4xl md:text-5xl  lg:top-[4vh] lg:text-6xl xl:text-7xl 2xl:text-8xl",
                      children: j("downloadGame"),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
      var h = n(17330),
        g = n(16392);
      let ServiceIcon = (e) => {
        let { serviceUrl: t } = e,
          [n, a] = (0, m.useState)("");
        return (
          (0, m.useEffect)(() => {
            let geneServiceUrlByVisitorId = async () => {
              let e = await g.ZP.load(),
                n = await e.get(),
                o = n.visitorId,
                l = new URL(t);
              l.searchParams.append("aid", "website_".concat(o)), a(l.href);
            };
            geneServiceUrlByVisitorId();
          }, [t]),
          n &&
            (0, o.jsx)("a", {
              href: n,
              target: "_blank",
              rel: "noreferrer",
              className:
                "fixed right-[2vw] h-[12.73vw] max-h-[51px] w-[12vw] max-w-[48px] bg-[url('/common/service-button.png')] bg-cover bg-top bg-no-repeat portrait:top-[32vw] landscape:top-[10vw]",
            })
        );
      };
      var w = n(77590),
        f = n(76762),
        v = n(2390),
        b = n.n(v),
        p = n(31095),
        j = n(57042),
        y = m.memo((e) => {
          let { brand: t, children: n } = e,
            a = (0, m.useContext)(f.x);
          return (0, o.jsx)("div", {
            className: (0, j.Z)(
              "relative min-h-screen w-full overflow-y-auto bg-[length:100%_100%] bg-no-repeat"
            ),
            style: {
              backgroundImage: "url("
                .concat(a.download_url)
                .concat(a.background, ")"),
            },
            children: n,
          });
        }),
        S = m.memo((e) => {
          let { data: t, brand: n, config: a, params: l } = e,
            s = w.q2[n],
            {
              download_url: i,
              logo: c,
              tagline1: u,
              skip_button: x,
              tagline2: g,
              game_icons: v = [],
              game_promotional_pictures: j = [],
            } = a,
            S = (0, m.useCallback)(() => {
              l.id && b()(l.id),
                (window.location.href =
                  /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(?:\/.*)?$/.test(
                    t.official_website_h5_game_url
                  )
                    ? t.official_website_h5_game_url
                    : "https://".concat(t.official_website_h5_game_url));
            }, [t.official_website_h5_game_url, l.id]);
          (0, m.useEffect)(() => {
            let e = r.ZP.timeline({});
            e.to(".icon", {
              opacity: 1,
              delay: 0.2,
              duration: 0.5,
              y: 0,
              ease: "Power4.inOut",
              rotation: 360,
              stagger: 0.2,
            }),
              e.fromTo(
                ".logo",
                { y: -5 },
                {
                  y: 5,
                  ease: "Power4.inOut",
                  repeat: -1,
                  yoyo: !0,
                  duration: 2,
                }
              );
          }, []);
          let k = (!p.Dt && !p.z$.includes("HarmonyOS")) || t.android_h5_switch;
          return (0, o.jsx)(f.x.Provider, {
            value: a,
            children: (0, o.jsxs)(y, {
              brand: n,
              children: [
                (0, o.jsx)(d(), {
                  className: "logo w-full px-[5%]",
                  src: "".concat(i).concat(c),
                  width: 1080,
                  height: 1080,
                  alt: "logo",
                }),
                (0, o.jsx)(d(), {
                  className: "relative -top-10 w-full",
                  src: "".concat(i).concat(u),
                  width: 1080,
                  height: 1080,
                  alt: "tagline1",
                }),
                k
                  ? (0, o.jsx)(d(), {
                      className: "relative -top-10 w-full px-[20%]",
                      src: "".concat(i).concat(x),
                      width: 247,
                      height: 64,
                      onClick: S,
                      alt: "Hero Tryout Button",
                    })
                  : (0, o.jsx)(o.Fragment, {}),
                (0, o.jsx)(d(), {
                  className: "relative -top-8 w-full",
                  src: "".concat(i).concat(g),
                  width: 1080,
                  height: 1080,
                  alt: "tagline2",
                }),
                (0, o.jsx)("div", {
                  className: "flex flex-wrap",
                  children: v.map((e, t) =>
                    (0, o.jsx)(
                      d(),
                      {
                        className: "icon  w-[25%]  opacity-0",
                        src: "".concat(i).concat(e),
                        width: 1080,
                        height: 1080,
                        alt: "icon",
                      },
                      t
                    )
                  ),
                }),
                (0, o.jsx)("div", {
                  className: "mt-5 flex flex-col",
                  children: j.map((e, t) =>
                    (0, o.jsx)(
                      d(),
                      {
                        className: "mb-5 w-full",
                        src: "".concat(i).concat(e),
                        width: 1080,
                        height: 1080,
                        alt: "advertising",
                      },
                      t
                    )
                  ),
                }),
                (0, o.jsx)(ServiceIcon, { serviceUrl: t.customer_url }),
                (0, o.jsx)(DownloadQRCode, {
                  language: s,
                  downloadUrl: t.d_apk,
                }),
                (0, o.jsx)(h.$, { brand: n, downloadUrl: t.d_apk, params: l }),
              ],
            }),
          });
        }),
        k = n(26329),
        N = n(72310),
        I = m.memo((e) => {
          let { viewport: t, config: n } = e,
            { download_url: a, favicon: l, title: r } = n;
          return (
            (0, k.Z)("".concat(a).concat(l)),
            (0, N.Z)(r),
            (0, o.jsx)(o.Fragment, { children: (0, o.jsx)(S, { ...e }) })
          );
        });
    },
    77590: function (e, t, n) {
      "use strict";
      n.d(t, {
        H2: function () {
          return r;
        },
        q2: function () {
          return s;
        },
      });
      var o = n(86498);
      let a = {
        ina777: "ina777",
        ngbbet: "ngbbet",
        biwin: "biwin",
        "mx-biwin": "mx-biwin",
        gowin: "gowin",
        "8278slots": "8278slots",
        "3178Slots": "3178Slots",
        Y89Slots: "Y89Slots",
        satu77: "satu77",
        9399: "9399",
        TDTD: "TDTD",
        GM777: "GM777",
        st777: "st777",
        menangbet: "menangbet",
        SlotsIDR: "SlotsIDR",
        luckyqiuqiu: "luckyqiuqiu",
        "4892slots": "4892slots",
        an777: "an777",
        DF: "DF",
        GF777: "GF777",
      };
      a.ina777,
        a.ngbbet,
        a.biwin,
        a["mx-biwin"],
        a.gowin,
        a["8278slots"],
        a["3178Slots"],
        a.Y89Slots,
        a.satu77,
        a["9399"],
        a.TDTD,
        a.GM777,
        a.st777,
        a.menangbet,
        a.SlotsIDR,
        a.luckyqiuqiu,
        a["4892slots"],
        a.an777,
        a.DF,
        a.GF777,
        a.ina777,
        a.ngbbet,
        a.biwin,
        a["mx-biwin"],
        a.gowin,
        a["8278slots"],
        a["3178Slots"],
        a.Y89Slots,
        a.satu77,
        a["9399"],
        a.TDTD,
        a.GM777,
        a.st777,
        a.menangbet,
        a.SlotsIDR,
        a.luckyqiuqiu,
        a["4892slots"],
        a.an777,
        a.DF,
        a.GF777;
      let l = {
          [a.ina777]: o.S.Indonesian,
          [a.ngbbet]: o.S.English,
          [a.biwin]: o.S.Indonesian,
          [a["mx-biwin"]]: o.S.MexicanSpanish,
          [a.gowin]: o.S.Indonesian,
          [a["8278slots"]]: o.S.Indonesian,
          [a["3178Slots"]]: o.S.Indonesian,
          [a.Y89Slots]: o.S.Indonesian,
          [a.satu77]: o.S.Indonesian,
          [a["9399"]]: o.S.Indonesian,
          [a.TDTD]: o.S.Indonesian,
          [a.GM777]: o.S.Indonesian,
        },
        r = a,
        s = l;
    },
    76762: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return a;
        },
      });
      var o = n(2265);
      let a = (0, o.createContext)({});
    },
    28176: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return StatisticsService;
        },
      });
      var o = n(24881);
      let StatisticsService = class StatisticsService {
        static async downloadReportByChannel(e) {
          let t = await o.ZP.post("/api/downloadChannel", e);
          return t.data;
        }
      };
    },
    86498: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return o;
        },
      });
      let o = {
        English: "en",
        Nigerians: "en",
        Chinese: "zh",
        Indonesian: "id",
        MexicanSpanish: "mx",
        Vietnamese: "vi",
        Thai: "th",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        866, 312, 922, 413, 519, 650, 57, 830, 285, 824, 30, 983, 363, 971, 472,
        744,
      ],
      function () {
        return e((e.s = 26183));
      }
    ),
      (_N_E = e.O());
  },
]);
