import { Link } from 'react-router-dom'

export default function ShowUser({ user }) {
    return (
        <div className='border-2 rounded-md my-2 p-4 flex gap-3'>
            <div className='rounded-full overflow-hidden h-fit text-base'>
                <Link to={'/user/' + user.login}>
                    <img src={user.avatar_url + '&s=40'} width='20' height='20' />
                </Link>
            </div>
            <div>
                <div className='flex items-start gap-4'>
                    <Link to={'/user/' + user.login} className='hover:underline text-blue-500 font-semibold'>
                        <h3>{user.name}</h3>
                    </Link>
                    <Link to={'/user/' + user.login} className='hover:underline text-stone-500'>
                        <h3>{user.login}</h3>
                    </Link>
                </div>
                {user.bio ? <p>{user.bio}</p> : ''}
                <div>
                    {user.location ? <p>{user.location}</p> : ''}
                    {user.email ? <p>{user.email}</p> : ''}
                </div>
            </div>
        </div>
    )
}
