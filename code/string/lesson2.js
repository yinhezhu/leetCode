export default str => {
    if (!str || typeof str !== 'string') {
        return 0;
    }
    let result = [];
    let match = (subStr) => {
        let left = subStr.match(/^(0+|1+)/)[0];
        let right;
        if (left[0] === '0') {
            right = '1'.repeat(left.length);
        } else {
            right = '0'.repeat(left.length);
        }
        subStr.startsWith(left + right) && result.push(left + right);
    };

    for (let i = 0, len = str.length - 1; i < len; i++) {
        let r = match(str.slice(i));
        if (r) {
            result.push(r);
        }
    }
    return result;
};
