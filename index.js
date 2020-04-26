/**
 * Extract the url that can be opened by the browser from the text.
 * 提取符合浏览器打开规则的url
 *
 * @param {string} text 输入的文本
 * @return {Array} 从输入文本中提取到的，符合浏览器打开规则的url数组
 */

module.exports = function (text) {
    let str = text;
    const result = [];
    if (typeof str !== 'string') {
        return result;
    }

    const rules = [
        // 带有协议的类型（应用自定义eg: evernote://x.x）
        /[a-z]+:\/\/[^\s]+/ig,

        // 不带协议，以顶级域名结尾
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
