function SimpleForm() {


    const handelSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
    }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold">SimpleForm</h1>
        <p>Simple Way to get form data</p>
        <form onSubmit={handelSubmit}>

            <input className="input input-bordered" type="text" name="name"/><br />
            <input className="input input-bordered" type="email" name="email"/><br />
            <input className="input input-bordered" type="password" name="password"/><br />
            <br />
            <input  type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default SimpleForm;
