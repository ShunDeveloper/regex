'use client';

import '../styles/globals.css'
import choose_show_regex_list from '../libs/choose_show_regex_list';
import create_unique_tag_list_from_regex_list from '../libs/create_tag_list_from_regex_data';
import regex_data from '../libs/type_components';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation";
import {useState, useEffect} from 'react'


export default function Page() {
    const [chooseTags, setChooseTags] = useState('')
    const searchParams = useSearchParams()
    const regex_list = choose_show_regex_list(['basic'])
    const tags = create_unique_tag_list_from_regex_list(regex_list)
    const onClickLi = (value: string) => {}
    useEffect(() => {
        console.log(searchParams.get('tag'))
        const tmp = searchParams.get('tag')
        if (null !== tmp) {
            setChooseTags(tmp)
        }
    });
 
    return (
        <div className="MainContainer">
            <Content
                data = {regex_list}
            />
            <Sidebar
                tags = {tags}
                func = {(value: string) => onClickLi(value)}
            />
        </div>
    )
}

const Content = (props: {data: regex_data[]}) => {
    return (
        <div className='col-span-3'>
            <h3>
                検索結果
            </h3>
            <ShowData
                data = {props.data}
            />
        </div>
    )
}

const ShowData = (props: {data: regex_data[]}) => {
    return (
        <div>
            {
                props.data.map((value,key) => {
                    return (
                        <div key={key} className="Card">
                            <p>文法: {value.syntax}</p>
                            <p>意味: {value.meaning}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const Sidebar = (props: {tags: string[], func: Function}) => {
    return (
        <div>
            <h3>Common Tags</h3>
            <Tags
                tags = {['基本文法','メタ文字','応用']}
                func = {props.func}
            />
            <h3>ALL Tags</h3>
            <Tags
                tags = {props.tags}
                func = {(value:string) => props.func(value)}
            />
        </div>
    )
}

const Tags = (props: {tags: string[], func: Function}) => {
    return (
        <ul>
            {
                props.tags.map((value,key) => {
                    return (
                        <Link href ={"/?tag="+value} key={key}>
                            <li onClick={(e) => props.func(e.currentTarget)}>
                                {value}
                            </li>
                        </Link>
                    )
                })
            }
        </ul>
    )
}
