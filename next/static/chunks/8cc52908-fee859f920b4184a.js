"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [312],
  {
    91498: function (e, t, s) {
      s.r(t);
      var i = s(41504),
        a = s(85706);
      let l = {
        addClass: i.cn,
        removeClass: i.IV,
        hasClass: i.pv,
        toggleClass: i.Vj,
        attr: i.Lj,
        removeAttr: i.uV,
        data: i.aT,
        transform: i.vs,
        transition: i.eR,
        on: i.on,
        off: i.S1,
        trigger: i.X$,
        transitionEnd: i.ld,
        outerWidth: i.iO,
        outerHeight: i.Pb,
        offset: i.cv,
        css: i.iv,
        each: i.S6,
        html: i.dy,
        text: i.fL,
        is: i.is,
        index: i.Kz,
        eq: i.eq,
        append: i.R3,
        prepend: i.Ce,
        next: i.lp,
        nextAll: i.eG,
        prev: i.mp,
        prevAll: i.pJ,
        parent: i.qm,
        parents: i.wV,
        closest: i.oq,
        find: i.sE,
        children: i.pI,
        filter: i.hX,
        remove: i.Od,
        add: i.IH,
        styles: i.W2,
      };
      Object.keys(l).forEach((e) => {
        i.$.fn[e] = i.$.fn[e] || l[e];
      });
      let r = {
          deleteProps(e) {
            Object.keys(e).forEach((t) => {
              try {
                e[t] = null;
              } catch (e) {}
              try {
                delete e[t];
              } catch (e) {}
            });
          },
          nextTick: (e, t = 0) => setTimeout(e, t),
          now: () => Date.now(),
          getTranslate(e, t = "x") {
            let s, i, l;
            let r = a.u9.getComputedStyle(e, null);
            return (
              a.u9.WebKitCSSMatrix
                ? ((i = r.transform || r.webkitTransform).split(",").length >
                    6 &&
                    (i = i
                      .split(", ")
                      .map((e) => e.replace(",", "."))
                      .join(", ")),
                  (l = new a.u9.WebKitCSSMatrix("none" === i ? "" : i)))
                : (s = (l =
                    r.MozTransform ||
                    r.OTransform ||
                    r.MsTransform ||
                    r.msTransform ||
                    r.transform ||
                    r
                      .getPropertyValue("transform")
                      .replace("translate(", "matrix(1, 0, 0, 1,"))
                    .toString()
                    .split(",")),
              "x" === t &&
                (i = a.u9.WebKitCSSMatrix
                  ? l.m41
                  : 16 === s.length
                  ? parseFloat(s[12])
                  : parseFloat(s[4])),
              "y" === t &&
                (i = a.u9.WebKitCSSMatrix
                  ? l.m42
                  : 16 === s.length
                  ? parseFloat(s[13])
                  : parseFloat(s[5])),
              i || 0
            );
          },
          parseUrlQuery(e) {
            let t, s, i, l;
            let r = {},
              n = e || a.u9.location.href;
            if ("string" == typeof n && n.length)
              for (
                t = 0,
                  l = (s = (n =
                    n.indexOf("?") > -1 ? n.replace(/\S*\?/, "") : "")
                    .split("&")
                    .filter((e) => "" !== e)).length;
                t < l;
                t += 1
              )
                r[
                  decodeURIComponent(
                    (i = s[t].replace(/#\S+/g, "").split("="))[0]
                  )
                ] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
            return r;
          },
          isObject: (e) =>
            "object" == typeof e &&
            null !== e &&
            e.constructor &&
            e.constructor === Object,
          extend(...e) {
            let t = Object(e[0]);
            for (let s = 1; s < e.length; s += 1) {
              let i = e[s];
              if (null != i) {
                let e = Object.keys(Object(i));
                for (let s = 0, a = e.length; s < a; s += 1) {
                  let a = e[s],
                    l = Object.getOwnPropertyDescriptor(i, a);
                  void 0 !== l &&
                    l.enumerable &&
                    (r.isObject(t[a]) && r.isObject(i[a])
                      ? r.extend(t[a], i[a])
                      : !r.isObject(t[a]) && r.isObject(i[a])
                      ? ((t[a] = {}), r.extend(t[a], i[a]))
                      : (t[a] = i[a]));
                }
              }
            }
            return t;
          },
        },
        n = {
          touch: !!(
            "ontouchstart" in a.u9 ||
            (a.u9.DocumentTouch && a.tj instanceof a.u9.DocumentTouch)
          ),
          pointerEvents:
            !!a.u9.PointerEvent &&
            "maxTouchPoints" in a.u9.navigator &&
            a.u9.navigator.maxTouchPoints >= 0,
          observer:
            "MutationObserver" in a.u9 || "WebkitMutationObserver" in a.u9,
          passiveListener: (function () {
            let e = !1;
            try {
              let t = Object.defineProperty({}, "passive", {
                get() {
                  e = !0;
                },
              });
              a.u9.addEventListener("testPassiveListener", null, t);
            } catch (e) {}
            return e;
          })(),
          gestures: "ongesturestart" in a.u9,
        };
      class o {
        constructor(e = {}) {
          let t = this;
          (t.params = e),
            (t.eventsListeners = {}),
            t.params &&
              t.params.on &&
              Object.keys(t.params.on).forEach((e) => {
                t.on(e, t.params.on[e]);
              });
        }
        on(e, t, s) {
          let i = this;
          if ("function" != typeof t) return i;
          let a = s ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][a](t);
            }),
            i
          );
        }
        once(e, t, s) {
          let i = this;
          if ("function" != typeof t) return i;
          function a(...s) {
            i.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(i, s);
          }
          return (a.f7proxy = t), i.on(e, a, s);
        }
        off(e, t) {
          let s = this;
          return (
            s.eventsListeners &&
              e.split(" ").forEach((e) => {
                void 0 === t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].length &&
                    s.eventsListeners[e].forEach((i, a) => {
                      (i === t || (i.f7proxy && i.f7proxy === t)) &&
                        s.eventsListeners[e].splice(a, 1);
                    });
              }),
            s
          );
        }
        emit(...e) {
          let t, s, i;
          let a = this;
          if (!a.eventsListeners) return a;
          "string" == typeof e[0] || Array.isArray(e[0])
            ? ((t = e[0]), (s = e.slice(1, e.length)), (i = a))
            : ((t = e[0].events), (s = e[0].data), (i = e[0].context || a));
          let l = Array.isArray(t) ? t : t.split(" ");
          return (
            l.forEach((e) => {
              if (a.eventsListeners && a.eventsListeners[e]) {
                let t = [];
                a.eventsListeners[e].forEach((e) => {
                  t.push(e);
                }),
                  t.forEach((e) => {
                    e.apply(i, s);
                  });
              }
            }),
            a
          );
        }
        useModulesParams(e) {
          let t = this;
          t.modules &&
            Object.keys(t.modules).forEach((s) => {
              let i = t.modules[s];
              i.params && r.extend(e, i.params);
            });
        }
        useModules(e = {}) {
          let t = this;
          t.modules &&
            Object.keys(t.modules).forEach((s) => {
              let i = t.modules[s],
                a = e[s] || {};
              i.instance &&
                Object.keys(i.instance).forEach((e) => {
                  let s = i.instance[e];
                  "function" == typeof s ? (t[e] = s.bind(t)) : (t[e] = s);
                }),
                i.on &&
                  t.on &&
                  Object.keys(i.on).forEach((e) => {
                    t.on(e, i.on[e]);
                  }),
                i.create && i.create.bind(t)(a);
            });
        }
        static set components(e) {
          this.use && this.use(e);
        }
        static installModule(e, ...t) {
          let s = this;
          s.prototype.modules || (s.prototype.modules = {});
          let i =
            e.name || `${Object.keys(s.prototype.modules).length}_${r.now()}`;
          return (
            (s.prototype.modules[i] = e),
            e.proto &&
              Object.keys(e.proto).forEach((t) => {
                s.prototype[t] = e.proto[t];
              }),
            e.static &&
              Object.keys(e.static).forEach((t) => {
                s[t] = e.static[t];
              }),
            e.install && e.install.apply(s, t),
            s
          );
        }
        static use(e, ...t) {
          let s = this;
          return Array.isArray(e)
            ? (e.forEach((e) => s.installModule(e)), s)
            : s.installModule(e, ...t);
        }
      }
      let d = (function () {
        let e = a.u9.navigator.platform,
          t = a.u9.navigator.userAgent,
          s = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !!(a.u9.cordova || a.u9.phonegap),
            phonegap: !!(a.u9.cordova || a.u9.phonegap),
            electron: !1,
          },
          i = a.u9.screen.width,
          l = a.u9.screen.height,
          r = t.match(/(Android);?[\s\/]+([\d.]+)?/),
          o = t.match(/(iPad).*OS\s([\d_]+)/),
          d = t.match(/(iPod)(.*OS\s([\d_]+))?/),
          h = !o && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          p = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0,
          c = t.indexOf("Edge/") >= 0,
          u = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0,
          m = "Win32" === e,
          g = t.toLowerCase().indexOf("electron") >= 0,
          f = "MacIntel" === e;
        return (
          !o &&
            f &&
            n.touch &&
            ((1024 === i && 1366 === l) ||
              (834 === i && 1194 === l) ||
              (834 === i && 1112 === l) ||
              (768 === i && 1024 === l)) &&
            ((o = t.match(/(Version)\/([\d.]+)/)), (f = !1)),
          (s.ie = p),
          (s.edge = c),
          (s.firefox = u),
          r &&
            !m &&
            ((s.os = "android"),
            (s.osVersion = r[2]),
            (s.android = !0),
            (s.androidChrome = t.toLowerCase().indexOf("chrome") >= 0)),
          (o || h || d) && ((s.os = "ios"), (s.ios = !0)),
          h && !d && ((s.osVersion = h[2].replace(/_/g, ".")), (s.iphone = !0)),
          o && ((s.osVersion = o[2].replace(/_/g, ".")), (s.ipad = !0)),
          d &&
            ((s.osVersion = d[3] ? d[3].replace(/_/g, ".") : null),
            (s.ipod = !0)),
          s.ios &&
            s.osVersion &&
            t.indexOf("Version/") >= 0 &&
            "10" === s.osVersion.split(".")[0] &&
            (s.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]),
          (s.webView =
            !!(
              (h || o || d) &&
              (t.match(/.*AppleWebKit(?!.*Safari)/i) ||
                a.u9.navigator.standalone)
            ) ||
            (a.u9.matchMedia &&
              a.u9.matchMedia("(display-mode: standalone)").matches)),
          (s.webview = s.webView),
          (s.standalone = s.webView),
          (s.desktop = !(s.ios || s.android) || g),
          s.desktop &&
            ((s.electron = g),
            (s.macos = f),
            (s.windows = m),
            s.macos && (s.os = "macos"),
            s.windows && (s.os = "windows")),
          (s.pixelRatio = a.u9.devicePixelRatio || 1),
          s
        );
      })();
      function h(e) {
        let t = this.touchEventsData,
          { params: s, touches: l } = this;
        if (this.animating && s.preventInteractionOnTransition) return;
        let n = e;
        n.originalEvent && (n = n.originalEvent);
        let o = (0, i.$)(n.target);
        if (
          ("wrapper" === s.touchEventsTarget &&
            !o.closest(this.wrapperEl).length) ||
          ((t.isTouchEvent = "touchstart" === n.type),
          (!t.isTouchEvent && "which" in n && 3 === n.which) ||
            (!t.isTouchEvent && "button" in n && n.button > 0) ||
            (t.isTouched && t.isMoved))
        )
          return;
        if (
          s.noSwiping &&
          o.closest(
            s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`
          )[0]
        ) {
          this.allowClick = !0;
          return;
        }
        if (s.swipeHandler && !o.closest(s.swipeHandler)[0]) return;
        (l.currentX =
          "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX),
          (l.currentY =
            "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY);
        let d = l.currentX,
          h = l.currentY,
          p = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
          c = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (!p || (!(d <= c) && !(d >= a.u9.screen.width - c))) {
          if (
            (r.extend(t, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0,
            }),
            (l.startX = d),
            (l.startY = h),
            (t.touchStartTime = r.now()),
            (this.allowClick = !0),
            this.updateSize(),
            (this.swipeDirection = void 0),
            s.threshold > 0 && (t.allowThresholdMove = !1),
            "touchstart" !== n.type)
          ) {
            let e = !0;
            o.is(t.formElements) && (e = !1),
              a.tj.activeElement &&
                (0, i.$)(a.tj.activeElement).is(t.formElements) &&
                a.tj.activeElement !== o[0] &&
                a.tj.activeElement.blur();
            let l = e && this.allowTouchMove && s.touchStartPreventDefault;
            (s.touchStartForcePreventDefault || l) && n.preventDefault();
          }
          this.emit("touchStart", n);
        }
      }
      function p(e) {
        let t = this.touchEventsData,
          { params: s, touches: l, rtlTranslate: n } = this,
          o = e;
        if ((o.originalEvent && (o = o.originalEvent), !t.isTouched)) {
          t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", o);
          return;
        }
        if (t.isTouchEvent && "touchmove" !== o.type) return;
        let d =
            "touchmove" === o.type &&
            o.targetTouches &&
            (o.targetTouches[0] || o.changedTouches[0]),
          h = "touchmove" === o.type ? d.pageX : o.pageX,
          p = "touchmove" === o.type ? d.pageY : o.pageY;
        if (o.preventedByNestedSwiper) {
          (l.startX = h), (l.startY = p);
          return;
        }
        if (!this.allowTouchMove) {
          (this.allowClick = !1),
            t.isTouched &&
              (r.extend(l, { startX: h, startY: p, currentX: h, currentY: p }),
              (t.touchStartTime = r.now()));
          return;
        }
        if (t.isTouchEvent && s.touchReleaseOnEdges && !s.loop) {
          if (this.isVertical()) {
            if (
              (p < l.startY && this.translate <= this.maxTranslate()) ||
              (p > l.startY && this.translate >= this.minTranslate())
            ) {
              (t.isTouched = !1), (t.isMoved = !1);
              return;
            }
          } else if (
            (h < l.startX && this.translate <= this.maxTranslate()) ||
            (h > l.startX && this.translate >= this.minTranslate())
          )
            return;
        }
        if (
          t.isTouchEvent &&
          a.tj.activeElement &&
          o.target === a.tj.activeElement &&
          (0, i.$)(o.target).is(t.formElements)
        ) {
          (t.isMoved = !0), (this.allowClick = !1);
          return;
        }
        if (
          (t.allowTouchCallbacks && this.emit("touchMove", o),
          o.targetTouches && o.targetTouches.length > 1)
        )
          return;
        (l.currentX = h), (l.currentY = p);
        let c = l.currentX - l.startX,
          u = l.currentY - l.startY;
        if (
          this.params.threshold &&
          Math.sqrt(c ** 2 + u ** 2) < this.params.threshold
        )
          return;
        if (void 0 === t.isScrolling) {
          let e;
          (this.isHorizontal() && l.currentY === l.startY) ||
          (this.isVertical() && l.currentX === l.startX)
            ? (t.isScrolling = !1)
            : c * c + u * u >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(u), Math.abs(c))) / Math.PI),
              (t.isScrolling = this.isHorizontal()
                ? e > s.touchAngle
                : 90 - e > s.touchAngle));
        }
        if (
          (t.isScrolling && this.emit("touchMoveOpposite", o),
          void 0 === t.startMoving &&
            (l.currentX !== l.startX || l.currentY !== l.startY) &&
            (t.startMoving = !0),
          t.isScrolling)
        ) {
          t.isTouched = !1;
          return;
        }
        if (!t.startMoving) return;
        (this.allowClick = !1),
          !s.cssMode && o.cancelable && o.preventDefault(),
          s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
          t.isMoved ||
            (s.loop && this.loopFix(),
            (t.startTranslate = this.getTranslate()),
            this.setTransition(0),
            this.animating &&
              this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (t.allowMomentumBounce = !1),
            s.grabCursor &&
              (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) &&
              this.setGrabCursor(!0),
            this.emit("sliderFirstMove", o)),
          this.emit("sliderMove", o),
          (t.isMoved = !0);
        let m = this.isHorizontal() ? c : u;
        (l.diff = m),
          (m *= s.touchRatio),
          n && (m = -m),
          (this.swipeDirection = m > 0 ? "prev" : "next"),
          (t.currentTranslate = m + t.startTranslate);
        let g = !0,
          f = s.resistanceRatio;
        if (
          (s.touchReleaseOnEdges && (f = 0),
          m > 0 && t.currentTranslate > this.minTranslate()
            ? ((g = !1),
              s.resistance &&
                (t.currentTranslate =
                  this.minTranslate() -
                  1 +
                  (-this.minTranslate() + t.startTranslate + m) ** f))
            : m < 0 &&
              t.currentTranslate < this.maxTranslate() &&
              ((g = !1),
              s.resistance &&
                (t.currentTranslate =
                  this.maxTranslate() +
                  1 -
                  (this.maxTranslate() - t.startTranslate - m) ** f)),
          g && (o.preventedByNestedSwiper = !0),
          !this.allowSlideNext &&
            "next" === this.swipeDirection &&
            t.currentTranslate < t.startTranslate &&
            (t.currentTranslate = t.startTranslate),
          !this.allowSlidePrev &&
            "prev" === this.swipeDirection &&
            t.currentTranslate > t.startTranslate &&
            (t.currentTranslate = t.startTranslate),
          s.threshold > 0)
        ) {
          if (Math.abs(m) > s.threshold || t.allowThresholdMove) {
            if (!t.allowThresholdMove) {
              (t.allowThresholdMove = !0),
                (l.startX = l.currentX),
                (l.startY = l.currentY),
                (t.currentTranslate = t.startTranslate),
                (l.diff = this.isHorizontal()
                  ? l.currentX - l.startX
                  : l.currentY - l.startY);
              return;
            }
          } else {
            t.currentTranslate = t.startTranslate;
            return;
          }
        }
        s.followFinger &&
          !s.cssMode &&
          ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) &&
            (this.updateActiveIndex(), this.updateSlidesClasses()),
          s.freeMode &&
            (0 === t.velocities.length &&
              t.velocities.push({
                position: l[this.isHorizontal() ? "startX" : "startY"],
                time: t.touchStartTime,
              }),
            t.velocities.push({
              position: l[this.isHorizontal() ? "currentX" : "currentY"],
              time: r.now(),
            })),
          this.updateProgress(t.currentTranslate),
          this.setTranslate(t.currentTranslate));
      }
      function c(e) {
        let t;
        let s = this,
          i = s.touchEventsData,
          {
            params: a,
            touches: l,
            rtlTranslate: n,
            $wrapperEl: o,
            slidesGrid: d,
            snapGrid: h,
          } = s,
          p = e;
        if (
          (p.originalEvent && (p = p.originalEvent),
          i.allowTouchCallbacks && s.emit("touchEnd", p),
          (i.allowTouchCallbacks = !1),
          !i.isTouched)
        ) {
          i.isMoved && a.grabCursor && s.setGrabCursor(!1),
            (i.isMoved = !1),
            (i.startMoving = !1);
          return;
        }
        a.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) &&
          s.setGrabCursor(!1);
        let c = r.now(),
          u = c - i.touchStartTime;
        if (
          (s.allowClick &&
            (s.updateClickedSlide(p),
            s.emit("tap click", p),
            u < 300 &&
              c - i.lastClickTime < 300 &&
              s.emit("doubleTap doubleClick", p)),
          (i.lastClickTime = r.now()),
          r.nextTick(() => {
            s.destroyed || (s.allowClick = !0);
          }),
          !i.isTouched ||
            !i.isMoved ||
            !s.swipeDirection ||
            0 === l.diff ||
            i.currentTranslate === i.startTranslate)
        ) {
          (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
          return;
        }
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (t = a.followFinger
            ? n
              ? s.translate
              : -s.translate
            : -i.currentTranslate),
          a.cssMode)
        )
          return;
        if (a.freeMode) {
          if (t < -s.minTranslate()) {
            s.slideTo(s.activeIndex);
            return;
          }
          if (t > -s.maxTranslate()) {
            s.slides.length < h.length
              ? s.slideTo(h.length - 1)
              : s.slideTo(s.slides.length - 1);
            return;
          }
          if (a.freeModeMomentum) {
            let e, t;
            if (i.velocities.length > 1) {
              let e = i.velocities.pop(),
                t = i.velocities.pop(),
                l = e.position - t.position,
                n = e.time - t.time;
              (s.velocity = l / n),
                (s.velocity /= 2),
                Math.abs(s.velocity) < a.freeModeMinimumVelocity &&
                  (s.velocity = 0),
                (n > 150 || r.now() - e.time > 300) && (s.velocity = 0);
            } else s.velocity = 0;
            (s.velocity *= a.freeModeMomentumVelocityRatio),
              (i.velocities.length = 0);
            let l = 1e3 * a.freeModeMomentumRatio,
              d = s.velocity * l,
              p = s.translate + d;
            n && (p = -p);
            let c = !1,
              u = 20 * Math.abs(s.velocity) * a.freeModeMomentumBounceRatio;
            if (p < s.maxTranslate())
              a.freeModeMomentumBounce
                ? (p + s.maxTranslate() < -u && (p = s.maxTranslate() - u),
                  (e = s.maxTranslate()),
                  (c = !0),
                  (i.allowMomentumBounce = !0))
                : (p = s.maxTranslate()),
                a.loop && a.centeredSlides && (t = !0);
            else if (p > s.minTranslate())
              a.freeModeMomentumBounce
                ? (p - s.minTranslate() > u && (p = s.minTranslate() + u),
                  (e = s.minTranslate()),
                  (c = !0),
                  (i.allowMomentumBounce = !0))
                : (p = s.minTranslate()),
                a.loop && a.centeredSlides && (t = !0);
            else if (a.freeModeSticky) {
              let e;
              for (let t = 0; t < h.length; t += 1)
                if (h[t] > -p) {
                  e = t;
                  break;
                }
              p = -(p =
                Math.abs(h[e] - p) < Math.abs(h[e - 1] - p) ||
                "next" === s.swipeDirection
                  ? h[e]
                  : h[e - 1]);
            }
            if (
              (t &&
                s.once("transitionEnd", () => {
                  s.loopFix();
                }),
              0 !== s.velocity)
            ) {
              if (
                ((l = n
                  ? Math.abs((-p - s.translate) / s.velocity)
                  : Math.abs((p - s.translate) / s.velocity)),
                a.freeModeSticky)
              ) {
                let e = Math.abs((n ? -p : p) - s.translate),
                  t = s.slidesSizesGrid[s.activeIndex];
                l = e < t ? a.speed : e < 2 * t ? 1.5 * a.speed : 2.5 * a.speed;
              }
            } else if (a.freeModeSticky) {
              s.slideToClosest();
              return;
            }
            a.freeModeMomentumBounce && c
              ? (s.updateProgress(e),
                s.setTransition(l),
                s.setTranslate(p),
                s.transitionStart(!0, s.swipeDirection),
                (s.animating = !0),
                o.transitionEnd(() => {
                  s &&
                    !s.destroyed &&
                    i.allowMomentumBounce &&
                    (s.emit("momentumBounce"),
                    s.setTransition(a.speed),
                    setTimeout(() => {
                      s.setTranslate(e),
                        o.transitionEnd(() => {
                          s && !s.destroyed && s.transitionEnd();
                        });
                    }, 0));
                }))
              : s.velocity
              ? (s.updateProgress(p),
                s.setTransition(l),
                s.setTranslate(p),
                s.transitionStart(!0, s.swipeDirection),
                s.animating ||
                  ((s.animating = !0),
                  o.transitionEnd(() => {
                    s && !s.destroyed && s.transitionEnd();
                  })))
              : s.updateProgress(p),
              s.updateActiveIndex(),
              s.updateSlidesClasses();
          } else if (a.freeModeSticky) {
            s.slideToClosest();
            return;
          }
          (!a.freeModeMomentum || u >= a.longSwipesMs) &&
            (s.updateProgress(),
            s.updateActiveIndex(),
            s.updateSlidesClasses());
          return;
        }
        let m = 0,
          g = s.slidesSizesGrid[0];
        for (
          let e = 0;
          e < d.length;
          e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
        ) {
          let s = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== d[e + s]
            ? t >= d[e] && t < d[e + s] && ((m = e), (g = d[e + s] - d[e]))
            : t >= d[e] && ((m = e), (g = d[d.length - 1] - d[d.length - 2]));
        }
        let f = (t - d[m]) / g,
          v = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (u > a.longSwipesMs) {
          if (!a.longSwipes) {
            s.slideTo(s.activeIndex);
            return;
          }
          "next" === s.swipeDirection &&
            (f >= a.longSwipesRatio ? s.slideTo(m + v) : s.slideTo(m)),
            "prev" === s.swipeDirection &&
              (f > 1 - a.longSwipesRatio ? s.slideTo(m + v) : s.slideTo(m));
        } else {
          if (!a.shortSwipes) {
            s.slideTo(s.activeIndex);
            return;
          }
          let e =
            s.navigation &&
            (p.target === s.navigation.nextEl ||
              p.target === s.navigation.prevEl);
          e
            ? p.target === s.navigation.nextEl
              ? s.slideTo(m + v)
              : s.slideTo(m)
            : ("next" === s.swipeDirection && s.slideTo(m + v),
              "prev" === s.swipeDirection && s.slideTo(m));
        }
      }
      function u() {
        let { params: e, el: t } = this;
        if (t && 0 === t.offsetWidth) return;
        e.breakpoints && this.setBreakpoint();
        let { allowSlideNext: s, allowSlidePrev: i, snapGrid: a } = this;
        (this.allowSlideNext = !0),
          (this.allowSlidePrev = !0),
          this.updateSize(),
          this.updateSlides(),
          this.updateSlidesClasses(),
          ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
          this.isEnd &&
          !this.isBeginning &&
          !this.params.centeredSlides
            ? this.slideTo(this.slides.length - 1, 0, !1, !0)
            : this.slideTo(this.activeIndex, 0, !1, !0),
          this.autoplay &&
            this.autoplay.running &&
            this.autoplay.paused &&
            this.autoplay.run(),
          (this.allowSlidePrev = i),
          (this.allowSlideNext = s),
          this.params.watchOverflow &&
            a !== this.snapGrid &&
            this.checkOverflow();
      }
      function m(e) {
        !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function g() {
        let { wrapperEl: e, rtlTranslate: t } = this;
        (this.previousTranslate = this.translate),
          this.isHorizontal()
            ? t
              ? (this.translate = e.scrollWidth - e.offsetWidth - e.scrollLeft)
              : (this.translate = -e.scrollLeft)
            : (this.translate = -e.scrollTop),
          -0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        let s = this.maxTranslate() - this.minTranslate();
        (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !==
          this.progress &&
          this.updateProgress(t ? -this.translate : this.translate),
          this.emit("setTranslate", this.translate, !1);
      }
      let f = !1;
      function v() {}
      var b = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
      };
      let w = {
          update: {
            updateSize: function () {
              let e, t;
              let s = this.$el;
              (e =
                void 0 !== this.params.width
                  ? this.params.width
                  : s[0].clientWidth),
                (t =
                  void 0 !== this.params.height
                    ? this.params.height
                    : s[0].clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt(s.css("padding-left"), 10) -
                    parseInt(s.css("padding-right"), 10)),
                  (t =
                    t -
                    parseInt(s.css("padding-top"), 10) -
                    parseInt(s.css("padding-bottom"), 10)),
                  r.extend(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  }));
            },
            updateSlides: function () {
              let e, t, s;
              let i = this.params,
                { $wrapperEl: l, size: n, rtlTranslate: o, wrongRTL: d } = this,
                h = this.virtual && i.virtual.enabled,
                p = h ? this.virtual.slides.length : this.slides.length,
                c = l.children(`.${this.params.slideClass}`),
                u = h ? this.virtual.slides.length : c.length,
                m = [],
                g = [],
                f = [];
              function v(e) {
                return !i.cssMode || e !== c.length - 1;
              }
              let b = i.slidesOffsetBefore;
              "function" == typeof b && (b = i.slidesOffsetBefore.call(this));
              let w = i.slidesOffsetAfter;
              "function" == typeof w && (w = i.slidesOffsetAfter.call(this));
              let y = this.snapGrid.length,
                x = this.snapGrid.length,
                T = i.spaceBetween,
                C = -b,
                E = 0,
                S = 0;
              if (void 0 === n) return;
              "string" == typeof T &&
                T.indexOf("%") >= 0 &&
                (T = (parseFloat(T.replace("%", "")) / 100) * n),
                (this.virtualSize = -T),
                o
                  ? c.css({ marginLeft: "", marginTop: "" })
                  : c.css({ marginRight: "", marginBottom: "" }),
                i.slidesPerColumn > 1 &&
                  ((e =
                    Math.floor(u / i.slidesPerColumn) ===
                    u / this.params.slidesPerColumn
                      ? u
                      : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn),
                  "auto" !== i.slidesPerView &&
                    "row" === i.slidesPerColumnFill &&
                    (e = Math.max(e, i.slidesPerView * i.slidesPerColumn)));
              let $ = i.slidesPerColumn,
                M = e / $,
                P = Math.floor(u / i.slidesPerColumn);
              for (let s = 0; s < u; s += 1) {
                t = 0;
                let l = c.eq(s);
                if (i.slidesPerColumn > 1) {
                  let t, a, r;
                  if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                    let n = Math.floor(
                        s / (i.slidesPerGroup * i.slidesPerColumn)
                      ),
                      o = s - i.slidesPerColumn * i.slidesPerGroup * n,
                      d =
                        0 === n
                          ? i.slidesPerGroup
                          : Math.min(
                              Math.ceil((u - n * $ * i.slidesPerGroup) / $),
                              i.slidesPerGroup
                            );
                    (r = Math.floor(o / d)),
                      (t =
                        (a = o - r * d + n * i.slidesPerGroup) + (r * e) / $),
                      l.css({
                        "-webkit-box-ordinal-group": t,
                        "-moz-box-ordinal-group": t,
                        "-ms-flex-order": t,
                        "-webkit-order": t,
                        order: t,
                      });
                  } else
                    "column" === i.slidesPerColumnFill
                      ? ((a = Math.floor(s / $)),
                        (r = s - a * $),
                        (a > P || (a === P && r === $ - 1)) &&
                          (r += 1) >= $ &&
                          ((r = 0), (a += 1)))
                      : ((r = Math.floor(s / M)), (a = s - r * M));
                  l.css(
                    `margin-${this.isHorizontal() ? "top" : "left"}`,
                    0 !== r && i.spaceBetween && `${i.spaceBetween}px`
                  );
                }
                if ("none" !== l.css("display")) {
                  if ("auto" === i.slidesPerView) {
                    let e = a.u9.getComputedStyle(l[0], null),
                      s = l[0].style.transform,
                      r = l[0].style.webkitTransform;
                    if (
                      (s && (l[0].style.transform = "none"),
                      r && (l[0].style.webkitTransform = "none"),
                      i.roundLengths)
                    )
                      t = this.isHorizontal()
                        ? l.outerWidth(!0)
                        : l.outerHeight(!0);
                    else if (this.isHorizontal()) {
                      let s = parseFloat(e.getPropertyValue("width")),
                        i = parseFloat(e.getPropertyValue("padding-left")),
                        a = parseFloat(e.getPropertyValue("padding-right")),
                        l = parseFloat(e.getPropertyValue("margin-left")),
                        r = parseFloat(e.getPropertyValue("margin-right")),
                        n = e.getPropertyValue("box-sizing");
                      t =
                        n && "border-box" === n ? s + l + r : s + i + a + l + r;
                    } else {
                      let s = parseFloat(e.getPropertyValue("height")),
                        i = parseFloat(e.getPropertyValue("padding-top")),
                        a = parseFloat(e.getPropertyValue("padding-bottom")),
                        l = parseFloat(e.getPropertyValue("margin-top")),
                        r = parseFloat(e.getPropertyValue("margin-bottom")),
                        n = e.getPropertyValue("box-sizing");
                      t =
                        n && "border-box" === n ? s + l + r : s + i + a + l + r;
                    }
                    s && (l[0].style.transform = s),
                      r && (l[0].style.webkitTransform = r),
                      i.roundLengths && (t = Math.floor(t));
                  } else
                    (t = (n - (i.slidesPerView - 1) * T) / i.slidesPerView),
                      i.roundLengths && (t = Math.floor(t)),
                      c[s] &&
                        (this.isHorizontal()
                          ? (c[s].style.width = `${t}px`)
                          : (c[s].style.height = `${t}px`));
                  c[s] && (c[s].swiperSlideSize = t),
                    f.push(t),
                    i.centeredSlides
                      ? ((C = C + t / 2 + E / 2 + T),
                        0 === E && 0 !== s && (C = C - n / 2 - T),
                        0 === s && (C = C - n / 2 - T),
                        0.001 > Math.abs(C) && (C = 0),
                        i.roundLengths && (C = Math.floor(C)),
                        S % i.slidesPerGroup == 0 && m.push(C),
                        g.push(C))
                      : (i.roundLengths && (C = Math.floor(C)),
                        (S - Math.min(this.params.slidesPerGroupSkip, S)) %
                          this.params.slidesPerGroup ==
                          0 && m.push(C),
                        g.push(C),
                        (C = C + t + T)),
                    (this.virtualSize += t + T),
                    (E = t),
                    (S += 1);
                }
              }
              if (
                ((this.virtualSize = Math.max(this.virtualSize, n) + w),
                o &&
                  d &&
                  ("slide" === i.effect || "coverflow" === i.effect) &&
                  l.css({ width: `${this.virtualSize + i.spaceBetween}px` }),
                i.setWrapperSize &&
                  (this.isHorizontal()
                    ? l.css({ width: `${this.virtualSize + i.spaceBetween}px` })
                    : l.css({
                        height: `${this.virtualSize + i.spaceBetween}px`,
                      })),
                i.slidesPerColumn > 1 &&
                  ((this.virtualSize = (t + i.spaceBetween) * e),
                  (this.virtualSize =
                    Math.ceil(this.virtualSize / i.slidesPerColumn) -
                    i.spaceBetween),
                  this.isHorizontal()
                    ? l.css({ width: `${this.virtualSize + i.spaceBetween}px` })
                    : l.css({
                        height: `${this.virtualSize + i.spaceBetween}px`,
                      }),
                  i.centeredSlides))
              ) {
                s = [];
                for (let e = 0; e < m.length; e += 1) {
                  let t = m[e];
                  i.roundLengths && (t = Math.floor(t)),
                    m[e] < this.virtualSize + m[0] && s.push(t);
                }
                m = s;
              }
              if (!i.centeredSlides) {
                s = [];
                for (let e = 0; e < m.length; e += 1) {
                  let t = m[e];
                  i.roundLengths && (t = Math.floor(t)),
                    m[e] <= this.virtualSize - n && s.push(t);
                }
                (m = s),
                  Math.floor(this.virtualSize - n) -
                    Math.floor(m[m.length - 1]) >
                    1 && m.push(this.virtualSize - n);
              }
              if (
                (0 === m.length && (m = [0]),
                0 !== i.spaceBetween &&
                  (this.isHorizontal()
                    ? o
                      ? c.filter(v).css({ marginLeft: `${T}px` })
                      : c.filter(v).css({ marginRight: `${T}px` })
                    : c.filter(v).css({ marginBottom: `${T}px` })),
                i.centeredSlides && i.centeredSlidesBounds)
              ) {
                let e = 0;
                f.forEach((t) => {
                  e += t + (i.spaceBetween ? i.spaceBetween : 0);
                }),
                  (e -= i.spaceBetween);
                let t = e - n;
                m = m.map((e) => (e < 0 ? -b : e > t ? t + w : e));
              }
              if (i.centerInsufficientSlides) {
                let e = 0;
                if (
                  (f.forEach((t) => {
                    e += t + (i.spaceBetween ? i.spaceBetween : 0);
                  }),
                  (e -= i.spaceBetween) < n)
                ) {
                  let t = (n - e) / 2;
                  m.forEach((e, s) => {
                    m[s] = e - t;
                  }),
                    g.forEach((e, s) => {
                      g[s] = e + t;
                    });
                }
              }
              r.extend(this, {
                slides: c,
                snapGrid: m,
                slidesGrid: g,
                slidesSizesGrid: f,
              }),
                u !== p && this.emit("slidesLengthChange"),
                m.length !== y &&
                  (this.params.watchOverflow && this.checkOverflow(),
                  this.emit("snapGridLengthChange")),
                g.length !== x && this.emit("slidesGridLengthChange"),
                (i.watchSlidesProgress || i.watchSlidesVisibility) &&
                  this.updateSlidesOffset();
            },
            updateAutoHeight: function (e) {
              let t;
              let s = [],
                i = 0;
              if (
                ("number" == typeof e
                  ? this.setTransition(e)
                  : !0 === e && this.setTransition(this.params.speed),
                "auto" !== this.params.slidesPerView &&
                  this.params.slidesPerView > 1)
              ) {
                if (this.params.centeredSlides)
                  this.visibleSlides.each((e, t) => {
                    s.push(t);
                  });
                else
                  for (
                    t = 0;
                    t < Math.ceil(this.params.slidesPerView);
                    t += 1
                  ) {
                    let e = this.activeIndex + t;
                    if (e > this.slides.length) break;
                    s.push(this.slides.eq(e)[0]);
                  }
              } else s.push(this.slides.eq(this.activeIndex)[0]);
              for (t = 0; t < s.length; t += 1)
                if (void 0 !== s[t]) {
                  let e = s[t].offsetHeight;
                  i = e > i ? e : i;
                }
              i && this.$wrapperEl.css("height", `${i}px`);
            },
            updateSlidesOffset: function () {
              let e = this.slides;
              for (let t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal()
                  ? e[t].offsetLeft
                  : e[t].offsetTop;
            },
            updateSlidesProgress: function (e = (this && this.translate) || 0) {
              let t = this.params,
                { slides: s, rtlTranslate: a } = this;
              if (0 === s.length) return;
              void 0 === s[0].swiperSlideOffset && this.updateSlidesOffset();
              let l = -e;
              a && (l = e),
                s.removeClass(t.slideVisibleClass),
                (this.visibleSlidesIndexes = []),
                (this.visibleSlides = []);
              for (let e = 0; e < s.length; e += 1) {
                let i = s[e],
                  r =
                    (l +
                      (t.centeredSlides ? this.minTranslate() : 0) -
                      i.swiperSlideOffset) /
                    (i.swiperSlideSize + t.spaceBetween);
                if (
                  t.watchSlidesVisibility ||
                  (t.centeredSlides && t.autoHeight)
                ) {
                  let a = -(l - i.swiperSlideOffset),
                    r = a + this.slidesSizesGrid[e],
                    n =
                      (a >= 0 && a < this.size - 1) ||
                      (r > 1 && r <= this.size) ||
                      (a <= 0 && r >= this.size);
                  n &&
                    (this.visibleSlides.push(i),
                    this.visibleSlidesIndexes.push(e),
                    s.eq(e).addClass(t.slideVisibleClass));
                }
                i.progress = a ? -r : r;
              }
              this.visibleSlides = (0, i.$)(this.visibleSlides);
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                let t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              let t = this.params,
                s = this.maxTranslate() - this.minTranslate(),
                { progress: i, isBeginning: a, isEnd: l } = this,
                n = a,
                o = l;
              0 === s
                ? ((i = 0), (a = !0), (l = !0))
                : ((a = (i = (e - this.minTranslate()) / s) <= 0),
                  (l = i >= 1)),
                r.extend(this, { progress: i, isBeginning: a, isEnd: l }),
                (t.watchSlidesProgress ||
                  t.watchSlidesVisibility ||
                  (t.centeredSlides && t.autoHeight)) &&
                  this.updateSlidesProgress(e),
                a && !n && this.emit("reachBeginning toEdge"),
                l && !o && this.emit("reachEnd toEdge"),
                ((n && !a) || (o && !l)) && this.emit("fromEdge"),
                this.emit("progress", i);
            },
            updateSlidesClasses: function () {
              let e;
              let {
                  slides: t,
                  params: s,
                  $wrapperEl: i,
                  activeIndex: a,
                  realIndex: l,
                } = this,
                r = this.virtual && s.virtual.enabled;
              t.removeClass(
                `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
              ),
                (e = r
                  ? this.$wrapperEl.find(
                      `.${s.slideClass}[data-swiper-slide-index="${a}"]`
                    )
                  : t.eq(a)).addClass(s.slideActiveClass),
                s.loop &&
                  (e.hasClass(s.slideDuplicateClass)
                    ? i
                        .children(
                          `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l}"]`
                        )
                        .addClass(s.slideDuplicateActiveClass)
                    : i
                        .children(
                          `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l}"]`
                        )
                        .addClass(s.slideDuplicateActiveClass));
              let n = e
                .nextAll(`.${s.slideClass}`)
                .eq(0)
                .addClass(s.slideNextClass);
              s.loop &&
                0 === n.length &&
                (n = t.eq(0)).addClass(s.slideNextClass);
              let o = e
                .prevAll(`.${s.slideClass}`)
                .eq(0)
                .addClass(s.slidePrevClass);
              s.loop &&
                0 === o.length &&
                (o = t.eq(-1)).addClass(s.slidePrevClass),
                s.loop &&
                  (n.hasClass(s.slideDuplicateClass)
                    ? i
                        .children(
                          `.${s.slideClass}:not(.${
                            s.slideDuplicateClass
                          })[data-swiper-slide-index="${n.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicateNextClass)
                    : i
                        .children(
                          `.${s.slideClass}.${
                            s.slideDuplicateClass
                          }[data-swiper-slide-index="${n.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicateNextClass),
                  o.hasClass(s.slideDuplicateClass)
                    ? i
                        .children(
                          `.${s.slideClass}:not(.${
                            s.slideDuplicateClass
                          })[data-swiper-slide-index="${o.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicatePrevClass)
                    : i
                        .children(
                          `.${s.slideClass}.${
                            s.slideDuplicateClass
                          }[data-swiper-slide-index="${o.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicatePrevClass));
            },
            updateActiveIndex: function (e) {
              let t;
              let s = this.rtlTranslate ? this.translate : -this.translate,
                {
                  slidesGrid: i,
                  snapGrid: a,
                  params: l,
                  activeIndex: n,
                  realIndex: o,
                  snapIndex: d,
                } = this,
                h = e;
              if (void 0 === h) {
                for (let e = 0; e < i.length; e += 1)
                  void 0 !== i[e + 1]
                    ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                      ? (h = e)
                      : s >= i[e] && s < i[e + 1] && (h = e + 1)
                    : s >= i[e] && (h = e);
                l.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
              }
              if (a.indexOf(s) >= 0) t = a.indexOf(s);
              else {
                let e = Math.min(l.slidesPerGroupSkip, h);
                t = e + Math.floor((h - e) / l.slidesPerGroup);
              }
              if ((t >= a.length && (t = a.length - 1), h === n)) {
                t !== d && ((this.snapIndex = t), this.emit("snapIndexChange"));
                return;
              }
              let p = parseInt(
                this.slides.eq(h).attr("data-swiper-slide-index") || h,
                10
              );
              r.extend(this, {
                snapIndex: t,
                realIndex: p,
                previousIndex: n,
                activeIndex: h,
              }),
                this.emit("activeIndexChange"),
                this.emit("snapIndexChange"),
                o !== p && this.emit("realIndexChange"),
                (this.initialized || this.params.runCallbacksOnInit) &&
                  this.emit("slideChange");
            },
            updateClickedSlide: function (e) {
              let t = this.params,
                s = (0, i.$)(e.target).closest(`.${t.slideClass}`)[0],
                a = !1;
              if (s)
                for (let e = 0; e < this.slides.length; e += 1)
                  this.slides[e] === s && (a = !0);
              if (s && a)
                (this.clickedSlide = s),
                  this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(
                        (0, i.$)(s).attr("data-swiper-slide-index"),
                        10
                      ))
                    : (this.clickedIndex = (0, i.$)(s).index());
              else {
                (this.clickedSlide = void 0), (this.clickedIndex = void 0);
                return;
              }
              t.slideToClickedSlide &&
                void 0 !== this.clickedIndex &&
                this.clickedIndex !== this.activeIndex &&
                this.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
              let {
                params: t,
                rtlTranslate: s,
                translate: i,
                $wrapperEl: a,
              } = this;
              if (t.virtualTranslate) return s ? -i : i;
              if (t.cssMode) return i;
              let l = r.getTranslate(a[0], e);
              return s && (l = -l), l || 0;
            },
            setTranslate: function (e, t) {
              let {
                  rtlTranslate: s,
                  params: i,
                  $wrapperEl: a,
                  wrapperEl: l,
                  progress: r,
                } = this,
                n = 0,
                o = 0;
              this.isHorizontal() ? (n = s ? -e : e) : (o = e),
                i.roundLengths && ((n = Math.floor(n)), (o = Math.floor(o))),
                i.cssMode
                  ? (l[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      this.isHorizontal() ? -n : -o)
                  : i.virtualTranslate ||
                    a.transform(`translate3d(${n}px, ${o}px, 0px)`),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? n : o);
              let d = this.maxTranslate() - this.minTranslate();
              (0 === d ? 0 : (e - this.minTranslate()) / d) !== r &&
                this.updateProgress(e),
                this.emit("setTranslate", this.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (
              e = 0,
              t = this.params.speed,
              s = !0,
              i = !0,
              a
            ) {
              let l;
              let r = this,
                { params: n, wrapperEl: o } = r;
              if (r.animating && n.preventInteractionOnTransition) return !1;
              let d = r.minTranslate(),
                h = r.maxTranslate();
              if (
                ((l = i && e > d ? d : i && e < h ? h : e),
                r.updateProgress(l),
                n.cssMode)
              ) {
                let e = r.isHorizontal();
                return (
                  0 === t
                    ? (o[e ? "scrollLeft" : "scrollTop"] = -l)
                    : o.scrollTo
                    ? o.scrollTo({
                        [e ? "left" : "top"]: -l,
                        behavior: "smooth",
                      })
                    : (o[e ? "scrollLeft" : "scrollTop"] = -l),
                  !0
                );
              }
              return (
                0 === t
                  ? (r.setTransition(0),
                    r.setTranslate(l),
                    s &&
                      (r.emit("beforeTransitionStart", t, a),
                      r.emit("transitionEnd")))
                  : (r.setTransition(t),
                    r.setTranslate(l),
                    s &&
                      (r.emit("beforeTransitionStart", t, a),
                      r.emit("transitionStart")),
                    r.animating ||
                      ((r.animating = !0),
                      r.onTranslateToWrapperTransitionEnd ||
                        (r.onTranslateToWrapperTransitionEnd = function (e) {
                          r &&
                            !r.destroyed &&
                            e.target === this &&
                            (r.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            r.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            (r.onTranslateToWrapperTransitionEnd = null),
                            delete r.onTranslateToWrapperTransitionEnd,
                            s && r.emit("transitionEnd"));
                        }),
                      r.$wrapperEl[0].addEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode || this.$wrapperEl.transition(e),
                this.emit("setTransition", e, t);
            },
            transitionStart: function (e = !0, t) {
              let { activeIndex: s, params: i, previousIndex: a } = this;
              if (i.cssMode) return;
              i.autoHeight && this.updateAutoHeight();
              let l = t;
              if (
                (l || (l = s > a ? "next" : s < a ? "prev" : "reset"),
                this.emit("transitionStart"),
                e && s !== a)
              ) {
                if ("reset" === l) {
                  this.emit("slideResetTransitionStart");
                  return;
                }
                this.emit("slideChangeTransitionStart"),
                  "next" === l
                    ? this.emit("slideNextTransitionStart")
                    : this.emit("slidePrevTransitionStart");
              }
            },
            transitionEnd: function (e = !0, t) {
              let { activeIndex: s, previousIndex: i, params: a } = this;
              if (((this.animating = !1), a.cssMode)) return;
              this.setTransition(0);
              let l = t;
              if (
                (l || (l = s > i ? "next" : s < i ? "prev" : "reset"),
                this.emit("transitionEnd"),
                e && s !== i)
              ) {
                if ("reset" === l) {
                  this.emit("slideResetTransitionEnd");
                  return;
                }
                this.emit("slideChangeTransitionEnd"),
                  "next" === l
                    ? this.emit("slideNextTransitionEnd")
                    : this.emit("slidePrevTransitionEnd");
              }
            },
          },
          slide: {
            slideTo: function (e = 0, t = this.params.speed, s = !0, i) {
              let a;
              let l = this,
                r = e;
              r < 0 && (r = 0);
              let {
                params: n,
                snapGrid: o,
                slidesGrid: d,
                previousIndex: h,
                activeIndex: p,
                rtlTranslate: c,
                wrapperEl: u,
              } = l;
              if (l.animating && n.preventInteractionOnTransition) return !1;
              let m = Math.min(l.params.slidesPerGroupSkip, r),
                g = m + Math.floor((r - m) / l.params.slidesPerGroup);
              g >= o.length && (g = o.length - 1),
                (p || n.initialSlide || 0) === (h || 0) &&
                  s &&
                  l.emit("beforeSlideChangeStart");
              let f = -o[g];
              if ((l.updateProgress(f), n.normalizeSlideIndex))
                for (let e = 0; e < d.length; e += 1)
                  -Math.floor(100 * f) >= Math.floor(100 * d[e]) && (r = e);
              if (
                l.initialized &&
                r !== p &&
                ((!l.allowSlideNext &&
                  f < l.translate &&
                  f < l.minTranslate()) ||
                  (!l.allowSlidePrev &&
                    f > l.translate &&
                    f > l.maxTranslate() &&
                    (p || 0) !== r))
              )
                return !1;
              if (
                ((a = r > p ? "next" : r < p ? "prev" : "reset"),
                (c && -f === l.translate) || (!c && f === l.translate))
              )
                return (
                  l.updateActiveIndex(r),
                  n.autoHeight && l.updateAutoHeight(),
                  l.updateSlidesClasses(),
                  "slide" !== n.effect && l.setTranslate(f),
                  "reset" !== a &&
                    (l.transitionStart(s, a), l.transitionEnd(s, a)),
                  !1
                );
              if (n.cssMode) {
                let e = l.isHorizontal(),
                  s = -f;
                return (
                  c && (s = u.scrollWidth - u.offsetWidth - s),
                  0 === t
                    ? (u[e ? "scrollLeft" : "scrollTop"] = s)
                    : u.scrollTo
                    ? u.scrollTo({
                        [e ? "left" : "top"]: s,
                        behavior: "smooth",
                      })
                    : (u[e ? "scrollLeft" : "scrollTop"] = s),
                  !0
                );
              }
              return (
                0 === t
                  ? (l.setTransition(0),
                    l.setTranslate(f),
                    l.updateActiveIndex(r),
                    l.updateSlidesClasses(),
                    l.emit("beforeTransitionStart", t, i),
                    l.transitionStart(s, a),
                    l.transitionEnd(s, a))
                  : (l.setTransition(t),
                    l.setTranslate(f),
                    l.updateActiveIndex(r),
                    l.updateSlidesClasses(),
                    l.emit("beforeTransitionStart", t, i),
                    l.transitionStart(s, a),
                    l.animating ||
                      ((l.animating = !0),
                      l.onSlideToWrapperTransitionEnd ||
                        (l.onSlideToWrapperTransitionEnd = function (e) {
                          l &&
                            !l.destroyed &&
                            e.target === this &&
                            (l.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              l.onSlideToWrapperTransitionEnd
                            ),
                            l.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              l.onSlideToWrapperTransitionEnd
                            ),
                            (l.onSlideToWrapperTransitionEnd = null),
                            delete l.onSlideToWrapperTransitionEnd,
                            l.transitionEnd(s, a));
                        }),
                      l.$wrapperEl[0].addEventListener(
                        "transitionend",
                        l.onSlideToWrapperTransitionEnd
                      ),
                      l.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        l.onSlideToWrapperTransitionEnd
                      ))),
                !0
              );
            },
            slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
              let a = e;
              return (
                this.params.loop && (a += this.loopedSlides),
                this.slideTo(a, t, s, i)
              );
            },
            slideNext: function (e = this.params.speed, t = !0, s) {
              let { params: i, animating: a } = this,
                l =
                  this.activeIndex < i.slidesPerGroupSkip
                    ? 1
                    : i.slidesPerGroup;
              if (i.loop) {
                if (a) return !1;
                this.loopFix(),
                  (this._clientLeft = this.$wrapperEl[0].clientLeft);
              }
              return this.slideTo(this.activeIndex + l, e, t, s);
            },
            slidePrev: function (e = this.params.speed, t = !0, s) {
              let i;
              let {
                params: a,
                animating: l,
                snapGrid: r,
                slidesGrid: n,
                rtlTranslate: o,
              } = this;
              if (a.loop) {
                if (l) return !1;
                this.loopFix(),
                  (this._clientLeft = this.$wrapperEl[0].clientLeft);
              }
              let d = o ? this.translate : -this.translate;
              function h(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              let p = h(d),
                c = r.map((e) => h(e));
              n.map((e) => h(e)), r[c.indexOf(p)];
              let u = r[c.indexOf(p) - 1];
              return (
                void 0 === u &&
                  a.cssMode &&
                  r.forEach((e) => {
                    !u && p >= e && (u = e);
                  }),
                void 0 !== u &&
                  (i = n.indexOf(u)) < 0 &&
                  (i = this.activeIndex - 1),
                this.slideTo(i, e, t, s)
              );
            },
            slideReset: function (e = this.params.speed, t = !0, s) {
              return this.slideTo(this.activeIndex, e, t, s);
            },
            slideToClosest: function (
              e = this.params.speed,
              t = !0,
              s,
              i = 0.5
            ) {
              let a = this.activeIndex,
                l = Math.min(this.params.slidesPerGroupSkip, a),
                r = l + Math.floor((a - l) / this.params.slidesPerGroup),
                n = this.rtlTranslate ? this.translate : -this.translate;
              if (n >= this.snapGrid[r]) {
                let e = this.snapGrid[r],
                  t = this.snapGrid[r + 1];
                n - e > (t - e) * i && (a += this.params.slidesPerGroup);
              } else {
                let e = this.snapGrid[r - 1],
                  t = this.snapGrid[r];
                n - e <= (t - e) * i && (a -= this.params.slidesPerGroup);
              }
              return (
                (a = Math.min(
                  (a = Math.max(a, 0)),
                  this.slidesGrid.length - 1
                )),
                this.slideTo(a, e, t, s)
              );
            },
            slideToClickedSlide: function () {
              let e;
              let t = this,
                { params: s, $wrapperEl: a } = t,
                l =
                  "auto" === s.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : s.slidesPerView,
                n = t.clickedIndex;
              if (s.loop) {
                if (t.animating) return;
                (e = parseInt(
                  (0, i.$)(t.clickedSlide).attr("data-swiper-slide-index"),
                  10
                )),
                  s.centeredSlides
                    ? n < t.loopedSlides - l / 2 ||
                      n > t.slides.length - t.loopedSlides + l / 2
                      ? (t.loopFix(),
                        (n = a
                          .children(
                            `.${s.slideClass}[data-swiper-slide-index="${e}"]:not(.${s.slideDuplicateClass})`
                          )
                          .eq(0)
                          .index()),
                        r.nextTick(() => {
                          t.slideTo(n);
                        }))
                      : t.slideTo(n)
                    : n > t.slides.length - l
                    ? (t.loopFix(),
                      (n = a
                        .children(
                          `.${s.slideClass}[data-swiper-slide-index="${e}"]:not(.${s.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      r.nextTick(() => {
                        t.slideTo(n);
                      }))
                    : t.slideTo(n);
              } else t.slideTo(n);
            },
          },
          loop: {
            loopCreate: function () {
              let e = this,
                { params: t, $wrapperEl: s } = e;
              s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
              let l = s.children(`.${t.slideClass}`);
              if (t.loopFillGroupWithBlank) {
                let e = t.slidesPerGroup - (l.length % t.slidesPerGroup);
                if (e !== t.slidesPerGroup) {
                  for (let l = 0; l < e; l += 1) {
                    let e = (0, i.$)(a.tj.createElement("div")).addClass(
                      `${t.slideClass} ${t.slideBlankClass}`
                    );
                    s.append(e);
                  }
                  l = s.children(`.${t.slideClass}`);
                }
              }
              "auto" !== t.slidesPerView ||
                t.loopedSlides ||
                (t.loopedSlides = l.length),
                (e.loopedSlides = Math.ceil(
                  parseFloat(t.loopedSlides || t.slidesPerView, 10)
                )),
                (e.loopedSlides += t.loopAdditionalSlides),
                e.loopedSlides > l.length && (e.loopedSlides = l.length);
              let r = [],
                n = [];
              l.each((t, s) => {
                let a = (0, i.$)(s);
                t < e.loopedSlides && n.push(s),
                  t < l.length && t >= l.length - e.loopedSlides && r.push(s),
                  a.attr("data-swiper-slide-index", t);
              });
              for (let e = 0; e < n.length; e += 1)
                s.append(
                  (0, i.$)(n[e].cloneNode(!0)).addClass(t.slideDuplicateClass)
                );
              for (let e = r.length - 1; e >= 0; e -= 1)
                s.prepend(
                  (0, i.$)(r[e].cloneNode(!0)).addClass(t.slideDuplicateClass)
                );
            },
            loopFix: function () {
              let e;
              this.emit("beforeLoopFix");
              let {
                activeIndex: t,
                slides: s,
                loopedSlides: i,
                allowSlidePrev: a,
                allowSlideNext: l,
                snapGrid: r,
                rtlTranslate: n,
              } = this;
              (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
              let o = -r[t],
                d = o - this.getTranslate();
              if (t < i) {
                e = s.length - 3 * i + t + i;
                let a = this.slideTo(e, 0, !1, !0);
                a &&
                  0 !== d &&
                  this.setTranslate((n ? -this.translate : this.translate) - d);
              } else if (t >= s.length - i) {
                e = -s.length + t + i + i;
                let a = this.slideTo(e, 0, !1, !0);
                a &&
                  0 !== d &&
                  this.setTranslate((n ? -this.translate : this.translate) - d);
              }
              (this.allowSlidePrev = a),
                (this.allowSlideNext = l),
                this.emit("loopFix");
            },
            loopDestroy: function () {
              let { $wrapperEl: e, params: t, slides: s } = this;
              e
                .children(
                  `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
                )
                .remove(),
                s.removeAttr("data-swiper-slide-index");
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              if (
                n.touch ||
                !this.params.simulateTouch ||
                (this.params.watchOverflow && this.isLocked) ||
                this.params.cssMode
              )
                return;
              let t = this.el;
              (t.style.cursor = "move"),
                (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (t.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              n.touch ||
                (this.params.watchOverflow && this.isLocked) ||
                this.params.cssMode ||
                (this.el.style.cursor = "");
            },
          },
          manipulation: {
            appendSlide: function (e) {
              let { $wrapperEl: t, params: s } = this;
              if (
                (s.loop && this.loopDestroy(),
                "object" == typeof e && "length" in e)
              )
                for (let s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
              else t.append(e);
              s.loop && this.loopCreate(),
                (s.observer && n.observer) || this.update();
            },
            prependSlide: function (e) {
              let { params: t, $wrapperEl: s, activeIndex: i } = this;
              t.loop && this.loopDestroy();
              let a = i + 1;
              if ("object" == typeof e && "length" in e) {
                for (let t = 0; t < e.length; t += 1) e[t] && s.prepend(e[t]);
                a = i + e.length;
              } else s.prepend(e);
              t.loop && this.loopCreate(),
                (t.observer && n.observer) || this.update(),
                this.slideTo(a, 0, !1);
            },
            addSlide: function (e, t) {
              let { $wrapperEl: s, params: i, activeIndex: a } = this,
                l = a;
              i.loop &&
                ((l -= this.loopedSlides),
                this.loopDestroy(),
                (this.slides = s.children(`.${i.slideClass}`)));
              let r = this.slides.length;
              if (e <= 0) {
                this.prependSlide(t);
                return;
              }
              if (e >= r) {
                this.appendSlide(t);
                return;
              }
              let o = l > e ? l + 1 : l,
                d = [];
              for (let t = r - 1; t >= e; t -= 1) {
                let e = this.slides.eq(t);
                e.remove(), d.unshift(e);
              }
              if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1) t[e] && s.append(t[e]);
                o = l > e ? l + t.length : l;
              } else s.append(t);
              for (let e = 0; e < d.length; e += 1) s.append(d[e]);
              i.loop && this.loopCreate(),
                (i.observer && n.observer) || this.update(),
                i.loop
                  ? this.slideTo(o + this.loopedSlides, 0, !1)
                  : this.slideTo(o, 0, !1);
            },
            removeSlide: function (e) {
              let t;
              let { params: s, $wrapperEl: i, activeIndex: a } = this,
                l = a;
              s.loop &&
                ((l -= this.loopedSlides),
                this.loopDestroy(),
                (this.slides = i.children(`.${s.slideClass}`)));
              let r = l;
              if ("object" == typeof e && "length" in e) {
                for (let s = 0; s < e.length; s += 1)
                  (t = e[s]),
                    this.slides[t] && this.slides.eq(t).remove(),
                    t < r && (r -= 1);
                r = Math.max(r, 0);
              } else
                (t = e),
                  this.slides[t] && this.slides.eq(t).remove(),
                  t < r && (r -= 1),
                  (r = Math.max(r, 0));
              s.loop && this.loopCreate(),
                (s.observer && n.observer) || this.update(),
                s.loop
                  ? this.slideTo(r + this.loopedSlides, 0, !1)
                  : this.slideTo(r, 0, !1);
            },
            removeAllSlides: function () {
              let e = [];
              for (let t = 0; t < this.slides.length; t += 1) e.push(t);
              this.removeSlide(e);
            },
          },
          events: {
            attachEvents: function () {
              let { params: e, touchEvents: t, el: s, wrapperEl: i } = this;
              (this.onTouchStart = h.bind(this)),
                (this.onTouchMove = p.bind(this)),
                (this.onTouchEnd = c.bind(this)),
                e.cssMode && (this.onScroll = g.bind(this)),
                (this.onClick = m.bind(this));
              let l = !!e.nested;
              if (!n.touch && n.pointerEvents)
                s.addEventListener(t.start, this.onTouchStart, !1),
                  a.tj.addEventListener(t.move, this.onTouchMove, l),
                  a.tj.addEventListener(t.end, this.onTouchEnd, !1);
              else {
                if (n.touch) {
                  let i = "touchstart" === t.start &&
                    !!n.passiveListener &&
                    !!e.passiveListeners && { passive: !0, capture: !1 };
                  s.addEventListener(t.start, this.onTouchStart, i),
                    s.addEventListener(
                      t.move,
                      this.onTouchMove,
                      n.passiveListener ? { passive: !1, capture: l } : l
                    ),
                    s.addEventListener(t.end, this.onTouchEnd, i),
                    t.cancel &&
                      s.addEventListener(t.cancel, this.onTouchEnd, i),
                    f || (a.tj.addEventListener("touchstart", v), (f = !0));
                }
                ((e.simulateTouch && !d.ios && !d.android) ||
                  (e.simulateTouch && !n.touch && d.ios)) &&
                  (s.addEventListener("mousedown", this.onTouchStart, !1),
                  a.tj.addEventListener("mousemove", this.onTouchMove, l),
                  a.tj.addEventListener("mouseup", this.onTouchEnd, !1));
              }
              (e.preventClicks || e.preventClicksPropagation) &&
                s.addEventListener("click", this.onClick, !0),
                e.cssMode && i.addEventListener("scroll", this.onScroll),
                e.updateOnWindowResize
                  ? this.on(
                      d.ios || d.android
                        ? "resize orientationchange observerUpdate"
                        : "resize observerUpdate",
                      u,
                      !0
                    )
                  : this.on("observerUpdate", u, !0);
            },
            detachEvents: function () {
              let { params: e, touchEvents: t, el: s, wrapperEl: i } = this,
                l = !!e.nested;
              if (!n.touch && n.pointerEvents)
                s.removeEventListener(t.start, this.onTouchStart, !1),
                  a.tj.removeEventListener(t.move, this.onTouchMove, l),
                  a.tj.removeEventListener(t.end, this.onTouchEnd, !1);
              else {
                if (n.touch) {
                  let i = "onTouchStart" === t.start &&
                    !!n.passiveListener &&
                    !!e.passiveListeners && { passive: !0, capture: !1 };
                  s.removeEventListener(t.start, this.onTouchStart, i),
                    s.removeEventListener(t.move, this.onTouchMove, l),
                    s.removeEventListener(t.end, this.onTouchEnd, i),
                    t.cancel &&
                      s.removeEventListener(t.cancel, this.onTouchEnd, i);
                }
                ((e.simulateTouch && !d.ios && !d.android) ||
                  (e.simulateTouch && !n.touch && d.ios)) &&
                  (s.removeEventListener("mousedown", this.onTouchStart, !1),
                  a.tj.removeEventListener("mousemove", this.onTouchMove, l),
                  a.tj.removeEventListener("mouseup", this.onTouchEnd, !1));
              }
              (e.preventClicks || e.preventClicksPropagation) &&
                s.removeEventListener("click", this.onClick, !0),
                e.cssMode && i.removeEventListener("scroll", this.onScroll),
                this.off(
                  d.ios || d.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  u
                );
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let {
                  activeIndex: e,
                  initialized: t,
                  loopedSlides: s = 0,
                  params: i,
                  $el: a,
                } = this,
                l = i.breakpoints;
              if (!l || (l && 0 === Object.keys(l).length)) return;
              let n = this.getBreakpoint(l);
              if (n && this.currentBreakpoint !== n) {
                let o = n in l ? l[n] : void 0;
                o &&
                  [
                    "slidesPerView",
                    "spaceBetween",
                    "slidesPerGroup",
                    "slidesPerGroupSkip",
                    "slidesPerColumn",
                  ].forEach((e) => {
                    let t = o[e];
                    void 0 !== t &&
                      ("slidesPerView" === e && ("AUTO" === t || "auto" === t)
                        ? (o[e] = "auto")
                        : "slidesPerView" === e
                        ? (o[e] = parseFloat(t))
                        : (o[e] = parseInt(t, 10)));
                  });
                let d = o || this.originalParams,
                  h = i.slidesPerColumn > 1,
                  p = d.slidesPerColumn > 1;
                h && !p
                  ? a.removeClass(
                      `${i.containerModifierClass}multirow ${i.containerModifierClass}multirow-column`
                    )
                  : !h &&
                    p &&
                    (a.addClass(`${i.containerModifierClass}multirow`),
                    "column" === d.slidesPerColumnFill &&
                      a.addClass(`${i.containerModifierClass}multirow-column`));
                let c = d.direction && d.direction !== i.direction,
                  u = i.loop && (d.slidesPerView !== i.slidesPerView || c);
                c && t && this.changeDirection(),
                  r.extend(this.params, d),
                  r.extend(this, {
                    allowTouchMove: this.params.allowTouchMove,
                    allowSlideNext: this.params.allowSlideNext,
                    allowSlidePrev: this.params.allowSlidePrev,
                  }),
                  (this.currentBreakpoint = n),
                  u &&
                    t &&
                    (this.loopDestroy(),
                    this.loopCreate(),
                    this.updateSlides(),
                    this.slideTo(e - s + this.loopedSlides, 0, !1)),
                  this.emit("breakpoint", d);
              }
            },
            getBreakpoint: function (e) {
              if (!e) return;
              let t = !1,
                s = Object.keys(e).map((e) => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    let t = parseFloat(e.substr(1)),
                      s = a.u9.innerHeight * t;
                    return { value: s, point: e };
                  }
                  return { value: e, point: e };
                });
              s.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < s.length; e += 1) {
                let { point: i, value: l } = s[e];
                l <= a.u9.innerWidth && (t = i);
              }
              return t || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let e = this.params,
                t = this.isLocked,
                s =
                  this.slides.length > 0 &&
                  e.slidesOffsetBefore +
                    e.spaceBetween * (this.slides.length - 1) +
                    this.slides[0].offsetWidth * this.slides.length;
              e.slidesOffsetBefore && e.slidesOffsetAfter && s
                ? (this.isLocked = s <= this.size)
                : (this.isLocked = 1 === this.snapGrid.length),
                (this.allowSlideNext = !this.isLocked),
                (this.allowSlidePrev = !this.isLocked),
                t !== this.isLocked &&
                  this.emit(this.isLocked ? "lock" : "unlock"),
                t &&
                  t !== this.isLocked &&
                  ((this.isEnd = !1),
                  this.navigation && this.navigation.update());
            },
          },
          classes: {
            addClasses: function () {
              let { classNames: e, params: t, rtl: s, $el: i } = this,
                a = [];
              a.push("initialized"),
                a.push(t.direction),
                t.freeMode && a.push("free-mode"),
                t.autoHeight && a.push("autoheight"),
                s && a.push("rtl"),
                t.slidesPerColumn > 1 &&
                  (a.push("multirow"),
                  "column" === t.slidesPerColumnFill &&
                    a.push("multirow-column")),
                d.android && a.push("android"),
                d.ios && a.push("ios"),
                t.cssMode && a.push("css-mode"),
                a.forEach((s) => {
                  e.push(t.containerModifierClass + s);
                }),
                i.addClass(e.join(" "));
            },
            removeClasses: function () {
              let { $el: e, classNames: t } = this;
              e.removeClass(t.join(" "));
            },
          },
          images: {
            loadImage: function (e, t, s, l, r, n) {
              let o;
              function d() {
                n && n();
              }
              let h = (0, i.$)(e).parent("picture")[0];
              h || (e.complete && r)
                ? d()
                : t
                ? (((o = new a.u9.Image()).onload = d),
                  (o.onerror = d),
                  l && (o.sizes = l),
                  s && (o.srcset = s),
                  t && (o.src = t))
                : d();
            },
            preloadImages: function () {
              let e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                let i = e.imagesToLoad[s];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        y = {};
      class x extends o {
        constructor(...e) {
          let t, s, a, l;
          1 === e.length && e[0].constructor && e[0].constructor === Object
            ? (s = e[0])
            : ([t, s] = e),
            s || (s = {}),
            (s = r.extend({}, s)),
            t && !s.el && (s.el = t),
            super(s),
            Object.keys(w).forEach((e) => {
              Object.keys(w[e]).forEach((t) => {
                x.prototype[t] || (x.prototype[t] = w[e][t]);
              });
            });
          let o = this;
          void 0 === o.modules && (o.modules = {}),
            Object.keys(o.modules).forEach((e) => {
              let t = o.modules[e];
              if (t.params) {
                let e = Object.keys(t.params)[0],
                  i = t.params[e];
                if (
                  "object" != typeof i ||
                  null === i ||
                  !(e in s && "enabled" in i)
                )
                  return;
                !0 === s[e] && (s[e] = { enabled: !0 }),
                  "object" != typeof s[e] ||
                    "enabled" in s[e] ||
                    (s[e].enabled = !0),
                  s[e] || (s[e] = { enabled: !1 });
              }
            });
          let d = r.extend({}, b);
          o.useModulesParams(d),
            (o.params = r.extend({}, d, y, s)),
            (o.originalParams = r.extend({}, o.params)),
            (o.passedParams = r.extend({}, s)),
            (o.$ = i.$);
          let h = (0, i.$)(o.params.el);
          if (!(t = h[0])) return;
          if (h.length > 1) {
            let e = [];
            return (
              h.each((t, i) => {
                let a = r.extend({}, s, { el: i });
                e.push(new x(a));
              }),
              e
            );
          }
          return (
            (t.swiper = o),
            h.data("swiper", o),
            t && t.shadowRoot && t.shadowRoot.querySelector
              ? ((a = (0, i.$)(
                  t.shadowRoot.querySelector(`.${o.params.wrapperClass}`)
                )).children = (e) => h.children(e))
              : (a = h.children(`.${o.params.wrapperClass}`)),
            r.extend(o, {
              $el: h,
              el: t,
              $wrapperEl: a,
              wrapperEl: a[0],
              classNames: [],
              slides: (0, i.$)(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === o.params.direction,
              isVertical: () => "vertical" === o.params.direction,
              rtl:
                "rtl" === t.dir.toLowerCase() || "rtl" === h.css("direction"),
              rtlTranslate:
                "horizontal" === o.params.direction &&
                ("rtl" === t.dir.toLowerCase() || "rtl" === h.css("direction")),
              wrongRTL: "-webkit-box" === a.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: o.params.allowSlideNext,
              allowSlidePrev: o.params.allowSlidePrev,
              touchEvents:
                ((l = ["mousedown", "mousemove", "mouseup"]),
                n.pointerEvents &&
                  (l = ["pointerdown", "pointermove", "pointerup"]),
                (o.touchEventsTouch = {
                  start: "touchstart",
                  move: "touchmove",
                  end: "touchend",
                  cancel: "touchcancel",
                }),
                (o.touchEventsDesktop = { start: l[0], move: l[1], end: l[2] }),
                n.touch || !o.params.simulateTouch
                  ? o.touchEventsTouch
                  : o.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements:
                  "input, select, option, textarea, button, video, label",
                lastClickTime: r.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: o.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            o.useModules(),
            o.params.init && o.init(),
            o
          );
        }
        slidesPerViewDynamic() {
          let {
              params: e,
              slides: t,
              slidesGrid: s,
              size: i,
              activeIndex: a,
            } = this,
            l = 1;
          if (e.centeredSlides) {
            let e,
              s = t[a].swiperSlideSize;
            for (let r = a + 1; r < t.length; r += 1)
              t[r] &&
                !e &&
                ((s += t[r].swiperSlideSize), (l += 1), s > i && (e = !0));
            for (let r = a - 1; r >= 0; r -= 1)
              t[r] &&
                !e &&
                ((s += t[r].swiperSlideSize), (l += 1), s > i && (e = !0));
          } else
            for (let e = a + 1; e < t.length; e += 1)
              s[e] - s[a] < i && (l += 1);
          return l;
        }
        update() {
          let e = this;
          if (!e || e.destroyed) return;
          let { snapGrid: t, params: s } = e;
          function i() {
            let t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          s.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode
              ? (i(), e.params.autoHeight && e.updateAutoHeight())
              : (("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t = !0) {
          let s = this.params.direction;
          return (
            e || (e = "horizontal" === s ? "vertical" : "horizontal"),
            e === s ||
              ("horizontal" !== e && "vertical" !== e) ||
              (this.$el
                .removeClass(`${this.params.containerModifierClass}${s}`)
                .addClass(`${this.params.containerModifierClass}${e}`),
              (this.params.direction = e),
              this.slides.each((t, s) => {
                "vertical" === e ? (s.style.width = "") : (s.style.height = "");
              }),
              this.emit("changeDirection"),
              t && this.update()),
            this
          );
        }
        init() {
          this.initialized ||
            (this.emit("beforeInit"),
            this.params.breakpoints && this.setBreakpoint(),
            this.addClasses(),
            this.params.loop && this.loopCreate(),
            this.updateSize(),
            this.updateSlides(),
            this.params.watchOverflow && this.checkOverflow(),
            this.params.grabCursor && this.setGrabCursor(),
            this.params.preloadImages && this.preloadImages(),
            this.params.loop
              ? this.slideTo(
                  this.params.initialSlide + this.loopedSlides,
                  0,
                  this.params.runCallbacksOnInit
                )
              : this.slideTo(
                  this.params.initialSlide,
                  0,
                  this.params.runCallbacksOnInit
                ),
            this.attachEvents(),
            (this.initialized = !0),
            this.emit("init"));
        }
        destroy(e = !0, t = !0) {
          let s = this,
            { params: i, $el: a, $wrapperEl: l, slides: n } = s;
          return (
            void 0 === s.params ||
              s.destroyed ||
              (s.emit("beforeDestroy"),
              (s.initialized = !1),
              s.detachEvents(),
              i.loop && s.loopDestroy(),
              t &&
                (s.removeClasses(),
                a.removeAttr("style"),
                l.removeAttr("style"),
                n &&
                  n.length &&
                  n
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              s.emit("destroy"),
              Object.keys(s.eventsListeners).forEach((e) => {
                s.off(e);
              }),
              !1 !== e &&
                ((s.$el[0].swiper = null),
                s.$el.data("swiper", null),
                r.deleteProps(s)),
              (s.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          r.extend(y, e);
        }
        static get extendedDefaults() {
          return y;
        }
        static get defaults() {
          return b;
        }
        static get Class() {
          return o;
        }
        static get $() {
          return i.$;
        }
      }
      let T = {
          isEdge: !!a.u9.navigator.userAgent.match(/Edge/g),
          isSafari: (function () {
            let e = a.u9.navigator.userAgent.toLowerCase();
            return (
              e.indexOf("safari") >= 0 &&
              0 > e.indexOf("chrome") &&
              0 > e.indexOf("android")
            );
          })(),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            a.u9.navigator.userAgent
          ),
        },
        C = {
          func: a.u9.MutationObserver || a.u9.WebkitMutationObserver,
          attach(e, t = {}) {
            let s = this,
              i = C.func,
              l = new i((e) => {
                if (1 === e.length) {
                  s.emit("observerUpdate", e[0]);
                  return;
                }
                let t = function () {
                  s.emit("observerUpdate", e[0]);
                };
                a.u9.requestAnimationFrame
                  ? a.u9.requestAnimationFrame(t)
                  : a.u9.setTimeout(t, 0);
              });
            l.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              s.observer.observers.push(l);
          },
          init() {
            if (n.observer && this.params.observer) {
              if (this.params.observeParents) {
                let e = this.$el.parents();
                for (let t = 0; t < e.length; t += 1)
                  this.observer.attach(e[t]);
              }
              this.observer.attach(this.$el[0], {
                childList: this.params.observeSlideChildren,
              }),
                this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
            }
          },
          destroy() {
            this.observer.observers.forEach((e) => {
              e.disconnect();
            }),
              (this.observer.observers = []);
          },
        },
        E = {
          update(e) {
            let t, s, i;
            let a = this,
              {
                slidesPerView: l,
                slidesPerGroup: n,
                centeredSlides: o,
              } = a.params,
              { addSlidesBefore: d, addSlidesAfter: h } = a.params.virtual,
              {
                from: p,
                to: c,
                slides: u,
                slidesGrid: m,
                renderSlide: g,
                offset: f,
              } = a.virtual;
            a.updateActiveIndex();
            let v = a.activeIndex || 0;
            (t = a.rtlTranslate ? "right" : a.isHorizontal() ? "left" : "top"),
              o
                ? ((s = Math.floor(l / 2) + n + d),
                  (i = Math.floor(l / 2) + n + h))
                : ((s = l + (n - 1) + d), (i = n + h));
            let b = Math.max((v || 0) - i, 0),
              w = Math.min((v || 0) + s, u.length - 1),
              y = (a.slidesGrid[b] || 0) - (a.slidesGrid[0] || 0);
            function x() {
              a.updateSlides(),
                a.updateProgress(),
                a.updateSlidesClasses(),
                a.lazy && a.params.lazy.enabled && a.lazy.load();
            }
            if (
              (r.extend(a.virtual, {
                from: b,
                to: w,
                offset: y,
                slidesGrid: a.slidesGrid,
              }),
              p === b && c === w && !e)
            ) {
              a.slidesGrid !== m && y !== f && a.slides.css(t, `${y}px`),
                a.updateProgress();
              return;
            }
            if (a.params.virtual.renderExternal) {
              a.params.virtual.renderExternal.call(a, {
                offset: y,
                from: b,
                to: w,
                slides: (function () {
                  let e = [];
                  for (let t = b; t <= w; t += 1) e.push(u[t]);
                  return e;
                })(),
              }),
                x();
              return;
            }
            let T = [],
              C = [];
            if (e) a.$wrapperEl.find(`.${a.params.slideClass}`).remove();
            else
              for (let e = p; e <= c; e += 1)
                (e < b || e > w) &&
                  a.$wrapperEl
                    .find(
                      `.${a.params.slideClass}[data-swiper-slide-index="${e}"]`
                    )
                    .remove();
            for (let t = 0; t < u.length; t += 1)
              t >= b &&
                t <= w &&
                (void 0 === c || e
                  ? C.push(t)
                  : (t > c && C.push(t), t < p && T.push(t)));
            C.forEach((e) => {
              a.$wrapperEl.append(g(u[e], e));
            }),
              T.sort((e, t) => t - e).forEach((e) => {
                a.$wrapperEl.prepend(g(u[e], e));
              }),
              a.$wrapperEl.children(".swiper-slide").css(t, `${y}px`),
              x();
          },
          renderSlide(e, t) {
            let s = this.params.virtual;
            if (s.cache && this.virtual.cache[t]) return this.virtual.cache[t];
            let a = s.renderSlide
              ? (0, i.$)(s.renderSlide.call(this, e, t))
              : (0, i.$)(
                  `<div class="${this.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
                );
            return (
              a.attr("data-swiper-slide-index") ||
                a.attr("data-swiper-slide-index", t),
              s.cache && (this.virtual.cache[t] = a),
              a
            );
          },
          appendSlide(e) {
            if ("object" == typeof e && "length" in e)
              for (let t = 0; t < e.length; t += 1)
                e[t] && this.virtual.slides.push(e[t]);
            else this.virtual.slides.push(e);
            this.virtual.update(!0);
          },
          prependSlide(e) {
            let t = this.activeIndex,
              s = t + 1,
              i = 1;
            if (Array.isArray(e)) {
              for (let t = 0; t < e.length; t += 1)
                e[t] && this.virtual.slides.unshift(e[t]);
              (s = t + e.length), (i = e.length);
            } else this.virtual.slides.unshift(e);
            if (this.params.virtual.cache) {
              let e = this.virtual.cache,
                t = {};
              Object.keys(e).forEach((s) => {
                let a = e[s],
                  l = a.attr("data-swiper-slide-index");
                l && a.attr("data-swiper-slide-index", parseInt(l, 10) + 1),
                  (t[parseInt(s, 10) + i] = a);
              }),
                (this.virtual.cache = t);
            }
            this.virtual.update(!0), this.slideTo(s, 0);
          },
          removeSlide(e) {
            if (null == e) return;
            let t = this.activeIndex;
            if (Array.isArray(e))
              for (let s = e.length - 1; s >= 0; s -= 1)
                this.virtual.slides.splice(e[s], 1),
                  this.params.virtual.cache && delete this.virtual.cache[e[s]],
                  e[s] < t && (t -= 1),
                  (t = Math.max(t, 0));
            else
              this.virtual.slides.splice(e, 1),
                this.params.virtual.cache && delete this.virtual.cache[e],
                e < t && (t -= 1),
                (t = Math.max(t, 0));
            this.virtual.update(!0), this.slideTo(t, 0);
          },
          removeAllSlides() {
            (this.virtual.slides = []),
              this.params.virtual.cache && (this.virtual.cache = {}),
              this.virtual.update(!0),
              this.slideTo(0, 0);
          },
        },
        S = {
          handle(e) {
            let { rtlTranslate: t } = this,
              s = e;
            s.originalEvent && (s = s.originalEvent);
            let i = s.keyCode || s.charCode,
              l = this.params.keyboard.pageUpDown,
              r = l && 33 === i,
              n = l && 34 === i,
              o = 37 === i,
              d = 39 === i,
              h = 38 === i,
              p = 40 === i;
            if (
              (!this.allowSlideNext &&
                ((this.isHorizontal() && d) ||
                  (this.isVertical() && p) ||
                  n)) ||
              (!this.allowSlidePrev &&
                ((this.isHorizontal() && o) || (this.isVertical() && h) || r))
            )
              return !1;
            if (
              !s.shiftKey &&
              !s.altKey &&
              !s.ctrlKey &&
              !s.metaKey &&
              (!a.tj.activeElement ||
                !a.tj.activeElement.nodeName ||
                ("input" !== a.tj.activeElement.nodeName.toLowerCase() &&
                  "textarea" !== a.tj.activeElement.nodeName.toLowerCase()))
            ) {
              if (
                this.params.keyboard.onlyInViewport &&
                (r || n || o || d || h || p)
              ) {
                let e = !1;
                if (
                  this.$el.parents(`.${this.params.slideClass}`).length > 0 &&
                  0 ===
                    this.$el.parents(`.${this.params.slideActiveClass}`).length
                )
                  return;
                let s = a.u9.innerWidth,
                  i = a.u9.innerHeight,
                  l = this.$el.offset();
                t && (l.left -= this.$el[0].scrollLeft);
                let r = [
                  [l.left, l.top],
                  [l.left + this.width, l.top],
                  [l.left, l.top + this.height],
                  [l.left + this.width, l.top + this.height],
                ];
                for (let t = 0; t < r.length; t += 1) {
                  let a = r[t];
                  a[0] >= 0 && a[0] <= s && a[1] >= 0 && a[1] <= i && (e = !0);
                }
                if (!e) return;
              }
              this.isHorizontal()
                ? ((r || n || o || d) &&
                    (s.preventDefault
                      ? s.preventDefault()
                      : (s.returnValue = !1)),
                  (((n || d) && !t) || ((r || o) && t)) && this.slideNext(),
                  (((r || o) && !t) || ((n || d) && t)) && this.slidePrev())
                : ((r || n || h || p) &&
                    (s.preventDefault
                      ? s.preventDefault()
                      : (s.returnValue = !1)),
                  (n || p) && this.slideNext(),
                  (r || h) && this.slidePrev()),
                this.emit("keyPress", i);
            }
          },
          enable() {
            this.keyboard.enabled ||
              ((0, i.$)(a.tj).on("keydown", this.keyboard.handle),
              (this.keyboard.enabled = !0));
          },
          disable() {
            this.keyboard.enabled &&
              ((0, i.$)(a.tj).off("keydown", this.keyboard.handle),
              (this.keyboard.enabled = !1));
          },
        },
        $ = {
          lastScrollTime: r.now(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          event: () =>
            a.u9.navigator.userAgent.indexOf("firefox") > -1
              ? "DOMMouseScroll"
              : !(function () {
                  let e = "onwheel",
                    t = e in a.tj;
                  if (!t) {
                    let s = a.tj.createElement("div");
                    s.setAttribute(e, "return;"),
                      (t = "function" == typeof s[e]);
                  }
                  return (
                    !t &&
                      a.tj.implementation &&
                      a.tj.implementation.hasFeature &&
                      !0 !== a.tj.implementation.hasFeature("", "") &&
                      (t = a.tj.implementation.hasFeature(
                        "Events.wheel",
                        "3.0"
                      )),
                    t
                  );
                })()
              ? "mousewheel"
              : "wheel",
          normalize(e) {
            let t = 0,
              s = 0,
              i = 0,
              a = 0;
            return (
              "detail" in e && (s = e.detail),
              "wheelDelta" in e && (s = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
              (i = 10 * t),
              (a = 10 * s),
              "deltaY" in e && (a = e.deltaY),
              "deltaX" in e && (i = e.deltaX),
              e.shiftKey && !i && ((i = a), (a = 0)),
              (i || a) &&
                e.deltaMode &&
                (1 === e.deltaMode
                  ? ((i *= 40), (a *= 40))
                  : ((i *= 800), (a *= 800))),
              i && !t && (t = i < 1 ? -1 : 1),
              a && !s && (s = a < 1 ? -1 : 1),
              { spinX: t, spinY: s, pixelX: i, pixelY: a }
            );
          },
          handleMouseEnter() {
            this.mouseEntered = !0;
          },
          handleMouseLeave() {
            this.mouseEntered = !1;
          },
          handle(e) {
            let t = e,
              s = this,
              a = s.params.mousewheel;
            s.params.cssMode && t.preventDefault();
            let l = s.$el;
            if (
              ("container" !== s.params.mousewheel.eventsTarged &&
                (l = (0, i.$)(s.params.mousewheel.eventsTarged)),
              !s.mouseEntered && !l[0].contains(t.target) && !a.releaseOnEdges)
            )
              return !0;
            t.originalEvent && (t = t.originalEvent);
            let n = 0,
              o = s.rtlTranslate ? -1 : 1,
              d = $.normalize(t);
            if (a.forceToAxis) {
              if (s.isHorizontal()) {
                if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return !0;
                n = -d.pixelX * o;
              } else {
                if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return !0;
                n = -d.pixelY;
              }
            } else
              n =
                Math.abs(d.pixelX) > Math.abs(d.pixelY)
                  ? -d.pixelX * o
                  : -d.pixelY;
            if (0 === n) return !0;
            if ((a.invert && (n = -n), s.params.freeMode)) {
              let e = {
                  time: r.now(),
                  delta: Math.abs(n),
                  direction: Math.sign(n),
                },
                { lastEventBeforeSnap: i } = s.mousewheel,
                l =
                  i &&
                  e.time < i.time + 500 &&
                  e.delta <= i.delta &&
                  e.direction === i.direction;
              if (!l) {
                (s.mousewheel.lastEventBeforeSnap = void 0),
                  s.params.loop && s.loopFix();
                let i = s.getTranslate() + n * a.sensitivity,
                  o = s.isBeginning,
                  d = s.isEnd;
                if (
                  (i >= s.minTranslate() && (i = s.minTranslate()),
                  i <= s.maxTranslate() && (i = s.maxTranslate()),
                  s.setTransition(0),
                  s.setTranslate(i),
                  s.updateProgress(),
                  s.updateActiveIndex(),
                  s.updateSlidesClasses(),
                  ((!o && s.isBeginning) || (!d && s.isEnd)) &&
                    s.updateSlidesClasses(),
                  s.params.freeModeSticky)
                ) {
                  clearTimeout(s.mousewheel.timeout),
                    (s.mousewheel.timeout = void 0);
                  let t = s.mousewheel.recentWheelEvents;
                  t.length >= 15 && t.shift();
                  let i = t.length ? t[t.length - 1] : void 0,
                    a = t[0];
                  if (
                    (t.push(e),
                    i && (e.delta > i.delta || e.direction !== i.direction))
                  )
                    t.splice(0);
                  else if (
                    t.length >= 15 &&
                    e.time - a.time < 500 &&
                    a.delta - e.delta >= 1 &&
                    e.delta <= 6
                  ) {
                    let i = n > 0 ? 0.8 : 0.2;
                    (s.mousewheel.lastEventBeforeSnap = e),
                      t.splice(0),
                      (s.mousewheel.timeout = r.nextTick(() => {
                        s.slideToClosest(s.params.speed, !0, void 0, i);
                      }, 0));
                  }
                  s.mousewheel.timeout ||
                    (s.mousewheel.timeout = r.nextTick(() => {
                      (s.mousewheel.lastEventBeforeSnap = e),
                        t.splice(0),
                        s.slideToClosest(s.params.speed, !0, void 0, 0.5);
                    }, 500));
                }
                if (
                  (l || s.emit("scroll", t),
                  s.params.autoplay &&
                    s.params.autoplayDisableOnInteraction &&
                    s.autoplay.stop(),
                  i === s.minTranslate() || i === s.maxTranslate())
                )
                  return !0;
              }
            } else {
              let t = {
                  time: r.now(),
                  delta: Math.abs(n),
                  direction: Math.sign(n),
                  raw: e,
                },
                i = s.mousewheel.recentWheelEvents;
              i.length >= 2 && i.shift();
              let a = i.length ? i[i.length - 1] : void 0;
              if (
                (i.push(t),
                a
                  ? (t.direction !== a.direction ||
                      t.delta > a.delta ||
                      t.time > a.time + 150) &&
                    s.mousewheel.animateSlider(t)
                  : s.mousewheel.animateSlider(t),
                s.mousewheel.releaseScroll(t))
              )
                return !0;
            }
            return (
              t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
            );
          },
          animateSlider(e) {
            return (
              !!(
                e.delta >= 6 && r.now() - this.mousewheel.lastScrollTime < 60
              ) ||
              (e.direction < 0
                ? (this.isEnd && !this.params.loop) ||
                  this.animating ||
                  (this.slideNext(), this.emit("scroll", e.raw))
                : (this.isBeginning && !this.params.loop) ||
                  this.animating ||
                  (this.slidePrev(), this.emit("scroll", e.raw)),
              (this.mousewheel.lastScrollTime = new a.u9.Date().getTime()),
              !1)
            );
          },
          releaseScroll(e) {
            let t = this.params.mousewheel;
            if (e.direction < 0) {
              if (this.isEnd && !this.params.loop && t.releaseOnEdges)
                return !0;
            } else if (
              this.isBeginning &&
              !this.params.loop &&
              t.releaseOnEdges
            )
              return !0;
            return !1;
          },
          enable() {
            let e = $.event();
            if (this.params.cssMode)
              return (
                this.wrapperEl.removeEventListener(e, this.mousewheel.handle),
                !0
              );
            if (!e || this.mousewheel.enabled) return !1;
            let t = this.$el;
            return (
              "container" !== this.params.mousewheel.eventsTarged &&
                (t = (0, i.$)(this.params.mousewheel.eventsTarged)),
              t.on("mouseenter", this.mousewheel.handleMouseEnter),
              t.on("mouseleave", this.mousewheel.handleMouseLeave),
              t.on(e, this.mousewheel.handle),
              (this.mousewheel.enabled = !0),
              !0
            );
          },
          disable() {
            let e = $.event();
            if (this.params.cssMode)
              return (
                this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0
              );
            if (!e || !this.mousewheel.enabled) return !1;
            let t = this.$el;
            return (
              "container" !== this.params.mousewheel.eventsTarged &&
                (t = (0, i.$)(this.params.mousewheel.eventsTarged)),
              t.off(e, this.mousewheel.handle),
              (this.mousewheel.enabled = !1),
              !0
            );
          },
        },
        M = {
          update() {
            let e = this.params.navigation;
            if (this.params.loop) return;
            let { $nextEl: t, $prevEl: s } = this.navigation;
            s &&
              s.length > 0 &&
              (this.isBeginning
                ? s.addClass(e.disabledClass)
                : s.removeClass(e.disabledClass),
              s[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](e.lockClass)),
              t &&
                t.length > 0 &&
                (this.isEnd
                  ? t.addClass(e.disabledClass)
                  : t.removeClass(e.disabledClass),
                t[
                  this.params.watchOverflow && this.isLocked
                    ? "addClass"
                    : "removeClass"
                ](e.lockClass));
          },
          onPrevClick(e) {
            e.preventDefault(),
              (!this.isBeginning || this.params.loop) && this.slidePrev();
          },
          onNextClick(e) {
            e.preventDefault(),
              (!this.isEnd || this.params.loop) && this.slideNext();
          },
          init() {
            let e, t;
            let s = this.params.navigation;
            (s.nextEl || s.prevEl) &&
              (s.nextEl &&
                ((e = (0, i.$)(s.nextEl)),
                this.params.uniqueNavElements &&
                  "string" == typeof s.nextEl &&
                  e.length > 1 &&
                  1 === this.$el.find(s.nextEl).length &&
                  (e = this.$el.find(s.nextEl))),
              s.prevEl &&
                ((t = (0, i.$)(s.prevEl)),
                this.params.uniqueNavElements &&
                  "string" == typeof s.prevEl &&
                  t.length > 1 &&
                  1 === this.$el.find(s.prevEl).length &&
                  (t = this.$el.find(s.prevEl))),
              e && e.length > 0 && e.on("click", this.navigation.onNextClick),
              t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
              r.extend(this.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0],
              }));
          },
          destroy() {
            let { $nextEl: e, $prevEl: t } = this.navigation;
            e &&
              e.length &&
              (e.off("click", this.navigation.onNextClick),
              e.removeClass(this.params.navigation.disabledClass)),
              t &&
                t.length &&
                (t.off("click", this.navigation.onPrevClick),
                t.removeClass(this.params.navigation.disabledClass));
          },
        },
        P = {
          update() {
            let e;
            let t = this.rtl,
              s = this.params.pagination;
            if (
              !s.el ||
              !this.pagination.el ||
              !this.pagination.$el ||
              0 === this.pagination.$el.length
            )
              return;
            let a =
                this.virtual && this.params.virtual.enabled
                  ? this.virtual.slides.length
                  : this.slides.length,
              l = this.pagination.$el,
              r = this.params.loop
                ? Math.ceil(
                    (a - 2 * this.loopedSlides) / this.params.slidesPerGroup
                  )
                : this.snapGrid.length;
            if (
              (this.params.loop
                ? ((e = Math.ceil(
                    (this.activeIndex - this.loopedSlides) /
                      this.params.slidesPerGroup
                  )) >
                    a - 1 - 2 * this.loopedSlides &&
                    (e -= a - 2 * this.loopedSlides),
                  e > r - 1 && (e -= r),
                  e < 0 &&
                    "bullets" !== this.params.paginationType &&
                    (e = r + e))
                : (e =
                    void 0 !== this.snapIndex
                      ? this.snapIndex
                      : this.activeIndex || 0),
              "bullets" === s.type &&
                this.pagination.bullets &&
                this.pagination.bullets.length > 0)
            ) {
              let a, r, n;
              let o = this.pagination.bullets;
              if (
                (s.dynamicBullets &&
                  ((this.pagination.bulletSize = o
                    .eq(0)
                    [this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  l.css(
                    this.isHorizontal() ? "width" : "height",
                    `${
                      this.pagination.bulletSize * (s.dynamicMainBullets + 4)
                    }px`
                  ),
                  s.dynamicMainBullets > 1 &&
                    void 0 !== this.previousIndex &&
                    ((this.pagination.dynamicBulletIndex +=
                      e - this.previousIndex),
                    this.pagination.dynamicBulletIndex >
                    s.dynamicMainBullets - 1
                      ? (this.pagination.dynamicBulletIndex =
                          s.dynamicMainBullets - 1)
                      : this.pagination.dynamicBulletIndex < 0 &&
                        (this.pagination.dynamicBulletIndex = 0)),
                  (n =
                    ((r =
                      (a = e - this.pagination.dynamicBulletIndex) +
                      (Math.min(o.length, s.dynamicMainBullets) - 1)) +
                      a) /
                    2)),
                o.removeClass(
                  `${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${s.bulletActiveClass}-main`
                ),
                l.length > 1)
              )
                o.each((t, l) => {
                  let n = (0, i.$)(l),
                    o = n.index();
                  o === e && n.addClass(s.bulletActiveClass),
                    s.dynamicBullets &&
                      (o >= a &&
                        o <= r &&
                        n.addClass(`${s.bulletActiveClass}-main`),
                      o === a &&
                        n
                          .prev()
                          .addClass(`${s.bulletActiveClass}-prev`)
                          .prev()
                          .addClass(`${s.bulletActiveClass}-prev-prev`),
                      o === r &&
                        n
                          .next()
                          .addClass(`${s.bulletActiveClass}-next`)
                          .next()
                          .addClass(`${s.bulletActiveClass}-next-next`));
                });
              else {
                let t = o.eq(e),
                  i = t.index();
                if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                  let e = o.eq(a),
                    t = o.eq(r);
                  for (let e = a; e <= r; e += 1)
                    o.eq(e).addClass(`${s.bulletActiveClass}-main`);
                  if (this.params.loop) {
                    if (i >= o.length - s.dynamicMainBullets) {
                      for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                        o.eq(o.length - e).addClass(
                          `${s.bulletActiveClass}-main`
                        );
                      o.eq(o.length - s.dynamicMainBullets - 1).addClass(
                        `${s.bulletActiveClass}-prev`
                      );
                    } else
                      e
                        .prev()
                        .addClass(`${s.bulletActiveClass}-prev`)
                        .prev()
                        .addClass(`${s.bulletActiveClass}-prev-prev`),
                        t
                          .next()
                          .addClass(`${s.bulletActiveClass}-next`)
                          .next()
                          .addClass(`${s.bulletActiveClass}-next-next`);
                  } else
                    e
                      .prev()
                      .addClass(`${s.bulletActiveClass}-prev`)
                      .prev()
                      .addClass(`${s.bulletActiveClass}-prev-prev`),
                      t
                        .next()
                        .addClass(`${s.bulletActiveClass}-next`)
                        .next()
                        .addClass(`${s.bulletActiveClass}-next-next`);
                }
              }
              if (s.dynamicBullets) {
                let e = Math.min(o.length, s.dynamicMainBullets + 4),
                  i =
                    (this.pagination.bulletSize * e -
                      this.pagination.bulletSize) /
                      2 -
                    n * this.pagination.bulletSize;
                o.css(
                  this.isHorizontal() ? (t ? "right" : "left") : "top",
                  `${i}px`
                );
              }
            }
            if (
              ("fraction" === s.type &&
                (l
                  .find(`.${s.currentClass}`)
                  .text(s.formatFractionCurrent(e + 1)),
                l.find(`.${s.totalClass}`).text(s.formatFractionTotal(r))),
              "progressbar" === s.type)
            ) {
              let t;
              t = s.progressbarOpposite
                ? this.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : this.isHorizontal()
                ? "horizontal"
                : "vertical";
              let i = (e + 1) / r,
                a = 1,
                n = 1;
              "horizontal" === t ? (a = i) : (n = i),
                l
                  .find(`.${s.progressbarFillClass}`)
                  .transform(`translate3d(0,0,0) scaleX(${a}) scaleY(${n})`)
                  .transition(this.params.speed);
            }
            "custom" === s.type && s.renderCustom
              ? (l.html(s.renderCustom(this, e + 1, r)),
                this.emit("paginationRender", this, l[0]))
              : this.emit("paginationUpdate", this, l[0]),
              l[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](s.lockClass);
          },
          render() {
            let e = this.params.pagination;
            if (
              !e.el ||
              !this.pagination.el ||
              !this.pagination.$el ||
              0 === this.pagination.$el.length
            )
              return;
            let t =
                this.virtual && this.params.virtual.enabled
                  ? this.virtual.slides.length
                  : this.slides.length,
              s = this.pagination.$el,
              i = "";
            if ("bullets" === e.type) {
              let a = this.params.loop
                ? Math.ceil(
                    (t - 2 * this.loopedSlides) / this.params.slidesPerGroup
                  )
                : this.snapGrid.length;
              for (let t = 0; t < a; t += 1)
                e.renderBullet
                  ? (i += e.renderBullet.call(this, t, e.bulletClass))
                  : (i += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
              s.html(i),
                (this.pagination.bullets = s.find(`.${e.bulletClass}`));
            }
            "fraction" === e.type &&
              ((i = e.renderFraction
                ? e.renderFraction.call(this, e.currentClass, e.totalClass)
                : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
              s.html(i)),
              "progressbar" === e.type &&
                ((i = e.renderProgressbar
                  ? e.renderProgressbar.call(this, e.progressbarFillClass)
                  : `<span class="${e.progressbarFillClass}"></span>`),
                s.html(i)),
              "custom" !== e.type &&
                this.emit("paginationRender", this.pagination.$el[0]);
          },
          init() {
            let e = this,
              t = e.params.pagination;
            if (!t.el) return;
            let s = (0, i.$)(t.el);
            0 !== s.length &&
              (e.params.uniqueNavElements &&
                "string" == typeof t.el &&
                s.length > 1 &&
                (s = e.$el.find(t.el)),
              "bullets" === t.type &&
                t.clickable &&
                s.addClass(t.clickableClass),
              s.addClass(t.modifierClass + t.type),
              "bullets" === t.type &&
                t.dynamicBullets &&
                (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
                (e.pagination.dynamicBulletIndex = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              "progressbar" === t.type &&
                t.progressbarOpposite &&
                s.addClass(t.progressbarOppositeClass),
              t.clickable &&
                s.on("click", `.${t.bulletClass}`, function (t) {
                  t.preventDefault();
                  let s = (0, i.$)(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (s += e.loopedSlides), e.slideTo(s);
                }),
              r.extend(e.pagination, { $el: s, el: s[0] }));
          },
          destroy() {
            let e = this.params.pagination;
            if (
              !e.el ||
              !this.pagination.el ||
              !this.pagination.$el ||
              0 === this.pagination.$el.length
            )
              return;
            let t = this.pagination.$el;
            t.removeClass(e.hiddenClass),
              t.removeClass(e.modifierClass + e.type),
              this.pagination.bullets &&
                this.pagination.bullets.removeClass(e.bulletActiveClass),
              e.clickable && t.off("click", `.${e.bulletClass}`);
          },
        },
        z = {
          setTranslate() {
            if (!this.params.scrollbar.el || !this.scrollbar.el) return;
            let { scrollbar: e, rtlTranslate: t, progress: s } = this,
              { dragSize: i, trackSize: a, $dragEl: l, $el: r } = e,
              n = this.params.scrollbar,
              o = i,
              d = (a - i) * s;
            t
              ? (d = -d) > 0
                ? ((o = i - d), (d = 0))
                : -d + i > a && (o = a + d)
              : d < 0
              ? ((o = i + d), (d = 0))
              : d + i > a && (o = a - d),
              this.isHorizontal()
                ? (l.transform(`translate3d(${d}px, 0, 0)`),
                  (l[0].style.width = `${o}px`))
                : (l.transform(`translate3d(0px, ${d}px, 0)`),
                  (l[0].style.height = `${o}px`)),
              n.hide &&
                (clearTimeout(this.scrollbar.timeout),
                (r[0].style.opacity = 1),
                (this.scrollbar.timeout = setTimeout(() => {
                  (r[0].style.opacity = 0), r.transition(400);
                }, 1e3)));
          },
          setTransition(e) {
            this.params.scrollbar.el &&
              this.scrollbar.el &&
              this.scrollbar.$dragEl.transition(e);
          },
          updateSize() {
            let e;
            if (!this.params.scrollbar.el || !this.scrollbar.el) return;
            let { scrollbar: t } = this,
              { $dragEl: s, $el: i } = t;
            (s[0].style.width = ""), (s[0].style.height = "");
            let a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
              l = this.size / this.virtualSize,
              n = l * (a / this.size);
            (e =
              "auto" === this.params.scrollbar.dragSize
                ? a * l
                : parseInt(this.params.scrollbar.dragSize, 10)),
              this.isHorizontal()
                ? (s[0].style.width = `${e}px`)
                : (s[0].style.height = `${e}px`),
              l >= 1
                ? (i[0].style.display = "none")
                : (i[0].style.display = ""),
              this.params.scrollbar.hide && (i[0].style.opacity = 0),
              r.extend(t, {
                trackSize: a,
                divider: l,
                moveDivider: n,
                dragSize: e,
              }),
              t.$el[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](this.params.scrollbar.lockClass);
          },
          getPointerPosition(e) {
            return this.isHorizontal()
              ? "touchstart" === e.type || "touchmove" === e.type
                ? e.targetTouches[0].clientX
                : e.clientX
              : "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].clientY
              : e.clientY;
          },
          setDragPosition(e) {
            let t;
            let { scrollbar: s, rtlTranslate: i } = this,
              { $el: a, dragSize: l, trackSize: r, dragStartPos: n } = s;
            (t = Math.max(
              Math.min(
                (t =
                  (s.getPointerPosition(e) -
                    a.offset()[this.isHorizontal() ? "left" : "top"] -
                    (null !== n ? n : l / 2)) /
                  (r - l)),
                1
              ),
              0
            )),
              i && (t = 1 - t);
            let o =
              this.minTranslate() +
              (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(o),
              this.setTranslate(o),
              this.updateActiveIndex(),
              this.updateSlidesClasses();
          },
          onDragStart(e) {
            let t = this.params.scrollbar,
              { scrollbar: s, $wrapperEl: i } = this,
              { $el: a, $dragEl: l } = s;
            (this.scrollbar.isTouched = !0),
              (this.scrollbar.dragStartPos =
                e.target === l[0] || e.target === l
                  ? s.getPointerPosition(e) -
                    e.target.getBoundingClientRect()[
                      this.isHorizontal() ? "left" : "top"
                    ]
                  : null),
              e.preventDefault(),
              e.stopPropagation(),
              i.transition(100),
              l.transition(100),
              s.setDragPosition(e),
              clearTimeout(this.scrollbar.dragTimeout),
              a.transition(0),
              t.hide && a.css("opacity", 1),
              this.params.cssMode &&
                this.$wrapperEl.css("scroll-snap-type", "none"),
              this.emit("scrollbarDragStart", e);
          },
          onDragMove(e) {
            let { scrollbar: t, $wrapperEl: s } = this,
              { $el: i, $dragEl: a } = t;
            this.scrollbar.isTouched &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              t.setDragPosition(e),
              s.transition(0),
              i.transition(0),
              a.transition(0),
              this.emit("scrollbarDragMove", e));
          },
          onDragEnd(e) {
            let t = this.params.scrollbar,
              { scrollbar: s, $wrapperEl: i } = this,
              { $el: a } = s;
            this.scrollbar.isTouched &&
              ((this.scrollbar.isTouched = !1),
              this.params.cssMode &&
                (this.$wrapperEl.css("scroll-snap-type", ""), i.transition("")),
              t.hide &&
                (clearTimeout(this.scrollbar.dragTimeout),
                (this.scrollbar.dragTimeout = r.nextTick(() => {
                  a.css("opacity", 0), a.transition(400);
                }, 1e3))),
              this.emit("scrollbarDragEnd", e),
              t.snapOnRelease && this.slideToClosest());
          },
          enableDraggable() {
            if (!this.params.scrollbar.el) return;
            let {
                scrollbar: e,
                touchEventsTouch: t,
                touchEventsDesktop: s,
                params: i,
              } = this,
              l = e.$el,
              r = l[0],
              o = !!n.passiveListener &&
                !!i.passiveListeners && { passive: !1, capture: !1 },
              d = !!n.passiveListener &&
                !!i.passiveListeners && { passive: !0, capture: !1 };
            n.touch
              ? (r.addEventListener(t.start, this.scrollbar.onDragStart, o),
                r.addEventListener(t.move, this.scrollbar.onDragMove, o),
                r.addEventListener(t.end, this.scrollbar.onDragEnd, d))
              : (r.addEventListener(s.start, this.scrollbar.onDragStart, o),
                a.tj.addEventListener(s.move, this.scrollbar.onDragMove, o),
                a.tj.addEventListener(s.end, this.scrollbar.onDragEnd, d));
          },
          disableDraggable() {
            if (!this.params.scrollbar.el) return;
            let {
                scrollbar: e,
                touchEventsTouch: t,
                touchEventsDesktop: s,
                params: i,
              } = this,
              l = e.$el,
              r = l[0],
              o = !!n.passiveListener &&
                !!i.passiveListeners && { passive: !1, capture: !1 },
              d = !!n.passiveListener &&
                !!i.passiveListeners && { passive: !0, capture: !1 };
            n.touch
              ? (r.removeEventListener(t.start, this.scrollbar.onDragStart, o),
                r.removeEventListener(t.move, this.scrollbar.onDragMove, o),
                r.removeEventListener(t.end, this.scrollbar.onDragEnd, d))
              : (r.removeEventListener(s.start, this.scrollbar.onDragStart, o),
                a.tj.removeEventListener(s.move, this.scrollbar.onDragMove, o),
                a.tj.removeEventListener(s.end, this.scrollbar.onDragEnd, d));
          },
          init() {
            if (!this.params.scrollbar.el) return;
            let { scrollbar: e, $el: t } = this,
              s = this.params.scrollbar,
              a = (0, i.$)(s.el);
            this.params.uniqueNavElements &&
              "string" == typeof s.el &&
              a.length > 1 &&
              1 === t.find(s.el).length &&
              (a = t.find(s.el));
            let l = a.find(`.${this.params.scrollbar.dragClass}`);
            0 === l.length &&
              ((l = (0, i.$)(
                `<div class="${this.params.scrollbar.dragClass}"></div>`
              )),
              a.append(l)),
              r.extend(e, { $el: a, el: a[0], $dragEl: l, dragEl: l[0] }),
              s.draggable && e.enableDraggable();
          },
          destroy() {
            this.scrollbar.disableDraggable();
          },
        },
        k = {
          setTransform(e, t) {
            let { rtl: s } = this,
              a = (0, i.$)(e),
              l = s ? -1 : 1,
              r = a.attr("data-swiper-parallax") || "0",
              n = a.attr("data-swiper-parallax-x"),
              o = a.attr("data-swiper-parallax-y"),
              d = a.attr("data-swiper-parallax-scale"),
              h = a.attr("data-swiper-parallax-opacity");
            if (
              (n || o
                ? ((n = n || "0"), (o = o || "0"))
                : this.isHorizontal()
                ? ((n = r), (o = "0"))
                : ((o = r), (n = "0")),
              (n =
                n.indexOf("%") >= 0
                  ? `${parseInt(n, 10) * t * l}%`
                  : `${n * t * l}px`),
              (o =
                o.indexOf("%") >= 0 ? `${parseInt(o, 10) * t}%` : `${o * t}px`),
              null != h)
            ) {
              let e = h - (h - 1) * (1 - Math.abs(t));
              a[0].style.opacity = e;
            }
            if (null == d) a.transform(`translate3d(${n}, ${o}, 0px)`);
            else {
              let e = d - (d - 1) * (1 - Math.abs(t));
              a.transform(`translate3d(${n}, ${o}, 0px) scale(${e})`);
            }
          },
          setTranslate() {
            let e = this,
              { $el: t, slides: s, progress: a, snapGrid: l } = e;
            t
              .children(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each((t, s) => {
                e.parallax.setTransform(s, a);
              }),
              s.each((t, s) => {
                let r = s.progress;
                e.params.slidesPerGroup > 1 &&
                  "auto" !== e.params.slidesPerView &&
                  (r += Math.ceil(t / 2) - a * (l.length - 1)),
                  (r = Math.min(Math.max(r, -1), 1)),
                  (0, i.$)(s)
                    .find(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                    )
                    .each((t, s) => {
                      e.parallax.setTransform(s, r);
                    });
              });
          },
          setTransition(e = this.params.speed) {
            let { $el: t } = this;
            t.find(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            ).each((t, s) => {
              let a = (0, i.$)(s),
                l = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
              0 === e && (l = 0), a.transition(l);
            });
          },
        },
        I = {
          getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) return 1;
            let t = e.targetTouches[0].pageX,
              s = e.targetTouches[0].pageY,
              i = e.targetTouches[1].pageX,
              a = e.targetTouches[1].pageY;
            return Math.sqrt((i - t) ** 2 + (a - s) ** 2);
          },
          onGestureStart(e) {
            let t = this.params.zoom,
              s = this.zoom,
              { gesture: a } = s;
            if (
              ((s.fakeGestureTouched = !1),
              (s.fakeGestureMoved = !1),
              !n.gestures)
            ) {
              if (
                "touchstart" !== e.type ||
                ("touchstart" === e.type && e.targetTouches.length < 2)
              )
                return;
              (s.fakeGestureTouched = !0),
                (a.scaleStart = I.getDistanceBetweenTouches(e));
            }
            if (
              (!a.$slideEl || !a.$slideEl.length) &&
              ((a.$slideEl = (0, i.$)(e.target).closest(
                `.${this.params.slideClass}`
              )),
              0 === a.$slideEl.length &&
                (a.$slideEl = this.slides.eq(this.activeIndex)),
              (a.$imageEl = a.$slideEl.find(
                "img, svg, canvas, picture, .swiper-zoom-target"
              )),
              (a.$imageWrapEl = a.$imageEl.parent(`.${t.containerClass}`)),
              (a.maxRatio =
                a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio),
              0 === a.$imageWrapEl.length)
            ) {
              a.$imageEl = void 0;
              return;
            }
            a.$imageEl && a.$imageEl.transition(0), (this.zoom.isScaling = !0);
          },
          onGestureChange(e) {
            let t = this.params.zoom,
              s = this.zoom,
              { gesture: i } = s;
            if (!n.gestures) {
              if (
                "touchmove" !== e.type ||
                ("touchmove" === e.type && e.targetTouches.length < 2)
              )
                return;
              (s.fakeGestureMoved = !0),
                (i.scaleMove = I.getDistanceBetweenTouches(e));
            }
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              (n.gestures
                ? (s.scale = e.scale * s.currentScale)
                : (s.scale = (i.scaleMove / i.scaleStart) * s.currentScale),
              s.scale > i.maxRatio &&
                (s.scale = i.maxRatio - 1 + (s.scale - i.maxRatio + 1) ** 0.5),
              s.scale < t.minRatio &&
                (s.scale = t.minRatio + 1 - (t.minRatio - s.scale + 1) ** 0.5),
              i.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`));
          },
          onGestureEnd(e) {
            let t = this.params.zoom,
              s = this.zoom,
              { gesture: i } = s;
            if (!n.gestures) {
              if (
                !s.fakeGestureTouched ||
                !s.fakeGestureMoved ||
                "touchend" !== e.type ||
                ("touchend" === e.type &&
                  e.changedTouches.length < 2 &&
                  !d.android)
              )
                return;
              (s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1);
            }
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              ((s.scale = Math.max(Math.min(s.scale, i.maxRatio), t.minRatio)),
              i.$imageEl
                .transition(this.params.speed)
                .transform(`translate3d(0,0,0) scale(${s.scale})`),
              (s.currentScale = s.scale),
              (s.isScaling = !1),
              1 === s.scale && (i.$slideEl = void 0));
          },
          onTouchStart(e) {
            let t = this.zoom,
              { gesture: s, image: i } = t;
            s.$imageEl &&
              0 !== s.$imageEl.length &&
              (i.isTouched ||
                (d.android && e.cancelable && e.preventDefault(),
                (i.isTouched = !0),
                (i.touchesStart.x =
                  "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                (i.touchesStart.y =
                  "touchstart" === e.type
                    ? e.targetTouches[0].pageY
                    : e.pageY)));
          },
          onTouchMove(e) {
            let t = this.zoom,
              { gesture: s, image: i, velocity: a } = t;
            if (
              !s.$imageEl ||
              0 === s.$imageEl.length ||
              ((this.allowClick = !1), !i.isTouched || !s.$slideEl)
            )
              return;
            !i.isMoved &&
              ((i.width = s.$imageEl[0].offsetWidth),
              (i.height = s.$imageEl[0].offsetHeight),
              (i.startX = r.getTranslate(s.$imageWrapEl[0], "x") || 0),
              (i.startY = r.getTranslate(s.$imageWrapEl[0], "y") || 0),
              (s.slideWidth = s.$slideEl[0].offsetWidth),
              (s.slideHeight = s.$slideEl[0].offsetHeight),
              s.$imageWrapEl.transition(0),
              this.rtl && ((i.startX = -i.startX), (i.startY = -i.startY)));
            let l = i.width * t.scale,
              n = i.height * t.scale;
            if (!(l < s.slideWidth) || !(n < s.slideHeight)) {
              if (
                ((i.minX = Math.min(s.slideWidth / 2 - l / 2, 0)),
                (i.maxX = -i.minX),
                (i.minY = Math.min(s.slideHeight / 2 - n / 2, 0)),
                (i.maxY = -i.minY),
                (i.touchesCurrent.x =
                  "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                (i.touchesCurrent.y =
                  "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                !i.isMoved &&
                  !t.isScaling &&
                  ((this.isHorizontal() &&
                    ((Math.floor(i.minX) === Math.floor(i.startX) &&
                      i.touchesCurrent.x < i.touchesStart.x) ||
                      (Math.floor(i.maxX) === Math.floor(i.startX) &&
                        i.touchesCurrent.x > i.touchesStart.x))) ||
                    (!this.isHorizontal() &&
                      ((Math.floor(i.minY) === Math.floor(i.startY) &&
                        i.touchesCurrent.y < i.touchesStart.y) ||
                        (Math.floor(i.maxY) === Math.floor(i.startY) &&
                          i.touchesCurrent.y > i.touchesStart.y)))))
              ) {
                i.isTouched = !1;
                return;
              }
              e.cancelable && e.preventDefault(),
                e.stopPropagation(),
                (i.isMoved = !0),
                (i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX),
                (i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY),
                i.currentX < i.minX &&
                  (i.currentX = i.minX + 1 - (i.minX - i.currentX + 1) ** 0.8),
                i.currentX > i.maxX &&
                  (i.currentX = i.maxX - 1 + (i.currentX - i.maxX + 1) ** 0.8),
                i.currentY < i.minY &&
                  (i.currentY = i.minY + 1 - (i.minY - i.currentY + 1) ** 0.8),
                i.currentY > i.maxY &&
                  (i.currentY = i.maxY - 1 + (i.currentY - i.maxY + 1) ** 0.8),
                a.prevPositionX || (a.prevPositionX = i.touchesCurrent.x),
                a.prevPositionY || (a.prevPositionY = i.touchesCurrent.y),
                a.prevTime || (a.prevTime = Date.now()),
                (a.x =
                  (i.touchesCurrent.x - a.prevPositionX) /
                  (Date.now() - a.prevTime) /
                  2),
                (a.y =
                  (i.touchesCurrent.y - a.prevPositionY) /
                  (Date.now() - a.prevTime) /
                  2),
                2 > Math.abs(i.touchesCurrent.x - a.prevPositionX) && (a.x = 0),
                2 > Math.abs(i.touchesCurrent.y - a.prevPositionY) && (a.y = 0),
                (a.prevPositionX = i.touchesCurrent.x),
                (a.prevPositionY = i.touchesCurrent.y),
                (a.prevTime = Date.now()),
                s.$imageWrapEl.transform(
                  `translate3d(${i.currentX}px, ${i.currentY}px,0)`
                );
            }
          },
          onTouchEnd() {
            let e = this.zoom,
              { gesture: t, image: s, velocity: i } = e;
            if (!t.$imageEl || 0 === t.$imageEl.length) return;
            if (!s.isTouched || !s.isMoved) {
              (s.isTouched = !1), (s.isMoved = !1);
              return;
            }
            (s.isTouched = !1), (s.isMoved = !1);
            let a = 300,
              l = 300,
              r = i.x * a,
              n = s.currentX + r,
              o = i.y * l,
              d = s.currentY + o;
            0 !== i.x && (a = Math.abs((n - s.currentX) / i.x)),
              0 !== i.y && (l = Math.abs((d - s.currentY) / i.y));
            let h = Math.max(a, l);
            (s.currentX = n), (s.currentY = d);
            let p = s.width * e.scale,
              c = s.height * e.scale;
            (s.minX = Math.min(t.slideWidth / 2 - p / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(t.slideHeight / 2 - c / 2, 0)),
              (s.maxY = -s.minY),
              (s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX)),
              (s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY)),
              t.$imageWrapEl
                .transition(h)
                .transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`);
          },
          onTransitionEnd() {
            let e = this.zoom,
              { gesture: t } = e;
            t.$slideEl &&
              this.previousIndex !== this.activeIndex &&
              (t.$imageEl &&
                t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
              t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
              (e.scale = 1),
              (e.currentScale = 1),
              (t.$slideEl = void 0),
              (t.$imageEl = void 0),
              (t.$imageWrapEl = void 0));
          },
          toggle(e) {
            let t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e);
          },
          in(e) {
            let t, s, i, a, l, r, n, o, d, h, p, c, u, m, g, f, v, b;
            let w = this.zoom,
              y = this.params.zoom,
              { gesture: x, image: T } = w;
            x.$slideEl ||
              (this.params.virtual &&
              this.params.virtual.enabled &&
              this.virtual
                ? (x.$slideEl = this.$wrapperEl.children(
                    `.${this.params.slideActiveClass}`
                  ))
                : (x.$slideEl = this.slides.eq(this.activeIndex)),
              (x.$imageEl = x.$slideEl.find(
                "img, svg, canvas, picture, .swiper-zoom-target"
              )),
              (x.$imageWrapEl = x.$imageEl.parent(`.${y.containerClass}`))),
              x.$imageEl &&
                0 !== x.$imageEl.length &&
                (x.$slideEl.addClass(`${y.zoomedSlideClass}`),
                void 0 === T.touchesStart.x && e
                  ? ((t =
                      "touchend" === e.type
                        ? e.changedTouches[0].pageX
                        : e.pageX),
                    (s =
                      "touchend" === e.type
                        ? e.changedTouches[0].pageY
                        : e.pageY))
                  : ((t = T.touchesStart.x), (s = T.touchesStart.y)),
                (w.scale =
                  x.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio),
                (w.currentScale =
                  x.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio),
                e
                  ? ((v = x.$slideEl[0].offsetWidth),
                    (b = x.$slideEl[0].offsetHeight),
                    (i = x.$slideEl.offset().left),
                    (a = x.$slideEl.offset().top),
                    (l = i + v / 2 - t),
                    (r = a + b / 2 - s),
                    (d = x.$imageEl[0].offsetWidth),
                    (h = x.$imageEl[0].offsetHeight),
                    (p = d * w.scale),
                    (c = h * w.scale),
                    (u = Math.min(v / 2 - p / 2, 0)),
                    (m = Math.min(b / 2 - c / 2, 0)),
                    (g = -u),
                    (f = -m),
                    (n = l * w.scale),
                    (o = r * w.scale),
                    n < u && (n = u),
                    n > g && (n = g),
                    o < m && (o = m),
                    o > f && (o = f))
                  : ((n = 0), (o = 0)),
                x.$imageWrapEl
                  .transition(300)
                  .transform(`translate3d(${n}px, ${o}px,0)`),
                x.$imageEl
                  .transition(300)
                  .transform(`translate3d(0,0,0) scale(${w.scale})`));
          },
          out() {
            let e = this.zoom,
              t = this.params.zoom,
              { gesture: s } = e;
            s.$slideEl ||
              (this.params.virtual &&
              this.params.virtual.enabled &&
              this.virtual
                ? (s.$slideEl = this.$wrapperEl.children(
                    `.${this.params.slideActiveClass}`
                  ))
                : (s.$slideEl = this.slides.eq(this.activeIndex)),
              (s.$imageEl = s.$slideEl.find(
                "img, svg, canvas, picture, .swiper-zoom-target"
              )),
              (s.$imageWrapEl = s.$imageEl.parent(`.${t.containerClass}`))),
              s.$imageEl &&
                0 !== s.$imageEl.length &&
                ((e.scale = 1),
                (e.currentScale = 1),
                s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                s.$imageEl
                  .transition(300)
                  .transform("translate3d(0,0,0) scale(1)"),
                s.$slideEl.removeClass(`${t.zoomedSlideClass}`),
                (s.$slideEl = void 0));
          },
          enable() {
            let e = this.zoom;
            if (e.enabled) return;
            e.enabled = !0;
            let t = "touchstart" === this.touchEvents.start &&
                !!n.passiveListener &&
                !!this.params.passiveListeners && { passive: !0, capture: !1 },
              s = !n.passiveListener || { passive: !1, capture: !0 },
              i = `.${this.params.slideClass}`;
            n.gestures
              ? (this.$wrapperEl.on("gesturestart", i, e.onGestureStart, t),
                this.$wrapperEl.on("gesturechange", i, e.onGestureChange, t),
                this.$wrapperEl.on("gestureend", i, e.onGestureEnd, t))
              : "touchstart" === this.touchEvents.start &&
                (this.$wrapperEl.on(
                  this.touchEvents.start,
                  i,
                  e.onGestureStart,
                  t
                ),
                this.$wrapperEl.on(
                  this.touchEvents.move,
                  i,
                  e.onGestureChange,
                  s
                ),
                this.$wrapperEl.on(this.touchEvents.end, i, e.onGestureEnd, t),
                this.touchEvents.cancel &&
                  this.$wrapperEl.on(
                    this.touchEvents.cancel,
                    i,
                    e.onGestureEnd,
                    t
                  )),
              this.$wrapperEl.on(
                this.touchEvents.move,
                `.${this.params.zoom.containerClass}`,
                e.onTouchMove,
                s
              );
          },
          disable() {
            let e = this.zoom;
            if (!e.enabled) return;
            this.zoom.enabled = !1;
            let t = "touchstart" === this.touchEvents.start &&
                !!n.passiveListener &&
                !!this.params.passiveListeners && { passive: !0, capture: !1 },
              s = !n.passiveListener || { passive: !1, capture: !0 },
              i = `.${this.params.slideClass}`;
            n.gestures
              ? (this.$wrapperEl.off("gesturestart", i, e.onGestureStart, t),
                this.$wrapperEl.off("gesturechange", i, e.onGestureChange, t),
                this.$wrapperEl.off("gestureend", i, e.onGestureEnd, t))
              : "touchstart" === this.touchEvents.start &&
                (this.$wrapperEl.off(
                  this.touchEvents.start,
                  i,
                  e.onGestureStart,
                  t
                ),
                this.$wrapperEl.off(
                  this.touchEvents.move,
                  i,
                  e.onGestureChange,
                  s
                ),
                this.$wrapperEl.off(this.touchEvents.end, i, e.onGestureEnd, t),
                this.touchEvents.cancel &&
                  this.$wrapperEl.off(
                    this.touchEvents.cancel,
                    i,
                    e.onGestureEnd,
                    t
                  )),
              this.$wrapperEl.off(
                this.touchEvents.move,
                `.${this.params.zoom.containerClass}`,
                e.onTouchMove,
                s
              );
          },
        },
        L = {
          loadInSlide(e, t = !0) {
            let s = this,
              a = s.params.lazy;
            if (void 0 === e || 0 === s.slides.length) return;
            let l = s.virtual && s.params.virtual.enabled,
              r = l
                ? s.$wrapperEl.children(
                    `.${s.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                : s.slides.eq(e),
              n = r.find(
                `.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`
              );
            !r.hasClass(a.elementClass) ||
              r.hasClass(a.loadedClass) ||
              r.hasClass(a.loadingClass) ||
              (n = n.add(r[0])),
              0 !== n.length &&
                n.each((e, l) => {
                  let n = (0, i.$)(l);
                  n.addClass(a.loadingClass);
                  let o = n.attr("data-background"),
                    d = n.attr("data-src"),
                    h = n.attr("data-srcset"),
                    p = n.attr("data-sizes"),
                    c = n.parent("picture");
                  s.loadImage(n[0], d || o, h, p, !1, () => {
                    if (null != s && s && (!s || s.params) && !s.destroyed) {
                      if (
                        (o
                          ? (n.css("background-image", `url("${o}")`),
                            n.removeAttr("data-background"))
                          : (h &&
                              (n.attr("srcset", h),
                              n.removeAttr("data-srcset")),
                            p &&
                              (n.attr("sizes", p), n.removeAttr("data-sizes")),
                            c.length &&
                              c.children("source").each((e, t) => {
                                let s = (0, i.$)(t);
                                s.attr("data-srcset") &&
                                  (s.attr("srcset", s.attr("data-srcset")),
                                  s.removeAttr("data-srcset"));
                              }),
                            d && (n.attr("src", d), n.removeAttr("data-src"))),
                        n.addClass(a.loadedClass).removeClass(a.loadingClass),
                        r.find(`.${a.preloaderClass}`).remove(),
                        s.params.loop && t)
                      ) {
                        let e = r.attr("data-swiper-slide-index");
                        if (r.hasClass(s.params.slideDuplicateClass)) {
                          let t = s.$wrapperEl.children(
                            `[data-swiper-slide-index="${e}"]:not(.${s.params.slideDuplicateClass})`
                          );
                          s.lazy.loadInSlide(t.index(), !1);
                        } else {
                          let t = s.$wrapperEl.children(
                            `.${s.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                          );
                          s.lazy.loadInSlide(t.index(), !1);
                        }
                      }
                      s.emit("lazyImageReady", r[0], n[0]),
                        s.params.autoHeight && s.updateAutoHeight();
                    }
                  }),
                    s.emit("lazyImageLoad", r[0], n[0]);
                });
          },
          load() {
            let e = this,
              { $wrapperEl: t, params: s, slides: a, activeIndex: l } = e,
              r = e.virtual && s.virtual.enabled,
              n = s.lazy,
              o = s.slidesPerView;
            function d(e) {
              if (r) {
                if (
                  t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`)
                    .length
                )
                  return !0;
              } else if (a[e]) return !0;
              return !1;
            }
            function h(e) {
              return r
                ? (0, i.$)(e).attr("data-swiper-slide-index")
                : (0, i.$)(e).index();
            }
            if (
              ("auto" === o && (o = 0),
              e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
              e.params.watchSlidesVisibility)
            )
              t.children(`.${s.slideVisibleClass}`).each((t, s) => {
                let a = r
                  ? (0, i.$)(s).attr("data-swiper-slide-index")
                  : (0, i.$)(s).index();
                e.lazy.loadInSlide(a);
              });
            else if (o > 1)
              for (let t = l; t < l + o; t += 1) d(t) && e.lazy.loadInSlide(t);
            else e.lazy.loadInSlide(l);
            if (n.loadPrevNext) {
              if (o > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
                let t = n.loadPrevNextAmount,
                  s = o,
                  i = Math.min(l + s + Math.max(t, s), a.length),
                  r = Math.max(l - Math.max(s, t), 0);
                for (let t = l + o; t < i; t += 1)
                  d(t) && e.lazy.loadInSlide(t);
                for (let t = r; t < l; t += 1) d(t) && e.lazy.loadInSlide(t);
              } else {
                let i = t.children(`.${s.slideNextClass}`);
                i.length > 0 && e.lazy.loadInSlide(h(i));
                let a = t.children(`.${s.slidePrevClass}`);
                a.length > 0 && e.lazy.loadInSlide(h(a));
              }
            }
          },
        },
        O = {
          LinearSpline: function (e, t) {
            let s, i, a, l, r;
            let n = (e, t) => {
              for (l = -1, a = e.length; a - l > 1; )
                e[(r = (a + l) >> 1)] <= t ? (l = r) : (a = r);
              return a;
            };
            return (
              (this.x = e),
              (this.y = t),
              (this.lastIndex = e.length - 1),
              (this.interpolate = function (e) {
                return e
                  ? ((s = (i = n(this.x, e)) - 1),
                    ((e - this.x[s]) * (this.y[i] - this.y[s])) /
                      (this.x[i] - this.x[s]) +
                      this.y[s])
                  : 0;
              }),
              this
            );
          },
          getInterpolateFunction(e) {
            this.controller.spline ||
              (this.controller.spline = this.params.loop
                ? new O.LinearSpline(this.slidesGrid, e.slidesGrid)
                : new O.LinearSpline(this.snapGrid, e.snapGrid));
          },
          setTranslate(e, t) {
            let s, i;
            let a = this,
              l = a.controller.control;
            function r(e) {
              let t = a.rtlTranslate ? -a.translate : a.translate;
              "slide" === a.params.controller.by &&
                (a.controller.getInterpolateFunction(e),
                (i = -a.controller.spline.interpolate(-t))),
                (i && "container" !== a.params.controller.by) ||
                  ((s =
                    (e.maxTranslate() - e.minTranslate()) /
                    (a.maxTranslate() - a.minTranslate())),
                  (i = (t - a.minTranslate()) * s + e.minTranslate())),
                a.params.controller.inverse && (i = e.maxTranslate() - i),
                e.updateProgress(i),
                e.setTranslate(i, a),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(l))
              for (let e = 0; e < l.length; e += 1)
                l[e] !== t && l[e] instanceof x && r(l[e]);
            else l instanceof x && t !== l && r(l);
          },
          setTransition(e, t) {
            let s;
            let i = this,
              a = i.controller.control;
            function l(t) {
              t.setTransition(e, i),
                0 !== e &&
                  (t.transitionStart(),
                  t.params.autoHeight &&
                    r.nextTick(() => {
                      t.updateAutoHeight();
                    }),
                  t.$wrapperEl.transitionEnd(() => {
                    a &&
                      (t.params.loop &&
                        "slide" === i.params.controller.by &&
                        t.loopFix(),
                      t.transitionEnd());
                  }));
            }
            if (Array.isArray(a))
              for (s = 0; s < a.length; s += 1)
                a[s] !== t && a[s] instanceof x && l(a[s]);
            else a instanceof x && t !== a && l(a);
          },
        },
        D = {
          makeElFocusable: (e) => (e.attr("tabIndex", "0"), e),
          makeElNotFocusable: (e) => (e.attr("tabIndex", "-1"), e),
          addElRole: (e, t) => (e.attr("role", t), e),
          addElLabel: (e, t) => (e.attr("aria-label", t), e),
          disableEl: (e) => (e.attr("aria-disabled", !0), e),
          enableEl: (e) => (e.attr("aria-disabled", !1), e),
          onEnterKey(e) {
            let t = this.params.a11y;
            if (13 !== e.keyCode) return;
            let s = (0, i.$)(e.target);
            this.navigation &&
              this.navigation.$nextEl &&
              s.is(this.navigation.$nextEl) &&
              ((this.isEnd && !this.params.loop) || this.slideNext(),
              this.isEnd
                ? this.a11y.notify(t.lastSlideMessage)
                : this.a11y.notify(t.nextSlideMessage)),
              this.navigation &&
                this.navigation.$prevEl &&
                s.is(this.navigation.$prevEl) &&
                ((this.isBeginning && !this.params.loop) || this.slidePrev(),
                this.isBeginning
                  ? this.a11y.notify(t.firstSlideMessage)
                  : this.a11y.notify(t.prevSlideMessage)),
              this.pagination &&
                s.is(`.${this.params.pagination.bulletClass}`) &&
                s[0].click();
          },
          notify(e) {
            let t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e));
          },
          updateNavigation() {
            if (this.params.loop || !this.navigation) return;
            let { $nextEl: e, $prevEl: t } = this.navigation;
            t &&
              t.length > 0 &&
              (this.isBeginning
                ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t))
                : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t))),
              e &&
                e.length > 0 &&
                (this.isEnd
                  ? (this.a11y.disableEl(e), this.a11y.makeElNotFocusable(e))
                  : (this.a11y.enableEl(e), this.a11y.makeElFocusable(e)));
          },
          updatePagination() {
            let e = this,
              t = e.params.a11y;
            e.pagination &&
              e.params.pagination.clickable &&
              e.pagination.bullets &&
              e.pagination.bullets.length &&
              e.pagination.bullets.each((s, a) => {
                let l = (0, i.$)(a);
                e.a11y.makeElFocusable(l),
                  e.a11y.addElRole(l, "button"),
                  e.a11y.addElLabel(
                    l,
                    t.paginationBulletMessage.replace(
                      /\{\{index\}\}/,
                      l.index() + 1
                    )
                  );
              });
          },
          init() {
            let e, t;
            this.$el.append(this.a11y.liveRegion);
            let s = this.params.a11y;
            this.navigation &&
              this.navigation.$nextEl &&
              (e = this.navigation.$nextEl),
              this.navigation &&
                this.navigation.$prevEl &&
                (t = this.navigation.$prevEl),
              e &&
                (this.a11y.makeElFocusable(e),
                this.a11y.addElRole(e, "button"),
                this.a11y.addElLabel(e, s.nextSlideMessage),
                e.on("keydown", this.a11y.onEnterKey)),
              t &&
                (this.a11y.makeElFocusable(t),
                this.a11y.addElRole(t, "button"),
                this.a11y.addElLabel(t, s.prevSlideMessage),
                t.on("keydown", this.a11y.onEnterKey)),
              this.pagination &&
                this.params.pagination.clickable &&
                this.pagination.bullets &&
                this.pagination.bullets.length &&
                this.pagination.$el.on(
                  "keydown",
                  `.${this.params.pagination.bulletClass}`,
                  this.a11y.onEnterKey
                );
          },
          destroy() {
            let e, t;
            this.a11y.liveRegion &&
              this.a11y.liveRegion.length > 0 &&
              this.a11y.liveRegion.remove(),
              this.navigation &&
                this.navigation.$nextEl &&
                (e = this.navigation.$nextEl),
              this.navigation &&
                this.navigation.$prevEl &&
                (t = this.navigation.$prevEl),
              e && e.off("keydown", this.a11y.onEnterKey),
              t && t.off("keydown", this.a11y.onEnterKey),
              this.pagination &&
                this.params.pagination.clickable &&
                this.pagination.bullets &&
                this.pagination.bullets.length &&
                this.pagination.$el.off(
                  "keydown",
                  `.${this.params.pagination.bulletClass}`,
                  this.a11y.onEnterKey
                );
          },
        },
        A = {
          init() {
            if (!this.params.history) return;
            if (!a.u9.history || !a.u9.history.pushState) {
              (this.params.history.enabled = !1),
                (this.params.hashNavigation.enabled = !0);
              return;
            }
            let e = this.history;
            (e.initialized = !0),
              (e.paths = A.getPathValues()),
              (e.paths.key || e.paths.value) &&
                (e.scrollToSlide(
                  0,
                  e.paths.value,
                  this.params.runCallbacksOnInit
                ),
                this.params.history.replaceState ||
                  a.u9.addEventListener(
                    "popstate",
                    this.history.setHistoryPopState
                  ));
          },
          destroy() {
            this.params.history.replaceState ||
              a.u9.removeEventListener(
                "popstate",
                this.history.setHistoryPopState
              );
          },
          setHistoryPopState() {
            (this.history.paths = A.getPathValues()),
              this.history.scrollToSlide(
                this.params.speed,
                this.history.paths.value,
                !1
              );
          },
          getPathValues() {
            let e = a.u9.location.pathname
                .slice(1)
                .split("/")
                .filter((e) => "" !== e),
              t = e.length,
              s = e[t - 2],
              i = e[t - 1];
            return { key: s, value: i };
          },
          setHistory(e, t) {
            if (!this.history.initialized || !this.params.history.enabled)
              return;
            let s = this.slides.eq(t),
              i = A.slugify(s.attr("data-history"));
            a.u9.location.pathname.includes(e) || (i = `${e}/${i}`);
            let l = a.u9.history.state;
            (l && l.value === i) ||
              (this.params.history.replaceState
                ? a.u9.history.replaceState({ value: i }, null, i)
                : a.u9.history.pushState({ value: i }, null, i));
          },
          slugify: (e) =>
            e
              .toString()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "")
              .replace(/--+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, ""),
          scrollToSlide(e, t, s) {
            if (t)
              for (let i = 0, a = this.slides.length; i < a; i += 1) {
                let a = this.slides.eq(i),
                  l = A.slugify(a.attr("data-history"));
                if (l === t && !a.hasClass(this.params.slideDuplicateClass)) {
                  let t = a.index();
                  this.slideTo(t, e, s);
                }
              }
            else this.slideTo(0, e, s);
          },
        },
        H = {
          onHashCange() {
            this.emit("hashChange");
            let e = a.tj.location.hash.replace("#", ""),
              t = this.slides.eq(this.activeIndex).attr("data-hash");
            if (e !== t) {
              let t = this.$wrapperEl
                .children(`.${this.params.slideClass}[data-hash="${e}"]`)
                .index();
              if (void 0 === t) return;
              this.slideTo(t);
            }
          },
          setHash() {
            if (
              this.hashNavigation.initialized &&
              this.params.hashNavigation.enabled
            ) {
              if (
                this.params.hashNavigation.replaceState &&
                a.u9.history &&
                a.u9.history.replaceState
              )
                a.u9.history.replaceState(
                  null,
                  null,
                  `#${this.slides.eq(this.activeIndex).attr("data-hash")}` || ""
                ),
                  this.emit("hashSet");
              else {
                let e = this.slides.eq(this.activeIndex),
                  t = e.attr("data-hash") || e.attr("data-history");
                (a.tj.location.hash = t || ""), this.emit("hashSet");
              }
            }
          },
          init() {
            if (
              !this.params.hashNavigation.enabled ||
              (this.params.history && this.params.history.enabled)
            )
              return;
            this.hashNavigation.initialized = !0;
            let e = a.tj.location.hash.replace("#", "");
            if (e)
              for (let t = 0, s = this.slides.length; t < s; t += 1) {
                let s = this.slides.eq(t),
                  i = s.attr("data-hash") || s.attr("data-history");
                if (i === e && !s.hasClass(this.params.slideDuplicateClass)) {
                  let e = s.index();
                  this.slideTo(e, 0, this.params.runCallbacksOnInit, !0);
                }
              }
            this.params.hashNavigation.watchState &&
              (0, i.$)(a.u9).on("hashchange", this.hashNavigation.onHashCange);
          },
          destroy() {
            this.params.hashNavigation.watchState &&
              (0, i.$)(a.u9).off("hashchange", this.hashNavigation.onHashCange);
          },
        },
        G = {
          run() {
            let e = this,
              t = e.slides.eq(e.activeIndex),
              s = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") &&
              (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
              clearTimeout(e.autoplay.timeout),
              (e.autoplay.timeout = r.nextTick(() => {
                e.params.autoplay.reverseDirection
                  ? e.params.loop
                    ? (e.loopFix(),
                      e.slidePrev(e.params.speed, !0, !0),
                      e.emit("autoplay"))
                    : e.isBeginning
                    ? e.params.autoplay.stopOnLastSlide
                      ? e.autoplay.stop()
                      : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                        e.emit("autoplay"))
                    : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                  : e.params.loop
                  ? (e.loopFix(),
                    e.slideNext(e.params.speed, !0, !0),
                    e.emit("autoplay"))
                  : e.isEnd
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                  : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
                  e.params.cssMode && e.autoplay.running && e.autoplay.run();
              }, s));
          },
          start() {
            return (
              void 0 === this.autoplay.timeout &&
              !this.autoplay.running &&
              ((this.autoplay.running = !0),
              this.emit("autoplayStart"),
              this.autoplay.run(),
              !0)
            );
          },
          stop() {
            return (
              !!this.autoplay.running &&
              void 0 !== this.autoplay.timeout &&
              (this.autoplay.timeout &&
                (clearTimeout(this.autoplay.timeout),
                (this.autoplay.timeout = void 0)),
              (this.autoplay.running = !1),
              this.emit("autoplayStop"),
              !0)
            );
          },
          pause(e) {
            this.autoplay.running &&
              (this.autoplay.paused ||
                (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
                (this.autoplay.paused = !0),
                0 !== e && this.params.autoplay.waitForTransition
                  ? (this.$wrapperEl[0].addEventListener(
                      "transitionend",
                      this.autoplay.onTransitionEnd
                    ),
                    this.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      this.autoplay.onTransitionEnd
                    ))
                  : ((this.autoplay.paused = !1), this.autoplay.run())));
          },
        },
        B = {
          setTranslate() {
            let { slides: e } = this;
            for (let t = 0; t < e.length; t += 1) {
              let e = this.slides.eq(t),
                s = e[0].swiperSlideOffset,
                i = -s;
              this.params.virtualTranslate || (i -= this.translate);
              let a = 0;
              this.isHorizontal() || ((a = i), (i = 0));
              let l = this.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(e[0].progress), 0)
                : 1 + Math.min(Math.max(e[0].progress, -1), 0);
              e.css({ opacity: l }).transform(
                `translate3d(${i}px, ${a}px, 0px)`
              );
            }
          },
          setTransition(e) {
            let t = this,
              { slides: s, $wrapperEl: i } = t;
            if ((s.transition(e), t.params.virtualTranslate && 0 !== e)) {
              let e = !1;
              s.transitionEnd(() => {
                if (e || !t || t.destroyed) return;
                (e = !0), (t.animating = !1);
                let s = ["webkitTransitionEnd", "transitionend"];
                for (let e = 0; e < s.length; e += 1) i.trigger(s[e]);
              });
            }
          },
        },
        X = {
          setTranslate() {
            let e;
            let {
                $el: t,
                $wrapperEl: s,
                slides: a,
                width: l,
                height: r,
                rtlTranslate: n,
                size: o,
              } = this,
              d = this.params.cubeEffect,
              h = this.isHorizontal(),
              p = this.virtual && this.params.virtual.enabled,
              c = 0;
            d.shadow &&
              (h
                ? (0 === (e = s.find(".swiper-cube-shadow")).length &&
                    ((e = (0, i.$)('<div class="swiper-cube-shadow"></div>')),
                    s.append(e)),
                  e.css({ height: `${l}px` }))
                : 0 === (e = t.find(".swiper-cube-shadow")).length &&
                  ((e = (0, i.$)('<div class="swiper-cube-shadow"></div>')),
                  t.append(e)));
            for (let e = 0; e < a.length; e += 1) {
              let t = a.eq(e),
                s = e;
              p && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
              let l = 90 * s,
                r = Math.floor(l / 360);
              n && (r = Math.floor(-(l = -l) / 360));
              let u = Math.max(Math.min(t[0].progress, 1), -1),
                m = 0,
                g = 0,
                f = 0;
              s % 4 == 0
                ? ((m = -(4 * r) * o), (f = 0))
                : (s - 1) % 4 == 0
                ? ((m = 0), (f = -(4 * r) * o))
                : (s - 2) % 4 == 0
                ? ((m = o + 4 * r * o), (f = o))
                : (s - 3) % 4 == 0 && ((m = -o), (f = 3 * o + 4 * o * r)),
                n && (m = -m),
                h || ((g = m), (m = 0));
              let v = `rotateX(${h ? 0 : -l}deg) rotateY(${
                h ? l : 0
              }deg) translate3d(${m}px, ${g}px, ${f}px)`;
              if (
                (u <= 1 &&
                  u > -1 &&
                  ((c = 90 * s + 90 * u), n && (c = -(90 * s) - 90 * u)),
                t.transform(v),
                d.slideShadows)
              ) {
                let e = h
                    ? t.find(".swiper-slide-shadow-left")
                    : t.find(".swiper-slide-shadow-top"),
                  s = h
                    ? t.find(".swiper-slide-shadow-right")
                    : t.find(".swiper-slide-shadow-bottom");
                0 === e.length &&
                  ((e = (0, i.$)(
                    `<div class="swiper-slide-shadow-${
                      h ? "left" : "top"
                    }"></div>`
                  )),
                  t.append(e)),
                  0 === s.length &&
                    ((s = (0, i.$)(
                      `<div class="swiper-slide-shadow-${
                        h ? "right" : "bottom"
                      }"></div>`
                    )),
                    t.append(s)),
                  e.length && (e[0].style.opacity = Math.max(-u, 0)),
                  s.length && (s[0].style.opacity = Math.max(u, 0));
              }
            }
            if (
              (s.css({
                "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                "-moz-transform-origin": `50% 50% -${o / 2}px`,
                "-ms-transform-origin": `50% 50% -${o / 2}px`,
                "transform-origin": `50% 50% -${o / 2}px`,
              }),
              d.shadow)
            ) {
              if (h)
                e.transform(
                  `translate3d(0px, ${l / 2 + d.shadowOffset}px, ${
                    -l / 2
                  }px) rotateX(90deg) rotateZ(0deg) scale(${d.shadowScale})`
                );
              else {
                let t = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                  s = d.shadowScale,
                  i =
                    d.shadowScale /
                    (1.5 -
                      (Math.sin((2 * t * Math.PI) / 360) / 2 +
                        Math.cos((2 * t * Math.PI) / 360) / 2)),
                  a = d.shadowOffset;
                e.transform(
                  `scale3d(${s}, 1, ${i}) translate3d(0px, ${r / 2 + a}px, ${
                    -r / 2 / i
                  }px) rotateX(-90deg)`
                );
              }
            }
            let u = T.isSafari || T.isWebView ? -o / 2 : 0;
            s.transform(
              `translate3d(0px,0,${u}px) rotateX(${
                this.isHorizontal() ? 0 : c
              }deg) rotateY(${this.isHorizontal() ? -c : 0}deg)`
            );
          },
          setTransition(e) {
            let { $el: t, slides: s } = this;
            s
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
              this.params.cubeEffect.shadow &&
                !this.isHorizontal() &&
                t.find(".swiper-cube-shadow").transition(e);
          },
        },
        V = {
          setTranslate() {
            let { slides: e, rtlTranslate: t } = this;
            for (let s = 0; s < e.length; s += 1) {
              let a = e.eq(s),
                l = a[0].progress;
              this.params.flipEffect.limitRotation &&
                (l = Math.max(Math.min(a[0].progress, 1), -1));
              let r = a[0].swiperSlideOffset,
                n = -180 * l,
                o = n,
                d = 0,
                h = -r,
                p = 0;
              if (
                (this.isHorizontal()
                  ? t && (o = -o)
                  : ((p = h), (h = 0), (d = -o), (o = 0)),
                (a[0].style.zIndex = -Math.abs(Math.round(l)) + e.length),
                this.params.flipEffect.slideShadows)
              ) {
                let e = this.isHorizontal()
                    ? a.find(".swiper-slide-shadow-left")
                    : a.find(".swiper-slide-shadow-top"),
                  t = this.isHorizontal()
                    ? a.find(".swiper-slide-shadow-right")
                    : a.find(".swiper-slide-shadow-bottom");
                0 === e.length &&
                  ((e = (0, i.$)(
                    `<div class="swiper-slide-shadow-${
                      this.isHorizontal() ? "left" : "top"
                    }"></div>`
                  )),
                  a.append(e)),
                  0 === t.length &&
                    ((t = (0, i.$)(
                      `<div class="swiper-slide-shadow-${
                        this.isHorizontal() ? "right" : "bottom"
                      }"></div>`
                    )),
                    a.append(t)),
                  e.length && (e[0].style.opacity = Math.max(-l, 0)),
                  t.length && (t[0].style.opacity = Math.max(l, 0));
              }
              a.transform(
                `translate3d(${h}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`
              );
            }
          },
          setTransition(e) {
            let t = this,
              { slides: s, activeIndex: i, $wrapperEl: a } = t;
            if (
              (s
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
              t.params.virtualTranslate && 0 !== e)
            ) {
              let e = !1;
              s.eq(i).transitionEnd(function () {
                if (e || !t || t.destroyed) return;
                (e = !0), (t.animating = !1);
                let s = ["webkitTransitionEnd", "transitionend"];
                for (let e = 0; e < s.length; e += 1) a.trigger(s[e]);
              });
            }
          },
        },
        Y = {
          setTranslate() {
            let {
                width: e,
                height: t,
                slides: s,
                $wrapperEl: a,
                slidesSizesGrid: l,
              } = this,
              r = this.params.coverflowEffect,
              o = this.isHorizontal(),
              d = this.translate,
              h = o ? -d + e / 2 : -d + t / 2,
              p = o ? r.rotate : -r.rotate,
              c = r.depth;
            for (let e = 0, t = s.length; e < t; e += 1) {
              let t = s.eq(e),
                a = l[e],
                n = t[0].swiperSlideOffset,
                d = ((h - n - a / 2) / a) * r.modifier,
                u = o ? p * d : 0,
                m = o ? 0 : p * d,
                g = -c * Math.abs(d),
                f = r.stretch;
              "string" == typeof f &&
                -1 !== f.indexOf("%") &&
                (f = (parseFloat(r.stretch) / 100) * a);
              let v = o ? 0 : f * d,
                b = o ? f * d : 0,
                w = 1 - (1 - r.scale) * Math.abs(d);
              0.001 > Math.abs(b) && (b = 0),
                0.001 > Math.abs(v) && (v = 0),
                0.001 > Math.abs(g) && (g = 0),
                0.001 > Math.abs(u) && (u = 0),
                0.001 > Math.abs(m) && (m = 0),
                0.001 > Math.abs(w) && (w = 0);
              let y = `translate3d(${b}px,${v}px,${g}px)  rotateX(${m}deg) rotateY(${u}deg) scale(${w})`;
              if (
                (t.transform(y),
                (t[0].style.zIndex = -Math.abs(Math.round(d)) + 1),
                r.slideShadows)
              ) {
                let e = o
                    ? t.find(".swiper-slide-shadow-left")
                    : t.find(".swiper-slide-shadow-top"),
                  s = o
                    ? t.find(".swiper-slide-shadow-right")
                    : t.find(".swiper-slide-shadow-bottom");
                0 === e.length &&
                  ((e = (0, i.$)(
                    `<div class="swiper-slide-shadow-${
                      o ? "left" : "top"
                    }"></div>`
                  )),
                  t.append(e)),
                  0 === s.length &&
                    ((s = (0, i.$)(
                      `<div class="swiper-slide-shadow-${
                        o ? "right" : "bottom"
                      }"></div>`
                    )),
                    t.append(s)),
                  e.length && (e[0].style.opacity = d > 0 ? d : 0),
                  s.length && (s[0].style.opacity = -d > 0 ? -d : 0);
              }
            }
            if (n.pointerEvents || n.prefixedPointerEvents) {
              let e = a[0].style;
              e.perspectiveOrigin = `${h}px 50%`;
            }
          },
          setTransition(e) {
            this.slides
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e);
          },
        },
        N = {
          init() {
            let { thumbs: e } = this.params,
              t = this.constructor;
            e.swiper instanceof t
              ? ((this.thumbs.swiper = e.swiper),
                r.extend(this.thumbs.swiper.originalParams, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }),
                r.extend(this.thumbs.swiper.params, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }))
              : r.isObject(e.swiper) &&
                ((this.thumbs.swiper = new t(
                  r.extend({}, e.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  })
                )),
                (this.thumbs.swiperCreated = !0)),
              this.thumbs.swiper.$el.addClass(
                this.params.thumbs.thumbsContainerClass
              ),
              this.thumbs.swiper.on("tap", this.thumbs.onThumbClick);
          },
          onThumbClick() {
            let e;
            let t = this.thumbs.swiper;
            if (!t) return;
            let s = t.clickedIndex,
              a = t.clickedSlide;
            if (
              !(
                a &&
                (0, i.$)(a).hasClass(this.params.thumbs.slideThumbActiveClass)
              ) &&
              null != s
            ) {
              if (
                ((e = t.params.loop
                  ? parseInt(
                      (0, i.$)(t.clickedSlide).attr("data-swiper-slide-index"),
                      10
                    )
                  : s),
                this.params.loop)
              ) {
                let t = this.activeIndex;
                this.slides.eq(t).hasClass(this.params.slideDuplicateClass) &&
                  (this.loopFix(),
                  (this._clientLeft = this.$wrapperEl[0].clientLeft),
                  (t = this.activeIndex));
                let s = this.slides
                    .eq(t)
                    .prevAll(`[data-swiper-slide-index="${e}"]`)
                    .eq(0)
                    .index(),
                  i = this.slides
                    .eq(t)
                    .nextAll(`[data-swiper-slide-index="${e}"]`)
                    .eq(0)
                    .index();
                e = void 0 === s ? i : void 0 === i ? s : i - t < t - s ? i : s;
              }
              this.slideTo(e);
            }
          },
          update(e) {
            let t = this.thumbs.swiper;
            if (!t) return;
            let s =
                "auto" === t.params.slidesPerView
                  ? t.slidesPerViewDynamic()
                  : t.params.slidesPerView,
              i = this.params.thumbs.autoScrollOffset,
              a = i && !t.params.loop;
            if (this.realIndex !== t.realIndex || a) {
              let l,
                r,
                n = t.activeIndex;
              if (t.params.loop) {
                t.slides.eq(n).hasClass(t.params.slideDuplicateClass) &&
                  (t.loopFix(),
                  (t._clientLeft = t.$wrapperEl[0].clientLeft),
                  (n = t.activeIndex));
                let e = t.slides
                    .eq(n)
                    .prevAll(`[data-swiper-slide-index="${this.realIndex}"]`)
                    .eq(0)
                    .index(),
                  s = t.slides
                    .eq(n)
                    .nextAll(`[data-swiper-slide-index="${this.realIndex}"]`)
                    .eq(0)
                    .index();
                (l =
                  void 0 === e
                    ? s
                    : void 0 === s
                    ? e
                    : s - n == n - e
                    ? n
                    : s - n < n - e
                    ? s
                    : e),
                  (r = this.activeIndex > this.previousIndex ? "next" : "prev");
              } else
                r = (l = this.realIndex) > this.previousIndex ? "next" : "prev";
              a && (l += "next" === r ? i : -1 * i),
                t.visibleSlidesIndexes &&
                  0 > t.visibleSlidesIndexes.indexOf(l) &&
                  (t.params.centeredSlides
                    ? (l =
                        l > n
                          ? l - Math.floor(s / 2) + 1
                          : l + Math.floor(s / 2) - 1)
                    : l > n && (l = l - s + 1),
                  t.slideTo(l, e ? 0 : void 0));
            }
            let l = 1,
              r = this.params.thumbs.slideThumbActiveClass;
            if (
              (this.params.slidesPerView > 1 &&
                !this.params.centeredSlides &&
                (l = this.params.slidesPerView),
              this.params.thumbs.multipleActiveThumbs || (l = 1),
              (l = Math.floor(l)),
              t.slides.removeClass(r),
              t.params.loop || (t.params.virtual && t.params.virtual.enabled))
            )
              for (let e = 0; e < l; e += 1)
                t.$wrapperEl
                  .children(`[data-swiper-slide-index="${this.realIndex + e}"]`)
                  .addClass(r);
            else
              for (let e = 0; e < l; e += 1)
                t.slides.eq(this.realIndex + e).addClass(r);
          },
        },
        j = [
          { name: "device", proto: { device: d }, static: { device: d } },
          { name: "support", proto: { support: n }, static: { support: n } },
          { name: "browser", proto: { browser: T }, static: { browser: T } },
          {
            name: "resize",
            create() {
              let e = this;
              r.extend(e, {
                resize: {
                  resizeHandler() {
                    e &&
                      !e.destroyed &&
                      e.initialized &&
                      (e.emit("beforeResize"), e.emit("resize"));
                  },
                  orientationChangeHandler() {
                    e &&
                      !e.destroyed &&
                      e.initialized &&
                      e.emit("orientationchange");
                  },
                },
              });
            },
            on: {
              init() {
                a.u9.addEventListener("resize", this.resize.resizeHandler),
                  a.u9.addEventListener(
                    "orientationchange",
                    this.resize.orientationChangeHandler
                  );
              },
              destroy() {
                a.u9.removeEventListener("resize", this.resize.resizeHandler),
                  a.u9.removeEventListener(
                    "orientationchange",
                    this.resize.orientationChangeHandler
                  );
              },
            },
          },
          {
            name: "observer",
            params: {
              observer: !1,
              observeParents: !1,
              observeSlideChildren: !1,
            },
            create() {
              r.extend(this, {
                observer: {
                  init: C.init.bind(this),
                  attach: C.attach.bind(this),
                  destroy: C.destroy.bind(this),
                  observers: [],
                },
              });
            },
            on: {
              init() {
                this.observer.init();
              },
              destroy() {
                this.observer.destroy();
              },
            },
          },
          {
            name: "virtual",
            params: {
              virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0,
              },
            },
            create() {
              r.extend(this, {
                virtual: {
                  update: E.update.bind(this),
                  appendSlide: E.appendSlide.bind(this),
                  prependSlide: E.prependSlide.bind(this),
                  removeSlide: E.removeSlide.bind(this),
                  removeAllSlides: E.removeAllSlides.bind(this),
                  renderSlide: E.renderSlide.bind(this),
                  slides: this.params.virtual.slides,
                  cache: {},
                },
              });
            },
            on: {
              beforeInit() {
                if (!this.params.virtual.enabled) return;
                this.classNames.push(
                  `${this.params.containerModifierClass}virtual`
                );
                let e = { watchSlidesProgress: !0 };
                r.extend(this.params, e),
                  r.extend(this.originalParams, e),
                  this.params.initialSlide || this.virtual.update();
              },
              setTranslate() {
                this.params.virtual.enabled && this.virtual.update();
              },
            },
          },
          {
            name: "keyboard",
            params: {
              keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
            },
            create() {
              r.extend(this, {
                keyboard: {
                  enabled: !1,
                  enable: S.enable.bind(this),
                  disable: S.disable.bind(this),
                  handle: S.handle.bind(this),
                },
              });
            },
            on: {
              init() {
                this.params.keyboard.enabled && this.keyboard.enable();
              },
              destroy() {
                this.keyboard.enabled && this.keyboard.disable();
              },
            },
          },
          {
            name: "mousewheel",
            params: {
              mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container",
              },
            },
            create() {
              r.extend(this, {
                mousewheel: {
                  enabled: !1,
                  enable: $.enable.bind(this),
                  disable: $.disable.bind(this),
                  handle: $.handle.bind(this),
                  handleMouseEnter: $.handleMouseEnter.bind(this),
                  handleMouseLeave: $.handleMouseLeave.bind(this),
                  animateSlider: $.animateSlider.bind(this),
                  releaseScroll: $.releaseScroll.bind(this),
                  lastScrollTime: r.now(),
                  lastEventBeforeSnap: void 0,
                  recentWheelEvents: [],
                },
              });
            },
            on: {
              init() {
                !this.params.mousewheel.enabled &&
                  this.params.cssMode &&
                  this.mousewheel.disable(),
                  this.params.mousewheel.enabled && this.mousewheel.enable();
              },
              destroy() {
                this.params.cssMode && this.mousewheel.enable(),
                  this.mousewheel.enabled && this.mousewheel.disable();
              },
            },
          },
          {
            name: "navigation",
            params: {
              navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
              },
            },
            create() {
              r.extend(this, {
                navigation: {
                  init: M.init.bind(this),
                  update: M.update.bind(this),
                  destroy: M.destroy.bind(this),
                  onNextClick: M.onNextClick.bind(this),
                  onPrevClick: M.onPrevClick.bind(this),
                },
              });
            },
            on: {
              init() {
                this.navigation.init(), this.navigation.update();
              },
              toEdge() {
                this.navigation.update();
              },
              fromEdge() {
                this.navigation.update();
              },
              destroy() {
                this.navigation.destroy();
              },
              click(e) {
                let { $nextEl: t, $prevEl: s } = this.navigation;
                if (
                  this.params.navigation.hideOnClick &&
                  !(0, i.$)(e.target).is(s) &&
                  !(0, i.$)(e.target).is(t)
                ) {
                  let e;
                  t
                    ? (e = t.hasClass(this.params.navigation.hiddenClass))
                    : s && (e = s.hasClass(this.params.navigation.hiddenClass)),
                    !0 === e
                      ? this.emit("navigationShow", this)
                      : this.emit("navigationHide", this),
                    t && t.toggleClass(this.params.navigation.hiddenClass),
                    s && s.toggleClass(this.params.navigation.hiddenClass);
                }
              },
            },
          },
          {
            name: "pagination",
            params: {
              pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: (e) => e,
                formatFractionTotal: (e) => e,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass:
                  "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock",
              },
            },
            create() {
              r.extend(this, {
                pagination: {
                  init: P.init.bind(this),
                  render: P.render.bind(this),
                  update: P.update.bind(this),
                  destroy: P.destroy.bind(this),
                  dynamicBulletIndex: 0,
                },
              });
            },
            on: {
              init() {
                this.pagination.init(),
                  this.pagination.render(),
                  this.pagination.update();
              },
              activeIndexChange() {
                this.params.loop
                  ? this.pagination.update()
                  : void 0 === this.snapIndex && this.pagination.update();
              },
              snapIndexChange() {
                this.params.loop || this.pagination.update();
              },
              slidesLengthChange() {
                this.params.loop &&
                  (this.pagination.render(), this.pagination.update());
              },
              snapGridLengthChange() {
                this.params.loop ||
                  (this.pagination.render(), this.pagination.update());
              },
              destroy() {
                this.pagination.destroy();
              },
              click(e) {
                if (
                  this.params.pagination.el &&
                  this.params.pagination.hideOnClick &&
                  this.pagination.$el.length > 0 &&
                  !(0, i.$)(e.target).hasClass(
                    this.params.pagination.bulletClass
                  )
                ) {
                  let e = this.pagination.$el.hasClass(
                    this.params.pagination.hiddenClass
                  );
                  !0 === e
                    ? this.emit("paginationShow", this)
                    : this.emit("paginationHide", this),
                    this.pagination.$el.toggleClass(
                      this.params.pagination.hiddenClass
                    );
                }
              },
            },
          },
          {
            name: "scrollbar",
            params: {
              scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
              },
            },
            create() {
              r.extend(this, {
                scrollbar: {
                  init: z.init.bind(this),
                  destroy: z.destroy.bind(this),
                  updateSize: z.updateSize.bind(this),
                  setTranslate: z.setTranslate.bind(this),
                  setTransition: z.setTransition.bind(this),
                  enableDraggable: z.enableDraggable.bind(this),
                  disableDraggable: z.disableDraggable.bind(this),
                  setDragPosition: z.setDragPosition.bind(this),
                  getPointerPosition: z.getPointerPosition.bind(this),
                  onDragStart: z.onDragStart.bind(this),
                  onDragMove: z.onDragMove.bind(this),
                  onDragEnd: z.onDragEnd.bind(this),
                  isTouched: !1,
                  timeout: null,
                  dragTimeout: null,
                },
              });
            },
            on: {
              init() {
                this.scrollbar.init(),
                  this.scrollbar.updateSize(),
                  this.scrollbar.setTranslate();
              },
              update() {
                this.scrollbar.updateSize();
              },
              resize() {
                this.scrollbar.updateSize();
              },
              observerUpdate() {
                this.scrollbar.updateSize();
              },
              setTranslate() {
                this.scrollbar.setTranslate();
              },
              setTransition(e) {
                this.scrollbar.setTransition(e);
              },
              destroy() {
                this.scrollbar.destroy();
              },
            },
          },
          {
            name: "parallax",
            params: { parallax: { enabled: !1 } },
            create() {
              r.extend(this, {
                parallax: {
                  setTransform: k.setTransform.bind(this),
                  setTranslate: k.setTranslate.bind(this),
                  setTransition: k.setTransition.bind(this),
                },
              });
            },
            on: {
              beforeInit() {
                this.params.parallax.enabled &&
                  ((this.params.watchSlidesProgress = !0),
                  (this.originalParams.watchSlidesProgress = !0));
              },
              init() {
                this.params.parallax.enabled && this.parallax.setTranslate();
              },
              setTranslate() {
                this.params.parallax.enabled && this.parallax.setTranslate();
              },
              setTransition(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e);
              },
            },
          },
          {
            name: "zoom",
            params: {
              zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed",
              },
            },
            create() {
              let e = this,
                t = {
                  enabled: !1,
                  scale: 1,
                  currentScale: 1,
                  isScaling: !1,
                  gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3,
                  },
                  image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {},
                  },
                  velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0,
                  },
                };
              "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
                .split(" ")
                .forEach((s) => {
                  t[s] = I[s].bind(e);
                }),
                r.extend(e, { zoom: t });
              let s = 1;
              Object.defineProperty(e.zoom, "scale", {
                get: () => s,
                set(t) {
                  if (s !== t) {
                    let s = e.zoom.gesture.$imageEl
                        ? e.zoom.gesture.$imageEl[0]
                        : void 0,
                      i = e.zoom.gesture.$slideEl
                        ? e.zoom.gesture.$slideEl[0]
                        : void 0;
                    e.emit("zoomChange", t, s, i);
                  }
                  s = t;
                },
              });
            },
            on: {
              init() {
                this.params.zoom.enabled && this.zoom.enable();
              },
              destroy() {
                this.zoom.disable();
              },
              touchStart(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e);
              },
              touchEnd(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e);
              },
              doubleTap(e) {
                this.params.zoom.enabled &&
                  this.zoom.enabled &&
                  this.params.zoom.toggle &&
                  this.zoom.toggle(e);
              },
              transitionEnd() {
                this.zoom.enabled &&
                  this.params.zoom.enabled &&
                  this.zoom.onTransitionEnd();
              },
              slideChange() {
                this.zoom.enabled &&
                  this.params.zoom.enabled &&
                  this.params.cssMode &&
                  this.zoom.onTransitionEnd();
              },
            },
          },
          {
            name: "lazy",
            params: {
              lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader",
              },
            },
            create() {
              r.extend(this, {
                lazy: {
                  initialImageLoaded: !1,
                  load: L.load.bind(this),
                  loadInSlide: L.loadInSlide.bind(this),
                },
              });
            },
            on: {
              beforeInit() {
                this.params.lazy.enabled &&
                  this.params.preloadImages &&
                  (this.params.preloadImages = !1);
              },
              init() {
                this.params.lazy.enabled &&
                  !this.params.loop &&
                  0 === this.params.initialSlide &&
                  this.lazy.load();
              },
              scroll() {
                this.params.freeMode &&
                  !this.params.freeModeSticky &&
                  this.lazy.load();
              },
              resize() {
                this.params.lazy.enabled && this.lazy.load();
              },
              scrollbarDragMove() {
                this.params.lazy.enabled && this.lazy.load();
              },
              transitionStart() {
                this.params.lazy.enabled &&
                  (this.params.lazy.loadOnTransitionStart ||
                    (!this.params.lazy.loadOnTransitionStart &&
                      !this.lazy.initialImageLoaded)) &&
                  this.lazy.load();
              },
              transitionEnd() {
                this.params.lazy.enabled &&
                  !this.params.lazy.loadOnTransitionStart &&
                  this.lazy.load();
              },
              slideChange() {
                this.params.lazy.enabled &&
                  this.params.cssMode &&
                  this.lazy.load();
              },
            },
          },
          {
            name: "controller",
            params: {
              controller: { control: void 0, inverse: !1, by: "slide" },
            },
            create() {
              r.extend(this, {
                controller: {
                  control: this.params.controller.control,
                  getInterpolateFunction: O.getInterpolateFunction.bind(this),
                  setTranslate: O.setTranslate.bind(this),
                  setTransition: O.setTransition.bind(this),
                },
              });
            },
            on: {
              update() {
                this.controller.control &&
                  this.controller.spline &&
                  ((this.controller.spline = void 0),
                  delete this.controller.spline);
              },
              resize() {
                this.controller.control &&
                  this.controller.spline &&
                  ((this.controller.spline = void 0),
                  delete this.controller.spline);
              },
              observerUpdate() {
                this.controller.control &&
                  this.controller.spline &&
                  ((this.controller.spline = void 0),
                  delete this.controller.spline);
              },
              setTranslate(e, t) {
                this.controller.control && this.controller.setTranslate(e, t);
              },
              setTransition(e, t) {
                this.controller.control && this.controller.setTransition(e, t);
              },
            },
          },
          {
            name: "a11y",
            params: {
              a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
              },
            },
            create() {
              let e = this;
              r.extend(e, {
                a11y: {
                  liveRegion: (0, i.$)(
                    `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
                  ),
                },
              }),
                Object.keys(D).forEach((t) => {
                  e.a11y[t] = D[t].bind(e);
                });
            },
            on: {
              init() {
                this.params.a11y.enabled &&
                  (this.a11y.init(), this.a11y.updateNavigation());
              },
              toEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation();
              },
              fromEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation();
              },
              paginationUpdate() {
                this.params.a11y.enabled && this.a11y.updatePagination();
              },
              destroy() {
                this.params.a11y.enabled && this.a11y.destroy();
              },
            },
          },
          {
            name: "history",
            params: {
              history: { enabled: !1, replaceState: !1, key: "slides" },
            },
            create() {
              r.extend(this, {
                history: {
                  init: A.init.bind(this),
                  setHistory: A.setHistory.bind(this),
                  setHistoryPopState: A.setHistoryPopState.bind(this),
                  scrollToSlide: A.scrollToSlide.bind(this),
                  destroy: A.destroy.bind(this),
                },
              });
            },
            on: {
              init() {
                this.params.history.enabled && this.history.init();
              },
              destroy() {
                this.params.history.enabled && this.history.destroy();
              },
              transitionEnd() {
                this.history.initialized &&
                  this.history.setHistory(
                    this.params.history.key,
                    this.activeIndex
                  );
              },
              slideChange() {
                this.history.initialized &&
                  this.params.cssMode &&
                  this.history.setHistory(
                    this.params.history.key,
                    this.activeIndex
                  );
              },
            },
          },
          {
            name: "hash-navigation",
            params: {
              hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
            },
            create() {
              r.extend(this, {
                hashNavigation: {
                  initialized: !1,
                  init: H.init.bind(this),
                  destroy: H.destroy.bind(this),
                  setHash: H.setHash.bind(this),
                  onHashCange: H.onHashCange.bind(this),
                },
              });
            },
            on: {
              init() {
                this.params.hashNavigation.enabled &&
                  this.hashNavigation.init();
              },
              destroy() {
                this.params.hashNavigation.enabled &&
                  this.hashNavigation.destroy();
              },
              transitionEnd() {
                this.hashNavigation.initialized &&
                  this.hashNavigation.setHash();
              },
              slideChange() {
                this.hashNavigation.initialized &&
                  this.params.cssMode &&
                  this.hashNavigation.setHash();
              },
            },
          },
          {
            name: "autoplay",
            params: {
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
              },
            },
            create() {
              let e = this;
              r.extend(e, {
                autoplay: {
                  running: !1,
                  paused: !1,
                  run: G.run.bind(e),
                  start: G.start.bind(e),
                  stop: G.stop.bind(e),
                  pause: G.pause.bind(e),
                  onVisibilityChange() {
                    "hidden" === document.visibilityState &&
                      e.autoplay.running &&
                      e.autoplay.pause(),
                      "visible" === document.visibilityState &&
                        e.autoplay.paused &&
                        (e.autoplay.run(), (e.autoplay.paused = !1));
                  },
                  onTransitionEnd(t) {
                    e &&
                      !e.destroyed &&
                      e.$wrapperEl &&
                      t.target === this &&
                      (e.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        e.autoplay.onTransitionEnd
                      ),
                      e.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        e.autoplay.onTransitionEnd
                      ),
                      (e.autoplay.paused = !1),
                      e.autoplay.running
                        ? e.autoplay.run()
                        : e.autoplay.stop());
                  },
                },
              });
            },
            on: {
              init() {
                this.params.autoplay.enabled &&
                  (this.autoplay.start(),
                  document.addEventListener(
                    "visibilitychange",
                    this.autoplay.onVisibilityChange
                  ));
              },
              beforeTransitionStart(e, t) {
                this.autoplay.running &&
                  (t || !this.params.autoplay.disableOnInteraction
                    ? this.autoplay.pause(e)
                    : this.autoplay.stop());
              },
              sliderFirstMove() {
                this.autoplay.running &&
                  (this.params.autoplay.disableOnInteraction
                    ? this.autoplay.stop()
                    : this.autoplay.pause());
              },
              touchEnd() {
                this.params.cssMode &&
                  this.autoplay.paused &&
                  !this.params.autoplay.disableOnInteraction &&
                  this.autoplay.run();
              },
              destroy() {
                this.autoplay.running && this.autoplay.stop(),
                  document.removeEventListener(
                    "visibilitychange",
                    this.autoplay.onVisibilityChange
                  );
              },
            },
          },
          {
            name: "effect-fade",
            params: { fadeEffect: { crossFade: !1 } },
            create() {
              r.extend(this, {
                fadeEffect: {
                  setTranslate: B.setTranslate.bind(this),
                  setTransition: B.setTransition.bind(this),
                },
              });
            },
            on: {
              beforeInit() {
                if ("fade" !== this.params.effect) return;
                this.classNames.push(
                  `${this.params.containerModifierClass}fade`
                );
                let e = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                };
                r.extend(this.params, e), r.extend(this.originalParams, e);
              },
              setTranslate() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate();
              },
              setTransition(e) {
                "fade" === this.params.effect &&
                  this.fadeEffect.setTransition(e);
              },
            },
          },
          {
            name: "effect-cube",
            params: {
              cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: 0.94,
              },
            },
            create() {
              r.extend(this, {
                cubeEffect: {
                  setTranslate: X.setTranslate.bind(this),
                  setTransition: X.setTransition.bind(this),
                },
              });
            },
            on: {
              beforeInit() {
                if ("cube" !== this.params.effect) return;
                this.classNames.push(
                  `${this.params.containerModifierClass}cube`
                ),
                  this.classNames.push(
                    `${this.params.containerModifierClass}3d`
                  );
                let e = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: !1,
                  virtualTranslate: !0,
                };
                r.extend(this.params, e), r.extend(this.originalParams, e);
              },
              setTranslate() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate();
              },
              setTransition(e) {
                "cube" === this.params.effect &&
                  this.cubeEffect.setTransition(e);
              },
            },
          },
          {
            name: "effect-flip",
            params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
            create() {
              r.extend(this, {
                flipEffect: {
                  setTranslate: V.setTranslate.bind(this),
                  setTransition: V.setTransition.bind(this),
                },
              });
            },
            on: {
              beforeInit() {
                if ("flip" !== this.params.effect) return;
                this.classNames.push(
                  `${this.params.containerModifierClass}flip`
                ),
                  this.classNames.push(
                    `${this.params.containerModifierClass}3d`
                  );
                let e = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                };
                r.extend(this.params, e), r.extend(this.originalParams, e);
              },
              setTranslate() {
                "flip" === this.params.effect && this.flipEffect.setTranslate();
              },
              setTransition(e) {
                "flip" === this.params.effect &&
                  this.flipEffect.setTransition(e);
              },
            },
          },
          {
            name: "effect-coverflow",
            params: {
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
              },
            },
            create() {
              r.extend(this, {
                coverflowEffect: {
                  setTranslate: Y.setTranslate.bind(this),
                  setTransition: Y.setTransition.bind(this),
                },
              });
            },
            on: {
              beforeInit() {
                "coverflow" === this.params.effect &&
                  (this.classNames.push(
                    `${this.params.containerModifierClass}coverflow`
                  ),
                  this.classNames.push(
                    `${this.params.containerModifierClass}3d`
                  ),
                  (this.params.watchSlidesProgress = !0),
                  (this.originalParams.watchSlidesProgress = !0));
              },
              setTranslate() {
                "coverflow" === this.params.effect &&
                  this.coverflowEffect.setTranslate();
              },
              setTransition(e) {
                "coverflow" === this.params.effect &&
                  this.coverflowEffect.setTransition(e);
              },
            },
          },
          {
            name: "thumbs",
            params: {
              thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs",
              },
            },
            create() {
              r.extend(this, {
                thumbs: {
                  swiper: null,
                  init: N.init.bind(this),
                  update: N.update.bind(this),
                  onThumbClick: N.onThumbClick.bind(this),
                },
              });
            },
            on: {
              beforeInit() {
                let { thumbs: e } = this.params;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
              },
              slideChange() {
                this.thumbs.swiper && this.thumbs.update();
              },
              update() {
                this.thumbs.swiper && this.thumbs.update();
              },
              resize() {
                this.thumbs.swiper && this.thumbs.update();
              },
              observerUpdate() {
                this.thumbs.swiper && this.thumbs.update();
              },
              setTransition(e) {
                let t = this.thumbs.swiper;
                t && t.setTransition(e);
              },
              beforeDestroy() {
                let e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy();
              },
            },
          },
        ];
      void 0 === x.use &&
        ((x.use = x.Class.use), (x.installModule = x.Class.installModule)),
        x.use(j),
        (t.default = x);
    },
  },
]);
