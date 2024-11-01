import { useInputState } from "../../hooks/useInputState";


function HookForm() {

    // const [name, handelChange] = useInputState('hooked bookd');
    // const [email, handelChangeEmail] = useInputState('s');
    const nameState = useInputState("Kyum");
    const emailState = useInputState("");
    const passwordState = useInputState("");


    const handelSubmit = e => {
        e.preventDefault();

        console.log(nameState.value)
        console.log(emailState.value)
        console.log(passwordState.value)
        // console.log(name)
        // console.log(email)

    }
  return (
    <div className="h-screen flex items-center justify-center">
    <div className="space-y-3">
      <h1 className="text-4xl font-bold">Hook From</h1>
      <p>Hook Way to get form data</p>
      <form onSubmit={handelSubmit}>

          <input {...nameState} className="input input-bordered" type="text" name="name"/><br />
          <input {...emailState} className="input input-bordered" type="email" name="email"/><br />
          <input {...passwordState}  className="input input-bordered" type="password" name="password"/><br />
          <br />
          <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
    </div>
  )
}

export default HookForm