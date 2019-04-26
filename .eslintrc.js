module.exports = {
    'extends': ['standard', 'plugin:jest/recommended'],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
                'MemberExpression': 1
            }
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-new-func': 0,
        'no-new': 0,
        'object-curly-spacing': ['error', 'never'],
        'operator-linebreak': [2, 'before'],
        'no-control-regex': 0,
        'space-before-function-paren': 0
    }
};
