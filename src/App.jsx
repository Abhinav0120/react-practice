import './App.css'
import Stopwatch from './Stopwatch'
import OptimisedStopwatch from './stopwatchOptimised/Stopwatch'
import MyOptimisedStopwatch from './myStopWatchOptimised/StopWatch'
import Counter from './Counter'
import Calculator from './calculator/Calculator'

function App() {
  return (
    <>
      <Stopwatch />
      <OptimisedStopwatch />
      <MyOptimisedStopwatch />
      <Counter/>
      <Calculator/>
    </>
  )
}

export default App
