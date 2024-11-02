

function ReusableForm({formName, submitText="Submit", children}) {
    const handelSubmit = e => {
        e.preventDefault()
    }
  return (
    <div className="h-screen flex items-center justify-center">
    <div className="space-y-3">
      {
        children
      }
      <form onSubmit={handelSubmit}>

          <input className="input input-bordered" type="text" name="name"/><br />
          <input className="input input-bordered" type="email" name="email"/><br />
          <input className="input input-bordered" type="password" name="password"/><br />
          <br />
          <input className="btn" type="submit" value={submitText}/>
      </form>
    </div>
    </div>
  )
}

export default ReusableForm