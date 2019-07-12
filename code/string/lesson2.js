export default str => {
    if (!str || typeof str !== 'string') {
        return [];
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
        match(str.slice(i));
    }
    return result;
};
