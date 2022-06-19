import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterBlock from './components/filterBlock'
import ShowRepos from './components/showRepo'
import ShowUsers from './components/showUser'

export default function Search() {
    const [query, setQuery] = useSearchParams('')
    const [inputValue, setInputValue] = useState(query.get('q'))

    const searchQuery = query.get('q')
    const show = query.get('show')
    //if show in undefined then add show to query
    useEffect(() => {
        if (!show) setQuery(new URLSearchParams({ q: searchQuery, show: 'repo' }))
    }, [])
    const isUsers = show === 'user'
    const isRepos = show === 'repo'

    return (
        <div id='body' className='flex gap-2 h-screen p-2 overflow-hidden'>
            <div
                id='sideFilterBar'
                className='flex flex-col gap-2 rounded-xl border-2 border-stone-500 basis-1/5 p-2 overflow-scroll'>
                <div className='text-lg rounded-md bg-stone-200 border-2 border-purple-600 cursor-pointer'>
                    <div
                        onClick={e => setQuery({ q: searchQuery, show: 'repo' })}
                        className={
                            (isRepos ? 'bg-stone-400' : ' hover:bg-stone-300') +
                            ' border-b-2 border-blue-400 pl-4 py-2 '
                        }>
                        Repositories
                    </div>
                    <div
                        onClick={e => setQuery({ q: searchQuery, show: 'user' })}
                        className={(isUsers ? 'bg-stone-400' : ' hover:bg-stone-300') + ' pl-4 py-2'}>
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
