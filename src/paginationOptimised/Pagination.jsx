import { useState, useMemo } from 'react'
function Pagination({ data, itmesPerPage = 10, windowSize = 1 }) {

    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = useMemo(() => {
        return Math.ceil(data.length / itmesPerPage)
    }, [data])

    const pagesToShow = useMemo(() => {

        let pages = []
        const start = Math.max(2, currentPage - windowSize);
        const end = Math.min(totalPages - 1, currentPage + windowSize);

        if (start > 2) {
            pages.push("...")
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }


        if (end < totalPages - 1) {
            pages.push("...")
        }

        return pages;
    }, [currentPage, totalPages, windowSize])

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * itmesPerPage
        const end = currentPage * itmesPerPage

        let pages = data.slice(start, end);
        return pages
    }, [data, itmesPerPage, currentPage])

    return (
        <div>
            {/* Pagination Data */}
            <ul>
                {paginatedData.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            {/* Pagination controls */}
            <div>
                <button onClick={() => setCurrentPage((prev) => prev - 1)}>prev</button>

                <button onClick={() => setCurrentPage(1)}>1</button>

                {
                    pagesToShow.map((item, index) => {
                        return (item === "..." ? <span key={`page${index}`}>...</span> : <button key={`page${index}`} onClick={() => setCurrentPage(item)}> {item} </button>)
                    })
                }

                <button onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>

                <button onClick={() => setCurrentPage((prev) => prev + 1)}>next</button>
            </div>
        </div>
    )
}

export default Pagination