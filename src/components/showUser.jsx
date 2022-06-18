import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ShowUser({ user }) {
    return (
        <div className='border-2 rounded-md my-2 p-4 flex items-start gap-3'>
            <div className='rounded-full overflow-hidden h-fit text-base mt-1'>
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

export default function ShowUsers({ show, query }) {
    const [users, setUsers] = useState([])

    const host = 'https://api.github.com'
    useEffect(() => {
        if (!users.length && show) {
            fetch(host + '/search/users' + `?q=${query}`)
                .then(res => res.json())
                .then(jsonData => setUsers(jsonData.items))
                .catch(e => console.log('error occoured', e))
        }
    }, [show, query])
    if (!show || !users) return <></>
    return (
        <div className='px-2 overflow-scroll h-full'>
            {users.map(user => (
                <ShowUser key={user.login} user={user} />
            ))}
        </div>
    )
}
