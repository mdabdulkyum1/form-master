import { useState } from "react";

function StateFulForm() {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [err, setErr] = useState('')
    const handelSubmit = e => {
        e.preventDefault();

        if(password.length < 6){
            setErr("Please Provide vialed password : (")
        }else{
             setErr('')
            console.log(name)
            console.log(email)
            console.log(password)
        }

    }

    const getName = e => {
        setName(e.target.value)
    }
    const getEmail = e => {
        setEmail(e.target.value)
    }
    const getPassword = e => {
        setPassword(e.target.value)
    }
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold">StateFulForm</h1>
        <p>Simple Way to get form data</p>
        <form onSubmit={handelSubmit}>

            <input onChange={getName} className="input input-bordered" type="text" name="name"/><br />
            <input onChange={getEmail} className="input input-bordered" type="email" name="email"/><br />
            <input onChange={getPassword} className="input input-bordered" type="password" name="password"/><br />
            <br />
            <input  className="btn" type="submit" value="Submit" />

            {
                err ? <p className="text-red-400">{err}</p> : "Successfully sent..."
            }
        </form>
      </div>
    </div>
  )
}

export default StateFulForm