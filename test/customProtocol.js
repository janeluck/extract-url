const assert = require('assert');
const extractUrl = require('../index');
describe('Simple Math Test', () => {
    const str1 = '哈哈：evernote://x.y 213132',
        str2 = '哈哈：www.io.com',
        str3 = '哈哈：www.io.com/hhd/#22?id=2&name=jane',
        str4 = '吼吼：10.2.23.2',
        all = str1 + '\n' + str2 + '\n' + str3 + '\n' + str4;
    it(`custom protocol: ${str1}`, () => {
        assert.deepEqual(extractUrl(str1), ['evernote://x.y']);
    });
    it(`has no protocol 1: ${str2}`, () => {
        assert.deepEqual(extractUrl(str2), ['www.io.com']);
    });

    it(`has no protocol 2: ${str3}`, () => {
        assert.deepEqual(extractUrl(str3), ['www.io.com/hhd/#22?id=2&name=jane']);
    });

    it(`ipV4: ${str4}`, () => {
        assert.deepEqual(extractUrl(str4), ['10.2.23.2']);
    });

    it(`all: ${all}`, () => {
        assert.deepEqual(extractUrl(all), ['evernote://x.y', 'www.io.com', 'www.io.com/hhd/#22?id=2&name=jane', '10.2.23.2']);
    });

});
