## use-mod.js

- framework `mod.js`
- fis3 plugin
    - fis3-hook-commonjs 本地解析替换路径，为合并做准备
    - fis3-postpackager-loader 解析 fis3 的 {
    "res": {
        "comp/1-0/1-0.js": {
            "uri": "/static/comp/1-0/1-0.js",
            "type": "js",
            "extras": {
                "moduleId": "comp/1-0/1-0"
            },
            "deps": [
                "comp/cal/cal.js"
            ]
        },
        "comp/2-0/2-0.js": {
            "uri": "/static/comp/2-0/2-0.js",
            "type": "js",
            "extras": {
                "moduleId": "comp/2-0/2-0"
            }
        },
        "comp/cal/cal.js": {
            "uri": "/static/comp/cal/cal.js",
            "type": "js",
            "extras": {
                "moduleId": "comp/cal/cal"
            },
            "deps": [
                "static/mod.js"
            ]
        },
        "static/mod.js": {
            "uri": "/static/mod.js",
            "type": "js"
        }
    },
    "pkg": {}
} 来加载 js 组件
- command
    - fis3 release  组件分散预览
    - fis3 release prod 资源或者组件进行了合并处理
