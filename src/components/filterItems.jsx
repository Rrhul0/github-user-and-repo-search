export default function FilterItems({ items, type, name }) {
    return (
        <>
            {items.map(item => {
                return (
                    <label htmlFor={item} key={item} className='block '>
                        <input type={type} id={item} name={name} value={item} className='mx-2 h-4' />
                        {item}
                    </label>
                )
            })}
        </>
    )
}
