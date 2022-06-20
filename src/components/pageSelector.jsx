import { Fragment } from 'react'

export default function PageSelector({ currentPage, totalPages, onPageChange }) {
    return (
        <div className='flex justify-center gap-2 mb-2'>
            <button
                className={
                    (currentPage === 1
                        ? 'text-stone-500 cursor-default '
                        : 'text-purple-500 hover:border-purple-500 ') +
                    ' rounded-lg px-2 flex items-center gap-1 border border-white'
                }
                onClick={() => {
                    if (currentPage === 1) return
                    else onPageChange(currentPage - 1)
                }}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
                </svg>
                Previous
            </button>
            {Array(totalPages)
                .fill(0)
                .map((_, index) => index + 1)
                .filter(value => {
                    if (currentPage === 1) return value < 6 || value > totalPages - 2
                    else if (currentPage === totalPages) return value < 3 || value > totalPages - 5
                    else
                        return (
                            (currentPage - 4 < value && value < currentPage + 4) || value > totalPages - 2 || value < 3
                        )
                })
                .map((pageNo, index, a) => (
                    <Fragment key={pageNo}>
                        {pageNo !== 1 && pageNo !== a[index - 1] + 1 ? <div>...</div> : ''}
                        <button
                            className={
                                (pageNo === currentPage ? ' bg-purple-500 ' : 'hover:border border-purple-500') +
                                ' w-8 h-8 rounded-lg'
                            }
                            onClick={e => onPageChange(Number(e.target.textContent))}>
                            {pageNo}
                        </button>
                    </Fragment>
                ))}
            <button
                className={
                    (currentPage === totalPages
                        ? 'text-stone-500 cursor-default '
                        : 'text-purple-500 hover:border-purple-500 ') +
                    ' rounded-lg px-2 flex items-center gap-1 border border-white'
                }
                onClick={() => {
                    if (currentPage === totalPages) return
                    else onPageChange(currentPage + 1)
                }}>
                Next
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                </svg>
            </button>
        </div>
    )
}
