## use-amd

- framework `require.js`
- fis3 plugin
    - fis3-hook-amd 本地解析替换路径，为合并做准备
    - fis3-postpackager-loader 解析 fis3 的 {
    "res": {
        "comp/1-0/1-0.js": {
            "uri": "/static/comp/1-0/1-0.js",
            "type": "js",
            "extras": {
                "moduleId": "comp/1-0/1-0"
            },
            "deps": [
                "static/require.js",
                "comp/cal/cal.js"
            ],
            "pkg": "p0"
        },
        "comp/2-0/2-0.js": {
            "uri": "/static/comp/2-0/2-0.js",
            "type": "js",
            "extras": {
                "moduleId": "comp/2-0/2-0"
            },
            "pkg": "p0"
        },
        "comp/cal/cal.js": {
            "uri": "/static/comp/cal/cal.js",
            "type": "js",
            "extras": {
                "moduleId": "comp/cal/cal"
            },
            "deps": [
                "static/require.js"
            ],
            "pkg": "p0"
        },
        "static/require.js": {
            "uri": "/static/require.js",
            "type": "js",
            "pkg": "p0"
        }
    },
    "pkg": {
        "p0": {
            "uri": "/static/aio.js",
            "type": "js",
            "has": [
                "static/require.js",
                "comp/cal/cal.js",
                "comp/1-0/1-0.js",
                "comp/2-0/2-0.js"
            ]
        }
    }
} 来生成 require.paths 列表，以实现对资源加 md5 或者 cdn 的需求
- command
    - fis3 release  组件分散预览
    - fis3 release prod 资源或者组件进行了合并处理
