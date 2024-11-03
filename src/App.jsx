import SimpleForm from "./components/SimpleForm/SimpleForm"
import StateFulForm from "./components/StateFulForm/StateFulForm"
import RefForm from './components/RefForm/RefForm';
import HookForm from './components/HookFrom/HookForm';
import ReusableForm from "./components/ReusableForm/ReusableForm";
import Grandpa from "./components/Grandpa/Grandpa";


function App() {
  return (
    <div>
      <SimpleForm></SimpleForm>
      <StateFulForm></StateFulForm>
      <RefForm></RefForm>
      <HookForm></HookForm>
      <ReusableForm formName={'Profile Update'} submitText={"Update"}>
        <div className="">
           <h1 className="text-4xl font-bold text-green-500">Profile update</h1>
           <p className="font-bold">profile update form</p>
        </div>
      </ReusableForm>
      <ReusableForm formName={'Login'} submitText={'Login'}>
      <div className="">
           <h1 className="text-4xl font-bold text-green-500">Login</h1>
           <p className="font-bold">Login form</p>
        </div>
      </ReusableForm>


      <Grandpa></Grandpa>
    </div>
  )
}

export default App