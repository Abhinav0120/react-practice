import { useEffect, useRef, useState } from "react";

const maxPageSize = 10;

const fechData = (page) =>
  new Promise((resolve) => {
    setTimeout(() => {
        let itemStart = (page-1)* maxPageSize
      const data = Array.from(
        { length: maxPageSize },
        (_, i) => `Item-${ itemStart + i + 1}`
      );
      resolve(data);
    }, 800);
  });

function InfiniteScroll() {

   const [data, setData] = useState([]);
   const [page, setPage] = useState(1);
   const [isLoding, setIsLoding] = useState();
   const [hasMore, setHasMore] = useState(true);

   const obserVerRef = useRef(null);

    useEffect(()=>{
        setIsLoding(true)
        fechData(page).then((data)=> {
           console.log('fetchData',data)
            if(data.length === 0){ 
                console.log('No Data', data)
                setHasMore(false)
            }
            else {
                console.log('setting data', data)
                setData( (prev) => [...prev, ...data])
            } 
            setIsLoding(false)
        })
    }, [page])

    useEffect(()=>{
        const observer = new IntersectionObserver(
            (etries) => {
                if(etries[0].isIntersecting){
                    setPage((prev) => prev+1);
                }
            },
            { threshold: 1})

            if(obserVerRef?.current){
                observer.observe(obserVerRef.current)
            }

            return () => observer.disconnect()
        
    },[hasMore, isLoding])

    console.log('data',data);

  return (
    <div>
        <p>InfinteScrolling...</p>
        <ul>
            {data.map((item, index)=>{
                return(
                <li 
                key={index}
                ref={index === data.length -1 ? obserVerRef: null}
                >{item}</li>)
            })}
        </ul>
        {isLoding && <p>loading...</p>}
        {hasMore && <p>More data comming</p>}
    </div>
  );
}

export default InfiniteScroll;
