import './App.css';
import CounterOne from './CustomHooks/components/CounterOne';
import CounterTwo from './CustomHooks/components/CounterTwo';
import ListGrid from './ListGridView/components/ListGrid';
import Formik from './ReactFormik/components/Formik';
import HookForm from './ReactHookForm/components/HookForm';
import Home from './StateLifting/Home';
import Test from './StyledComponent/components/Test';

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
      {/* react hook form start */}
      <HookForm />
      {/* react formik form start */}
      <Formik />

      {/* styled component */}
      <Test />
      {/* List Grid view */}
      <ListGrid />
    </div>
  );
}

export default App;
