import { useNavigate } from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate()
    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                const searchQ = new FormData(e.target).get('q')
                if (searchQ === '') return
                navigate('/search?' + new URLSearchParams({ q: searchQ }))
            }}
            className='w-fit m-auto mt-[40vh] border-2 focus-within:border-purple-500 rounded-xl overflow-hidden'>
            <input type='text' name='q' className='focus-within:outline-none text-base w-[50vw] pl-2' />
            <button className='bg-stone-400 m-1 rounded-xl p-1'>Search</button>
        </form>
    )
}
