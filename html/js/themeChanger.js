/**
 * Created by zhangchao on 2017/4/24.
 */

window.onload = function () {
    // 测试浏览器是否支持localStorage
    var hasLocalStorage = function () {
        var mod = 'a';
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch (e) {
            return false;
        }
    };

    // 检测浏览器是否支持css变量
    if (hasLocalStorage() && window.CSS && window.CSS.supports && window.CSS.supports('--a', 0)) {

        var themeChanger = document.querySelector('#theme-changer'),
            root = document.querySelector(':root'),
            themeInput = document.querySelector('#theme'),
            currentTheme = localStorage.getItem("theme") || 'default',
            selectOption;


        // show the theme changer
        themeChanger.classList.remove('hidden');

        // 改变主题并保存
        themeInput.addEventListener('change', function (e) {

            // 获取下拉框的值
            selectOption = this.options[this.selectedIndex];

            // 改变当前主题的值为选中的值
            currentTheme = selectOption.value;

            // 渲染页面并保存当前主题的值
            root.className = currentTheme;
            localStorage.setItem('theme', currentTheme);

        });

        // 初始化下拉框的值
        document.querySelector('[value="' + currentTheme + '"]').selected = true;

        // 初始化样式
        root.className = currentTheme;

    } else {
        console.assert(true, '您的当前浏览器不不支持主题的切换');
    }
};
