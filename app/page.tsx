import '../styles/globals.css'
import choose_show_regex_list from '../libs/choose_show_regex_list';
import create_unique_tag_list_from_regex_list from '../libs/create_tag_list_from_regex_data';
import regex_data from '../libs/type_components';

export default function Page() {
    const regex_list = choose_show_regex_list(['basic'])
    const tags = create_unique_tag_list_from_regex_list(regex_list)
 
    return (
        <div className="MainContainer">
            <Content
                data = {regex_list}
            />
            <Sidebar
                tags = {tags}
            />
        </div>
    )
}

const Content = (props: {data: regex_data[]}) => {
    return (
        <main className='col-span-3'>
            <h3>
                検索結果
            </h3>
            <div>
                {
                    props.data.map((value,key) => {
                        return (
                            <div key={key} className="rounded-lg py-[3%] pl-[3%] my-[1%] bg-gray-100 w-[80%]">
                                <p>文法: {value.syntax}</p>
                                <p>意味: {value.meaning}</p>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}

const Sidebar = (props: {tags: string[]}) => {
    return (
        <div>
            <h3>Common Tags</h3>
            <Tags
                tags = {['文法','メタ','応用']}
            />
            <h3>ALL Tags</h3>
            <Tags
                tags = {props.tags}
            />
        </div>
    )
}

const Tags = (props: {tags: string[]}) => {
    return (
        <ul>
            {
                props.tags.map((value,key) => {
                    return (
                        <li key={key}>
                            {value}
                        </li>
                    )
                })
            }
        </ul>
    )
}
