import { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import FilterBlock from './components/filterBlock'
import ShowRepos from './components/showRepo'
import ShowUsers from './components/showUser'

export default function Search() {
    const [query, setQuery] = useSearchParams('')
    const [inputValue, setInputValue] = useState(query.get('q') ? query.get('q') : '')
    const navigate = useNavigate()

    const show = ['repo', 'user'].includes(query.get('show')) ? query.get('show') : 'repo'
    const searchQuery = query.get('q') ? query.get('q') : ''
    useEffect(() => {
        if (!searchQuery) navigate('/')
    }, [searchQuery])
    const isUsers = show === 'user'
    const isRepos = show === 'repo'

    if (!searchQuery) return <></>
    return (
        <div id='body' className='flex gap-2 h-screen p-2 overflow-hidden'>
            <div
                id='sideFilterBar'
                className='flex flex-col gap-2 rounded-xl border-2 border-stone-500 basis-1/5 p-2 overflow-scroll'>
                <div className='text-lg rounded-md border border-purple-300 cursor-pointer overflow-hidden'>
                    <div
                        onClick={e => setQuery({ q: searchQuery, show: 'repo' })}
                        className={
                            (isRepos
                                ? 'border-l-[3px] border-l-orange-500 pl-2'
                                : 'pl-[calc(0.5rem+3px)] hover:bg-stone-100 ') +
                            ' border-b border-purple-300 h-10 flex gap-2 items-center'
                        }>
                        <div>
                            <svg
                                aria-hidden='true'
                                className='h-4 w-4'
                                // height='16'
                                viewBox='0 0 16 16'
                                version='1.1'
                                // width='16'
                                data-view-component='true'>
                                <path
                                    fillRule='evenodd'
                                    d='M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z'></path>
                            </svg>
                        </div>
                        Repositories
                    </div>
                    <div
                        onClick={e => setQuery({ q: searchQuery, show: 'user' })}
                        className={
                            (isUsers
                                ? 'border-l-[3px] border-l-orange-500 pl-2'
                                : 'pl-[calc(0.5rem+3px)] hover:bg-stone-100') + ' h-10 flex gap-2 items-center '
                        }>
                        <div>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-4 w-4'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth={2}>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                                />
                            </svg>
                        </div>
                        Users
                    </div>
                </div>
                {isRepos ? (
                    <div id='repoFilter' className=' rounded-xl border-2 border-stone-400 p-2'>
                        <FilterBlock
                            name='Languages'
                            items={['Python', 'Javascript', 'Java', 'C++', 'Rust', 'Kotlin', 'Shift']}
                            type='checkbox'
                        />
                        <FilterBlock
                            name='Forks Counts'
                            items={['Any', '0-10', '11-25', '26-50', '51-100', '101-500', '501-1000', 'more then 1000']}
                            type='radio'
                        />
                        <FilterBlock
                            name='Star Counts'
                            items={['Any', '0-10', '11-25', '26-50', '51-100', '101-500', '501-1000', 'more then 1000']}
                            type='radio'
                        />
                        <FilterBlock
                            name='Created Time'
                            items={[
                                'Today',
                                'Yesterday',
                                'Last 7 Days',
                                'This Month',
                                'This Year',
                                'Last Year',
                                'Last 5 Years',
                                'Last 10 Years',
                                'Older then 10 Years',
                            ]}
                            type='radio'
                        />
                        <FilterBlock
                            name='Updated Time'
                            items={[
                                'This Hour',
                                'Last Hour',
                                'Last 5 Hours',
                                'Today',
                                'Yesterday',
                                'Last 7 Days',
                                'This Month',
                                'This Year',
                                'Last Year',
                                'Last 5 Years',
                                'Last 10 Years',
                                'Older then 10 Years',
                            ]}
                            type='radio'
                        />
                    </div>
                ) : (
                    ''
                )}
                {isUsers ? (
                    <div
                        id='userFilter'
                        className={(!isUsers ? 'hidden' : '') + ' rounded-xl border-2 border-stone-400 p-2'}>
                        <FilterBlock
                            name='Repositories Count'
                            items={['0-2', '3-10', '11-25', '26-50', '51-100', '101-500', 'More then 500']}
                            type='radio'
                        />
                        <FilterBlock
                            name='Followers'
                            items={['0-2', '3-10', '11-25', '26-50', '51-100', '101-500', 'More then 500']}
                            type='radio'
                        />
                        <FilterBlock
                            name='Following'
                            items={['0-2', '3-10', '11-25', '26-50', '51-100', '101-500', 'More then 500']}
                            type='radio'
                        />
                        <FilterBlock
                            name='Gists Count'
                            items={['0-2', '3-10', '11-25', '26-50', '51-100', '101-500', 'More then 500']}
                            type='radio'
                        />
                        <FilterBlock
                            name='Created Time'
                            items={[
                                'Today',
                                'Yesterday',
                                'Last 7 Days',
                                'This Month',
                                'This Year',
                                'Last Year',
                                'Last 5 Years',
                                'Last 10 Years',
                                'Older then 10 Years',
                            ]}
                            type='radio'
                        />
                        <FilterBlock
                            name='Updated Time'
                            items={[
                                'This Hour',
                                'Last Hour',
                                'Last 5 Hours',
                                'Today',
                                'Yesterday',
                                'Last 7 Days',
                                'This Month',
                                'This Year',
                                'Last Year',
                                'Last 5 Years',
                                'Last 10 Years',
                                'Older then 10 Years',
                            ]}
                            type='radio'
                        />
                    </div>
                ) : (
                    ''
                )}
            </div>
            <div id='mainSection' className=' flex-auto rounded-xl border-2 border-stone-500 w-10 overflow-hidden'>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        if (!inputValue) return
                        setQuery(new URLSearchParams({ q: inputValue, show: show }))
                    }}
                    className='border-2 focus-within:border-purple-500 rounded-xl w-fit overflow-hidden pl-2 my-4 m-auto h-11'>
                    <input
                        type='text'
                        name='q'
                        className='focus-within:outline-none text-base w-96'
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                    <button className='bg-stone-400 m-1 rounded-xl p-1'>Search</button>
                </form>
                <div id='section' className='border-b-2 border-stone-300 mx-1'></div>
                <div id='showResults' className='h-[calc(100%-5rem)]'>
                    <ShowRepos show={isRepos} query={searchQuery} />
                    <ShowUsers show={isUsers} query={searchQuery} />
                </div>
            </div>
        </div>
    )
}
