import findSubString from '../../code/string/lesson2';

test('寻找符合规定的字符串', () => {
    expect(findSubString('00110011')).toEqual(['0011', '01', '1100', '10', '0011', '01']);
});
