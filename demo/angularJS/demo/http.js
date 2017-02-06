(function(window, document, undefined) {
    'use strict';
    var jsonp = function(url, data, callback) {
        // 1.挂载回调函数
        var cbFuncName = 'my_json_cb_' + Math.random().toString().replace('.', '');
        window[cbFuncName] = callback;
        // 2.将data转换为url字符串的形式
        // {id: 1, name: 'zhangsan'} => id=1&name=zhangsan
        var queryString = url.indexOf('?') == -1 ? '?' : '&';
        for (var key in data) {
            queryString += key + '=' + data[key] + '&';
        }
        // 3.处理url中的回调参数
        queryString += 'callback=' + cbFuncName;
        // 4.创建一个script标签
        var scriptElement = document.createElement('script');
        scriptElement.src = url + queryString;
        // 5.将script标签放到页面中
        document.body.appendChild(scriptElement);
    };
    window.$jsonp = jsonp;
})(window, document);
