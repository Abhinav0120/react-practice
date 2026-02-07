import { useMemo, useState } from 'react'

function Pagination({ data = [], itemsPerPage = 10, windowSize = 3 }) {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = useMemo(() => {
        return Math.ceil(data.length / itemsPerPage)
    }, [itemsPerPage, data])

    const currentData = useMemo(() => {
        let start = (currentPage - 1) * itemsPerPage;
        return data.slice(start, start + itemsPerPage)
    }, [data, currentPage])

    const gotoPage = (page) => {
        if (page < 1 || page > totalPages) return
        setCurrentPage(page)
    }

    const visiblePages = useMemo(() => {
        const pages = [];

        const start = Math.max(2, currentPage - windowSize);
        const end = Math.min(totalPages - 1, currentPage + windowSize);

        if (start > 2) pages.push("...");

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (end < totalPages - 1) pages.push("...");

        return pages;

    }, [currentPage, totalPages, windowSize])

    return (<div>
        {/* pagination data */}
        <div>
            <ul>
                {currentData.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </div>

        {/* pagination controls */}
        <div>
            <button disabled={currentPage === 1} onClick={() => gotoPage(currentPage - 1)}>prev</button>

            {/* pages normal way */}
            {/* {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                return <button onClick={() => gotoPage(page)}>{page}</button>
            })} */}

            {/* pages optimized way */}
            {/* first page */}
            <button> 1 </button>

            {/* middle pages */}
            {visiblePages.map((page, index) => page === "..." ? <span key={index}>...</span>
                :
                <button
                    key={index}
                    onClick={() => gotoPage(page)}
                >
                    {page}
                </button>
            )}

            {/* last page */}
            <button
            onClick={() => gotoPage(totalPages)}>{totalPages}</button>

            <button disabled={currentPage === totalPages} onClick={() => gotoPage(currentPage + 1)}>next</button>
        </div>
    </div>)
}

export default Pagination;
