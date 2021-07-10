import Counter from './components/Counter'
import Counter2 from './components/Counter2'
import Displayer from './components/Displayer'
import CounterContextProvider from './hooks/CounterContext'
import NameContextProvider from './hooks/NameContext'

function App() {
  return (
    <div>
      <NameContextProvider>
        <CounterContextProvider>
          <Counter />
          <Counter2 />
          <Displayer />
        </CounterContextProvider>
      </NameContextProvider>
    </div>
  );
}
export default App;