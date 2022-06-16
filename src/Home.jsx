import { Outlet, useNavigate } from 'react-router-dom'
import FilterItems from './components/filterItems'

export default function Home() {
    let navigate = useNavigate()
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    // console.log(new URLSearchParams(new FormData(e.target)).toString())
                    const params = new URLSearchParams(new FormData(e.target))
                    if (params.get('q') === '') return
                    navigate('/search?' + params.toString())
                }}
                className='w-fit m-auto my-10'>
                <div className='border-2 focus-within:border-purple-500 rounded-xl w-fit overflow-hidden'>
                    <input type='text' name='q' className='focus-within:outline-none text-base w-96 pl-2' />
                    <button className='bg-stone-400 m-1 rounded-xl p-1'>Search</button>
                </div>
                <div className='flex items-start'>
                    <FilterItems items={['All', 'Repositories', 'Users']} name='homeFilter' type='radio' />
                </div>
            </form>
            <Outlet />
        </div>
    )
}
