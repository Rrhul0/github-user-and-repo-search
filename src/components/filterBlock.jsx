import { useRef } from 'react'
import FilterItems from './filterItems'

export default function FilterBlock({ name, items, type }) {
    const refBox = useRef(null)
    return (
        <div>
            <button
                onClick={() => {
                    if (refBox.current.style.display === 'block') refBox.current.style.display = 'none'
                    else refBox.current.style.display = 'block'
                }}>
                {name}
            </button>
            <div ref={refBox} className='hidden'>
                <FilterItems items={items} type={type} name={name} />
            </div>
        </div>
    )
}
