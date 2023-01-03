import '../styles/globals.css'
import * as data from "../components/regix_dict";

export default function Page() {
    return (
        <div>
            <Title />
            <div className="grid grid-cols-4 p-[3%]">
                <Content />
                <Sidebar />
            </div>
        </div>
    )
}

const Title = () => {
    return (
        <div className='py-[2%] pl-[3%] bg-gray-800'>
            <h1 className="text-gray-50 text-[30px]">
                正規表現検索ページ
            </h1>
            <p className="text-gray-300">
                正規表現をtagや文字列で検索することが出来るサイトです
            </p>
        </div>
    )
}

const Content = () => {
    return (
        <main className='col-span-3'>
            <h3>
                検索結果
            </h3>
            <div>
                {
                    data.regix_list.map((value,key) => {
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

const Sidebar = () => {
    return (
        <div>
            <h3>Tag 検索</h3>
            <Tags />
        </div>
    )
}

const Tags = () => {
    return (
        <ul>
            {
                data.tags.map((value,key) => {
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