import './App.css';
import CounterOne from './CustomHooks/components/CounterOne';
import CounterTwo from './CustomHooks/components/CounterTwo';
import Home from './StateLifting/Home';

function App() {
  return (
    <div className="App">
      {/* State lifting means data pass child to parent and here i described statelifing folder */}
      <Home />
      {/* State lifting means data pass child to parent and here i described statelifing folder  END*/}

      {/* Custom hooks part start */}
      <CounterOne />
      <CounterTwo />
      {/* Custom hooks part end */}
    </div>
  );
}

export default App;
