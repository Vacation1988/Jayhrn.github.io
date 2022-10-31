"use strict";

function asyncGeneratorStep(e, n, t, o, i, r, c) {
    try {
        var m = e[r](c), a = m.value
    } catch (e) {
        return void t(e)
    }
    m.done ? n(a) : Promise.resolve(a).then(o, i)
}

function _asyncToGenerator(m) {
    return function () {
        var e = this, c = arguments;
        return new Promise(function (n, t) {
            var o = m.apply(e, c);

            function i(e) {
                asyncGeneratorStep(o, n, t, i, r, "next", e)
            }

            function r(e) {
                asyncGeneratorStep(o, n, t, i, r, "throw", e)
            }

            i(void 0)
        })
    }
}

var rm = {};
rm.stopdragimg = $("img"), rm.stopdragimg.on("dragstart", function () {
    return !1
}), rm.showRightMenu = function (e) {
    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
        t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, o = $("#rightMenu");
    o.css("top", n + "px").css("left", t + "px"), e ? (o.show(), stopMaskScroll()) : o.hide()
}, rm.hideRightMenu = function () {
    rm.showRightMenu(!1), $("#rightmenu-mask").attr("style", "display: none")
};
var rmWidth = $("#rightMenu").width(), rmHeight = $("#rightMenu").height();
rm.reloadrmSize = function () {
    rmWidth = $("#rightMenu").width(), rmHeight = $("#rightMenu").height()
};
var domhref = "", domImgSrc = "", globalEvent = null;

function imageToBlob(e) {
    var t = new Image, o = document.createElement("canvas"), i = o.getContext("2d");
    return t.crossOrigin = "", t.src = e, new Promise(function (n) {
        t.onload = function () {
            o.width = this.naturalWidth, o.height = this.naturalHeight, i.drawImage(this, 0, 0), o.toBlob(function (e) {
                n(e)
            }, "image/png", .75)
        }
    })
}

function copyImage(e) {
    return _copyImage.apply(this, arguments)
}

function _copyImage() {
    return (_copyImage = _asyncToGenerator(regeneratorRuntime.mark(function e(n) {
        var t, o;
        return regeneratorRuntime.wrap(function (e) {
            for (; ;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, imageToBlob(n);
                case 2:
                    t = e.sent, o = new ClipboardItem({"image/png": t}), navigator.clipboard.write([o]);
                case 5:
                case"end":
                    return e.stop()
            }
        }, e)
    }))).apply(this, arguments)
}

function stopMaskScroll() {
    document.getElementById("rightmenu-mask") && document.getElementById("rightmenu-mask").addEventListener("mousewheel", function (e) {
        rm.hideRightMenu()
    }, !1), document.getElementById("rightMenu") && document.getElementById("rightMenu").addEventListener("mousewheel", function (e) {
        rm.hideRightMenu()
    }, !1)
}

window.oncontextmenu = function (e) {
    if (768 < document.body.clientWidth) {
        var n = e.clientX + 10, t = e.clientY, o = $(".rightMenuOther"), i = $(".rightMenuPlugin"),
            r = $("#menu-copytext"), c = $("#menu-pastetext"), m = $("#menu-commenttext"), a = $("#menu-newwindow"),
            u = $("#menu-copylink"), h = $("#menu-copyimg"), d = $("#menu-downloadimg"), s = $("#menu-search"),
            l = $("#menu-searchBaidu"), g = $("#menu-music-toggle"), w = $("#menu-music-back"),
            f = $("#menu-music-forward"), p = $("#menu-music-playlist"), k = $("#menu-music-copyMusicName"),
            y = e.target.href, v = e.target.currentSrc, M = !1;
        return o.show(), globalEvent = e, selectTextNow && window.getSelection() ? (M = !0, r.show(), m.show(), s.show(), l.show()) : (r.hide(), m.hide(), l.hide(), s.hide()), y ? (M = !0, a.show(), u.show(), domhref = y) : (a.hide(), u.hide()), v ? (M = !0, h.show(), d.show(), domImgSrc = v) : (h.hide(), d.hide()), "input" === e.target.tagName.toLowerCase() || "textarea" === e.target.tagName.toLowerCase() ? ( M = !0, c.show()) : c.hide(), "METING-JS" == e.target.nodeName ? ( M = !0, g.show(), w.show(), f.show(), p.show(), k.show()) : (g.hide(), w.hide(), f.hide(), p.hide(), k.hide()), M ? (o.hide(), i.show()) : i.hide(), rm.reloadrmSize(), n + rmWidth > window.innerWidth && (n -= rmWidth + 10), t + rmHeight > window.innerHeight && (t -= t + rmHeight - window.innerHeight), rm.showRightMenu(!0, t, n), $("#rightmenu-mask").attr("style", "display: flex"), !1
    }
}, rm.downloadimging = !1, rm.writeClipImg = function (e) {
    rm.hideRightMenu(), btf.snackbarShow("正在下载中，请稍后", !1, 1e4), 0 == rm.downloadimging && (rm.downloadimging = !0, setTimeout(function () {
        copyImage(e), btf.snackbarShow("复制成功！图片已添加盲水印，请遵守版权协议"), rm.downloadimging = !1
    }, "10000"))
}, rm.switchDarkMode = function () {
    navFn.switchDarkMode(), rm.hideRightMenu(), Jay.darkModeStatus()
}, rm.copyUrl = function (e) {
    $("body").after("<input id='copyVal'></input>");
    var n = e, t = document.getElementById("copyVal");
    t.value = n, t.select(), t.setSelectionRange(0, t.value.length), document.execCommand("copy"), $("#copyVal").remove()
}, rm.rightmenuCopyText = function (e) {
    navigator.clipboard && navigator.clipboard.writeText(e), rm.hideRightMenu()
}, rm.copyPageUrl = function () {
    var e = window.location.href;
    rm.copyUrl(e), btf.snackbarShow("复制本页链接地址成功", !1, 2e3), rm.hideRightMenu()
}, rm.sharePage = function () {
    window.location.href;
    rm.copyUrl(url), btf.snackbarShow("复制本页链接地址成功", !1, 2e3), rm.hideRightMenu()
};
var selectTextNow = "";

