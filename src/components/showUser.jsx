import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './loading'

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
    const [isLoading, setIsLoading] = useState(true)
    const [isQueryChanged, setIsQueryChanged] = useState(false)

    const host = 'https://api.github.com'

    //set setIsQueryChnage to true when query changes
    useEffect(() => {
        setIsQueryChanged(true)
    }, [query])

    useEffect(() => {
        // dont run when show is false
        if ((!users.length || isQueryChanged) && show) {
            fetch(host + '/search/users' + `?q=${query}`)
                .then(res => res.json())
                .then(jsonData => {
                    setUsers(jsonData.items)
                    setIsLoading(false)
                })
                .catch(e => console.log('error occoured', e))
            setIsQueryChanged(false)
        }
    }, [show, isQueryChanged])

    if (!show) return <></>
    if (isLoading || !users) return <Loading />
    return (
        <div className='px-2 overflow-scroll h-full'>
            {users.map(user => (
                <ShowUser key={user.login} user={user} />
            ))}
        </div>
    )
}
