module.exports = function (text) {
    let str = text;
    const result = [];
    const rules = [
        // 带有协议的类型（应用自定义eg: evernote://x.x）
        /[a-z]+:\/\/[^\s]+/ig,

        // 不带协议，以顶级域名结尾
        // todo 补充顶级域名
        /([a-z0-9]+\.)+(com|org|net|edu|gov|mil)((\/[^\s]*)|(\/?))/ig,

        // ip形式
        // ipV4 (1~255).(0~255).(0~255).(0.255)

    ];

    rules.forEach(function (rule) {
        str = str.replace(rule, function (oldStr, newStr) {
            result.push(oldStr);
            return '';
        })
    });

    return result;
};
