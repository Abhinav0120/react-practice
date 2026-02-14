import './App.css'
import Stopwatch from './Stopwatch'
import OptimisedStopwatch from './stopwatchOptimised/Stopwatch'
import MyOptimisedStopwatch from './myStopWatchOptimised/StopWatch'
import Counter from './Counter'
import Calculator from './calculator/Calculator'
import Pagination from './paginationOptimised/Pagination'
import InfiniteScroll from './InfiniteScroll'
import InfiniteScrollPrictice from './InfiniteScrollPrictice'
import Debounce from './debounce'
import DebounceExample from './debouncedUsingHook/DebounceExample'

function App() {

  const data = Array.from({length: 95}, (_, i) => `Item ${i + 1}`)

  return (
    <>
      <Stopwatch />
      <OptimisedStopwatch />
      <MyOptimisedStopwatch />
      <Counter/>
      <Calculator/>
      <Debounce/>
      <DebounceExample/>
      <Pagination data ={data}/>
      {/* <InfiniteScroll /> */}
      <InfiniteScrollPrictice/>
    </>
  )
}

export default App
