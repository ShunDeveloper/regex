type regix_data = {
    syntax: string
    tag: string[]
    meaning: string
};

export const regix_list: regix_data[] = [
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
        syntax: 'back slash + meta',
        tag: ['メタ文字', '一文字'],
        meaning: '指定したメタ文字一文字'
    },
    {
        syntax: 'word1 | word2',
        tag: ['任意', '単語'],
        meaning: '指定した単語'
    },
    {
        syntax: 'word1 | word2',
        tag: ['任意', '単語'],
        meaning: '指定した単語のいずれか'
    },
]

const str_arr_uniq= (string_array: string[]) =>  {
    return Array.from(new Set(string_array));
}

let tags_tmp: string[] = []
regix_list.map((regix_i, index, object) => {
    regix_i.tag.map((tag_ij, index2, object2) => {
        tags_tmp.push(tag_ij)
    })
});
export const tags = str_arr_uniq(tags_tmp)