"use strict";var Jay_intype=!1,Jay={darkModeStatus:function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?$(".menu-darkmode-text").text("深色模式"):$(".menu-darkmode-text").text("浅色模式")},changeTimeInEssay:function(){document.querySelector("#bber")&&document.querySelectorAll("#bber time").forEach((function(e){var t=e,o=t.getAttribute("datetime");t.innerText=bbDiffDate(o,!0),t.style.display="inline"}))},initIndexEssay:function(){document.querySelector("#bber-talk")&&new Swiper(".swiper-container",{direction:"vertical",loop:!0,autoplay:{delay:3e3,pauseOnMouseEnter:!0}})},onlyHome:function(){var e=window.location.pathname;"/"==(e=decodeURIComponent(e))?$(".only-home").attr("style","display: flex"):$(".only-home").attr("style","display: none")},is_Post:function(){return 0<=window.location.href.indexOf("/posts/")},downloadImage:function(e,t){rm.hideRightMenu(),0==rm.downloadimging?(rm.downloadimging=!0,btf.snackbarShow("正在下载中，请稍后",!1,1e4),setTimeout((function(){var o=new Image;o.setAttribute("crossOrigin","anonymous"),o.onload=function(){var e=document.createElement("canvas");e.width=o.width,e.height=o.height,e.getContext("2d").drawImage(o,0,0,o.width,o.height);var n=e.toDataURL("image/png"),a=document.createElement("a"),r=new MouseEvent("click");a.download=t||"photo",a.href=n,a.dispatchEvent(r)},o.src=e,btf.snackbarShow("图片已添加盲水印，请遵守版权协议"),rm.downloadimging=!1}),"10000")):btf.snackbarShow("有正在进行中的下载，请稍后再试")},addNavBackgroundInit:function(){var e=0,t=0;document.body&&(e=document.body.scrollTop),document.documentElement&&(t=document.documentElement.scrollTop),0!=(0<e-t?e:t)&&(document.getElementById("page-header").classList.add("nav-fixed"),document.getElementById("page-header").classList.add("nav-visible"),$("#cookies-window").hide())},addFriendLinksInFooter:function(){fetch("https://fcircle.jayhrn.com/randomfriend?num=3").then((function(e){return e.json()})).then((function(e){for(var t=getArrayItems(e,3),o="",n=0;n<t.length;++n){var a=t[n];o+="<a class='footer-item' href='".concat(a.link,'\'  target="_blank" rel="noopener nofollow">').concat(a.name,"</a>")}o+="<a class='footer-item' href='/link'>查看更多</a>",document.getElementById("friend-links-in-footer").innerHTML=o}))},topPostScroll:function(){var e;document.getElementById("recent-post-top")&&(e=document.getElementById("recent-post-top")).addEventListener("mousewheel",(function(t){var o=-t.wheelDelta/2;e.scrollLeft+=o,document.body.clientWidth<1300&&t.preventDefault()}),!1)},sayhi:function(){document.querySelector("#author-info__sayhi")&&(document.getElementById("author-info__sayhi").innerHTML="👋"+getTimeState()+"！我是")},refreshEssayWaterfall:function(){document.querySelector("#waterfall")&&setTimeout((function(){waterfall("#waterfall"),document.getElementById("waterfall").classList.add("show")}),500)},changeThemeColor:function(e){null!==document.querySelector('meta[name="theme-color"]')&&document.querySelector('meta[name="theme-color"]').setAttribute("content",e)},initThemeColor:function(){var e,t,o;Jay.is_Post()?0===(window.scrollY||document.documentElement.scrollTop)?(e=getComputedStyle(document.documentElement).getPropertyValue("--Jay-main"),Jay.changeThemeColor(e)):(t=getComputedStyle(document.documentElement).getPropertyValue("--Jay-background"),Jay.changeThemeColor(t)):(o=getComputedStyle(document.documentElement).getPropertyValue("--Jay-background"),Jay.changeThemeColor(o))},switchCommentBarrage:function(){document.querySelector(".comment-barrage")&&($(".comment-barrage").is(":visible")?($(".comment-barrage").hide(),$(".menu-commentBarrage-text").text("显示热评"),document.querySelector("#consoleCommentBarrage").classList.remove("on"),localStorage.setItem("commentBarrageSwitch","false")):$(".comment-barrage").is(":hidden")&&($(".comment-barrage").show(),$(".menu-commentBarrage-text").text("关闭热评"),document.querySelector("#consoleCommentBarrage").classList.add("on"),localStorage.removeItem("commentBarrageSwitch"))),rm.hideRightMenu()},scrollTo:function(e){var t=document.querySelector(e).offsetTop;window.scrollTo(0,t-80)},showLoading:function(){document.querySelector("#loading-box").classList.remove("loaded");var e=getComputedStyle(document.documentElement).getPropertyValue("--Jay-card-bg");Jay.changeThemeColor(e)},hideLoading:function(){document.querySelector("#loading-box").classList.add("loaded")},catalogActive:function(){document.querySelector("#category-bar")&&$(".category-bar-item").removeClass("select");let e=document.getElementById("category-bar-items");if(e){e.addEventListener("mousewheel",(function(t){e.scrollLeft-=t.wheelDelta/2,t.preventDefault()}),!1);let t=document.getElementById(decodeURIComponent(window.location.pathname));t&&(t.classList.add("select"),e.scrollLeft=t.offsetLeft-e.offsetLeft-(e.offsetWidth-t.offsetWidth)/2)}}};