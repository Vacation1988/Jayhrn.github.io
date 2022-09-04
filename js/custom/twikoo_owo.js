// 如果当前页有评论就执行函数
if (document.getElementById('post-comment')) owoBig();

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