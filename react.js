const typescriptOverride = require('./getOverride')({
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
});

module.exports = {
    extends: [require.resolve('@amille/eslint-config/react')],
    overrides: [typescriptOverride],
};
