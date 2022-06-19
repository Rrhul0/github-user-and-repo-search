import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { parseJSON, formatDistanceToNow } from 'date-fns'
import Loading from './loading'

function ShowRepo({ repo }) {
    return (
        <div className='border-2 rounded-md my-2 px-4 py-3'>
            <h3 className='w-fit'>
                <Link to={'/repo/' + repo.id} className='text-lg text-blue-500 hover:underline'>
                    {repo.owner.login + '/'}
                    <span className=' font-semibold'>{repo.name}</span>
                </Link>
            </h3>
            <div>{repo.description}</div>
            <div id='topicsButtons' className='flex gap-2 items-start my-1 overflow-scroll'>
                {repo.topics.map(topic => (
                    <Link
                        to={'/topic/' + topic}
                        key={topic}
                        className='bg-stone-200 text-blue-500 text-sm rounded-xl py-0.5 px-2 hover:bg-blue-500 hover:text-white'>
                        {topic}
                    </Link>
                ))}
            </div>
            <div id='otherInfo' className='flex gap-5 text-sm'>
                <div className='flex gap-1'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={1.2}>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                        />
                    </svg>
                    <div>{repo.stargazers_count}</div>
                </div>
                {repo.language ? <div>{repo.language}</div> : ''}
                {repo.license ? <div>{repo.license?.name}</div> : ''}
                <div>{'Updated ' + formatDistanceToNow(parseJSON(repo.updated_at), { addSuffix: true })}</div>
            </div>
        </div>
    )
}

export default function ShowRepos({ show, query }) {
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isQueryChanged, setIsQueryChanged] = useState(false)

    const host = 'https://api.github.com'

    //set setIsQueryChnage to true when query changes
    useEffect(() => {
        setIsQueryChanged(true)
    }, [query])

    useEffect(() => {
        // dont run when show is false
        //but run when show is true and query changes or when not have older result to show
        if ((!repos.length || isQueryChanged) && show) {
            fetch(host + '/search/repositories' + `?q=${query}`)
                .then(res => res.json())
                .then(jsonData => {
                    setRepos(jsonData.items)
                    setIsLoading(false)
                })
                .catch(e => console.log('error occoured', e))
            setIsQueryChanged(false)
        }
    }, [show, isQueryChanged])

    if (!show) return <></>
    if (isLoading || !repos) return <Loading />
    return (
        <div className='px-2 overflow-scroll h-full'>
            {repos.map(repo => (
                <ShowRepo key={repo.id} repo={repo} />
            ))}
        </div>
    )
}
