type regix_data = {
    syntax: string
    tag: string[]
    meaning: string
};

const regix_list: regix_data[] = [
    {
        syntax: '.',
        tag: ['1文字', '一文字'],
        meaning: '任意の1文字'
    },
    {
        syntax: '[abc]',
        tag: ['1文字', '一文字'],
        meaning: '指定した1文字(この場合, aまたはbまたはcを指定している)'
    },
]

export default regix_list