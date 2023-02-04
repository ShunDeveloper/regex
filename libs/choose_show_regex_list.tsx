import regex_data from "./type_components"
import basic_regex_list from "../components/basic_regex"
import meta_regex_list from "../components/meta_regex"
import util_regex_list from "../components/util_regex"

const choose_show_regex_list = (
    target_list: string[] = ['basic', 'meta', 'util'],
) => {
    let show_regex_list : regex_data[] = []
    if (target_list.length === 3) {
        show_regex_list.concat(basic_regex_list)
        show_regex_list.concat(meta_regex_list)
        show_regex_list.concat(util_regex_list)
    }
    if (target_list.length === 2) {
        if (target_list[0] === 'basic') {
            show_regex_list.concat(basic_regex_list)

        }
        if (target_list[0] === 'basic' && target_list[1] === 'meta') {
            show_regex_list.concat(basic_regex_list)

        }
        if (target_list[0] === 'basic' && target_list[1] === 'util') {
            show_regex_list.concat(basic_regex_list)

        }
        if (target_list[0] === 'meta' && target_list[1] === 'util') {
            show_regex_list.concat(basic_regex_list)
        }
    }
    if (target_list.length === 1) {
        if (target_list[0] === 'basic') {
            show_regex_list = show_regex_list.concat(basic_regex_list)
        }
        if (target_list[0] === 'meta') {
            show_regex_list = show_regex_list.concat(basic_regex_list)
        }
        if (target_list[0] === 'util') {
            show_regex_list = show_regex_list.concat(basic_regex_list)
        }
    }
    console.log(show_regex_list)
    return show_regex_list
}

export default choose_show_regex_list