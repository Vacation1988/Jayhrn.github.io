/**
 * 一键申请友链
 */
function addFriendLink() {
    var e = document.getElementsByClassName("el-textarea__inner")[0], t = document.createEvent("HTMLEvents");
    t.initEvent("input", !0, !0), e.value = "昵称：\n网站地址：\n头像图片url：\n描述：\n", e.dispatchEvent(t), Jay.scrollTo("#post-comment"), e.focus(), e.setSelectionRange(-1, -1)
}

/**
 * 修改essay页面时间为相对时间
 */
function bbDiffDate(e, t) {
    var n, r, o, i = 1 < arguments.length && void 0 !== t && t, a = new Date, s = new Date(e),
        u = a.getTime() - s.getTime();
    return i ? (n = u / 864e5, r = u / 36e5, o = u / 6e4, 12 < u / 2592e6 ? s.toLocaleDateString() : 7 <= n ? s.toLocaleDateString().substr(5) : 1 <= n ? parseInt(n) + "" + GLOBAL_CONFIG.date_suffix.day : 1 <= r || 1 <= o ? "最近" : GLOBAL_CONFIG.date_suffix.just) : parseInt(u / 864e5)
}

/**
 * 获取随机三个友链
 * @param e
 * @param t
 * @returns {any[]}
 */
function getArrayItems(e, t) {
    var n = new Array;
    for (var o in e) n.push(e[o]);
    for (var r = new Array, a = 0; a < t && 0 < n.length; a++) {
        var i = Math.floor(Math.random() * n.length);
        r[a] = n[i], n.splice(i, 1)
    }
    return r
}

/**
 * 个人卡片获取时间状态
 * @returns {*}
 */
var getTimeState = function () {
    var e = (new Date).getHours(), t = "";
    return 0 <= e && e <= 5 ? t = "晚安" : 5 < e && e <= 10 ? t = "早上好" : 10 < e && e <= 14 ? t = "中午好" : 14 < e && e <= 18 ? t = "下午好" : 18 < e && e <= 24 && (t = "晚上好"), t
};


/**
 * 设置网页阅读进度
 */
function percent() {
    var e = document.documentElement.scrollTop || window.pageYOffset,
        t = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight,
        o = Math.round(e / t * 100), n = document.querySelector("#percent"),
        r = window.scrollY + document.documentElement.clientHeight,
        a = document.getElementById("post-tools") || document.getElementById("footer");
    a.offsetTop + a.offsetHeight / 2 < r || 90 < o ? (document.querySelector("#nav-totop").classList.add("long"), n.innerHTML = "返回顶部") : (document.querySelector("#nav-totop").classList.remove("long"), n.innerHTML = o), window.onscroll = percent
}

/**
 * 设置导航栏标题
 */
function navTitle() {
    "" === GLOBAL_CONFIG_SITE.title.replace("Jayhrn", "") ? document.getElementById("page-name-text").style.display = "none" : document.querySelector("#page-name-text").innerHTML = document.title.split(" | Jayhrn")[0];
}

/**
 * 显示模式切换
 * @type {{switchDarkMode: navFn.switchDarkMode}}
 */
var navFn = {
    switchDarkMode: function () {
        "light" == ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (activateDarkMode(), saveToLocal.set("theme", "dark", 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night, !1, 2e3)) : (activateLightMode(), saveToLocal.set("theme", "light", 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day, !1, 2e3)), "function" == typeof utterancesTheme && utterancesTheme(), "object" === ("undefined" == typeof FB ? "undefined" : _typeof(FB)) && window.loadFBComment(), window.DISQUS && document.getElementById("disqus_thread").children.length && setTimeout(function () {
            return window.disqusReset()
        }, 200);
        var e, t, o, n = "light" === document.documentElement.getAttribute("data-theme") ? "#363636" : "#F7F7FA";
        document.getElementById("posts-chart") && ((e = postsOption).textStyle.color = n, e.title.textStyle.color = n, e.xAxis.axisLine.lineStyle.color = n, e.yAxis.axisLine.lineStyle.color = n, postsChart.setOption(e)), document.getElementById("tags-chart") && ((t = tagsOption).textStyle.color = n, t.title.textStyle.color = n, t.xAxis.axisLine.lineStyle.color = n, t.yAxis.axisLine.lineStyle.color = n, tagsChart.setOption(t)), document.getElementById("categories-chart") && ((o = categoriesOption).textStyle.color = n, o.title.textStyle.color = n, o.legend.textStyle.color = n, categoriesChart.setOption(o))
    }
};

