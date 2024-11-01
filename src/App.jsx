import SimpleForm from "./components/SimpleForm/SimpleForm"
import StateFulForm from "./components/StateFulForm/StateFulForm"
import RefForm from './components/RefForm/RefForm';
import HookForm from './components/HookFrom/HookForm';


function App() {
  return (
    <div>
      <SimpleForm></SimpleForm>
      <StateFulForm></StateFulForm>
      <RefForm></RefForm>
      <HookForm></HookForm>
    </div>
  )
}

export default App