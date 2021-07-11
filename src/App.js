import Counter from './components/Counter'
import Counter2 from './components/Counter2'
import Displayer from './components/Displayer'
import CounterContextProvider from './hooks/CounterContext'
import NameContextProvider from './hooks/NameContext'
import UeseEffect from './components/UeseEffect'
import Useref from './components/Useref';
import Usecallback from './components/Usecallback'
import BasicForm from './components/BasicForm'
function App() {
  return (
    <div>
      <NameContextProvider>
        <CounterContextProvider>
          <Counter />
          <Counter2 />
          <Displayer />
          <UeseEffect />
          <Useref />
          <Usecallback />
          <BasicForm />
        </CounterContextProvider>
      </NameContextProvider>
    </div>
  );
}
export default App;