import regex_data from "../libs/type_components"

const util_regix_list: regex_data[] = [
    {
        syntax: '.',
        tag: ['1文字', '一文字','任意'],
        meaning: '任意の1文字'
    },
    {
        syntax: '[abc]',
        tag: ['1文字', '一文字','指定'],
        meaning: '指定した1文字(この場合, aまたはbまたはcを指定している)'
    },
    {
        syntax: '[^abc]',
        tag: ['1文字', '一文字','否定'],
        meaning: '指定した文字以外の1文字(この場合, aまたはbまたはc以外を指定している)'
    },
    {
        syntax: '\\meta',
        tag: ['メタ文字', '一文字'],
        meaning: '指定したメタ文字一文字'
    },
    {
        syntax: '\\d',
        tag: ['メタ文字', '一文字', '数字'],
        meaning:  '数字1文字. (半角数字を厳密に指定する場合は[0-9])'
    },
    {
        syntax: '\\D',
        tag: ['メタ文字', '一文字'],
        meaning:  '数字1文字. (半角数字を厳密に指定する場合は[0-9])'
    },
    {
        syntax: '[0-9]',
        tag: ['メタ文字', '一文字', '数字'],
        meaning:  '半角数字1文字.'
    },
    {
        syntax: '[^0-9]',
        tag: ['メタ文字', '一文字', '数字','否定'],
        meaning:  '半角数字以外の1文字.'
    },
    {
        syntax: '[a-z]',
        tag: ['英語小文字', '一文字'],
        meaning:  '半角数字以外の1文字.'
    }
]

export default util_regix_list