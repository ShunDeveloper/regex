import regex_data from '../libs/type_components'
import str_arr_uniq from '../libs/create_tag_list_from_regex_data';

// 基本文法のリスト

const basic_regex_list: regex_data[] = [
    {
        syntax: 'abc',
        tag: ['文字列','単語','基本文法'],
        meaning: '任意の文字列: 正規表現は文字列を繋げるのに_等は必要ない'
    },
    {
        syntax: '.',
        tag: ['量指定子','0回','1回','基本文法'],
        meaning: '前のパターンが0回か1回繰り返し'
    },
    {
        syntax: '?',
        tag: ['量指定子','0回','1回','基本文法'],
        meaning: '前のパターンが0回か1回繰り返し'
    },
    {
        syntax: '*',
        tag: ['量指定子','基本文法'],
        meaning: '前のパターンが0回以上の繰り返し'
    },
    {
        syntax: '+',
        tag: ['量指定子','基本文法'],
        meaning: '前のパターンが1回以上の繰り返し'
    },
    {
        syntax: '{n}',
        tag: ['量指定子','基本文法'],
        meaning: '前のパターンがn回の繰り返し'
    },
    {
        syntax: 'a|b',
        tag: ['選択','基本文法'],
        meaning: 'aかbかのいずれか'
    },
    {
        syntax: '(abc)',
        tag: ['グループ化','キャプチャ','基本文法'],
        meaning: 'abcをグループとして扱う(優先度を上げる). 量指定子や選択寄り優先度が高い'
    },
]

export default basic_regex_list