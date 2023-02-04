import regex_data from "./type_components"

// 重複ありのリストを重複を消しSortする関数

const remove_dups_and_sort = (string_array: string[]) =>  {
    return Array.from(new Set(string_array)).sort();
}

const create_tag_list_from_regex_list = (regex_list: regex_data[]) => {
    let tags_list: string[] = []
    regex_list.map((regix_i: regex_data) => {
        regix_i.tag.map((tag_ij) => {
            tags_list.push(tag_ij)
        })
    });
    return tags_list
}

const create_unique_tag_list_from_regex_list = (regex_list: regex_data[]) => {
    const tag_list_exist_dups: string[] = create_tag_list_from_regex_list(regex_list)
    return remove_dups_and_sort(tag_list_exist_dups)
}

export default create_unique_tag_list_from_regex_list