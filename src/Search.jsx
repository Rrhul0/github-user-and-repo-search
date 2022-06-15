import { useSearchParams } from 'react-router-dom'
import FilterBlock from './components/filterBlock'
import FilterItems from './components/filterItems'
import ShowRepo from './components/showRepo'

export default function Search() {
    const [query, setQuery] = useSearchParams('')

    const searchQuery = query.get('q')
    const repos = [] // todo...
    return (
        <div id='body' className='flex gap-2 h-screen p-2'>
            <div
                id='sideFilterBar'
                className='flex flex-col gap-2 rounded-xl border-2 border-stone-500 basis-1/5 p-2 overflow-scroll'>
                <div id='repoFilter' className='rounded-xl border-2 border-stone-400 p-2'>
                    <h4>Repositories Filter</h4>
                    <FilterItems items={['Repositories']} type='checkbox' name='repo' />
                    <div className='border-2 rounded-md'>
                        {/* <h4>Filter</h4> */}
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
                </div>
                <div id='userFilter' className='rounded-xl border-2 border-stone-400 p-2'>
                    <h4>Users Filters</h4>
                    <FilterItems items={['Users']} type='checkbox' name='users' />
                    <div className='border-2 rounded-md'>
                        <FilterBlock name='Type' items={['Organisation', 'User']} type='checkbox' />
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
                </div>
            </div>
            <div id='mainSection' className='flex-auto rounded-xl border-2 border-stone-500 p-4'>
                <form className='border-2 focus-within:border-purple-500 rounded-xl w-fit overflow-hidden pl-2 m-auto'>
                    <input type='text' name='q' className='focus-within:outline-none text-base w-96' />
                    <button className='bg-stone-400 m-1 rounded-xl p-1'>Search</button>
                </form>
                <div id='section' className='border-b-2 border-stone-500 mt-4'></div>
                <div id='showResults'>
                    <div id='showRepos'>
                        {repos.map(repo => (
                            <ShowRepo repo={repo} />
                        ))}
                    </div>
                    <div id='showUsers'></div>
                </div>
            </div>
        </div>
    )
}
