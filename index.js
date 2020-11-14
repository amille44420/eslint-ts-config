const typescriptOverride = require('./getOverride')();

module.exports = {
    extends: [require.resolve('@amille/eslint-config')],
    overrides: [typescriptOverride],
};
