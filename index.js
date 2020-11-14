const typescriptOverride = require('./getOverride')();

module.exports = {
    extends: [require.resolve('@amille/eslint-config')],
    override: [typescriptOverride],
};
