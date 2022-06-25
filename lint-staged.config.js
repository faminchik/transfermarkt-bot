const formatThenLint = ['eslint -c .eslintrc.js --fix'];
const formatOnly = ['prettier --write'];

module.exports = {
    '*.{js,json,ts}': formatThenLint,
    '*.{md}': formatOnly
};
