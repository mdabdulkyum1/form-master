import { useEffect, useRef } from "react";


function RefForm() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(()=>{
      nameRef.current.focus();
    },[])

    const handelSubmit = e => {
        e.preventDefault();

        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
  return (
    <div className="h-screen flex items-center justify-center">
    <div className="space-y-3">
      <h1 className="text-4xl font-bold">Ref Form</h1>
      <p>Ref Way to get form data</p>
      <form onSubmit={handelSubmit}>

          <input ref={nameRef} defaultValue={"Md Abdul"}  className="input input-bordered" type="text" name="name"/><br />
          <input ref={emailRef} className="input input-bordered" type="email" name="email"/><br />
          <input ref={passwordRef} className="input input-bordered" type="password" name="password"/><br />
          <br />
          <input  className="btn" type="submit" value="Submit" />
      </form>
    </div>
  </div>
  )
}

export default RefForm