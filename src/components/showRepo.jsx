import { Link } from 'react-router-dom'
import { parseJSON, formatDistanceToNow } from 'date-fns'

export default function ShowRepo({ repo }) {
    return (
        <div className='border-2 rounded-md my-2 p-4'>
            <Link to={'/repo/' + repo.id} className='text-lg text-blue-500 hover:underline'>
                <h3>
                    {repo.owner.login + '/'}
                    <span className=' font-semibold'>{repo.name}</span>
                </h3>
            </Link>
            <div>{repo.description}</div>
            <div id='topicsButtons' className='flex gap-2 items-start my-1'>
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
                <div>{repo.language}</div>
                <div>{repo.license.name}</div>
                <div>{'Updated ' + formatDistanceToNow(parseJSON(repo.updated_at), { addSuffix: true })}</div>
            </div>
        </div>
    )
}
