/**
 * 文章总览页面标签栏选中样式改变
 */
// 匹配标签页面
if (location.pathname.match('/tags/')) tag_choose();

function tag_choose() {
    // 找出当前标签并添加选中class
    document.querySelectorAll('#tag .lists a').forEach(item => {
        if (decodeURI(window.location.href.split('/')[4]) === item.querySelector('span').innerHTML) {
            item.className += 'checked';
        }
    })
    window.addEventListener('load', function () {
        document.querySelector('.lists a.checked').scrollIntoView();
        document.querySelector('#tag').scrollIntoView();
    });
    document.querySelectorAll('#tag .lists')[0].onmousewheel = function (e) {
        if (e.deltaY > 0) {
            this.scrollLeft += 20;
        } else {
            this.scrollLeft -= 20;
        }
        return false;
    }
}

/**
 * 文章总览页面分类栏选中样式
 */
// 匹配分类页面路径
if (location.pathname.match('/categories/')) category_choose();

function category_choose() {
    // 找出当前分类并添加选中class
    document.querySelectorAll('.category-list .category-list-item').forEach(item => {
        if (decodeURI(window.location.href.split('/')[4]) === item.querySelector('a').innerHTML) {
            item.className += ' checked'
        }
    })
    window.addEventListener('load', function () {
        document.querySelector('.category-list .category-list-item.checked').scrollIntoView();
        document.querySelector('#category').scrollIntoView();
    });
    document.querySelectorAll('#category .lists')[0].onmousewheel = function (e) {
        if (e.deltaY > 0) {
            this.scrollLeft += 20;
        } else {
            this.scrollLeft -= 20;
        }
        return false;
    }
}

/**
 * 引入自定义最新文章
 */
// 确保其他页面第一个不添加
if (location.pathname == '/') newPost();

function newPost() {
    // 获取此类名而不是获取recent-post-item是因为一些插件也会使用recent-post-item类。
    // 所以获取recent-post-info可以确保每一篇都是文章。
    let ls = document.querySelectorAll('.recent-post-info')
    for (let i = 0; i < ls.length; i++) {
        // 如果是置顶则跳过，所以如果最新文章置顶的话就无法添加标志，只会给到置顶下面最新的文章。
        if (ls[i].querySelector('.sticky')) continue;
        let className = '';
        // 封面在右则在左边添加，否则在右边
        // 其实也可以直接放在左边，之所以这样弄是为了避免和分类图标冲突
        if (ls[i].previousSibling.classList.contains('right')) className = 'newestPost-left';
        else className = 'newestPost-right';
        ls[i].innerHTML += '<span class="' + className + '"></span>';
        return
    }
}

