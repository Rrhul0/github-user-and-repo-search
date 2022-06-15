import { Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <h1>Hello there</h1>
            <form action='search'>
                <input placeholder='search here' name='q' />
                <button>Search</button>
            </form>
            <Outlet />
        </>
    )
}
