const assert = require('assert');
const extractUrl = require('../index');
describe('Simple Math Test', () => {
    const str1 = '哈哈：evernote://x.y 213132',
        str2 = '哈哈：www.io.com',
        str3 = '哈哈：www.io.com/hhd/#22?id=2&name=jane',
        all = str1 + '\n' + str2 + '\n' + str3;
    it(`custom protocol: ${str1}`, () => {
        assert.deepEqual(extractUrl(str1), ['evernote://x.y']);
    });
    it(`has no protocol 1: ${str2}`, () => {
        assert.deepEqual(extractUrl(str2), ['www.io.com']);
    });

    it(`has no protocol 2: ${str3}`, () => {
        assert.deepEqual(extractUrl(str3), ['www.io.com/hhd/#22?id=2&name=jane']);
    });


    it(`all: ${all}`, () => {
        assert.deepEqual(extractUrl(all), ['evernote://x.y', 'www.io.com', 'www.io.com/hhd/#22?id=2&name=jane']);
    });

});
