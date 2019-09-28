const formatThenLint = ['eslint -c .eslintrc.js --fix', 'git add'];
const formatOnly = ['prettier --write', 'git add'];

module.exports = {
    '*.{js,json,ts}': formatThenLint,
    '*.{md}': formatOnly
};
