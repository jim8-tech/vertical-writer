(function(n) {
    function e(e) {
        for (var r, c, u = e[0], l = e[1], a = e[2], f = 0, s = []; f < u.length; f++)
            c = u[f],
            Object.prototype.hasOwnProperty.call(o, c) && o[c] && s.push(o[c][0]),
            o[c] = 0;
        for (r in l)
            Object.prototype.hasOwnProperty.call(l, r) && (n[r] = l[r]);
        p && p(e);
        while (s.length)
            s.shift()();
        return i.push.apply(i, a || []),
        t()
    }
    function t() {
        for (var n, e = 0; e < i.length; e++) {
            for (var t = i[e], r = !0, u = 1; u < t.length; u++) {
                var l = t[u];
                0 !== o[l] && (r = !1)
            }
            r && (i.splice(e--, 1),
            n = c(c.s = t[0]))
        }
        return n
    }
    var r = {}
      , o = {
        app: 0
    }
      , i = [];
    function c(e) {
        if (r[e])
            return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, c),
        t.l = !0,
        t.exports
    }
    c.m = n,
    c.c = r,
    c.d = function(n, e, t) {
        c.o(n, e) || Object.defineProperty(n, e, {
            enumerable: !0,
            get: t
        })
    }
    ,
    c.r = function(n) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }
    ,
    c.t = function(n, e) {
        if (1 & e && (n = c(n)),
        8 & e)
            return n;
        if (4 & e && "object" === typeof n && n && n.__esModule)
            return n;
        var t = Object.create(null);
        if (c.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: n
        }),
        2 & e && "string" != typeof n)
            for (var r in n)
                c.d(t, r, function(e) {
                    return n[e]
                }
                .bind(null, r));
        return t
    }
    ,
    c.n = function(n) {
        var e = n && n.__esModule ? function() {
            return n["default"]
        }
        : function() {
            return n
        }
        ;
        return c.d(e, "a", e),
        e
    }
    ,
    c.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }
    ,
    c.p = "/verticalEditor/";
    var u = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = u.push.bind(u);
    u.push = e,
    u = u.slice();
    for (var a = 0; a < u.length; a++)
        e(u[a]);
    var p = l;
    i.push([0, "chunk-vendors"]),
    t()
}
)({
    0: function(n, e, t) {
        n.exports = t("56d7")
    },
    "56d7": function(n, e, t) {
        "use strict";
        t.r(e);
        t("e260"),
        t("e6cf"),
        t("cca6"),
        t("a79d");
        var r = t("2b0e")
          , o = function() {
            var n = this
              , e = n.$createElement
              , t = n._self._c || e;
            return t("div", {
                attrs: {
                    id: "app"
                }
            }, [t("VerticalEditor")], 1)
        }
          , i = []
          , c = function() {
            var n = this
              , e = n.$createElement
              , t = n._self._c || e;
            return t("editor-content", {
                staticClass: "editor",
                attrs: {
                    editor: n.editor
                }
            })
        }
          , u = []
          , l = t("cd42")
          , a = t("f23d")
          , p = {
            components: {
                EditorContent: l["b"]
            },
            data: function() {
                return {
                    editor: new l["a"]({
                        extensions: [new a["a"], new a["c"], new a["e"], new a["f"], new a["g"]({
                            levels: [1, 2, 3]
                        }), new a["k"], new a["l"], new a["m"], new a["n"], new a["b"], new a["d"], new a["i"], new a["j"], new a["h"]],
                        content: "\n          <h1>美しい日本語</h1>\n          <h2>草枕</h2>\n          <p>山路を登りながら、こう考えた。</p>\n          <p>智に働けば角が立つ。情に掉させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。</p>\n          <p>住みにくさが高じると、安いところへ引き越したくなる。どこへ越しても住みにくいと悟ったとき、詩が生れて、絵ができる。</p>\n\n          <h2>東京の坂道</h2>\n          <ul>\n            <li>乃木坂</li>\n            <li>けやき坂</li>\n            <li>日向坂</li>\n          </ul>\n          <h2>徒然草</h2>\n          <h3>折節の移り変るこそ、ものごとにあはれなれ。</h3>\n          <p>さて、冬枯のけしきこそ、秋にはをさをさ劣るまじけれ。汀の草に紅葉の散り止りて、霜いと白うおける朝、遣水より烟の立つこそをかしけれ。年の暮れ果てて、人ごとに急ぎあへるころぞ、またなくあはれなる。すさまじきものにして見る人もなき月の寒けく澄める、廿日余りの空こそ、心ぼそきものなれ。御仏名、荷前の使立つなどぞ、あはれにやんごとなき。公事ども繁く、春の急ぎにとり重ねて催し行はるるさまぞ、いみじきや。追儺より四方拝に続くこそ面白けれ。晦日の夜、いたう闇きに、松どもともして、夜半過ぐるまで、人の、門叩き、走りありきて、何事にかあらん、ことことしくのゝしりて、足を空に惑ふが、暁がたより、さすがに音なくなりぬるこそ、年の名残も心ぼそけれ。亡き人のくる夜とて魂祭るわざは、このごろ都にはなきを、東のかたには、なほする事にてありしこそ、あはれなりしか。</p>\n          <p>かくて明けゆく空のけしき、昨日に変りたりとは見えねど、ひきかへめづらしき心地ぞする。大路のさま、松立てわたして、はなやかにうれしげなるこそ、またあはれなれ。</p>\n          "
                    })
                }
            },
            beforeDestroy: function() {
                this.editor.destroy()
            }
        }
          , f = p
          , s = (t("b5e3"),
        t("2877"))
          , d = Object(s["a"])(f, c, u, !1, null, null, null)
          , h = d.exports
          , b = {
            name: "app",
            components: {
                VerticalEditor: h
            }
        }
          , w = b
          , v = (t("5c0b"),
        Object(s["a"])(w, o, i, !1, null, null, null))
          , y = v.exports;
        r["a"].config.productionTip = !1,
        new r["a"]({
            render: function(n) {
                return n(y)
            }
        }).$mount("#app")
    },
    "5c0b": function(n, e, t) {
        "use strict";
        var r = t("9c0c")
          , o = t.n(r);
        o.a
    },
    "9c0c": function(n, e, t) {},
    b5e3: function(n, e, t) {
        "use strict";
        var r = t("d415")
          , o = t.n(r);
        o.a
    },
    d415: function(n, e, t) {}
});
//# sourceMappingURL=app.5f4e8e80.js.map
