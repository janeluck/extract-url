module.exports = function (text, callback) {

    let rules = [
        // 带有协议的类型（应用自定义eg: evernote://x.x）
        /[a-zA-Z]+:\/\/[^\s]+/,

        // 不带协议，以顶级域名结尾
        // todo 补充顶级域名
        /([a-zA-Z0-9]+\.)+(com|cn|jp)[^\s]+/,

        // ip形式
        // ipV4 (1~255).(0~255).(0~255).(0.255)

    ]

};
