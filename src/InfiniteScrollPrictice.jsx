import { useEffect, useRef, useState } from "react"

const PAGE_SIZE = 10

const fetchData = (page) =>
    new Promise((resolve) => {
        setTimeout(() => {
            const start = (page - 1) * PAGE_SIZE
            const data = Array.from({ length: PAGE_SIZE }, (_, i) => `Item ${start + i + 1}`)
            resolve(data);
        }, 800)
    })

function InfiniteScrollPrictice() {
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [hasMore, setHasMore] = useState()
    const [loading, setIsLoding] = useState(false)

    const obserVerRef = useRef(null);
    const fetchedPages = useRef(new Set());


    useEffect(() => {
        setIsLoding(true);
        console.log('running effect')

        if(fetchedPages.current.has(page)) return;

        fetchedPages.current.add(page);

        fetchData(page).then((data) => {
            setIsLoding(false)
            if (data.length === 0) {
                setHasMore(false)
            }
            setData((prev) => [...prev, ...data])
            setHasMore(true)
        }).catch((err) => {
            setIsLoding(false)
        })
    }, [page])

    useEffect(() => console.log(loading), [loading])

    useEffect(
        () => {
            if (loading || !hasMore) return

            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        setPage((prev) => prev + 1)
                    }
                },
                { threshold: 1 })

            if (obserVerRef?.current)
                observer.observe(obserVerRef.current)

            return () => observer.disconnect()

        }, [hasMore, loading])

    return (<div>
        <ul>
            {data.map((item, index) => <li key={`infine_${index}`} ref={index === data.length - 1 ? obserVerRef : null}>{item}</li>)}
        </ul>
        {loading && <p>loading...</p>}
        {hasMore && <p>hasMore</p>}
    </div>)
}

export default InfiniteScrollPrictice