function selceText() {
    var e = document.selection ? document.selection.createRange().text : window.getSelection() + "";
    selectTextNow = e || ""
}

function replaceAll(e, n, t) {
    return e.split(n).join(t)
}

function addRightMenuClickEvent() {
    $("#menu-backward").on("click", function () {
        window.history.back(), rm.hideRightMenu()
    }), $("#menu-forward").on("click", function () {
        window.history.forward(), rm.hideRightMenu()
    }), $("#menu-refresh").on("click", function () {
        window.location.reload()
    }), $("#menu-top").on("click", function () {
        btf.scrollToDest(0, 500), rm.hideRightMenu()
    }), $(".menu-link").on("click", rm.hideRightMenu), $("#menu-darkmode").on("click", rm.switchDarkMode), $("#menu-home").on("click", function () {
        window.location.href = window.location.origin
    }), $("#menu-randomPost").on("click", function () {
        toRandomPost()
    }), $("#menu-commentBarrage").on("click", Jay.switchCommentBarrage), $("#rightmenu-mask").on("click", rm.hideRightMenu), $("#rightmenu-mask").contextmenu(function () {
        return rm.hideRightMenu(), !1
    }), $("#menu-translate").on("click", function () {
        rm.hideRightMenu(), document.getElementById("translateLink").click()
    }), $("#menu-copy").on("click", rm.copyPageUrl), $("#menu-pastetext").on("click", rm.pasteText), $("#menu-copytext").on("click", function () {
        rm.rightmenuCopyText(selectTextNow), btf.snackbarShow("复制成功，复制和转载请标注本文地址")
    }), $("#menu-commenttext").on("click", function () {
        rm.rightMenuCommentText(selectTextNow)
    }), $("#menu-newwindow").on("click", function () {
        window.open(domhref), rm.hideRightMenu()
    }), $("#menu-copylink").on("click", rm.copyLink), $("#menu-downloadimg").on("click", function () {
        Jay.downloadImage(domImgSrc, "Jayhrn")
    }), $("#menu-copyimg").on("click", function () {
        rm.writeClipImg(domImgSrc)
    }), $("#menu-searchBaidu").on("click", rm.searchBaidu)
}

document.onmouseup = document.ondbclick = selceText, rm.readClipboard = function () {
    navigator.clipboard && navigator.clipboard.readText().then(function (e) {
        return rm.insertAtCaret(globalEvent.target, e)
    })
}, rm.insertAtCaret = function (e, n) {
    var t, o = e.selectionStart, i = e.selectionEnd;
    document.selection ? (e.focus(), document.selection.createRange().text = n, e.focus()) : o || "0" == o ? (t = e.scrollTop, e.value = e.value.substring(0, o) + n + e.value.substring(i, e.value.length), e.focus(), e.selectionStart = o + n.length, e.selectionEnd = o + n.length, e.scrollTop = t) : (e.value += n, e.focus())
}, rm.pasteText = function () {
    rm.readClipboard();
    rm.hideRightMenu()
}, rm.rightMenuCommentText = function (e) {
    rm.hideRightMenu();
    var n = document.getElementsByClassName("el-textarea__inner")[0], t = document.createEvent("HTMLEvents");
    t.initEvent("input", !0, !0);
    var o = replaceAll(e, "\n", "\n> ");
    n.value = "> " + o + "\n\n", n.dispatchEvent(t);
    var i = document.querySelector("#post-comment").offsetTop;
    window.scrollTo(0, i - 80), n.focus(), n.setSelectionRange(-1, -1), document.getElementById("comment-tips") && document.getElementById("comment-tips").classList.add("show")
}, rm.searchBaidu = function () {
    btf.snackbarShow("即将跳转到百度搜索", !1, 2e3), setTimeout(function () {
        window.open("https://www.baidu.com/s?wd=" + selectTextNow)
    }, "2000"), rm.hideRightMenu()
}, rm.copyLink = function () {
    rm.rightmenuCopyText(domhref), btf.snackbarShow("已复制链接地址")
};