/**
 * 添加表情包放大功能
 */

// 表情放大
function owoBig() {
    let flag = 1, // 设置节流阀
        owo_time = '', // 设置计时器
        m = 3 // 设置放大倍数
    // 创建盒子
    let div = document.createElement('div');
    // 设置ID
    div.id = 'owo-big';
    // 插入盒子
    let body = document.querySelector('body')
    body.appendChild(div)

    document.getElementById('post-comment').addEventListener('DOMNodeInserted', (dom) => {
        if (dom.target.classList && (dom.target.classList.value == 'OwO-body' || 'tk-comment')) {
            let owo_body = dom.target;

            // 禁用右键（手机端长按会出现右键菜单，为了体验给禁用掉）
            owo_body.addEventListener('contextmenu', e => e.preventDefault())

            // 鼠标移入
            owo_body.addEventListener('mouseover', (e) => {
                if (e.target.tagName == 'LI' && flag) {
                    flag = false;
                    // 移入300毫秒后显示盒子
                    owo_time = setTimeout(() => {
                        let m = 3 // 设置倍数
                        let height = e.path[0].clientHeight * m // 盒子高
                        let width = e.path[0].clientWidth * m // 盒子宽
                        let left = (e.x - e.offsetX) - (width - e.path[0].clientWidth) / 2 // 盒子与屏幕左边距离
                        let top = e.y - e.offsetY // 盒子与屏幕顶部距离

                        div.style.height = height + 'px'
                        div.style.width = width + 'px'
                        div.style.left = left + 'px'
                        div.style.top = top + 'px'
                        div.style.display = 'flex'
                        div.innerHTML = `<img src="${e.target.querySelector('img').src}">`
                    }, 300);
                }
            })

            // 鼠标移出
            owo_body.addEventListener('mouseout', (e) => {
                // 隐藏盒子
                div.style.display = 'none';
                flag = 1
                clearTimeout(owo_time)
            })
        }
    });
}

// 如果当前页有评论就执行函数
if (document.getElementById('post-comment')) owoBig();

function RemoveRewardMask() {
    $(".reward-main").attr("style", "display: none"), $("#quit-box").attr("style", "display: none")
}


document.addEventListener("touchstart", function (e) {
    RemoveRewardMask()
}, !1), $(document).unbind("keydown").bind("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && 67 == e.keyCode && "" != selectTextNow) return btf.snackbarShow("复制成功，复制和转载请标注本文地址"), rm.rightmenuCopyText(selectTextNow), !1
}),document.addEventListener("scroll", btf.throttle(function () {
    Jay.initThemeColor()
}, 200)),window.onkeydown = function (e) {
    123 === e.keyCode && btf.snackbarShow("开发者模式已打开，请遵循GPL协议", !1, 3e3)
}, document.querySelector("#algolia-search").addEventListener("wheel", function (e) {
    e.preventDefault()
}),window.addEventListener("resize", function () {
    document.querySelector("#waterfall") && Jay.refreshEssayWaterfall()
}), document.addEventListener("pjax:send", function () {
    Jay.showLoading()
}), document.addEventListener("pjax:complete", function () {
    addRightMenuClickEvent(),navTitle(),percent(),Jay.topPostScroll(),Jay.catalogActive(), Jay.sayhi(), Jay.addFriendLinksInFooter() , Jay.onlyHome(), Jay.addNavBackgroundInit(), Jay.initIndexEssay(), Jay.changeTimeInEssay(), Jay.refreshEssayWaterfall(), Jay.darkModeStatus(),Jay.hideLoading()
}), $("input").focus(function () {
    Jay_intype = !0
}), $("textarea").focus(function () {
    Jay_intype = !0
}), $("input").focusout(function () {
    Jay_intype = !1
}), $("textarea").focusout(function () {
    Jay_intype = !1
});






