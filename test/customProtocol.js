const assert = require('assert');
const extractUrl = require('../index');
describe('Simple Math Test', () => {
    it('should return true', () => {
        assert.equal(extractUrl('evernote://x.y'), true);
    });
    it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
});
